import { Fragment, useEffect } from "react";
import { NavBar } from "../components/common/NavBar";
import { Footer } from "../components/common/Footer";
import { SEO } from "../data/seo";
import { INFO } from "../data/info";


import "./styles/about.css";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSEO = SEO.about;

  return (
    <Fragment>
      <div>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={aboutSEO.description} />
        <meta
          name="keywords"
          content={aboutSEO.keywords.join(", ")}
        />
      </div>

      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">
                  {INFO.about.title}
                </div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description}
                </div>
              </div>

              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img
                      src="src/pages/about.jpg"
                      alt="about"
                      className="about-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="page-footer">
            <Footer />
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};