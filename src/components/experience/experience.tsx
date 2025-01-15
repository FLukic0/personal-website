import { Fragment } from "react";
import { ExperienceProps } from "../../data/info";

import "./styles/experience.css";

export const Experience = (props: ExperienceProps) => {
	const { title, description, position, company, startDate, endDate } = props;

	return (
		<Fragment>
			<div className="experience">
				<div className="experience-container">
					<div className="experience-title">{title}</div>
					<div className="experience-position">{position}</div>
					<div className="experience-company">{company}</div>
					<div className="experience-description">{description}</div>
					<div className="experience-startDate">{!!startDate ? "Start Date: "  + startDate : null}</div>
					<div className="experience-endDate">{!!endDate ? "End date: " + endDate : null}</div>
				</div>
			</div>
		</Fragment>
	);
};
