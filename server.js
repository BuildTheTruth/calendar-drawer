const express = require("express");
const puppeteer = require("puppeteer");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const BASE_URL = "https://calendar-drawer.vercel.app";
const path = `./images/calendar-${Date.now()}.png`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post("/", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const queryParams = new URLSearchParams();

  Object.keys(req.body).forEach((key) => {
    const param = req.body[key];
    queryParams.append(
      key,
      typeof param === "object" ? JSON.stringify(param) : param
    );
  });

  console.log(queryParams);

  await page.goto(`${BASE_URL}?${queryParams.toString()}`);
  const calendar = await page.$(".rbc-calendar");
  await calendar.screenshot({ path });
  res.json({ path });
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
