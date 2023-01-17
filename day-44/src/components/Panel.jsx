import { useState } from 'react'
export default function Panel({ title, children }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="container">
            <div className="panel">
                <h3>{title}</h3>
                {isActive ?
                    <div>
                        <p> {children}</p>
                        <button onClick={() => setIsActive(false)}> Hide</button>
                    </div>
                    :
                    <button onClick={() => setIsActive(true)}> Show</button>}
            </div>
        </div>

    )
}