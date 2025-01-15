import { Fragment, useEffect } from "react";
import { NavBar } from "../components/common/NavBar";
import { Footer } from "../components/common/Footer";
import { Helmet } from "react-helmet";

import { SEO } from "../data/seo";
import { INFO } from "../data/info";

import { Experiences } from "../components/experience/experiences"; 

import "./styles/experience.css";

export const ExperiencePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const experienceSEO = SEO.experience;

	return (
		<Fragment>
			<Helmet>
				<title>{`Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={experienceSEO.description} />
				<meta
					name="keywords"
					content={experienceSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="experiences" />
				<div className="content-wrapper">
					<div className="experiences-container">
						<div className="title experiences-title">
							
						</div>

						<div className="subtitle experiences-subtitle">
							
						</div>

						<div className="experiences-list">
							<Experiences useBrief={false} />
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
