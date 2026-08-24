import React from "react";

const ViewAllProducts = () => {
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

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "18px",
          marginBottom: "25px",
        }}
      >
        <div style={summaryCard}>
          <span style={iconStyle}>📦</span>
          <div>
            <p style={summaryTitle}>Total Products</p>
            <h2 style={summaryValue}>48</h2>
          </div>
        </div>

        <div style={summaryCard}>
          <span style={iconStyle}>📊</span>
          <div>
            <p style={summaryTitle}>Total Quantity</p>
            <h2 style={summaryValue}>1,245</h2>
          </div>
        </div>

        <div style={summaryCard}>
          <span style={iconStyle}>💰</span>
          <div>
            <p style={summaryTitle}>Stock Value</p>
            <h2 style={summaryValue}>₹8.45L</h2>
          </div>
        </div>
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

          <select
            style={{
              width: "180px",
              padding: "13px",
              borderRadius: "8px",
              border: "1px solid #8f6b2f",
              background: "#4b3007",
              color: "#fff5dc",
              outline: "none",
            }}
          >
            <option>All Locations</option>
            <option>Rack A-01</option>
            <option>Rack A-02</option>
            <option>Rack B-01</option>
          </select>
        </div>

        {/* Table */}
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
              </tr>
            </thead>

            <tbody>
              <tr style={rowStyle}>
                <td style={tdStyle}>
                  <strong>Oil Filter</strong>
                </td>
                <td style={tdStyle}>OF-101</td>
                <td style={tdStyle}>
                  <span style={quantityBadge}>125</span>
                </td>
                <td style={tdStyle}>₹450</td>
                <td style={tdStyle}>₹650</td>
                <td style={tdStyle}>Rack A-01</td>
                <td style={tdStyle}>ABC Auto Parts</td>
              </tr>

              <tr style={rowStyle}>
                <td style={tdStyle}>
                  <strong>Air Filter</strong>
                </td>
                <td style={tdStyle}>AF-205</td>
                <td style={tdStyle}>
                  <span style={quantityBadge}>85</span>
                </td>
                <td style={tdStyle}>₹550</td>
                <td style={tdStyle}>₹800</td>
                <td style={tdStyle}>Rack A-02</td>
                <td style={tdStyle}>XYZ Filters</td>
              </tr>

              <tr style={rowStyle}>
                <td style={tdStyle}>
                  <strong>Compressor Part</strong>
                </td>
                <td style={tdStyle}>CP-310</td>
                <td style={tdStyle}>
                  <span
                    style={{
                      ...quantityBadge,
                      background: "rgba(180, 120, 20, 0.25)",
                      color: "#ffd77d",
                    }}
                  >
                    42
                  </span>
                </td>
                <td style={tdStyle}>₹1,250</td>
                <td style={tdStyle}>₹1,650</td>
                <td style={tdStyle}>Rack B-01</td>
                <td style={tdStyle}>Global Compressor</td>
              </tr>

              <tr style={rowStyle}>
                <td style={tdStyle}>
                  <strong>Hydraulic Filter</strong>
                </td>
                <td style={tdStyle}>HF-410</td>
                <td style={tdStyle}>
                  <span style={quantityBadge}>210</span>
                </td>
                <td style={tdStyle}>₹700</td>
                <td style={tdStyle}>₹950</td>
                <td style={tdStyle}>Rack B-02</td>
                <td style={tdStyle}>Prime Filters</td>
              </tr>

              <tr>
                <td style={tdStyle}>
                  <strong>Fuel Filter</strong>
                </td>
                <td style={tdStyle}>FF-520</td>
                <td style={tdStyle}>
                  <span
                    style={{
                      ...quantityBadge,
                      background: "rgba(180, 55, 30, 0.25)",
                      color: "#ffb49c",
                    }}
                  >
                    18
                  </span>
                </td>
                <td style={tdStyle}>₹350</td>
                <td style={tdStyle}>₹520</td>
                <td style={tdStyle}>Rack C-01</td>
                <td style={tdStyle}>Auto Filter Co.</td>
              </tr>
            </tbody>
          </table>
        </div>

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

const summaryCard = {
  background: "rgba(83, 54, 10, 0.92)",
  border: "1px solid rgba(180, 137, 62, 0.45)",
  borderRadius: "14px",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const iconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "10px",
  background: "rgba(194, 140, 44, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
};

const summaryTitle = {
  margin: 0,
  color: "#cdb98d",
  fontSize: "13px",
};

const summaryValue = {
  margin: "5px 0 0",
  color: "#ffe5a8",
  fontSize: "24px",
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
