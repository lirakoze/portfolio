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
								<h3>Jofar Group Ltd.</h3>
								<h4>Permanent Full-time</h4>
								<h4>July 2022 - Present · 2 yrs </h4>
								<h5>Nairobi, Nairobi City, Kenya</h5>
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
									<h3>Software Engineer | DevOps</h3>
									<h4>Feb 2020 - Nov 2021 · 1 yrs 10 mos</h4>
								</span>
								<p>
								As the lead full stack developer I am responsible for all software development, CI/CD, and QA. This is for the front end, APIs, and the back end. Additionally I was tasked with identifying and analyzing weak points in the customer journey and employee workflows. Each project had to be estimated and prioritized based on its workload and immediate impact to efficiency or revenue. Some of these projects have been so successful internally that we have planned refactoring for commercialization. 
								</p>
								<p>
								Some key projects complete during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Product attribute and settings automated testing
										<span className={career.subList}><span className={career.bullet}></span>Eradicated critical data input errors</span>
									</li>
									<li>
										Inventory management reporting and automation 
										<span className={career.subList}><span className={career.bullet}></span>Decreased purchasing labour by ~80%</span>
									</li>
									<li>
										Sales management plugin with AJAX shopping cart integration
										<span className={career.subList}><span className={career.bullet}></span>Increased AOV by 8.3%</span>
									</li>
									<li>
										Bespoke ID verification software and WooCommerce integration
										<span className={career.subList}><span className={career.bullet}></span>Decreased Credit Card fraud by 98%</span>
									</li>
								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					
						<div className={career.position}>
							<div className={career.positionContent}>
									<span class={career.positionHeader}>
										<h3>Backend Developer</h3>
										<h4>July 2022 - February 2023 · 6 mos</h4>
									</span>
								<p>
									I was brought on to help fill multiple creative rolls in a small start-up environment. Working with the marketing team to create the brand and logos — designing and developing a new front end for the website — and improving the users experience and store KPIs through design and merchandising optimizations.
								</p>
								<p>
									Some key projects completed during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Full functionality interactive shopping cart to replace cart page
										<span className={career.subList}><span className={career.bullet}></span>Increased conversions by 0.7%</span>
									</li>
									<li>Complex multi-state animated menus represented in an elegant UI 
										<span className={career.subList}><span className={career.bullet}></span>Strong brand confidence booster with state of the art menu</span>
									</li>
									<li>
										Design and development of the site and merchandising strategy optimized for market
										<span className={career.subList}><span className={career.bullet}></span>7.1% overall conversion rate </span>
									</li>
								</ul>
								<Badges list={stack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
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