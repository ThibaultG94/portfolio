import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

const ArrowKey = (props) => {
	let router = useRouter();
	const handleKeyPress = useCallback((e) => {
		if (e.key === 'ArrowLeft') {
			switch (router.asPath) {
				case '/':
					break;
				case '/portfolio':
					router.push('/');
					router.asPath = '/';
					break;
				case '/projects/1':
					router.push('/');
					router.asPath = '/';
					break;
				case '/projects/2':
					router.push('/projects/1');
					router.asPath = '/projects/1';
					break;
				case '/projects/3':
					router.push('/projects/2');
					router.asPath = '/projects/2';
					break;
				case '/projects/4':
					router.push('/projects/3');
					router.asPath = '/projects/3';
					break;
				case '/projects/5':
					router.push('/projects/4');
					router.asPath = '/projects/4';
					break;
				case '/projects/6':
					router.push('/projects/5');
					router.asPath = '/projects/5';
					break;
				case '/projects/7':
					router.push('/projects/6');
					router.asPath = '/projects/6';
					break;
				case '/projects/8':
					router.push('/projects/7');
					router.asPath = '/projects/7';
					break;
				case '/projects/9':
					router.push('/projects/8');
					router.asPath = '/projects/8';
					break;
				case '/projects/10':
					router.push('/projects/9');
					router.asPath = '/projects/9';
					break;
				case '/projects/11':
					router.push('/projects/10');
					router.asPath = '/projects/10';
					break;
				case '/contact':
					router.push('/projects/4');
					router.asPath = '/projects/4';
					break;
				default:
					break;
			}
		} else if (e.key === 'ArrowRight') {
			switch (router.asPath) {
				case '/':
					router.push('/projects/1');
					router.asPath = '/projects/1';
					break;
				case '/portfolio':
					router.push('/contact');
					router.asPath = '/contact';
					break;
				case '/projects/1':
					router.push('/projects/2');
					router.asPath = '/projects/2';
					break;
				case '/projects/2':
					router.push('/projects/3');
					router.asPath = '/projects/3';
					break;
				case '/projects/3':
					router.push('/projects/4');
					router.asPath = '/projects/4';
					break;
				case '/projects/4':
					router.push('/contact');
					router.asPath = '/contact';
					break;
				case '/projects/5':
					router.push('/projects/6');
					router.asPath = '/projects/6';
					break;
				case '/projects/6':
					router.push('/projects/7');
					router.asPath = '/projects/7';
					break;
				case '/projects/7':
					router.push('/projects/8');
					router.asPath = '/projects/8';
					break;
				case '/projects/8':
					router.push('/projects/9');
					router.asPath = '/projects/9';
					break;
				case '/projects/9':
					router.push('/projects/10');
					router.asPath = '/projects/10';
					break;
				case '/projects/10':
					router.push('/projects/11');
					router.asPath = '/projects/11';
					break;
				case '/projects/11':
					router.push('/contact');
					router.asPath = '/contact';
					break;
				case '/contact':
					break;
				default:
					break;
			}
		}
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, [handleKeyPress]);
	return;
};

export default ArrowKey;
