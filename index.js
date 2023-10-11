import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/search", async (req, res) => {
  try {
    const formValue = req.query.selectValue;
    const response = await axios.get(
      `https://eonet.gsfc.nasa.gov/api/v3/events?${formValue}`
    );
    console.log(formValue);

    res.redirect("/");
  } catch (error) {
    console.error("Failed to make request", error.message);
    res.status(500).send("Falied to fetch activity");
  }
});

app.listen(port, () => {
  console.log(`The server is listening at port ${port}`);
});
