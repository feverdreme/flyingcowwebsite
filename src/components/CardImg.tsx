import React from 'react';

export interface Props {
    img: string;
    title: string;
    desc: string;
    alt?: string;

    // css
    classes?: string;
};

const CardImg: React.FC<Props> = (props) => {
    let {img, title, desc, alt, classes} = props;
    alt = alt === undefined ? "image" : alt;
    classes = classes !== undefined ? "card " + classes : "card";

    return (
        <div className={classes}>
            <img className="card-img-top" src={img} alt={alt}/>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
            </div>
        </div>
    );
}

export default CardImg;