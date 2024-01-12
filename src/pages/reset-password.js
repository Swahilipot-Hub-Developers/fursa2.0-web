import { useState } from 'react';
import { useRouter } from 'next/router';

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted with email:", email);
    router.push('/change-password')
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 col-12">
        <div className="card">
          <div className="card-body">
            <p className="text-muted">
              Enter the email used to register your Fursa Account to receive the
              OTP code for resetting password.
            </p>
            <form onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="email">Email Address</label>
              <input
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <button className="btn btn-primary mt-3">Send code</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
