import React from "react";
import { Container } from "./styles";

import bgImage from '../../assets/image/Rectangle.png'

function Home() {
  return (
    <Container>
      <section className="Section-1">
        <div className="background-image">
          <img src={bgImage} alt="Dog image" />
        </div>
      </section>
    </Container>
  );
}

export default Home;
