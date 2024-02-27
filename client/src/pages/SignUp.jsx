import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const notify = () => toast("Signed up successfully! ✔");

  // useFormik => 3 args
  const formik = useFormik({
    // initialValue
    initialValues: {
      full_name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },

    // validationSchema
    validationSchema: Yup.object({
      full_name: Yup.string().required("Full name required"),
      username: Yup.string().required("Username required"),
      email: Yup.string()
        .required("Email required")
        .email("Invalid email format"),
      password: Yup.string()
        .required("Password required")
        .min(8, "Password must be atleast 8 characters")
        .max(16, "Password must not exceed 16 characters"),
      confirm_password: Yup.string()
        .required("Confirm Password required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),

    // onSubmit
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      // fetch API
      fetch("https://moringapair-2lwm.onrender.com/auth/register", {
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
          if (data.error) {
            setError(data.error);
          } else {
            setError(null);
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log("Error in registering user", err);
        });
    },
  });

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card
            className="signup-form p-4"
            style={{ backgroundColor: "#f2f2f2" }}
          >
            <h1 className="text-center mb-4">Sign Up</h1>
            <Form onSubmit={formik.handleSubmit}>
              {error && <div className="error">{error}</div>}
              <FloatingLabel label="Full Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  size="lg"
                  name="full_name"
                  id="full_name"
                  value={formik.values.full_name}
                  onChange={formik.handleChange}
                  autoComplete="off"
                  autoFocus
                />
              </FloatingLabel>
              {formik.touched.full_name && formik.errors.full_name ? (
                <div className="error">{formik.errors.full_name}</div>
              ) : null}

              <FloatingLabel label="Username" className="mb-3 floating-label">
                <Form.Control
                  className="floating-label"
                  type="text"
                  placeholder="Enter your username"
                  size="lg"
                  name="username"
                  id="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
              </FloatingLabel>
              {formik.touched.username && formik.errors.username ? (
                <div className="error">{formik.errors.username}</div>
              ) : null}

              <FloatingLabel label="Email" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  size="lg"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
              </FloatingLabel>
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
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
                  autoComplete="off"
                />
              </FloatingLabel>
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}

              <FloatingLabel label="Confirm Password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirm your password"
                  size="lg"
                  name="confirm_password"
                  id="confirm_password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
              </FloatingLabel>
              {formik.touched.confirm_password &&
              formik.errors.confirm_password ? (
                <div className="error">{formik.errors.confirm_password}</div>
              ) : null}

              <Button
                variant="primary"
                type="submit"
                block
                className="mt-4 signup-btn"
                onClick={notify}
                disabled={!formik.isValid}
              >
                Sign Up Now
              </Button>
              <ToastContainer />
            </Form>

            <p style={{ textDecoration: "Underline", textAlign: "center" }}>
              Already have an account?
            </p>

            <div className="text-center mt-3">
              <Link to="/login">Sign in</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
