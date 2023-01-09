


function ProductFunc(props) {
    console.log(props)

    function handleUpVote(props) {
        console.log("Upvoted")
        // let a = props.votes + 1
        // console.log(a);
        console.log(props.id)
    }


    return (

        <div className='card col-8 d-flex flex-row border-0'>
            <img src={props.productImageUrl} className='App-logo' alt="logo" />
            <div className='text'>
                <h4 className='title'>
                    <a href="#" onClick={() => handleUpVote(props)}>
                        <i className="bi bi-caret-up-fill"></i>
                    </a>
                    {props.votes}
                </h4>
                <a href={props.url}> {props.title}</a>
                <p>{props.description}</p>
                <div className='profile'>
                    <p>
                        Submitted by:
                    </p>
                    <img src={props.submitterAvatarUrl}></img>
                </div>
            </div>

            {/* <p> {props.title}</p> */}
        </div>
    )
}

export default ProductFunc