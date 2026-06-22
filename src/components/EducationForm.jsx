import "../styles/form.css";

export default function EducationForm({ data, handleChange }) {
  return (
    <form className="form">
      <p className="form-heading">Education</p>
      <div className="input-container">
        <input
          name="school"
          type="text"
          placeholder="School"
          onChange={handleChange}
          value={data.school}
          required
        />
        <input
          name="degree"
          type="text"
          placeholder="Degree"
          onChange={handleChange}
          value={data.degree}
          required
        />
        <input
          name="startDate"
          type="text"
          placeholder="Start Date"
          onChange={handleChange}
          value={data.startDate}
          required
        />
        <input
          name="endDate"
          type="text"
          placeholder="End Date"
          onChange={handleChange}
          value={data.endDate}
          required
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          onChange={handleChange}
          value={data.location}
          required
        />
      </div>
    </form>
  );
}
