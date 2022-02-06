import styles from "./projects.module.css";

const Projects = () => {
	return (
		<section className={styles.projects}>
			<div className={styles.container}>
				<h2 className={styles.projects_title}>Projects</h2>
				<div className={styles.row}>
					<article className={styles.project}>
						<img
							src="https://images.unsplash.com/photo-1580394640019-00d34094ae13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							alt=""
						/>
						<p>Project Name</p>
					</article>
					<article className={styles.project}>
						<img
							src="https://images.unsplash.com/photo-1585532280453-56497fa88bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							alt=""
						/>
						<p>Project Name</p>
					</article>
					<article className={styles.project}>
						<img
							src="https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
							alt=""
						/>
						<p>Project Name</p>
					</article>
					<article className={styles.project}>
						<img
							src="https://images.unsplash.com/photo-1611853904829-6d0f4034ce2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							alt=""
						/>
						<p>Project Name</p>
					</article>
					<article className={styles.project}>
						<img
							src="https://images.unsplash.com/photo-1592670129766-ed2d2a1de098?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							alt=""
						/>
						<p>Project Name</p>
					</article>
					<article className={styles.project}>
						<img
							src="https://images.unsplash.com/photo-1598403531581-5c4940efd249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							alt=""
						/>
						<p>Project Name</p>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Projects;
