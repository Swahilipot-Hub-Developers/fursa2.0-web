import Link from 'next/link';
import Image from 'next/image';
import { FaBriefcase, FaUserTie } from 'react-icons/fa6';

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <Image
          className="img-fluid mb-3"
          src="/logo/Fursa logo 1.png"
          width={200}
          height={100}
          alt="Fursa Web"
        />
        <h2>Choose your status:</h2>
      </div>
      <div className="d-flex gap-3 justify-content-center mt-4">
        <Link href="/jobseeker/login" legacyBehavior>
          <a className="no-line">
            <div className="card card-link p-4">
              <div className="card-body">
                <div className="text-center fs-5">
                  <FaUserTie size={40}/>
                </div>
                <h6 className="fw-bold mt-2 m-0 p-0">Seeker</h6>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/employer/login" legacyBehavior>
          <a className="no-line">
            <div className="card card-link p-4">
              <div className="card-body">
                <div className="text-center fs-5">
                  <FaBriefcase size={40}/>
                </div>
                <h6 className="fw-bold mt-2 m-0 p-0">Employer</h6>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Home;
