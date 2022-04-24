const express = require("express");
const HCCrawler = require("headless-chrome-crawler");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080;
const BASE_URL = "https://calendar-drawer.vercel.app";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post("/", async (req, res) => {
  const path = `./images/calendar-${Date.now()}.png`;
  const crawler = await HCCrawler.launch({
    onSuccess: (result) => {
      console.log(result.options.url);
    },
  });
  const queryParams = new URLSearchParams();

  Object.keys(req.body).forEach((key) => {
    const param = req.body[key];
    queryParams.append(
      key,
      typeof param === "object" ? JSON.stringify(param) : param
    );
  });

  await crawler.queue({
    url: `${BASE_URL}?${queryParams.toString()}`,
    screenshot: {
      path,
    },
    viewport: {
      width: Number(queryParams.get("width").slice(0, -2)),
      height: Number(queryParams.get("height").slice(0, -2)) + 82,
    },
  });

  await crawler.onIdle();
  await crawler.close();
  res.json({ path });
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
