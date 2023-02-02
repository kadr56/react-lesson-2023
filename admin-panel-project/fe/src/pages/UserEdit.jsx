import UsersEditAdd from "../components/UsersEditAdd";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
// import UsersTable from "../components/UsersTable";

export default function UserEdit() {
  const data = useParams();
  console.log(data);
  return (
    <div>
      {/* <Typography variant="h4" color="initial"></Typography> */}
      <UsersEditAdd id={data.id} />
    </div>
  );
}
