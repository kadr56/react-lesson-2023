import UsersEditAdd from "../components/UsersEditAdd";
import Typography from "@mui/material/Typography";
// import UsersTable from "../components/UsersTable";

export default function UserAdd({users, setUsers}) {
  return (
    <div>
      {/* <Typography variant="h4" color="initial"></Typography> */}
      <UsersEditAdd users={users} setUsers={setUsers} />
    </div>
  );
}
