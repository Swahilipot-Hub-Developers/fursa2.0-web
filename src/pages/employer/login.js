import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 col-12">
                <div className="card">
                    <div className="card-title text-center">
                        <Link href='/' legacyBehavior>
                            <a className="d-flex no-line justify-content-start px-3 pt-3">← Back to Selection Page</a>
                        </Link>
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
                            <label className="form-label" htmlFor="email_address">Email Address</label>
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
                            <button className="btn btn-primary mt-3">Login</button>
                        </form>
                        <div className="mt-3 mb-2 d-flex justify-content-between">
                            <Link href="/register" legacyBehavior>
                                <a className="no-line">Create Account</a>
                            </Link>
                            <Link href="#" legacyBehavior>
                                <a className="no-line">Forgot Password</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
