import Image from 'next/image';

const Acknowledge = () => {
    return (
        <div className="bg-light py-5">
            <div className="container d-md-flex pt-3">
            <div className="col-12 col-md-6">
                <h2 className="fw-bold">HE. Abdulswamad Shariff Nassir</h2>
                <h5>Governor, Mombasa County</h5>
                <br/>
                <p>
                    I highly recommend Fursa to anyone looking to start or grow their careers. 
                    With its vast database of job opportunities from all around the world, 
                    it provides a comprehensive platform for job seekers to find suitable job 
                    openings in their preferred locations and fields.
                    <br/><br/>
                    Additionally, employers can easily post their job vacancies and reach out to 
                    potential candidates through the platform. Overall, Fursa is an excellent jobs 
                    website that caters to the needs of both job seekers and employers.
                </p>
            </div>
            <div className="col-12 col-md-6">
                <Image
                src="/images/asn001450.jpg"
                width={500}
                height={300}
                alt="Governor ASN"
                className="img-fluid"
                />
            </div>
        </div>
        </div>
    )
}

export default Acknowledge;