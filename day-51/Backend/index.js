console.log("day-51 : API Express JS");

const { request, response } = require("express");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
let counter = 1;

const PORT = 8080;

app.use(cors());
app.use(bodyParser.json()); // бүх төрлийн файл авдаг
// app.use(express.json()); ганцхан JSON авдаг

let data = [
  {
    id: 1,
    name: "Munkhbaatar",
    major: "Computer science",
  },
];

app.get("/", (request, response) => {
  response.send("Here I am a brutally powerful Express server!");
});

app.get("/data", (request, response) => {
  response.json(data);
});

app.post("/data", (request, response) => {
  console.log(request.body);
  const length = data.length;
  counter++;
  const newData = {
    id: counter,
    name: request.body.name,
    major: request.body.major,
  };
  data.push(newData);
  response.json(data);
});

app.delete("/data", (request, response) => {
  console.log(request.body);
  const newData = data.filter((a) => a.id !== request.body.id);
  data = newData;
  console.log(newData);
  response.json(newData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
