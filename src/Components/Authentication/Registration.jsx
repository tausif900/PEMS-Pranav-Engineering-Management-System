import React from "react";
import { useForm } from "react-hook-form";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const registerUser = async (data) => {
    try {
      const response = await api.post("/user/register", data);
      console.log(response.data);
      alert("Registration done successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const password = watch("password");

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(44, 54, 68, 0.82), rgba(137, 152, 172, 0.75), rgba(140, 158, 178, 0.82)), url('/images/registration-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "30px 15px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* MAIN CARD */}

      <div
        className="row shadow-lg"
        style={{
          width: "1000px",
          maxWidth: "100%",
          minHeight: "620px",
          borderRadius: "24px",
          overflow: "hidden",
          backgroundColor: "rgba(255, 255, 255, 0.35)",
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(12px)",
          position: "relative",
          zIndex: "2",
        }}
      >
        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div
          className="col-lg-5 d-flex flex-column justify-content-between"
          style={{
            background:
              "linear-gradient(145deg, rgba(13, 82, 167, 0.65), rgba(7,88,168,0.65), rgba(13,110,253,0.65))",

            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(15px)",

            padding: "40px",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden",

            borderRight: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.10)",
              left: "-130px",
              bottom: "-80px",
            }}
          ></div>

          {/* BRAND */}

          <div style={{ position: "relative", zIndex: "2" }}>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "800",
                letterSpacing: "1px",
              }}
            >
              PEMS
            </div>

            <div
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                opacity: "0.85",
                marginTop: "-4px",
              }}
            >
              ENGINEERING
            </div>
          </div>

          {/* CENTER CONTENT */}

          <div
            className="text-center"
            style={{
              position: "relative",
              zIndex: "2",
            }}
          >
            <div
              className="mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.13)",
                border: "1px solid rgba(255,255,255,0.25)",
                marginBottom: "22px",
              }}
            >
              <i
                className="bi bi-building-gear"
                style={{
                  fontSize: "42px",
                  color: "#ffffff",
                }}
              ></i>
            </div>

            <h2
              style={{
                fontSize: "29px",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              Welcome to PEMS
            </h2>

            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.82)",
                margin: "0 auto",
                maxWidth: "300px",
              }}
            >
              Create your account and become a part of the PEMS Engineering
              management system.
            </p>
          </div>

          {/* FEATURES */}

          <div
            style={{
              position: "relative",
              zIndex: "2",
            }}
          >
            <div
              className="d-flex align-items-center mb-3"
              style={{
                fontSize: "12px",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255,255,255,0.12)",
                }}
              >
                <i className="bi bi-shield-check"></i>
              </div>
              Secure Department Access
            </div>

            <div
              className="d-flex align-items-center mb-3"
              style={{
                fontSize: "12px",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255,255,255,0.12)",
                }}
              >
                <i className="bi bi-diagram-3"></i>
              </div>
              Manage Operations Efficiently
            </div>

            <div
              className="d-flex align-items-center"
              style={{
                fontSize: "12px",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255,255,255,0.12)",
                }}
              >
                <i className="bi bi-speedometer2"></i>
              </div>
              One Platform for Every Department
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div
          className="col-lg-7"
          style={{
            padding: "38px 45px",
          }}
        >
          {/* HEADER */}

          <div className="d-flex justify-content-between align-items-start mb-4">
            <div>
              <h3
                style={{
                  color: "#061225",
                  fontSize: "25px",
                  fontWeight: "700",
                  marginBottom: "6px",
                }}
              >
                Create Your Account
              </h3>

              <p
                style={{
                  color: "#1c3453",
                  fontSize: "15px",
                  margin: "0",
                }}
              >
                Register to access your department portal
              </p>
            </div>

            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                backgroundColor: "#edf5ff",
                color: "#0d6efd",
              }}
            >
              <i
                className="bi bi-person-plus-fill"
                style={{
                  fontSize: "20px",
                }}
              ></i>
            </div>
          </div>

          {/* FORM */}

          <form onSubmit={handleSubmit(registerUser)}>
            {/* FULL NAME */}

            <div className="mb-3">
              <label
                className="form-label"
                style={{
                  color: "#0f1f36",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Full Name
              </label>
              <div className="input-group">
                <span
                  className="input-group-text"
                  style={{
                    backgroundColor: "#f8fbff",
                    borderColor: "#dce5ef",
                    color: "#0d6efd",
                  }}
                >
                  <i className="bi bi-person"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  style={{
                    backgroundColor: "#f8fbff",
                    borderColor: "#dce5ef",
                    fontSize: "15px",
                    padding: "10px",
                  }}
                  {...register("name", {
                    required: "name is required",
                    minLength: {
                      value: 2,
                      message: "full name must be at least 2 character",
                    },
                    maxLength: {
                      value: 60,
                      message: "maximum 60 characters allow",
                    },
                  })}
                />
              </div>{" "}
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>

            {/* EMAIL + PHONE */}

            <div className="row">
              <div className="col-md-6 mb-3">
                <label
                  className="form-label"
                  style={{
                    color: "#0f1f36",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Email Address
                </label>

                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: "#f8fbff",
                      borderColor: "#dce5ef",
                      color: "#0d6efd",
                    }}
                  >
                    <i className="bi bi-envelope"></i>
                  </span>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    style={{
                      backgroundColor: "#f8fbff",
                      borderColor: "#dce5ef",
                      fontSize: "15px",
                      padding: "10px",
                    }}
                    {...register("email", {
                      required: "email is required",
                      pattern: {
                        value:
                          /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label
                  className="form-label"
                  style={{
                    color: "#0f1f36",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Phone Number
                </label>

                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: "#f8fbff",
                      borderColor: "#dce5ef",
                      color: "#0d6efd",
                    }}
                  >
                    <i className="bi bi-telephone"></i>
                  </span>

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                    style={{
                      backgroundColor: "#f8fbff",
                      borderColor: "#dce5ef",
                      fontSize: "12px",
                      padding: "10px",
                    }}
                    {...register("phoneNumber", {
                      required: "provide a phone number",
                      minLength: {
                        value: 10,
                        message: "number cannot be less than 10 digit",
                      },
                      maxLength: {
                        value: 10,
                        message: "number cannot exceeds after 10 digit",
                      },
                    })}
                  />
                </div>

                {errors.phoneNumber && (
                  <small className="text-danger">{errors.phNo.message}</small>
                )}
              </div>
            </div>

            {/* DEPARTMENT */}

            <div className="mb-3">
              <label
                className="form-label"
                style={{
                  color: "#0f1f36",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Select Department
              </label>

              <div className="input-group">
                <span
                  className="input-group-text"
                  style={{
                    backgroundColor: "#f8fbff",
                    borderColor: "#dce5ef",
                    color: "#0d6efd",
                  }}
                >
                  <i className="bi bi-buildings"></i>
                </span>

                <select
                  className="form-select"
                  defaultValue=""
                  style={{
                    backgroundColor: "#f8fbff",
                    borderColor: "#dce5ef",
                    fontSize: "15px",
                    padding: "10px",
                    color: "#536176",
                  }}
                  {...register("role", {
                    required: "Please select your role",
                  })}
                >
                  <option value="" disabled>
                    Choose your department
                  </option>

                  <option value="ROLE_ADMIN">Admin</option>
                  <option value="ROLE_HR">HR</option>
                  <option value="ROLE_ACCOUNTS">Accounts</option>
                  <option value="ROLE_SALES">Sales</option>
                  <option value="ROLE_PURCHASE">Purchase</option>
                  <option value="ROLE_STOCK">Stock</option>
                  <option value="ROLE_IMPORT">Import</option>
                  <option value="ROLE_EXPORT">Export</option>
                </select>
              </div>
              {errors.role && (
                <small className="text-danger">{errors.role.message}</small>
              )}
            </div>

            {/* PASSWORD */}

            <div className="row">
              <div className="col-md-6 mb-3">
                <label
                  className="form-label"
                  style={{
                    color: "#0f1f36",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Password
                </label>

                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: "#f8fbff",
                      borderColor: "#dce5ef",
                      color: "#0d6efd",
                    }}
                  >
                    <i className="bi bi-lock"></i>
                  </span>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create password"
                    style={{
                      backgroundColor: "#f8fbff",
                      borderColor: "#dce5ef",
                      fontSize: "15px",
                      padding: "10px",
                    }}
                    {...register("password", {
                      required: "password is required",
                      pattern: {
                        value:
                          /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                        message:
                          "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label
                  className="form-label"
                  style={{
                    color: "#0f1f36",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Confirm Password
                </label>

                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: "#f8fbff",
                      borderColor: "#dce5ef",
                      color: "#0d6efd",
                    }}
                  >
                    <i className="bi bi-lock-fill"></i>
                  </span>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                    style={{
                      backgroundColor: "#f8fbff",
                      borderColor: "#dce5ef",
                      fontSize: "15px",
                      padding: "10px",
                    }}
                    {...register("confirmPassword", {
                      required: "confirm password is required",
                      validate: (value) => {
                        return (
                          value === password ||
                          "password and confirm password is not matching"
                        );
                      },
                    })}
                  />
                </div>
                {errors.confirmPassword && (
                  <small className="text-danger">
                    {errors.confirmPassword.message}
                  </small>
                )}
              </div>
            </div>

            {/* TERMS */}

            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="terms" />

              <label
                className="form-check-label"
                htmlFor="terms"
                style={{
                  color: "#0f1f36",
                  fontSize: "12px",
                }}
              >
                I agree to the PEMS terms and conditions.
              </label>
            </div>

            {/* REGISTER BUTTON */}

            <button
              type="submit"
              className="btn w-100"
              style={{
                background: "linear-gradient(90deg, #0758a8, #0d6efd)",
                color: "#ffffff",
                border: "none",
                borderRadius: "9px",
                padding: "11px",
                fontSize: "20px",
                fontWeight: "600",
                boxShadow: "0 6px 15px rgba(13,110,253,0.25)",
              }}
            >
              Create Account
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </form>

          {/* FOOTER */}

          <div
            className="text-center"
            style={{
              marginTop: "18px",
              fontSize: "9px",
              color: "#a0aaba",
            }}
          >
            © 2026 PEMS Engineering · Secure Registration
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
