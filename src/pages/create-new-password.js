import { useState } from 'react';
import { useRouter } from 'next/router';

const PasswordChange = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please make sure both passwords are the same.");
      return;
    }

    console.log("Submitted with new password:", newPassword);
    router.push('/profile');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 col-12">
        <div className="card">
          <div className="card-body">
            <p className="text-muted">
              Enter your new password and confirm to reset your Fursa Account password.
            </p>
            <form onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="newPassword">New Password</label>
              <input
                className="form-control"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                required
              />
              <label className="form-label mt-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                required
              />
              <button className="btn btn-primary mt-3">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;
