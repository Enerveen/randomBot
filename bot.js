require('dotenv').config();
const {
  getCat,
  getDog,
  getFox,
  getActivity,
  getNEPerson,
  getNEArt,
  getNECat,
  roll,
} = require('./commandHandlers');
const { msgHandling } = require('./functions');
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(`Hey there, ${ctx.from.first_name}`));

bot.help((ctx) => ctx.replyWithHTML('<b>Still empty here</b>'));

bot.command('roll', (ctx) => {
  return roll(bot, ctx);
});

bot.command('doggins', (ctx) => {
  return getDog(bot, ctx);
});

bot.command('catto', (ctx) => {
  return getCat(bot, ctx);
});

bot.command('foxy', (ctx) => {
  return getFox(bot, ctx);
});

bot.command('imbored', (ctx) => {
  return getActivity(bot, ctx);
});

bot.command('somebody', async (ctx) => {
  return getNEPerson(bot, ctx);
});

bot.command('somekitty', (ctx) => {
  return getNECat(bot, ctx);
});

bot.command('something', (ctx) => {
  return getNEArt(bot, ctx);
});

bot.on('message', (ctx) => {
  return msgHandling(bot, ctx);
});

bot.launch();
