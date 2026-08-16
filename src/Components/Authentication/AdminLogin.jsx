import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2, 25, 48, 0.72), rgba(2, 25, 48, 0.78)), url('/images/admin-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "25px 15px",
      }}
    >
      {/* ================= PEMS LOGO ================= */}

      <div
        style={{
          position: "absolute",
          top: "28px",
          left: "45px",
          color: "white",
        }}
      >
        <div
          className="d-flex align-items-center"
          style={{
            fontSize: "32px",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          <i
            className="bi bi-gear-wide-connected me-2"
            style={{
              color: "#2d8cff",
              fontSize: "35px",
            }}
          ></i>
          PEMS
        </div>

        <div
          style={{
            fontSize: "10px",
            letterSpacing: "4px",
            marginLeft: "45px",
            marginTop: "-5px",
            opacity: "0.9",
          }}
        >
          ENGINEERING
        </div>
      </div>

      {/* ================= LOGIN CARD ================= */}

      <div
        style={{
          width: "470px",
          maxWidth: "100%",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(22, 24, 99, 0.97)",
            borderRadius: "18px",
            padding: "42px 48px 35px",
            boxShadow: "0 20px 55px rgba(0,0,0,0.40)",
          }}
        >
          {/* ================= ADMIN ICON ================= */}

          <div className="text-center">
            <div
              className="mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "92px",
                height: "92px",
                borderRadius: "50%",
                backgroundColor: "#e8f2ff",
                border: "5px solid #ffffff",
                boxShadow: "0 5px 20px rgba(13,110,253,0.22)",
                marginTop: "-88px",
              }}
            >
              <i
                className="bi bi-person-gear"
                style={{
                  fontSize: "43px",
                  color: "#0d6efd",
                }}
              ></i>
            </div>

            {/* TITLE */}

            <h2
              style={{
                color: "#a5bcda",
                fontSize: "27px",
                fontWeight: "700",
                marginTop: "20px",
                marginBottom: "7px",
              }}
            >
              Admin Login
            </h2>

            <p
              style={{
                color: "#c7d8ee",
                fontSize: "12px",
                marginBottom: "30px",
              }}
            >
              Secure access to admin panel
            </p>
          </div>

          {/* ================= USERNAME ================= */}

          <div className="mb-4">
            <label
              className="form-label"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#c5d1e2",
              }}
            >
              Email
            </label>

            <div className="input-group">
              <span
                className="input-group-text"
                style={{
                  backgroundColor: "#f7faff",
                  border: "1px solid #d7e0ea",
                  borderRight: "none",
                  color: "#6d7d91",
                  padding: "13px 14px",
                }}
              >
                <i className="bi bi-person-fill"></i>
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Enter  email"
                style={{
                  backgroundColor: "#f7faff",
                  border: "1px solid #d7e0ea",
                  borderLeft: "none",
                  padding: "13px 12px",
                  fontSize: "15px",
                  boxShadow: "none",
                }}
              />
            </div>
          </div>

          {/* ================= PASSWORD ================= */}

          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#c5d1e2",
              }}
            >
              Password
            </label>

            <div className="input-group">
              <span
                className="input-group-text"
                style={{
                  backgroundColor: "#f7faff",
                  border: "1px solid #d7e0ea",
                  borderRight: "none",
                  color: "#6d7d91",
                  padding: "13px 14px",
                }}
              >
                <i className="bi bi-lock-fill"></i>
              </span>

              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                style={{
                  backgroundColor: "#f7faff",
                  border: "1px solid #d7e0ea",
                  borderLeft: "none",
                  borderRight: "none",
                  padding: "13px 12px",
                  fontSize: "15px",
                  boxShadow: "none",
                }}
              />

              <span
                className="input-group-text"
                style={{
                  backgroundColor: "#f7faff",
                  border: "1px solid #d7e0ea",
                  borderLeft: "none",
                  color: "#6d7d91",
                  padding: "13px 14px",
                  cursor: "pointer",
                }}
              >
                <i className="bi bi-eye"></i>
              </span>
            </div>
          </div>

          {/* ================= REMEMBER / FORGOT ================= */}

          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              marginTop: "15px",
              marginBottom: "25px",
            }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
              />

              <label
                className="form-check-label"
                htmlFor="remember"
                style={{
                  fontSize: "15px",
                  color: "#a7bedc",
                }}
              >
                Remember Me
              </label>
            </div>

            <span
              style={{
                fontSize: "15px",
                color: "#4690ff",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </span>
          </div>

          {/* ================= SIGN IN ================= */}

          <button
            type="button"
            className="btn w-100"
            style={{
              background: "linear-gradient(90deg, #0d6efd, #1769d5)",
              color: "white",
              border: "none",
              borderRadius: "7px",
              padding: "13px",
              fontSize: "15px",
              fontWeight: "600",
              boxShadow: "0 6px 16px rgba(13,110,253,0.28)",
            }}
            onClick={() => navigate("/admin-dashboard")}
          >
            Login In
            <i className="bi bi-arrow-right ms-2"></i>
          </button>

          {/* ================= PORTAL TEXT ================= */}

          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              marginTop: "28px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "55px",
                backgroundColor: "#dce3eb",
              }}
            ></div>

            <span
              style={{
                fontSize: "15px",
                color: "#aec8ea",
                margin: "0 10px",
                whiteSpace: "nowrap",
              }}
            >
              PEMS Engineering Admin Portal
            </span>

            <div
              style={{
                height: "1px",
                width: "55px",
                backgroundColor: "#dce3eb",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
