import Layout from '../components/Layout';
import '../style/index.scss';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import PageLoader from '../components/PageLoader';

// const App = ({ Component, pageProps }) => {
// 	const [loading, setLoading] = useState(false);
// 	useEffect(() => {
// 		// Used for page transition
// 		const start = () => {
// 			setLoading(true);
// 		};
// 		const end = () => {
// 			setLoading(false);
// 		};
// 		Router.events.on('routeChangeStart', start);
// 		Router.events.on('routeChangeComplete', end);
// 		Router.events.on('routeChangeError', end);
// 		return () => {
// 			Router.events.off('routeChangeStart', start);
// 			Router.events.off('routeChangeComplete', end);
// 			Router.events.off('routeChangeError', end);
// 		};
// 	}, []);

// 	return loading ? (
// 		<AnimatePresence>
// 			<Layout>
// 				<PageLoader />
// 			</Layout>
// 		</AnimatePresence>
// 	) : (
// 		<AnimatePresence mode="wait" initial="false">
// 			<Layout>
// 				<Component {...pageProps} />
// 			</Layout>
// 		</AnimatePresence>
// 	);
// };

export default function App({ Component, pageProps }) {
	return (
		// <AnimatePresence mode="wait" initial="false">
		<Layout>
			<Component {...pageProps} />
			<Analytics />
		</Layout>
		// {/* </AnimatePresence> */}
	);
}

// export default App;
