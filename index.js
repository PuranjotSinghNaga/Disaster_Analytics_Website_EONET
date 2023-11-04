import express from "express";
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
    const currentDisaster = await axios.get(
      "https://eonet.gsfc.nasa.gov/api/v3/events?days=20&status=open"
    );

    if (formValue1 == "date") {
      var startDate = req.query.startDate;
      var endDate = req.query.endDate;
      console.log(startDate);
      console.log(endDate);
      var response_ejs = await axios.get(
        `https://eonet.gsfc.nasa.gov/api/v3/events?start=${startDate}&end=${endDate}`
      );
      console.log(
        `https://eonet.gsfc.nasa.gov/api/v3/events?start=${startDate}&end=${endDate}`
      );
      console.log(response_ejs.data.events.length);
    } else {
      var formValue2 = req.query.selectValue2.replace(/\s/g, "").toLowerCase();
      response_ejs = await axios.get(
        `https://eonet.gsfc.nasa.gov/api/v3/events?${formValue1}=${formValue2}`
      );
      console.log(
        `https://eonet.gsfc.nasa.gov/api/v3/events?${formValue1}=${formValue2}`
      );
    }
    res.render("index.ejs", {
      current: currentDisaster,
      response: response_ejs,
    });
  } catch (error) {
    console.error("Failed to make request", error.message);
    res.status(500).send("Falied to fetch activity");
  }
});

app.listen(port, () => {
  console.log(`The server is listening at port ${port}`);
});
