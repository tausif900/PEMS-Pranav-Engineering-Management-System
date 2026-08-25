import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

const AddProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const addProduct = async (data) => {
    console.log(data);
    try {
      const response = await api.post("/products/add-product", data);
      console.log(response.data);
      alert("Product added in stock!!!");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "35px",
        backgroundImage:
          "linear-gradient(rgba(65, 42, 5, 0.72), rgba(65, 42, 5, 0.78))",
        color: "#fff8e7",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "30px",
              color: "#fff3d0",
            }}
          >
            Add Product
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#d8c39a",
              fontSize: "14px",
            }}
          >
            Select a product and add it to your stock
          </p>
        </div>

        <button
          style={{
            padding: "11px 20px",
            border: "1px solid #8f6b2f",
            borderRadius: "8px",
            background: "rgba(91, 59, 8, 0.8)",
            color: "#fff3d0",
            cursor: "pointer",
          }}
          onClick={() => navigate("/stock-dashboard")}
        >
          ← Back
        </button>
      </div>

      {/* Main Card */}
      <form
        onSubmit={handleSubmit(addProduct)}
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "rgba(83, 54, 10, 0.92)",
          border: "1px solid rgba(180, 137, 62, 0.45)",
          borderRadius: "18px",
          padding: "30px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            borderTop: "1px solid rgba(190, 150, 75, 0.35)",
            paddingTop: "28px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              color: "#ffe7b0",
            }}
          >
            Stock Details
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div>
              <label style={labelStyle}>Product Name</label>
              <input
                placeholder="Enter Product Name..."
                style={inputStyle}
                {...register("productName")}
              />
            </div>

            <div>
              <label style={labelStyle}>Product Code</label>
              <input
                placeholder="Enter Product Code..."
                style={inputStyle}
                {...register("productCode")}
              />
            </div>

            <div>
              <label style={labelStyle}>Product Description</label>
              <input
                placeholder="Enter Description..."
                style={inputStyle}
                {...register("productDescription")}
              />
            </div>

            <div>
              <label style={labelStyle}>Add Quantity</label>
              <input
                type="text"
                placeholder="Enter quantity"
                style={inputStyle}
                {...register("quantity")}
              />
            </div>

            <div>
              <label style={labelStyle}>Purchase Price / Product</label>
              <input
                type="text"
                placeholder="Enter purchase price..."
                style={inputStyle}
                {...register("purchasePrice")}
              />
            </div>

            <div>
              <label style={labelStyle}>Storage Location</label>
              <input
                type="text"
                placeholder="Example: Rack A-02"
                style={inputStyle}
                {...register("productLocation")}
              />
            </div>

            <div>
              <label style={labelStyle}>Supplier</label>
              <input
                type="text"
                placeholder="Enter supplier name..."
                style={inputStyle}
                {...register("supplier")}
              />
            </div>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <button
                type="submit"
                style={{
                  padding: "12px 28px",
                  borderRadius: "8px",
                  border: "none",
                  background: "linear-gradient(135deg, #c28c2c, #8f641d)",
                  color: "#fff8e7",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.25)",
                }}
              >
                + Add Product in Stock
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  color: "#e5cb98",
  fontSize: "14px",
  fontWeight: "600",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "13px 15px",
  borderRadius: "8px",
  border: "1px solid #8f6b2f",
  outline: "none",
  background: "rgba(50, 32, 5, 0.8)",
  color: "#fff5dc",
  fontSize: "14px",
};

export default AddProduct;
