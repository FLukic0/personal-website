import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ProjectProps } from "../../data/info";

import "./styles/project.css";

export const Project = (props: ProjectProps) => {
	const { title, description, linkText, link } = props;

	return (
		<Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</Fragment>
	);
};
