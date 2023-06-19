import { Input } from "../common/input";

import "./filters.scss";

export function Filters() {
  return (
    <section className="filter">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 filter-items">
            <Input
              placeholder="Search for articles here ..."
              type="text"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              }
            />
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 filter-items">
            <select
              className="form-select form-select-custom"
              aria-label=".form-select-sm example"
            >
              <option>Sources</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 filter-items">
            <select
              className="form-select form-select-custom"
              aria-label=".form-select-sm example"
            >
              <option>Categories</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-lg-3 filter-items">
            <Input placeholder="Search for articles here ..." type="date" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="filter-result">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Innocation & Development
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    ABC News
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
