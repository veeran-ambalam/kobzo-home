import React from "react"
import * as Icon from "react-feather"
import ReactWOW from "react-wow"
import { Link } from "gatsby"
export default function FeaturesContent() {
  function showForm(name) {
      console.log(name);
    let x = name ? name : "Sign board for instructions - Prevention"
    document.getElementById("pname").innerHTML = name
    document.getElementById("mainForm").style.display = "block"
  }
  return (
    <React.Fragment>
      <section className="features-area ptb-160 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>COVID-Safe Workplace Services</h2>
            <div className="bar"></div>
            <p>
              Following the current pandemic situation, Kobzo will help you
              understand, evaluate and execute the necessary steps to ensure
              your employees feel safe and productive on returning to their
              workplace. Kobzo will help maintain regular sanitation standards
              and practices for your employees and clients making you a
              certified COVID-safe workplace.
            </p>
          </div>
        </div>
      </section>
      <div className="agency-services-area ptb-24">
        <div className="container">
          <div className="section-title st-fs-28">
            <h2>Our Services</h2>
            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-repair-services bg7">
                <h3>Disinfection Service</h3>
                <p>
                  Ideal for protecting your workplace from the dangers of
                  viruses, bacteria, and fungi and tailored to fit your unique
                  facilities, operations and needs.
                </p>

                <a href="#Disinfection">
                  <a>
                    <Icon.ArrowRight />
                  </a>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-repair-services bg8">
                <h3>Sanitisation Service</h3>
                <p>
                  Ensures protection up to 99% against the spread of pathogens
                  via high contact surfaces such as electronics, pantry
                  equipment and washroom facilities.
                </p>

                <a href="#Sanitisation">
                  <a>
                    <Icon.ArrowRight />
                  </a>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-repair-services bg9">
                <h3>Deep Cleaning</h3>
                <p>
                  An intensive cleaning process tailored to reach the hotspots
                  that accumulate dirt, grease, or grime and prevent the spread
                  of such germs.
                </p>

                <a href="#Deep">
                  <a>
                    <Icon.ArrowRight />
                  </a>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-repair-services bg10">
                <h3>Personal Hygiene Service</h3>
                <p>
                  Along with maintaining sanitization of office equipment and
                  surfaces your company should establish proper access to
                  personal hygiene to truly make it COVID-safe.
                </p>

                <a href="#Hygiene">
                  <a>
                    <Icon.ArrowRight />
                  </a>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-repair-services bg11">
                <h3>Carpet Cleaning & Sanitisation</h3>
                <p>
                  Thoroughly cleans carpets to get rid of microbial colonies,
                  grime, stubborn stains and more that are not removed via
                  regular cleaning.
                </p>

                <a href="#Carpet">
                  <a>
                    <Icon.ArrowRight />
                  </a>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-repair-services bg12">
                <h3>Office Cleaning</h3>
                <p>
                  Maintain regular cleaning cycles for microbial aerial
                  disinfection and sanitation of high touch areas to ensure
                  everyday cleanliness.
                </p>

                <a href="#Office">
                  <a>
                    <Icon.ArrowRight />
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="repair-about-area ptb-80" id="Disinfection">
        <div className="container">
          <div className="row flex-wrap flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <div className="repair-about-content">
                <div className="section-title">
                  <h2>Disinfection Service</h2>
                  <div className="bar"></div>
                </div>
                <p>
                  Various pathogenic microorganisms can survive and spread via
                  mediums including walls, floors and even the air. Offices are
                  a haven for germs, bacteria and viruses. Only proper
                  disinfection practices will be effective in controlling the
                  existence of such germs in the office.
                </p>
                <p>
                  The disinfection services of Kobzo include fumigation and
                  sterilisation against microbial growth in air, surfaces or the
                  floor. This process recognizes reputed guidelines set by
                  experts and disinfects with 99.9% efficiency.
                </p>
                <ul className="flex-column">
                  <li>
                    <span>
                      <Icon.Check /> Disinfecting & Cleaning Products
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Screening Products
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Protective Gear
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Office & Factory Safety Products
                    </span>
                  </li>
                </ul>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={e => showForm("Disinfection Service")}
                  >
                    Get Details
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="repair-about-image d-flex justify-content-center align-items-center">
                <img src={require("../../images/covid/4.jpg")} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="repair-about-area ptb-80" id="Sanitisation">
        <div className="container">
          <div className="row flex-wrap">
            <div className="col-lg-6">
              <div className="repair-about-image d-flex justify-content-center align-items-center">
                <img src={require("../../images/covid/1.png")} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="repair-about-content">
                <div className="section-title">
                  <h2>Sanitisation Service</h2>
                  <div className="bar"></div>
                </div>
                <p>
                  Surfaces that are often touched such as doorknobs, handrails,
                  elevator buttons, electrical switches, cabinet handles, faucet
                  handles, tables and more are most likely to be contaminated.
                  Since many viruses and microorganisms can survive on such
                  surfaces for a significant amount of time, it is critical for
                  offices to invest in sanitisation services.
                </p>
                <p>
                  Kobzo’s sanitisation services include liquid sterilisation to
                  prevent microbial growth on all surfaces of the premises. To
                  achieve 99.9% efficiency, it is critical to conduct the
                  process every 3 hours when any movement takes place or every
                  24 hours if no movement takes place. For this reason, Kobzo
                  assists you in not only sanitizing effectively but in only
                  working out a schedule suited to your organization.
                </p>
                <ul className="flex-column">
                  <li>
                    <span>
                      <Icon.Check /> Kill disease causing viruses
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Highly trained and certified partners
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Use of hospital-grade, certified
                      disinfectant
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Full transparency on service operations and
                      outcomes
                    </span>
                  </li>
                </ul>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={e => showForm("Sanitisation Service")}
                  >
                    Get Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="repair-about-area ptb-80" id="Deep">
        <div className="container">
          <div className="row flex-wrap flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <div className="repair-about-content">
                <div className="section-title">
                  <h2>Deep Cleaning</h2>
                  <div className="bar"></div>
                </div>
                <p>
                  Deep cleaning is a highly intensive cleaning practice that
                  reaches areas that are not regularly covered during cleaning
                  and rids workplaces from grime and dirt buildup. In the wake
                  of the current pandemic situation, it is more important than
                  ever to schedule regular deep cleaning sessions for your
                  workplace.
                </p>
                <p>
                  Kobzo provides thorough deep cleaning of your workplace
                  tailored specifically to your needs. This service ensures
                  elimination of allergens, dust particles, dirt, mold, and
                  other environmental pollutants from curtains, carpets, and
                  furniture, as well as vents, light fixtures, kitchen cabinets,
                  appliances, refrigerators, restroom walls, toilets, urinals,
                  sinks and more.
                </p>
                <ul className="flex-column">
                  <li>
                    <span>
                      <Icon.Check /> Highly trained and certified partners
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Use of hospital-grade, certified
                      disinfectant
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Full transparency on service operations and
                      outcomes
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Strategic consultation and insights
                    </span>
                  </li>
                </ul>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={e => showForm("Deep Cleaning")}
                  >
                    Get Details
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="repair-about-image d-flex justify-content-center align-items-center">
                <img src={require("../../images/covid/3.jpg")} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="repair-about-area ptb-80" id="Hygiene">
        <div className="container">
          <div className="row flex-wrap">
            <div className="col-lg-6">
              <div className="repair-about-image d-flex justify-content-center align-items-center">
                <img src={require("../../images/covid/2.jpg")} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="repair-about-content">
                <div className="section-title">
                  <h2>Personal Hygiene Service</h2>
                  <div className="bar"></div>
                </div>
                <p>
                  There is a significantly heightened awareness of personal
                  hygiene at workplaces following the current pandemic
                  situation. Any company looking to resume normal operations
                  will be required to stick to set guidelines and maintain
                  access to personal hygiene services for their employees and
                  clients.
                </p>
                <p>
                  Kobzo helps workplaces ensure steady management of personal
                  and washroom hygiene products as well as regular cleaning
                  services.
                </p>
                <ul className="flex-column">
                  <li>
                    <span>
                      <Icon.Check /> Highly trained and certified partners
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Use of hospital-grade, certified
                      disinfectant
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Full transparency on service operations and
                      outcomes
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Strategic consultation and insights
                    </span>
                  </li>
                </ul>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={e => showForm("Personal Hygiene Service")}
                  >
                    Get Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="repair-about-area ptb-80" id="Carpet">
        <div className="container">
          <div className="row flex-wrap flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <div className="repair-about-content">
                <div className="section-title">
                  <h2>Carpet Cleaning & Sanitisation</h2>
                  <div className="bar"></div>
                </div>
                <p>
                  There are at least 200,000 different microorganisms in
                  addition to dust mites and allergens per square inch of
                  carpets. Various viruses can survive in carpets for weeks
                  before becoming airborne.
                </p>
                <p>
                  Kobzo recognizes that carpet cleaning services largely depend
                  on a company’s operations and thus provides professional
                  carpet cleaning services that can be trusted to remove
                  stubborn stains, dirt, soil and grease from carpets that are
                  not removed via regular vacuuming or wiping.
                </p>
                <ul className="flex-column">
                  <li>
                    <span>
                      <Icon.Check /> Kill disease causing viruses
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Highly trained and certified partners
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Use of hospital-grade, certified
                      disinfectant
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Full transparency on service operations and
                      outcomes
                    </span>
                  </li>
                </ul>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={e => showForm("Carpet Cleaning & Sanitisation")}
                  >
                    Get Details
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="repair-about-image d-flex justify-content-center align-items-center">
                <img src={require("../../images/covid/5.jpg")} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="repair-about-area ptb-80" id="Office">
        <div className="container">
          <div className="row flex-wrap">
            <div className="col-lg-6">
              <div className="repair-about-image d-flex justify-content-center align-items-center">
                <img src={require("../../images/covid/6.jpg")} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="repair-about-content">
                <div className="section-title">
                  <h2>Office Cleaning</h2>
                  <div className="bar"></div>
                </div>
                <p>
                  A survey found that 98% of workers in office spaces catch
                  either minor or more severe illnesses that are contagious
                  where a major contributing factor is the cleanliness of the
                  office. In fact, if regular cleaning and disinfecting is not
                  performed, offices can expect an increase in bacteria present
                  on office surfaces by around 31% each day. With the advent of
                  the COVID-19 pandemic, it is extremely important for all
                  companies to revamp their hygiene maintenance.
                </p>
                <p>
                  Kobzo assists workplaces with microbial aerial disinfection,
                  followed by cleaning of high risk and high touch areas.
                  Kobzo’s services will also help offices maintain regular
                  cleaning cycles and proper training of the relevant staff.
                </p>
                <ul className="flex-column">
                  <li>
                    <span>
                      <Icon.Check /> Kill disease causing viruses
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Highly trained and certified partners
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Use of hospital-grade, certified
                      disinfectant
                    </span>
                  </li>
                  <li>
                    <span>
                      <Icon.Check /> Full transparency on service operations and
                      outcomes
                    </span>
                  </li>
                </ul>

                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={e => showForm("Office Cleaning")}
                  >
                    Get Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
