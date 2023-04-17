import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import { projects } from '../projectsData';
import { path } from '../config';
import ArrowKey from '../components/ArrowKey';
import Buttons from '../components/Buttons';
import { motion } from 'framer-motion';

const Portfolio = () => {
	useEffect(() => {
		localStorage.projects = true;
	}, []);

	const cardsTransition = {
		in: {
			opacity: 1,
		},
		out: {
			opacity: 0,
		},
	};

	const titleTransition = {
		in: {
			opacity: 1,
			y: 0,
		},
		out: {
			opacity: 0,
			y: 100,
		},
	};

	return (
		<div className="portfolio">
			<Meta
			// title={'Portfolio dev, les tous derniers projets réalisés'}
			// description={'Tous les projets dev mis en ligne'}
			/>
			<div className="porfolio-main">
				<motion.h1
					initial="out"
					animate="in"
					exit="out"
					variants={titleTransition}
					transition={{ duration: 1 }}>
					Mon Portfolio
				</motion.h1>
				<ul className="portfolio-container">
					{projects.map((project) => (
						<motion.li
							key={project.id}
							className="portfolio-content"
							initial="out"
							animate="in"
							exit="out"
							variants={cardsTransition}
							transition={{
								duration: Math.round(Math.random() * 2) + 0.3,
								delay: Math.round(Math.random()),
							}}>
							<span>
								<h3>{project.title}</h3>
								<ul className="langages">
									{project.languages.map((item) => (
										<Image
											src={item}
											alt="langage"
											key={item}
											height={50}
											width={50}
										/>
									))}
								</ul>
							</span>
							<Link
								href="/projects/[id]"
								as={'projects/' + project.id}>
								<Image
									src={path + project.img}
									alt={project.title}
									width={341}
									height={192}
									loading="eager"
								/>
							</Link>
						</motion.li>
					))}
				</ul>
			</div>
			<Buttons left={'/projects/4'} right={'/contact'} />
			<ArrowKey />
		</div>
	);
};

export default Portfolio;
