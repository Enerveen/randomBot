const { log } = require('./functions');
const fetch = require('node-fetch');

function roll(bot, ctx) {
  log(bot, ctx);
  ctx.reply(Math.ceil(Math.random() * 100));
}

async function getDog(bot, ctx) {
  log(bot, ctx);
  const fact = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1').then((data) =>
    data.json()
  );

  fetch('https://api.thedogapi.com/v1/images/search', {
    headers: { 'x-api-key': process.env.DOGAPI_KEY },
  })
    .then((data) => data.json())
    .then((data) => {
      ctx.replyWithPhoto(data[0].url, { caption: fact.text });
    });
}

async function getCat(bot, ctx) {
  log(bot, ctx);
  const fact = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1').then((data) =>
    data.json()
  );

  fetch('https://api.thecatapi.com/v1/images/search', {
    headers: { 'x-api-key': process.env.CATAPI_KEY },
  })
    .then((data) => data.json())
    .then((data) => {
      ctx.replyWithPhoto(data[0].url, { caption: fact.text });
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

function showMenu(bot, ctx) {
  log(bot, ctx);
  ctx.reply(`Choose category or type /help to get the full list of commands`, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Animals', callback_data: 'animals' },
          { text: 'Advices', callback_data: 'advices' },
        ],
        [
          { text: 'Artificially Generated', callback_data: 'artgen' },
          { text: 'Other', callback_data: 'other' },
        ],
      ],
    },
  });
}

function showInfo(bot, ctx) {
  log(bot, ctx);
  ctx.replyWithHTML(
    `
You are using <b>Temere Contentus bot</b>
Current version: <b>1.0.0</b>

This is an open source project, so you can find code <a href='https://github.com/Enerveen/randomBot'>here</a>

If you want to collaborate, suggest an API with random content or just talk a bit – feel free to <a href='tg://user?id=439154730'>text me</a>

<b>Another ways to find me:</>
<b><a href ='https://www.linkedin.com/in/yahorauu/'>LinkedIn</a></b>
<b><a href ='https://github.com/Enerveen'>GitHub</a></b>

<i>Hope you are having a great time using this bot</i>
`,
    { disable_web_page_preview: true }
  );
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
  showMenu,
  showInfo,
};
