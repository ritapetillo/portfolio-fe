import React from "react";
import { Col } from "../../styles/uielements";
import { QuoteContainer } from "./quote.elements";

const Quote = () => {
  return (
    <QuoteContainer>
      <Col sm={12} md={8}>
        {/* <h2>
            Web Development is the finest form of art on the web. It gives the
            possibiity of creating a world by just putting together words and
            logics. The only limit is what our brain is capable of thinnking. If
            this is not magic, what it is!
          </h2> */}
        <h2>
          I feel priviledged to be a web developer. I have the power of creating
          the most amazing things by just putting together pieces of logic. The
          only limit is what my brain is capable of thinking. If this is not
          magic, what it is!
        </h2>
        <div className="quote-sign">Rita Petillo</div>
      </Col>
      <Col sm={12} md={6}></Col>
    </QuoteContainer>
  );
};

export default Quote;
