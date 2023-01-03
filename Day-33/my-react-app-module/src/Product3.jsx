import React from "react";


class Product3 extends React.Component {
    render() {
        return (
            <div className='card col-8 d-flex flex-row border-0'>
                <img src='img/image-steel.png' className='App-logo' alt="logo" />
                <div className='text'>
                    <h4 className='title'>
                        <i className="bi bi-caret-up-fill">42</i>

                    </h4>
                    <a href='#'> Tinfoild: Tailored tinfoil hats</a>
                    <p>We already have your measurements and shipping address.</p>
                    <div className='profile'>
                        <p>
                            Submitted by:
                        </p>
                        <img src='img/avatars/helen.jpg'></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product3