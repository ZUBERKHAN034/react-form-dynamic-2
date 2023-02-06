import React, { useState } from "react";

export default function Form() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleContact = (e) => {
    const { value, name } = e.target;
    const newContact = { ...contact };
    if (name === "fName") newContact.fName = value;
    if (name === "lName") newContact.lName = value;
    if (name === "email") newContact.email = value;
    setContact(newContact);
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={handleContact}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={handleContact}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleContact}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
