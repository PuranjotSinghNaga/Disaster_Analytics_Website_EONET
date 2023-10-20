import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const currentDisaster = await axios.get(
      "https://eonet.gsfc.nasa.gov/api/v3/events?days=20&status=open"
    );
    console.log(currentDisaster.data.events.length);
    res.render("index.ejs", {
      current: currentDisaster,
    });
  } catch (error) {
    console.error("Failed to make request", error.message);
    res.status(500).send("Falied to fetch activity");
  }
});

app.get("/search", async (req, res) => {
  try {
    var formValue1 = req.query.selectValue1;
    var formValue2 = req.query.selectValue2.replace(/\s/g, "").toLowerCase();
    const currentDisaster = await axios.get(
      "https://eonet.gsfc.nasa.gov/api/v3/events?days=20&status=open"
    );
    console.log(
      `https://eonet.gsfc.nasa.gov/api/v3/events?${formValue1}=${formValue2}`
    );
    const response = await axios.get(
      `https://eonet.gsfc.nasa.gov/api/v3/events?${formValue1}=${formValue2}`
    );

    console.log(formValue1);
    console.log(formValue2.toLowerCase());

    res.render("index.ejs", {
      current: currentDisaster,
      response: response,
    });
  } catch (error) {
    console.error("Failed to make request", error.message);
    res.status(500).send("Falied to fetch activity");
  }
});

app.listen(port, () => {
  console.log(`The server is listening at port ${port}`);
});
