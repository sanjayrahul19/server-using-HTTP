const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  //   fs.writeFile("demo.txt", "hello", function (err) {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log("Success");
  //   }); //to create and write file

  //   fs.readFile("demo.txt", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.write(data);
  //       res.end();
  //     }
  //   }); //to read file

  fs.appendFile("demo.txt", "sanjay", (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Successfully Appended");
    }
  }); //to append text

  // fs.rename("demo.txt", "renamed.txt", (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Sucessfully Renamed");
  //   }
  // });

  // fs.unlink("demo.txt", (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Successfully Deleted");
  //   }
  // }); // to delete a file

    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    }); //to read and display index.html page
});

server.listen(PORT, () => {
  console.log("Server is up and running");
});
