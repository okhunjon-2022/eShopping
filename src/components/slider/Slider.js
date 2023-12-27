import React, { useState } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import {
  Arrow,
  Buttom,
  Container,
  Desc,
  Image,
  ImgContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from "./Slider.styles";
import { slideItems } from "../../data";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  // console.log(slideIndex);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slidexindex={slideIndex}>
        {slideItems.map((item) => (
          <Slide key={item?.id} bg={item?.bg}>
            <ImgContainer>
              <Image src={item?.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item?.title}</Title>
              <Desc>{item?.desc}</Desc>
              <Buttom>SHOW NOW</Buttom>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
