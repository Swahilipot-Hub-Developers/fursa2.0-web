import { useState } from 'react';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send email and OTP goes here
    console.log(`Email entered: ${email}`);
    // You can send the email and handle OTP generation and sending here
  };

  return (
    <div>
      <h1>Reset</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input className="me-4" type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button className="btn btn-sm btn-primary" type="submit">Reset Password</button>
      </form>
    </div>
  );
};
export default PasswordReset;
