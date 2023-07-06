import Img from "../Assets/icon.svg"


export default function TermsCondition() {
    return (
        <div className={"min-vh-100 container"}>
            <h1 className={"text-center mt-5 pt-5 "}>Terms And Conditions</h1>
            <p style={{textAlign: "justify"}}>Welcome to our website! These terms and conditions ("Terms") apply to your
                use of our website and the services we offer, including web development, mobile app development, digital
                marketing, and graphic designing services (collectively, the "Services"). By accessing our website and
                using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do
                not use our website or Services</p>


            <div>
                <div>
                    <div className={"expand"}>
                        <p>Use of the Website and Services</p>
                        <img src={Img}/>
                    </div>
                </div>

                <div>
                    <div className={"expand mt-4"}>
                        <p>Intellectual Property</p>
                        <img src={Img}/>
                    </div>
                </div>

                <div>
                    <div className={"expand mt-4"}>
                        <p>Limitation of Liability</p>
                        <img src={Img}/>
                    </div>
                </div>

                <div>
                    <div className={"expand mt-4"}>
                        <p>Governing Law and Dispute Resolution</p>
                        <img src={Img}/>
                    </div>
                </div>

                <div>
                    <div className={"expand mt-4"}>
                        <p>Changes to These Terms</p>
                        <img src={Img}/>
                    </div>
                </div>

                <div>
                    <div className={"expand mt-4"}>
                        <p>Contact Us</p>
                        <img src={Img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}