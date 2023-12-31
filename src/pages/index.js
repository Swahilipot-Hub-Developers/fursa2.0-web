import Link from 'next/link';

const Home = () => {
  return (
    <div className="d-flex gap-3 justify-content-center m-auto">
      <Link href="/jobseeker/login">
        <div>
          <p>Jobseeker</p>
        </div>
      </Link>
      <Link href="/employer/login">
        <div>
          <p>Employer</p>
        </div>
      </Link>
    </div>
  )
}

export default Home;
