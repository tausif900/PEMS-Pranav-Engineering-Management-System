import React from "react";

const Employees = () => {
  const employees = [
    {
      name: "Rahul Sharma",
      employeeId: "EMP001",
      email: "rahul@pems.com",
      department: "Human Resources",
      designation: "HR Manager",
      phone: "+91 98765 43210",
      status: "Active",
      initials: "RS",
    },
    {
      name: "Ahmed Khan",
      employeeId: "EMP002",
      email: "ahmed@pems.com",
      department: "Accounts",
      designation: "Accountant",
      phone: "+91 98765 12345",
      status: "Active",
      initials: "AK",
    },
    {
      name: "Vikram Patel",
      employeeId: "EMP003",
      email: "vikram@pems.com",
      department: "Sales",
      designation: "Sales Executive",
      phone: "+91 99887 66554",
      status: "Active",
      initials: "VP",
    },
    {
      name: "Sana Khan",
      employeeId: "EMP004",
      email: "sana@pems.com",
      department: "Purchase",
      designation: "Purchase Executive",
      phone: "+91 98765 67890",
      status: "Active",
      initials: "SK",
    },
    {
      name: "Arjun Mehta",
      employeeId: "EMP005",
      email: "arjun@pems.com",
      department: "Stock",
      designation: "Inventory Manager",
      phone: "+91 97654 32109",
      status: "Active",
      initials: "AM",
    },
    {
      name: "Neha Verma",
      employeeId: "EMP006",
      email: "neha@pems.com",
      department: "Import",
      designation: "Import Executive",
      phone: "+91 98989 45678",
      status: "Active",
      initials: "NV",
    },
    {
      name: "Rohan Desai",
      employeeId: "EMP007",
      email: "rohan@pems.com",
      department: "Export",
      designation: "Export Executive",
      phone: "+91 97865 23451",
      status: "Active",
      initials: "RD",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        padding: "35px",
      }}
    >
      {/* ================= HEADER ================= */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#17233f",
              marginBottom: "7px",
            }}
          >
            Employees
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#7b8495",
              margin: 0,
            }}
          >
            Manage and monitor company employees
          </p>
        </div>
      </div>

      {/* ================= EMPLOYEE TABLE CARD ================= */}

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "28px",
          boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
        }}
      >
        {/* ================= TABLE HEADER ================= */}

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4
              style={{
                fontSize: "21px",
                fontWeight: "700",
                color: "#17233f",
                marginBottom: "5px",
              }}
            >
              All Employees
            </h4>

            <p
              style={{
                fontSize: "14px",
                color: "#7b8495",
                margin: 0,
              }}
            >
              Employee information and department details
            </p>
          </div>

          {/* ================= SEARCH ================= */}

          <div
            className="d-flex align-items-center"
            style={{
              width: "280px",
              backgroundColor: "#f7f9fc",
              border: "1px solid #e0e5ec",
              borderRadius: "8px",
              padding: "10px 13px",
            }}
          >
            <i
              className="bi bi-search me-2"
              style={{
                color: "#7b8495",
                fontSize: "15px",
              }}
            ></i>

            <input
              type="text"
              placeholder="Search employees..."
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                fontSize: "14px",
              }}
            />
          </div>
        </div>

        {/* ================= FILTER ROW ================= */}

        <div className="d-flex gap-2 mb-4">
          <button
            className="btn"
            style={{
              backgroundColor: "#1769d5",
              color: "#ffffff",
              borderRadius: "7px",
              padding: "8px 15px",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            All Employees
          </button>

          <button
            className="btn"
            style={{
              backgroundColor: "#f5f7fb",
              color: "#596579",
              border: "1px solid #e1e6ed",
              borderRadius: "7px",
              padding: "8px 15px",
              fontSize: "13px",
            }}
          >
            Active
          </button>

          <button
            className="btn"
            style={{
              backgroundColor: "#f5f7fb",
              color: "#596579",
              border: "1px solid #e1e6ed",
              borderRadius: "7px",
              padding: "8px 15px",
              fontSize: "13px",
            }}
          >
            Inactive
          </button>
        </div>

        {/* ================= TABLE ================= */}

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid #e5e9ef",
                  color: "#7b8495",
                  fontSize: "13px",
                }}
              >
                <th style={{ padding: "15px 10px" }}>EMPLOYEE</th>

                <th style={{ padding: "15px 10px" }}>EMPLOYEE ID</th>

                <th style={{ padding: "15px 10px" }}>DEPARTMENT</th>

                <th style={{ padding: "15px 10px" }}>DESIGNATION</th>

                <th style={{ padding: "15px 10px" }}>CONTACT</th>

                <th style={{ padding: "15px 10px" }}>STATUS</th>

                <th
                  style={{
                    padding: "15px 10px",
                    textAlign: "center",
                  }}
                >
                  ACTION
                </th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  {/* ================= EMPLOYEE ================= */}

                  <td style={{ padding: "17px 10px" }}>
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          backgroundColor: "#e8f1ff",
                          color: "#1769d5",
                          fontWeight: "700",
                          fontSize: "13px",
                        }}
                      >
                        {employee.initials}
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#17233f",
                          }}
                        >
                          {employee.name}
                        </div>

                        <div
                          style={{
                            fontSize: "12px",
                            color: "#8a94a5",
                            marginTop: "3px",
                          }}
                        >
                          {employee.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* ================= EMPLOYEE ID ================= */}

                  <td
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#4e5b70",
                    }}
                  >
                    {employee.employeeId}
                  </td>

                  {/* ================= DEPARTMENT ================= */}

                  <td
                    style={{
                      fontSize: "13px",
                      color: "#4e5b70",
                    }}
                  >
                    {employee.department}
                  </td>

                  {/* ================= DESIGNATION ================= */}

                  <td
                    style={{
                      fontSize: "13px",
                      color: "#4e5b70",
                    }}
                  >
                    {employee.designation}
                  </td>

                  {/* ================= CONTACT ================= */}

                  <td
                    style={{
                      fontSize: "13px",
                      color: "#4e5b70",
                    }}
                  >
                    {employee.phone}
                  </td>

                  {/* ================= STATUS ================= */}

                  <td>
                    <span
                      style={{
                        backgroundColor: "#e6f8ee",
                        color: "#159957",
                        padding: "7px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {employee.status}
                    </span>
                  </td>

                  {/* ================= ACTION ================= */}

                  <td className="text-center">
                    <button
                      className="btn btn-sm me-1"
                      style={{
                        color: "#1769d5",
                        backgroundColor: "#edf5ff",
                        borderRadius: "6px",
                      }}
                    >
                      <i className="bi bi-eye-fill"></i>
                    </button>

                    <button
                      className="btn btn-sm me-1"
                      style={{
                        color: "#1769d5",
                        backgroundColor: "#edf5ff",
                        borderRadius: "6px",
                      }}
                    >
                      <i className="bi bi-pencil-fill"></i>
                    </button>

                    <button
                      className="btn btn-sm"
                      style={{
                        color: "#dc3545",
                        backgroundColor: "#fff0f1",
                        borderRadius: "6px",
                      }}
                    >
                      <i className="bi bi-trash-fill"></i>
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

export default Employees;
