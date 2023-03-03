import express from "express";
const user_role_router = express.Router();

import {
  addUserRole,
  getUserRole,
  deleteUserRole,
  updateUserRole,
} from "../services/user-role-services.js";

// Get user_role
user_role_router.get("/userRole", async (request, response) => {
  const result = await getUserRole();
  console.log(result);
  response.status(200).send(result);
});

// Insert user_role
user_role_router.post("/userRole", async (request, response) => {
  const { roleName } = request.body;
  const result = await addUserRole(roleName);
  console.log(result);
  response.status(200).send(result);
});

// Update user_role
user_role_router.put("/userRole", async (request, response) => {
  const body = request.body;
  console.log(body);
  const result = await updateUserRole(body.id, body.roleName);
  console.log(result);
  response.status(200).send(result);
});

// Delete user_role
user_role_router.delete("/userRole", async (request, response) => {
  const body = request.body;
  console.log(body);
  const result = await deleteUserRole(body.id);
  console.log(result);
  response.status(200).send(result);
});

export default user_role_router;
