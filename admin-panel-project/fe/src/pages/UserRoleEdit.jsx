import UserRoleEditAdd from "../components/UserRoleEditAdd";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import MyBreadCrumbs from "../components/MyBreadCrumbs";

export default function UserEdit({ users, setUsers }) {
  const link = [
    { linkName: "User", link: "/" },
    { linkName: "User Role List ", link: "/userRole/list" },
    { linkName: "Edit User Role ", link: "/userRole/edit" },
  ];

  const data = useParams();

  return (
    <div>
      <MyBreadCrumbs link={link} />
      <UserRoleEditAdd id={data.id} users={users} setUsers={setUsers} />
    </div>
  );
}
