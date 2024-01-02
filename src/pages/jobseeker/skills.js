const SkillsPage = ({ firstName }) => {
    return (
      <div className="d-flex flex-column align-items-center vh-100">
        <div className="col-md-6 col-12 mt-4">
          <div className="card">
            <div className="card-title text-center sticky-top bg-white">
              <h3 className="mb-3">Hello {firstName}! 👋</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <h4 className="mb-2">Personal Details</h4>
                  <label className="form-label" htmlFor="dateOfBirth">
                    Date of Birth
                  </label>
                  <input
                    className="form-control"
                    id="dateOfBirth"
                    type="date"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="idNumber">
                    ID Number
                  </label>
                  <input
                    className="form-control"
                    id="idNumber"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="location">
                    Select Location
                  </label>
                  <select className="form-control" id="location" required>
                    <option value="">Location</option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    <option value="location3">Location 3</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Education Details Section */}
        <div className="col-md-6 col-12 mt-4">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <h4 className="mb-2">Education Details</h4>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="educationLevel">
                      Education Level
                    </label>
                    <input
                      className="form-control"
                      id="educationLevel"
                      type="text"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="schoolName">
                      School Name
                    </label>
                    <input
                      className="form-control"
                      id="schoolName"
                      type="text"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="yearOfCompletion">
                      Year of Completion
                    </label>
                    <input
                      className="form-control"
                      id="yearOfCompletion"
                      type="text"
                      required
                    />
                  </div>
                </div>
                {/* Select Skills Section */}
                <div className="mb-3">
                  <h4 className="mb-2">Select Skills</h4>
                  <div className="mb-3">
                    <select className="form-control" id="skills" required>
                      <option value="">Skills</option>
                      <option value="skill1">Skill 1</option>
                      <option value="skill2">Skill 2</option>
                      <option value="skill3">Skill 3</option>
                    </select>
                  </div>
                </div>
                {/* Work Interests Section */}
                <div className="mb-3">
                  <h4 className="mb-2">Work Interests</h4>
                  <div className="mb-3">
                    <select className="form-control" id="workInterests" required>
                      <option value="">Work Interests</option>
                      <option value="interest1">Interest 1</option>
                      <option value="interest2">Interest 2</option>
                      <option value="interest3">Interest 3</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SkillsPage;
  