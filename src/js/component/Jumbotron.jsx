import React from "react";

const Jumbotron = () => {
    return (
        <section className="py-5 text-center container bg-light">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">A warn Welcome!</h1>
            <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corporis eaque commodi libero ratione eius non quisquam velit at perspiciatis.</p>
            <p>
              <a href="#" className="btn btn-primary my-2">Call to action</a>
            </p>
          </div>
        </div>
      </section>
    )
}

export default Jumbotron
