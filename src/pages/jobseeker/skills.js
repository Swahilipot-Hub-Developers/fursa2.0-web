import { FaFileUpload } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faIdCard,
  faMapMarkerAlt,
  faGraduationCap,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  MdPerson,
  MdSchool,
  MdWork,
  MdAddAPhoto,
  MdCreditCard,
} from "react-icons/md"; // Importing react-icons
import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa"; // Importing FaMapMarkerAlt and FaGraduationCap

const SkillsPage = ({ firstName }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12 mt-4">
          <div className="card">
            <div className="card-title text-center">
              <h3 className="mb-3">Hello {firstName}! 👋</h3>
            </div>
            <div className="card-body">
              <form>
                {/* Personal Details Section */}
                <div className="mb-3 position-relative">
                  <h4 className="mb-2">Personal Details</h4>
                  <MdPerson size={20} className="small-icon mr-2" />
                  <label className="form-label" htmlFor="dateOfBirth">
                    Date of Birth
                  </label>
                  <input
                    className="form-control pl-4"
                    id="dateOfBirth"
                    type="date"
                    required
                  />
                </div>
                <div className="mb-3 position-relative">
                  <MdCreditCard size={20} className="small-icon mr-2" />
                  <label className="form-label" htmlFor="idNumber">
                    ID Number
                  </label>
                  <input
                    className="form-control pl-4"
                    id="idNumber"
                    type="text"
                    pattern="[0-9]*"
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/\D/, ""))
                    }
                    required
                  />
                </div>
                <div className="mb-3 position-relative">
                  <FaMapMarkerAlt size={20} className="small-icon mr-2" />
                  <label className="form-label" htmlFor="location">
                    Select Location
                  </label>
                  <select className="form-control pl-4" id="location" required>
                    <option value="">Select Location</option>
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
                <div className="mb-3 position-relative">
                  <h4 className="mb-2">Education Details</h4>
                  <FaGraduationCap size={20} className="small-icon mr-2" />
                  <label className="form-label" htmlFor="educationLevel">
                    Education Level
                  </label>
                  <input
                    className="form-control pl-4"
                    id="educationLevel"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-3 position-relative">
                  <MdSchool size={20} className="small-icon mr-2" />
                  <label className="form-label" htmlFor="schoolName">
                    School Name
                  </label>
                  <input
                    className="form-control pl-4"
                    id="schoolName"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-3 position-relative">
                  <FaGraduationCap size={20} className="small-icon mr-2" />
                  <label className="form-label" htmlFor="yearOfCompletion">
                    Year of Completion
                  </label>
                  <input
                    className="form-control pl-4"
                    id="yearOfCompletion"
                    type="text"
                    required
                  />
                </div>
                {/* Select Skills Section */}
                <div className="mb-3 position-relative">
                  <h4 className="mb-2">Select Skills</h4>
                  <MdWork size={20} className="small-icon mr-2" />
                  <select className="form-control pl-4" id="skills" required>
                    <option value="">Select Skills</option>
                    <option value="skill1">Skill 1</option>
                    <option value="skill2">Skill 2</option>
                    <option value="skill3">Skill 3</option>
                  </select>
                </div>
                {/* Work Interests Section */}
                <div className="mb-3 position-relative">
                  <h4 className="mb-2">Work Interests</h4>
                  <MdWork size={20} className="small-icon mr-2" />
                  <select
                    className="form-control pl-4"
                    id="workInterests"
                    required
                  >
                    <option value="">Select Work Interests</option>
                    <option value="interest1">Interest 1</option>
                    <option value="interest2">Interest 2</option>
                    <option value="interest3">Interest 3</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Resume Upload Section */}
      <div className="col-md-6 col-12 mt-4">
        <div className="card">
          <div className="card-body text-center">
            <h4 className="mb-2">
              <FaFileUpload size={20} className="small-icon mr-2" />
              Resume Upload
            </h4>
            <div className="mb-3">
              <label htmlFor="resume" className="form-label visually-hidden">
                Resume Upload
              </label>
              <div className="d-flex align-items-center">
                <input
                  type="file"
                  className="form-control pl-4"
                  id="resume"
                  accept=".pdf, .doc, .docx"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Submit Details Button */}
      <div className="d-flex justify-content-end mt-4">
        <button
          type="submit"
          className="btn btn-success"
          style={{ backgroundColor: "#8CC41C", width: "100%" }}
        >
          Submit Details
        </button>
      </div>
    </div>
  );
};

export default SkillsPage;
