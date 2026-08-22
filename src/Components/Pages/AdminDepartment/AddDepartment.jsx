import React, { useState } from "react";
import { api } from "../../api";

const AddDepartment = () => {
  const [department, setDepartment] = useState("");

  const addDepartment = async (name) => {
    try {
      const response = await api.post("/departments/add-department", {
        departmentName: name,
      });
      alert("Department Added");
      setDepartment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        padding: "30px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "22px 25px",
          borderRadius: "12px",
          boxShadow: "0 3px 12px rgba(0,0,0,0.05)",
          marginBottom: "25px",
        }}
      >
        <div className="d-flex align-items-center">
          <i
            className="bi bi-building-fill me-3"
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
              Add Department
            </h4>

            <span
              style={{
                fontSize: "12px",
                color: "#8993a5",
              }}
            >
              Create a new department for your organization
            </span>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "30px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            }}
          >
            <div className="text-center mb-4">
              <div
                className="d-inline-flex align-items-center justify-content-center"
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "15px",
                  backgroundColor: "#e8f1ff",
                  color: "#1769d5",
                  fontSize: "28px",
                }}
              >
                <i className="bi bi-diagram-3-fill"></i>
              </div>

              <h4
                style={{
                  marginTop: "15px",
                  marginBottom: "6px",
                  color: "#17233f",
                  fontWeight: "700",
                }}
              >
                Create New Department
              </h4>

              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "#8993a5",
                }}
              >
                Enter the details of the new department
              </p>
            </div>

            <div className="mb-4">
              <label
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#17233f",
                  marginBottom: "8px",
                }}
              >
                Department Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter department name"
                style={{
                  height: "46px",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-end gap-2">
              <button
                className="btn"
                style={{
                  backgroundColor: "#1769d5",
                  color: "#ffffff",
                  borderRadius: "8px",
                  padding: "10px 22px",
                  fontSize: "14px",
                }}
                onClick={() => addDepartment(department)}
              >
                <i className="bi bi-plus-lg me-2"></i>
                Add Department
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
