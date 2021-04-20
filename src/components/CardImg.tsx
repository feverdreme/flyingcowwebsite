import React from 'react';

export interface Props {
    img: string;
    title: string;
    desc: string;
    alt?: string;
};

const CardImg: React.FC<Props> = (props) => {
    let {img, title, desc, alt} = props;
    alt = alt === undefined ? "image" : alt;

    return (
        <div className="card">
            <img className="card-img-top" src={img} alt={alt}/>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    );
}

export default CardImg;