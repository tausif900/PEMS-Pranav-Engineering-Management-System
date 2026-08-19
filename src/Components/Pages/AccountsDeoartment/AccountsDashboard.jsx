import React from "react";
import { useNavigate } from "react-router-dom";

const AccountsDashboard = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        padding: "25px 30px",
      }}
    >
      {/* ================= TOP NAVBAR ================= */}

      <div
        className="d-flex justify-content-between align-items-center mb-4"
        style={{
          backgroundColor: "#ffffff",
          padding: "15px 22px",
          borderRadius: "12px",
          boxShadow: "0 3px 12px rgba(0,0,0,0.05)",
        }}
      >
        <div className="d-flex align-items-center">
          <i
            className="bi bi-calculator-fill me-3"
            style={{
              fontSize: "28px",
              color: "#1769d5",
            }}
          ></i>

          <div>
            <h4
              style={{
                margin: 0,
                fontSize: "21px",
                fontWeight: "700",
                color: "#17233f",
              }}
            >
              PEMS Accounts
            </h4>

            <span
              style={{
                fontSize: "12px",
                color: "#8993a5",
              }}
            >
              Accounts Department
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-4">
          <i
            className="bi bi-bell"
            style={{
              fontSize: "20px",
              color: "#687386",
              cursor: "pointer",
            }}
          ></i>

          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center me-2"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                backgroundColor: "#e8f1ff",
                color: "#1769d5",
                fontWeight: "700",
                fontSize: "13px",
              }}
            >
              AC
            </div>

            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#17233f",
                }}
              >
                Accounts Admin
              </div>

              <div
                style={{
                  fontSize: "11px",
                  color: "#8993a5",
                }}
              >
                Accounts
              </div>
            </div>

            <i
              className="bi bi-chevron-down ms-3"
              style={{
                fontSize: "12px",
                color: "#687386",
              }}
            ></i>
          </div>
        </div>
      </div>

      {/* ================= PAGE TITLE ================= */}

      <div className="mb-4">
        <h2
          style={{
            fontSize: "29px",
            fontWeight: "700",
            color: "#17233f",
            marginBottom: "6px",
          }}
        >
          Accounts Dashboard
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "#7b8495",
            margin: 0,
          }}
        >
          Monitor your company's financial activities and transactions
        </p>
      </div>

      {/* ================= SUMMARY CARDS ================= */}

      <div className="row g-4 mb-4">
        {/* TOTAL REVENUE */}

        <div className="col-xl-3 col-md-6">
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "22px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            }}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#7b8495",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Total Revenue
                </p>

                <h3
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                    fontSize: "25px",
                    fontWeight: "700",
                    color: "#17233f",
                  }}
                >
                  ₹8,45,000
                </h3>

                <span
                  style={{
                    fontSize: "12px",
                    color: "#159957",
                  }}
                >
                  <i className="bi bi-arrow-up"></i> 12.5% this month
                </span>
              </div>

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "11px",
                  backgroundColor: "#e8f7ef",
                  color: "#159957",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                <i className="bi bi-currency-rupee"></i>
              </div>
            </div>
          </div>
        </div>

        {/* PENDING PAYMENTS */}

        <div className="col-xl-3 col-md-6">
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "22px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            }}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#7b8495",
                    fontSize: "14px",
                  }}
                >
                  Pending Payments
                </p>

                <h3
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                    fontSize: "25px",
                    fontWeight: "700",
                    color: "#17233f",
                  }}
                >
                  ₹1,25,000
                </h3>

                <span
                  style={{
                    fontSize: "12px",
                    color: "#e39a00",
                  }}
                >
                  <i className="bi bi-clock"></i> 18 pending
                </span>
              </div>

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "11px",
                  backgroundColor: "#fff5df",
                  color: "#e39a00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                <i className="bi bi-hourglass-split"></i>
              </div>
            </div>
          </div>
        </div>

        {/* TOTAL EXPENSES */}

        <div className="col-xl-3 col-md-6">
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "22px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            }}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#7b8495",
                    fontSize: "14px",
                  }}
                >
                  Total Expenses
                </p>

                <h3
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                    fontSize: "25px",
                    fontWeight: "700",
                    color: "#17233f",
                  }}
                >
                  ₹75,000
                </h3>

                <span
                  style={{
                    fontSize: "12px",
                    color: "#dc3545",
                  }}
                >
                  <i className="bi bi-arrow-up"></i> 5.2% this month
                </span>
              </div>

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "11px",
                  backgroundColor: "#fff0f1",
                  color: "#dc3545",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                <i className="bi bi-wallet2"></i>
              </div>
            </div>
          </div>
        </div>

        {/* OUTSTANDING BILLS */}

        <div className="col-xl-3 col-md-6">
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "22px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            }}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#7b8495",
                    fontSize: "14px",
                  }}
                >
                  Outstanding Bills
                </p>

                <h3
                  style={{
                    marginTop: "10px",
                    marginBottom: "5px",
                    fontSize: "25px",
                    fontWeight: "700",
                    color: "#17233f",
                  }}
                >
                  ₹2,10,000
                </h3>

                <span
                  style={{
                    fontSize: "12px",
                    color: "#1769d5",
                  }}
                >
                  <i className="bi bi-file-earmark-text"></i> 24 bills
                </span>
              </div>

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "11px",
                  backgroundColor: "#e8f1ff",
                  color: "#1769d5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                <i className="bi bi-receipt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MIDDLE SECTION ================= */}

      <div className="row g-4 mb-4">
        {/* REVENUE / EXPENSE CHART */}

        <div className="col-lg-7">
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "25px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              height: "100%",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h5
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#17233f",
                    marginBottom: "4px",
                  }}
                >
                  Revenue & Expenses
                </h5>

                <span
                  style={{
                    fontSize: "12px",
                    color: "#8993a5",
                  }}
                >
                  Financial overview for the current year
                </span>
              </div>

              <select
                className="form-select"
                style={{
                  width: "120px",
                  fontSize: "13px",
                  borderRadius: "7px",
                }}
              >
                <option>2026</option>
                <option>2025</option>
              </select>
            </div>

            {/* SIMPLE BAR CHART */}

            <div
              className="d-flex align-items-end justify-content-between"
              style={{
                height: "230px",
                padding: "10px 15px",
                borderBottom: "1px solid #e8ebf0",
              }}
            >
              {[
                ["Jan", 65, 40],
                ["Feb", 80, 45],
                ["Mar", 55, 35],
                ["Apr", 90, 50],
                ["May", 70, 45],
                ["Jun", 85, 55],
                ["Jul", 75, 48],
              ].map((item, index) => (
                <div
                  key={index}
                  className="d-flex flex-column align-items-center"
                >
                  <div className="d-flex align-items-end gap-1">
                    <div
                      style={{
                        width: "12px",
                        height: `${item[1] * 2}px`,
                        backgroundColor: "#1769d5",
                        borderRadius: "4px 4px 0 0",
                      }}
                    ></div>

                    <div
                      style={{
                        width: "12px",
                        height: `${item[2] * 2}px`,
                        backgroundColor: "#9bc1f5",
                        borderRadius: "4px 4px 0 0",
                      }}
                    ></div>
                  </div>

                  <span
                    style={{
                      fontSize: "11px",
                      color: "#8993a5",
                      marginTop: "8px",
                    }}
                  >
                    {item[0]}
                  </span>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center gap-4 mt-3">
              <span
                style={{
                  fontSize: "12px",
                  color: "#687386",
                }}
              >
                <i
                  className="bi bi-circle-fill me-2"
                  style={{ color: "#1769d5" }}
                ></i>
                Revenue
              </span>

              <span
                style={{
                  fontSize: "12px",
                  color: "#687386",
                }}
              >
                <i
                  className="bi bi-circle-fill me-2"
                  style={{ color: "#9bc1f5" }}
                ></i>
                Expenses
              </span>
            </div>
          </div>
        </div>

        {/* RECENT PAYMENTS */}

        <div className="col-lg-5">
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "25px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              height: "100%",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#17233f",
                  margin: 0,
                }}
              >
                Recent Payments
              </h5>

              <span
                style={{
                  color: "#1769d5",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                View All
              </span>
            </div>

            {[
              ["INV-001", "Pranav Industries", "₹25,000", "Paid"],
              ["INV-002", "ABC Motors", "₹18,500", "Paid"],
              ["INV-003", "Global Filters", "₹32,000", "Pending"],
              ["INV-004", "Shree Engineering", "₹14,500", "Paid"],
            ].map((payment, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between mb-3"
                style={{
                  paddingBottom: "13px",
                  borderBottom: index !== 3 ? "1px solid #eef0f4" : "none",
                }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "9px",
                      backgroundColor: "#edf5ff",
                      color: "#1769d5",
                    }}
                  >
                    <i className="bi bi-credit-card"></i>
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#17233f",
                      }}
                    >
                      {payment[0]}
                    </div>

                    <div
                      style={{
                        fontSize: "11px",
                        color: "#8993a5",
                      }}
                    >
                      {payment[1]}
                    </div>
                  </div>
                </div>

                <div className="text-end">
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#17233f",
                    }}
                  >
                    {payment[2]}
                  </div>

                  <span
                    style={{
                      fontSize: "10px",
                      color: payment[3] === "Paid" ? "#159957" : "#e39a00",
                    }}
                  >
                    {payment[3]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RECENT INVOICES ================= */}

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          padding: "25px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#17233f",
                marginBottom: "4px",
              }}
            >
              Recent Invoices
            </h5>

            <span
              style={{
                fontSize: "12px",
                color: "#8993a5",
              }}
            >
              Latest invoices generated by Accounts
            </span>
          </div>

          <div>
            {" "}
            <button
              className="btn m-2"
              style={{
                backgroundColor: "#1769d5",
                color: "#ffffff",
                borderRadius: "7px",
                fontSize: "15px",
                padding: "9px 15px",
              }}
              onClick={() => navigate("/accounts/all-generated-bills")}
            >
              View All Invoices
            </button>
            <button
              className="btn"
              style={{
                backgroundColor: "#1769d5",
                color: "#ffffff",
                borderRadius: "7px",
                fontSize: "15px",
                padding: "9px 15px",
              }}
              onClick={() => navigate("/accounts-create-invoice")}
            >
              <i className="bi bi-plus-lg me-2"></i>
              Create Invoice
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr
                style={{
                  fontSize: "12px",
                  color: "#8993a5",
                  borderBottom: "1px solid #e8ebf0",
                }}
              >
                <th>INVOICE</th>
                <th>CUSTOMER</th>
                <th>DATE</th>
                <th>AMOUNT</th>
                <th>DUE DATE</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {[
                [
                  "INV-001",
                  "Pranav Industries",
                  "12 Aug 2026",
                  "₹25,000",
                  "20 Aug 2026",
                  "Paid",
                ],
                [
                  "INV-002",
                  "ABC Motors",
                  "11 Aug 2026",
                  "₹18,500",
                  "19 Aug 2026",
                  "Paid",
                ],
                [
                  "INV-003",
                  "Global Filters",
                  "10 Aug 2026",
                  "₹32,000",
                  "18 Aug 2026",
                  "Pending",
                ],
                [
                  "INV-004",
                  "Shree Engineering",
                  "08 Aug 2026",
                  "₹14,500",
                  "16 Aug 2026",
                  "Overdue",
                ],
              ].map((invoice, index) => (
                <tr key={index}>
                  <td
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#1769d5",
                    }}
                  >
                    {invoice[0]}
                  </td>

                  <td
                    style={{
                      fontSize: "13px",
                      color: "#4e5b70",
                    }}
                  >
                    {invoice[1]}
                  </td>

                  <td
                    style={{
                      fontSize: "13px",
                      color: "#687386",
                    }}
                  >
                    {invoice[2]}
                  </td>

                  <td
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#17233f",
                    }}
                  >
                    {invoice[3]}
                  </td>

                  <td
                    style={{
                      fontSize: "13px",
                      color: "#687386",
                    }}
                  >
                    {invoice[4]}
                  </td>

                  <td>
                    <span
                      style={{
                        padding: "6px 11px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "600",
                        backgroundColor:
                          invoice[5] === "Paid"
                            ? "#e6f8ee"
                            : invoice[5] === "Pending"
                              ? "#fff5df"
                              : "#fff0f1",
                        color:
                          invoice[5] === "Paid"
                            ? "#159957"
                            : invoice[5] === "Pending"
                              ? "#e39a00"
                              : "#dc3545",
                      }}
                    >
                      {invoice[5]}
                    </span>
                  </td>

                  <td>
                    <button
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "#edf5ff",
                        color: "#1769d5",
                        borderRadius: "6px",
                      }}
                    >
                      <i className="bi bi-eye-fill"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountsDashboard;
