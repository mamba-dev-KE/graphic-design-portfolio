import styles from "./projects.module.css";

const Projects = () => {
	return (
		<section className={styles.projects}>
			<h1 className={styles.projects_title}>My Projects</h1>
			<div className={styles.row}>
				<article className={styles.project}>
					<img src="" alt="" />
					<p>Project Name</p>
				</article>
				<article className={styles.project}>
					<img src="" alt="" />
					<p>Project Name</p>
				</article>
				<article className={styles.project}>
					<img src="" alt="" />
					<p>Project Name</p>
				</article>
				<article className={styles.project}>
					<img src="" alt="" />
					<p>Project Name</p>
				</article>
				<article className={styles.project}>
					<img src="" alt="" />
					<p>Project Name</p>
				</article>
				<article className={styles.project}>
					<img src="" alt="" />
					<p>Project Name</p>
				</article>
			</div>
		</section>
	);
};

export default Projects;
