export default function Register() {
    return (
        <div>
            <h1>It is Register page</h1>
            <form>
                <label htmlFor="email"> Email:</label>
                <input type="email" name="email" />
                <br></br>
                <label htmlFor="firstname"> Firstname:</label>
                <input type="text" name="firstname" />
                <br></br>
                <label htmlFor="lastname"> Lastname:</label>
                <input type="text" name="lastname" />
                <br></br>
                <label htmlFor="password">Password:</label>
                <input name="password" type="password" />
                <br></br>
                <label htmlFor="password">Confirm Password:</label>
                <input name="password" type="password" />
                <br></br>
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}