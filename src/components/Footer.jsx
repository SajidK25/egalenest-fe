import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer class="footer py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-start">
            Copyright &copy; Eagle's Finest 2022
          </div>
          <div class="col-lg-4 my-3 my-lg-0"></div>
          <div class="col-lg-4 text-lg-end">
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="#!"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
