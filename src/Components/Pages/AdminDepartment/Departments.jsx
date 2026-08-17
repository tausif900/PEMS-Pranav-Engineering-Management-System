import React from "react";

const Departments = () => {
  const departments = [
    {
      name: "Human Resources",
      shortName: "HR",
      icon: "bi-people-fill",
      employees: 18,
      description: "Employee management and recruitment",
      iconBg: "#e8f1ff",
      iconColor: "#1769d5",
    },
    {
      name: "Accounts",
      shortName: "AC",
      icon: "bi-calculator-fill",
      employees: 24,
      description: "Financial and accounting operations",
      iconBg: "#e9f8f0",
      iconColor: "#159957",
    },
    {
      name: "Stock",
      shortName: "ST",
      icon: "bi-box-seam-fill",
      employees: 15,
      description: "Inventory and stock management",
      iconBg: "#fff2df",
      iconColor: "#e58a16",
    },
    {
      name: "Sales",
      shortName: "SA",
      icon: "bi-graph-up-arrow",
      employees: 31,
      description: "Sales and customer management",
      iconBg: "#f0ebff",
      iconColor: "#7044d9",
    },
    {
      name: "Purchase",
      shortName: "PU",
      icon: "bi-cart-check-fill",
      employees: 12,
      description: "Purchase and vendor management",
      iconBg: "#ffeaf0",
      iconColor: "#d63361",
    },
    {
      name: "Import",
      shortName: "IM",
      icon: "bi-box-arrow-in-down",
      employees: 10,
      description: "Import and incoming material operations",
      iconBg: "#e7f7f8",
      iconColor: "#0f8b8d",
    },
    {
      name: "Export",
      shortName: "EX",
      icon: "bi-box-arrow-up",
      employees: 14,
      description: "Export and outgoing material operations",
      iconBg: "#eaf0ff",
      iconColor: "#405de6",
    },
    {
      name: "Engineering",
      shortName: "EN",
      icon: "bi-gear-wide-connected",
      employees: 42,
      description: "Engineering and technical operations",
      iconBg: "#edf0f3",
      iconColor: "#46505c",
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
            Departments
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#7b8495",
              margin: 0,
            }}
          >
            Manage and monitor company departments
          </p>
        </div>

        {/* ADD DEPARTMENT */}

        <button
          className="btn"
          style={{
            backgroundColor: "#1769d5",
            color: "#ffffff",
            borderRadius: "8px",
            padding: "12px 20px",
            fontSize: "15px",
            fontWeight: "600",
            boxShadow: "0 5px 14px rgba(23,105,213,0.20)",
          }}
        >
          <i className="bi bi-plus-lg me-2"></i>
          Add Department
        </button>
      </div>

      {/* ================= DEPARTMENT SECTION ================= */}

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "28px",
          boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
        }}
      >
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
              All Departments
            </h4>

            <p
              style={{
                fontSize: "14px",
                color: "#7b8495",
                margin: 0,
              }}
            >
              Overview of all departments in PEMS
            </p>
          </div>

          {/* SEARCH */}

          <div
            className="d-flex align-items-center"
            style={{
              width: "270px",
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
              placeholder="Search department..."
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

        {/* ================= CARDS ================= */}

        <div className="row g-4">
          {departments.map((department, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
              <div
                style={{
                  border: "1px solid #e6eaf0",
                  borderRadius: "14px",
                  padding: "22px",
                  height: "100%",
                  backgroundColor: "#ffffff",
                  transition: "0.2s",
                  cursor: "pointer",
                }}
              >
                {/* ICON + MENU */}

                <div className="d-flex justify-content-between align-items-start">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "58px",
                      height: "58px",
                      borderRadius: "14px",
                      backgroundColor: department.iconBg,
                      color: department.iconColor,
                      fontSize: "25px",
                    }}
                  >
                    <i className={`bi ${department.icon}`}></i>
                  </div>

                  <button
                    className="btn btn-sm"
                    style={{
                      border: "none",
                      color: "#7b8495",
                      fontSize: "18px",
                    }}
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </div>

                {/* NAME */}

                <h5
                  style={{
                    marginTop: "20px",
                    marginBottom: "7px",
                    fontSize: "19px",
                    fontWeight: "700",
                    color: "#17233f",
                  }}
                >
                  {department.name}
                </h5>

                {/* DESCRIPTION */}

                <p
                  style={{
                    fontSize: "13px",
                    color: "#7b8495",
                    minHeight: "40px",
                    marginBottom: "18px",
                  }}
                >
                  {department.description}
                </p>

                {/* EMPLOYEES */}

                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    paddingTop: "15px",
                    borderTop: "1px solid #edf0f4",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#8a94a5",
                        marginBottom: "3px",
                      }}
                    >
                      Employees
                    </div>

                    <div
                      style={{
                        fontSize: "17px",
                        fontWeight: "700",
                        color: "#17233f",
                      }}
                    >
                      {department.employees}
                    </div>
                  </div>

                  <span
                    style={{
                      backgroundColor: "#e6f8ee",
                      color: "#159957",
                      padding: "6px 10px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    Active
                  </span>
                </div>

                {/* VIEW DETAILS */}

                <button
                  className="btn w-100 mt-3"
                  style={{
                    border: "1px solid #dbe4f0",
                    color: "#1769d5",
                    backgroundColor: "#f7faff",
                    borderRadius: "7px",
                    padding: "9px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  View Details
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
