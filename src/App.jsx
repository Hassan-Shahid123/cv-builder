import { useState } from "react";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import CompanyForm from "./components/CompanyForm";
import CV from "./components/CV";
import "./App.css";

function App() {
  const [generalData, setGeneralData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [companyData, setCompanyData] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [state, setState] = useState("edit");

  function handleGeneralChange(e) {
    const { name, value } = e.target;
    setGeneralData({
      ...generalData,
      [name]: value,
    });
  }
  function handleEduChange(e) {
    const { name, value } = e.target;
    setEducationData({
      ...educationData,
      [name]: value,
    });
  }
  function handleCompChange(e) {
    const { name, value } = e.target;
    setCompanyData({
      ...companyData,
      [name]: value,
    });
  }

  function changeState() {
    const nextState = state === "display" ? "edit" : "display";
    setState(nextState);
  }

  if (state === "edit") {
    return (
      <div className="edit-container">
        <div className="forms-container">
          <GeneralForm
            data={generalData}
            handleChange={handleGeneralChange}
          ></GeneralForm>

          <EducationForm
            data={educationData}
            handleChange={handleEduChange}
          ></EducationForm>

          <CompanyForm
            data={companyData}
            handleChange={handleCompChange}
          ></CompanyForm>
        </div>

        <button className="submit-btn" onClick={changeState}>
          Submit
        </button>
      </div>
    );
  }

  if (state === "display") {
    return (
      <div className="cv-container">
        <CV data={{ generalData, educationData, companyData }}></CV>
        <button className="edit-btn" onClick={changeState}>
          Edit
        </button>
      </div>
    );
  }
}

export default App;
