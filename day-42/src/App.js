
import './App.css';
import { useState } from "react";


function App() {
  const [users, setUsers] = useState([]);


  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [password, setPassword] = useState("");


  function handleRegister(event) {
    event.preventDefault()
    // console.log(event.target.firstName.value)
    // console.log(event.target.lastName.value)
    // console.log(event.target.password.value)

    const user = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      password: event.target.password.value,
    }

    setUsers([...users, user])
    console.log(users)
  }

  return (
    <div className="App">
      <form action="submit" className='myForms' onSubmit={handleRegister}>
        <div>
          <label>First Name: </label>
          <input type="text" name='firstName' />
        </div>
        <div>
          <label >Last Name: </label>
          <input type="text" name='lastName' />
        </div>

        <div>
          <label  >Password: </label>
          <input type="password" name='password' />
        </div>

        <div>
          <label>Confirm Password: </label>
          <input type="password" />
        </div>

        <button>Register</button>
      </form>

      <h2>Users preview</h2>
      {users.map((u, index) => {
        return (
          <div key={index}>
            <div>
              FirstName: {u.firstName}
            </div>
            <div>
              LastName: {u.lastName}
            </div>
            <br />
          </div>
        )
      })}

    </div>
  );
}

export default App;
