import React, { useState } from "react";
import styled from "styled-components";
import Thumbnails from "./Thumbnails.jsx";

const PhotosModalWrapper = styled.div`
  position: absolute;
  border-color: #d5d9d9;
  box-shadow: 0 0 14px 0 rgba(15, 17, 17, 0.5);
  background: white;
  z-index: 1000;
  border-radius: 8px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 80vw; /* Need a specific value to work */

  @media screen and (max-width: 1100px) {
    display: none;
  }

  -webkit-animation: fadein 0.5s;
  -moz-animation: fadein 0.5s;
  -ms-animation: fadein 0.5s;
  -o-animation: fadein 0.5s;
  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const PhotosModalEl = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 1em 2.5em 2.5em;
`;

const PrimaryPhotoWrapper = styled.div`
  height: auto;
`;

const PrimaryPhoto = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 1400px) {
    max-width: 83%;
  } ;
`;

const ProductInfoWrapper = styled.div`
  padding-top: 0.5em;
  flex-basis: 30%;
  align-self: flex-start;
`;
const ProductInfo = styled.div``;

const ProductTitle = styled.span`
  display: block;
  font-family: verdana, arial, helvetica, sans-serif;
  font-size: 17px;
  margin-bottom: 1.5em;
`;

const ProductColorAndConfiguration = styled.span`
  display: block;
  font-family: verdana, arial, helvetica, sans-serif;
  font-size: 12px;
  color: #767676;
  margin-bottom: 1em;
`;

const X = styled.span`
  font-family: "Amazon Ember", Arial, sans-serif;
  display: block;
  margin-left: 97%;
  margin-top: 1.5em;
  cursor: pointer;
`;

const ThumbnailsWrapper = styled.div`
  margin-top: 2em;
`;

const PhotosModal = (props) => {
  let [openModal, setModal] = useState(false);
  return (
    <PhotosModalWrapper>
      <X onClick={() => props.toggleModal()}>x</X>
      <PhotosModalEl>
        <PrimaryPhotoWrapper>
          <PrimaryPhoto src={props.primaryPhotoUrl}></PrimaryPhoto>
        </PrimaryPhotoWrapper>
        <ProductInfoWrapper>
          <ProductInfo>
            <ProductTitle>{props.productInfo.name}</ProductTitle>
            <ProductColorAndConfiguration>
              Color: {props.productInfo.color}
            </ProductColorAndConfiguration>
            <ProductColorAndConfiguration>
              Configuration: {props.productInfo.configuration}
            </ProductColorAndConfiguration>
          </ProductInfo>
          <ThumbnailsWrapper>
            <Thumbnails
              setPrimary={props.setPrimary}
              primaryPhotoUrl={props.primaryPhotoUrl}
              photos={props.photos}
            />
          </ThumbnailsWrapper>
        </ProductInfoWrapper>
      </PhotosModalEl>
    </PhotosModalWrapper>
  );
};

export default PhotosModal;
