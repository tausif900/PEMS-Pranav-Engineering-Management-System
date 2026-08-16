import React from "react";

const StockLogin = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(65, 42, 5, 0.72), rgba(65, 42, 5, 0.78)), url('/images/stock-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "25px 15px",
      }}
    >
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
              color: "#ffb21a",
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
          }}
        >
          ENGINEERING
        </div>
      </div>

      <div
        style={{
          width: "470px",
          maxWidth: "100%",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(83, 58, 10, 0.97)",
            borderRadius: "18px",
            padding: "42px 48px 35px",
            boxShadow: "0 20px 55px rgba(0,0,0,0.40)",
          }}
        >
          <div className="text-center">
            <div
              className="mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "92px",
                height: "92px",
                borderRadius: "50%",
                backgroundColor: "#fff5dd",
                border: "5px solid #ffffff",
                marginTop: "-88px",
              }}
            >
              <i
                className="bi bi-box-seam-fill"
                style={{
                  fontSize: "43px",
                  color: "#f0a500",
                }}
              ></i>
            </div>

            <h2
              style={{
                color: "#ffd98c",
                fontSize: "27px",
                fontWeight: "700",
                marginTop: "20px",
                marginBottom: "7px",
              }}
            >
              Stock Login
            </h2>

            <p
              style={{
                color: "#e8d5ad",
                fontSize: "12px",
                marginBottom: "30px",
              }}
            >
              Manage inventory and stock levels
            </p>
          </div>

          <div className="mb-4">
            <label
              className="form-label"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#e5d5b7",
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
                }}
              />
            </div>
          </div>

          <div className="mb-3">
            <label
              className="form-label"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#e5d5b7",
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
                }}
              />

              <span
                className="input-group-text"
                style={{
                  backgroundColor: "#f7faff",
                  border: "1px solid #d7e0ea",
                  borderLeft: "none",
                  padding: "13px 14px",
                }}
              >
                <i className="bi bi-eye"></i>
              </span>
            </div>
          </div>

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
                id="stockRemember"
              />

              <label
                className="form-check-label"
                htmlFor="stockRemember"
                style={{
                  fontSize: "15px",
                  color: "#d6c29f",
                }}
              >
                Remember Me
              </label>
            </div>

            <span
              style={{
                fontSize: "15px",
                color: "#ffbd3d",
              }}
            >
              Forgot Password?
            </span>
          </div>

          <button
            type="button"
            className="btn w-100"
            style={{
              background: "linear-gradient(90deg, #ee9c00, #ffb21a)",
              color: "white",
              border: "none",
              borderRadius: "7px",
              padding: "13px",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Login In
            <i className="bi bi-arrow-right ms-2"></i>
          </button>

          <div
            className="d-flex align-items-center justify-content-center"
            style={{ marginTop: "28px" }}
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
                color: "#dec99e",
                margin: "0 10px",
                whiteSpace: "nowrap",
              }}
            >
              PEMS Engineering Stock Portal
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

export default StockLogin;
