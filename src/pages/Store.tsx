import React from 'react'
import Shop from 'components/Shop'

const Store = () => {
    return (
        <div>
            <div className="container">
                <div className="jumbotron pb-2 pt-2">
                    <h2>Browse our amazing shop with dairy</h2>
                    <p className="lead">All delivered right to your door!</p>
                </div>
            </div>

            <Shop />
        </div>
    )
}

export default Store;