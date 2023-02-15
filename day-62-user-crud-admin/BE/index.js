console.log("Day-62 - User login CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { response } = require("express");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8080;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());

// API login
app.post("/login", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    //
    if (readError) {
      response.json({
        status: "File not found",
        data: [],
      });
    }

    // String to JSON convertion
    const usersArrayObject = JSON.parse(readData);
    const foundUser = usersArrayObject.filter(
      (user) => body.email === user.email
    );

    // if user is not found in users.json file.
    if (foundUser.length === 0) {
      response.json({
        status: "User not found",
        data: [],
      });
    } else {
      const foundUserObj = foundUser[0];
      console.log("foundUser", foundUserObj);
      const plaintPassword = body.password;
      const savedPassword = foundUserObj.password;

      bcrypt.compare(
        plaintPassword,
        savedPassword,
        (compareError, compareResult) => {
          if (compareError) {
            response.json({
              status: "Usere name or password does not match",
              data: [],
            });
          }

          if (compareResult) {
            console.log("it matches");
            response.json({
              status: "success",
              data: {
                email: foundUserObj.email,
                firstname: foundUserObj.firstname,
                lastname: foundUserObj.lastname,
              },
            });
          } else {
            response.json({
              status: "Usere name or password does not match",
              data: [],
            });
          }
        }
      );
    }
  });
});

// API user register
app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    // when data exists
    const readDataObj = JSON.parse(readData);
    console.log(readDataObj);
    console.log("====");

    fs.readFile("./data/usersrole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file read error",
          data: [],
        });
      }
      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id === body.role)[0];

      const userPassword = body.password;
      bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) {
          response.json({
            status: "Bcrypt generating salt error",
            data: [],
          });
        }

        bcrypt.hash(userPassword, salt, (hashError, hashData) => {
          if (hashError) {
            response.json({
              status: "Hashing has error",
              data: [],
            });
          }

          console.log("Hashed Data: ", hashData);
          const newUser = {
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: hashData,
            address: body.address,
            role: roleName,
          };

          readDataObj.push(newUser);
          // console.log(newUser);

          fs.writeFile(
            "./data/users.json",
            JSON.stringify(readDataObj),
            (writeError) => {
              if (writeError) {
                response.json({
                  status: "Error during file write",
                  data: [],
                });
              }
              response.json({
                status: "success",
                data: readDataObj,
              });
            }
          );
        });
      });
    });
  });
});

// API get all users
app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

// API get all user roles
app.get("/users/roles", (request, response) => {
  fs.readFile("./data/usersrole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
      });
    }

    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
