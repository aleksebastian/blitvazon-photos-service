import React from "react";
import styled from "styled-components";

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Thumbnail = styled.img`
  width: 40px;
  height: auto;
  margin: 0 20px 10px 0;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1100px) {
    margin: 10px 10px 0 0;
  }
`;

const selectedThumbnailStyle = {
  border: "1px solid #e77600",
  boxShadow: "0 0 3px 2px rgb(228 121 17 / 50%)",
};

const notSelectedThumbnailStyle = {
  border: "1px solid rgba(0, 0, 0, .4)",
  boxShadow: "none",
};

const Thumbnails = (props) => (
  <ThumbnailWrapper>
    {props.photos.map((photo, i) => (
      <Thumbnail
        style={
          props.primaryPhotoUrl === photo
            ? selectedThumbnailStyle
            : notSelectedThumbnailStyle
        }
        id={i}
        onMouseEnter={(e) => props.setPrimary(e)}
        src={photo}
        key={i}
        alt="Product photo description goes here"
      ></Thumbnail>
    ))}
  </ThumbnailWrapper>
);

export default Thumbnails;
