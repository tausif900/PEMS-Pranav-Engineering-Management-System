import React from "react";
import { useNavigate } from "react-router-dom";

const PendingDeliveries = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "35px",
        background: "linear-gradient(135deg, #fffaf2, #fff3df)",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2
            style={{
              color: "#6b3205",
              fontWeight: "700",
              marginBottom: "6px",
            }}
          >
            Pending Deliveries
          </h2>

          <p
            style={{
              color: "#8a5a2b",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Track purchase orders with materials still pending from suppliers.
          </p>
        </div>

        <button
          className="btn"
          onClick={() => navigate("/purchase-dashboard")}
          style={{
            backgroundColor: "#fff",
            color: "#8a4b08",
            border: "1px solid #e8c18f",
            borderRadius: "10px",
            padding: "10px 18px",
            fontWeight: "600",
          }}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Dashboard
        </button>
      </div>

      {/* Filter Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div
          className="input-group"
          style={{
            maxWidth: "450px",
          }}
        >
          <span
            className="input-group-text"
            style={{
              backgroundColor: "#fff7eb",
              borderColor: "#e8c18f",
              color: "#ff8500",
            }}
          >
            <i className="bi bi-search"></i>
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Search PO or supplier..."
            style={{
              borderColor: "#e8c18f",
              boxShadow: "none",
            }}
          />
        </div>

        <select
          className="form-select"
          style={{
            width: "200px",
            borderColor: "#e8c18f",
            color: "#8a4b08",
            fontWeight: "600",
          }}
        >
          <option>All Deliveries</option>
          <option>Upcoming</option>
          <option>Partially Received</option>
          <option>Delayed</option>
          <option>Replacement Pending</option>
        </select>
      </div>

      {/* Delivery Card 1 */}
      <div
        className="mb-4"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e8c18f",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 8px 25px rgba(107,50,5,0.08)",
        }}
      >
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="d-flex align-items-center">
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "15px",
                  backgroundColor: "#ff8500",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginRight: "14px",
                }}
              >
                <i className="bi bi-truck"></i>
              </div>

              <div>
                <h5
                  style={{
                    color: "#6b3205",
                    fontWeight: "700",
                    margin: 0,
                  }}
                >
                  PO-2026-004
                </h5>

                <small style={{ color: "#8a5a2b" }}>Parmar Engineering</small>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <small style={{ color: "#8a5a2b" }}>Expected Delivery</small>

            <div
              style={{
                color: "#ea580c",
                fontWeight: "700",
                marginTop: "5px",
              }}
            >
              03 Sep 2026
            </div>
          </div>

          <div className="col-lg-2">
            <small style={{ color: "#8a5a2b" }}>Ordered</small>

            <div
              style={{
                color: "#2563eb",
                fontWeight: "700",
                marginTop: "5px",
              }}
            >
              100 Units
            </div>
          </div>

          <div className="col-lg-2">
            <small style={{ color: "#8a5a2b" }}>Pending</small>

            <div
              style={{
                color: "#dc2626",
                fontWeight: "700",
                marginTop: "5px",
              }}
            >
              100 Units
            </div>
          </div>

          <div className="col-lg-2">
            <span
              style={{
                backgroundColor: "#fff7ed",
                color: "#ea580c",
                padding: "8px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              Awaiting Delivery
            </span>
          </div>

          <div className="col-lg-1 text-end">
            <button
              className="btn"
              style={{
                backgroundColor: "#7c3aed",
                color: "#fff",
                borderRadius: "9px",
                padding: "8px 12px",
              }}
            >
              <i className="bi bi-eye"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingDeliveries;
