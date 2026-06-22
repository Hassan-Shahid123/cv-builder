import "../styles/form.css";

export default function CompanyForm({ data, handleChange }) {
  return (
    <form className="form">
      <p className="form-heading">Experience</p>
      <div className="input-container">
        <input
          name="company"
          type="text"
          placeholder="Company"
          onChange={handleChange}
          value={data.company}
          required
        />
        <input
          name="position"
          type="text"
          placeholder="Position Title"
          onChange={handleChange}
          value={data.position}
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
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={data.description}
        />
      </div>
    </form>
  );
}
