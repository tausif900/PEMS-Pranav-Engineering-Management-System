import React from "react";
import { useNavigate } from "react-router-dom";

const AccountsDashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
      }}
    >
      {/* ================= SIDEBAR ================= */}

      <div
        style={{
          width: "250px",
          backgroundColor: "#17233f",
          padding: "25px 15px",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        {/* Logo */}
        <div
          className="d-flex align-items-center mb-4 px-2"
          style={{
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <i
            className="bi bi-calculator-fill me-3"
            style={{
              fontSize: "27px",
              color: "#4d9cff",
            }}
          ></i>

          <div>
            <h5
              className="mb-0"
              style={{
                color: "#ffffff",
                fontWeight: "700",
              }}
            >
              PEMS
            </h5>

            <small
              style={{
                color: "#8993a5",
                fontSize: "10px",
              }}
            >
              Accounts Department
            </small>
          </div>
        </div>

        {/* Dashboard */}
        <button
          className="btn w-100 text-start mb-2"
          style={{
            backgroundColor: "#1769d5",
            color: "#ffffff",
            borderRadius: "8px",
            padding: "11px 13px",
          }}
          onClick={() => navigate("/accounts-dashboard")}
        >
          <i className="bi bi-grid-1x2-fill me-3"></i>
          Dashboard
        </button>

        {/* Sales */}
        <p
          className="text-uppercase mt-4 mb-2 px-2"
          style={{
            fontSize: "10px",
            color: "#6f7d96",
            fontWeight: "600",
          }}
        >
          Sales
        </p>

        <button
          className="btn w-100 text-start mb-1"
          style={{
            color: "#d5dbea",
            backgroundColor: "transparent",
            padding: "10px 13px",
          }}
          onClick={() => navigate("/accounts/sales-invoices")}
        >
          <i className="bi bi-receipt me-3"></i>
          Sales Invoices
        </button>

        <button
          className="btn w-100 text-start mb-1"
          style={{
            color: "#d5dbea",
            backgroundColor: "transparent",
            padding: "10px 13px",
          }}
          onClick={() => navigate("/accounts/all-domestic-bills")}
        >
          <i className="bi bi-file-earmark-text me-3"></i>
          Domestic Bills
        </button>

        <button
          className="btn w-100 text-start mb-1"
          style={{
            color: "#d5dbea",
            backgroundColor: "transparent",
            padding: "10px 13px",
          }}
          onClick={() => navigate("/accounts/international-bills")}
        >
          <i className="bi bi-globe2 me-3"></i>
          International Bills
        </button>

        {/* Purchase */}
        <p
          className="text-uppercase mt-4 mb-2 px-2"
          style={{
            fontSize: "10px",
            color: "#6f7d96",
            fontWeight: "600",
          }}
        >
          Purchase
        </p>

        <button
          className="btn w-100 text-start mb-1"
          style={{
            color: "#d5dbea",
            backgroundColor: "transparent",
            padding: "10px 13px",
          }}
          onClick={() => navigate("/accounts/purchase-bills")}
        >
          <i className="bi bi-cart3 me-3"></i>
          Purchase Bills
        </button>

        {/* Finance */}
        <p
          className="text-uppercase mt-4 mb-2 px-2"
          style={{
            fontSize: "10px",
            color: "#6f7d96",
            fontWeight: "600",
          }}
        >
          Finance
        </p>

        <button
          className="btn w-100 text-start mb-1"
          style={{
            color: "#d5dbea",
            backgroundColor: "transparent",
            padding: "10px 13px",
          }}
          onClick={() => navigate("/accounts/payments")}
        >
          <i className="bi bi-credit-card me-3"></i>
          Payments
        </button>

        <button
          className="btn w-100 text-start mb-1"
          style={{
            color: "#d5dbea",
            backgroundColor: "transparent",
            padding: "10px 13px",
          }}
          onClick={() => navigate("/accounts/expenses")}
        >
          <i className="bi bi-wallet2 me-3"></i>
          Expenses
        </button>

        <button
          className="btn w-100 text-start mb-1"
          style={{
            color: "#d5dbea",
            backgroundColor: "transparent",
            padding: "10px 13px",
          }}
          onClick={() => navigate("/accounts/taxes")}
        >
          <i className="bi bi-percent me-3"></i>
          Taxes
        </button>

        <button
          className="btn w-100 text-start mb-1"
          style={{
            color: "#d5dbea",
            backgroundColor: "transparent",
            padding: "10px 13px",
          }}
          onClick={() => navigate("/accounts/receivables")}
        >
          <i className="bi bi-arrow-down-circle me-3"></i>
          Receivables
        </button>

        <button
          className="btn w-100 text-start mb-1"
          style={{
            color: "#d5dbea",
            backgroundColor: "transparent",
            padding: "10px 13px",
          }}
          onClick={() => navigate("/accounts/payables")}
        >
          <i className="bi bi-arrow-up-circle me-3"></i>
          Payables
        </button>

        {/* Reports */}
        <p
          className="text-uppercase mt-4 mb-2 px-2"
          style={{
            fontSize: "10px",
            color: "#6f7d96",
            fontWeight: "600",
          }}
        >
          Reports
        </p>

        <button
          className="btn w-100 text-start mb-1"
          style={{
            color: "#d5dbea",
            backgroundColor: "transparent",
            padding: "10px 13px",
          }}
          onClick={() => navigate("/accounts/reports")}
        >
          <i className="bi bi-bar-chart-line me-3"></i>
          Reports
        </button>

        {/* Logout */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "25px",
            paddingTop: "15px",
          }}
        >
          <button
            className="btn w-100 text-start"
            style={{
              color: "#ff8d8d",
              backgroundColor: "transparent",
              padding: "10px 13px",
            }}
            onClick={() => navigate("/login")}
          >
            <i className="bi bi-box-arrow-left me-3"></i>
            Logout
          </button>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="container pt-2"
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

              <div
                className="d-flex align-items-end justify-content-between"
                style={{
                  height: "230px",
                  padding: "10px 15px",
                  borderBottom: "1px solid #e8ebf0",
                }}
              >
                <div
                  style={{
                    width: "10%",
                    height: "65%",
                    backgroundColor: "#1769d5",
                    borderRadius: "5px 5px 0 0",
                  }}
                ></div>

                <div
                  style={{
                    width: "10%",
                    height: "80%",
                    backgroundColor: "#1769d5",
                    borderRadius: "5px 5px 0 0",
                  }}
                ></div>

                <div
                  style={{
                    width: "10%",
                    height: "55%",
                    backgroundColor: "#1769d5",
                    borderRadius: "5px 5px 0 0",
                  }}
                ></div>

                <div
                  style={{
                    width: "10%",
                    height: "90%",
                    backgroundColor: "#1769d5",
                    borderRadius: "5px 5px 0 0",
                  }}
                ></div>

                <div
                  style={{
                    width: "10%",
                    height: "70%",
                    backgroundColor: "#1769d5",
                    borderRadius: "5px 5px 0 0",
                  }}
                ></div>

                <div
                  style={{
                    width: "10%",
                    height: "85%",
                    backgroundColor: "#1769d5",
                    borderRadius: "5px 5px 0 0",
                  }}
                ></div>

                <div
                  style={{
                    width: "10%",
                    height: "75%",
                    backgroundColor: "#1769d5",
                    borderRadius: "5px 5px 0 0",
                  }}
                ></div>
              </div>

              <div className="d-flex justify-content-around mt-2">
                <span className="small text-muted">Jan</span>
                <span className="small text-muted">Feb</span>
                <span className="small text-muted">Mar</span>
                <span className="small text-muted">Apr</span>
                <span className="small text-muted">May</span>
                <span className="small text-muted">Jun</span>
                <span className="small text-muted">Jul</span>
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
                  onClick={() => navigate("/accounts/payments")}
                >
                  View All
                </span>
              </div>

              <div
                className="d-flex align-items-center justify-content-between mb-3"
                style={{
                  paddingBottom: "13px",
                  borderBottom: "1px solid #eef0f4",
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
                      INV-001
                    </div>

                    <div
                      style={{
                        fontSize: "11px",
                        color: "#8993a5",
                      }}
                    >
                      Pranav Industries
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
                    ₹25,000
                  </div>

                  <span
                    style={{
                      fontSize: "10px",
                      color: "#159957",
                    }}
                  >
                    Paid
                  </span>
                </div>
              </div>

              <div
                className="d-flex align-items-center justify-content-between mb-3"
                style={{
                  paddingBottom: "13px",
                  borderBottom: "1px solid #eef0f4",
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
                      INV-002
                    </div>

                    <div
                      style={{
                        fontSize: "11px",
                        color: "#8993a5",
                      }}
                    >
                      ABC Motors
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
                    ₹18,500
                  </div>

                  <span
                    style={{
                      fontSize: "10px",
                      color: "#159957",
                    }}
                  >
                    Paid
                  </span>
                </div>
              </div>

              <div
                className="d-flex align-items-center justify-content-between mb-3"
                style={{
                  paddingBottom: "13px",
                  borderBottom: "1px solid #eef0f4",
                }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "9px",
                      backgroundColor: "#fff5df",
                      color: "#e39a00",
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
                      INV-003
                    </div>

                    <div
                      style={{
                        fontSize: "11px",
                        color: "#8993a5",
                      }}
                    >
                      Global Filters
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
                    ₹32,000
                  </div>

                  <span
                    style={{
                      fontSize: "10px",
                      color: "#e39a00",
                    }}
                  >
                    Pending
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between">
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
                      INV-004
                    </div>

                    <div
                      style={{
                        fontSize: "11px",
                        color: "#8993a5",
                      }}
                    >
                      Shree Engineering
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
                    ₹14,500
                  </div>

                  <span
                    style={{
                      fontSize: "10px",
                      color: "#159957",
                    }}
                  >
                    Paid
                  </span>
                </div>
              </div>
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
                <tr>
                  <td
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#1769d5",
                    }}
                  >
                    INV-001
                  </td>

                  <td style={{ fontSize: "13px", color: "#4e5b70" }}>
                    Pranav Industries
                  </td>

                  <td style={{ fontSize: "13px", color: "#687386" }}>
                    12 Aug 2026
                  </td>

                  <td style={{ fontSize: "13px", fontWeight: "600" }}>
                    ₹25,000
                  </td>

                  <td style={{ fontSize: "13px", color: "#687386" }}>
                    20 Aug 2026
                  </td>

                  <td>
                    <span
                      style={{
                        padding: "6px 11px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "600",
                        backgroundColor: "#e6f8ee",
                        color: "#159957",
                      }}
                    >
                      Paid
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

                <tr>
                  <td
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#1769d5",
                    }}
                  >
                    INV-002
                  </td>

                  <td style={{ fontSize: "13px", color: "#4e5b70" }}>
                    ABC Motors
                  </td>

                  <td style={{ fontSize: "13px", color: "#687386" }}>
                    11 Aug 2026
                  </td>

                  <td style={{ fontSize: "13px", fontWeight: "600" }}>
                    ₹18,500
                  </td>

                  <td style={{ fontSize: "13px", color: "#687386" }}>
                    19 Aug 2026
                  </td>

                  <td>
                    <span
                      style={{
                        padding: "6px 11px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "600",
                        backgroundColor: "#e6f8ee",
                        color: "#159957",
                      }}
                    >
                      Paid
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

                <tr>
                  <td
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#1769d5",
                    }}
                  >
                    INV-003
                  </td>

                  <td style={{ fontSize: "13px", color: "#4e5b70" }}>
                    Global Filters
                  </td>

                  <td style={{ fontSize: "13px", color: "#687386" }}>
                    10 Aug 2026
                  </td>

                  <td style={{ fontSize: "13px", fontWeight: "600" }}>
                    ₹32,000
                  </td>

                  <td style={{ fontSize: "13px", color: "#687386" }}>
                    18 Aug 2026
                  </td>

                  <td>
                    <span
                      style={{
                        padding: "6px 11px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "600",
                        backgroundColor: "#fff5df",
                        color: "#e39a00",
                      }}
                    >
                      Pending
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

                <tr>
                  <td
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#1769d5",
                    }}
                  >
                    INV-004
                  </td>

                  <td style={{ fontSize: "13px", color: "#4e5b70" }}>
                    Shree Engineering
                  </td>

                  <td style={{ fontSize: "13px", color: "#687386" }}>
                    08 Aug 2026
                  </td>

                  <td style={{ fontSize: "13px", fontWeight: "600" }}>
                    ₹14,500
                  </td>

                  <td style={{ fontSize: "13px", color: "#687386" }}>
                    16 Aug 2026
                  </td>

                  <td>
                    <span
                      style={{
                        padding: "6px 11px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "600",
                        backgroundColor: "#fff0f1",
                        color: "#dc3545",
                      }}
                    >
                      Overdue
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsDashboard;
