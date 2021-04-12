import React from "react";
import { Col, Row } from "../../styles/uielements";
import CardWork from "../CardWork/CardWork";
import { PortfolioContainer, TitlePortfolio } from "./portfolio.elements";
import works from "../../assets/data/works.json";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <TitlePortfolio>
        <h2>Latest Works</h2>
      </TitlePortfolio>
      <Row>
        {works.map((work) => (
          <Col sm={12} md={6}>
            <CardWork work={work} />
          </Col>
        ))}
      </Row>
    </PortfolioContainer>
  );
};

export default Portfolio;
