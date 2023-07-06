
import Logo from "../Assets/logo2.png"
import {NavLink} from "react-router-dom";
function Header() {
    return (
        <div className="header-bg">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="container mt-3 collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                       <ul className={"navbar-nav"}>
                           <a className="navbar-brand" href="#">
                               <img src={Logo} width={"224px"} height={"86px"}/>
                           </a>
                       </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <NavLink to={"/"} className={(isActive) =>isActive ? "nav-link nav-menu-item active-menu" :"nav-link nav-menu-item " } >Home</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink to={"/Services"} className={(isActive) =>isActive ? "nav-link nav-menu-item " :"nav-link nav-menu-item " } >Services</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink to={"/About"} className={(isActive) =>isActive ? "nav-link nav-menu-item " :"nav-link nav-menu-item " } >About</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink to={"/Contact"} className={(isActive) =>isActive ? "nav-link nav-menu-item " :"nav-link nav-menu-item " } >Contact</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink to={"/portfolio"} className={(isActive) =>isActive ? "nav-link nav-menu-item " :"nav-link nav-menu-item " } >Porttfolio</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to={"/career"} className={(isActive) =>isActive ? "nav-link nav-menu-item " :"nav-link nav-menu-item " } >Career</NavLink>

                               </li>
                            
                            <li className="nav-item">
                            <NavLink to={"/career"} className={(isActive) =>isActive ? "nav-link nav-menu-item " :"nav-link nav-menu-item " } >Blog</NavLink>
                            </li>

                        </ul>
                        <ul className={"navbar-nav"}>
                            <button className={"talk-us-btn"}>Talk to us</button>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className={" container header-sub-container"}>
                <h1>
                    Accron Revolutions <br/>Private Limited
                </h1>
                <p className={""}>Accron Revolutions Private Limited is a leading provider of digital solutions, specializing <br/>in mobile app development, website development, web app development, and digital <br/> marketing services.</p>

                <button className={"btn about-btn"}>About us</button>
            </div>
        </div>

    );
}

export default Header;