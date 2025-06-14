// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am current managing, designing, and developing all consumer and digital product initiatives at My Supply Co."
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Jofar Group SA.</h3>
								<h4>Permanent Full-time</h4>
								<h4>July 2022 - Feb 2025 · 2 yrs 9 mos </h4>
								<h5>Nairobi, Kenya</h5>
							</span>
							<p style={{width:"100%"}}>
								At Jofar Group Ltd, I lead cross-functional project teams, ensuring timely delivery and adherence to quality standards. I establish a reliable infrastructure by implementing AWS and Google Cloud services. Developing RESTful APIs enhances data transfer efficiency between front-end and back-end systems, optimizing application performance. Additionally, close collaboration with the frontend team on API integration improves the overall user experience of our software solutions.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>

						<div className={career.position}>
	<div className={career.positionContent}>
		<span class={career.positionHeader}>
			<h3>Information Technology Project Lead</h3>
			<h4>Aug 2023 - Feb 2025 · 1 yrs 7 mos</h4>
		</span>
		<p>
		As the IT Project Lead, I was responsible for leading cross-functional development teams across enterprise digital transformation initiatives in mining, transportation, and business registration systems. I managed AWS cloud infrastructure, coordinated Agile workflows, and provided comprehensive IT administration and technical support across multiple departments. Each project required strategic planning, risk assessment, and stakeholder management to ensure on-time delivery and operational excellence.
		</p>
		<p>
		Some key achievements during this tenure 👇
		</p>
		<ul className={career.list}>
			<li>
				AWS cloud infrastructure migration and optimization
				<span className={career.subList}><span className={career.bullet}></span>Reduced operational costs by 45%</span>
			</li>
			<li>
				Enterprise system deployment across 5 regions
				<span className={career.subList}><span className={career.bullet}></span>Achieved 99.5% system availability</span>
			</li>
			<li>
				Technical support and incident management for 500+ users
				<span className={career.subList}><span className={career.bullet}></span>Maintained 4-hour average resolution time</span>
			</li>
			<li>
				IT service desk operations, user access management, and performance reporting
				<span className={career.subList}><span className={career.bullet}></span>Implemented ticketing system with 95% satisfaction rate</span>
			</li>
			<li>
				Automated CI/CD pipelines and deployment processes
				<span className={career.subList}><span className={career.bullet}></span>Reduced deployment time by 60%</span>
			</li>
			<li>
				Server administration and productivity tools maintenance
				<span className={career.subList}><span className={career.bullet}></span>Managed MS Office 365, OneDrive, and GitHub enterprise</span>
			</li>
		</ul>
		<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
	</div>
	<div className={career.positionAlt}></div>
</div>
					
						<div className={career.position}>
	<div className={career.positionContent}>
		<span class={career.positionHeader}>
			<h3>Software Engineer | Quality Assurance</h3>
			<h4>July 2022 - July 2023 · 1 year</h4>
		</span>
		<p>
		I was responsible for leading cross-functional project teams for in-house enterprise applications while implementing comprehensive quality assurance protocols. Working across AWS and Google Cloud services, I ensured reliable and scalable infrastructure while optimizing application performance through RESTful API development and rigorous testing methodologies. My role encompassed full project lifecycle management from planning to execution with adherence to quality standards.
		</p>
		<p>
		Some key projects completed during this time 👇
		</p>
		<ul className={career.list}>
			<li>
				RESTful API development and integration optimization
				<span className={career.subList}><span className={career.bullet}></span>Improved overall user experience by 15%</span>
			</li>
			<li>
				Cloud infrastructure implementation (AWS & Google Cloud)
				<span className={career.subList}><span className={career.bullet}></span>Ensured reliable and scalable enterprise-grade infrastructure</span>
			</li>
			<li>
				Quality assurance testing frameworks and automation
				<span className={career.subList}><span className={career.bullet}></span>Reduced production bugs by 40% through systematic testing</span>
			</li>
			<li>
				Cross-functional team coordination and project delivery
				<span className={career.subList}><span className={career.bullet}></span>Maintained 100% on-time project completion rate</span>
			</li>
		</ul>
		<Badges list={stack} block="stack" fullContainer="fullContainer"/>
	</div>
	<div className={career.positionAlt}>
	</div>
</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Sarami Africa Ltd.</h3>
								<h4>Contract Part-time</h4>
								<h4>January 2021 - March 2022 · 1 yrs 3 mos</h4>
								<h5>Nairobi, Kenya</h5>
							</span>
							<p>
							At Sarami Africa Ltd, my responsibilities included designing and implementing essential microservices crucial to our platform, enabling small businesses to access loans more efficiently. I work collaboratively with cross-functional teams, including UX designers and QA engineers, to ensure seamless development processes and deliver high-quality user experiences. Implementing CI/CD pipelines with GitHub Actions and Docker streamlines our software development and deployment workflows. Following Agile methodologies in Scrum, I actively participate in sprint planning, stand-ups, and retrospectives to ensure efficient project delivery.
							</p>
							<Badges list={backend} block="stack" fullContainer="fullContainer"/>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>App Factory</h3>
								<h4>Software Engineering Intern</h4>
								<h4>May 2022 - August 2022 · 3 mos</h4>
								<h5>Nairobi, Kenya</h5>
							</span>
							<p>I was the Electronics Wizard 🧙‍♂️</p>
							<p>
							During my tenure at App Factory, I implemented RESTful APIs to facilitate seamless communication between various services, enhancing the overall performance and functionality of our software products. Utilizing Git for version control, I collaborated with team members to maintain a clean and organized codebase. Working closely with diverse, cross-functional teams, including UX designers and QA engineers, streamlined the development process and ensured consistent delivery of high-quality software solutions. Deploying and managing applications on AWS using EC2 instances ensured high availability, scalability, and reliability of our software products.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

const fullStack	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]

const backend	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'jenkins', 		name: 'Jenkins', 			type: 'devicon' },	
	{ key: 'csharp',	 	name: 'C#',		 			type: 'devicon' },
	{ key: 'amazonwebservices', 	name: 'AWS', 		type: 'devicon' },
	{ key: 'jira', 			name: 'JIRA', 				type: 'devicon' },
	{ key: 'android', 		ame: 'Android', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]

const stack	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]
