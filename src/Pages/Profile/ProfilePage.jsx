import React from 'react'
import "../Profile/ProfilePage.css"
import profile from "../../Assets/ali.jpg"

const ProfilePage = () => {
    const user = {
        name: "Ali Hassan",
        username: "@AliHassan",
        email: "AliHassan@example.com",
        phone: "(300) 1326512",
        bio: "Professional software developer with a passion for creating innovative solutions. Experienced in web development and cloud technologies.",
        jobTitle: "Web Developer",
        profileImage: profile,
    };
  return (
    <>
    <section className="banner inner-pages mb-0">
    <div className="container-lg">
        <div className="row">
            <div className="col-12">
                <div className="content-box">
                    <h1 className="py-5 text-center mw-100">User Profile</h1>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="profile-section">
            <div className="container py-5">
                <div className="row">
                    {/* Profile Card */}
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img
                                    src={user.profileImage}
                                    alt={`${user.name}'s profile`}
                                    className="rounded-circle img-fluid mx-auto"
                                />
                                <h5 className="my-3">{user.name}</h5>
                                <p className="text-muted mb-1">{user.username}</p>
                                <p className="text-muted mb-4">{user.jobTitle}</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <button type="button" className="btn dark p-3">Edit Profile</button>
                                    <button type="button" className="btn p-3">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{user.name}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{user.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Phone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{user.phone}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Username</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{user.username}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Bio</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{user.bio || "No bio available."}</p>
                                    </div>
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

export default ProfilePage