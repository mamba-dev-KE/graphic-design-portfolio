import styles from "./contacts.module.css";

const Contacts = () => {
	return (
		<section className={styles.contacts}>
			<div className={styles.container}>
				<h2 className={styles.contacts_title}>Contacts</h2>
				<div className={styles.row}>
					<div className={styles.contacts_text}>
						<h3>Want to transform your vision into an A++ design??</h3>
						<p>Contact me!</p>
					</div>
					<div className={styles.contacts_img}>
						<img
							src="https://blush.design/api/download?shareUri=AzMoqXcn-NQYOXyX&c=Skin_0%7E1fad66&w=800&h=800&fm=png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
