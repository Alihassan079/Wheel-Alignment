import React, { useState, useEffect } from 'react';
import "../UserDashboard/UserDashboard.css";
import userImage from "../../Assets/user-image.png";
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    const [isSidebarToggled, setIsSidebarToggled] = useState(
        JSON.parse(localStorage.getItem('sb|sidebar-toggle')) || false
    );

    const toggleSidebar = () => {
        setIsSidebarToggled(!isSidebarToggled);
        localStorage.setItem('sb|sidebar-toggle', !isSidebarToggled);
    };

    useEffect(() => {
        document.body.classList.toggle('sb-sidenav-toggled', isSidebarToggled);
        return () => {
            document.body.classList.remove('sb-sidenav-toggled');
        };
    }, [isSidebarToggled]);

    return (
        <div className="dashboard">
            <div className="container-fluid p-0">
                <div className="d-flex">
                    {/* Sidebar */}
                    <div className={`admin-side-bar ${isSidebarToggled ? 'toggled' : ''}`}>
                        <div
                            className="side-bar-togler d-lg-none d-flex justify-content-end"
                            onClick={toggleSidebar}
                        >
                            <i className="bi bi-x text-dark fs-1"></i>
                        </div>
                        <div className="admin-logo">
                            <img src={userImage} alt="user" />
                            <p className="pt-3 mb-0 fw-bold text-center">Elon Walker</p>
                        </div>
                        <ul className="nav flex-column nav-pills" id="v-pills-dashboard" role="tablist" aria-orientation="vertical">
                            <li className="nav-link active" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#admin-dashboard" role="tab" aria-controls="admin-dashboard" aria-selected="true">
                                <span className="icons"><i className="bi bi-table"></i></span>
                                <span className="nav-text">Dashboard</span>
                            </li>
                            <li className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                <span className="icons"><i className="bi bi-table"></i></span>
                                <span className="nav-text">Profile</span>
                            </li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="admin-content flex-grow-1 px-md-4 px-3">
                        {/* Header */}
                        <div className="dashboard-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="admin-search-bar d-lg-block d-none">
                                    <form className="search-form d-flex align-items-center">
                                        <label htmlFor="admin-search">
                                            <i className="bi bi-search"></i>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Search Here"
                                            name="search-bar"
                                            className="form-control"
                                            id="admin-search"
                                        />
                                    </form>
                                </div>
                                <div className="side-bar-togler d-lg-none d-block" onClick={toggleSidebar}>
                                    <i className="bi bi-list text-dark fs-1"></i>
                                </div>
                                <div className="nav-bar d-flex align-items-center">
                                    <ul className="d-flex nav-lists">
                                        <li className="admin-lists d-md-none d-block">
                                            <Link to="/">
                                                <i className="bi bi-search"></i>
                                            </Link>
                                        </li>
                                        <li className="admin-lists">
                                            <Link to="/">
                                                <i className="bi bi-chat-dots-fill"></i>
                                            </Link>
                                        </li>
                                        <li className="admin-lists active">
                                            <Link to="/">
                                                <i className="bi bi-bell-fill"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="dropdown admin-info">
                                        <div
                                            className="dropdown-toggle d-flex gap-3 align-items-center"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <div className="img-box">
                                                <img src={userImage} alt="admin-image" />
                                            </div>
                                            <ul>
                                                <li><Link to="/">Alan Musk</Link></li>
                                                <li><Link to="/">Admin</Link></li>
                                            </ul>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <i className="bi bi-person-check me-3"></i>Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <i className="bi bi-person-lines-fill me-3"></i>Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/">
                                                    <i className="bi bi-box-arrow-right me-3"></i>Log out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="admin-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                                {/* Dashboard Content */}
                                <h3 className="py-xxl-3 pt-3">
                                    Good Afternoon, <span className="imp-text">Elon Walker</span>
                                </h3>
                                <p>13th August 2024 , Tuesday</p>
                                {/* Add the remaining content here */}
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                {/* Profile Content */}
                            </div>
                        </div>
                        <div class="admin-ruce-box">
                            <div class="row">
                                <div class="col-xl-4 col-md-6">
                                    <Link to="/"
                                        class="list-box d-flex justify-content-between align-items-center gap-2">
                                        <ul>
                                            <li class="lists list-heading">Balance</li>
                                            <li class="lists">$100: 00</li>
                                        </ul>
                                        <div class="icon-box">
                                            <i class="bi bi-coin"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <Link to="/"
                                        class="list-box d-flex justify-content-between align-items-center gap-2">
                                        <ul>
                                            <li class="lists list-heading">Total Spent</li>
                                            <li class="lists">$500: 00</li>
                                        </ul>
                                        <div class="icon-box">
                                            <i class="bi bi-currency-dollar"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <Link to="/"
                                        class="list-box d-flex justify-content-between align-items-center gap-2">
                                        <ul>
                                            <li class="lists list-heading">Certificates</li>
                                            <li class="lists">02</li>
                                        </ul>
                                        <div class="icon-box">
                                            <i class="bi bi-journal-bookmark-fill"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <Link to="/"
                                        class="list-box d-flex justify-content-between align-items-center gap-2">
                                        <ul>
                                            <li class="lists list-heading">Course In Progress</li>
                                            <li class="lists">02</li>
                                        </ul>
                                        <div class="icon-box">
                                            <i class="bi bi-sun"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <Link to="/"
                                        class="list-box d-flex justify-content-between align-items-center gap-2">
                                        <ul>
                                            <li class="lists list-heading">Course Purchased</li>
                                            <li class="lists">10</li>
                                        </ul>
                                        <div class="icon-box">
                                            <i class="bi bi-box-fill"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <Link to="/"
                                        class="list-box d-flex justify-content-between align-items-center gap-2">
                                        <ul>
                                            <li class="lists list-heading">Completed Courses</li>
                                            <li class="lists">02</li>
                                        </ul>
                                        <div class="icon-box">
                                            <i class="bi bi-patch-check-fill"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="row pt-4">
                                <div class="col-xl-6">
                                    <div class="chart-container">
                                        <div class="chart-header">
                                            <h5 class="mb-3">Ongoing Courses</h5>
                                        </div>
                                        <div class="d-flex flex-wrap gap-2 pt-3">
                                            <div class="course-tap hb-bg-light">
                                                <Link to="/"
                                                    class="d-flex justify-content-between align-items-center gap-2">
                                                    <div class="icon-box">
                                                        <i class="bi bi-emoji-smile"></i>
                                                    </div>
                                                    <div class="list-title">
                                                        <p class="m-0">Alignment and Suspension
                                                            Fundamentals</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="course-tap hb-bg-green">
                                                <Link to="/"
                                                    class="d-flex justify-content-between align-items-center gap-2">
                                                    <div class="icon-box">
                                                        <i class="bi bi-emoji-smile"></i>
                                                    </div>
                                                    <div class="list-title">
                                                        <p class="m-0">Alignment and Suspension
                                                            Fundamentals</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="course-tap hb-bg-orange">
                                                <Link to="/"
                                                    class="d-flex justify-content-between align-items-center gap-2">
                                                    <div class="icon-box">
                                                        <i class="bi bi-emoji-smile"></i>
                                                    </div>
                                                    <div class="list-title">
                                                        <p class="m-0">Alignment and Suspension
                                                            Fundamentals</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div class="course-tap hb-bg-red">
                                                <Link to="/"
                                                    class="d-flex justify-content-between align-items-center gap-2">
                                                    <div class="icon-box">
                                                        <i class="bi bi-emoji-smile"></i>
                                                    </div>
                                                    <div class="list-title">
                                                        <p class="m-0">Alignment and Suspension
                                                            Fundamentals</p>
                                                    </div>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="chart-container">
                                        <div class="chart-header">
                                            <h5 class="mb-3">Reviews</h5>
                                        </div>
                                        <div class="reviews-box pt-3">
                                            <Link to="/"
                                                class="rating-list shadow-sm p-2 mb-2 d-flex gap-2 justify-content-between rounded">
                                                <div class="course-title">
                                                    <p class="mb-0">Alignment and Suspension
                                                        Fundamentals</p>
                                                </div>
                                                <div class="rates">
                                                    <p class="star-box m-0"><span>⭐⭐⭐⭐ ☆</span><span
                                                        class="ratting-count ps-2">(4)</span> </p>
                                                </div>
                                            </Link>
                                            <Link to="/"
                                                class="rating-list shadow-sm p-2 mb-2 d-flex gap-2 justify-content-between rounded">
                                                <div class="course-title">
                                                    <p class="mb-0">Alignment and Suspension
                                                        Fundamentals</p>
                                                </div>
                                                <div class="rates">
                                                    <p class="star-box m-0"><span>⭐⭐⭐⭐ ☆</span><span
                                                        class="ratting-count ps-2">(4)</span> </p>
                                                </div>
                                            </Link>
                                            <Link to="/"
                                                class="rating-list shadow-sm p-2 mb-2 d-flex gap-2 justify-content-between rounded">
                                                <div class="course-title">
                                                    <p class="mb-0">Alignment and Suspension
                                                        Fundamentals</p>
                                                </div>
                                                <div class="rates">
                                                    <p class="star-box m-0"><span>⭐⭐⭐⭐ ☆</span><span
                                                        class="ratting-count ps-2">(4)</span> </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;