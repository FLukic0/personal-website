export interface ExperienceProps {
	title: string,
	brief?: string,
	description: string
	position: string
	company: string
	startDate: string | null
	endDate: string | null
};

export interface ExperiencesProps {
	useBrief?: boolean
};

export interface ProjectListProps {
	useBrief?: boolean
}

export interface ProjectProps {
	title: string,
	description: string
	link: string
	linkText: string
}

interface INFOProps {
	main: {
		title: string,
		name: string,
		email: string,
		logo: string,
	},
	homepage: {
		title: string,
		description: string
	},
	about: {
		title: string,
		description: string
  },

	experiences: {
		title: string,
		brief: string,
		description: string,
		position: string,
		company: string,
		startDate: string,
		endDate: string
	} [],
	projects: {
		title: string,
		brief: string,
		description: string,
		linkText: string,
		link: string,
	} [],
	
}

export const INFO: INFOProps = {
	main: {
		title: "",
		name: "Filip Lukic",
		email: "filiplukic000@gmail.com",
		logo: ""
	},
	homepage: {
		title: "",
		description: "I’m a Computer (Systems) Engineering graduate with high distinction from Carleton University. During my academic career, I’ve always worked hard and take an interest in my courses allowing me to achieve a GPA of 3.91. During my studies, I’ve completed 20 months of coop experience among 4 different companies. I’m proficient with many programing languages with professional experience using JavaScript, TypeScript, C/C++, Python, and Java."
	},
	about: {
		title: "",
		description: "I’m a Computer (Systems) Engineering graduate with high distinction from Carleton University. During my academic career, I’ve always worked hard and take an interest in my courses allowing me to achieve a GPA of 3.91. I’ve learned a lot during my studies and thanks to the Coop program at Carleton, I’ve been able to gain experience in the field working at multiple companies. This has allowed me to experience software development in the context of large teams with multiple sub teams to smaller multipurpose teams and adapt to both. I’ve worked extensively with high level languages like JavaScript and Java along with low level languages like C and C++. My academic projects have primarily focus on low level languages like C and C++ serving as a great contrast to the JS/TS work I’ve done professionally. My capstone project combines my academic knowledge of circuits, hardware, and low-level tech to record and transmit air quality data with my profession experience with high-level tech to store and display this information in a user-friendly manner."
  },
	experiences: [
		{
			title: "Frontend Developer COOP",
			brief:
				"For my final coop, I was given the opportunity to work with the Front End Technologies (FET) team at Kinaxis. Using modern JavaScript frameworks such as ReactJS and MaterialUI, I created robust user interfaces in an agile development environment. In addition to the technical experience I gained, I was able refine my communication and organizational skills, both of which are very important when working within a large team. During my time at Kinaxis, I worked on migrating the existing client UI to a new web UI. In this capacity, I implmented new features along with improving existing features to remove pain points identified by customers and streamline user experiences.",
			description:
				"For my final coop, I was given the opportunity to work with the Front End Technologies (FET) team at Kinaxis. Using modern JavaScript frameworks such as ReactJS and MaterialUI, I created robust user interfaces in an agile development environment. In addition to the technical experience I gained, I was able refine my communication and organizational skills, both of which are very important when working within a large team. During my time at Kinaxis, I worked on migrating the existing client UI to a new web UI. In this capacity, I implmented new features along with improving existing features to remove pain points identified by customers and streamline user experiences.",
			position: "Student Software Developer",
			company: "Kinaxis",
			startDate: "May 2023",
			endDate: "August 2023"
		},
		{
			title: "Fullstack Developer COOP",
			brief:
				"My thrid coop placement provided me with a wonderful opportunity to works as a full stack developer at Signiant where I was able to experience the entire development process, from the initial planning and prototyping, to deploying and maintaining. Working with many JavaScript technologies like ReactJS, MaterialUI, ExpressJS, NodeJS, and Redux Toolkit. As part of a small team, I worked very closely with my colleagues learning lots about development practices very quickly, allowing me to take on many of the same responsibilities my team members had.",
			description:
				"My thrid coop placement provided me with a wonderful opportunity to works as a full stack developer at Signiant where I was able to experience the entire development process, from the initial planning and prototyping, to deploying and maintaining. Working with many JavaScript technologies like ReactJS, MaterialUI, ExpressJS, NodeJS, and Redux Toolkit. As part of a small team, I worked very closely with my colleagues learning lots about development practices very quickly, allowing me to take on many of the same responsibilities my team members had.",
			position: "Fullstack Student Developer",
			company: "Signiant",
			startDate: "September 2022",
			endDate: "December 2022"
		},
		{
			title: "IDE and Tools Developer COOP",
			brief:
				"For my second coop opportunity, I was able to work with the IDE and Tools team at BlackBerry QNX, where I gained lots of experience with both software development and software testing. In particular, I used the C programming language extensively due to its massive use in the QNX ecosystem. As a member of the IDE and Tools team, I learned about different debugging and testing methodologies and practices, which served me well when fixing bugs identified by customers and adding customer driven features to our IDE. I also was given a unique opportunity in beginning the design work and basic prototyping for QNX’s next IDE, which allowed me to apply everything I learned during my time at QNX.",
			description:
				"For my second coop opportunity, I was able to work with the IDE and Tools team at BlackBerry QNX, where I gained lots of experience with both software development and software testing. In particular, I used the C programming language extensively due to its massive use in the QNX ecosystem. As a member of the IDE and Tools team, I learned about different debugging and testing methodologies and practices, which served me well when fixing bugs identified by customers and adding customer driven features to our IDE. I also was given a unique opportunity in beginning the design work and basic prototyping for QNX’s next IDE, which allowed me to apply everything I learned during my time at QNX.",
			position: "Student Developer",
			company: "BlackBerry QNX",
			startDate: "January 2022",
			endDate: "August 2022"
		},
		{
			title: "Business Solutions Developer COOP",
			brief:
				"My first coop placement at Transport Canada (TC) provided me with a great introduction to software development in the real world. The first project I worked on allowed me to experience every stage of the software lifecycle and create a solution that every department at Transport Canada would use to streamline security clearance requests. I first met with stakeholders to identify key requirements and features that would be needed. I followed this up with creating a prototype and iterating the design for each subsequent meeting. Once the majority of the design work was completed, I moved onto limited user testing to help identify possible problem areas and any pain points with the UI. At the end of testing, the solution was deployed, completing my first professional project.",
			description:
				"My first coop placement at Transport Canada (TC) provided me with a great introduction to software development in the real world. The first project I worked on allowed me to experience every stage of the software lifecycle and create a solution that every department at Transport Canada would use to streamline security clearance requests. I first met with stakeholders to identify key requirements and features that would be needed. I followed this up with creating a prototype and iterating the design for each subsequent meeting. Once the majority of the design work was completed, I moved onto limited user testing to help identify possible problem areas and any pain points with the UI. At the end of testing, the solution was deployed, completing my first professional project.",
			position: "Student Developer",
			company: "Tranport Canada",
			startDate: "May 2021",
			endDate: "August 2021"
		}
	],

	projects: [
		{
			title: "Air Quality Monitoring",
			brief:
			"For my engineering capstone project, I teamed up with two of my peers to create an affordable air quality monitoring system. Leveraging generational improvements in sensor technology, my team used multiple BME680 sensors to measure the amount of volatile organic compounds in the air along with temperate, pressure, and humidity data. Incorporating the AWS tech stack into our project, utilized a publish/subscribe pattern to send real-time data to our cloud storage solution. With this data, we trained machine learning models using supervised learning to add the capability for the system to identify the source of odours. Leveraging the experience with web development I gained during my coop placements, I create a webpage that would allow users to view their device data in a graphical representation in real-time. The web portal allowed users to sign in, resister devices to themselves, and manage which users could have access to their devices.",
			description:
				"For my engineering capstone project, I teamed up with two of my peers to create an affordable air quality monitoring system. Leveraging generational improvements in sensor technology, my team used multiple BME680 sensors to measure the amount of volatile organic compounds in the air along with temperate, pressure, and humidity data. Incorporating the AWS tech stack into our project, utilized a publish/subscribe pattern to send real-time data to our cloud storage solution. With this data, we trained machine learning models using supervised learning to add the capability for the system to identify the source of odours. Leveraging the experience with web development I gained during my coop placements, I create a webpage that would allow users to view their device data in a graphical representation in real-time. The web portal allowed users to sign in, resister devices to themselves, and manage which users could have access to their devices.",
			linkText: "View Project",
			link: "https://github.com/slukic0/air-quality-monitoring",
		},
		{
			title: "Autonomous Snowplow",
			brief:
				"For one of my computer engineering classes, I created a small autonomous snow plow with some of my colleagues. The overall objective of the snow plow was to remove the highest number of cubes from a test area without exceed the test area boundaries and successfully avoid all obstacles. As a group, we were given four motors and wheels, a collection of sensors, and an Arduino board to interface with them. Our task was to determine how to best utilize our sensors and create our own algorithms for traversal. Using modern C++, we used with our ultrasonic and light sensors to serve as collision avoidance, while our line detector sensor served as boundary avoidance. For our traversal algorithm, we experimented with multiple solutions but ultimately decided on a random walk algorithm as our gyroscopic and magnetic sensor proved too unreliable for more complex algorithms. Combining all of our sensors and algorithms together, our robot managed to avoid all obstacles and never exceed the test boundary, while still removing 90% of cubes within a 5 minute test window.",
			description:
				"For one of my computer engineering classes, I created a small autonomous snow plow with some of my colleagues. The overall objective of the snow plow was to remove the highest number of cubes from a test area without exceed the test area boundaries and successfully avoid all obstacles. As a group, we were given four motors and wheels, a collection of sensors, and an Arduino board to interface with them. Our task was to determine how to best utilize our sensors and create our own algorithms for traversal. Using modern C++, we used with our ultrasonic and light sensors to serve as collision avoidance, while our line detector sensor served as boundary avoidance. For our traversal algorithm, we experimented with multiple solutions but ultimately decided on a random walk algorithm as our gyroscopic and magnetic sensor proved too unreliable for more complex algorithms. Combining all of our sensors and algorithms together, our robot managed to avoid all obstacles and never exceed the test boundary, while still removing 90% of cubes within a 5 minute test window.",
			linkText: "View Project",
			link: "https://github.com/SYSC-Courses/course-project-l2-g1",
		},
		{
			title: "Raspberry Pi Cocktail Machine",
			brief:
				"As a preparation course for engineering capstone project, computer engineering students are given a trail version of the capstone project during their last semester of third year. This project course is fairly open ended with the only requirement being the use of a Raspberry Pi 4 as the primary logic and control component of your system. Working with 2 of my peers, my group decided to create a cocktail/mocktail system using the Raspberry Pi along with several actuators, pumps, and sensors. In our design, the actuators provided auditory alerts for system progress and errors while the sensors were used to measure fluid levels to ensure that a cocktail could be created. We also created a web interface where users could login to create and save their own cocktail mixtures. By the end of the term, we were able to successful create a cocktail using 4 different ingredients at the same time. Comparing the cost of our system to prices of similar systems found on amazon and other online shops, we found that our solution was on average 50% cheaper, while still retaining most of the functionality of other designs.",
			description:
				"As a preparation course for engineering capstone project, computer engineering students are given a trail version of the capstone project during their last semester of third year. This project course is fairly open ended with the only requirement being the use of a Raspberry Pi 4 as the primary logic and control component of your system. Working with 2 of my peers, my group decided to create a cocktail/mocktail system using the Raspberry Pi along with several actuators, pumps, and sensors. In our design, the actuators provided auditory alerts for system progress and errors while the sensors were used to measure fluid levels to ensure that a cocktail could be created. We also created a web interface where users could login to create and save their own cocktail mixtures. By the end of the term, we were able to successful create a cocktail using 4 different ingredients at the same time. Comparing the cost of our system to prices of similar systems found on amazon and other online shops, we found that our solution was on average 50% cheaper, while still retaining most of the functionality of other designs.",
			linkText: "View Project",
			link: "https://github.com/slukic0/pi-na-colada",
		},
		{
			title: "Java Multithreaded Elevator",
			brief:
				"During my academic career, I worked on many group projects of varying complexity. One of the more challenging projects I complete was the creation of a multithreaded elevator control system. Working in a group of five, our task was to create a control system using Java that would be able to control 3 elevators in parallel. Points were awarded for minimizing waiting times for elevators and a well distributed utilization of all elevators. Test coverage was also an important aspect for this project with component and end-to-end tests being a requirement. As all members of my group had previous coop experiences, we followed an iterative design approach, creating a new git branch for each feature we added so testing and design could be done almost in parallel. This worked very well for us as we were able to create a stable solution for our deliverables and test it extensively soon after. Any changes that needed to be made would be done so in a different branch so our testers could still work on other parts of the systems without being blocked.",
			description:
				"During my academic career, I worked on many group projects of varying complexity. One of the more challenging projects I complete was the creation of a multithreaded elevator control system. Working in a group of five, our task was to create a control system using Java that would be able to control 3 elevators in parallel. Points were awarded for minimizing waiting times for elevators and a well distributed utilization of all elevators. Test coverage was also an important aspect for this project with component and end-to-end tests being a requirement. As all members of my group had previous coop experiences, we followed an iterative design approach, creating a new git branch for each feature we added so testing and design could be done almost in parallel. This worked very well for us as we were able to create a stable solution for our deliverables and test it extensively soon after. Any changes that needed to be made would be done so in a different branch so our testers could still work on other parts of the systems without being blocked.",
			linkText: "View Project",
			link: "https://github.com/slukic0/elevator",
		}
	],
};