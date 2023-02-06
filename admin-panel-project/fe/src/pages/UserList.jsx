import UsersTable from "../components/UsersTable";
import MyBreadCrumbs from "../components/MyBreadCrumbs";

export default function UserList({ users, setUsers }) {
  const link = [
    { linkName: "User", link: "/" },
    { linkName: "User List ", link: "/user/list" },
  ];
  return (
    <div>
      <MyBreadCrumbs link={link} />

      <h1>Users List</h1>
      <UsersTable users={users} setUsers={setUsers} />
    </div>
  );
}
