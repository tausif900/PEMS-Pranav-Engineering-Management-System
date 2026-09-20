import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddSupplier = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addSupplier = (data) => {
    console.log(data);
    reset();
  };

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
            Add Supplier
          </h2>

          <p
            style={{
              color: "#8a4b08",
              margin: 0,
              fontSize: "14px",
            }}
          >
            Add a new supplier to the purchase department.
          </p>
        </div>

        <button
          className="btn"
          onClick={() => navigate("/purchase/suppliers")}
          style={{
            backgroundColor: "#8a4b08",
            color: "#fff",
            borderRadius: "9px",
            padding: "10px 18px",
            fontWeight: "600",
          }}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Back
        </button>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit(addSupplier)}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          padding: "30px",
          border: "1px solid #e8c18f",
          boxShadow: "0 8px 25px rgba(107,50,5,0.08)",
        }}
      >
        <div className="row g-4">
          {/* Supplier Name */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#ea580c",
                fontWeight: "700",
              }}
            >
              Supplier Company Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter supplier name"
              style={{
                border: "1px solid #fdba74",
                borderRadius: "10px",
                padding: "11px",
                boxShadow: "none",
              }}
              {...register("supplierName", {
                required: "Please Enter a name.",
              })}
            />
            {errors.supplierName && (
              <small className="text-danger">
                {errors.supplierName.message}
              </small>
            )}
          </div>

          {/* Supplier Code */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#2563eb",
                fontWeight: "700",
              }}
            >
              Supplier Code
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter supplier code"
              style={{
                border: "1px solid #93c5fd",
                borderRadius: "10px",
                padding: "11px",
                boxShadow: "none",
                textTransform: "uppercase",
              }}
              {...register("supplierCode", {
                required: "Please Enter a Code",
                setValueAs: (value) => value.toUpperCase(),
              })}
            />
            {errors.supplierCode && (
              <small className="text-danger">
                {errors.supplierCode.message}
              </small>
            )}
          </div>

          {/* Contact Person */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#7c3aed",
                fontWeight: "700",
              }}
            >
              Contact Person
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter contact person name"
              style={{
                border: "1px solid #c4b5fd",
                borderRadius: "10px",
                padding: "11px",
                boxShadow: "none",
              }}
              {...register("contactPerson", {
                required: "Please Enter a name.",
              })}
            />
            {errors.contactPerson && (
              <small className="text-danger">
                {errors.contactPerson.message}
              </small>
            )}
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#059669",
                fontWeight: "700",
              }}
            >
              Phone Number
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              style={{
                border: "1px solid #6ee7b7",
                borderRadius: "10px",
                padding: "11px",
                boxShadow: "none",
              }}
              {...register("phoneNumber", {
                required: "Please Enter a name.",
              })}
            />
            {errors.phoneNumber && (
              <small className="text-danger">
                {errors.phoneNumber.message}
              </small>
            )}
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#0891b2",
                fontWeight: "700",
              }}
            >
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter supplier email"
              style={{
                border: "1px solid #67e8f9",
                borderRadius: "10px",
                padding: "11px",
                boxShadow: "none",
              }}
              {...register("email", {
                required: "Please Enter email",
                pattern: {
                  value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>

          {/* GST Number */}
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
              placeholder="Enter GST number"
              style={{
                border: "1px solid #fcd34d",
                borderRadius: "10px",
                padding: "11px",
                boxShadow: "none",
              }}
              {...register("gstNumber", {
                required: "Please Enter GST number.",
              })}
            />
            {errors.gstNumber && (
              <small className="text-danger">{errors.gstNumber.message}</small>
            )}
          </div>

          {/* Status */}
          <div className="col-md-6">
            <label
              className="form-label"
              style={{
                color: "#16a34a",
                fontWeight: "700",
              }}
            >
              Status
            </label>

            <select
              className="form-select"
              style={{
                border: "1px solid #86efac",
                borderRadius: "10px",
                padding: "11px",
                boxShadow: "none",
              }}
              {...register("status", {
                required: "Please select status.",
              })}
            >
              <option value="">Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            {errors.status && (
              <small className="text-danger">{errors.status.message}</small>
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
              Address
            </label>

            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter complete supplier address"
              style={{
                border: "1px solid #d8b4fe",
                borderRadius: "10px",
                padding: "11px",
                boxShadow: "none",
                resize: "none",
              }}
              {...register("address", { required: "Please enter a address" })}
            ></textarea>
            {errors.address && (
              <small className="text-danger">{errors.address.message}</small>
            )}
          </div>

          {/* Buttons */}
          <div className="col-12 d-flex justify-content-end gap-3 mt-3">
            <button
              type="submit"
              className="btn"
              style={{
                background: "linear-gradient(135deg, #ff8500, #d96c00)",
                color: "#fff",
                border: "none",
                borderRadius: "9px",
                padding: "10px 24px",
                fontWeight: "600",
              }}
            >
              <i className="bi bi-person-plus me-2"></i>
              Add Supplier
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSupplier;
