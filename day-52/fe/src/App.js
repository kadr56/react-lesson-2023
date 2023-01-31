import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const URL = "http://localhost:8080/users";
  const newUser = {
    id: "",
    username: "",
    age: "",
  };
  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    // fetch a data from localhost: 8080/users
    const FETCHED_DATA = await fetch(URL); //reponse
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: {{id: ....}}}
    setUsers(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isUpdate) {
      const postData = {
        username: e.target.username.value,
        age: e.target.age.value,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };

      const FETCHED_DATA = await fetch(URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      setUsers(FETCHED_JSON.data);
    } else {
      console.log("sending update");
      const putData = {
        id: currentUser.id,
        username: currentUser.username,
        age: currentUser.age,
      };
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(putData),
      };

      const FETCHED_DATA = await fetch(URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      setUsers(FETCHED_JSON.data);
      setIsUpdate(false);
      setCurrentUser(newUser);
    }
  }

  async function handleDelete(id) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  async function handleEdit(userId) {
    setIsUpdate(true);

    const filteredUser = users.filter((user) => user.id === userId)[0];
    console.log(filteredUser);
    if (filteredUser) {
      setCurrentUser({
        id: filteredUser.id,
        age: filteredUser.age,
        username: filteredUser.username,
      });
    }
  }

  function handleUserName(e) {
    setCurrentUser({ ...currentUser, username: e.target.value });
  }

  function handleUserAge(e) {
    setCurrentUser({ ...currentUser, age: e.target.value });
  }

  return (
    <div className="App" onSubmit={handleSubmit}>
      <h1>Day-52 - NodeJS - FS module</h1>
      <h3>Create user form</h3>
      <form action="">
        <label htmlFor="">
          User Name:{" "}
          <input
            type="text"
            name="username"
            value={currentUser.username}
            onChange={handleUserName}
          />
        </label>
        <br />
        <label htmlFor="">
          Age:{" "}
          <input
            type="text"
            name="age"
            value={currentUser.age}
            onChange={handleUserAge}
          />
        </label>
        <br />
        <button>{isUpdate ? "Update" : "Submit"}</button>
      </form>

      <h3>Users List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index} className="user-list">
              <p>
                {user.username} : {user.age}
              </p>

              <div>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
