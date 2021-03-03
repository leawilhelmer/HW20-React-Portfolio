import React from "react";
import "../About/style.css";
import myImage from "../img/IMG_9882.jpg"

const AboutMe = () => {
    const history = useHistory()
	const handleClick = () => {
		history.push('/Applications')
	}

    return (
		<Wrapper>
			<Container>
				<Row>
					<Column size="md-6">
						<div>
							<h1>About Me:</h1>
							<img style={styles.img} src={myImage} alt="me" />
						</div>
					</Column>
					<Row>
						<Column size="md-8">
							<p style={styles.aboutMe}>
                            Hey, my name is Lea Wilhelmer and I am 21 years old. I'm from Tirol/Austria and I've been living in Los Gatos, California, since April 2019.
								
								.<br></br>I am currently working as an Au Pair (Nanny) and I am also doing a Coding Bootcamp at UC Berkeley Extension. I will be a Full-Stack Web Developer by the end of March and I am hoping I will get a Job as a Web Developer right after. When I'm not coding, I am going for hikes or walks. I also enjoy skiing because I am a ski instructror.
								<br></br>
								
								<p onClick={handleClick}>Check out my{" "}
									<highlight style={{ color: "orangered", textDecoration: "underline" }}>
										Portfolio
									</highlight>
								</p>
							</p>
						</Column>
					</Row>
				</Row>
			</Container>
		</Wrapper>

    )
}

export default AboutMe