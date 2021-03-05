import React from "react";
import "../Projects/style.css";
import Project2 from "../img/student.gif";
import Wrapper from "../Wrapper/wrapper";
import Container from "../Container/container";
import Row from "../Row/row";
import Column from "../Column/column";
import Card from "../Card/card"

const Application = () => {
	return (
    
		<Wrapper>
			<Container>
                <h1 className='text-center' id='app'>My Projects</h1>
                <Row>
                    <Column size='md-10'>
                        <Card
                        title='Class Heroes'
                        image={Project2}
                        text=""
                        repo="https://github.com/leawilhelmer/ClassMonsters-X-Force" 
                        link='https://class-heroes-project2.herokuapp.com/'
                        >
                        </Card>
                    </Column>
                    <Column size='md-10'>
                        <Card
                        title='Workout Tracker'
                        image="https://media.giphy.com/media/strlHiqkorAhASP0fZ/giphy.gif"
                        text=''
                        repo="https://github.com/leawilhelmer/HW15-Workout-Tracker.git"
                        link="https://arcane-fortress-52556.herokuapp.com/?id=6023768ef45a960015bbae85"
                        >
                        </Card>
                    </Column>
                </Row>
                <br/>
                <Row>
                    <Column size='md-10'>
                        <Card
                        title='Note Taker'
                        image="https://media.giphy.com/media/IhxzX4ZKfiUWRcSHA5/giphy.gif"
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