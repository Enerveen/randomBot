function msgHandling(bot, ctx) {
  log(bot, ctx);
  switch (ctx.message.text) {
    case undefined:
      break;
    case 'Жыве Беларусь!':
      ctx.reply('Жыве вечна!');
      ctx.reply('🇧🇾');
      ctx.reply('🇧🇾');
      ctx.reply('🇧🇾');
      break;
    default:
      ctx.reply(
        `I'am so sorry, ${ctx.from.first_name}, but I don't understand what are you talking about :<`
      );
  }

  if (ctx.message.voice) {
    bot.telegram
      .getFileLink(ctx.message.voice.file_id)
      .then((res) => ctx.reply(`Voice message download link: ${res}`));
  }
}

//Yep, logging is implemented as forwarding user's messages to me. Until this bot isn't used by many people it is the most comfortable way for me.

function log(bot, ctx) {
  let info =
    `Username: ${ctx.from.username}\n` +
    `Full Name: ${ctx.from.first_name + ' ' + ctx.from.last_name}\n` +
    ctx.message.text +
    '\n';
  console.log(info);
  bot.telegram.forwardMessage(439154730, ctx.chat.id, ctx.message.message_id);
}

module.exports = { msgHandling, log };
