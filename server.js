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
  const { defaultDate, events } = req.body;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    `${BASE_URL}?defaultDate=${defaultDate}&events=${JSON.stringify(events)}`
  );
  const calendar = await page.$(".rbc-calendar");
  await calendar.screenshot({ path });
  res.json({ path });
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
