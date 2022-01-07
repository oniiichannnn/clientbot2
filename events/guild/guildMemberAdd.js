module.exports = (Discord, client, guildMember) => {
    let memberRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    guildMember.roles.add(memberRole);

    const embed = new Discord.MessageEmbed()
        .setColor("#ffd700")
        .setTitle(`Welcome ${guildMember.user.username} to CMG Lawyers`)
        .setDescription(`Please make sure to read the rules in <#922511739805900830>.`)
        .setImage('https://cdn.discordapp.com/attachments/922529290715803719/923262690732933230/Funky-CMG.png')
    guildMember.user.send({ embeds: [embed] });
};