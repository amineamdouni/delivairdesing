import React from 'react'

const Footer = () => {
  return (
    <>
    {/* Footer */}
    <footer
      className="text-center text-black"
      style={{ backgroundColor: "#E7C7C8" }}
    >
      {/* Grid container */}
      <div className="container">
        {/* Section: Links */}
        <section className="mt-5">
          {/* Grid row*/}
          <div className="row text-center d-flex justify-content-center pt-5">
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-black">
                  About us
                </a>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-black">
                  Products
                </a>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-black">
                  Awards
                </a>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-black">
                  Help
                </a>
              </h6>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-black">
                  Contact
                </a>
              </h6>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row*/}
        </section>
        {/* Section: Links */}
        <hr className="my-5" />
        {/* Section: Text */}
        {/* <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section> */}
        {/* Section: Text */}
        {/* Section: Social */}
        <section className="text-center mb-5">
          <a href="" className="text-black me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="text-black me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="text-black me-4">
            <i className="fab fa-google" />
          </a>
          <a href="" className="text-black me-4">
            <i className="fab fa-instagram" />
          </a>
          <a href="" className="text-black me-4">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="text-black me-4">
            <i className="fab fa-github" />
          </a>
        </section>
        {/* Section: Social */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-black" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
</>

  )
}

export default Footer