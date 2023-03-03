console.log("Day - 69");
import express from "express";
import emp_router from "./routes/employees.js";
// import employee_routes from "./routes/employees";

const app = express();
app.use(express.json());
app.use(emp_router);
const PORT = 8080;

app.get("/", (request, response) => {
  response.send(
    "<h1 style='text-align: center; background-color:orange'>Day 69</h1>"
  );
});

app.listen(PORT, () => {
  console.log(`Express app is running on http://localhost:${PORT}`);
});
