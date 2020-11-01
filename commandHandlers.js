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
      ctx.reply(data.text);
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
      ctx.reply(data.text);
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

function getKanyeQuote(bot, ctx) {
  log(bot, ctx);
  fetch('https://api.kanye.rest/')
    .then((data) => data.json())
    .then((data) => {
      ctx.reply(data.quote);
    });
}

function getAdvice(bot, ctx) {
  log(bot, ctx);
  fetch('https://api.adviceslip.com/advice')
    .then((data) => data.json())
    .then((data) => {
      ctx.reply(data.slip.advice);
    });
}

function getFood(bot, ctx) {
  log(bot, ctx);
  fetch('https://foodish-api.herokuapp.com/api/')
    .then((data) => data.json())
    .then((data) => {
      ctx.replyWithPhoto(data.image);
    });
}

function getNEPic(url) {
  const cash = [];

  function generatePerson() {
    return fetch(url).then((res) => res.buffer());
  }

  setInterval(async () => {
    if (cash.length >= 10) return;
    const person = await generatePerson();
    cash.push(person);
  }, 5000);

  return cash.length ? { source: cash.pop() } : { url };
}

module.exports = {
  getCat,
  getDog,
  getFox,
  getActivity,
  getKanyeQuote,
  getAdvice,
  getFood,
  getNEPic,
  roll,
};
