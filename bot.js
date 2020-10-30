require('dotenv').config();
const { Telegraf } = require('telegraf');
const fetch = require('node-fetch');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(`Hey there, ${ctx.from.first_name}`));

bot.help((ctx) => ctx.replyWithHTML('<b>Still empty here</b>'));

bot.hears('Жыве Беларусь!', (ctx) => {
  ctx.reply('Жыве вечна!');
  ctx.reply('🇧🇾');
  ctx.reply('🇧🇾');
  ctx.reply('🇧🇾');
});

bot.command('roll', (ctx) => {
  log(ctx);
  ctx.reply(Math.ceil(Math.random() * 100));
});

bot.command('doggins', (ctx) => {
  return getDog(ctx);
});

bot.command('catto', (ctx) => {
  return getCat(ctx);
});

bot.on('message', (ctx) => {
  return msgHandling(ctx);
});

bot.launch();

function msgHandling(ctx) {
  log(ctx);
  if (ctx.message.voice) {
    bot.telegram
      .getFileLink(ctx.message.voice.file_id)
      .then((res) => ctx.reply(`Voice message download link: ${res}`));
  }
}

function getDog(ctx) {
  log(ctx);
  fetch('https://api.thedogapi.com/v1/images/search', {
    headers: { 'x-api-key': process.env.DOGAPI_KEY },
  })
    .then((data) => data.json())
    .then((data) => {
      ctx.replyWithPhoto(data[0].url);
    });
}

function getCat(ctx) {
  log(ctx);
  fetch('https://api.thecatapi.com/v1/images/search', {
    headers: { 'x-api-key': process.env.CATAPI_KEY },
  })
    .then((data) => data.json())
    .then((data) => {
      ctx.replyWithPhoto(data[0].url);
    });
}

//Yep, logging messages is implemented as sending them to me. Until this bot isn't used by many people it is the most comfortable way for me.

function log(ctx) {
  let info =
    `Username: ${ctx.from.username}\n` +
    `Full Name: ${ctx.from.first_name + ' ' + ctx.from.last_name}\n` +
    ctx.message.text +
    '\n';
  console.log(info);
  bot.telegram.forwardMessage(439154730, ctx.chat.id, ctx.message.message_id);
}
