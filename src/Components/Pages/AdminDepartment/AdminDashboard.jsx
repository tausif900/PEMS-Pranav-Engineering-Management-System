import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ================= SIDEBAR ================= */}

      <div
        style={{
          width: "240px",
          minHeight: "100vh",
          background: "linear-gradient(180deg, #071d49, #063b7a)",
          color: "white",
          padding: "25px 15px",
        }}
      >
        {/* LOGO */}

        <div className="text-center mb-4">
          <div
            style={{
              fontSize: "28px",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            <i
              className="bi bi-gear-wide-connected me-2"
              style={{ color: "#3d91ff" }}
            ></i>
            PEMS
          </div>

          <div
            style={{
              fontSize: "10px",
              letterSpacing: "3px",
              opacity: "0.8",
              marginLeft: "35px",
            }}
          >
            ENGINEERING
          </div>
        </div>

        {/* MENU */}

        <div
          style={{
            fontSize: "11px",
            color: "#91a8c8",
            marginBottom: "10px",
            paddingLeft: "12px",
          }}
        >
          MAIN MENU
        </div>

        {/* DASHBOARD */}

        <div
          className="d-flex align-items-center mb-2"
          onClick={() => {
            setActiveMenu("Dashboard");
            navigate("/admin-dashboard");
          }}
          style={{
            backgroundColor:
              activeMenu === "Dashboard" ? "#1769d5" : "transparent",
            borderRadius: "8px",
            padding: "12px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-grid-fill me-3"></i>
          Dashboard
        </div>

        {/* USERS */}

        <div
          className="d-flex align-items-center mb-2"
          onClick={() => {
            setActiveMenu("Users");
            navigate("/admin-users");
          }}
          style={{
            backgroundColor: activeMenu === "Users" ? "#1769d5" : "transparent",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-people-fill me-3"></i>
          Users
        </div>

        {/* DEPARTMENTS */}

        <div
          className="d-flex align-items-center mb-2"
          onClick={() => {
            setActiveMenu("Departments");
            navigate("/admin-departments");
          }}
          style={{
            backgroundColor:
              activeMenu === "Departments" ? "#1769d5" : "transparent",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-diagram-3-fill me-3"></i>
          Departments
        </div>

        {/* EMPLOYEES */}

        <div
          className="d-flex align-items-center mb-2"
          onClick={() => {
            setActiveMenu("Employees");
            navigate("/admin-employees");
          }}
          style={{
            backgroundColor:
              activeMenu === "Employees" ? "#1769d5" : "transparent",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-person-badge-fill me-3"></i>
          Employees
        </div>

        {/* REPORTS */}

        <div
          className="d-flex align-items-center mb-2"
          onClick={() => setActiveMenu("Reports")}
          style={{
            backgroundColor:
              activeMenu === "Reports" ? "#1769d5" : "transparent",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-bar-chart-fill me-3"></i>
          Reports
        </div>

        {/* SETTINGS */}

        <div
          className="d-flex align-items-center mb-2"
          onClick={() => setActiveMenu("Settings")}
          style={{
            backgroundColor:
              activeMenu === "Settings" ? "#1769d5" : "transparent",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-gear-fill me-3"></i>
          Settings
        </div>

        {/* LOGOUT */}

        <div
          className="d-flex align-items-center"
          onClick={() => setActiveMenu("Logout")}
          style={{
            backgroundColor:
              activeMenu === "Logout" ? "#1769d5" : "transparent",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "14px",
            marginTop: "35px",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-box-arrow-left me-3"></i>
          Logout
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="flex-grow-1">
        {/* ================= NAVBAR ================= */}

        <div
          className="d-flex align-items-center justify-content-between"
          style={{
            height: "75px",
            backgroundColor: "#ffffff",
            padding: "0 30px",
            borderBottom: "1px solid #e7ebf2",
          }}
        >
          {/* HEADER */}

          <div className="mb-4 pt-4">
            <h3
              style={{
                fontSize: "25px",
                fontWeight: "700",
                color: "#17233f",
                marginBottom: "5px",
              }}
            >
              Admin Dashboard
            </h3>

            <p
              style={{
                color: "#7b8495",
                fontSize: "13px",
                margin: 0,
              }}
            >
              Welcome back! Here's an overview of your organization.
            </p>
          </div>

          {/* RIGHT SIDE */}

          <div className="d-flex align-items-center gap-4">
            <i
              className="bi bi-bell"
              style={{
                fontSize: "20px",
                color: "#566176",
              }}
            ></i>

            <i
              className="bi bi-envelope"
              style={{
                fontSize: "20px",
                color: "#566176",
              }}
            ></i>

            <div
              style={{
                height: "32px",
                width: "1px",
                backgroundColor: "#ddd",
              }}
            ></div>

            <div className="d-flex align-items-center gap-2">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#e6f0ff",
                  color: "#1265d8",
                  fontSize: "19px",
                }}
              >
                <i className="bi bi-person-fill"></i>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#17233f",
                  }}
                >
                  Admin
                </div>

                <div
                  style={{
                    fontSize: "11px",
                    color: "#7b8495",
                  }}
                >
                  Administrator
                </div>
              </div>

              <i className="bi bi-chevron-down"></i>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="p-4">
          {/* ================= STAT CARDS ================= */}

          <div className="row g-4 mb-4">
            {/* TOTAL EMPLOYEES */}

            <div className="col-xl-3 col-md-6">
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                }}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#7b8495",
                        marginBottom: "8px",
                      }}
                    >
                      Total Employees
                    </p>

                    <h3
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#17233f",
                        margin: 0,
                      }}
                    >
                      248
                    </h3>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      backgroundColor: "#e7f1ff",
                      color: "#1769d5",
                      fontSize: "22px",
                    }}
                  >
                    <i className="bi bi-people-fill"></i>
                  </div>
                </div>

                <p
                  style={{
                    color: "#16a05d",
                    fontSize: "11px",
                    marginTop: "15px",
                    marginBottom: 0,
                  }}
                >
                  ↑ 8.5% from last month
                </p>
              </div>
            </div>

            {/* TOTAL DEPARTMENTS */}

            <div className="col-xl-3 col-md-6">
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                }}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#7b8495",
                        marginBottom: "8px",
                      }}
                    >
                      Departments
                    </p>

                    <h3
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#17233f",
                        margin: 0,
                      }}
                    >
                      08
                    </h3>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      backgroundColor: "#eee9ff",
                      color: "#7044d9",
                      fontSize: "22px",
                    }}
                  >
                    <i className="bi bi-diagram-3-fill"></i>
                  </div>
                </div>

                <p
                  style={{
                    color: "#7b8495",
                    fontSize: "11px",
                    marginTop: "15px",
                    marginBottom: 0,
                  }}
                >
                  Active departments
                </p>
              </div>
            </div>

            {/* PRESENT TODAY */}

            <div className="col-xl-3 col-md-6">
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                }}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#7b8495",
                        marginBottom: "8px",
                      }}
                    >
                      Present Today
                    </p>

                    <h3
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#17233f",
                        margin: 0,
                      }}
                    >
                      219
                    </h3>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      backgroundColor: "#e5f8ed",
                      color: "#18a05b",
                      fontSize: "22px",
                    }}
                  >
                    <i className="bi bi-person-check-fill"></i>
                  </div>
                </div>

                <p
                  style={{
                    color: "#16a05d",
                    fontSize: "11px",
                    marginTop: "15px",
                    marginBottom: 0,
                  }}
                >
                  88.3% attendance
                </p>
              </div>
            </div>

            {/* ON LEAVES */}

            <div className="col-xl-3 col-md-6">
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                }}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#7b8495",
                        marginBottom: "8px",
                      }}
                    >
                      On Leave
                    </p>

                    <h3
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#17233f",
                        margin: 0,
                      }}
                    >
                      12
                    </h3>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      backgroundColor: "#fff1dc",
                      color: "#ef971b",
                      fontSize: "22px",
                    }}
                  >
                    <i className="bi bi-calendar-event"></i>
                  </div>
                </div>

                <p
                  style={{
                    color: "#7b8495",
                    fontSize: "11px",
                    marginTop: "15px",
                    marginBottom: 0,
                  }}
                >
                  Employees on leave
                </p>
              </div>
            </div>
          </div>

          {/* ================= ADD BUTTONS ================= */}

          <div className="row g-4 mb-4">
            {/* ================= ADD DEPARTMENT ================= */}

            <div className="col-lg-4 col-md-6">
              <button
                className="w-100 border-0 text-start"
                onClick={() => navigate("/admin/add-department")}
                style={{
                  background: "linear-gradient(135deg, #4b49c6, #716fdf)",
                  color: "#ffffff",
                  borderRadius: "14px",
                  padding: "22px",
                  boxShadow: "0 8px 20px rgba(75,73,198,0.20)",
                  cursor: "pointer",
                }}
              >
                <div className="d-flex align-items-center">
                  {/* ICON */}

                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255,255,255,0.18)",
                      fontSize: "23px",
                    }}
                  >
                    <i className="bi bi-building-add"></i>
                  </div>

                  {/* TEXT */}

                  <div>
                    <div
                      style={{
                        fontSize: "17px",
                        fontWeight: "700",
                        marginBottom: "3px",
                      }}
                    >
                      Add Department
                    </div>

                    <div
                      style={{
                        fontSize: "12px",
                        opacity: "0.85",
                      }}
                    >
                      Create a new department
                    </div>
                  </div>

                  {/* ARROW */}

                  <i
                    className="bi bi-arrow-right ms-auto"
                    style={{
                      fontSize: "19px",
                    }}
                  ></i>
                </div>
              </button>
            </div>

            {/* ================= ADD EMPLOYEE ================= */}

            <div className="col-lg-4 col-md-6">
              <button
                className="w-100 border-0 text-start"
                style={{
                  background: "linear-gradient(135deg, #159957, #20b66a)",
                  color: "#ffffff",
                  borderRadius: "14px",
                  padding: "22px",
                  boxShadow: "0 8px 20px rgba(21,153,87,0.20)",
                  cursor: "pointer",
                }}
              >
                <div className="d-flex align-items-center">
                  {/* ICON */}

                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255,255,255,0.18)",
                      fontSize: "23px",
                    }}
                  >
                    <i className="bi bi-person-badge-fill"></i>
                  </div>

                  {/* TEXT */}

                  <div>
                    <div
                      style={{
                        fontSize: "17px",
                        fontWeight: "700",
                        marginBottom: "3px",
                      }}
                    >
                      Add Employee
                    </div>

                    <div
                      style={{
                        fontSize: "12px",
                        opacity: "0.85",
                      }}
                    >
                      Add a new employee
                    </div>
                  </div>

                  {/* ARROW */}

                  <i
                    className="bi bi-arrow-right ms-auto"
                    style={{
                      fontSize: "19px",
                    }}
                  ></i>
                </div>
              </button>
            </div>
          </div>

          {/* ================= MIDDLE SECTION ================= */}

          <div className="row g-4 mb-4">
            {/* DEPARTMENT CARD */}

            <div className="col-lg-5">
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "22px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                  height: "100%",
                }}
              >
                <h5
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#17233f",
                  }}
                >
                  Department Overview
                </h5>

                <div className="mt-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ fontSize: "13px" }}>HR</span>

                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      18
                    </span>
                  </div>

                  <div className="progress mb-3" style={{ height: "8px" }}>
                    <div
                      className="progress-bar"
                      style={{
                        width: "35%",
                        backgroundColor: "#1769d5",
                      }}
                    ></div>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ fontSize: "13px" }}>Accounts</span>

                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      24
                    </span>
                  </div>

                  <div className="progress mb-3" style={{ height: "8px" }}>
                    <div
                      className="progress-bar"
                      style={{
                        width: "50%",
                        backgroundColor: "#7044d9",
                      }}
                    ></div>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ fontSize: "13px" }}>Sales</span>

                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      31
                    </span>
                  </div>

                  <div className="progress mb-3" style={{ height: "8px" }}>
                    <div
                      className="progress-bar"
                      style={{
                        width: "65%",
                        backgroundColor: "#18a05b",
                      }}
                    ></div>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ fontSize: "13px" }}>Production</span>

                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      52
                    </span>
                  </div>

                  <div className="progress" style={{ height: "8px" }}>
                    <div
                      className="progress-bar"
                      style={{
                        width: "80%",
                        backgroundColor: "#ef971b",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* ================= RECENT EMPLOYEES ================= */}

            <div
              className="col-lg-7"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "22px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      marginBottom: "4px",
                    }}
                  >
                    Recent Employees
                  </h5>

                  <p
                    style={{
                      fontSize: "11px",
                      color: "#7b8495",
                      margin: 0,
                    }}
                  >
                    Recently added employees
                  </p>
                </div>

                <button className="btn btn-outline-primary btn-sm">
                  View All
                </button>
              </div>

              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr
                      style={{
                        fontSize: "12px",
                        color: "#7b8495",
                      }}
                    >
                      <th>Name</th>
                      <th>Department</th>
                      <th>Designation</th>
                      <th>Joining Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        Rahul Sharma
                      </td>

                      <td style={{ fontSize: "12px" }}>Engineering</td>

                      <td style={{ fontSize: "12px" }}>Engineer</td>

                      <td style={{ fontSize: "12px" }}>12 Aug 2026</td>

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
                    </tr>

                    <tr>
                      <td
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        Priya Patel
                      </td>

                      <td style={{ fontSize: "12px" }}>HR</td>

                      <td style={{ fontSize: "12px" }}>HR Executive</td>

                      <td style={{ fontSize: "12px" }}>08 Aug 2026</td>

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
                    </tr>

                    <tr>
                      <td
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        Ahmed Khan
                      </td>

                      <td style={{ fontSize: "12px" }}>Accounts</td>

                      <td style={{ fontSize: "12px" }}>Accountant</td>

                      <td style={{ fontSize: "12px" }}>05 Aug 2026</td>

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
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
