import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const currentDisaster = await axios.get(
      "https://eonet.gsfc.nasa.gov/api/v3/events?limit=5&days=20&source=InciWeb&status=open"
    );
    res.render("index.ejs", {
      cuurent: currentDisaster,
    });
  } catch (error) {
    console.error("Failed to make request", error.message);
    res.status(500).send("Falied to fetch activity");
  }
});

app.get("/search", async (req, res) => {
  try {
    var formValue1 = req.query.selectValue1;
    var formValue2 = req.query.selectValue2;
    // const response = await axios.get(
    //   `https://eonet.gsfc.nasa.gov/api/v3/events?${formValue1}=`
    // );
    console.log(formValue1);
    console.log(formValue2.toLowerCase());

    res.redirect("/");
  } catch (error) {
    console.error("Failed to make request", error.message);
    res.status(500).send("Falied to fetch activity");
  }
});

app.listen(port, () => {
  console.log(`The server is listening at port ${port}`);
});
