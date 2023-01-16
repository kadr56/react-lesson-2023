
import { useState } from 'react'
export default function FeedbackForm() {

    const [text, setText] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault()
        setIsSending(true)
        await setMessage(text)
        setIsSending(false)
        setIsSent(true)
    }

    // if (isSent) {
    //   return <h1>Thanks for the feedback</h1>
    // }

    function setMessage(text) {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        });
    }

    return (

        isSent ?
            <h1>Thanks for the feedback</h1>
            :
            <div className="App">
                <h1>Day-43 - React Routers</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <p>  Та текстээ оруулна уу</p>

                    <textarea name='text' value={text} disabled={isSending} onChange={e => setText(e.target.value)} >

                    </textarea>

                    <br />
                    <button>Send</button>
                    {isSending && <p> Sending ....</p>}

                </form>
            </div>
    );
}
