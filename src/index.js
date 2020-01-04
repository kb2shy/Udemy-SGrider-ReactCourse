import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                avatar={faker.image.avatar()} 
                name="Sam" 
                text="Great post!" 
                date="01/03/2020"
            />
            <CommentDetail 
                avatar={faker.image.avatar()} 
                name="Jane" 
                text="I'm not a virgin!" 
                date="01/01/2020"
            />
                        <CommentDetail 
                avatar={faker.image.avatar()} 
                name="Raphael" 
                text="Jane's not a virgin!" 
                date="01/03/2020"
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));