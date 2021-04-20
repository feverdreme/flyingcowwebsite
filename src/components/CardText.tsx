import React from 'react';

export interface Props {
    title: string;
    subtitle: string;
    desc: string;
};

const CardText: React.FC<Props> = (props) => {
    let {title, subtitle, desc} = props;

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className="card-text">{desc}</p>
                {/* <button className="card-link">Card link</button>
                <button className="card-link">Another link</button> */}
            </div>
        </div>
    );
}

export default CardText;