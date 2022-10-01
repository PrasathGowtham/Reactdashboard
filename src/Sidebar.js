import React from "react";
import { useState } from 'react';
import { Collapse } from 'bootstrap';
import {Link} from 'react-router-dom';
import Rocket from './img/undraw_rocket.svg';

function Sidebar() {
    const [userComponent, setUserComponent] = useState(false);
    const [userUtilites, setUserUteleties] = useState(false);
    const [userPages, setUserPages] = useState(false);




    let component = () => {
        setUserComponent(!userComponent);
        var mycollapse = document.getElementById("collapseComponent");
        var bscollapse = new Collapse(mycollapse);
        userComponent ? bscollapse.show() : bscollapse.hide();
    }


    let utilites = () => {
        setUserUteleties(!userUtilites);
        var mycollapse = document.getElementById("collapseUtilities");
        var bscollapse = new Collapse(mycollapse);
        userUtilites ? bscollapse.show() : bscollapse.hide();
    }
    let pages = () => {
        setUserPages(!userPages);
        var mycollapse = document.getElementById("collapsePages");
        var bscollapse = new Collapse(mycollapse);
        userPages ? bscollapse.show() : bscollapse.hide();
    }

    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


            <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>


            <hr class="sidebar-divider my-0" />


            <li class="nav-item active">
                <Link class="nav-link" to="/dashboard">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>


            <hr class="sidebar-divider" />


            <div class="sidebar-heading">
                Interface
            </div>


            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo" onClick={component}>
                    <i class="fas fa-fw fa-cog"></i>

                    <span>Components</span>
                </a>
                <div id="collapseComponent" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <Link class="collapse-item" to="/button">Buttons</Link>
                        <Link class="collapse-item" to="/cards">Cards</Link>
                    </div>
                </div>
            </li>


            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities" onClick={utilites}>
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                 <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">

                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Utilities:</h6>
                        <Link class="collapse-item" to="/color">Colors</Link>
                        <Link class="collapse-item" to="/border">Borders</Link>
                        <Link class="collapse-item" to="/animation">Animations</Link>
                        <Link class="collapse-item" to="/other">Other</Link>
                    </div>
                </div>
            </li>


            <hr class="sidebar-divider" />


            <div class="sidebar-heading">
                Addons
            </div>


            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages" onClick={pages}>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <Link class="collapse-item" to="/">Login</Link>
                        <Link class="collapse-item" to="/" >Register</Link>
                        <Link class="collapse-item" to="/">Forgot Password</Link>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <Link class="collapse-item" to="/error">404 Page</Link>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>


            <li class="nav-item">
                <Link class="nav-link" to="/charts">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></Link>
            </li>


            <li class="nav-item">
                <Link class="nav-link" to="/tabels">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span></Link>
            </li>


            <hr class="sidebar-divider d-none d-md-block" />


            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>


            <div class="sidebar-card d-none d-lg-flex">
                <img class="sidebar-card-illustration mb-2" src={Rocket} alt="..." />
                <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
    )
}

export default Sidebar;