import React from 'react'
import "./location-screen.css" 

const LocationScreen = () => {
  return (
    <section className="location-section py-5 bg-white">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2  className="screen-title mb-3">
              Our Office Location <br /> and Directions on Map
            </h2>
            <a
              href="https://www.google.com/maps/place/8%C2%B011'41.7%22N+77%C2%B014'30.7%22E/@8.1949829,77.2417935,21z/data=!4m13!1m8!3m7!1s0x3b0455c030e1c0dd:0xfd53fb7a1e221162!2sUnnamalaikadai,+Tamil+Nadu!3b1!8m2!3d8.3066152!4d77.2402106!16zL20vMGY2a2R6!3m3!8m2!3d8.194922!4d77.241867?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D" // Replace with your link
              target="_blank"
              rel="noopener noreferrer"
              className="button mt-3"

            >
              View our Office
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>

          <div className="col-md-6 map-col">
            <div className="ratio ratio-16x9 shadow rounded-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.0599167418636!2d77.23311417590673!3d8.196719291835079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fe7ea4515e61%3A0xd45d8a362e8b7ad7!2sAlanchi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1758367754669!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ borderRadius: 10 }}
              ></iframe>
            </div>
          </div>
        </div>
    </section>
  );
}

export default LocationScreen