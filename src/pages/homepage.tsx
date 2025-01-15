import { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavBar } from "../components/common/NavBar";
import { Footer } from "../components/common/Footer";
import { SEO } from "../data/seo";
import { INFO } from "../data/info";
import { ProjectList } from "../components/projects/projectList";

import "./styles/homepage.css";
import { Experiences } from "../components/experience/experiences";

export const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		let scroll = Math.round(window.scrollY);

	// 		let newLogoSize = 80 - (scroll * 4) / 10;

	// 		if (newLogoSize < oldLogoSize) {
	// 			if (newLogoSize > 40) {
	// 				setLogoSize(newLogoSize);
	// 				setOldLogoSize(newLogoSize);
	// 				setStayLogo(false);
	// 			} else {
	// 				setStayLogo(true);
	// 			}
	// 		} else {
	// 			setLogoSize(newLogoSize);
	// 			setStayLogo(false);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, [logoSize, oldLogoSize]);

	const currentSEO = SEO.home;

	return (
		<Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							{/*<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
							*/}
						</div>

						<div className="homepage-experiences">
							<Experiences useBrief={true} />
						</div>

						<div className="homepage-projects">
							<ProjectList useBrief={true} />
						</div>

						{/* <div className="page-footer">
							<Footer />
						</div> */}
					</div>
				</div>
			</div>
		</Fragment>
	);
};
