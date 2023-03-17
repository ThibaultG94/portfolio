import Image from 'next/image';
import Link from 'next/link';
import ArrowKey from '../../components/ArrowKey';
import Buttons from '../../components/Buttons';
import Meta from '../../components/Meta';
import { path } from '../../config';
import { projects } from '../../projectsData';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const project = ({ project }) => {
	const variants = {
		initial: {
			opacity: 0,
			transition: { duration: 0.5 },
			x: 200,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
		exit: {
			opacity: 0.4,
			transition: { duration: 0.35 },
			x: -800,
		},
	};

	const transition = {
		ease: [0.03, 0.87, 0.73, 0.9],
		duration: 0.6,
	};

	const imgAnim = {
		initial: {
			opacity: 0,
			x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
			y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)),
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
		},
	};

	return (
		<div className="project">
			<Meta
				title={`Projet ${project.title} - Thibault Guilhem - Développeur Web Frontend`}
			/>
			<motion.div
				className="project-main"
				initial="initial"
				animate="visible"
				exit="exit"
				transition={transition}
				variants={variants}>
				<div className="project-content">
					<h1>{project.title}</h1>
					<p>{project.date}</p>
					<ul className="langages">
						{project.languages.map((item) => (
							<Image
								src={item}
								alt="langage"
								key={item}
								height={50}
								width={50}
								loading="eager"
							/>
						))}
					</ul>
				</div>
				<motion.div
					initial="initial"
					animate="visible"
					variants={imgAnim}
					transition={{ duration: 1.2 }}
					className="img-content">
					<div className="img-container hover">
						<span>
							<h3></h3>
							<p>{project.infos}</p>
						</span>
						<Link
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="hover">
							<Image
								src={path + project.img}
								alt={project.title}
								width={683}
								height={384}
								loading="eager"
							/>
						</Link>
					</div>
					<div className="button-container">
						<Link
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="hover">
							<span className="button">
								voir le code source
								<i className="fa-brands fa-github"></i>
							</span>
						</Link>
					</div>
				</motion.div>
			</motion.div>
			<Buttons
				left={
					project.id === 1
						? '/about'
						: '/projects/' + (project.id - 1)
				}
				right={
					(project.id === 4) | (project.id === 11)
						? '/portfolio'
						: '/projects/' + (project.id + 1)
				}
			/>
			<ArrowKey />
		</div>
	);
};

export default project;

export const getStaticProps = (context) => {
	const filtered = projects.filter(
		(project) => project.id == context.params.id
	);

	if (filtered.length > 0) {
		return {
			props: {
				project: filtered[0],
			},
		};
	}
};

export const getStaticPaths = () => {
	const ids = projects.map((project) => project.id);
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};
