import React from 'react';
import "../NewCertificate/NewCertificate.css"
import logo from "../../Assets/logo-small-2.png"

const NewCertificate = () => {
    return (
        <section className="certificate-container">
            <div className="certificate-box">
                <div className="certificate-inner">
                    <table className="certificate-table">
                        <tr>
                            <td colspan="3" style={{ paddingTop: '40px' }}>
                                <h2 className="certificate-heading">
                                    <em>THIS IS TO CERTIFY THAT</em>
                                </h2>
                                <div className="certificate-tag">
                                    Specialty Products
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <h2 className="certificate-heading">
                                    <em>HAS SUCCESSFULLY COMPLETED</em>
                                </h2>
                                <p className="certificate-course">
                                    Course 6-Installer Certification Program
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td className="certificate-info">
                                <p className="certificate-bottom-text">Date</p>
                            </td>
                            <td style={{ paddingTop: '30px', width: '40%' }}>
                                <img 
                                    src={logo}
                                    alt="Logo" 
                                    className="certificate-logo" 
                                />
                            </td>
                            <td className="certificate-info">
                                <p className="certificate-bottom-text">Instructor</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default NewCertificate;