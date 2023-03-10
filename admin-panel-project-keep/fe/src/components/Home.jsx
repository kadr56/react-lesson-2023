import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import SendIcon from "@mui/icons-material/Send";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import DraftsIcon from "@mui/icons-material/Drafts";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import UserList from "../pages/UserList";
import UserAdd from "../pages/UserAdd";
import UserEdit from "../pages/UserEdit";
import { useState } from "react";
import ProductList from "../pages/ProductList";
import ProductAdd from "../pages/ProductAdd";
import ProductEdit from "../pages/ProductEdit";
import CategoryList from "../pages/CategoryList";
import CategoryAdd from "../pages/CategoryAdd";
import CategoryEdit from "../pages/CategoryEdit";

const drawerWidth = 240;

export default function Home() {
  const [open, setOpen] = React.useState(true);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>

            {/* Ecommerce */}
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="E-commerce" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} to="/product/list">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Product List" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} to="/product/add">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Product Add" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Category */}
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Category" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} to="/category/list">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Category List" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} to="/category/add">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Category Add" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Users */}
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="User" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {/* <Link to={"/users"}> */}
                <ListItemButton sx={{ pl: 4 }} to="/user/list">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="User list" />
                </ListItemButton>
                {/* </Link> */}

                <ListItemButton sx={{ pl: 4 }} to="/user/add">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="User Add" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Documentation */}
            <ListItemButton>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Documentation" />
            </ListItemButton>
          </List>

          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Routes>
          {/* user */}
          <Route
            path="/user/list"
            element={<UserList users={users} setUsers={setUsers} />}
          ></Route>
          <Route
            path="/user/add"
            element={<UserAdd users={users} setUsers={setUsers} />}
          ></Route>
          <Route
            path="/user/edit/:id"
            element={<UserEdit users={users} setUsers={setUsers} />}
          ></Route>

          {/* category */}
          <Route
            path="/category/list"
            element={
              <CategoryList
                categories={categories}
                setCategories={setCategories}
              />
            }
          ></Route>
          <Route
            path="/category/add"
            element={
              <CategoryAdd
                categories={categories}
                setCategories={setCategories}
              />
            }
          ></Route>

          <Route
            path="/category/edit/:id"
            element={
              <CategoryEdit
                categories={categories}
                setCategories={setCategories}
              />
            }
          ></Route>

          {/* Product */}
          <Route
            path="/product/list"
            element={
              <ProductList products={products} setProducts={setProducts} />
            }
          ></Route>
          <Route
            path="/product/add"
            element={
              <ProductAdd products={products} setProducts={setProducts} />
            }
          ></Route>

          <Route
            path="/product/edit/:id"
            element={
              <ProductEdit products={products} setProducts={setProducts} />
            }
          ></Route>

          {/* <Route path="/" element={<SideBar />} /> */}
        </Routes>
      </Box>
    </Box>
  );
}
