import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const URL = "http://localhost:8080/users";
  const [users, setUsers] = useState([]);
  const [isOpenForm, setIsOpenForm] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    // fetch a data from localhost: 8080/users
    const FETCHED_DATA = await fetch(URL); //reponse
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: {{id: ....}}}
    console.log(FETCHED_JSON.data, "FETCHED_JSON.data");
    setUsers(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
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
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
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

  async function handleEdit(id) {
    setIsOpenForm(true);
  }

  async function handleSave() {}

  return (
    <div className="App" onSubmit={handleSubmit}>
      <h1>Day-52 - NodeJS - FS module</h1>
      <h3>Create user form</h3>
      <form action="">
        <label htmlFor="">
          User Name: <input type="text" name="username" />
        </label>
        <br />
        <label htmlFor="">
          Age: <input type="text" name="age" />
        </label>
        <br />
        <button>Submit</button>
      </form>

      <h3>Users List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index} className="user-list">
              {isOpenForm ? (
                <div>
                  <label htmlFor="">
                    User Name:
                    <input
                      type="text"
                      name="username"
                      placeholder={user.username}
                    />
                  </label>
                  <label htmlFor="">
                    Age: <input type="text" name="age" placeholder={user.age} />
                  </label>
                </div>
              ) : (
                <p>
                  {user.username} : {user.age}
                </p>
              )}

              <div>
                {isOpenForm ? (
                  <button onClick={() => handleSave(user.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                )}

                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
