import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { Row, Col, Container } from "react-bootstrap";
import "./home.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  // const auth=useSelector(state=>state.auth)
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user]);
  return (
    <div>
      <Layout>
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink to={"/"}>home</NavLink>
                </li>
                <li>
                  <NavLink to={"/product"}>product</NavLink>
                </li>
                <li>
                  <NavLink to={"/order"}>order</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto" }}>
              container
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Home;
