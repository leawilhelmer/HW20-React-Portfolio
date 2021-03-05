import React from "react";

const styles = {
	card: {
    marginTop: "20px",
		marginBottom: "10px",
    justifyContent: "right",
    flexDirection: "row",
	},
	button: {
		display: "flex",
		justifyContent: "space-between",
		width: "125px",
	},
};

const Card = (props) => {
	return (
		<div className="card" style={styles.card}>
			<img src={props.image} className="card-img-top" alt=''/>
			<div className="card-body">
				<h5 style={styles.color} className="card-title">
					{props.title}
				</h5>
				<p style={styles.color} className="card-text">
					{props.text}
				</p>
				<div style={styles.button}>
					<a href={props.repo} className="btn btn-primary">
						Repo
					</a>
					<a href={props.link} className="btn btn-secondary">
						Link
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;