import React from "react";
import styled from "styled-components";

const ZoomPopoverWrapper = styled.div`
  margin-left: 0.7em;
  border: 1px solid black;
  position: absolute;
  display: inline;
  z-index: 10;
  background-repeat: no-repeat;
  background-size: 1400px 1400px;
  @media screen and (max-width: 1400px) {
    width: 40%;
    height: 40em;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const ZoomPopover = (props) => (
  <ZoomPopoverWrapper
    style={{
      backgroundImage: `url(${props.primaryPhotoUrl})`,
      backgroundPosition: `${-props.coordinates.x * 2}px ${
        -props.coordinates.y * 1.5
      }px`,
    }}
  ></ZoomPopoverWrapper>
);

export default ZoomPopover;
