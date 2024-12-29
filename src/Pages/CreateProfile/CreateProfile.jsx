import React, { useState, useEffect } from "react";
import "./CreateProfile.css";
import SmallLogo from "../../Assets/logo-small-2.png";


const CreateProfile = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    avatar: "",
    bio: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  //  logic using useEffect
  useEffect(() => {
    const fields = document.querySelectorAll(".auth-box input, .auth-box textarea");
    fields.forEach((field) => {
      if (field.value.trim() !== "") field.classList.add("has-value");

      const handleInput = () => {
        field.classList.toggle("has-value", field.value.trim() !== "");
      };

      field.addEventListener("input", handleInput);

      return () => {
        field.removeEventListener("input", handleInput);
      };
    });
  }, [formData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <section className="banner inner-pages mb-0">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="content-box">
                <h1 className="py-5 text-center mw-100">Create Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="creat-profile my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow">
                <div className="profile-header p-3 border">
                  <img src={SmallLogo} className="mx-auto" width="100px" alt="logo" />
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <div className="auth-box mb-3">
                          <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="auth-box">
                          <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3 auth-box">
                      <input
                        type="text"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                    </div>

                    <div className="mb-3 auth-box">
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                    </div>

                    <div className="mb-3 auth-box">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                    </div>

                    <div className="mb-3 auth-box">
                      <input
                        type="file"
                        id="avatar"
                        accept="image/*"
                        onChange={(e) =>
                          setFormData((prevData) => ({
                            ...prevData,
                            avatar: e.target.files[0],
                          }))
                        }
                      />
                    </div>

                    <div className="mb-3 auth-box">
                      <textarea
                        id="bio"
                        rows="3"
                        value={formData.bio}
                        onChange={handleChange}
                      ></textarea>
                      <label htmlFor="bio" className="form-label">
                        Bio
                      </label>
                    </div>

                    <div>
                      <button type="submit" className="btn btn-primary w-100">
                        Save Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateProfile;