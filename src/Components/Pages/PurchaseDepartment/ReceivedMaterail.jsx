import React from "react";
import { useNavigate } from "react-router-dom";

const ReceivedMaterail = () => {
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
            Received Materials
          </h2>

          <p
            style={{
              color: "#8a5a2b",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Track materials received from suppliers against purchase orders.
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

      {/* Search + Filter */}
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
            width: "180px",
            borderColor: "#e8c18f",
            color: "#8a4b08",
            fontWeight: "600",
          }}
        >
          <option>All Status</option>
          <option>Fully Received</option>
          <option>Partially Received</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Received Material Card 1 */}
      <div
        className="mb-4"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e8c18f",
          borderRadius: "20px",
          padding: "24px",
          boxShadow: "0 8px 25px rgba(107,50,5,0.08)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "13px",
                backgroundColor: "#ff8500",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                marginRight: "14px",
              }}
            >
              <i className="bi bi-box-seam"></i>
            </div>

            <div>
              <h5
                style={{
                  color: "#6b3205",
                  fontWeight: "700",
                  margin: 0,
                }}
              >
                PO-2026-001
              </h5>

              <small
                style={{
                  color: "#8a5a2b",
                }}
              >
                Parmar Engineering
              </small>
            </div>
          </div>

          <span
            style={{
              backgroundColor: "#dcfce7",
              color: "#15803d",
              padding: "8px 15px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            Fully Received
          </span>
        </div>

        <div className="row g-3">
          <div className="col-md-3">
            <div
              style={{
                backgroundColor: "#fff7ed",
                borderRadius: "12px",
                padding: "15px",
              }}
            >
              <small style={{ color: "#9a3412" }}>Received Date</small>

              <div
                style={{
                  color: "#ea580c",
                  fontWeight: "700",
                  marginTop: "5px",
                }}
              >
                30 Aug 2026
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              style={{
                backgroundColor: "#eff6ff",
                borderRadius: "12px",
                padding: "15px",
              }}
            >
              <small style={{ color: "#1d4ed8" }}>Challan Number</small>

              <div
                style={{
                  color: "#2563eb",
                  fontWeight: "700",
                  marginTop: "5px",
                }}
              >
                DC-45821
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              style={{
                backgroundColor: "#f0fdf4",
                borderRadius: "12px",
                padding: "15px",
              }}
            >
              <small style={{ color: "#047857" }}>Accepted</small>

              <div
                style={{
                  color: "#059669",
                  fontWeight: "700",
                  marginTop: "5px",
                }}
              >
                100 Units
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              style={{
                backgroundColor: "#fff1f2",
                borderRadius: "12px",
                padding: "15px",
              }}
            >
              <small style={{ color: "#b91c1c" }}>Rejected</small>

              <div
                style={{
                  color: "#dc2626",
                  fontWeight: "700",
                  marginTop: "5px",
                }}
              >
                0 Units
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button
            className="btn"
            style={{
              backgroundColor: "#7c3aed",
              color: "#fff",
              borderRadius: "9px",
              padding: "8px 17px",
              fontWeight: "600",
            }}
          >
            <i className="bi bi-eye me-2"></i>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMaterail;
