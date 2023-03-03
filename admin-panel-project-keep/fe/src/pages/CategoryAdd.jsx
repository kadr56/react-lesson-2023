import UsersEditAdd from "../components/UsersEditAdd";
import Typography from "@mui/material/Typography";
import MyBreadCrumbs from "../components/MyBreadCrumbs";
import CategoriesEditAdd from "../components/CategoriesEditAdd copy";

export default function CategoryAdd({ categories, setCategories }) {
  const link = [
    { linkName: "Category", link: "/" },
    { linkName: "Add ", link: "/category/add" },
  ];
  return (
    <div>
      <MyBreadCrumbs link={link} />
      <CategoriesEditAdd
        categories={categories}
        setCategories={setCategories}
      />
    </div>
  );
}
