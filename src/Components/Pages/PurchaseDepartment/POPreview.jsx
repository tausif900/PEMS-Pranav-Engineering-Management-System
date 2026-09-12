import React from "react";
import { useNavigate } from "react-router-dom";

const PurchaseOrderPreview = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "35px",
        background: "linear-gradient(135deg, #fffaf2, #fff3df)",
      }}
    >
      {/* Top Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2
            style={{
              color: "#6b3205",
              fontWeight: "700",
              marginBottom: "5px",
            }}
          >
            Purchase Order Preview
          </h2>

          <p
            style={{
              color: "#8a4b08",
              margin: 0,
              fontSize: "14px",
            }}
          >
            Review the purchase order before sending it to the supplier.
          </p>
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn"
            onClick={() => navigate("/purchase/create-PO")}
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

          <button
            className="btn"
            onClick={() => window.print()}
            style={{
              backgroundColor: "#2563eb",
              color: "#fff",
              borderRadius: "9px",
              padding: "10px 18px",
              fontWeight: "600",
            }}
          >
            <i className="bi bi-printer me-2"></i>
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* PO Document */}
      <div
        id="purchase-order"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "6px",
          padding: "45px",
          boxShadow: "0 10px 35px rgba(107,50,5,0.15)",
          border: "1px solid #e5e7eb",
        }}
      >
        {/* Company Header */}
        <div
          className="d-flex justify-content-between align-items-start pb-4 mb-4"
          style={{
            borderBottom: "3px solid #ff8500",
          }}
        >
          <div>
            <h1
              style={{
                color: "#6b3205",
                fontWeight: "800",
                marginBottom: "5px",
              }}
            >
              PRANAV ENGINEERING
            </h1>

            <p
              style={{
                color: "#8a4b08",
                marginBottom: "4px",
                fontSize: "14px",
              }}
            >
              Oil Filter • Air Filter • Compressor Parts
            </p>

            <p
              style={{
                color: "#64748b",
                margin: 0,
                fontSize: "13px",
              }}
            >
              Mumbai, Maharashtra, India
            </p>

            <p
              style={{
                color: "#64748b",
                margin: 0,
                fontSize: "13px",
              }}
            >
              GSTIN: 27ABCDE1234F1Z5
            </p>
          </div>

          <div className="text-end">
            <h2
              style={{
                color: "#ea580c",
                fontWeight: "800",
                marginBottom: "8px",
              }}
            >
              PURCHASE ORDER
            </h2>

            <p
              style={{
                margin: "3px 0",
                color: "#475569",
                fontSize: "14px",
              }}
            >
              <strong>PO Number:</strong> PO-2026-001
            </p>

            <p
              style={{
                margin: "3px 0",
                color: "#475569",
                fontSize: "14px",
              }}
            >
              <strong>PO Date:</strong> 29-Aug-2026
            </p>

            <p
              style={{
                margin: "3px 0",
                color: "#475569",
                fontSize: "14px",
              }}
            >
              <strong>PR Number:</strong> PR-001
            </p>
          </div>
        </div>

        {/* Supplier & Delivery */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "#fff7ed",
                border: "1px solid #fed7aa",
                borderRadius: "10px",
                padding: "18px",
              }}
            >
              <h6
                style={{
                  color: "#ea580c",
                  fontWeight: "800",
                  marginBottom: "12px",
                }}
              >
                SUPPLIER
              </h6>

              <h5
                style={{
                  color: "#9a3412",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                Parmar Engineering
              </h5>

              <p
                style={{
                  color: "#475569",
                  margin: "4px 0",
                  fontSize: "13px",
                }}
              >
                Contact: Rajesh Parmar
              </p>

              <p
                style={{
                  color: "#475569",
                  margin: "4px 0",
                  fontSize: "13px",
                }}
              >
                Phone: 9876543210
              </p>

              <p
                style={{
                  color: "#475569",
                  margin: "4px 0",
                  fontSize: "13px",
                }}
              >
                Email: parmar@example.com
              </p>

              <p
                style={{
                  color: "#475569",
                  margin: "4px 0",
                  fontSize: "13px",
                }}
              >
                GSTIN: 27ABCDE1234F1Z5
              </p>

              <p
                style={{
                  color: "#475569",
                  margin: "4px 0",
                  fontSize: "13px",
                }}
              >
                Mumbai, Maharashtra
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "10px",
                padding: "18px",
              }}
            >
              <h6
                style={{
                  color: "#2563eb",
                  fontWeight: "800",
                  marginBottom: "12px",
                }}
              >
                DELIVERY DETAILS
              </h6>

              <p
                style={{
                  color: "#475569",
                  margin: "5px 0",
                  fontSize: "13px",
                }}
              >
                <strong>Expected Delivery:</strong> 05-Sep-2026
              </p>

              <p
                style={{
                  color: "#475569",
                  margin: "5px 0",
                  fontSize: "13px",
                }}
              >
                <strong>Delivery Address:</strong>
              </p>

              <p
                style={{
                  color: "#475569",
                  margin: "4px 0",
                  fontSize: "13px",
                }}
              >
                Pranav Engineering,
                <br />
                Industrial Estate,
                <br />
                Mumbai, Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <h6
          style={{
            color: "#059669",
            fontWeight: "800",
            marginBottom: "12px",
          }}
        >
          ORDER ITEMS
        </h6>

        <div
          style={{
            overflowX: "auto",
            marginBottom: "25px",
          }}
        >
          <table
            className="table"
            style={{
              border: "1px solid #e2e8f0",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
                }}
              >
                <th style={{ color: "#047857" }}>#</th>
                <th style={{ color: "#047857" }}>Product</th>
                <th style={{ color: "#047857" }}>Code</th>
                <th style={{ color: "#047857" }}>Qty</th>
                <th style={{ color: "#047857" }}>Unit Price</th>
                <th style={{ color: "#047857" }}>Discount</th>
                <th style={{ color: "#047857" }}>GST</th>
                <th style={{ color: "#047857" }}>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ color: "#64748b" }}>1</td>

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
                    color: "#7c3aed",
                    fontWeight: "600",
                  }}
                >
                  20 PCS
                </td>

                <td
                  style={{
                    color: "#059669",
                    fontWeight: "600",
                  }}
                >
                  ₹500
                </td>

                <td
                  style={{
                    color: "#d97706",
                    fontWeight: "600",
                  }}
                >
                  ₹0
                </td>

                <td
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  18%
                </td>

                <td
                  style={{
                    color: "#ea580c",
                    fontWeight: "700",
                  }}
                >
                  ₹10,000
                </td>
              </tr>

              <tr>
                <td style={{ color: "#64748b" }}>2</td>

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
                    color: "#7c3aed",
                    fontWeight: "600",
                  }}
                >
                  10 PCS
                </td>

                <td
                  style={{
                    color: "#059669",
                    fontWeight: "600",
                  }}
                >
                  ₹700
                </td>

                <td
                  style={{
                    color: "#d97706",
                    fontWeight: "600",
                  }}
                >
                  ₹0
                </td>

                <td
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  18%
                </td>

                <td
                  style={{
                    color: "#ea580c",
                    fontWeight: "700",
                  }}
                >
                  ₹7,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Section */}
        <div className="row">
          {/* Payment Terms */}
          <div className="col-md-7">
            <div
              style={{
                backgroundColor: "#faf5ff",
                border: "1px solid #ddd6fe",
                borderRadius: "10px",
                padding: "18px",
              }}
            >
              <h6
                style={{
                  color: "#7c3aed",
                  fontWeight: "800",
                  marginBottom: "10px",
                }}
              >
                PAYMENT TERMS
              </h6>

              <p
                style={{
                  color: "#475569",
                  fontSize: "13px",
                  margin: "5px 0",
                }}
              >
                30 Days Credit
              </p>

              <p
                style={{
                  color: "#475569",
                  fontSize: "13px",
                  margin: "5px 0",
                }}
              >
                Payment due after receipt of supplier invoice.
              </p>

              <h6
                style={{
                  color: "#7c3aed",
                  fontWeight: "800",
                  marginTop: "18px",
                  marginBottom: "8px",
                }}
              >
                TERMS & CONDITIONS
              </h6>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                Please supply the materials as per the specifications mentioned
                in this purchase order. Material quality and quantity will be
                verified upon receipt.
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="col-md-5">
            <div
              style={{
                backgroundColor: "#fff7ed",
                border: "1px solid #fed7aa",
                borderRadius: "10px",
                padding: "18px",
              }}
            >
              <div className="d-flex justify-content-between mb-2">
                <span
                  style={{
                    color: "#8a4b08",
                    fontWeight: "600",
                  }}
                >
                  Sub Total
                </span>

                <span
                  style={{
                    color: "#9a3412",
                    fontWeight: "700",
                  }}
                >
                  ₹17,000
                </span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span
                  style={{
                    color: "#d97706",
                    fontWeight: "600",
                  }}
                >
                  Discount
                </span>

                <span
                  style={{
                    color: "#d97706",
                    fontWeight: "700",
                  }}
                >
                  ₹0
                </span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  CGST 9%
                </span>

                <span
                  style={{
                    color: "#2563eb",
                    fontWeight: "700",
                  }}
                >
                  ₹1,530
                </span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span
                  style={{
                    color: "#059669",
                    fontWeight: "600",
                  }}
                >
                  SGST 9%
                </span>

                <span
                  style={{
                    color: "#059669",
                    fontWeight: "700",
                  }}
                >
                  ₹1,530
                </span>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <span
                  style={{
                    color: "#6b3205",
                    fontWeight: "800",
                    fontSize: "18px",
                  }}
                >
                  Grand Total
                </span>

                <span
                  style={{
                    color: "#ea580c",
                    fontWeight: "800",
                    fontSize: "19px",
                  }}
                >
                  ₹20,060
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div
          className="row mt-5 pt-4"
          style={{
            borderTop: "1px solid #e2e8f0",
          }}
        >
          <div className="col-md-6">
            <p
              style={{
                color: "#64748b",
                fontSize: "12px",
              }}
            >
              Prepared By
            </p>

            <p
              style={{
                color: "#6b3205",
                fontWeight: "700",
              }}
            >
              Purchase Department
            </p>
          </div>

          <div className="col-md-6 text-end">
            <p
              style={{
                color: "#64748b",
                fontSize: "12px",
              }}
            >
              Authorized By
            </p>

            <p
              style={{
                color: "#6b3205",
                fontWeight: "700",
              }}
            >
              Pranav Engineering
            </p>
          </div>
        </div>

        {/* Send PO */}
        <div
          className="text-center mt-4 pt-4"
          style={{
            borderTop: "1px dashed #e8c18f",
          }}
        >
          <button
            className="btn"
            style={{
              background: "linear-gradient(135deg, #ff8500, #d96c00)",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "12px 30px",
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            <i className="bi bi-envelope me-2"></i>
            Send Purchase Order to Supplier
          </button>
        </div>
      </div>

      {/* PDF Format */}
      <style>
        {`
    @media print {
      body {
        margin: 0;
        padding: 0;
        background: white !important;
      }

      body * {
        visibility: hidden;
      }

      #purchase-order,
      #purchase-order * {
        visibility: visible;
      }

      #purchase-order {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        max-width: none !important;
        margin: 0 !important;
        padding: 30px !important;
        box-shadow: none !important;
        border: none !important;
      }
    }
  `}
      </style>
    </div>
  );
};

export default PurchaseOrderPreview;
