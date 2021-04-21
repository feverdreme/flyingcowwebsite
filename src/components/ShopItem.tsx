import React from 'react'

type ShopItemType = {
    name: string;
    desc: string;
    price: string;
    img: string;
};

const ShopItem: React.FC<ShopItemType> = (props) => {
    let {name, desc, price, img} = props;

    return (
        <div className="card">
            <img className="card-img-top" src={img} alt="Item"/>
            
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{desc}</h6>
                <p className="card-text">${price}</p>
            </div>
        </div>
    )
}

export default ShopItem;