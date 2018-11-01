const Telegram = require('node-telegram-bot-api');
const bot = new Telegram('635598975:AAHpVdDLbDg5_lOh3bwgTAhi3AkYi_XKySQ', {polling: true});
bot.on( 'message', ctx => {
  console.log(ctx);
  bot.getMe().then( inf => bot.sendMessage( ctx.chat.id, JSON.stringify( inf ) ) )
} )