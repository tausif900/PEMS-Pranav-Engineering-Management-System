import React from "react";

const Users = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ================= HEADER ================= */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "700",
              color: "#17233f",
              marginBottom: "5px",
            }}
          >
            Users
          </h2>

          <p
            style={{
              fontSize: "13px",
              color: "#171c24",
              margin: 0,
            }}
          >
            Manage PEMS system users and their access.
          </p>
        </div>

        {/* SEARCH */}

        <div
          className="d-flex align-items-center w-75"
          style={{
            backgroundColor: "#f7f9fc",
            border: "1px solid #e0e5ec",
            borderRadius: "8px",
            padding: "8px 12px",
          }}
        >
          <i
            className="bi bi-search me-2"
            style={{
              color: "#7b8495",
            }}
          ></i>

          <input
            type="text"
            placeholder="Search users..."
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "15px",
            }}
          />
        </div>
      </div>

      {/* ================= MAIN CARD ================= */}

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          padding: "25px",
          boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
        }}
      >
        {/* ================= TOP SECTION ================= */}

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#17233f",
                marginBottom: "4px",
              }}
            >
              System Users
            </h5>

            <span
              style={{
                fontSize: "15px",
                color: "#1b1b1d",
              }}
            >
              8 registered users
            </span>
          </div>
        </div>

        {/* ================= TABLE ================= */}

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid #e7ebf2",
                  color: "#7b8495",
                  fontSize: "13px",
                }}
              >
                <th style={{ padding: "14px 10px" }}>USER</th>
                <th style={{ padding: "14px 10px" }}>EMAIL</th>
                <th style={{ padding: "14px 10px" }}>ROLE</th>
                <th style={{ padding: "14px 10px" }}>DEPARTMENT</th>
                <th style={{ padding: "14px 10px" }}>STATUS</th>
                <th
                  style={{
                    padding: "14px 10px",
                    textAlign: "center",
                  }}
                >
                  ACTION
                </th>
              </tr>
            </thead>

            <tbody>
              {/* USER 1 */}

              <tr>
                <td style={{ padding: "16px 10px" }}>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        backgroundColor: "#e7f1ff",
                        color: "#1769d5",
                        fontWeight: "600",
                      }}
                    >
                      AS
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#17233f",
                        }}
                      >
                        Admin
                      </div>

                      <div
                        style={{
                          fontSize: "11px",
                          color: "#8a94a5",
                        }}
                      >
                        Administrator
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ fontSize: "12px" }}>admin@pems.com</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#eee9ff",
                      color: "#7044d9",
                    }}
                  >
                    Admin
                  </span>
                </td>

                <td style={{ fontSize: "12px" }}>Administration</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#e6f8ee",
                      color: "#159957",
                    }}
                  >
                    Active
                  </span>
                </td>

                <td className="text-center">
                  <button
                    className="btn btn-sm me-1"
                    style={{
                      color: "#1769d5",
                      backgroundColor: "#edf5ff",
                    }}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>

                  <button
                    className="btn btn-sm"
                    style={{
                      color: "#dc3545",
                      backgroundColor: "#fff0f1",
                    }}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>

              {/* USER 2 */}

              <tr>
                <td style={{ padding: "16px 10px" }}>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        backgroundColor: "#fff0df",
                        color: "#e88a16",
                        fontWeight: "600",
                      }}
                    >
                      RS
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#17233f",
                        }}
                      >
                        Rahul Sharma
                      </div>

                      <div
                        style={{
                          fontSize: "11px",
                          color: "#8a94a5",
                        }}
                      >
                        HR Manager
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ fontSize: "12px" }}>rahul@pems.com</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#e7f1ff",
                      color: "#1769d5",
                    }}
                  >
                    HR
                  </span>
                </td>

                <td style={{ fontSize: "12px" }}>Human Resources</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#e6f8ee",
                      color: "#159957",
                    }}
                  >
                    Active
                  </span>
                </td>

                <td className="text-center">
                  <button
                    className="btn btn-sm me-1"
                    style={{
                      color: "#1769d5",
                      backgroundColor: "#edf5ff",
                    }}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>

                  <button
                    className="btn btn-sm"
                    style={{
                      color: "#dc3545",
                      backgroundColor: "#fff0f1",
                    }}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>

              {/* USER 3 */}

              <tr>
                <td style={{ padding: "16px 10px" }}>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        backgroundColor: "#e9f8f0",
                        color: "#159957",
                        fontWeight: "600",
                      }}
                    >
                      AK
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#17233f",
                        }}
                      >
                        Ahmed Khan
                      </div>

                      <div
                        style={{
                          fontSize: "11px",
                          color: "#8a94a5",
                        }}
                      >
                        Accountant
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ fontSize: "12px" }}>ahmed@pems.com</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#e9f8f0",
                      color: "#159957",
                    }}
                  >
                    Accounts
                  </span>
                </td>

                <td style={{ fontSize: "12px" }}>Accounts</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#e6f8ee",
                      color: "#159957",
                    }}
                  >
                    Active
                  </span>
                </td>

                <td className="text-center">
                  <button
                    className="btn btn-sm me-1"
                    style={{
                      color: "#1769d5",
                      backgroundColor: "#edf5ff",
                    }}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>

                  <button
                    className="btn btn-sm"
                    style={{
                      color: "#dc3545",
                      backgroundColor: "#fff0f1",
                    }}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>

              {/* USER 4 */}

              <tr>
                <td style={{ padding: "16px 10px" }}>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        backgroundColor: "#f0ebff",
                        color: "#7044d9",
                        fontWeight: "600",
                      }}
                    >
                      VP
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#17233f",
                        }}
                      >
                        Vikram Patel
                      </div>

                      <div
                        style={{
                          fontSize: "11px",
                          color: "#8a94a5",
                        }}
                      >
                        Sales Executive
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ fontSize: "12px" }}>vikram@pems.com</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#f0ebff",
                      color: "#7044d9",
                    }}
                  >
                    Sales
                  </span>
                </td>

                <td style={{ fontSize: "12px" }}>Sales</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#e6f8ee",
                      color: "#159957",
                    }}
                  >
                    Active
                  </span>
                </td>

                <td className="text-center">
                  <button
                    className="btn btn-sm me-1"
                    style={{
                      color: "#1769d5",
                      backgroundColor: "#edf5ff",
                    }}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>

                  <button
                    className="btn btn-sm"
                    style={{
                      color: "#dc3545",
                      backgroundColor: "#fff0f1",
                    }}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>

              {/* USER 5 */}

              <tr>
                <td style={{ padding: "16px 10px" }}>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        backgroundColor: "#ffe8ed",
                        color: "#d63361",
                        fontWeight: "600",
                      }}
                    >
                      SK
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#17233f",
                        }}
                      >
                        Sana Khan
                      </div>

                      <div
                        style={{
                          fontSize: "11px",
                          color: "#8a94a5",
                        }}
                      >
                        Purchase Executive
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ fontSize: "12px" }}>sana@pems.com</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#ffe8ed",
                      color: "#d63361",
                    }}
                  >
                    Purchase
                  </span>
                </td>

                <td style={{ fontSize: "12px" }}>Purchase</td>

                <td>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#e6f8ee",
                      color: "#159957",
                    }}
                  >
                    Active
                  </span>
                </td>

                <td className="text-center">
                  <button
                    className="btn btn-sm me-1"
                    style={{
                      color: "#1769d5",
                      backgroundColor: "#edf5ff",
                    }}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>

                  <button
                    className="btn btn-sm"
                    style={{
                      color: "#dc3545",
                      backgroundColor: "#fff0f1",
                    }}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
Users;
