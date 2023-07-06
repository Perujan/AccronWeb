import Img from "../Assets/icon.svg";

export default function PrivcyPolicy() {
    return(
        <div className={"min-vh-100 container"}>
            <h1 className={"text-center mt-5 pt-5 "}>Privacy Policy</h1>



            <div>
                <div>
                    <div className={"expand"}>
                        <p>OUR PROMISE </p>
                        <img src={Img}/>
                    </div>
                </div>

                <div>
                    <div className={"expand mt-4"}>
                        <p>CONTROLLING YOUR INFORMATION</p>
                        <img src={Img}/>
                    </div>
                </div>

                <div>
                    <div className={"expand mt-4"}>
                        <p>USING YOUR INFORMATION</p>
                        <img src={Img}/>
                    </div>
                </div>

                <div>
                    <div className={"expand mt-4"}>
                        <p>COOKIES</p>
                        <img src={Img}/>
                    </div>
                </div>

                <div>
                    <div className={"expand mt-4"}>
                        <p>SECURITY</p>
                        <img src={Img}/>
                    </div>
                </div>

                <div>
                    <div className={"expand mt-4"}>
                        <p>REFUND POLICY</p>
                        <img src={Img}/>
                    </div>
                </div>

                <div>
                    <div className={"expand mt-4"}>
                        <p>POLICY CHANGES</p>
                        <img src={Img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}