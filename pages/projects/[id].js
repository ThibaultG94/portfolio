import Image from 'next/image';
import Link from 'next/link';
import Buttons from '../../components/Buttons';
import { path } from '../../config';
import { projects } from '../../projectsData';

const project = ({ project }) => {
	return (
		<div className="project">
			<div className="project-main">
				<div className="project-content">
					<h1>{project.title}</h1>
					<p>{project.date}</p>
					<ul className="languages">
						{project.languages.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<div className="img-content">
					<div className="img-container hover">
						<span>
							<h3></h3>
							<p>{project.infos}</p>
						</span>
						<Image
							src={path + project.img}
							alt={project.title}
							width={600}
							height={375}
						/>
					</div>
					<div className="button-container">
						{/* <a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="hover"> */}
						<Link
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="hover">
							<span className="button">voir le site</span>
						</Link>
						{/* </a> */}
					</div>
				</div>
			</div>
			<Link href="/portfolio">
				<span className="button back">Revenir au projets</span>
			</Link>
			<Buttons
				left={project.id === 1 ? '/' : '/projects/' + (project.id - 1)}
				right={
					project.id === 4
						? '/contact'
						: '/projects/' + (project.id + 1)
				}
			/>
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
