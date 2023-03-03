import UserRoleEditAdd from "../components/UserRoleEditAdd";
import Typography from "@mui/material/Typography";
import MyBreadCrumbs from "../components/MyBreadCrumbs";

export default function UserAdd({ users, setUsers }) {
  const link = [
    { linkName: "User", link: "/" },
    { linkName: "Add ", link: "/userRole/add" },
  ];
  return (
    <div>
      <MyBreadCrumbs link={link} />
      <UserRoleEditAdd users={users} setUsers={setUsers} />
    </div>
  );
}
