import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

const Entry = () => {
  return (
    <Container className="text-center mt-5">
      <h2>Welcome</h2>
      <p>Choose an option to continue</p>
      <Button color="primary" className="m-2">
        <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
          Login
        </Link>
      </Button>
      <Button color="success" className="m-2">
        <Link to="/register" style={{ color: "#fff", textDecoration: "none" }}>
          Register
        </Link>
      </Button>
    </Container>
  );
};

export default Entry;
