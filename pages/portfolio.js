import Link from 'next/link';
import React from 'react';
import Meta from '../components/Meta';
import { projects } from '../projectsData';

const portfolio = () => {
	return (
		<div>
			<Meta
				title={'Portfolio dev, les tous derniers projets réalisés'}
				description={'Tous les projets dev mis en ligne'}
			/>
			<h1>PROJETS</h1>
			<ul>
				{projects.map((project) => (
					<li key={project.id}>
						<Link
							href="/projects/[id]"
							as={'projects/' + project.id}>
							{project.title} <span>➡️</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default portfolio;
