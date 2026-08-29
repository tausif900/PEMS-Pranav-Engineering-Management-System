import React from "react";
import { useNavigate } from "react-router-dom";

const ReceiveMaterialForm = () => {
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
              marginBottom: "5px",
            }}
          >
            Receive Material
          </h2>

          <p
            style={{
              color: "#8a4b08",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Record materials received against a purchase order.
          </p>
        </div>

        <button
          className="btn"
          onClick={() => navigate("/purchase-dashboard")}
          style={{
            backgroundColor: "#fff",
            color: "#8a4b08",
            border: "1px solid #e8c18f",
            borderRadius: "9px",
            padding: "10px 18px",
            fontWeight: "600",
          }}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Back
        </button>
      </div>

      {/* PO Details */}
      <div
        style={{
          background: "linear-gradient(135deg, #fff7ed, #ffe8c7)",
          border: "1px solid #f2c58b",
          borderRadius: "18px",
          padding: "25px",
          marginBottom: "22px",
          boxShadow: "0 7px 22px rgba(107,50,5,0.08)",
        }}
      >
        <h5
          style={{
            color: "#6b3205",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Purchase Order Details
        </h5>

        <div className="row g-4">
          <div className="col-md-3">
            <label
              style={{
                color: "#6b3205",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Purchase Order
            </label>

            <select
              className="form-select"
              style={{
                borderColor: "#e8c18f",
                borderRadius: "9px",
                color: "#ea580c",
                fontWeight: "600",
              }}
            >
              <option>Select Purchase Order</option>
              <option>PO-2026-001</option>
              <option>PO-2026-002</option>
              <option>PO-2026-003</option>
            </select>
          </div>

          <div className="col-md-3">
            <label
              style={{
                color: "#7c3aed",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Supplier
            </label>

            <input
              type="text"
              className="form-control"
              value="Parmar Engineering"
              readOnly
              style={{
                borderColor: "#ddd6fe",
                color: "#7c3aed",
                fontWeight: "600",
                backgroundColor: "#fff",
              }}
            />
          </div>

          <div className="col-md-3">
            <label
              style={{
                color: "#2563eb",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              PO Date
            </label>

            <input
              type="text"
              className="form-control"
              value="29-Aug-2026"
              readOnly
              style={{
                borderColor: "#bfdbfe",
                color: "#2563eb",
                fontWeight: "600",
                backgroundColor: "#fff",
              }}
            />
          </div>

          <div className="col-md-3">
            <label
              style={{
                color: "#059669",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Received Date
            </label>

            <input
              type="date"
              className="form-control"
              style={{
                borderColor: "#a7f3d0",
                color: "#059669",
                fontWeight: "600",
              }}
            />
          </div>
        </div>
      </div>

      {/* Delivery Information */}
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e8c18f",
          borderRadius: "18px",
          padding: "25px",
          marginBottom: "22px",
          boxShadow: "0 7px 22px rgba(107,50,5,0.07)",
        }}
      >
        <h5
          style={{
            color: "#2563eb",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Delivery Information
        </h5>

        <div className="row g-4">
          <div className="col-md-4">
            <label
              style={{
                color: "#2563eb",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Delivery Challan Number
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter challan number"
              style={{
                borderColor: "#bfdbfe",
                borderRadius: "9px",
              }}
            />
          </div>

          <div className="col-md-4">
            <label
              style={{
                color: "#7c3aed",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Transport / Vehicle Number
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter vehicle number"
              style={{
                borderColor: "#ddd6fe",
                borderRadius: "9px",
              }}
            />
          </div>

          <div className="col-md-4">
            <label
              style={{
                color: "#059669",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Received By
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter receiver name"
              style={{
                borderColor: "#a7f3d0",
                borderRadius: "9px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Material Details */}
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e8c18f",
          borderRadius: "18px",
          padding: "25px",
          boxShadow: "0 7px 22px rgba(107,50,5,0.07)",
          marginBottom: "22px",
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
              Material Details
            </h5>

            <p
              style={{
                color: "#8a5a2b",
                fontSize: "13px",
                margin: 0,
              }}
            >
              Check received quantity and quality of every product.
            </p>
          </div>

          <span
            style={{
              backgroundColor: "#fff3df",
              color: "#ea580c",
              padding: "8px 15px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            PO-2026-001
          </span>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="table align-middle">
            <thead>
              <tr
                style={{
                  background: "linear-gradient(135deg, #fff3df, #ffe1b8)",
                }}
              >
                <th style={{ color: "#8a4b08" }}>Product</th>
                <th style={{ color: "#2563eb" }}>Product Code</th>
                <th style={{ color: "#d97706" }}>Ordered Qty</th>
                <th style={{ color: "#0284c7" }}>Received Qty</th>
                <th style={{ color: "#059669" }}>Accepted Qty</th>
                <th style={{ color: "#dc2626" }}>Rejected Qty</th>
                <th style={{ color: "#7c3aed" }}>Rejection Reason</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  style={{
                    color: "#9a3412",
                    fontWeight: "700",
                  }}
                >
                  Oil Filter
                </td>

                <td
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  OF-101
                </td>

                <td
                  style={{
                    color: "#d97706",
                    fontWeight: "700",
                  }}
                >
                  100
                </td>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Received"
                    style={{
                      width: "110px",
                      borderColor: "#bfdbfe",
                    }}
                  />
                </td>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Accepted"
                    style={{
                      width: "110px",
                      borderColor: "#a7f3d0",
                    }}
                  />
                </td>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rejected"
                    style={{
                      width: "110px",
                      borderColor: "#fecaca",
                    }}
                  />
                </td>

                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="If defective..."
                    style={{
                      minWidth: "210px",
                      borderColor: "#ddd6fe",
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    color: "#9a3412",
                    fontWeight: "700",
                  }}
                >
                  Air Filter
                </td>

                <td
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  AF-205
                </td>

                <td
                  style={{
                    color: "#d97706",
                    fontWeight: "700",
                  }}
                >
                  50
                </td>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Received"
                    style={{
                      width: "110px",
                      borderColor: "#bfdbfe",
                    }}
                  />
                </td>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Accepted"
                    style={{
                      width: "110px",
                      borderColor: "#a7f3d0",
                    }}
                  />
                </td>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rejected"
                    style={{
                      width: "110px",
                      borderColor: "#fecaca",
                    }}
                  />
                </td>

                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="If defective..."
                    style={{
                      minWidth: "210px",
                      borderColor: "#ddd6fe",
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    color: "#9a3412",
                    fontWeight: "700",
                  }}
                >
                  Compressor Part
                </td>

                <td
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  CP-301
                </td>

                <td
                  style={{
                    color: "#d97706",
                    fontWeight: "700",
                  }}
                >
                  20
                </td>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Received"
                    style={{
                      width: "110px",
                      borderColor: "#bfdbfe",
                    }}
                  />
                </td>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Accepted"
                    style={{
                      width: "110px",
                      borderColor: "#a7f3d0",
                    }}
                  />
                </td>

                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rejected"
                    style={{
                      width: "110px",
                      borderColor: "#fecaca",
                    }}
                  />
                </td>

                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="If defective..."
                    style={{
                      minWidth: "210px",
                      borderColor: "#ddd6fe",
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Remarks */}
      <div
        style={{
          backgroundColor: "#faf5ff",
          border: "1px solid #ddd6fe",
          borderRadius: "18px",
          padding: "22px",
          marginBottom: "25px",
        }}
      >
        <label
          style={{
            color: "#7c3aed",
            fontWeight: "700",
            marginBottom: "8px",
          }}
        >
          Overall Remarks
        </label>

        <textarea
          className="form-control"
          rows="3"
          placeholder="Enter remarks about received material..."
          style={{
            borderColor: "#ddd6fe",
            borderRadius: "10px",
            resize: "none",
          }}
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end gap-3">
        <button
          className="btn"
          onClick={() => navigate("/received-materials")}
          style={{
            backgroundColor: "#fff",
            color: "#8a4b08",
            border: "1px solid #e8c18f",
            borderRadius: "9px",
            padding: "11px 22px",
            fontWeight: "600",
          }}
        >
          Cancel
        </button>

        <button
          className="btn"
          style={{
            background: "linear-gradient(135deg, #ff8500, #d96c00)",
            color: "#fff",
            border: "none",
            borderRadius: "9px",
            padding: "11px 25px",
            fontWeight: "700",
          }}
        >
          <i className="bi bi-box-arrow-in-down me-2"></i>
          Receive Material
        </button>
      </div>
    </div>
  );
};

export default ReceiveMaterialForm;
