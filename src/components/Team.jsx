import React from 'react';
//Font Awesome Icons are used in this way in react, provided by a package react-icons
//See the implementation below:
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import Team1 from '../assets/img/team/1.jpg';
import Team2 from '../assets/img/team/2.jpg';
import Team3 from '../assets/img/team/3.jpg';

const Team = () => {
  return (
    <section class="page-section bg-light" id="team">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Ons Geweldig Team</h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src={Team1} alt="..." />
              <h4>Parveen Anand</h4>
              <p class="text-muted">Lead Designer</p>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Parveen Anand Twitter Profile"
              >
                <FaTwitter />
              </a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Parveen Anand Facebook Profile"
              >
                <FaFacebookF />
              </a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Parveen Anand LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src={Team2} alt="..." />
              <h4>Diana Petersen</h4>
              <p class="text-muted">Lead Marketer</p>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Diana Petersen Twitter Profile"
              >
                <FaTwitter />
              </a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Diana Petersen Facebook Profile"
              >
                <FaFacebookF />
              </a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Diana Petersen LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src={Team3} alt="..." />
              <h4>Larry Parker</h4>
              <p class="text-muted">Lead Developer</p>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Larry Parker Twitter Profile"
              >
                <FaTwitter />
              </a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Larry Parker Facebook Profile"
              >
                <FaFacebookF />
              </a>
              <a
                class="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Larry Parker LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p
              class="large
                            text-muted"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
              corporis ea, alias ut unde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
