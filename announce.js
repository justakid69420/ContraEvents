const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    if(message.member.hasPermission('ADMINISTRAOTR')) {
    if(!message.member.hasPermission("ADMINiSTRATOR")) return message.reply(`$(message.author) Insufficient Permissions!`)
    message.delete()
    const text = args.join(" ")
    if (text.length < 1) return message.reply("Cannot announce nothing.. Please provide something to announce");
    const colour = args.slice(2).join(" ");
    
        let announceEmbed = new Discord.RichEmbed()
        .setTitle("New Announcement!")
        .addField("Announced By:", `${message.author}`)
        .addField("Announced On:", `${message.createdAt}`)
        .setDescription(text);

        let announceChannel = message.guild.channels.find(`name`, "announcements");
        if(!announceChannel) return message.reply("Couldnt fina a channel named `announcements`");
        announceChannel.send(`@everyone`)
        announceChannel.send(announceEmbed);
         
    }





}
