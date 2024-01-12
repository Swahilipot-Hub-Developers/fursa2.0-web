import Image from 'next/image';

const Hero = () => {
    return (
        <div className="overlay">
        <div className="container d-md-flex p-3" >
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mb-4 mb-md-0">
                <h1 className="display-4 fw-bold">
                    We offer Youth Employment through Partnerships
                </h1>
            </div>
            <div className="col-12 col-md-6">
                <Image
                src="/images/opportunity_life_cycle.png"
                height={340}
                width={500}
                className="img-fluid fixed"
                alt="Image 1"
                />
            </div>
        </div>
        </div>
    )
}

export default Hero;