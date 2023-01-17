import Head from 'next/head';

const Meta = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
		</Head>
	);
};

Meta.defaultProps = {
	title: 'Thibault Guilhem - Développeur Web Frontend - Site Portfolio',
	description:
		'Développeur Frontend React, JavaScript, Redux, NextJs pour projets web, applications, sites vitrines.',
};

export default Meta;
