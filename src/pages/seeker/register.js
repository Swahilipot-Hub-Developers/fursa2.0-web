import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
    return (
        <div>
            <div className="align-items-center mt-5 mb-5 d-flex justify-content-center">
                <div className="col-md-6 col-12">
                    <div className="card">
                        <div className="card-title text-center">
                            <Image
                                className="mt-4"
                                src="/logo/Fursa logo 2.png"
                                width={200}
                                height={100}
                                alt="Fursa Web"
                            />
                        </div>
                        <div className="card-body">
                            <form>
                                <label className="form-label" htmlFor="first_name">First Name</label>
                                <input
                                    className="form-control"
                                    id="first_name"
                                    type="text"
                                    required
                                />
                                <label className="form-label mt-2" htmlFor="last_name">Last Name</label>
                                <input
                                    className="form-control"
                                    id="second_name"
                                    type="text"
                                    required
                                />
                                <label className="form-label mt-2" htmlFor="phone">Phone</label>
                                <input
                                    className="form-control"
                                    id="phone_number"
                                    type="tel"
                                    required
                                />
                                <label className="form-label mt-2" htmlFor="email_address">Email Address</label>
                                <input
                                    className="form-control"
                                    id="email_address"
                                    type="email"
                                    required
                                />
                                <label className="form-label mt-2" htmlFor="password">Password</label>
                                <input
                                    className="form-control"
                                    id="password"
                                    type="password"
                                    required
                                />

                                <div className="col-12 mt-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="invalidCheck" required/>
                                        <label className="form-check-label" for="invalidCheck">
                                            I accept the Terms and Conditions
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 d-grid gap-2">
                                    <button className="btn bg-custom-color">Sign Up</button>
                                </div>
                            </form>

                            <div className="mt-3 mb-2 d-flex justify-content-center">
                                <div>Already have an account? <Link href="/seeker/login" legacyBehavior><a className="no-line">Login</a></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;

