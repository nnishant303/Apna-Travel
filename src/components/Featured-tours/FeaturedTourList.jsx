import React from "react";
import tourData from "../../assets/data/tours";
import TourCard from "../../shared/TourCard";

import { Row, Col } from "reactstrap";

const FeaturedTourList = () => {
  return (
    <>
      <Row>
        {tourData?.map((tour) => (
          <Col lg="3" md="6" sm="6" xs="12" className="mb-4" key={tour.id}>
            <TourCard tour={tour} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeaturedTourList;
