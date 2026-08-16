import React from "react";

const HRLogin = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(45, 15, 75, 0.72), rgba(45, 15, 75, 0.78)), url('/images/hr-bg.png')",
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
              color: "#8b4de8",
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
            backgroundColor: "rgba(55, 25, 100, 0.97)",
            borderRadius: "18px",
            padding: "42px 48px 35px",
            boxShadow: "0 20px 55px rgba(0,0,0,0.40)",
          }}
        >
          {/* ================= HR ICON ================= */}

          <div className="text-center">
            <div
              className="mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "92px",
                height: "92px",
                borderRadius: "50%",
                backgroundColor: "#f1e8ff",
                border: "5px solid #ffffff",
                boxShadow: "0 5px 20px rgba(139,77,232,0.22)",
                marginTop: "-88px",
              }}
            >
              <i
                className="bi bi-people-fill"
                style={{
                  fontSize: "43px",
                  color: "#8b4de8",
                }}
              ></i>
            </div>

            <h2
              style={{
                color: "#d4baf5",
                fontSize: "27px",
                fontWeight: "700",
                marginTop: "20px",
                marginBottom: "7px",
              }}
            >
              HR Login
            </h2>

            <p
              style={{
                color: "#d8c8ec",
                fontSize: "12px",
                marginBottom: "30px",
              }}
            >
              Manage employees and HR operations
            </p>
          </div>

          {/* ================= EMAIL ================= */}

          <div className="mb-4">
            <label
              className="form-label"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#d2c7e2",
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
                placeholder="Enter email"
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
                color: "#d2c7e2",
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
                id="hrRemember"
              />

              <label
                className="form-check-label"
                htmlFor="hrRemember"
                style={{
                  fontSize: "15px",
                  color: "#c5b6dc",
                }}
              >
                Remember Me
              </label>
            </div>

            <span
              style={{
                fontSize: "15px",
                color: "#b477ff",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </span>
          </div>

          {/* ================= LOGIN ================= */}

          <button
            type="button"
            className="btn w-100"
            style={{
              background: "linear-gradient(90deg, #7b3fd0, #8b4de8)",
              color: "white",
              border: "none",
              borderRadius: "7px",
              padding: "13px",
              fontSize: "15px",
              fontWeight: "600",
              boxShadow: "0 6px 16px rgba(139,77,232,0.28)",
            }}
          >
            Login In
            <i className="bi bi-arrow-right ms-2"></i>
          </button>

          {/* ================= PORTAL ================= */}

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
                color: "#c8b4e5",
                margin: "0 10px",
                whiteSpace: "nowrap",
              }}
            >
              PEMS Engineering HR Portal
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

export default HRLogin;
