import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Navbar = () => {
	const router = useRouter();

	const activeNavbar = () => {
		document.querySelector('.navigation').classList.toggle('nav-active');
		document.querySelector('nav').classList.toggle('closed');
	};

	useEffect(() => {
		document.querySelector('.navigation').classList.remove('nav-active');
		document.querySelector('nav').classList.remove('closed');
	}, [router]);

	return (
		<nav>
			<div className="toggle-btn" onClick={() => activeNavbar()}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul className="navigation">
				<li>
					<Link legacyBehavior href="/">
						<a
							className={
								router.pathname == '/'
									? 'active nav-link'
									: 'nav-link'
							}>
							Accueil
						</a>
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/about">
						<a
							className={
								router.pathname == '/about'
									? 'active nav-link'
									: 'nav-link'
							}>
							À propos
						</a>
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/portfolio">
						<a
							className={
								router.pathname == '/portfolio'
									? 'active nav-link'
									: 'nav-link'
							}>
							Portfolio
						</a>
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/contact">
						<a
							className={
								router.pathname == '/contact'
									? 'active nav-link'
									: 'nav-link'
							}>
							Contact
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
