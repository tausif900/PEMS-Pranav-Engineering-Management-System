import React from "react";
import { useNavigate } from "react-router-dom";

const ViewAllSuppliers = () => {
  const navigate = useNavigate();
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
            style={{ color: "#6b3205", fontWeight: "700", marginBottom: "6px" }}
          >
            All Suppliers
          </h2>
          <p style={{ color: "#8a4b08", margin: 0, fontSize: "14px" }}>
            View and manage all suppliers associated with PEMS.
          </p>
        </div>
        <div className="d-flex gap-2">
          <button
            className="btn"
            onClick={() => navigate("/purchase/add-supplier")}
            style={{
              backgroundColor: "#ff8500",
              color: "#fff",
              borderRadius: "9px",
              padding: "10px 18px",
              fontWeight: "600",
            }}
          >
            <i className="bi bi-plus-lg me-2"></i> Add Supplier
          </button>
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
            <i className="bi bi-arrow-left me-2"></i> Dashboard
          </button>
        </div>
      </div>
      {/* Search */}
      <div className="input-group">
        <span
          className="input-group-text"
          style={{
            backgroundColor: "#fff7eb",
            borderColor: "#e8c18f",
            color: "#ff8500",
          }}
        >
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search supplier by name, contact or GST number..."
          style={{ borderColor: "#e8c18f", boxShadow: "none" }}
        />
      </div>
      {/* Table */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "18px",
          padding: "20px",
          border: "1px solid #e8c18f",
          boxShadow: "0 8px 25px rgba(107,50,5,0.08)",
          overflowX: "auto",
          marginTop: "20px",
        }}
      >
        <table
          className="table align-middle mb-0"
          style={{ minWidth: "1050px" }}
        >
          <thead>
            <tr
              style={{
                background: "linear-gradient(135deg, #fff3df, #ffe1b8)",
              }}
            >
              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                Supplier Name
              </th>
              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                Contact Person
              </th>
              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                Phone
              </th>
              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                Email
              </th>
              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                }}
              >
                GST Number
              </th>
              <th
                style={{
                  color: "#8a4b08",
                  padding: "16px",
                  borderBottom: "2px solid #e8c18f",
                  textAlign: "center",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Supplier 1 */}
            <tr>
              <td style={{ color: "#8a4b08", fontWeight: "700" }}>
                Parmar Engineering
              </td>
              <td style={{ color: "#8a4b08", fontWeight: "600" }}>
                Rajesh Parmar
              </td>
              <td style={{ color: "#8a4b08", fontWeight: "600" }}>
                9876543210
              </td>
              <td style={{ color: "#8a4b08", fontWeight: "600" }}>
                parmar@example.com
              </td>
              <td style={{ color: "#8a4b08", fontWeight: "600" }}>
                27ABCDE1234F1Z5
              </td>
              <td className="text-center">
                <button
                  className="btn me-2"
                  onClick={() => navigate("/supplier-details/1")}
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "7px 13px",
                  }}
                >
                  <i className="bi bi-eye"></i>
                </button>
                <button
                  className="btn"
                  onClick={() => navigate("/edit-supplier/1")}
                  style={{
                    backgroundColor: "#ff8500",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "7px 13px",
                  }}
                >
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllSuppliers;
