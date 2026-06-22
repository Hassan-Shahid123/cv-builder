import "../styles/form.css";

export default function GeneralForm({ data, handleChange }) {
  return (
    <form className="form">
      <p className="form-heading">Personal Details</p>
      <div className="input-container">
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          name="name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={data.phone}
          name="phone"
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
}
