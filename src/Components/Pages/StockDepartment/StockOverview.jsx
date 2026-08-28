import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useForm } from "react-hook-form";

const StockOverview = () => {
  const [distinctProducts, setDistinctProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const { register, handleSubmit, setValue } = useForm();

  const getAll = () => {
    setfilteredProducts(distinctProducts);
  };

  const inStock = () => {
    const inStockProducts = distinctProducts.filter((dp) => dp.quantity > 20);
    console.log(inStockProducts);
    setfilteredProducts(inStockProducts);
  };

  const lowStock = () => {
    const lowStock = distinctProducts.filter(
      (dp) => dp.quantity <= 20 && dp.quantity > 0,
    );
    console.log(lowStock);
    setfilteredProducts(lowStock);
  };

  const outOfStock = () => {
    const outOfStock = distinctProducts.filter((dp) => dp.quantity === 0);
    console.log(outOfStock);
    setfilteredProducts(outOfStock);
  };

  const fetcDistinctProducts = async () => {
    try {
      const response = await api.get("/products/distinct-products");
      console.log(response.data);
      setDistinctProducts(response.data);
      setfilteredProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const purchaseRequest = async (data) => {
    console.log(data);
    try {
      const response = await api.post("/purchase-request", data);
      console.log(response.data);
      alert("Request send successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetcDistinctProducts();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "35px",
        background: "linear-gradient(135deg, #fff8e7, #f3dfb0)",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2
            style={{
              color: "#4b3208",
              fontWeight: "700",
              marginBottom: "5px",
            }}
          >
            Stock Overview
          </h2>

          <p
            style={{
              color: "#725b32",
              margin: 0,
            }}
          >
            View available products and manage stock.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="d-flex gap-2 mb-4 flex-wrap">
          <button
            className="btn"
            style={{
              backgroundColor: "#8a5a0a",
              color: "#fff",
              borderRadius: "8px",
              padding: "9px 18px",
              fontWeight: "600",
            }}
            onClick={() => getAll()}
          >
            All
          </button>

          <button
            className="btn"
            style={{
              backgroundColor: "#198754",
              color: "#fff",
              borderRadius: "8px",
              padding: "9px 18px",
              fontWeight: "600",
            }}
            onClick={() => inStock()}
          >
            In Stock
          </button>

          <button
            className="btn"
            style={{
              backgroundColor: "#ffc107",
              color: "#212529",
              borderRadius: "8px",
              padding: "9px 18px",
              fontWeight: "600",
            }}
            onClick={() => lowStock()}
          >
            Low Stock
          </button>

          <button
            className="btn"
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              borderRadius: "8px",
              padding: "9px 18px",
              fontWeight: "600",
            }}
            onClick={() => outOfStock()}
          >
            Out of Stock
          </button>
        </div>
      </div>

      {/* Product Cards */}
      {filteredProducts.length > 0 ? (
        <div className="row g-4">
          {filteredProducts.map((dp) => {
            return (
              <div className="col-xl-3 col-lg-6">
                <div
                  style={{
                    background: "linear-gradient(145deg, #fffdf7, #f8ecd0)",
                    border: "1px solid #d8bd7a",
                    borderRadius: "18px",
                    padding: "24px",
                    boxShadow: "0 7px 22px rgba(101, 67, 15, 0.10)",
                    height: "100%",
                  }}
                >
                  {/* Product Header */}
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "13px",
                        backgroundColor: "#f3dfb0",
                        color: "#8a5a0a",
                        fontSize: "24px",
                      }}
                    >
                      <i className="bi bi-box-seam"></i>
                    </div>

                    <div>
                      <h5
                        style={{
                          margin: 0,
                          color: "#4b3208",
                          fontWeight: "700",
                        }}
                      >
                        {dp.productName}
                      </h5>

                      <small style={{ color: "#8a6b36" }}>
                        {dp.productCode}
                      </small>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div
                    style={{
                      borderTop: "1px solid #ead9b4",
                      paddingTop: "15px",
                    }}
                  >
                    <div className="d-flex justify-content-between mb-2">
                      <span style={{ color: "#725b32" }}>Description</span>

                      <strong style={{ color: "#4b3208" }}>
                        {dp.productDescription}
                      </strong>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <span style={{ color: "#725b32" }}>Current Stock</span>

                      <strong style={{ color: "#d97706" }}>
                        {dp.quantity}
                      </strong>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <span style={{ color: "#725b32" }}>Location</span>

                      <strong style={{ color: "#4b3208" }}>
                        {dp.productLocation}
                      </strong>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="mb-3">
                    {dp.quantity === 0 ? (
                      <span className="badge bg-danger rounded-pill px-3 py-2">
                        Out of Stock
                      </span>
                    ) : dp.quantity <= 20 ? (
                      <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                        Low Stock
                      </span>
                    ) : (
                      <span className="badge bg-success rounded-pill px-3 py-2">
                        In Stock
                      </span>
                    )}
                  </div>

                  {/* Request Button */}
                  {dp.quantity === 0 || dp.quantity <= 20 ? (
                    <button
                      className="btn w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#purchaseRequestModal"
                      style={{
                        backgroundColor: "#8a5a0a",
                        color: "#ffffff",
                        borderRadius: "8px",
                        padding: "10px",
                        fontWeight: "600",
                      }}
                      onClick={() => {
                        setSelectedProduct(dp);
                        setValue("productName", dp.productName);
                        setValue("productCode", dp.productCode);
                        setValue("productDescription", dp.productDescription);
                        setValue("currentQuantity", dp.quantity);
                      }}
                    >
                      <i className="bi bi-cart-plus me-2"></i>
                      Request Purchase
                    </button>
                  ) : (
                    <button
                      className="btn w-100 disabled"
                      style={{
                        backgroundColor: "#8a5a0a",
                        color: "#ffffff",
                        borderRadius: "8px",
                        padding: "10px",
                        fontWeight: "600",
                      }}
                    >
                      <i className="bi bi-cart-plus me-2"></i>
                      Request Purchase
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="text-center py-5"
          style={{
            background: "rgba(255, 253, 247, 0.7)",
            border: "1px solid #d8bd7a",
            borderRadius: "18px",
            color: "#725b32",
          }}
        >
          <i
            className="bi bi-box-seam"
            style={{
              fontSize: "45px",
              color: "#8a5a0a",
            }}
          ></i>

          <h5
            className="mt-3"
            style={{
              color: "#4b3208",
              fontWeight: "700",
            }}
          >
            No Such Products
          </h5>

          <p style={{ margin: 0 }}>No products found in this category.</p>
        </div>
      )}

      {/* Request Purchase Modal */}

      <form
        className="modal fade"
        id="purchaseRequestModal"
        tabIndex="-1"
        aria-labelledby="purchaseRequestModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.65)",
        }}
        onSubmit={handleSubmit(purchaseRequest)}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={{
              background: "#53360a",
              border: "1px solid #9b7432",
              borderRadius: "15px",
              color: "#fff5dc",
            }}
          >
            {/* Header */}
            <div
              className="modal-header"
              style={{
                borderBottom: "1px solid rgba(190, 150, 75, 0.3)",
              }}
            >
              <div>
                <h5
                  className="modal-title"
                  style={{
                    color: "#ffe5a8",
                    fontWeight: "600",
                  }}
                >
                  Request Purchase
                </h5>

                <small style={{ color: "#cdb98d" }}>
                  Send a purchase request to Purchase Department
                </small>
              </div>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              {/* Product Name */}
              <div className="mb-3">
                <label style={labelStyle}>Product Name</label>

                <input
                  type="text"
                  className="form-control"
                  value={selectedProduct?.productName}
                  readOnly
                  style={inputStyle}
                  {...register("productName")}
                />
              </div>

              {/* Product Code + Current Quantity */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label style={labelStyle}>Product Code</label>

                  <input
                    type="text"
                    className="form-control"
                    value={selectedProduct?.productCode}
                    readOnly
                    style={inputStyle}
                    {...register("productCode")}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label style={labelStyle}>Current Quantity</label>

                  <input
                    type="text"
                    className="form-control"
                    value={selectedProduct?.quantity}
                    readOnly
                    style={inputStyle}
                    {...register("currentQuantity")}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mb-3">
                <label style={labelStyle}>Product Description</label>

                <input
                  type="text"
                  className="form-control"
                  value={selectedProduct?.productDescription}
                  readOnly
                  style={inputStyle}
                  {...register("productDescription")}
                />
              </div>

              {/* Required Quantity */}
              <div className="mb-3">
                <label style={labelStyle}>Required Quantity</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter quantity to purchase..."
                  style={inputStyle}
                  {...register("requestedQuantity")}
                />

                <small
                  style={{
                    color: "#cdb98d",
                    fontSize: "12px",
                  }}
                >
                  Enter the quantity you want to purchase
                </small>
              </div>

              {/* Reason */}
              <div className="mb-2">
                <label style={labelStyle}>Reason</label>

                <select
                  className="form-select"
                  style={inputStyle}
                  {...register("reason")}
                >
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                  <option>Sales Requirement</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Footer */}
            <div
              className="modal-footer"
              style={{
                borderTop: "1px solid rgba(190, 150, 75, 0.3)",
              }}
            >
              <button
                type="submit"
                className="btn"
                style={{
                  background: "#a97825",
                  border: "1px solid #c8953b",
                  color: "#fff8e7",
                  fontWeight: "600",
                }}
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StockOverview;

const labelStyle = {
  display: "block",
  marginBottom: "7px",
  color: "#e5cb98",
  fontSize: "15px",
  fontWeight: "600",
};

const inputStyle = {
  background: "rgba(50, 32, 5, 0.8)",
  border: "1px solid #8f6b2f",
  color: "#fff5dc",
  borderRadius: "7px",
  padding: "10px 12px",
  boxShadow: "none",
};
