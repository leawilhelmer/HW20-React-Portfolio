import React from "react";
import "../Contact/style.css";
import Row from "../Row/row";
import Column from "../Column/column";
import Resume from "../Resume/Lea's Resume.pdf"
import Wrapper from "../Wrapper/wrapper";
import Container from "../Container/container"

const Contact = () => {

    return (
		<Wrapper>
				<Container>
						<h1 className='text-center' id='app'>Contact Me</h1>
					<Row>
						<Column size="md-8">
							<p>
                            Phone Number: +1(408) 596-6644
							</p>
							<p>
                            Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=leawilhelmer@gmail.com">leawilhelmer@gmail.com</a>
							</p>

							<Row>
							<Column size="md-4">
								<a
									href={Resume}
									download=""
									id="updateResume"
								>
									<i className="fas fa-file-download"></i>
									<br></br>
									<span>Resume</span>{" "}
								</a>
								<br></br>
							</Column>
							<Column size="md-4">
								<a href="https://www.linkedin.com/in/lea-wilhelmer-0101">
									<i className="fab fa-linkedin">
										{" "}
									</i>
									<br></br>
									<span> LinkedIn</span>
								</a>
								<br></br>
							</Column>
							<Column size="md-4">
								<a href="https://github.com/leawilhelmer" class="links">
									<i className="fab fa-github-square"></i>
									<br></br>
									<span> GitHub</span>
								</a>
							</Column>
						</Row>

						</Column>
					</Row>
				</Container>
		</Wrapper>

    )
}

export default Contact