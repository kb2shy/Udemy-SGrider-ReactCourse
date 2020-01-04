import React from 'react';

const CommentDetail = (props) => {
    const { name, date, text, avatar} = props;
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {name}
                    </a>
                <div className="metadata">
                    <span className="date">{date}</span>
                </div>
    <div className="text">{text}</div>
            </div>
        </div>
    )
}

export default CommentDetail;