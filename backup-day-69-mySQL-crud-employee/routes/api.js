import express from "express";
const emp_router = express.Router();
import {
  fireEmployee,
  getEmployees,
  getMaxNo,
  hireEmployee,
  updateEmployee,
} from "../services/employee-services.js";

import { getPopularCategories } from "../services/category-services.js.js";

emp_router.get("/employees", async (request, response) => {
  const result = await getEmployees();
  console.log(result);
  response.status(200).send(result);
});

emp_router.put("/employee", async (request, response) => {
  const body = request.body;
  console.log(body);
  const result = await updateEmployee(body.empNo, body.lastName, body.gender);
  console.log(result);
  response.status(200).send(result);
});

emp_router.delete("/employee", async (request, response) => {
  const body = request.body;
  console.log(body);
  const result = await fireEmployee(body.empNo);
  console.log(result);
  response.status(200).send(result);
});

emp_router.post("/employee", async (request, response) => {
  const { birthDate, firstName, lastName, gender, hireDate } = request.body;
  const { max } = await getMaxNo();
  console.log(max);
  const result = await hireEmployee(
    max + 1,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate
  );
  console.log(result);
  response.status(200).send(result);
});

export default emp_router;
