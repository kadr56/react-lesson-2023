export default function Login() {
    return (
        <div>
            <h1>It is login page</h1>
            <form>
                <label htmlFor="email"> Email:</label>
                <input type="email" name="email" />
                <br></br>
                <label htmlFor="password">Password:</label>
                <input name="password" type="password" />
                <br></br>
                <button>Sign In</button>
            </form>
        </div>
    )
}