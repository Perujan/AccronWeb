import ProjectA from "../Components/Cl"
// import "../Pages/About.css"
import "../Components/Cl.css"
import { useTypewriter } from 'react-simple-typewriter'

import Project from '../Components/project'
import Image1 from "../Assets/cm1.png"
import Image2 from "../Assets/cm2.png"
import Image3 from "../Assets/cm3.png"
import Image4 from "../Assets/cm4.png"
import Image5 from "../Assets/bt.png"

import Cmbalck from "../Assets/logo2.png"





function About() {
  const [about1] = useTypewriter({
    words: ['Design', 'Design ', 'Deliver', ' '],
    loop: 0 })
  return (
    <>
    
    {/***** Content 1 *****/}
    <br/>
    {/* <section class="breadcrumb breadcrumb_bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb_iner text-center">
                        <div class="breadcrumb_iner_item">
                            
                           <h2 className="fw-bold fs-4 text-white">About Us <span className="fw-bold fs-4" style={{color:'red'}}>{about1}</span> </h2> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    <br/>
    {/***** Content 1 end *****/}

        {/***** Content 2 *****/}

        {/* <section class="py-6 bg-dark">

        <div class="container">
          <div class="row align-items-center text-white">
            <div class="col-md-5 order-md-0 text-center text-md-start py-4 "><img class="img-fluid mb-4" src={Cmbalck} width="550" alt="" /></div>
            <div class="col-md-6 text-center text-md-start offset-md-1">
              <h6 class="fw-bold fs-4 display-3 lh-sm">Designed  built by the latest code integration</h6>
              <p class="my-4 pe-xl-5"> Our expertise spans various industries, including healthcare, finance, education, and retail, and we have successfully delivered projects for clients locally and internationally. Our team is dedicated to staying up-to-date with the latest technologies and industry trends, ensuring that our clients always receive the most innovative and effective solutions.</p>
            </div>
          </div>
        </div>
   

      </section> */}
        
 <br/><br/>
     
    {/***** Content 2 end *****/}
    {/* <ProjectA/>
    
     
     <section class="py-7">
          <br/>

          <div class="container bg-dark">
  <div class="row">
    <div class="col-12 mx-auto align-items-center text-center">
      <br/>
      <p class="mb-4  fw-bold fs-4 text-white text-center">Trusted by Brands</p>
    </div>
  </div>
  <div class="row align-items-center justify-content-center justify-content-lg-around">
    <div class="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center"><img src={Image1} alt=""  height={45}/></div>
    <div class="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center"><img src={Image2}alt="" height={45}/></div>
    <div class="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center"><img src={Image5} alt="" height={65}/></div>
    <div class="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center"><img src={Image4} alt="" height={45}/></div>
    <div class="col-6 col-sm-4 col-md-4 col-lg-2 px-md-0 mb-5 mb-lg-0 text-center"><img src={Image3} alt="" height={75}/></div>
  </div>
  <br/>
</div>


</section> */}

<Project/>
  <br/>
   

<br/>
    {/***** Content 5 *****/}
    <section class="py-7 bg-light">
    <br/><br/><br/>
        <div class="container">
          <div class="row flex-center">
            <div class="col-md-8 col-lg-5 text-center">
              <h2>Trusted by <br />Happy Customer</h2>
              <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
            </div>
          </div>
          <div class="carousel slide pt-6" id="carouselExampleDark" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <div class="row h-100">
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/gallery/user-1.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Ismail Abdi</h6>
                              <p class="fs--2 fw-normal mb-0">arsaw, Poland</p>
                            </div>
                          </div>
                          <div class="d-flex align-items-center"><span class="text-900 me-3">4.5</span>
                            <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEA250" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                            </svg>
                          </div>
                        </div>
                        <p class="card-text pt-3">A fantastic Team! Great cutomer support from beginning to end of the process.My Uber type app was up and running in just few days. The team are really informed and go the extra mile at every stage.Wow what a great UI design too. I would recommend them without any doubt! Thank you for the amazing work.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/gallery/user-2.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Alberto Centeno</h6>
                              <p class="fs--2 fw-normal mb-0">Seoul, South Korea</p>
                            </div>
                          </div>
                          <div class="d-flex align-items-center"><span class="text-900 me-3">5</span>
                            <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEA250" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                            </svg>
                          </div>
                        </div>
                        <p class="card-text pt-3">Hello, I am really very grateful for the work you do, a company focused on the growth of us as clients, I want to especially congratulate Thivakar, for being an honest and very responsible person and for always giving us the support we have needed, Thank you for everything

                          </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/gallery/user-3.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">VDBA Thanukanth</h6>
                              <p class="fs--2 fw-normal mb-0">Srilanka , Vavuniya </p>
                            </div>
                          </div>
                          <div class="d-flex align-items-center"><span class="text-900 me-3">4.8</span>
                            <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEA250" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                            </svg>
                          </div>
                        </div>
                        <p class="card-text pt-3">Friendly customer support and thank for the business advice free of charge ”.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div class="row h-100">
                <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/gallery/user-1.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Ismail Abdi</h6>
                              <p class="fs--2 fw-normal mb-0">arsaw, Poland</p>
                            </div>
                          </div>
                          <div class="d-flex align-items-center"><span class="text-900 me-3">4.5</span>
                            <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEA250" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                            </svg>
                          </div>
                        </div>
                        <p class="card-text pt-3">A fantastic Team! Great cutomer support from beginning to end of the process.My Uber type app was up and running in just few days. The team are really informed and go the extra mile at every stage.Wow what a great UI design too. I would recommend them without any doubt! Thank you for the amazing work.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/gallery/user-2.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Alberto Centeno</h6>
                              <p class="fs--2 fw-normal mb-0">Seoul, South Korea</p>
                            </div>
                          </div>
                          <div class="d-flex align-items-center"><span class="text-900 me-3">5</span>
                            <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEA250" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                            </svg>
                          </div>
                        </div>
                        <p class="card-text pt-3">Hello, I am really very grateful for the work you do, a company focused on the growth of us as clients, I want to especially congratulate Thivakar, for being an honest and very responsible person and for always giving us the support we have needed, Thank you for everything

                          </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/gallery/user-3.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">VDBA Thanukanth</h6>
                              <p class="fs--2 fw-normal mb-0">Srilank , Vavuniya </p>
                            </div>
                          </div>
                          <div class="d-flex align-items-center"><span class="text-900 me-3">4.8</span>
                            <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEA250" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                            </svg>
                          </div>
                        </div>
                        <p class="card-text pt-3">Friendly customer support and thank for the business advice free of charge ”.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row h-100">
                <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/gallery/user-1.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Ismail Abdi</h6>
                              <p class="fs--2 fw-normal mb-0">arsaw, Poland</p>
                            </div>
                          </div>
                          <div class="d-flex align-items-center"><span class="text-900 me-3">4.5</span>
                            <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEA250" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                            </svg>
                          </div>
                        </div>
                        <p class="card-text pt-3">A fantastic Team! Great cutomer support from beginning to end of the process.My Uber type app was up and running in just few days. The team are really informed and go the extra mile at every stage.Wow what a great UI design too. I would recommend them without any doubt! Thank you for the amazing work.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/gallery/user-2.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">Alberto Centeno</h6>
                              <p class="fs--2 fw-normal mb-0">Seoul, South Korea</p>
                            </div>
                          </div>
                          <div class="d-flex align-items-center"><span class="text-900 me-3">5</span>
                            <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEA250" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                            </svg>
                          </div>
                        </div>
                        <p class="card-text pt-3">Hello, I am really very grateful for the work you do, a company focused on the growth of us as clients, I want to especially congratulate Thivakar, for being an honest and very responsible person and for always giving us the support we have needed, Thank you for everything

                          </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card h-100">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex align-items-center"><img class="img-fluid" src="assets/img/gallery/user-3.png" alt="" />
                            <div class="flex-1 ms-3">
                              <h6 class="mb-0 fs--1 text-1000 fw-medium">VDBA Thanukanth</h6>
                              <p class="fs--2 fw-normal mb-0">Srilank , Vavuniya </p>
                            </div>
                          </div>
                          <div class="d-flex align-items-center"><span class="text-900 me-3">4.8</span>
                            <svg class="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FEA250" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                            </svg>
                          </div>
                        </div>
                        <p class="card-text pt-3">Friendly customer support and thank for the business advice free of charge ”.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row px-3 px-md-0 mt-4">
              <div class="col-6 position-relative">
                <ol class="carousel-indicators">
                  <li class="active" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"></li>
                  <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
                </ol>
              </div>
              <br></br>
              <div class="col-6 position-relative "><a class="carousel-control-prev carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></a></div>
            </div>
          </div>
        </div>
        <br/>
</section>

    {/***** Content 5 end *****/}
      {/**ghhghghghhhghhjhj */}
      
      
    </>
  )
}

export default About