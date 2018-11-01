const Telegram = require('node-telegram-bot-api');
const bot = new Telegram('635598975:AAHpVdDLbDg5_lOh3bwgTAhi3AkYi_XKySQ', {polling: true});
bot.on( 'message', ctx => {
  console.log(ctx);
  let name = (ctx.chat.last_name) ? ctx.chat.first_name + ' ' + ctx.chat.last_name : ctx.chat.first_name;
  bot.getMe().then( inf => {
    bot.sendPhoto(ctx.chat.id,'https://i0.wp.com/blog.yen.io/wp-content/uploads/2017/11/hello-world.png',{caption:'Hey, '+name+'. All working pretty good!'});
    bot.sendMessage( ctx.chat.id, JSON.stringify( inf ) ) } )
} )