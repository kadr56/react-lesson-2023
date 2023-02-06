console.log("day-56 - Rest API");

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { BodyText } = require("react-bootstrap-icons");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1> Express API is running</h1>");
});

app.get("/timers", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File not found",
        data: [],
      });
    }

    const timerData = JSON.parse(readData);

    console.log(timerData);
    console.log(typeof timerData);

    response.json({
      status: "Success",
      data: timerData,
    });
  });
});

app.delete("/timers", (request, response) => {
  console.log("delete method");
  const body = request.body;
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File not found",
        data: [],
      });
    }

    console.log(body.id);
    const readObject = JSON.parse(readData);
    const filteredObjects = readObject.filter((o) => o.id != body.id);

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(filteredObjects),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "Success",
          data: filteredObjects,
        });
      }
    );
  });
});

app.post("/timers", (request, response) => {
  console.log("post method");
  const body = request.body;
  console.log(body);

  const newTimer = body;

  console.log(newTimer);

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    console.log(dataObject);
    console.log("========");
    dataObject.push(newTimer);
    console.log(dataObject);

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});

app.put("/timers", (request, response) => {
  console.log("Putting data method");
  console.log(response.body);
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File read error",
        data: [],
      });
    }
    const savedData = JSON.parse(readData);

    const changedData = savedData.map((d) => {
      if (d.id === request.body.id) {
        d.title = request.body.title;
        d.project = request.body.project;
      }
      return d;
    });

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file write error",
            data: [],
          });
        }
        console.log(request.body);
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
