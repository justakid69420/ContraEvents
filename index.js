const Discord = require('discord.js');
const bot = new Discord.Client();



const PREFIX = '!';




var version = 'Version 1.0.1';

var store = "We don't have a store yet!";

var ip = "The ip is, **ContraEvents.net**";

var invite = 'https://discord.gg/ptcevCF';
var status = "We are looking for staff!"

bot.login(process.emv.token);

bot.on('ready', () =>{
    console.log('im ready');

    bot.user.setActivity("ContraEvents.net", { type: "WATCHING"}).catch(console.error);


})

bot.on('guildMemberAdd', member =>{


    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
    if(!channel) return;

    channel.send(`Welcome ${member}`)
});

//commands

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

            
        
        case 'store':
            message.channel.send(store);
        break;
    
        case 'ip':
            message.channel.send(ip);
        break;

        case 'invite':
            message.channel.send(invite);
        break;
        
        case 'status':   
            const Embed = new Discord.MessageEmbed()
            .setTitle("ContraEvents")
            .addField('Staff status', 'We are looking for staff, head over to #bot-commands and type /apply to apply')
            .setColor(0xF1C40F)
            .setThumbnail('https://imgur.com/a/SydbCyO')
            .setFooter('© All rights reserved - 2020')
            message.channel.send(Embed);
            break;
    
    
        }   



})

