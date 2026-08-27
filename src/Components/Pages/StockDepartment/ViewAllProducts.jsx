import React, { useEffect, useState } from "react";
import { api } from "../../api";

const ViewAllProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await api.get("/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

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
            All Products
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#d8c39a",
              fontSize: "14px",
            }}
          >
            View and manage all products available in stock
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
        >
          ← Back
        </button>
      </div>

      {/* Products Container */}
      <div
        style={{
          background: "rgba(83, 54, 10, 0.92)",
          border: "1px solid rgba(180, 137, 62, 0.45)",
          borderRadius: "18px",
          padding: "25px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
        }}
      >
        {/* Search + Filter */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            marginBottom: "22px",
          }}
        >
          <input
            type="text"
            placeholder="Search product by name or code..."
            style={{
              flex: 1,
              padding: "13px 16px",
              borderRadius: "8px",
              border: "1px solid #8f6b2f",
              outline: "none",
              background: "rgba(50, 32, 5, 0.8)",
              color: "#fff5dc",
              fontSize: "14px",
            }}
          />
        </div>

        {/* Table */}
        {products.length > 0 ? (
          <div
            style={{
              overflowX: "auto",
              borderRadius: "10px",
              border: "1px solid rgba(180, 137, 62, 0.35)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "1100px",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(110, 72, 13, 0.95)" }}>
                  <th style={thStyle}>Product Name</th>
                  <th style={thStyle}>Code</th>
                  <th style={thStyle}>Quantity</th>
                  <th style={thStyle}>Purchase Price</th>
                  <th style={thStyle}>Selling Price</th>
                  <th style={thStyle}>Location</th>
                  <th style={thStyle}>Supplier</th>
                  <th style={thStyle}>Delivery Date</th>
                </tr>
              </thead>

              <tbody>
                {products.map((p) => {
                  return (
                    <tr style={rowStyle} key={p.productId}>
                      <td style={tdStyle}>
                        <strong>{p.productName}</strong>
                      </td>
                      <td style={tdStyle}>{p.productCode}</td>
                      <td style={tdStyle}>
                        <span style={quantityBadge}>{p.quantity}</span>
                      </td>
                      <td style={tdStyle}>₹ {p.purchasePrice}</td>
                      <td style={tdStyle}>₹ {p.sellingPrice}</td>
                      <td style={tdStyle}>{p.productLocation}</td>
                      <td style={tdStyle}>{p.supplier}</td>
                      <td style={tdStyle}>{p.deliveryDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center">No Products Found</div>
        )}

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#cdb98d",
              fontSize: "13px",
            }}
          >
            Showing 5 of 48 products
          </p>

          <div style={{ display: "flex", gap: "8px" }}>
            <button style={pageButton}>‹</button>
            <button
              style={{
                ...pageButton,
                background: "#a97825",
                color: "#fff8e7",
              }}
            >
              1
            </button>
            <button style={pageButton}>2</button>
            <button style={pageButton}>3</button>
            <button style={pageButton}>›</button>
          </div>
        </div>
      </div>
    </div>
  );
};



const thStyle = {
  padding: "15px 14px",
  textAlign: "left",
  color: "#ffe7b0",
  fontSize: "13px",
  fontWeight: "600",
  borderBottom: "1px solid rgba(190, 150, 75, 0.4)",
};

const tdStyle = {
  padding: "16px 14px",
  color: "#e6d4ae",
  fontSize: "13px",
  borderBottom: "1px solid rgba(190, 150, 75, 0.18)",
};

const rowStyle = {
  background: "rgba(72, 46, 7, 0.65)",
};

const quantityBadge = {
  display: "inline-block",
  padding: "5px 10px",
  borderRadius: "20px",
  background: "rgba(55, 150, 80, 0.2)",
  color: "#b9e5a9",
  fontWeight: "600",
};

const pageButton = {
  width: "34px",
  height: "34px",
  borderRadius: "7px",
  border: "1px solid #8f6b2f",
  background: "rgba(65, 42, 5, 0.8)",
  color: "#d8c39a",
  cursor: "pointer",
};

export default ViewAllProducts;
