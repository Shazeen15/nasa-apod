import React from "react";
import styled from "styled-components";

const HdImg = styled.img`
  width: 300px;
`;

const Container = styled.div`
  &.container {
    margin: 5%;
  }

  .explanation {
    padding: 5%;
  }
`;

const Header = styled.header`
  background: pink;

  .title {
    margin: 0;
    padding: 2%;
  }

  .date {
    margin: 0;
    padding: 2%;
  }
`;

const DomCard = ({ imgInfo }) => {
  return (
    <div>
      <Header>
        <p className="date">Picture of the Day for {imgInfo.date}</p>
        <h1 className="title">{imgInfo.title}</h1>
      </Header>

      <Container className="container">
        <HdImg src={imgInfo.hdurl} alt="" />
        <p className="explanation">{imgInfo.explanation}</p>
      </Container>
    </div>
  );
};

export default DomCard;
