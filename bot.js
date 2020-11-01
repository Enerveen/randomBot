require('dotenv').config();
const fetch = require('node-fetch');
const {
  getCat,
  getDog,
  getFox,
  getActivity,
  getKanyeQuote,
  getAdvice,
  getFood,
  getNEPic,
  roll,
} = require('./commandHandlers');
const { msgHandling } = require('./functions');
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(`Hey there, ${ctx.from.first_name}`));

bot.help((ctx) => ctx.replyWithHTML('<b>Still empty here</b>'));

bot.command('roll', (ctx) => roll(bot, ctx));

bot.command('doggins', (ctx) => getDog(bot, ctx));

bot.command('catto', (ctx) => getCat(bot, ctx));

bot.command('foxy', (ctx) => getFox(bot, ctx));

bot.command('imbored', (ctx) => getActivity(bot, ctx));

bot.command('kanye', (ctx) => getKanyeQuote(bot, ctx));

bot.command('advice', (ctx) => getAdvice(bot, ctx));

bot.command('imhungry', (ctx) => getFood(bot, ctx));

bot.command('somebody', async (ctx) => {
  const photo = getNEPic('https://thispersondoesnotexist.com/image');
  await ctx.replyWithChatAction('upload_photo');
  await ctx.replyWithPhoto(photo);
});

bot.command('somekitty', async (ctx) => {
  const photo = getNEPic('https://thiscatdoesnotexist.com/');
  await ctx.replyWithChatAction('upload_photo');
  await ctx.replyWithPhoto(photo);
});

bot.command('something', async (ctx) => {
  const photo = getNEPic('https://thisartworkdoesnotexist.com/');
  await ctx.replyWithChatAction('upload_photo');
  await ctx.replyWithPhoto(photo);
});

bot.on('message', (ctx) => {
  return msgHandling(bot, ctx);
});

bot.launch();
