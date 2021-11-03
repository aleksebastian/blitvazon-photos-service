import React from "react";
import styled from "styled-components";

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 1100px) {
    flex-direction: row;
  }
`;

const Thumbnail = styled.img`
  width: 40px;
  height: auto;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
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
        width="40"
        height="40"
      ></Thumbnail>
    ))}
  </ThumbnailWrapper>
);

export default Thumbnails;
