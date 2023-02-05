console.log("it is my app.js");
//import necessary modules
const express = require("express");
const cors = require("cors");
const fs = require("fs");
// const { findSourceMap } = require("module");

// config of modules
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());


// get products
app.get("/products", (request, response) => {
  console.log("get method")
  fs.readFile("./data/products.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

// get users
app.get("/users", (request, response) => {
  console.log("get method")
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

// delete users
app.delete("/users", (request, response) => {
  console.log("delete method")
  const body = request.body;
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);

    const filteredObjects = readObject.filter((o) => o.id !== body.userId);
    fs.writeFile(
      "./data/users.json",
      JSON.stringify(filteredObjects),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObjects,
        });
      }
    );
  });
});

// Create users
app.post("/users", (request, response) => {
  console.log("post method")
  const body = request.body;
  console.log(body);

  const newUser = {
    id: Date.now().toString(),
    firstname: body.firstname,
    lastname: body.lastname,
    phonenumber: body.phonenumber,
    email: body.email,
  };

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    const dataObject = JSON.parse(readData);
    console.log(dataObject);
    console.log("========");
    dataObject.push(newUser);
    console.log(dataObject);

    fs.writeFile(
      "./data/users.json",
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

// Update users
app.put("/users", (request, response) => {
  console.log("Putting data method")
  console.log(response.body)
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File read error",
        data: [],
      });
    }
    const savedData = JSON.parse(readData);

    const changedData = savedData.map((d) => {
      if (d.id === request.body.id) {
        (d.firstname = request.body.firstname),
          (d.lastname = request.body.lastname);
        (d.phonenumber = request.body.phonenumber);
        (d.email = request.body.email);
      }
      return d;
    });

    fs.writeFile(
      "./data/users.json",
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
  console.log(`server is running on http://localhost:${PORT}`);
});
