import React from "react";
import { useNavigate } from "react-router-dom";

const PurchaseHistory = () => {
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
            Purchase History
          </h2>

          <p
            style={{
              color: "#8a5a2b",
              fontSize: "14px",
              margin: 0,
            }}
          >
            View completed and closed purchase orders.
          </p>
        </div>

        <button
          className="btn"
          onClick={()=>navigate("/purchase-dashboard")}
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

      {/* Search & Filter */}
      <div
        className="d-flex justify-content-between align-items-center mb-4"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e8c18f",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 6px 18px rgba(107,50,5,0.06)",
        }}
      >
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
            width: "190px",
            borderColor: "#e8c18f",
            color: "#8a4b08",
            fontWeight: "600",
          }}
        >
          <option>All Purchases</option>
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      {/* History Container */}
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e8c18f",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 8px 25px rgba(107,50,5,0.08)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5
              style={{
                color: "#6b3205",
                fontWeight: "700",
                marginBottom: "5px",
              }}
            >
              Completed Purchases
            </h5>

            <p
              style={{
                color: "#8a5a2b",
                fontSize: "13px",
                margin: 0,
              }}
            >
              Successfully completed and closed purchase orders.
            </p>
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
            <i className="bi bi-check-circle me-1"></i>
            Completed
          </span>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            className="table align-middle mb-0"
            style={{
              minWidth: "1000px",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "linear-gradient(135deg, #fff3df, #ffe1b8)",
                }}
              >
                <th style={{ color: "#8a4b08", padding: "15px" }}>PO Number</th>

                <th style={{ color: "#2563eb", padding: "15px" }}>Supplier</th>

                <th style={{ color: "#7c3aed", padding: "15px" }}>PO Date</th>

                <th style={{ color: "#059669", padding: "15px" }}>
                  Completed Date
                </th>

                <th style={{ color: "#d97706", padding: "15px" }}>Items</th>

                <th style={{ color: "#0284c7", padding: "15px" }}>Quantity</th>

                <th style={{ color: "#16a34a", padding: "15px" }}>
                  Total Amount
                </th>

                <th style={{ color: "#6b3205", padding: "15px" }}>Status</th>

                <th style={{ color: "#7c3aed", padding: "15px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {/* PO 1 */}
              <tr>
                <td
                  style={{
                    color: "#ea580c",
                    fontWeight: "700",
                    padding: "18px 15px",
                  }}
                >
                  PO-2026-001
                </td>

                <td
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  Parmar Engineering
                </td>

                <td style={{ color: "#7c3aed" }}>25 Aug 2026</td>

                <td style={{ color: "#059669" }}>30 Aug 2026</td>

                <td
                  style={{
                    color: "#d97706",
                    fontWeight: "600",
                  }}
                >
                  3
                </td>

                <td
                  style={{
                    color: "#0284c7",
                    fontWeight: "600",
                  }}
                >
                  170
                </td>

                <td
                  style={{
                    color: "#16a34a",
                    fontWeight: "700",
                  }}
                >
                  ₹85,000
                </td>

                <td>
                  <span
                    style={{
                      backgroundColor: "#dcfce7",
                      color: "#15803d",
                      padding: "7px 12px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "700",
                    }}
                  >
                    CLOSED
                  </span>
                </td>

                <td>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#7c3aed",
                      color: "#fff",
                      borderRadius: "8px",
                      padding: "7px 13px",
                      fontWeight: "600",
                    }}
                  >
                    <i className="bi bi-eye me-1"></i>
                    View PO
                  </button>
                </td>
              </tr>

              {/* PO 2 */}
              <tr>
                <td
                  style={{
                    color: "#ea580c",
                    fontWeight: "700",
                    padding: "18px 15px",
                  }}
                >
                  PO-2026-003
                </td>

                <td
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  ABC Auto Components
                </td>

                <td style={{ color: "#7c3aed" }}>20 Aug 2026</td>

                <td style={{ color: "#059669" }}>28 Aug 2026</td>

                <td
                  style={{
                    color: "#d97706",
                    fontWeight: "600",
                  }}
                >
                  4
                </td>

                <td
                  style={{
                    color: "#0284c7",
                    fontWeight: "600",
                  }}
                >
                  250
                </td>

                <td
                  style={{
                    color: "#16a34a",
                    fontWeight: "700",
                  }}
                >
                  ₹1,25,500
                </td>

                <td>
                  <span
                    style={{
                      backgroundColor: "#dcfce7",
                      color: "#15803d",
                      padding: "7px 12px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "700",
                    }}
                  >
                    CLOSED
                  </span>
                </td>

                <td>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#7c3aed",
                      color: "#fff",
                      borderRadius: "8px",
                      padding: "7px 13px",
                      fontWeight: "600",
                    }}
                  >
                    <i className="bi bi-eye me-1"></i>
                    View PO
                  </button>
                </td>
              </tr>

              {/* PO 3 */}
              <tr>
                <td
                  style={{
                    color: "#ea580c",
                    fontWeight: "700",
                    padding: "18px 15px",
                  }}
                >
                  PO-2026-006
                </td>

                <td
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  Global Filter Industries
                </td>

                <td style={{ color: "#7c3aed" }}>15 Aug 2026</td>

                <td style={{ color: "#059669" }}>24 Aug 2026</td>

                <td
                  style={{
                    color: "#d97706",
                    fontWeight: "600",
                  }}
                >
                  2
                </td>

                <td
                  style={{
                    color: "#0284c7",
                    fontWeight: "600",
                  }}
                >
                  120
                </td>

                <td
                  style={{
                    color: "#16a34a",
                    fontWeight: "700",
                  }}
                >
                  ₹62,800
                </td>

                <td>
                  <span
                    style={{
                      backgroundColor: "#dcfce7",
                      color: "#15803d",
                      padding: "7px 12px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "700",
                    }}
                  >
                    CLOSED
                  </span>
                </td>

                <td>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#7c3aed",
                      color: "#fff",
                      borderRadius: "8px",
                      padding: "7px 13px",
                      fontWeight: "600",
                    }}
                  >
                    <i className="bi bi-eye me-1"></i>
                    View PO
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Info */}
      <div
        className="mt-4"
        style={{
          backgroundColor: "#fff7ed",
          border: "1px solid #f2c58b",
          borderRadius: "14px",
          padding: "15px 20px",
        }}
      >
        <div className="d-flex align-items-center">
          <i
            className="bi bi-info-circle me-3"
            style={{
              color: "#ff8500",
              fontSize: "20px",
            }}
          ></i>

          <p
            style={{
              margin: 0,
              color: "#8a5a2b",
              fontSize: "13px",
            }}
          >
            Only completely received and closed purchase orders are shown in
            purchase history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
