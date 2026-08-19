import React from "react";
import { useNavigate } from "react-router-dom";

const CreateInvoice = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        padding: "30px",
      }}
    >
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <button
            className="btn"
            style={{
              color: "#1769d5",
              fontSize: "14px",
              fontWeight: "600",
              padding: 0,
            }}
            onClick={() => navigate("/accounts-dashboard")}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back to Dashboard
          </button>

          <h2
            style={{
              color: "#17233f",
              fontSize: "29px",
              fontWeight: "700",
              marginTop: "12px",
              marginBottom: "5px",
            }}
          >
            Create New Invoice
          </h2>

          <p
            style={{
              color: "#7b8495",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Create and manage customer invoices
          </p>
        </div>
      </div>

      {/* MAIN CARD */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
        }}
      >
        {/* INVOICE INFORMATION */}
        <div className="mb-4">
          <h5
            style={{
              fontSize: "19px",
              fontWeight: "700",
              color: "#17233f",
              marginBottom: "20px",
            }}
          >
            <i
              className="bi bi-file-earmark-text me-2"
              style={{ color: "#1769d5" }}
            ></i>
            Invoice Information
          </h5>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <label className="form-label">Invoice Number</label>
              <input
                type="text"
                className="form-control"
                value="INV-0001"
                readOnly
                style={{ height: "44px" }}
              />
            </div>

            <div className="col-lg-3 col-md-6">
              <label className="form-label">Invoice Date</label>
              <input
                type="date"
                className="form-control"
                style={{ height: "44px" }}
              />
            </div>

            <div className="col-lg-3 col-md-6">
              <label className="form-label">Due Date</label>
              <input
                type="date"
                className="form-control"
                style={{ height: "44px" }}
              />
            </div>

            <div className="col-lg-3 col-md-6">
              <label className="form-label">Invoice Type</label>
              <select className="form-select" style={{ height: "44px" }}>
                <option>Domestic</option>
                <option>International</option>
              </select>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* CUSTOMER DETAILS */}
        <div className="mb-4">
          <h5
            style={{
              fontSize: "19px",
              fontWeight: "700",
              color: "#17233f",
              marginBottom: "20px",
            }}
          >
            <i className="bi bi-building me-2" style={{ color: "#1769d5" }}></i>
            Customer Details
          </h5>

          <div className="row g-4">
            <div className="col-lg-6">
              <label className="form-label">Customer / Company Name</label>
              <select className="form-select" style={{ height: "44px" }}>
                <option>Select Customer</option>
                <option>Pranav Industries</option>
                <option>ABC Motors</option>
                <option>Global Filters</option>
                <option>Shree Engineering</option>
              </select>
            </div>

            <div className="col-lg-3 col-md-6">
              <label className="form-label">GST Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter GST number"
                style={{ height: "44px" }}
              />
            </div>

            <div className="col-lg-3 col-md-6">
              <label className="form-label">Contact Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter contact number"
                style={{ height: "44px" }}
              />
            </div>

            <div className="col-lg-6">
              <label className="form-label">Billing Address</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter billing address"
              ></textarea>
            </div>

            <div className="col-lg-6">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="customer@example.com"
                style={{ height: "44px" }}
              />
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* INVOICE ITEMS */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5
              style={{
                fontSize: "19px",
                fontWeight: "700",
                color: "#17233f",
                margin: 0,
              }}
            >
              <i className="bi bi-cart3 me-2" style={{ color: "#1769d5" }}></i>
              Invoice Items
            </h5>

            <button
              className="btn"
              style={{
                backgroundColor: "#1769d5",
                color: "#ffffff",
                borderRadius: "7px",
                padding: "9px 15px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              <i className="bi bi-plus-lg me-2"></i>
              Add Item
            </button>
          </div>

          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr
                  style={{
                    backgroundColor: "#f7f9fc",
                    fontSize: "12px",
                    color: "#687386",
                  }}
                >
                  <th style={{ padding: "14px" }}>PRODUCT</th>
                  <th>DESCRIPTION</th>
                  <th>QTY</th>
                  <th>UNIT PRICE</th>
                  <th>GST</th>
                  <th>AMOUNT</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ minWidth: "180px" }}>
                    <select className="form-select">
                      <option>Select Product</option>
                      <option>Oil Filter</option>
                      <option>Air Filter</option>
                      <option>Compressor Part</option>
                    </select>
                  </td>

                  <td style={{ minWidth: "200px" }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Description"
                    />
                  </td>

                  <td style={{ width: "90px" }}>
                    <input
                      type="number"
                      className="form-control"
                      value="1"
                      readOnly
                    />
                  </td>

                  <td style={{ width: "140px" }}>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="₹ 0"
                    />
                  </td>

                  <td style={{ width: "120px" }}>
                    <select className="form-select">
                      <option>18%</option>
                      <option>12%</option>
                      <option>5%</option>
                      <option>0%</option>
                    </select>
                  </td>

                  <td
                    style={{
                      fontWeight: "600",
                      color: "#17233f",
                    }}
                  >
                    ₹0.00
                  </td>

                  <td>
                    <button
                      className="btn"
                      style={{
                        color: "#dc3545",
                        fontSize: "18px",
                      }}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <select className="form-select">
                      <option>Select Product</option>
                      <option>Oil Filter</option>
                      <option>Air Filter</option>
                      <option>Compressor Part</option>
                    </select>
                  </td>

                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Description"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Qty"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="₹ 0"
                    />
                  </td>

                  <td>
                    <select className="form-select">
                      <option>18%</option>
                      <option>12%</option>
                      <option>5%</option>
                      <option>0%</option>
                    </select>
                  </td>

                  <td
                    style={{
                      fontWeight: "600",
                      color: "#17233f",
                    }}
                  >
                    ₹0.00
                  </td>

                  <td>
                    <button
                      className="btn"
                      style={{
                        color: "#dc3545",
                        fontSize: "18px",
                      }}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr className="my-4" />

        {/* PAYMENT + TOTAL */}
        <div className="row g-4">
          <div className="col-lg-7">
            <h5
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#17233f",
                marginBottom: "20px",
              }}
            >
              <i
                className="bi bi-credit-card me-2"
                style={{ color: "#1769d5" }}
              ></i>
              Payment Details
            </h5>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Payment Terms</label>
                <select className="form-select">
                  <option>Due on Receipt</option>
                  <option>Net 15 Days</option>
                  <option>Net 30 Days</option>
                  <option>Net 60 Days</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Payment Method</label>
                <select className="form-select">
                  <option>Bank Transfer</option>
                  <option>Cash</option>
                  <option>Cheque</option>
                  <option>UPI</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Notes / Terms & Conditions</label>

                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter payment terms, notes or additional information..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* TOTAL BOX */}
          <div className="col-lg-5">
            <div
              style={{
                backgroundColor: "#f7f9fc",
                borderRadius: "12px",
                padding: "25px",
              }}
            >
              <h5
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#17233f",
                  marginBottom: "20px",
                }}
              >
                Invoice Summary
              </h5>

              <div className="d-flex justify-content-between mb-3">
                <span style={{ color: "#687386", fontSize: "14px" }}>
                  Subtotal
                </span>

                <span
                  style={{
                    color: "#17233f",
                    fontWeight: "600",
                  }}
                >
                  ₹10,000.00
                </span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span style={{ color: "#687386", fontSize: "14px" }}>
                  Discount
                </span>

                <span
                  style={{
                    color: "#17233f",
                    fontWeight: "600",
                  }}
                >
                  ₹500.00
                </span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span style={{ color: "#687386", fontSize: "14px" }}>
                  GST (18%)
                </span>

                <span
                  style={{
                    color: "#17233f",
                    fontWeight: "600",
                  }}
                >
                  ₹1,800.00
                </span>
              </div>

              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#17233f",
                  }}
                >
                  Grand Total
                </span>

                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#1769d5",
                  }}
                >
                  ₹11,300.00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="d-flex justify-content-end gap-3 mt-5">
          <button
            className="btn"
            style={{
              border: "1px solid #d7dce5",
              color: "#687386",
              backgroundColor: "#ffffff",
              padding: "11px 22px",
              borderRadius: "7px",
              fontWeight: "600",
            }}
          >
            <i className="bi bi-save me-2"></i>
            Save Draft
          </button>

          <button
            className="btn"
            style={{
              backgroundColor: "#1769d5",
              color: "#ffffff",
              padding: "11px 22px",
              borderRadius: "7px",
              fontWeight: "600",
            }}
          >
            <i className="bi bi-file-earmark-check me-2"></i>
            Generate Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
