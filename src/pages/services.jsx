import React from "react";
import '../style.css';

function services () {
    return (
        <div className="services-container">
            <section className="heading">
                <h5>Services</h5>
            </section>
            <div className="services-training">
                <img src="images/services/training.jpg" alt="services-training" />
                <div className="training">
                    <h5>Training</h5>
                    <p>Empower yourself with our comprehensive training programs! Our expert-led courses cover everything from the basics of solar energy to advanced installation, maintenance, and repair techniques. </p>
                    <p>With our courses you'll gain the knowledge and skills to confidently work with solar panels. Whether you're a homeowner installer, or maintenance professional, our training programs will help you unlock the full potential of solar energy.</p>
                    <p>Browse our courses today and start utilizing the power of the sun! </p>
                </div>
            </div>
            <div className="services-courses">
                <h5>Courses</h5>
                <div className="courses">
                    <div className="course-1">
                        <img src="images/services/Solar+101.jpg" alt="solar-101" />
                        <h5>Solar 101</h5>
                        <p>Understand solar PV principles with a course that covers all the basics of solar from a non-technical perspective. </p>
                    </div>
                    <div className="course-1">
                        <img src="images/services/pv mounter.png" alt="pv-mounter" />
                        <h5>PV Mounter</h5>
                        <p>Hands-on training for PV installers: What's essential when installing PV systems, practically taught in 2 days.</p>
                    </div>
                    <div className="course-1">
                        <img src="images/services/SOLAR-BUSINESS.jpg" alt="solar-business-management" />
                        <h5>Solar Business Management</h5>
                        <p>This is a crash course on business management, especially for small and medium sized solar company owners.</p>
                    </div>
                </div>
            </div>
            <div className="services-installation">
                <div className="installation">
                    <h5>Installation</h5>
                    <p>Installing solar panel, we have steps that we have to adhere in order to deliver high quality products at an affordable price.</p>
                    <ol>
                        <li>Assessment: We evaluate your energy needs and determine if solar is suitable for your location.</li>
                        <li>Design: A professional designs a solar panel system tailored to your energy needs roof layout.</li>
                        <li>Permitting: Obtain necessary permits from local authorities.</li>
                        <li>Installation: Install racking systems to secure panels to your roof. Place solar panels on the racking system. Connect panels to an inverter, which converts DC power to AC power.</li>
                    </ol>
                </div>
                <div className="performance">
                    <h5>Performance & Maintenance</h5>
                    <p>We have packages for monitoring performance and maintenance.</p>
                    <ol>
                        <li>Basic: Monitoring and annual maintenance.</li>
                        <li>Premium: Monitoring, maintenance, and priority support.</li>
                        <li>Elite: Monitoring, maintenance, priority support, and advanced analytics.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default services;