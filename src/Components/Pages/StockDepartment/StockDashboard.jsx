import React from "react";
import { useNavigate } from "react-router-dom";

const StockDashboard = () => {
  const navigate = useNavigate();
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
            color: "#536176",
            fontSize: "13px",
          }}
        >
          <i className="bi bi-calendar3 me-2"></i>
          24 Aug 2026 | 01:30 PM
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

      {/* PRODUCTS OVERVIEW */}

      <div
        style={{
          background: "linear-gradient(135deg, #fff7ed, #fde68a)",
          borderRadius: "18px",
          padding: "28px",
          boxShadow: "0 7px 22px rgba(30,60,100,0.08)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center me-3"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                backgroundColor: "#edf3ff",
                color: "#d97706",
                fontSize: "19px",
              }}
            >
              <i className="bi bi-box-seam"></i>
            </div>

            <div>
              <h4
                style={{
                  margin: 0,
                  color: "#111d3a",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Products Overview
              </h4>

              <span
                style={{
                  color: "#7a879a",
                  fontSize: "12px",
                }}
              >
                Recently added or updated products
              </span>
            </div>
          </div>
        </div>

        {/* TABLE */}

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr
                style={{
                  color: "#66748a",
                  fontSize: "12px",
                  borderBottom: "1px solid #e8edf4",
                }}
              >
                <th style={{ padding: "14px" }}>PRODUCT CODE</th>
                <th>PRODUCT NAME</th>
                <th>CATEGORY</th>
                <th>QUANTITY</th>
                <th>UNIT</th>
                <th>UNIT PRICE (₹)</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  style={{
                    padding: "18px 14px",
                    color: "#1769d5",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  PRD001
                </td>

                <td style={{ fontSize: "13px", fontWeight: "600" }}>
                  Oil Filter
                </td>

                <td style={{ fontSize: "13px", color: "#536176" }}>Filters</td>

                <td
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#159957",
                  }}
                >
                  120
                </td>

                <td style={{ fontSize: "13px", color: "#536176" }}>PCS</td>

                <td style={{ fontSize: "13px", fontWeight: "600" }}>350.00</td>

                <td>
                  <span
                    style={{
                      backgroundColor: "#e5f7ed",
                      color: "#159957",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    In Stock
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="text-center"
          style={{
            marginTop: "22px",
            color: "#68758b",
            fontSize: "13px",
          }}
        >
          Showing 5 of 25 products
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;
