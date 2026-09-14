import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import { useFieldArray, useForm } from "react-hook-form";

const CreatePO = () => {
  const [approvedRequests, setAapprovedRequests] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "orderItems",
  });

  const addOrderItems = async () => {
    try {
      const response = await api.get("/purchase-request/approved-requests");
      console.log(response.data);
      const data = response.data;
      setAapprovedRequests(response.data);
      console.log("Calculated Order Item", data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPO = (data) => {
    console.log(data);
    navigate("/purchase-preview");
  };

  useEffect(() => {}, []);

  const navigate = useNavigate();
  return (
    <form
      onSubmit={handleSubmit(createPO)}
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
            Create Purchase Order
          </h2>

          <p
            style={{
              color: "#8a4b08",
              margin: 0,
              fontSize: "14px",
            }}
          >
            Create a purchase order for the selected supplier and materials.
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

      {/* PO Information */}
      <div
        className="mb-4"
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "25px",
          border: "1px solid #e8c18f",
          boxShadow: "0 8px 25px rgba(107,50,5,0.08)",
        }}
      >
        <h5
          style={{
            color: "#ea580c",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          <i className="bi bi-file-earmark-text me-2"></i>
          Purchase Order Details
        </h5>

        <div className="row g-4">
          {/* PO Number */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#9a3412",
                fontWeight: "700",
              }}
            >
              PO Number
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter PO number"
              style={{
                borderColor: "#fdba74",
                borderRadius: "10px",
                padding: "11px",
              }}
              {...register("poNumber", { required: "Enter PO number" })}
            />
            {errors.poNumber && (
              <small className="text-danger">{errors.poNumber.message}</small>
            )}
          </div>

          {/* PO Date */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#2563eb",
                fontWeight: "700",
              }}
            >
              PO Date
            </label>

            <input
              type="date"
              className="form-control"
              style={{
                borderColor: "#93c5fd",
                borderRadius: "10px",
                padding: "11px",
              }}
              {...register("poDate", { required: "Enter Date" })}
            />
            {errors.poDate && (
              <small className="text-danger">{errors.poDate.message}</small>
            )}
          </div>
        </div>
      </div>

      {/* Supplier Details */}
      <div
        className="mb-4"
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "25px",
          border: "1px solid #e8c18f",
          boxShadow: "0 8px 25px rgba(107,50,5,0.08)",
        }}
      >
        <h5
          style={{
            color: "#2563eb",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          <i className="bi bi-building me-2"></i>
          Supplier Details
        </h5>

        <div className="row g-4">
          {/* Supplier */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#2563eb",
                fontWeight: "700",
              }}
            >
              Supplier
            </label>

            <input
              className="form-control"
              placeholder="Enter Supplier Name"
              style={{
                borderColor: "#93c5fd",
                borderRadius: "10px",
                padding: "11px",
              }}
              {...register("supplier", { required: "Enter Supplier" })}
            />
            {errors.supplier && (
              <small className="text-danger">{errors.supplier.message}</small>
            )}
          </div>

          {/* Contact */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#059669",
                fontWeight: "700",
              }}
            >
              Contact Person
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Supplier contact person"
              style={{
                borderColor: "#6ee7b7",
                borderRadius: "10px",
                padding: "11px",
              }}
              {...register("supplierContactPerson", {
                required: "Enter Supplier Contact Person",
              })}
            />
            {errors.supplierContactPerson && (
              <small className="text-danger">
                {errors.supplierContactPerson.message}
              </small>
            )}
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#ea580c",
                fontWeight: "700",
              }}
            >
              Phone Number
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Supplier phone number"
              style={{
                borderColor: "#fdba74",
                borderRadius: "10px",
                padding: "11px",
              }}
              {...register("phoneNumber", { required: "Enter Phone Number" })}
            />
            {errors.phoneNumber && (
              <small className="text-danger">
                {errors.phoneNumber.message}
              </small>
            )}
          </div>

          {/* GST */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#d97706",
                fontWeight: "700",
              }}
            >
              GST Number
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Supplier GST number"
              style={{
                borderColor: "#fcd34d",
                borderRadius: "10px",
                padding: "11px",
              }}
              {...register("gstNumber", { required: "Enter GST number" })}
            />
            {errors.gstNumber && (
              <small className="text-danger">{errors.gstNumber.message}</small>
            )}
          </div>

          {/* Address */}
          <div className="col-12">
            <label
              className="form-label"
              style={{
                color: "#9333ea",
                fontWeight: "700",
              }}
            >
              Supplier Address
            </label>

            <textarea
              className="form-control"
              rows="3"
              placeholder="Supplier complete address"
              style={{
                borderColor: "#d8b4fe",
                borderRadius: "10px",
                padding: "11px",
                resize: "none",
              }}
              {...register("supplierAddress", {
                required: "Enter Supplier Address",
              })}
            ></textarea>
            {errors.supplierAddress && (
              <small className="text-danger">
                {errors.supplierAddress.message}
              </small>
            )}
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div
        className="mb-4"
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "25px",
          border: "1px solid #e8c18f",
          boxShadow: "0 8px 25px rgba(107,50,5,0.08)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5
            style={{
              color: "#059669",
              fontWeight: "700",
              margin: 0,
            }}
          >
            <i className="bi bi-box-seam me-2"></i>
            Order Items
          </h5>

          <button
            type="button"
            className="btn"
            style={{
              backgroundColor: "#059669",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: "600",
            }}
            onClick={() => {
              addOrderItems();
            }}
          >
            <i className="bi bi-plus-lg me-2"></i>
            Add Item
          </button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            className="table align-middle"
            style={{
              minWidth: "900px",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "linear-gradient(135deg, #eafaf3, #d1fae5)",
                }}
              >
                <th style={{ color: "#047857" }}>Product</th>
                <th style={{ color: "#047857" }}>Code</th>
                <th style={{ color: "#047857" }}>Quantity</th>
                <th style={{ color: "#047857" }}>Unit Price</th>
                <th style={{ color: "#047857" }}>Discount %</th>
                <th style={{ color: "#047857" }}>GST %</th>
                <th style={{ color: "#047857" }}>Total</th>
                <th style={{ color: "#047857" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {approvedRequests.map((r) => {
                return (
                  <tr>
                    <td
                      style={{
                        color: "#9a3412",
                        fontWeight: "700",
                      }}
                    >
                      {r.productName}
                    </td>

                    <td
                      style={{
                        color: "#2563eb",
                        fontWeight: "600",
                      }}
                    >
                      {r.productCode}
                    </td>

                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={r.requestedQuantity}
                        style={{
                          width: "90px",
                          borderColor: "#93c5fd",
                        }}
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter unit price..."
                        style={{
                          width: "110px",
                          borderColor: "#fdba74",
                        }}
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter discount price..."
                        style={{
                          width: "100px",
                          borderColor: "#c4b5fd",
                        }}
                      />
                    </td>

                    <td>
                      <input
                        className="form-control"
                        placeholder="Enter GST..."
                        style={{
                          width: "90px",
                          borderColor: "#6ee7b7",
                        }}
                      ></input>
                    </td>

                    <td
                      style={{
                        color: "#ea580c",
                        fontWeight: "700",
                      }}
                    >
                      ₹10,000
                    </td>

                    <td>
                      <button
                        className="btn"
                        type="button"
                        style={{
                          backgroundColor: "#fee2e2",
                          color: "#dc2626",
                          borderRadius: "8px",
                        }}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delivery + Payment */}
      <div className="row g-4 mb-4">
        {/* Delivery */}
        <div className="col-lg-6">
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #bae6fd",
              boxShadow: "0 8px 25px rgba(2,132,199,0.08)",
              height: "100%",
            }}
          >
            <h5
              style={{
                color: "#0284c7",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              <i className="bi bi-truck me-2"></i>
              Delivery Details
            </h5>

            <label
              className="form-label"
              style={{
                color: "#0284c7",
                fontWeight: "600",
              }}
            >
              Expected Delivery Date
            </label>

            <input
              type="date"
              className="form-control mb-3"
              style={{
                borderColor: "#7dd3fc",
                borderRadius: "10px",
                padding: "11px",
              }}
              {...register("expectedDeliveryDate", {
                required: "Enter Delivery Date",
              })}
            />
            {errors.expectedDeliverDate && (
              <small className="text-danger">
                {errors.expectedDeliveyDate.message}
              </small>
            )}

            <label
              className="form-label"
              style={{
                color: "#7c3aed",
                fontWeight: "600",
              }}
            >
              Delivery Address
            </label>

            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter delivery address"
              style={{
                borderColor: "#c4b5fd",
                borderRadius: "10px",
                resize: "none",
              }}
              {...register("deliveryAddress", {
                required: "Enter Delivery Address",
              })}
            ></textarea>
            {errors.deliveryAddress && (
              <small className="text-danger">
                {errors.deliveryAddress.message}
              </small>
            )}
          </div>
        </div>

        {/* Payment */}
        <div className="col-lg-6">
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #fde68a",
              boxShadow: "0 8px 25px rgba(217,119,6,0.08)",
              height: "100%",
            }}
          >
            <h5
              style={{
                color: "#d97706",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              <i className="bi bi-credit-card me-2"></i>
              Payment Terms
            </h5>

            <label
              className="form-label"
              style={{
                color: "#d97706",
                fontWeight: "600",
              }}
            >
              Payment Terms
            </label>

            <select
              className="form-select mb-3"
              style={{
                borderColor: "#fcd34d",
                borderRadius: "10px",
                padding: "11px",
              }}
              {...register("paymentTerms", { required: "Enter Payment Terms" })}
            >
              <option>Select Payment Terms</option>
              <option>Advance Payment</option>
              <option>30 Days Credit</option>
              <option>60 Days Credit</option>
              <option>90 Days Credit</option>
            </select>
            {errors.paymentTerms && (
              <small className="text-danger">
                {errors.paymentTerms.message}
              </small>
            )}

            <label
              className="form-label"
              style={{
                color: "#059669",
                fontWeight: "600",
              }}
            >
              Payment Due Date
            </label>

            <input
              type="date"
              className="form-control"
              style={{
                borderColor: "#6ee7b7",
                borderRadius: "10px",
                padding: "11px",
              }}
              {...register("paymentDueDate", {
                required: "Enter Payment Due Date",
              })}
            />
            {errors.paymentDueDate && (
              <small className="text-danger">
                {errors.paymentDueDate.message}
              </small>
            )}
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div
        className="mb-4"
        style={{
          background: "linear-gradient(135deg, #fff7ed, #ffe1b8)",
          border: "1px solid #f3b77d",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 8px 22px rgba(234,88,12,0.08)",
        }}
      >
        <h5
          style={{
            color: "#9a3412",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          <i className="bi bi-calculator me-2"></i>
          Order Summary
        </h5>

        <div className="d-flex justify-content-end">
          <div style={{ width: "350px" }}>
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
                ₹10,000
              </span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span
                style={{
                  color: "#7c3aed",
                  fontWeight: "600",
                }}
              >
                Discount
              </span>

              <span
                style={{
                  color: "#7c3aed",
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
                CGST
              </span>

              <span
                style={{
                  color: "#2563eb",
                  fontWeight: "700",
                }}
              >
                ₹900
              </span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span
                style={{
                  color: "#059669",
                  fontWeight: "600",
                }}
              >
                SGST
              </span>

              <span
                style={{
                  color: "#059669",
                  fontWeight: "700",
                }}
              >
                ₹900
              </span>
            </div>

            <hr style={{ borderColor: "#e8c18f" }} />

            <div className="d-flex justify-content-between">
              <span
                style={{
                  color: "#6b3205",
                  fontSize: "19px",
                  fontWeight: "800",
                }}
              >
                Grand Total
              </span>

              <span
                style={{
                  color: "#ea580c",
                  fontSize: "20px",
                  fontWeight: "800",
                }}
              >
                ₹11,800
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div
        className="mb-4"
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "25px",
          border: "1px solid #d8b4fe",
          boxShadow: "0 8px 25px rgba(124,58,237,0.06)",
        }}
      >
        <label
          className="form-label"
          style={{
            color: "#7c3aed",
            fontWeight: "700",
          }}
        >
          Notes / Terms & Conditions
        </label>

        <textarea
          className="form-control"
          rows="4"
          placeholder="Enter any additional notes or terms..."
          style={{
            borderColor: "#c4b5fd",
            borderRadius: "10px",
            resize: "none",
          }}
          {...register("termsAndConditions", {
            required: "Enter terms and conditions",
          })}
        ></textarea>
        {errors.termsAndConditions && (
          <small className="text-danger">
            {errors.termsAndConditions.message}
          </small>
        )}
      </div>

      {/* Bottom Buttons */}
      <div className="d-flex justify-content-end gap-3">
        <button
          type="button"
          className="btn"
          onClick={() => navigate("/purchase-dashboard")}
          style={{
            backgroundColor: "#fff3df",
            color: "#8a4b08",
            border: "1px solid #e8c18f",
            borderRadius: "9px",
            padding: "11px 25px",
            fontWeight: "600",
          }}
        >
          Cancel
        </button>

        <button
          type="button"
          className="btn"
          style={{
            backgroundColor: "#f59e0b",
            color: "#fff",
            borderRadius: "9px",
            padding: "11px 25px",
            fontWeight: "600",
          }}
        >
          <i className="bi bi-file-earmark me-2"></i>
          Save as Draft
        </button>

        <button
          className="btn"
          type="submit"
          style={{
            background: "linear-gradient(135deg, #ff8500, #d96c00)",
            color: "#fff",
            border: "none",
            borderRadius: "9px",
            padding: "11px 25px",
            fontWeight: "700",
          }}
        >
          <i className="bi bi-send me-2"></i>
          Create Purchase Order
        </button>
      </div>
    </form>
  );
};

export default CreatePO;
