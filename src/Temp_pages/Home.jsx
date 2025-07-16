import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ========= hero section start =========*/}
      <section>
        <Container>
          <Row>
            {/* Hero Content Column */}
            <Col lg="6" md="12"> {/* Takes 6 columns on large, full width on medium/small */}
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="World icon representing travel" /> {/* Removed "Icon" */}
                </div>
                <h1>
                  Travelling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore at neque deleniti, quo quos a! Maiores doloribus ullam
                  nihil quis, commodi incidunt, aliquam saepe repellat dicta
                  necessitatibus, sapiente facere doloremque?
                </p>
              </div>
            </Col>

            {/* Hero Image/Video Columns */}
            <Col lg="2" md="4" sm="6" xs="12"> {/* Stacks appropriately on smaller screens */}
              <div className="hero__img-box">
                <img src={heroImg} alt="Scenic travel destination" /> {/* Removed "Hero Image 1" */}
              </div>
            </Col>
            <Col lg="2" md="4" sm="6" xs="12"> {/* Stacks appropriately on smaller screens */}
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="Travel video" controls /> {/* Removed "Hero Video" */}
              </div>
            </Col>
            <Col lg="2" md="4" sm="6" xs="12"> {/* Stacks appropriately on smaller screens */}
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="Another scenic travel destination" /> {/* Removed "Hero Image 2" */}
              </div>
            </Col>

            {/* SearchBar Column - Must be inside a Col */}
            <Col lg="12" className="mt-5"> {/* Takes full width below hero content and images */}
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========= services section ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="3" md="12"> {/* Takes 3 columns on large, full width on medium/small */}
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            {/* Assuming ServiceList handles its own column distribution internally */}
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ========= featured tour section ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            {/* Corrected: FeaturedTourList wrapped in a Col */}
            <Col lg="12">
              <FeaturedTourList />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========= experience section ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="12"> {/* Takes 6 columns on large, full width on medium/small */}
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6" md="12"> {/* Takes 6 columns on large, full width on medium/small */}
              <div className="experience__img">
                <img src={experienceImg} alt="People enjoying a travel experience" /> {/* Removed "Experience Image" */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========= gallery section ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========= testimonial section ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                What our fans say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========= newsletter ========== */}
      <NewsLetter />
    </>
  );
};

export default Home;
