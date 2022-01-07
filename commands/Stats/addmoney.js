const Discord   = require("discord.js")
const mongoose  = require("mongoose")

const ms    = require("ms")
const pms   = require("pretty-ms")

const {
    Client, MessageEmbed
} = Discord

const Tools = require('../../Tools/tools.js')
const { UserModel } = require("../../Tools/models.js")

const { getUser, updateCases } = Tools
const { lawyerRoles } = require("../../Data.json")

module.exports = {
    name        : "addmoney",
    description : "Adds dropped money to a user",

    async execute(client, message, args, cmd) {
        const { User } = await getUser(message)

        if (!lawyerRoles.find(role => message.member.roles.cache.has(role))) return message.channel.send({
            content: `${message.author} You can't use this command`
        })

        if (!User) return message.channel.send({
            content: `${message.author} You need to mention a user or provide their user id!`
        })

        const Amount = Number(args[1])
        if (!Amount) return message.channel.send({
            content: `${message.author} You need to give me a amount dropped money to add to **${User.tag}**`
        })

        const GetDb = await UserModel.findOne({ _id: User.id })
        if (GetDb === null) {
            await Tools.createUserStats({
                _id: User.id,
                moneyDropped: Amount
            })
        } else {
            await GetDb.updateOne({
                moneyDropped: GetDb.moneyDropped + Amount
            })
        }

        await message.channel.send({
            content: `Alright, I have added **${Amount}** dropped money to **${User.tag}**`
        })
    }
}