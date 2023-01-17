import { Link } from 'react-router-dom'
export default function Index() {

    const aboutPageData = {
        from: "Index",
        message: "Welcome to About page",
        timestamp: Date.now()
    }
    const homePageData = {
        from: "Index",
        message: "Welcome to Home page",
        timestamp: Date.now()
    }


    return (
        <div>
            <h1>Day-44 Dynamic routing</h1>
            <nav>
                <Link to={"/about"} state={aboutPageData}> About Page</Link>
                <Link to={"/home"} state={homePageData}> Home Page</Link>
                <Link to={"/accordion"}> Accordion Page</Link>
                <Link to={"/movies"}> Movies Page</Link>
            </nav>
        </div>
    )
}