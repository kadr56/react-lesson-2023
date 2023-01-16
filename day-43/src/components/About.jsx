import { Outlet } from "react-router-dom"

export default function About() {
    return (
        <div>
            <p>This is about page</p>
            <a href="/about/usukhuu"> Usukhuu</a>
            <a href="/about/khangai"> Khangai</a>
            <Outlet />
        </div>
    )

}