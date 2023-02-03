import UsersEditAdd from "../components/UsersEditAdd";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
// import UsersTable from "../components/UsersTable";

export default function UserEdit({ users, setUsers }) {
  // console.log("Inside UserEdit component ---")
  // console.log(users, "User")

  const data = useParams();
  // console.log(data);
  // console.log(users, "users in user EDIT");
  return (
    <div>
      {/* <Typography variant="h4" color="initial"></Typography> */}
      <UsersEditAdd id={data.id} users={users} setUsers={setUsers} />
    </div>
  );
}
