const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

//ウェブスクレイパー作成
const URL = "https://search.rakuten.co.jp/search/mall/keyboard/";

axios(URL)
.then((response) => {
  const htmlParser = response.data;
  //console.log(htmlParser);

  const $ = cheerio.load(htmlParser);

  $(".searchresultitem", htmlParser).each(function() {
    const title = $(this).find(".title").text();
    console.log(title);
  });
});





app.listen(PORT, console.log("suver running!"));