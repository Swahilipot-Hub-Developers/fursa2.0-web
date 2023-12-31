import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="container py-4">
            <div className="row align-items-md-center text-center text-md-start">
                <div className="col-md mb-3 mb-md-0">
                    <p className="mb-0">© Fursa Web {year}</p>
                </div>

                <div className="col-md d-md-flex justify-content-md-end">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#">
                                <FaLinkedin/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#">
                                <FaXTwitter/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#">
                                <FaFacebook/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
