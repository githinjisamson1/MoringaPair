import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalAuthContext } from "../context/authContext";

const Login = () => {
  const { authState, dispatchForAuthState } = useGlobalAuthContext();

  const notify = () => toast("Logged in successfully! ✔");

  // for programmatic navigation
  const navigate = useNavigate();

  // formik
  const formik = useFormik({
    // initialValues
    initialValues: {
      username: "",
      password: "",
    },

    // validationSchema
    validationSchema: Yup.object({
      username: Yup.string().required("Username required"),
      password: Yup.string()
        .required("Password required")
        .min(8, "Password must be atleast 8 characters")
        .max(16, "Password must not exceed 16 characters"),
    }),

    // onSubmit
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatchForAuthState({ type: "FETCH_REQUEST" });

      // fetch API
      fetch("https://moringapair-2lwm.onrender.com//auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (response.ok) {
            resetForm();
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          // console.log(data.user)
          // look for another option => bound to CSX attacks
          if (data) {
            localStorage.setItem("access_token", data.tokens.access);
            localStorage.setItem("refresh_token", data.tokens.refresh);
            console.log(data.user);
            dispatchForAuthState({ type: "FETCH_SUCCESS", payload: data.user });

            navigate("/");
          }
        })
        .catch((err) => {
          console.log("Error in logging in user", err);
          dispatchForAuthState({ type: "FETCH_FAILURE", payload: err });
        });
    },
  });

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card
            className=" signin-form p-4"
            style={{ backgroundColor: "#f2f2f2" }}
          >
            <h1 className="text-center mb-4">Login</h1>
            <Form onSubmit={formik.handleSubmit}>
              <FloatingLabel label="Username" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  size="lg"
                  name="username"
                  id="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  autoFocus
                />
              </FloatingLabel>
              {formik.touched.username && formik.errors.username ? (
                <div className="error">{formik.errors.username}</div>
              ) : null}

              <FloatingLabel label="Password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  size="lg"
                  name="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </FloatingLabel>
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}

              <Button
                variant="primary"
                type="submit"
                block
                className="mt-3 signin-btn"
                onClick={notify}
                disabled={!formik.isValid}
              >
                Login Now
              </Button>
              <ToastContainer />
            </Form>
            <p style={{ textDecoration: "Underline", textAlign: "center" }}>
              Don't have an account?
            </p>

            <div className="text-center mt-3">
              <Link to="/signup">Sign up</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
