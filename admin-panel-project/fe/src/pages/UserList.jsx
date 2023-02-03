import UsersTable from "../components/UsersTable";

export default function UserList({ users, setUsers }) {
  return (
    <div>
      <h1>Users List</h1>
      <UsersTable users={users} setUsers={setUsers} />
    </div>
  );
}
