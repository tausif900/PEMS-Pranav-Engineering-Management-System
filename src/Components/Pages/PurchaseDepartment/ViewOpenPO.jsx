import React from "react";
import { useNavigate } from "react-router-dom";

const ViewOpenPO = () => {
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
            Open Purchase Orders
          </h2>

          <p
            style={{
              color: "#8a4b08",
              fontSize: "14px",
              margin: 0,
            }}
          >
            View all active purchase orders awaiting material receipt.
          </p>
        </div>

        <button
          className="btn"
          onClick={() => navigate("/purchase-dashboard")}
          style={{
            backgroundColor: "#8a4b08",
            color: "#fff",
            borderRadius: "9px",
            padding: "10px 18px",
            fontWeight: "600",
          }}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Dashboard
        </button>
      </div>

      {/* Search */}

      <div className="input-group">
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
          placeholder="Search by PO number or supplier..."
          style={{
            borderColor: "#e8c18f",
            boxShadow: "none",
          }}
        />
      </div>

      {/* Table */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "18px",
          padding: "20px",
          border: "1px solid #e8c18f",
          boxShadow: "0 8px 25px rgba(107,50,5,0.08)",
          overflowX: "auto",
          marginTop: "20px",
        }}
      >
        <table
          className="table align-middle mb-0"
          style={{
            minWidth: "1150px",
          }}
        >
          <thead>
            <tr
              style={{
                background: "linear-gradient(135deg, #fff3df, #ffe1b8)",
              }}
            >
              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                PO Number
              </th>

              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                PO Date
              </th>

              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                Supplier
              </th>

              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                PR Number
              </th>

              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                Total Amount
              </th>

              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                Expected Delivery
              </th>

              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                Status
              </th>

              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                  textAlign: "center",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {/* PO 1 */}
            <tr>
              <td
                style={{
                  color: "#ea580c",
                  fontWeight: "700",
                  padding: "18px 16px",
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
                29 Aug 2026
              </td>

              <td
                style={{
                  color: "#7c3aed",
                  fontWeight: "700",
                }}
              >
                Parmar Engineering
              </td>

              <td
                style={{
                  color: "#059669",
                  fontWeight: "600",
                }}
              >
                PR-001
              </td>

              <td
                style={{
                  color: "#d97706",
                  fontWeight: "700",
                }}
              >
                ₹20,060
              </td>

              <td
                style={{
                  color: "#0284c7",
                  fontWeight: "600",
                }}
              >
                05 Sep 2026
              </td>

              <td>
                <span
                  style={{
                    backgroundColor: "#ffedd5",
                    color: "#c2410c",
                    padding: "7px 14px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  Open
                </span>
              </td>

              <td className="text-center">
                <button
                  className="btn me-2"
                  onClick={() => navigate("/purchase-order-preview/1")}
                  style={{
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "7px 12px",
                  }}
                >
                  <i className="bi bi-eye"></i>
                </button>

                <button
                  className="btn"
                  style={{
                    backgroundColor: "#059669",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "7px 14px",
                    fontWeight: "600",
                  }}
                >
                  <i className="bi bi-check-circle me-2"></i>
                  Close PO
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOpenPO;
