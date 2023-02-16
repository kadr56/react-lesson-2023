import UsersEditAdd from "../components/UsersEditAdd";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import MyBreadCrumbs from "../components/MyBreadCrumbs";
import CategoriesEditAdd from "../components/CategoriesEditAdd copy";

export default function CategoryEdit({ categories, setCategories }) {
  const data = useParams();
  const link = [
    { linkName: "Categories", link: "/" },
    { linkName: "Category List ", link: "/category/list" },
    { linkName: "Category Edit ", link: "/category/edit" },
  ];

  return (
    <div>
      <MyBreadCrumbs link={link} />
      <CategoriesEditAdd
        id={data.id}
        categories={categories}
        setCategories={setCategories}
      />
    </div>
  );
}
