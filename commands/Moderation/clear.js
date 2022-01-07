module.exports = {
    name: 'clear',
    aliases: ['delete', 'purge'],
    description: 'Clear messgaes',
    async execute(client, message, args, cmd, Discord) {
        let deleteAmount;
        if (!message.member.roles.cache.some(r=>["922511739495534619", "922511739495534616", "922511739495534612", "922511739482935322"].includes(r.id))) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription("You do not have permission to use this command")
            return message.channel.send({ embeds: [newEmbed] });
        }

        if (!args[0]) {
            numberammountEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription("Please enter the ammount of messgaes you want to clear")
            return message.channel.send({ embeds: [numberammountEmbed] });
        };

        if (isNaN(args[0])) {
            realnumberEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription("Please enter a real number")
            return message.channel.send({ embeds: [realnumberEmbed] });
        }

        if (parseInt(args[0]) > 99) {
            maxnumberEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription("You cannot clear more than 100 messages")
            return message.channel.send({ embeds: [maxnumberEmbed] });
        }

        if (parseInt(args[0]) < 1) {
            newEmbed = new Discord.MessageEmbed()
                .setColor('#ffd700')
                .setDescription("You must clear atleast 1 message")
            return message.channel.send({ embeds: [newEmbed] });
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount + 1, true);
        const clearedEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setDescription(`Cleared ${deleteAmount} messages`)
        message.channel.send({ embeds: [clearedEmbed] })
        .then((msg) => {
            setTimeout(() => msg.delete(), 10000);
        })
    }
}