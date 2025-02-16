import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import request from "./request.js";
import Thumbnails from "./components/Thumbnails.jsx";
const ZoomPopover = React.lazy(() => import("./components/ZoomPopover.jsx"));
const PhotosModal = React.lazy(() => import("./components/PhotosModal.jsx"));

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

const PhotosWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    min-width: unset;
    align-items: center;
  }
`;

const PrimaryPhotoWrapper = styled.div``;

const PrimaryPhoto = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: null,
      primaryPhotoUrl: null,
      productPhotosUrls: [],
      productInfo: {},
      zoomModalCoordinates: { x: 0, y: 0 },
      zoom: false,
      modal: false,
    };
    this.setPrimary = this.setPrimary.bind(this);
    this.setCoordinates = this.setCoordinates.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  setPrimary(photo) {
    // let selectedThumbnail = e.target;
    let selectedThumbnailPhotoUrl = photo.target.src;
    let thumbScale = "h_42,c_scale/";
    selectedThumbnailPhotoUrl = selectedThumbnailPhotoUrl.replace(
      thumbScale,
      ""
    );
    this.setState({
      primaryPhotoUrl: selectedThumbnailPhotoUrl,
    });
  }

  setCoordinates(e) {
    let xPos = e.nativeEvent.offsetX;
    let ypos = e.nativeEvent.offsetY;

    this.setState({
      zoomModalCoordinates: { x: xPos, y: ypos },
    });
  }

  toggleZoom() {
    this.setState({
      zoom: !this.state.zoom,
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  async getProductInfo() {
    const productInfo = await request.productInfo(this.state.productId);
    this.setState({
      productInfo: productInfo,
    });
  }

  async componentDidMount() {
    let url = window.location.href;
    let productId = url.split("/")[3] || 1000;
    let loadingItemInfo = {
      name: "loading",
      color: "loading",
      configuration: "loading",
    };
    const productPhotos = await request.photos(productId);
    let thumbScale = "h_42,c_scale/";
    productPhotos.productUrls = productPhotos.productUrls.map((url) =>
      url.replace("upload/", `upload/${thumbScale}`)
    );
    this.setState({
      productId: productId,
      primaryPhotoUrl: productPhotos.primaryUrl,
      productPhotosUrls: productPhotos.productUrls,
      productInfo: loadingItemInfo,
    });
    this.getProductInfo();
  }

  render() {
    const isHovering = this.state.zoom;
    let popover;
    if (isHovering) {
      popover = (
        <Suspense fallback={<div></div>}>
          <ZoomPopover
            primaryPhotoUrl={this.state.primaryPhotoUrl}
            coordinates={this.state.zoomModalCoordinates}
          ></ZoomPopover>
        </Suspense>
      );
    } else {
      popover = null;
    }

    const modalState = this.state.modal;
    let modal;
    if (modalState) {
      modal = (
        <Suspense fallback={<div></div>}>
          <PhotosModal
            productId={this.state.productId}
            primaryPhotoUrl={this.state.primaryPhotoUrl}
            productInfo={this.state.productInfo}
            setPrimary={this.setPrimary}
            photos={this.state.productPhotosUrls}
            toggleModal={this.toggleModal}
          />
        </Suspense>
      );
    } else {
      modal = null;
    }

    return (
      <AppWrapper>
        {modal}
        {this.state.productId ? (
          <PhotosWrapper>
            <Thumbnails
              setPrimary={this.setPrimary}
              primaryPhotoUrl={this.state.primaryPhotoUrl}
              photos={this.state.productPhotosUrls}
            />
            <PrimaryPhotoWrapper>
              <PrimaryPhoto
                onMouseEnter={() => this.toggleZoom()}
                onMouseLeave={() => this.toggleZoom()}
                onClick={() => this.toggleModal()}
                onMouseMove={(e) => this.setCoordinates(e)}
                src={this.state.primaryPhotoUrl}
                alt="primary photo for short product description goes here"
                width="1000"
                height="1000"
              ></PrimaryPhoto>
              {popover}
            </PrimaryPhotoWrapper>
          </PhotosWrapper>
        ) : (
          <div></div>
        )}
      </AppWrapper>
    );
  }
}

ReactDOM.render(<Photos />, document.getElementById("photos"));
