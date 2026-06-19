import { useState } from "react";

export default function GeneralForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function handleChange(e) {
    const el = e.target;
    if (el.id === "name") {
      setName(el.value);
    }
    if (el.id === "email") {
      setEmail(el.value);
    }
    if (el.id === "phone") {
      setPhone(el.value);
    }
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={name}
        id="name"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        id="email"
        onChange={handleChange}
      />
      <input
        type="phone"
        placeholder="Phone Number"
        value={phone}
        id="phone"
        onChange={handleChange}
      />
    </form>
  );
}
