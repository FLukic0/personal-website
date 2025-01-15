import { Experience } from "./experience";
import { ExperiencesProps, INFO } from "../../data/info";

import "./styles/experiences.css";

export const Experiences = (props: ExperiencesProps) => {
	const { useBrief } = props;
	return (
		<div className="experiences-container">
			{INFO.experiences.map((experience, index) => (
				<div className={useBrief ? "experiences-list-experience-brief" : "experiences-list-experience"} key={index}>
						<Experience
							title={experience.title}
							position={experience.position}
							company={experience.company} 
							description={useBrief ? experience.brief ?? experience.description : experience.description}
							startDate={useBrief ? null : experience.startDate}
							endDate={useBrief ? null : experience.endDate}
						/>
				</div>
			))}
		</div>
	);
};
