import React from "react";
import { useNavigate } from "react-router-dom";

const PurchaseDashboard = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "35px 50px",
        background: "linear-gradient(135deg, #fff4e3, #f8d9ad)",
      }}
    >
      {/* Header */}
      <div className="mb-4">
        <h2
          style={{
            color: "#6b3205",
            fontWeight: "700",
            marginBottom: "6px",
          }}
        >
          Purchase Dashboard
        </h2>

        <p
          style={{
            color: "#8a5a2b",
            margin: 0,
            fontSize: "14px",
          }}
        >
          Manage purchase requests, suppliers and procurement.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="row g-4 mb-4">
        {/* Pending Requests */}
        <div className="col-lg-3 col-md-6">
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf2, #ffe3bd)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "25px",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#8a5a2b",
                    fontSize: "14px",
                  }}
                >
                  Pending Requests
                </p>

                <h2
                  style={{
                    margin: "10px 0 0",
                    color: "#6b3205",
                    fontWeight: "700",
                  }}
                >
                  12
                </h2>
              </div>

              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "14px",
                  backgroundColor: "#ff8500",
                  color: "#fff",
                  fontSize: "23px",
                }}
              >
                <i className="bi bi-hourglass-split"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Approved */}
        <div className="col-lg-3 col-md-6">
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf2, #f7dfbd)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "25px",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#8a5a2b",
                    fontSize: "14px",
                  }}
                >
                  Approved Requests
                </p>

                <h2
                  style={{
                    margin: "10px 0 0",
                    color: "#6b3205",
                    fontWeight: "700",
                  }}
                >
                  28
                </h2>
              </div>

              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "14px",
                  backgroundColor: "#e58a22",
                  color: "#fff",
                  fontSize: "23px",
                }}
              >
                <i className="bi bi-check-circle"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Rejected */}
        <div className="col-lg-3 col-md-6">
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf2, #f4d5bd)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "25px",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#8a5a2b",
                    fontSize: "14px",
                  }}
                >
                  Rejected Requests
                </p>

                <h2
                  style={{
                    margin: "10px 0 0",
                    color: "#6b3205",
                    fontWeight: "700",
                  }}
                >
                  5
                </h2>
              </div>

              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "14px",
                  backgroundColor: "#c85b24",
                  color: "#fff",
                  fontSize: "23px",
                }}
              >
                <i className="bi bi-x-circle"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Completed */}
        <div className="col-lg-3 col-md-6">
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf2, #f8dfb8)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "25px",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#8a5a2b",
                    fontSize: "14px",
                  }}
                >
                  Completed Purchases
                </p>

                <h2
                  style={{
                    margin: "10px 0 0",
                    color: "#6b3205",
                    fontWeight: "700",
                  }}
                >
                  42
                </h2>
              </div>

              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "14px",
                  backgroundColor: "#f08a24",
                  color: "#fff",
                  fontSize: "23px",
                }}
              >
                <i className="bi bi-box-seam"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Action Cards */}
      <div className="row g-4">
        {/* Purchase Requests */}
        <div className="col-lg-4">
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf2, #ffe1b8)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center mb-3"
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "16px",
                backgroundColor: "#ff8500",
                color: "#fff",
                fontSize: "28px",
              }}
            >
              <i className="bi bi-inbox"></i>
            </div>

            <h4
              style={{
                color: "#6b3205",
                fontWeight: "700",
              }}
            >
              Purchase Requests
            </h4>

            <p
              style={{
                color: "#8a5a2b",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              View requests received from the stock department and take
              necessary action.
            </p>

            <button
              className="btn"
              style={{
                backgroundColor: "#8a4b08",
                color: "#fff",
                borderRadius: "8px",
                padding: "9px 18px",
                fontWeight: "600",
              }}
              onClick={() => navigate("/purchase/purchase-requests")}
            >
              View Requests
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
        {/* Suppliers */}
        <div className="col-lg-4">
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf2, #f7dfbd)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center mb-3"
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "16px",
                backgroundColor: "#e58a22",
                color: "#fff",
                fontSize: "28px",
              }}
            >
              <i className="bi bi-people"></i>
            </div>

            <h4
              style={{
                color: "#6b3205",
                fontWeight: "700",
              }}
            >
              Suppliers
            </h4>

            <p
              style={{
                color: "#8a5a2b",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Manage supplier details and select suppliers for purchasing
              products.
            </p>

            <button
              className="btn"
              style={{
                backgroundColor: "#8a4b08",
                color: "#fff",
                borderRadius: "8px",
                padding: "9px 18px",
                fontWeight: "600",
              }}
              onClick={() => navigate("/purchase/suppliers")}
            >
              View Suppliers
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
        {/* Purchase Orders */}
        <div className="col-lg-4">
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf2, #f5d8ad)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center mb-3"
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "16px",
                backgroundColor: "#f08a24",
                color: "#fff",
                fontSize: "28px",
              }}
            >
              <i className="bi bi-file-earmark-text"></i>
            </div>

            <h4
              style={{
                color: "#6b3205",
                fontWeight: "700",
              }}
            >
              Purchase Orders
            </h4>

            <p
              style={{
                color: "#8a5a2b",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Create and manage purchase orders for approved purchase requests.
            </p>

            <button
              className="btn"
              style={{
                backgroundColor: "#8a4b08",
                color: "#fff",
                borderRadius: "8px",
                padding: "9px 18px",
                fontWeight: "600",
              }}
              onClick={() => navigate("/purchase/create-PO")}
            >
              Create Purchase Orders
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
        {/*Open Purchase Orders */}
        <div className="col-lg-4">
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf2, #f5d8ad)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center mb-3"
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "16px",
                backgroundColor: "#f08a24",
                color: "#fff",
                fontSize: "28px",
              }}
            >
              <i className="bi bi-file-earmark-text"></i>
            </div>

            <h4
              style={{
                color: "#6b3205",
                fontWeight: "700",
              }}
            >
              Open PO
            </h4>

            <p
              style={{
                color: "#8a5a2b",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              View Open PO and close when the material received
            </p>

            <button
              className="btn"
              style={{
                backgroundColor: "#8a4b08",
                color: "#fff",
                borderRadius: "8px",
                padding: "9px 18px",
                fontWeight: "600",
              }}
              onClick={() => navigate("/open-PO")}
            >
              View Open PO
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
        {/* Receive Materials */}
        <div className="col-lg-4">
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf2, #ffe1b8)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center mb-3"
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "16px",
                backgroundColor: "#ff8500",
                color: "#fff",
                fontSize: "28px",
              }}
            >
              <i className="bi bi-box-seam"></i>
            </div>

            <h4 style={{ color: "#6b3205", fontWeight: "700" }}>
              Enter Receive Materials
            </h4>

            <p
              style={{
                color: "#8a5a2b",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Fill the Form with the receive materials details and manage.
            </p>

            <button
              className="btn"
              onClick={() => navigate("/fill-receive-material-form")}
              style={{
                backgroundColor: "#8a4b08",
                color: "#fff",
                borderRadius: "8px",
                padding: "9px 18px",
                fontWeight: "600",
              }}
            >
              Fill Form
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
        {/* Received Materials */}
        <div className="col-lg-4">
          <div
            style={{
              background: "linear-gradient(135deg, #fffaf2, #ffe1b8)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center mb-3"
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "16px",
                backgroundColor: "#ff8500",
                color: "#fff",
                fontSize: "28px",
              }}
            >
              <i className="bi bi-box-seam"></i>
            </div>

            <h4 style={{ color: "#6b3205", fontWeight: "700" }}>
              Received Materials
            </h4>

            <p
              style={{
                color: "#8a5a2b",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              View and manage materials received from suppliers.
            </p>

            <button
              className="btn"
              onClick={() => {
                navigate("/received-materials");
              }}
              style={{
                backgroundColor: "#8a4b08",
                color: "#fff",
                borderRadius: "8px",
                padding: "9px 18px",
                fontWeight: "600",
              }}
            >
              View Materials
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
        {/* Pending Deliveries */}
        <div className="col-lg-4">
          <div
            onClick={() => navigate("/pending-deliveries")}
            style={{
              background: "linear-gradient(135deg, #fffaf2, #ffe1b8)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "30px",
              cursor: "pointer",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center mb-3"
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "16px",
                backgroundColor: "#ff8500",
                color: "#fff",
                fontSize: "28px",
              }}
            >
              <i className="bi bi-truck"></i>
            </div>

            <h4 style={{ color: "#6b3205", fontWeight: "700" }}>
              Pending Deliveries
            </h4>

            <p
              style={{
                color: "#8a5a2b",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Track purchase orders for which materials are still pending.
            </p>

            <button
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/pending-deliveries");
              }}
              style={{
                backgroundColor: "#8a4b08",
                color: "#fff",
                borderRadius: "8px",
                padding: "9px 18px",
                fontWeight: "600",
              }}
            >
              View Deliveries
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
        {/* Purchase History */}
        <div className="col-lg-4">
          <div
            onClick={() => navigate("/purchase-history")}
            style={{
              background: "linear-gradient(135deg, #fffaf2, #ffe1b8)",
              border: "1px solid #e8c18f",
              borderRadius: "18px",
              padding: "30px",
              cursor: "pointer",
              boxShadow: "0 7px 22px rgba(107,50,5,0.10)",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center mb-3"
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "16px",
                backgroundColor: "#ff8500",
                color: "#fff",
                fontSize: "28px",
              }}
            >
              <i className="bi bi-receipt"></i>
            </div>

            <h4 style={{ color: "#6b3205", fontWeight: "700" }}>
              Purchase History
            </h4>

            <p
              style={{
                color: "#8a5a2b",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              View the complete history of completed purchases and orders.
            </p>

            <button
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/purchase-history");
              }}
              style={{
                backgroundColor: "#8a4b08",
                color: "#fff",
                borderRadius: "8px",
                padding: "9px 18px",
                fontWeight: "600",
              }}
            >
              View History
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDashboard;
