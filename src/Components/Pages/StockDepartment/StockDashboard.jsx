import React from "react";
import { useNavigate } from "react-router-dom";

const StockDashboard = () => {
  const navigate = useNavigate();

  const todaysDate = () => {
    const date = new Date();
    const d = date.toDateString();
    return d;
  };

  const currentTime = () => {
    const now = new Date();
    const t = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return t;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eed0a0, #c39a5e)",
        padding: "35px 45px",
      }}
    >
      {/* HEADER */}

      <div className="d-flex justify-content-between align-items-start mb-5">
        <div>
          <p
            style={{
              margin: 0,
              color: "#536176",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Welcome, Stock Team 👋
          </p>

          <h1
            style={{
              margin: "8px 0 6px",
              color: "#111d3a",
              fontSize: "38px",
              fontWeight: "750",
            }}
          >
            Stock Dashboard
          </h1>

          <p
            style={{
              margin: 0,
              color: "#68758b",
              fontSize: "15px",
            }}
          >
            Manage and monitor all your products and inventory
          </p>
        </div>

        <div
          className="d-flex align-items-center"
          style={{
            backgroundColor: "#ffffff",
            padding: "12px 20px",
            borderRadius: "30px",
            boxShadow: "0 4px 15px rgba(30,60,100,0.08)",
            color: "#353b43",
            fontSize: "15px",
          }}
        >
          <i className="bi bi-calendar3 me-2"></i>
          {/* 24 Aug 2026 | 01:30 PM */}
          {todaysDate()} | {currentTime()}
        </div>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "18px",
          marginBottom: "25px",
        }}
      >
        <div style={summaryCard}>
          <span style={iconStyle}>📦</span>
          <div>
            <p style={summaryTitle}>Total Products</p>
            <h2 style={summaryValue}>48</h2>
          </div>
        </div>

        <div style={summaryCard}>
          <span style={iconStyle}>📊</span>
          <div>
            <p style={summaryTitle}>Total Quantity</p>
            <h2 style={summaryValue}>1,245</h2>
          </div>
        </div>

        <div style={summaryCard}>
          <span style={iconStyle}>💰</span>
          <div>
            <p style={summaryTitle}>Stock Value</p>
            <h2 style={summaryValue}>₹8.45L</h2>
          </div>
        </div>
      </div>

      {/* ACTION CARDS */}

      <div className="row g-4 mb-5">
        {/* ALL PRODUCTS */}

        <div className="col-lg-6">
          <div
            style={{
              background: "linear-gradient(135deg, #fff7ed, #fed7aa)",
              border: "1px solid #d3e3ff",
              borderRadius: "18px",
              padding: "32px",
              cursor: "pointer",
              boxShadow: "0 7px 22px rgba(35,100,200,0.08)",
            }}
          >
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center me-4"
                style={{
                  width: "78px",
                  height: "78px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  color: "#ea580c",
                  fontSize: "31px",
                  boxShadow: "0 5px 15px rgba(23,105,213,0.10)",
                }}
              >
                <i className="bi bi-box-seam"></i>
              </div>

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    margin: "0 0 8px",
                    color: "#111d3a",
                    fontSize: "23px",
                    fontWeight: "700",
                  }}
                >
                  All Products
                </h3>

                <p
                  style={{
                    margin: "0 0 18px",
                    color: "#536176",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  View all products in stock with details and quantities.
                </p>

                <button
                  className="btn"
                  onClick={() => navigate("/stock/view-all-products")}
                  style={{
                    backgroundColor: "#1769d5",
                    color: "#ffffff",
                    borderRadius: "8px",
                    padding: "9px 17px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  View Products
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>

              <i
                className="bi bi-chevron-right"
                style={{
                  fontSize: "24px",
                  color: "#1769d5",
                }}
              ></i>
            </div>
          </div>
        </div>

        {/* ADD PRODUCT */}

        <div className="col-lg-6">
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf5, #ffedd5)",
              border: "1px solid #ccebd9",
              borderRadius: "18px",
              padding: "32px",
              boxShadow: "0 7px 22px rgba(30,140,80,0.07)",
            }}
          >
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center me-4"
                style={{
                  width: "78px",
                  height: "78px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  color: "#f97316",
                  fontSize: "31px",
                  boxShadow: "0 5px 15px rgba(21,153,87,0.10)",
                }}
              >
                <i className="bi bi-plus-lg"></i>
              </div>

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    margin: "0 0 8px",
                    color: "#111d3a",
                    fontSize: "23px",
                    fontWeight: "700",
                  }}
                >
                  Add New Product
                </h3>

                <p
                  style={{
                    margin: "0 0 18px",
                    color: "#536176",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  Add a new product to inventory and update stock.
                </p>

                <button
                  className="btn"
                  onClick={() => navigate("/stock/add-product")}
                  style={{
                    backgroundColor: "#159957",
                    color: "#ffffff",
                    borderRadius: "8px",
                    padding: "9px 17px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Add Product
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>

              <i
                className="bi bi-chevron-right"
                style={{
                  fontSize: "24px",
                  color: "#159957",
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;

const summaryCard = {
  background: "linear-gradient(135deg, #fff7ed, #fed7aa)",
  border: "1px solid #d3e3ff",
  borderRadius: "18px",
  padding: "32px",
  cursor: "pointer",
  boxShadow: "0 7px 22px rgba(35,100,200,0.08)",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const iconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "10px",
  background: "rgba(205, 161, 85, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
};

const summaryTitle = {
  margin: 0,
  color: "#696253",
  fontSize: "15px",
};

const summaryValue = {
  margin: "5px 0 0",
  color: "#45433d",
  fontSize: "25px",
};
