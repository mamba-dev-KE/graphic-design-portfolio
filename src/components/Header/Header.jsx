import { useState } from "react";
import styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const navStyles = {
		transform: "translateX(-100%)",
	};

	const iconStyles = {
		fontSize: "3.5rem",
		cursor: "pointer",
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<span className={styles.logo}>Dennizz</span>
				<nav className={styles.nav} style={isOpen ? navStyles : null}>
					<ul className={styles.nav_list}>
						<li className={styles.nav_list_item}>Projects</li>
						<li className={styles.nav_list_item}>About</li>
						<li className={styles.nav_list_item}>Contact</li>
					</ul>
				</nav>
				<div className={styles.icon_container} onClick={handleClick}>
					{!isOpen ? (
						<MenuIcon style={iconStyles} />
					) : (
						<CloseIcon className={styles.close_icon} style={iconStyles} />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
