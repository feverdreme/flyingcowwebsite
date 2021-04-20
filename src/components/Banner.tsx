import React from 'react';
import Navbar from './Navbar'

export default function Banner() {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="jumbotron pb-0">
                    <div className="row">
                        <div className="col-10">
                            <h1 className="mw-50">Flying Cow Organics</h1>
                            <p className="lead mw-50">Adipisicing pariatur elit sunt officia aute laborum.</p>
                        </div>

                        <div className="col-2 image-container">
                            <img src="./logo.jpg" className="rounded-circle" alt="flying cow logo"/>
                        </div>
                    </div>

                    <div className="row">
                        <Navbar />
                    </div>
                </div>
            </div>
        </>
    );
}
