import React from "react";

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card col-8 d-flex flex-row border-0'>
                <img src="../Day-33/my-react-app-module/src/img/image-aqua.png" className='App-logo' alt="logo" />
                <div className='text'>
                    <h4 className='title'>
                        <i className="bi bi-caret-up-fill">55</i>

                    </h4>
                    <a href='#'> Haught or Naught</a>
                    <p>High-minded or absent-minded? You decide.</p>
                    <div className='profile'>
                        <p>
                            Submitted by:
                        </p>
                        <img src={profileImg}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default HelloWorld


