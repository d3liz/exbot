const Telegram = require('node-telegram-bot-api');
const bot = new Telegram('635598975:AAHpVdDLbDg5_lOh3bwgTAhi3AkYi_XKySQ', {polling: true});
bot.on( 'message', ctx => {
  console.log(ctx);
  bot.sendMessage(ctx.chat.id,'Hello!');
} )