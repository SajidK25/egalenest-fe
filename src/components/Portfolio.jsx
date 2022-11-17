import React from 'react';
import Portfolio1 from '../assets/img/portfolio/1.jpg';
import Portfolio2 from '../assets/img/portfolio/2.jpg';
import Portfolio3 from '../assets/img/portfolio/3.jpg';
import Portfolio4 from '../assets/img/portfolio/4.jpg';
import Portfolio5 from '../assets/img/portfolio/5.jpg';
import Portfolio6 from '../assets/img/portfolio/6.jpg';
import { FaPlus } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <>
      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Programma's</h2>
            <h3 class="section-subheading text-muted">
              We bieden de volgende programma's aan.
            </h3>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <FaPlus size={48} />
                    </div>
                  </div>
                  <img class="img-fluid" src={Portfolio1} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Sales Programma</div>
                  <div
                    class="portfolio-caption-subheading
                                    text-muted"
                  >
                    Everything Is Sales
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <FaPlus size={48} />
                    </div>
                  </div>
                  <img class="img-fluid" src={Portfolio2} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Business Development</div>
                  <div
                    class="portfolio-caption-subheading
                                    text-muted"
                  >
                    Iedereen Kan dit
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <FaPlus size={48} />
                    </div>
                  </div>
                  <img class="img-fluid" src={Portfolio3} alt="..." />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">Second Income</div>
                  <div
                    class="portfolio-caption-subheading
                                    text-muted"
                  >
                    Hoe Investeren?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class="portfolio-modal modal fade"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Sales Programma</h2>
                    <p class="item-intro text-muted">
                      Everything Is Sales
                    </p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/1.jpg"
                      alt="..."
                    />
                    <p>
                      Hierin leren we hoe jij de beste vertegenwoordiger kan zijn. Iemand met ambities en weet hoe hij tegen rejections kan handelen. mensen helpen met onze producten  is onze key, we werken met kwaliteitsproducten en helpen mensen met besparen. Cause you know, everything is sales!
                    </p>
                    <p>
                      We zorgen dat jij van alle markten thuis bent. Van het opstellen van een offerte tot en met het sluiten van een deal. Daarnaast ontwikkel je sterke communicatie skills en heb je meer een affiniteit met sales.
                    </p>
                    <p>
                      Vervolgens in de sales programma bied jij op maat gemaakte oplossingen voor de klanten. marketingstrategieën ontwikkelen en delen met andere collega’s is zeker bij ons van toepassing.
                      Daarnaast is Klantrelaties bevorderen en een hoge klanttevredenheid behouden heel belangrijk!
                    </p>
                    <p>
                      Wat verwachten we? <br />
                      Verantwoordelijk zijn voor het genereren van leads en het behalen van verkoopdoelstellingen. De taken omvatten verkooppresentaties en productdemonstraties, evenals het onderhandelen over contracten met potentiële klanten.
                    </p>
                    <button
                      class="btn btn-primary btn-xl
                                        text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-xmark me-1"></i>
                      Sluiten
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="portfolio-modal modal fade"
        id="portfolioModal2"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Business Development</h2>
                    <p class="item-intro text-muted">
                      Iedereen Kan dit
                    </p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/2.jpg"
                      alt="..."
                    />
                    <p>
                      Naast de sales, hebben we business development programma. Dit is voor ambitieuze mensen die graag carrière willen binnen het bedrijf. Iedereen kan dit! We helpen u met managen en begeleiden van een team. Doorgroeien in het bedrijf vraagt voor inzicht en EQ, dat ontwikkel je met de tijd. Ook deel je je kennis mee met het team en zorg je ervoor dat iedereen helpt om hun prestaties te richten.
                    </p>
                    <button
                      class="btn btn-primary btn-xl
                                        text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-xmark me-1"></i>
                      Sluiten
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="portfolio-modal modal fade"
        id="portfolioModal3"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <h2 class="text-uppercase">Second Income</h2>
                    <p class="item-intro text-muted">
                      Hoe Investeren?
                    </p>
                    <img
                      class="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/3.jpg"
                      alt="..."
                    />
                    <p>
                      Dit programma geven we enkel aan geschikte kandidaten, is niet voor iedereen.
                      Hier leer je hoe je meerdere inkomen kunt genereren met professionals over de wereld.
                    </p>
                    <p>
                      Dit zijn de volgende eigenschappen waar we nu op focussen:
                      <ul>
                        <li>
                          Traden met forex, crypto en HFX
                        </li>
                        <li>
                          Branding (met YouTube, gmail en sociale media marketing)
                        </li>
                        <li>
                          Meer kennis over de wereld economie.
                        </li>
                      </ul>
                    </p>
                    <button
                      class="btn btn-primary btn-xl
                                        text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i class="fas fa-xmark me-1"></i>
                      Sluiten
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
