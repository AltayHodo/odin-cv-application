import { useState, useEffect } from 'react';

function General({ onSave }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // Function to save the general information
  function saveInfo() {
    const generalInfo = {
      name,
      email,
      phone,
      address,
    };
    onSave(generalInfo);
  }

  useEffect(() => {
    saveInfo();
  }, [name, email, phone, address]);

  return (
    <>
      <h2>General</h2>
      <form action="" className="general-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@url.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            id="phone-number"
            placeholder="555-555-5555"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="City, State"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
      </form>
    </>
  );
}

export default General;
