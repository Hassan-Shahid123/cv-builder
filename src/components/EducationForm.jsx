import { useState } from "react";

export default function EducationForm() {
  const initialObj = {
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  };
  const [data, setData] = useState(initialObj);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  return (
    <form>
      <input
        name="school"
        type="text"
        placeholder="School"
        onChange={handleChange}
        value={data.school}
      />
      <input
        name="degree"
        type="text"
        placeholder="Degree"
        onChange={handleChange}
        value={data.degree}
      />
      <input
        name="startDate"
        type="date"
        placeholder="Start Date"
        onChange={handleChange}
        value={data.startDate}
      />
      <input
        name="endDate"
        type="date"
        placeholder="End Date"
        onChange={handleChange}
        value={data.endDate}
      />
      <input
        name="location"
        type="text"
        placeholder="Location"
        onChange={handleChange}
        value={data.location}
      />

      <div>
        <button type="reset" className="cancel-btn" >Cancel</button>
        <button type="submit" className="submit-btn" >Save</button>
      </div>
    </form>
  );
}
