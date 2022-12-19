import Layout from '../components/Layout';
import '../style/index.scss';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
