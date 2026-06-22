import "../styles/CV.css";

function GeneralSection({ data }) {
  return (
    <div className="general-cv">
      <p className="name">{data.name}</p>
      <div className="general-info-container">
        <p>{data.email}</p>
        <p>{data.phone}</p>
      </div>
    </div>
  );
}
function EducationSection({ data }) {
  return (
    <div className="education-cv">
      <p className="section-heading">Education</p>
      <div className="info-container">
        <div className="right-container">
          <p>
            {data.startDate} {" - "} {data.endDate}
          </p>
          <p>{data.location}</p>
        </div>

        <div className="left-container">
          <p className="institution-name">{data.school}</p>
          <p>{data.degree}</p>
        </div>
      </div>
    </div>
  );
}

function CompanySection({ data }) {
  return (
    <div className="company-cv">
      <p className="section-heading">Experience</p>
      <div className="info-container">
        <div className="left-container">
          <p>
            {data.startDate} {" - "} {data.endDate}
          </p>
          <p>{data.location}</p>
        </div>
        <div className="right-container">
          <p className="institution-name">{data.company}</p>
          <p className="job-position">{data.position}</p>
          <p className="job-description">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function CV({ data }) {
  return (
    <div className="cv">
      <GeneralSection data={data.generalData}></GeneralSection>
      <EducationSection data={data.educationData}></EducationSection>
      <CompanySection data={data.companyData}></CompanySection>
    </div>
  );
}
