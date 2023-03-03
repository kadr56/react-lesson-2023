import UserRoleTable from "../components/UserRoleTable";
import MyBreadCrumbs from "../components/MyBreadCrumbs";

export default function UserRoleList({ userRole, setUserRole }) {
  const link = [
    { linkName: "User Role", link: "/" },
    { linkName: "User Role List ", link: "/userRole/list" },
  ];
  return (
    <div>
      <MyBreadCrumbs link={link} />

      <h1>User Role List</h1>
      <UserRoleTable userRole={userRole} setUserRole={setUserRole} />
    </div>
  );
}
