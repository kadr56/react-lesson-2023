import React from "react";


class Product4 extends React.Component {
    render() {
        return (
            <div className='card col-8 d-flex flex-row border-0'>
                <img src='img/image-rose.png' className='App-logo' alt="logo" />
                <div className='text'>
                    <h4 className='title'>
                        <i className="bi bi-caret-up-fill">42</i>
                    </h4>
                    <a href='#'> Supermajority: The Fantasy Congress League</a>
                    <p>Earn points when your favorite polititian pass legislation.</p>
                    <div className='profile'>
                        <p>
                            Submitted by:
                        </p>
                        <img src='img/avatars/molly.png'></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product4