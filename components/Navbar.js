import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
	const router = useRouter();

	return (
		<nav>
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
					<Link legacyBehavior href="/portfolio">
						<a
							className={
								router.pathname == '/portfolio'
									? 'active nav-link'
									: 'nav-link'
							}>
							Projets
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
