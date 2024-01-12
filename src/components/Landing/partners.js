import Image from 'next/image';

const Partners = () => {
    return (
       <div className="bg-light"> 
         <div className="pt-3">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Our Partners</h2>
            </div>
            <div className="d-md-flex justify-content-around">
                <div className="p-3 d-flex justify-content-center align-items-center">   
                    <Image
                    src="/images/SwahiliPot-logo.png"
                    width={250}
                    height={100}
                    alt="Swahilipot Hub Foundation"
                    className="img-fluid"
                    />
                </div>
                <div className="p-3 d-flex justify-content-center align-items-center">   
                    <Image
                    src="/images/mombasa-county-logo-150x150.png"
                    width={150}
                    height={150}
                    alt=""
                    />
                </div>
            </div>
        </div>
       </div>
    )
}

export default Partners;