import userList from '../data/data.js';
import { useState } from 'react'
export default function User() {
    // let index = 0;
    const [index, setIndex] = useState(0)
    const [memo, setMemo] = useState("");

    let user = userList[index];
    return (
        <div>
            <button onClick={() => {
                setIndex(index + 1)
                setMemo(userList[index + 1].name)
            }}> Next</button>
            <p>{user.name}</p>

            <input type="text" value={memo} />
        </div>
    )
}