import Head from 'next/head';

const Meta = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
			/>
		</Head>
	);
};

Meta.defaultProps = {
	title: 'Portfolio Thibault Guilhem',
	description:
		'Développeur frontend React, JavaScript, Redux, NextJs pour projets web, applications, etc.',
};

export default Meta;
