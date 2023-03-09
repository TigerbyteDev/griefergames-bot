import { Command } from '../interfaces'

export const command: Command = {
  name: "stopFollow",
  usage: "!stopFollow",
  args: 0,

  run(username, args, bot) {
    // @ts-ignore
    bot.emit("stopFollow");
  }
}