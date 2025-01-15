import { Fragment, useEffect } from "react";
import { NavBar } from "../components/common/NavBar";
import { Footer } from "../components/common/Footer";
import { Helmet } from "react-helmet";

import { ProjectList } from "../components/projects/projectList";

import { SEO } from "../data/seo";
import { INFO } from "../data/info";


import "./styles/projects.css";

export const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const projectsSEO = SEO.projects;

	return (
		<Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={projectsSEO.description} />
				<meta
					name="keywords"
					content={projectsSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
							
						</div>

						<div className="subtitle projects-subtitle">
							
						</div>

						<div className="projects-list">
							<ProjectList />
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
