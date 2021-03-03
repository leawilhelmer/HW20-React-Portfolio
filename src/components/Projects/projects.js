import React from "react";
import "../Projects/style.css";
import Project2 from "../img/Screenshot (56).png"
import NoteTaker from "../img/Screenshot 2021-02-04 100650.png"

const Application = () => {
	return (
    
		<Wrapper>
			<Container>
                <h1 className='text-center' id='app'>Applications</h1>
                <Row>
                    <Column size='md-6'>
                        <Card
                        title='Class Heroes'
                        image={Project2}
                        text=""
                        repo="https://github.com/leawilhelmer/ClassMonsters-X-Force" 
                        link='https://class-heroes-project2.herokuapp.com/'
                        >
                        </Card>
                    </Column>
                    <Column size='md-6'>
                        <Card
                        title='Workout Tracker'
                        image="https://media.giphy.com/media/79Iu9yjG1JFj6PA1RN/giphy.gif"
                        text=''
                        repo="https://github.com/leawilhelmer/HW15-Workout-Tracker.git"
                        link="https://arcane-fortress-52556.herokuapp.com/?id=6023768ef45a960015bbae85"
                        >
                        </Card>
                    </Column>
                </Row>
                <br/>
                <Row>
                    <Column size='md-6'>
                        <Card
                        title='Note Taker'
                        image={NoteTaker}
                        text=''
                        repo="https://github.com/leawilhelmer/HW-11-Note-Taker.git"
                        link="https://github.com/leawilhelmer/HW-11-Note-Taker.git"
                        ></Card>
                    </Column>
                    <br />
                </Row>
                <br/>
                <Row>
                </Row>
            </Container>
		</Wrapper>
        
	);
};

export default Application;