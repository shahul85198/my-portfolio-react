import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-fluid vh-100 px-4 py-5 my-5 text-center overflow-hidden">
      <div className="row h-100">
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img
            src="https://media.istockphoto.com/id/1402360495/vector/digital-development-people.jpg?s=612x612&w=0&k=20&c=2Ws4ZyJnAPm9wiXMKyIAeyiz8vRdzm30VUfiUuTSJhM="
            alt="People"
            style={{ maxWidth: '100%', maxHeight: '50vh', objectFit: 'cover' }}
          />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-5 fw-bold mt-4">Hello People</h1>
          <div className="col-lg-8">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Getting Started</button>
              <NavLink to='/contact'>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact-Us</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
