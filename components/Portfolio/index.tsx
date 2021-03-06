import React from "react";
import { Col, Row } from "../../styles/uielements";
import CardWork from "../CardWork/CardWork";
import { PortfolioContainer, TitlePortfolio } from "./portfolio.elements";
import works from "../../assets/data/works.json";

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <TitlePortfolio>
        <h2>Latest Works</h2>
      </TitlePortfolio>
      <Row>
        {works.map((work, i) => (
          <Col sm={12} md={6}>
            <CardWork work={work} key={i} />
          </Col>
        ))}
      </Row>
    </PortfolioContainer>
  );
};

export default Portfolio;
