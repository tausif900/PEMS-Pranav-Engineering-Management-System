import React from "react";
import { useNavigate } from "react-router-dom";

const InvoicePreview = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eef1f5",
        padding: "30px 15px",
      }}
    >
      {/* ================= TOP ACTION BAR ================= */}

      <div
        className="d-flex justify-content-between align-items-center mb-4 no-print"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <button
          className="btn"
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "#ffffff",
            color: "#1769d5",
            border: "1px solid #dce2ea",
            borderRadius: "7px",
            padding: "10px 18px",
            fontSize: "14px",
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
            backgroundColor: "#1769d5",
            color: "#ffffff",
            borderRadius: "7px",
            padding: "10px 20px",
            fontSize: "14px",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(23,105,213,0.25)",
          }}
        >
          <i className="bi bi-printer me-2"></i>
          Print Invoice
        </button>
      </div>

      {/* ================= A4 INVOICE ================= */}

      <div
        id="invoice"
        style={{
          width: "210mm",
          minHeight: "297mm",
          maxWidth: "100%",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "18mm",
          boxSizing: "border-box",
          boxShadow: "0 5px 25px rgba(0,0,0,0.12)",
          color: "#17233f",
        }}
      >
        {/* ================= COMPANY HEADER ================= */}

        <div
          className="d-flex justify-content-between align-items-start"
          style={{
            paddingBottom: "20px",
            borderBottom: "2px solid #1769d5",
          }}
        >
          <div>
            <div
              className="d-flex align-items-center mb-2"
              style={{
                color: "#1769d5",
              }}
            >
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "8px",
                  backgroundColor: "#1769d5",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginRight: "12px",
                }}
              >
                PE
              </div>

              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "24px",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                  }}
                >
                  PRANAV ENGINEERING
                </h2>

                <div
                  style={{
                    fontSize: "11px",
                    color: "#687386",
                    marginTop: "2px",
                  }}
                >
                  Industrial Filters & Compressor Parts
                </div>
              </div>
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "#687386",
                lineHeight: "1.7",
              }}
            >
              <div>
                <strong>Address:</strong> Mumbai, Maharashtra, India
              </div>

              <div>
                <strong>Phone:</strong> +91 98765 43210
              </div>

              <div>
                <strong>Email:</strong> accounts@pranavengineering.com
              </div>

              <div>
                <strong>GSTIN:</strong> 27ABCDE1234F1Z5
              </div>
            </div>
          </div>

          <div
            className="text-end"
            style={{
              minWidth: "180px",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "30px",
                fontWeight: "800",
                color: "#1769d5",
                letterSpacing: "1px",
              }}
            >
              INVOICE
            </h1>

            <div
              style={{
                marginTop: "12px",
                fontSize: "12px",
                lineHeight: "1.8",
                color: "#687386",
              }}
            >
              <div>
                <strong>Invoice No:</strong> INV-0001
              </div>

              <div>
                <strong>Invoice Date:</strong> 19 Aug 2026
              </div>

              <div>
                <strong>Due Date:</strong> 29 Aug 2026
              </div>
            </div>
          </div>
        </div>

        {/* ================= BILL TO / SHIP TO ================= */}

        <div
          className="row"
          style={{
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <div className="col-7">
            <div
              style={{
                fontSize: "11px",
                color: "#8993a5",
                fontWeight: "700",
                textTransform: "uppercase",
                marginBottom: "8px",
                letterSpacing: "0.5px",
              }}
            >
              Bill To
            </div>

            <div
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#17233f",
                marginBottom: "5px",
              }}
            >
              ABC Industries Pvt. Ltd.
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "#687386",
                lineHeight: "1.7",
              }}
            >
              125, Industrial Estate, Andheri East
              <br />
              Mumbai, Maharashtra - 400069
              <br />
              GSTIN: 27AAACA1234A1Z5
              <br />
              Contact: +91 99887 66554
              <br />
              Email: accounts@abcindustries.com
            </div>
          </div>

          <div className="col-5">
            <div
              style={{
                fontSize: "11px",
                color: "#8993a5",
                fontWeight: "700",
                textTransform: "uppercase",
                marginBottom: "8px",
                letterSpacing: "0.5px",
              }}
            >
              Invoice Type
            </div>

            <div
              style={{
                display: "inline-block",
                backgroundColor: "#eaf3ff",
                color: "#1769d5",
                padding: "6px 13px",
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              Domestic Invoice
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "#687386",
                lineHeight: "1.7",
              }}
            >
              <div>
                <strong>Payment Terms:</strong> Net 30 Days
              </div>

              <div>
                <strong>Payment Method:</strong> Bank Transfer
              </div>
            </div>
          </div>
        </div>

        {/* ================= ITEMS TABLE ================= */}

        <div style={{ marginTop: "10px" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "11px",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#1769d5",
                  color: "#ffffff",
                }}
              >
                <th
                  style={{
                    padding: "10px 8px",
                    textAlign: "left",
                    width: "6%",
                  }}
                >
                  #
                </th>

                <th
                  style={{
                    padding: "10px 8px",
                    textAlign: "left",
                    width: "25%",
                  }}
                >
                  Product
                </th>

                <th
                  style={{
                    padding: "10px 8px",
                    textAlign: "left",
                    width: "24%",
                  }}
                >
                  Description
                </th>

                <th
                  style={{
                    padding: "10px 8px",
                    textAlign: "center",
                    width: "8%",
                  }}
                >
                  Qty
                </th>

                <th
                  style={{
                    padding: "10px 8px",
                    textAlign: "right",
                    width: "12%",
                  }}
                >
                  Rate
                </th>

                <th
                  style={{
                    padding: "10px 8px",
                    textAlign: "center",
                    width: "10%",
                  }}
                >
                  GST
                </th>

                <th
                  style={{
                    padding: "10px 8px",
                    textAlign: "right",
                    width: "15%",
                  }}
                >
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={tableCellStyle}>1</td>

                <td
                  style={{
                    ...tableCellStyle,
                    fontWeight: "600",
                  }}
                >
                  Oil Filter
                </td>

                <td style={tableCellStyle}>Heavy Duty Industrial Oil Filter</td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "center",
                  }}
                >
                  5
                </td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "right",
                  }}
                >
                  ₹1,200
                </td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "center",
                  }}
                >
                  18%
                </td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "right",
                    fontWeight: "600",
                  }}
                >
                  ₹7,080
                </td>
              </tr>

              <tr>
                <td style={tableCellStyle}>2</td>

                <td
                  style={{
                    ...tableCellStyle,
                    fontWeight: "600",
                  }}
                >
                  Air Filter
                </td>

                <td style={tableCellStyle}>High Performance Air Filter</td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "center",
                  }}
                >
                  2
                </td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "right",
                  }}
                >
                  ₹1,500
                </td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "center",
                  }}
                >
                  18%
                </td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "right",
                    fontWeight: "600",
                  }}
                >
                  ₹3,540
                </td>
              </tr>

              <tr>
                <td style={tableCellStyle}>3</td>

                <td
                  style={{
                    ...tableCellStyle,
                    fontWeight: "600",
                  }}
                >
                  Compressor Part
                </td>

                <td style={tableCellStyle}>Industrial Compressor Spare Part</td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "center",
                  }}
                >
                  2
                </td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "right",
                  }}
                >
                  ₹2,500
                </td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "center",
                  }}
                >
                  18%
                </td>

                <td
                  style={{
                    ...tableCellStyle,
                    textAlign: "right",
                    fontWeight: "600",
                  }}
                >
                  ₹5,900
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= SUMMARY ================= */}

        <div
          className="d-flex justify-content-end"
          style={{
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "300px",
            }}
          >
            <div
              className="d-flex justify-content-between"
              style={summaryRowStyle}
            >
              <span>Subtotal</span>
              <strong>₹16,520.00</strong>
            </div>

            <div
              className="d-flex justify-content-between"
              style={summaryRowStyle}
            >
              <span>Discount</span>
              <strong>- ₹500.00</strong>
            </div>

            <div
              className="d-flex justify-content-between"
              style={summaryRowStyle}
            >
              <span>Taxable Amount</span>
              <strong>₹16,020.00</strong>
            </div>

            <div
              className="d-flex justify-content-between"
              style={summaryRowStyle}
            >
              <span>GST (18%)</span>
              <strong>₹2,883.60</strong>
            </div>

            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                marginTop: "8px",
                padding: "13px 0",
                borderTop: "2px solid #1769d5",
                fontSize: "15px",
              }}
            >
              <strong>Grand Total</strong>

              <strong
                style={{
                  fontSize: "20px",
                  color: "#1769d5",
                }}
              >
                ₹18,903.60
              </strong>
            </div>
          </div>
        </div>

        {/* ================= AMOUNT IN WORDS ================= */}

        <div
          style={{
            backgroundColor: "#f7f9fc",
            borderRadius: "6px",
            padding: "11px 13px",
            marginTop: "10px",
            fontSize: "11px",
            color: "#687386",
          }}
        >
          <strong style={{ color: "#17233f" }}>Amount in Words:</strong>{" "}
          Eighteen Thousand Nine Hundred Three Rupees and Sixty Paise Only.
        </div>

        {/* ================= FOOTER INFORMATION ================= */}

        <div
          className="row"
          style={{
            marginTop: "30px",
            paddingTop: "20px",
            borderTop: "1px solid #dce2ea",
          }}
        >
          <div className="col-7">
            <div
              style={{
                fontSize: "11px",
                fontWeight: "700",
                color: "#17233f",
                marginBottom: "8px",
              }}
            >
              Terms & Conditions
            </div>

            <ul
              style={{
                margin: 0,
                paddingLeft: "16px",
                fontSize: "10px",
                color: "#687386",
                lineHeight: "1.8",
              }}
            >
              <li>Payment should be made within the agreed payment terms.</li>

              <li>
                Goods once sold will not be returned unless agreed otherwise.
              </li>

              <li>
                Any dispute shall be subject to the jurisdiction of Mumbai.
              </li>

              <li>Please mention the invoice number while making payment.</li>
            </ul>
          </div>

          <div
            className="col-5 text-end"
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: "700",
                color: "#17233f",
                marginBottom: "45px",
              }}
            >
              For PRANAV ENGINEERING
            </div>

            <div
              style={{
                borderTop: "1px solid #687386",
                width: "150px",
                marginLeft: "auto",
                paddingTop: "7px",
                fontSize: "10px",
                color: "#687386",
              }}
            >
              Authorized Signature
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div
          className="text-center"
          style={{
            marginTop: "35px",
            paddingTop: "12px",
            borderTop: "1px solid #e5e8ed",
            fontSize: "9px",
            color: "#8993a5",
          }}
        >
          This is a computer-generated invoice and does not require a physical
          signature.
        </div>
      </div>

      {/* ================= PRINT CSS ================= */}

      <style>
        {`
          @media print {

            @page {
              size: A4;
              margin: 0;
            }

            body {
              margin: 0 !important;
              padding: 0 !important;
              background: #ffffff !important;
            }

            .no-print {
              display: none !important;
            }

            #invoice {
              width: 210mm !important;
              min-height: 297mm !important;
              margin: 0 !important;
              padding: 15mm !important;
              box-shadow: none !important;
              max-width: none !important;
            }
          }

          @media (max-width: 768px) {

            #invoice {
              width: 100% !important;
              min-height: auto !important;
              padding: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

/* ================= REUSABLE STYLES ================= */

const tableCellStyle = {
  padding: "10px 8px",
  borderBottom: "1px solid #e5e8ed",
  color: "#687386",
  verticalAlign: "middle",
};

const summaryRowStyle = {
  padding: "7px 0",
  fontSize: "12px",
  color: "#687386",
};

export default InvoicePreview;
