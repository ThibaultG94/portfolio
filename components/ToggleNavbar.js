import Link from 'next/link';
import { useRouter } from 'next/router';

const ToggleNavbar = () => {
	const router = useRouter();

	const activeNavbar = () => {
		document.querySelector('.toggle-btn').addEventListener('click', () => {
			document.querySelector('.toggle-menu').classList.toggle('toggle');
		});
	};

	return (
		<nav>
			<div className="toggle-navbar">
				<div className="toggle-btn" onClick={() => activeNavbar()}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className="toggle-menu">
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
			</div>
		</nav>
	);
};

export default ToggleNavbar;
