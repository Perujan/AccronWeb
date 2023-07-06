import Img from "../Assets/icon.svg";

export default function RefundPolice() {
    return(
        <div className={"min-vh-100 container"}>
            <h1 className={"text-center mt-5 pt-5 "}>Refund Policy</h1>


            <div>
                <div>
                    <div className={"expand"}>
                        <p>Refund Policy</p>
                        <img src={Img}/>
                    </div>
                    <p style={{textAlign: "justify"}}>We understand that sometimes, due to unforeseen circumstances, you may need to cancel your service with us. Our company accepts refund requests for services that have not been completed or started.</p>
                    <p style={{textAlign: "justify"}}>For web development and mobile app development services, we offer a full refund within the first 14 days of your purchase. After this period, we will issue a pro-rata refund based on the work completed at the time of cancellation.</p>

                    <p style={{textAlign: "justify"}}>For digital marketing services, we offer a full refund within the first 7 days of your purchase. After this period, we will issue a pro-rata refund based on the work completed at the time of cancellation.</p>

                    <p style={{textAlign: "justify"}}>For graphic designing services, we offer a full refund within the first 3 days of your purchase. After this period, we will issue a pro-rata refund based on the work completed at the time of cancellation.</p>

                    <p style={{textAlign: "justify"}}>Please note that all refund requests must be made through the payment media used to make the original payment. We cannot issue refunds through other means.</p>

                    <p style={{textAlign: "justify"}}>We cannot offer refunds for services that have already been completed or delivered to the customer. If you have any questions about our refund policy or need to request a refund, please contact us through the payment media you used to make the original payment.</p>
                    <p style={{textAlign: "justify"}}>We strive to provide high-quality services to our customers and want to ensure that you are completely satisfied with the work we do for you. If you have any concerns or issues with our services, please contact us immediately so we can work to resolve them. </p>
                    <p style={{textAlign: "justify"}}>Thank you for choosing Accron Revolutions Private Limited for your needs</p>

                </div>




            </div>
        </div>
    )
}