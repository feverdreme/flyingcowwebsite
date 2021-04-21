import React from 'react';
import ShopItem from 'components/ShopItem';

import Image1 from 'images/brandon.png'

const Shop = () => {
    return (
        <>
            {/* Grid for Shop Items */}
            <div className="pl-3 pr-3 pb-3">
                <div className="row">
                    <div className="col">
                        <ShopItem 
                            name="Item1"
                            desc="Quis voluptate duis fugiat commodo incididunt eu consequat elit nulla adipisicing quis."
                            price="13.90"
                            img={Image1}
                        />
                    </div>

                    <div className="col">
                        <ShopItem 
                            name="Item2"
                            desc="Adipisicing in culpa ad tempor velit tempor consequat qui sit nulla."
                            price="4.50"
                            img={Image1}
                        />
                    </div>

                    <div className="col">
                        <ShopItem 
                            name="Item3"
                            desc="Minim adipisicing anim laboris magna."
                            price="1.20"
                            img={Image1}
                        />
                    </div>

                    <div className="col">
                        <ShopItem 
                            name="Item4"
                            desc="Minim adipisicing anim laboris magna."
                            price="1.20"
                            img={Image1}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;