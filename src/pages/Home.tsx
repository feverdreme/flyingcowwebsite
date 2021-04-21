import CardImg from 'components/CardImg';
import React from 'react';

import Brandon from "images/brandon.png"

const Home = () => {
    return (
        <>
            <div className="container-fluid p-3" style={{background: "#009cd0"}}>
                <p className="h1">A local-owned business that delivers dairy right to your door</p>
                <p className="lead">Look at our satisfied customers</p>
            </div>

            <div className="row p-3 pl-5 pr-5">
                <div className="col-4">
                    <CardImg 
                        title="Jack Litchman"
                        desc="Incididunt duis in dolore ad in. Velit voluptate nostrud dolore aliqua in. Ipsum reprehenderit velit eu adipisicing in. Sunt id consequat magna veniam consequat eiusmod ullamco ipsum magna sint do eiusmod fugiat. Excepteur labore sunt enim nostrud qui occaecat aliquip. Eiusmod consectetur dolor labore id anim. Officia sunt velit voluptate ad do."
                        img={Brandon}
                        classes="mb-3"
                    />

                    <CardImg 
                        title="Jake Litchman"
                        desc="Occaecat ex commodo cupidatat nostrud consectetur Lorem anim consectetur."
                        img={Brandon}
                    />
                </div>

                <div className="col-4">
                    <CardImg 
                        title="Jack Litchman"
                        desc="Amet fugiat non consequat voluptate aute ipsum aute est dolor ex culpa."
                        img={Brandon}
                        classes="mb-3"
                    />

                    <CardImg 
                        title="Jake Litchman"
                        desc="Enim ullamco id pariatur anim in ut ex labore aliquip irure. Eiusmod minim commodo do Lorem laboris irure nulla nulla. Ea consectetur minim cupidatat elit sint Lorem amet deserunt duis do sit. Aute est elit amet irure aute."
                        img={Brandon}
                    />
                </div>

                <div className="col-4">
                    <CardImg 
                        title="Jack Litchman"
                        desc="Consectetur id nulla fugiat nostrud. Sint cillum velit non dolor dolore ex pariatur pariatur occaecat voluptate do enim deserunt aute. Ut Lorem adipisicing fugiat consequat cupidatat laboris dolor deserunt ipsum laboris sunt laborum sit. Nisi cupidatat nulla nisi irure sint qui cupidatat aliquip Lorem esse do eu. Tempor laborum Lorem deserunt consequat sint.

Do excepteur aliquip veniam ullamco et. Aute non aliqua sint cillum consequat nisi ad reprehenderit. Labore officia aute magna labore ea ex. Fugiat irure ea amet excepteur nostrud mollit. Elit laboris magna nisi amet minim reprehenderit. Est ut laborum nisi deserunt non duis ullamco laboris reprehenderit excepteur ullamco cupidatat eu.

Fugiat ullamco tempor velit minim cillum sit tempor consequat Lorem occaecat ullamco. Nisi veniam sunt aliquip ullamco id. Pariatur voluptate veniam non nisi est nisi est nostrud deserunt non ea anim officia cupidatat. Do enim nulla in laborum occaecat ea laboris excepteur reprehenderit consequat.

Mollit nostrud sunt voluptate occaecat sit dolore est in. Mollit Lorem consequat ipsum commodo occaecat occaecat fugiat aliqua laborum aute do aliqua incididunt laborum. Est in dolore et nulla voluptate. Sint aute excepteur qui cupidatat. Commodo est officia ad nisi ut do velit cupidatat quis culpa exercitation."
                        img={Brandon}
                        classes="mb-3"
                    />

                    <CardImg 
                        title="Jake Litchman"
                        desc="Do irure ut sunt aliqua culpa esse elit aliquip aute. Esse id cupidatat ullamco do nulla dolor qui laboris magna ipsum. Eiusmod et laborum occaecat culpa adipisicing ipsum pariatur ea sint."
                        img={Brandon}
                    />
                </div>
            </div>
        </>
    );
}

export default Home;