import Image from 'next/image';
import Link from 'next/link';
import ArrowKey from '../../components/ArrowKey';
import Buttons from '../../components/Buttons';
import Meta from '../../components/Meta';
import { path } from '../../config';
import { projects } from '../../projectsData';

const project = ({ project }) => {
	return (
		<div className="project">
			<Meta
				title={`Projet ${project.title} - Thibault Guilhem - Développeur Web Frontend`}
			/>
			<div className="project-main">
				<div className="project-content">
					<h1>{project.title}</h1>
					<p>{project.date}</p>
					<ul className="langages">
						{project.languages.map((item) => (
							<img src={item} alt="langage" key={item} />
						))}
					</ul>
				</div>
				<div className="img-content">
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
				</div>
			</div>
			<Buttons
				left={project.id === 1 ? '/' : '/projects/' + (project.id - 1)}
				right={
					(project.id === 4) | (project.id === 13)
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
