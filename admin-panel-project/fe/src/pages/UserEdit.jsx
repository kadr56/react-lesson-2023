import UsersEditAdd from "../components/UsersEditAdd";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import MyBreadCrumbs from "../components/MyBreadCrumbs";

export default function UserEdit({ users, setUsers }) {
  const link = [
    { linkName: "User", link: "/" },
    { linkName: "User List ", link: "/user/list" },
    { linkName: "Edit User ", link: "/user/edit" },
  ];

  const data = useParams();

  return (
    <div>
      <MyBreadCrumbs link={link} />
      <UsersEditAdd id={data.id} users={users} setUsers={setUsers} />
    </div>
  );
}
