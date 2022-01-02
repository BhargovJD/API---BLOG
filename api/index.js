const express = require("express");
require("./db/conn");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");


const app = express();
const port  = process.env.PORT||3000;

app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

  const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


// SIGNUP LOGIN
app.use("/api/auth", authRoute);

// USER OPERATIONS
app.use("/api/users", userRoute);

// POST OPERATIONS
app.use("/api/posts", postRoute);


// POST OPERATIONS
app.use("/api/categories", categoryRoute);



app.listen(port, () => {
    console.log(`Backend is running on port: ${port}`);
  });