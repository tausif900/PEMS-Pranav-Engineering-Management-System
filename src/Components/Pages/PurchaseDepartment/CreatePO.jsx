import { useEffect, useState } from "react";
import { api } from "../../api";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreatePO = () => {
  const navigate = useNavigate();
  const [approvedRequest, setApprovedRequest] = useState([]);
  const [totalAmountOfOrderItem, setTotalAmountOfOrderItem] = useState([]);
  const [orderSummary, setOrderSummary] = useState({
    subTotal: 0,
    discount: 0,
    cgst: 0,
    sgst: 0,
    grandTotal: 0,
  });

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "orderItems",
  });

  // fecthing approved request
  const fetchApprovedRequest = async () => {
    try {
      const response = await api.get("/purchase-request/approved-requests");
      console.log(response.data);
      setApprovedRequest(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // function for creating PO
  const createPO = async (data) => {
    try {
      console.log(data);
      const orderItems = data.orderItems;
      console.log(orderItems);

      // subtotal =  quantity of per item * price of per item
      const subTotal = orderItems.reduce((total, item) => {
        return total + Number(item.requestedQuantity) * Number(item.unitPrice);
      }, 0);

      // totalDiscount = Price of per item * discount Of per item then us price se utna discount minus krdege
      const totalDiscount = orderItems.reduce((total, item) => {
        const itemTotal =
          Number(item.requestedQuantity) * Number(item.unitPrice);
        const discount = (itemTotal * Number(item.discount || 0)) / 100;
        return total + discount;
      }, 0);

      const afterDiscount = subTotal - totalDiscount;

      // Cgst 9%
      const totalCgst = orderItems.reduce((total, item) => {
        const itemTotal =
          Number(item.requestedQuantity) * Number(item.unitPrice);
        const cgst = (itemTotal * 9) / 100;
        return total + cgst;
      }, 0);

      // Sgst 9%
      const totalSgst = orderItems.reduce((total, item) => {
        const itemTotal =
          Number(item.requestedQuantity) * Number(item.unitPrice);
        const sgst = (itemTotal * 9) / 100;
        return total + sgst;
      }, 0);

      // GrandTotal
      const grandTotal = afterDiscount + totalCgst + totalSgst;

      setOrderSummary({
        subTotal,
        discount: totalDiscount,
        cgst: totalCgst,
        sgst: totalSgst,
        grandTotal,
      });

      const poData = {
        ...data,
        subTotal,
        discount: totalDiscount,
        cgst: totalCgst,
        sgst: totalSgst,
        grandTotal,
      };

      const response = await api.post("purchase-order/create-PO", poData);
      console.log(response.data);
      navigate(`/purchase-preview/${response.data.poId}`);
    } catch (error) {
      console.log(error);
    }
  };

  // calculate orderItems
  const calculateOrderItem = async (index) => {
    try {
      const item = watch(`orderItems.${index}`);
      const response = await api.post("/order-items/add-items", item);
      console.log(response.data);
      setTotalAmountOfOrderItem((prev) => ({
        ...prev,
        [index]: response.data.totalAmount,
      }));

      update(index, { ...item, totalAmount: response.data.totalAmount });
    } catch (error) {
      console.log(error);
    }
  };

  // calculate subtotal

  useEffect(() => {}, []);

  return (
    <form
      style={{
        minHeight: "100vh",
        padding: "35px",
        background: "linear-gradient(135deg, #fffaf2, #fff3df)",
      }}
      onSubmit={handleSubmit(createPO)}
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
              {...register("poNumber", { required: "Provide PO Number" })}
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
              {...register("poDate", { required: "PO date is required" })}
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
              {...register("supplier", {
                required: "Supplier can not be empty",
              })}
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
                required: "Provide contact of supplier",
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
              {...register("phoneNumber", { required: "Provide Phone number" })}
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
              {...register("gstNumber", { required: "GST number is required" })}
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
              {...register("supplierAddress", { required: "Provide Address" })}
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
            className="btn btn-success"
            onClick={async () => {
              const data = await fetchApprovedRequest();
              append(
                data.map((r) => ({
                  productName: r.productName,
                  productCode: r.productCode,
                  requestedQuantity: r.requestedQuantity,
                  unitPrice: "",
                  discount: "",
                  gst: "",
                  totalAmount: 0,
                })),
              );
            }}
          >
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

            {approvedRequest.length > 0 ? (
              <>
                <tbody>
                  {fields.map((field, index) => {
                    return (
                      <tr key={field.id}>
                        <td
                          style={{
                            color: "#9a3412",
                            fontWeight: "700",
                          }}
                        >
                          {field.productName}
                        </td>

                        <td
                          style={{
                            color: "#2563eb",
                            fontWeight: "600",
                          }}
                        >
                          {field.productCode}
                        </td>

                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={field.requestedQuantity}
                            style={{
                              width: "90px",
                              borderColor: "#93c5fd",
                            }}
                            readOnly
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
                            {...register(`orderItems.${index}.unitPrice`, {
                              required: "unit price",
                            })}
                          />
                          {errors.unitPrice && (
                            <small className="text-danger">
                              {errors.unitPrice.message}
                            </small>
                          )}
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
                            required
                            {...register(`orderItems.${index}.discount`, {
                              required: "discount",
                            })}
                          />
                          {errors.discount && (
                            <small className="text-danger">
                              {errors.discount.message}
                            </small>
                          )}
                        </td>

                        <td>
                          <input
                            className="form-control"
                            placeholder="Enter GST..."
                            style={{
                              width: "90px",
                              borderColor: "#6ee7b7",
                            }}
                            required
                            {...register(`orderItems.${index}.gst`, {
                              required: "gst",
                            })}
                          />
                          {errors.gst && (
                            <small className="text-danger">
                              {errors.gst.message}
                            </small>
                          )}
                        </td>

                        <td
                          style={{
                            color: "#ea580c",
                            fontWeight: "700",
                          }}
                        >
                          ₹ {totalAmountOfOrderItem[index] || 0}
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
                          <button
                            type="button"
                            className="btn btn-primary m-2"
                            onClick={() => {
                              calculateOrderItem(index);
                            }}
                          >
                            Calculate
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </>
            ) : (
              <button className="btn btn-primary" hidden>
                Calculate
              </button>
            )}
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
              className="form-control"
              style={{
                borderColor: "#7dd3fc",
                borderRadius: "10px",
                padding: "11px",
              }}
              {...register("expectedDeliveryDate", {
                required: "Provide Expected Delivery Date",
              })}
            />
            {errors.expectedDeliveryDate && (
              <small className="text-danger">
                {errors.expectedDeliveryDate.message}
              </small>
            )}

            <div>
              {" "}
              <label
                className="form-label mt-3"
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
                  required: "Provide Delivery Address",
                })}
              ></textarea>
              {errors.deliveryAddress && (
                <small className="text-danger">
                  {errors.deliveryAddress.message}
                </small>
              )}
            </div>
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

            <div>
              {" "}
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
                className="form-select"
                style={{
                  borderColor: "#fcd34d",
                  borderRadius: "10px",
                  padding: "11px",
                }}
                {...register("paymentTerms", {
                  required: "Select Payment Terms",
                })}
              >
                <option value="">Select Payment Terms</option>
                <option>Advance Payment</option>
                <option>30 Days Credit</option>
                <option>60 Days Credit</option>
                <option>90 Days Credit</option>
              </select>
              {errors.paymentTerms && (
                <small className="text-danger">Select Payment Terms</small>
              )}
            </div>

            <label
              className="form-label mt-3"
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
              {...register("paymentDueDate", { required: "Payment Due Date" })}
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
                ₹ {orderSummary.subTotal}
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
                ₹ {orderSummary.discount}
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
                ₹ {orderSummary.cgst}
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
                ₹ {orderSummary.sgst}
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
                ₹ {orderSummary.grandTotal}
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
          {...register("termsAndCondition", {
            required: "Terms and Condition",
          })}
        ></textarea>
        {errors.termsAndCondition && (
          <small className="text-danger">
            {errors.termsAndCondition.message}
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
