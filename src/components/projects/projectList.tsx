import { Project } from "./project";
import { INFO, ProjectListProps } from "../../data/info";

import "./styles/projectList.css";

export const ProjectList = (props: ProjectListProps) => {
	const { useBrief } = props;
	return (
		<div className="project-list-container">
			{INFO.projects.map((project, index) => (
				<div className={useBrief ? "project-list-project-brief" : "project-list-project"} key={index}>
					<Project
						title={project.title}
						description={useBrief ? project.brief : project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};
