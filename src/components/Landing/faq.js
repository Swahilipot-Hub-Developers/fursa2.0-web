//import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Questions from "../FAQ/questions";

const FAQ = () => {
    return (
        <div className="bg-faqs">
        <div className="container" style={{paddingBottom: '8em',}}>
            <div className="py-5">
                <h1 className="text-center text-white display-5 fw-bold mb-4 mt-4">
                    For any inquiries, reach out to us via
                    info@fursa.or.ke
                </h1>
                {/*<div className="d-flex justify-content-center gap-5 text-white">
                    <div className="shadow rounded p-3 icon"><FaFacebook /></div>
                    <div className="shadow rounded p-3 icon"><FaXTwitter /></div>
                    <div className="shadow rounded p-3 icon"><FaInstagram /></div>
                    <div className="shadow rounded p-3 icon"><FaYoutube /></div>
                </div>*/}
            </div>
            <div>
                <div className="text-center text-white py-5">
                    <h1 className="fw-bold display-5">FAQ</h1>
                    <h6>MOST FREQUENT ASKED QUESTIONS AND ANSWERS</h6>
                </div>
                <Questions
                title="HOW DO I SIGN UP TO FURSA?"
                content="You can sign up to Fursa by clicking on the `Create an Account` button
                Select if you are a job seeker or a partner (employer).
                
                Fill you details and you will be taken to your dashboard where you can view and apply from the various job opportunities available."
                />
                <Questions
                title="WHAT JOBS CAN I GET IN FURSA?"
                content="Fursa has job opportunities from various fields and regions that you can pick from including County government jobs, private sector jobs, internships and many more."
                />
                <Questions
                title="HOW MUCH DO TRAININGS COST ?"
                content="Depends with the kind of training you want but most of them are free."
                />
                <Questions
                title="HOW DO I GET INTERNSHIP USING FURSA ?"
                content="You register to Fursa platform search for available internship opportunities and apply."
                />
            </div>
        </div>
        </div>
      
    )
}

export default FAQ;