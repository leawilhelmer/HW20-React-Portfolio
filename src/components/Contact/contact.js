import React from "react";
import "../Contact/style.css";

const Contact = () => {
    const history = useHistory()
	const handleClick = () => {
		history.push('/Applications')
	}

    return (
				<Row>
					<Column size="md-6">
						<div>
							<h1>Contact Me</h1>
						</div>
					</Column>
					<Row>
						<Column size="md-8">
							<p style={styles.Contact}>
                            Phone Number: +1 (408) 596-6644
                            Email:<a href="https://mail.google.com/mail/?view=cm&fs=1&to=leawilhelmer@gmail.com">leawilhelmer@gmail.com</a>

							</p>
						</Column>
					</Row>
				</Row>

    )
}

export default AboutMe