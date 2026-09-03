import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

const ViewAllPurchaseRequest = () => {
  const [purchaseRequest, setPurchaseRequest] = useState([]);
  const navigate = useNavigate();

  const fetchPendingPurchaseRequest = async () => {
    try {
      const response = await api.get("/purchase-request");
      console.log(response.data);
      setPurchaseRequest(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPendingPurchaseRequest();
  }, []);

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
            All Purchase Requests
          </h2>
          <p style={{ color: "#8a4b08", margin: 0, fontSize: "14px" }}>
            View and manage purchase requests received from the Stock
            Department.
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
          <i className="bi bi-arrow-left me-2"></i> Dashboard
        </button>
      </div>
      {/* Table Container */}
      {purchaseRequest.length > 0 ? (
        <>
          {" "}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              padding: "20px",
              border: "1px solid #e8c18f",
              boxShadow: "0 8px 25px rgba(107,50,5,0.08)",
              overflowX: "auto",
            }}
          >
            <table
              className="table align-middle mb-0"
              style={{ minWidth: "950px" }}
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
                    Product
                  </th>
                  <th
                    style={{
                      color: "#8a4b08",
                      padding: "16px",
                      borderBottom: "2px solid #e8c18f",
                      textAlign: "center",
                    }}
                  >
                    Current Quantity
                  </th>
                  <th
                    style={{
                      color: "#8a4b08",
                      padding: "16px",
                      borderBottom: "2px solid #e8c18f",
                      textAlign: "center",
                    }}
                  >
                    Requested Quantity
                  </th>
                  <th
                    style={{
                      color: "#8a4b08",
                      padding: "16px",
                      borderBottom: "2px solid #e8c18f",
                    }}
                  >
                    Requested By
                  </th>
                  <th
                    style={{
                      color: "#8a4b08",
                      padding: "16px",
                      borderBottom: "2px solid #e8c18f",
                    }}
                  >
                    Request Date
                  </th>
                  <th
                    style={{
                      color: "#8a4b08",
                      padding: "16px",
                      borderBottom: "2px solid #e8c18f",
                    }}
                  >
                    Status
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
                {purchaseRequest.map((p) => {
                  return (
                    <tr>
                      <td style={{ color: "#8a4b08", fontWeight: "700" }}>
                        <i className="bi bi-box-seam me-2"></i> {p.productName}
                      </td>
                      <td
                        style={{
                          color: "#8a4b08",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        {p.currentQuantity} Units
                      </td>
                      <td
                        style={{
                          color: "#8a4b08",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        {p.requestedQuantity} Units
                      </td>
                      <td style={{ color: "#8a4b08", fontWeight: "600" }}>
                        Stock Department
                      </td>
                      <td style={{ color: "#8a4b08", fontWeight: "600" }}>
                        {p.requestDate}
                      </td>
                      <td>
                        <span
                          style={{
                            backgroundColor: "#fff3cd",
                            color: "#b45309",
                            padding: "7px 14px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "700",
                          }}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-success">
                          <i className="bi bi-arrow-right-circle me-1"></i>{" "}
                          Approve
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center">No Pending Request Found</div>
      )}
    </div>
  );
};

export default ViewAllPurchaseRequest;
