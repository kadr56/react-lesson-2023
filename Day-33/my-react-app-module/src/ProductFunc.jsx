
import { useState } from 'react'
import products from './seed'
import { Rating } from 'react-simple-star-rating'

function ProductFunc(props) {
    // console.log(props)


    const [votes, setVotes] = useState(props.votes)
    const [stars, setStars] = useState(props.stars)

    function handleUpVote(props) {

        setVotes(votes + 1)
        // setVotes(stars + 1)
        if (stars >= 10) {
            setStars(10);
        } else {
            setStars(stars + 1)
        }


        // let newProducts = [];

        // const foundProduct = products.map(product => {
        //     if (product.id == props.id) {
        //         product.votes = product.votes + 1
        //     }
        //     return product
        // })
        // // console.log('votes=' + foundProduct[0].votes)
        // // foundProduct[0].votes++
        // console.log(foundProduct)


    }

    function handleDownVote(props) {
        setVotes(votes - 1)

        if (stars <= 0) {
            setStars(0);
        } else {
            setStars(stars - 1)
        }
    }



    return (

        <div className='card col-8 d-flex flex-row border-0'>
            <img src={props.productImageUrl} className='App-logo' alt="logo" />
            <div className='text'>
                <h4 className='title'>
                    <a onClick={() => handleUpVote(props)}>
                        <i className="bi bi-caret-up-fill"></i>
                    </a>
                    {votes}
                    <a onClick={() => handleDownVote(props)}>
                        <i className="bi bi-caret-down-fill"></i>
                    </a>
                </h4>
                <a href={props.url}> {props.title}</a>
                <p>{props.description}</p>
                <div className='profile'>
                    <p>
                        Submitted by:
                    </p>
                    <img src={props.submitterAvatarUrl}></img>
                </div>
                <Rating
                    initialValue={stars}
                    size={25}
                    iconsCount={10} />
            </div>

            {/* <p> {props.title}</p> */}
        </div>
    )
}

export default ProductFunc