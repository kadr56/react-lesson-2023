import UsersEditAdd from "../components/UsersEditAdd";
import Typography from "@mui/material/Typography";
import MyBreadCrumbs from "../components/MyBreadCrumbs";

export default function UserAdd({ users, setUsers }) {
  const link = [
    { linkName: "User", link: "/" },
    { linkName: "Add ", link: "/user/add" },
  ];
  return (
    <div>
      <MyBreadCrumbs link={link} />
      <UsersEditAdd users={users} setUsers={setUsers} />
    </div>
  );
}
