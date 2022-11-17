import React, { useState } from "react";

const AddContact = ({ addContact }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setimage] = useState("");

  function handleValues() {
    let newContact = {
      name,
      surname,
      phone,
      image,
    };
    addContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
    setimage("");
  }
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
        value={name}
      />
      <input
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="surname"
        value={surname}
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="phone"
        value={phone}
      />
      <input
        onChange={(e) => setimage(e.target.value)}
        type="text"
        placeholder="image"
        value={image}
      />
      <button onClick={() => handleValues()}>Add</button>
    </div>
  );
};

export default AddContact;
