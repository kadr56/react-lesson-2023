import React from "react";


class Product1 extends React.Component {
    render() {
        return (
            <div className='card col-8 d-flex flex-row border-0'>
                <img src={this.props.productImageUrl} className='App-logo' alt="logo" />
                <div className='text'>
                    <h4 className='title'>
                        <i className="bi bi-caret-up-fill"></i>
                        {this.props.votes}

                    </h4>
                    <a href={this.props.url}> {this.props.title}</a>
                    <p>{this.props.description}</p>
                    <div className='profile'>
                        <p>
                            Submitted by:
                        </p>
                        <img src={this.props.submitterAvatarUrl}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product1