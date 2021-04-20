import React from 'react';
import CardImg from '../components/CardImg'
import CardText, {Props as CardTextProps} from '../components/CardText'
import Brandon from '../brandon.png'

const SideTexts: CardTextProps[] = [
    {
        title: "Info 1",
        subtitle: "Id voluptate cillum magna cupidatat culpa.",
        desc: "Anim occaecat ex sit duis excepteur nostrud tempor."
    },
    {
        title: "Info 2",
        subtitle: "Id voluptate cillum magna cupidatat culpa.",
        desc: "Anim occaecat ex sit duis excepteur nostrud tempor."
    },
    {
        title: "Info 3",
        subtitle: "Id voluptate cillum magna cupidatat culpa.",
        desc: "Anim occaecat ex sit duis excepteur nostrud tempor."
    }
];

const Home = () => {
    return (
        <>
            {/* Cards */}
            <div className="row m-3">
                <div className="col">
                    <CardImg
                        img={Brandon} 
                        title="Info 1" 
                        desc="Duis sit adipisicing consectetur ut ex exercitation irure nostrud consequat nostrud." 
                    />
                </div>

                <div className="col">
                    {
                        SideTexts.map(({title, subtitle, desc}) => (
                            <CardText title={title} subtitle={subtitle} desc={desc} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Home;