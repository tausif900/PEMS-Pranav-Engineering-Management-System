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

        /* FULL SCREEN BACKGROUND IMAGE */
        backgroundImage:
          "linear-gradient(rgba(5,20,38,0.48), rgba(5,20,38,0.58)), url('/images/ChatGPT Image Aug 15, 2026, 01_43_02 PM.png')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ================= CONTENT ================= */}

      <div
        className="container-fluid"
        style={{
          minHeight: "100vh",
          position: "relative",
          zIndex: 2,
          padding: "25px 6%",
        }}
      >
        {/* ================= HEADER ================= */}

        <div className="d-flex justify-content-end align-items-center">
          {/* REGISTER */}

          <button
            type="button"
            className="btn"
            style={{
              color: "#ffffff",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "7px",
              padding: "7px 17px",
              fontSize: "20px",
              fontWeight: "600",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => navigate("/registration")}
          >
            <i className="bi bi-person-plus-fill me-2"></i>
            Register
          </button>
        </div>

        {/* ================= HEADING ================= */}

        <div
          className="text-center"
          style={{
            marginTop: "45px",
            marginBottom: "28px",
          }}
        >
          <h1
            style={{
              color: "#cabdbd",
              fontSize: "36px",
              fontWeight: "700",
              marginBottom: "8px",
              textShadow: "0 3px 12px rgba(0,0,0,0.4)",
            }}
          >
            Welcome to PEMS
          </h1>

          <p
            style={{
              color: "#e5dcdc",
              fontSize: "20px",
              margin: "0",
              opacity: "0.9",
            }}
          >
            Select your department to access the management portal
          </p>
        </div>

        {/* ================= DEPARTMENT CARDS ================= */}

        <div
          className="row g-3 justify-content-center"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {departments.map((department) => (
            <div className="col-6 col-md-3" key={department.name}>
              <div
                className="text-center"
                style={{
                  minHeight: "175px",

                  /* TRANSPARENT CARD */

                  backgroundColor: "rgba(255,255,255,0.16)",

                  border: "1px solid rgba(255,255,255,0.45)",

                  borderRadius: "16px",

                  padding: "20px 10px",

                  /* GLASS EFFECT */

                  backdropFilter: "blur(2px)",
                  WebkitBackdropFilter: "blur(10px)",

                  boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                }}
              >
                {/* ICON */}

                <div
                  className="mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",

                    backgroundColor: "rgba(255,255,255,0.85)",

                    marginBottom: "12px",

                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  <i
                    className={`bi ${department.icon}`}
                    style={{
                      fontSize: "27px",
                      color: department.color,
                    }}
                  ></i>
                </div>

                {/* DEPARTMENT NAME */}

                <h5
                  style={{
                    color: "#ffffff",
                    fontSize: "25px",
                    fontWeight: "700",
                    marginBottom: "12px",

                    textShadow: "0 2px 5px rgba(0,0,0,0.5)",
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

                    backgroundColor: "rgba(255,255,255,0.12)",

                    border: `1px solid ${department.color}`,

                    borderRadius: "6px",

                    padding: "5px 18px",

                    fontSize: "15px",

                    fontWeight: "600",

                    backdropFilter: "blur(5px)",
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

        {/* ================= BOTTOM TEXT ================= */}

        <div
          className="text-center"
          style={{
            marginTop: "25px",
            color: "#e0dada",
            fontSize: "20px",
            opacity: "0.8",
          }}
        >
          PEMS Engineering Management System
        </div>
      </div>
    </div>
  );
};

export default Home;
