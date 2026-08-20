import React from "react";

const InternationalBills = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Domestic Bills</h2>
          <p className="text-muted mb-0">View all generated International bills</p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Search by invoice number or customer..."
              />
            </div>

            <div className="col-md-3">
              <select className="form-select">
                <option>All Bills</option>
                <option>Domestic</option>
                <option>International</option>
              </select>
            </div>

            <div className="col-md-2">
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-2">
              <button className="btn btn-outline-secondary w-100">Reset</button>
            </div>
          </div>
        </div>
      </div>

      {/* International Bills */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold mb-0">International Bills</h5>

            <span className="badge bg-dark">8 Bills</span>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Invoice No.</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Country</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="fw-semibold">INT-001</td>
                  <td>19 Aug 2026</td>
                  <td>Global Auto Parts</td>
                  <td>UAE</td>
                  <td>$2,450</td>
                  <td>
                    <span className="badge bg-success">Paid</span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      View
                    </button>

                    <button className="btn btn-sm btn-outline-secondary">
                      Print
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="fw-semibold">INT-002</td>
                  <td>16 Aug 2026</td>
                  <td>Euro Machinery Ltd.</td>
                  <td>Germany</td>
                  <td>€3,800</td>
                  <td>
                    <span className="badge bg-warning text-dark">Pending</span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      View
                    </button>

                    <button className="btn btn-sm btn-outline-secondary">
                      Print
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="fw-semibold">INT-003</td>
                  <td>12 Aug 2026</td>
                  <td>Industrial Filters Inc.</td>
                  <td>USA</td>
                  <td>$5,200</td>
                  <td>
                    <span className="badge bg-success">Paid</span>
                  </td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      View
                    </button>

                    <button className="btn btn-sm btn-outline-secondary">
                      Print
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

export default InternationalBills;
