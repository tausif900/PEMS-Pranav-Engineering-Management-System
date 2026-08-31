import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const departments = [
    {
      name: "Admin",
      icon: "bi-person-gear",
      color: "#4da3ff",
      navigate: "/Admin-Login",
    },
    {
      name: "HR",
      icon: "bi-people-fill",
      color: "#a66cff",
      navigate: "/HR-Login",
    },
    {
      name: "Accounts",
      icon: "bi-calculator-fill",
      color: "#35c98a",
      navigate: "/Accounts-Login",
    },
    {
      name: "Sales",
      icon: "bi-graph-up-arrow",
      color: "#ff8a3d",
      navigate: "/Sales-Login",
    },
    {
      name: "Purchase",
      icon: "bi-cart-check-fill",
      color: "#4da3ff",
      navigate: "/Purchase-Login",
    },
    {
      name: "Stock",
      icon: "bi-box-seam-fill",
      color: "#ffb52e",
      navigate: "/Stock-Login",
    },
    {
      name: "Import",
      icon: "bi-box-arrow-in-down",
      color: "#36c5c5",
      navigate: "/Import-Login",
    },
    {
      name: "Export",
      icon: "bi-box-arrow-up",
      color: "#ff5f8f",
      navigate: "/Export-Login",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",

        backgroundImage:
          "linear-gradient(rgba(5,20,38,0.62), rgba(5,20,38,0.72)), url('/images/ChatGPT Image Aug 15, 2026, 01_43_02 PM.png')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* TOP NAVBAR */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "22px 6%",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            padding: "13px 20px",
            borderRadius: "14px",
            backgroundColor: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* LOGO */}

          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "12px",
                backgroundColor: "rgba(255,255,255,0.92)",
                marginRight: "12px",
              }}
            >
              <i
                className="bi bi-buildings-fill"
                style={{
                  color: "#2563eb",
                  fontSize: "23px",
                }}
              ></i>
            </div>

            <div>
              <h4
                style={{
                  margin: 0,
                  color: "#ffffff",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                PEMS
              </h4>

              <small
                style={{
                  color: "#dbeafe",
                  fontSize: "11px",
                }}
              >
                Engineering Management System
              </small>
            </div>
          </div>

          {/* REGISTER */}

          <button
            type="button"
            className="btn"
            style={{
              color: "#ffffff",
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.9), rgba(37,99,235,0.9))",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: "9px",
              padding: "9px 18px",
              fontSize: "15px",
              fontWeight: "600",
              boxShadow: "0 5px 18px rgba(0,0,0,0.20)",
            }}
            onClick={() => navigate("/registration")}
          >
            <i className="bi bi-person-plus-fill me-2"></i>
            Register
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingBottom: "35px",
        }}
      >
        {/* HERO SECTION */}

        <div
          className="text-center"
          style={{
            marginTop: "20px",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 16px",
              borderRadius: "30px",
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#bfdbfe",
              fontSize: "13px",
              fontWeight: "600",
              marginBottom: "15px",
              backdropFilter: "blur(8px)",
            }}
          >
            <i className="bi bi-shield-check me-2"></i>
            Integrated Business Management
          </div>

          <h1
            style={{
              color: "#ffffff",
              fontSize: "44px",
              fontWeight: "800",
              marginBottom: "10px",
              textShadow: "0 4px 15px rgba(0,0,0,0.5)",
              letterSpacing: "0.5px",
            }}
          >
            Welcome to <span style={{ color: "#60a5fa" }}>PEMS</span>
          </h1>

          <p
            style={{
              color: "#dbeafe",
              fontSize: "17px",
              margin: "0 auto",
              maxWidth: "650px",
              lineHeight: "1.7",
            }}
          >
            A centralized platform to manage every department of your
            engineering business efficiently and securely.
          </p>
        </div>

        {/* DEPARTMENT SECTION */}

        <div className="text-center mb-4">
          <h5
            style={{
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "19px",
              marginBottom: "5px",
            }}
          >
            Choose Your Department
          </h5>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "13px",
              margin: 0,
            }}
          >
            Select a department to continue to the management portal
          </p>
        </div>

        {/* DEPARTMENT CARDS */}

        <div
          className="row g-4 justify-content-center"
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >
          {departments.map((department) => (
            <div className="col-6 col-md-3" key={department.name}>
              <div
                className="text-center"
                style={{
                  minHeight: "205px",
                  padding: "22px 12px",
                  borderRadius: "18px",

                  backgroundColor: "rgba(255,255,255,0.11)",

                  border: "1px solid rgba(255,255,255,0.25)",

                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",

                  boxShadow: "0 10px 35px rgba(0,0,0,0.22)",

                  transition: "all 0.3s ease",
                }}
              >
                {/* ICON */}

                <div
                  className="mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "18px",

                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.75))",

                    marginBottom: "14px",

                    boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
                  }}
                >
                  <i
                    className={`bi ${department.icon}`}
                    style={{
                      fontSize: "29px",
                      color: department.color,
                    }}
                  ></i>
                </div>

                {/* NAME */}

                <h5
                  style={{
                    color: "#ffffff",
                    fontSize: "19px",
                    fontWeight: "700",
                    marginBottom: "15px",

                    textShadow: "0 2px 7px rgba(0,0,0,0.5)",
                  }}
                >
                  {department.name}
                </h5>

                {/* LOGIN BUTTON */}

                <button
                  type="button"
                  className="btn"
                  style={{
                    color: "#ffffff",

                    backgroundColor: "rgba(255,255,255,0.08)",

                    border: `1px solid ${department.color}`,

                    borderRadius: "8px",

                    padding: "7px 19px",

                    fontSize: "14px",

                    fontWeight: "600",

                    backdropFilter: "blur(5px)",

                    boxShadow: `0 3px 12px ${department.color}30`,
                  }}
                  onClick={() => navigate(department.navigate)}
                >
                  Login
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM INFO */}

        <div
          className="text-center"
          style={{
            marginTop: "38px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 18px",
              borderRadius: "30px",
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#cbd5e1",
              fontSize: "12px",
              backdropFilter: "blur(8px)",
            }}
          >
            <i
              className="bi bi-lock-fill"
              style={{
                color: "#60a5fa",
              }}
            ></i>
            Secure • Centralized • Connected
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
