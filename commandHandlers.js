const { log } = require('./functions');
const fetch = require('node-fetch');

function roll(bot, ctx) {
  log(bot, ctx);
  ctx.reply(Math.ceil(Math.random() * 100));
}

function getDog(bot, ctx) {
  log(bot, ctx);
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1')
    .then((data) => data.json())
    .then((data) => {
      ctx.reply(data[0].text);
    });
  fetch('https://api.thedogapi.com/v1/images/search', {
    headers: { 'x-api-key': process.env.DOGAPI_KEY },
  })
    .then((data) => data.json())
    .then((data) => {
      ctx.replyWithPhoto(data[0].url);
    });
}

function getCat(bot, ctx) {
  log(bot, ctx);
  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1')
    .then((data) => data.json())
    .then((data) => {
      ctx.reply(data[0].text);
    });
  fetch('https://api.thecatapi.com/v1/images/search', {
    headers: { 'x-api-key': process.env.CATAPI_KEY },
  })
    .then((data) => data.json())
    .then((data) => {
      ctx.replyWithPhoto(data[0].url);
    });
}

function getFox(bot, ctx) {
  log(bot, ctx);
  fetch('https://randomfox.ca/floof/')
    .then((data) => data.json())
    .then((data) => {
      ctx.replyWithPhoto(data.image);
    });
}

function getActivity(bot, ctx) {
  log(bot, ctx);
  fetch('http://www.boredapi.com/api/activity/')
    .then((data) => data.json())
    .then((data) => {
      ctx.reply(data.activity);
    });
}

function getNEPerson(bot, ctx) {
  log(bot, ctx);
  ctx.replyWithPhoto('https://thiscatdoesnotexist.com/');
}

function getNECat(bot, ctx) {
  log(bot, ctx);
  ctx.replyWithPhoto('https://thiscatdoesnotexist.com/');
}

function getNEArt(bot, ctx) {
  log(bot, ctx);
  ctx.replyWithPhoto('https://thisartworkdoesnotexist.com/');
}

module.exports = {
  getCat,
  getDog,
  getFox,
  getActivity,
  getNEPerson,
  getNECat,
  getNEArt,
  roll,
};
