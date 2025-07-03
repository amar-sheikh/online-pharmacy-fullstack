import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="About py-5">
        <div className="container gx-0">
          <div className="row gx-0">
            <div className="col-12 text-center">
              <h1 className="main_head">Contact Us</h1>
              <p className="sub_head">
                We’re here to help and answer any questions you might have.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact py-5">
        <div className="container-fluid contact_main gx-0">
          <div className="row gx-0">
            <div className="col-lg-6 text-center pb-5">
              <div className="contact_sec1">
                <h4 className="contact_h4 pb-1">Contact Information</h4>
                <p>
                  Fill the form below or write to us. We'll get back to you as
                  soon as possible.
                </p>
                <div className="row gx-0 justify-content-center py-2">
                  <div className="col-lg-6 ">
                    <div className="contact_fm_1">
                      <i className="fa-solid fa-phone"></i>
                      <h4>Phone No</h4>
                      <h6>+444 212 333 65</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact_fm_1">
                      <i className="fa-solid fa-envelope"></i>
                      <h4>Email</h4>
                      <h6>support@example.com</h6>
                    </div>
                  </div>
                </div>
                <div className="row gx-0">
                  <div className="col-lg-12">
                    <div className="contact_fm_3">
                      <i className="fa-solid fa-location-dot"></i>
                      <h4>Address</h4>
                      <h6>Street 23, London</h6>
                      <div className="map-container">
                        <iframe
                          title="Google Map - Street 23, London"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19806.041519196805!2d-0.14402860000000002!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acef25fcf77%3A0x6a29fae022b39e24!2s23%20Street%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1718591898877!5m2!1sen!2s"
                          width="100%"
                          height="200"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact_sec2">
                <form action="https://formspree.io/f/mblyyqkg" method="POST">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-labe">
                      Name*
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="name"
                      placeholder="Enter Your Name"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-labe">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Your Email"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-labe">
                      Subject*
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="subject"
                      placeholder="Your Subject Here"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-labe">
                      Message*
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="textarea"
                      placeholder="Type Your Message Here"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="main_btn">
                    Send Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
