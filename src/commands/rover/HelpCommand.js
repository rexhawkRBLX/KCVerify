const Command = require('../Command')

module.exports =
class HelpCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'roverhelp',
      properName: 'RoVer',
      aliases: ['rover'],
      description: 'Displays a description of KCVerify'
    })
  }

  async fn (msg) {
    const output = `Welcome to KCVerify, a bot that makes integrating your server with Roblox easy. If you need help, you can join RoVer's support server by using the \`${msg.guild.commandPrefix}support\` command. You can run \`${msg.guild.commandPrefix}help\` to see a list of commands.`

    msg.reply(output)
  }
}
