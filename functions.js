function msgHandling(bot, ctx) {
  log(bot, ctx);
  if (ctx.message.text) {
    switch (ctx.message.text) {
      case undefined:
        break;

      //Easter eggs
      case 'Жыве Беларусь!':
        ctx.reply('🇧🇾');
        break;
      case 'Who is the best girl?':
        ctx.replyWithPhoto(
          'https://res.cloudinary.com/dnxmbqza4/image/upload/v1605375116/storage/asuka-langley-soryu-2679_cijkxi.jpg'
        );
        break;
      case 'Stupid machine':
        ctx.reply('Just as you are');
        break;

      // Default text message reply

      default:
        ctx.reply(`
I'am so sorry, ${ctx.from.first_name}, but I don't understand what are you talking about :<
Type /help to see the full list of commands or /menu to open interactive menu
`);
    }
  } else if (ctx.message.sticker) {
    ctx.replyWithSticker(ctx.message.sticker.file_id);
  } else if (ctx.message.video) {
    ctx.reply('Hmm, very interesting...');
  } else if (ctx.message.photo) {
    ctx.reply('Nice pic!');
  } else if (ctx.message.voice) {
    ctx.reply('Wish I had ears');
  }
}

//Yep, logging is implemented as forwarding user's messages to me. Until this bot isn't used by many people it is the most comfortable way for me.

function log(bot, ctx) {
  if (ctx.message) {
    bot.telegram.forwardMessage(439154730, ctx.chat.id, ctx.message.message_id);
  } else {
    bot.telegram.sendMessage(
      439154730,
      `Username: ${ctx.from.username}\nFull Name: ${ctx.from.first_name + ' ' + ctx.from.last_name}\n${ctx.match}`
    );
  }
}

module.exports = { msgHandling, log };
