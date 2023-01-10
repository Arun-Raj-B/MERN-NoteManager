import React, { useEffect } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../features/users/userLoginSlice";

const Header = ({ setSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {}, [userInfo]);

  const logoutHandler = () => {
    dispatch(userLogout());
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Note Maker
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {userInfo && (
            <>
              <Nav
                className="m-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link
                    to="mynotes"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    My Notes
                  </Link>
                </Nav.Link>
                <NavDropdown title={userInfo.name} id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => {
                      logoutHandler();
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e)=>setSearch(e.target.value)}
                />
              </Form>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
