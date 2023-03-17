import Layout from '../components/Layout';
import '../style/index.scss';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
	const handleExitComplete = () => {
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0 });
		}
	};
	const router = useRouter();
	return (
		<AnimatePresence
			mode="wait"
			// initial="false"
			onExitComplete={() => handleExitComplete}>
			<Layout>
				<Component {...pageProps} />
				<Analytics />
			</Layout>
		</AnimatePresence>
	);
}
