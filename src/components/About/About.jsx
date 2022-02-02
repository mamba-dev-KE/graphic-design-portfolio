import styles from "./about.module.css";

const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.row}>
				<img
					className={styles.about_img}
					src="https://images.unsplash.com/photo-1622299701772-dcad96233a79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
					alt=""
				/>
				<div className={styles.intro}>
					<h1 className={styles.hello}>Hi, I'm Dennis</h1>
					<p className={styles.about_text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
						quisquam qui reprehenderit dolorem facilis ad voluptate amet
						asperiores accusantium tempora quae facere enim ipsum quos non,
						expedita recusandae harum, rerum nobis quod sint nesciunt natus
						aliquid officia? Nostrum eligendi, soluta harum architecto rem
						veritatis iste corrupti facere modi, sint quibusdam!
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
