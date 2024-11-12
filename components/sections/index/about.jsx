// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I am a results-driven software engineer with over 3 years of experience, possessing a passion for crafting robust, efficient, and innovative solutions. With a strong background in backend development, I thrive on tackling complex challenges and turning them into elegant, user-friendly software."
				/>
				<section className={about.content}>
					<div className={about.image}>
						{/* <img src="/public/img/profile.JPG" alt="Lionel Irakoze photo"/> */}
						<Image src="/img/profile.JPG" width={600} height={800} alt="Iracodes Profile"/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Alongside my technical expertise in cybersecurity and development, I bring strong analytical and problem-solving abilities, demonstrated through my projects in AI development and cloud security. I excel in adapting to emerging technologies, with a particular passion for AI and machine learning applications in cybersecurity. My commitment to continuous learning is evident in my pursuit of advanced education while maintaining professional growth. I have a keen eye for detail and take a methodical approach to solving complex technical challenges."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]