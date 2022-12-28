import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Meta from '../components/Meta';
import { projects } from '../projectsData';
import { path } from '../config';
import ArrowKey from '../components/ArrowKey';

const portfolio = () => {
	return (
		<div className="portfolio">
			<Meta
				title={'Portfolio dev, les tous derniers projets réalisés'}
				description={'Tous les projets dev mis en ligne'}
			/>
			<div className="porfolio-main">
				<h1>PROJETS</h1>
				<ul className="portfolio-container">
					{projects.map((project) => (
						<li key={project.id} className="portfolio-content">
							{/* <h3>
								{project.title} <span>➡️</span>
							</h3> */}
							<Link
								href="/projects/[id]"
								as={'projects/' + project.id}>
								<Image
									src={path + project.img}
									alt={project.title}
									width={341}
									height={192}
								/>
							</Link>
						</li>
					))}
				</ul>
			</div>
			<ArrowKey />
		</div>
	);
};

export default portfolio;
