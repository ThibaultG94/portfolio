import Image from 'next/image';
import Link from 'next/link';
import Buttons from '../../components/Buttons';
import { path } from '../../config';
import { projects } from '../../projectsData';

const project = ({ project }) => {
	return (
		<div className="project">
			<h1>{project.title}</h1>
			<span>{project.date}</span>
			<p>{project.infos}</p>
			<Image
				src={path + project.img}
				alt={project.title}
				width={400}
				height={250}
			/>
			<Link href="/portfolio">Revenir au projet</Link>
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
