import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="form">
        <div class="form-panel">
          <div class="form-header">
            <svg
              width="52"
              height="48"
              viewBox="0 0 52 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="11.0477"
                height="27.8427"
                rx="5.52383"
                transform="matrix(0.854439 -0.519552 0.510535 0.859857 0.499878 24.0586)"
                fill="#3766E8"
              ></rect>
              <rect
                width="11.0477"
                height="42.3694"
                rx="5.52383"
                transform="matrix(0.854439 -0.519552 0.510535 0.859857 12.3904 8.65234)"
                fill="#3766E8"
              ></rect>
              <rect
                width="11.0477"
                height="21.5479"
                rx="5.52383"
                transform="matrix(0.854439 -0.519552 0.510535 0.859857 31.0594 5.73828)"
                fill="#3766E8"
              ></rect>
            </svg>
            <h1>It's a delight to have you onboard</h1>
            <p>Help us know you better.</p>
            <p>(This is how we optimize Wobot as per your business needs)</p>
          </div>
          <div class="form-content">
            <form>
              <div class="form-group">
                <label for="companyname">Company Name</label>
                <input
                  type="text"
                  name="companyname"
                  required="required"
                  placeholder="e.g example Inc"
                />
              </div>
              <div class="form-group">
                <label for="industry">Industry</label>
                <select>
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="Computer Industry">Computer Industry</option>
                  <option value="Transport Industry">Transport Industry</option>
                  <option value="Computer Industry">Computer Industry</option>
                  <option value="Telecommunication industry">
                    Telecommunication industry
                  </option>
                  <option value="Aerospace Industry">Aerospace Industry</option>
                  <option value="Pharmaceutical Industry">
                    Pharmaceutical Industry
                  </option>
                  <option value="Construction Industry">
                    Construction Industry
                  </option>
                  <option value="Agriculture industry">
                    Agriculture industry
                  </option>
                  <option value="Education Insustry">Education Industry</option>
                </select>
              </div>

              <div class="radio-tile-group">
                <div class="input-container first">
                  <input
                    id="1"
                    class="radio-button"
                    type="radio"
                    name="radio"
                  />
                  <div class="radio-tile">
                    <label for="1" class="radio-tile-label">
                      1-20
                    </label>
                  </div>
                </div>

                <div class="input-container">
                  <input
                    id="2"
                    class="radio-button"
                    type="radio"
                    name="radio"
                  />
                  <div class="radio-tile">
                    <label for="2" class="radio-tile-label">
                      21-50
                    </label>
                  </div>
                </div>
                <div class="input-container">
                  <input
                    id="3"
                    class="radio-button"
                    type="radio"
                    name="radio"
                  />
                  <div class="radio-tile">
                    <label for="3" class="radio-tile-label">
                      51-200
                    </label>
                  </div>
                </div>
                <div class="input-container">
                  <input
                    id="4"
                    class="radio-button"
                    type="radio"
                    name="radio"
                  />
                  <div class="radio-tile">
                    <label for="4" class="radio-tile-label">
                      201-500
                    </label>
                  </div>
                </div>
              </div>

              <div class="form-control">
                <button type="submit">Get Started</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
