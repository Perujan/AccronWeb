import react from "react"
import "../Components/project.css"

function Project() {
    return(
        <>
        <section id="portfolio" class="portfolio">
  <div class="container">
    <div class="row text-center mt-5">
      <h1 class="display-3 fw-bold text-capitalize">Latest work</h1>
      <div class="heading-line"></div>
      <p class="lead">
      creativity with technical expertise to create apps that stand out in a crowded marketplace
      </p>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="portfolio-box shadow">
          <img src={require('../Assets/pj-1.png')} alt="portfolio 1 image" title="portfolio 1 picture" class="img-fluid"/>
          <div class="portfolio-info">
            <div class="caption">
              <h4 text-danger>Mottoz </h4>
              <p>Mobile Application Development </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="portfolio-box shadow">
          <img src={require('../Assets/pj-2.png')} alt="portfolio 2 image" title="portfolio 2 picture" class="img-fluid"/>
          <div class="portfolio-info">
            <div class="caption">
              <h4>Mr.DoooD </h4>
              <p>Food Delivey App ongoing </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="portfolio-box shadow">
          <img src={require('../Assets/pj-3.png')} alt="portfolio 2 image" title="portfolio 2 picture" class="img-fluid"/>
          <div class="portfolio-info">
            <div class="caption">
              <h4>WRIPz</h4>
              <p>Read To Download </p>
            </div>
          </div>
        </div>
      </div>
      
      </div>
     
      
      
     </div>
     </section>
      
      
   
 
  

        
        
        </>
    )
}
    

export default Project