import { useState } from "react";
import styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<span className={styles.logo}>Dennizz</span>
				<nav className={styles.nav}>
					<ul className={styles.nav_list}>
						<li className={styles.nav_list_item}>Projects</li>
						<li className={styles.nav_list_item}>About</li>
						<li className={styles.nav_list_item}>Contact</li>
					</ul>
				</nav>
				<MenuIcon
					onClick={handleClick}
					className={styles.burger_icon}
					style={{ fontSize: "3.5rem" }}
				/>
			</div>
		</header>
	);
};

export default Header;
