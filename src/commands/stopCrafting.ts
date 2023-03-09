import { Command } from '../interfaces'

export const command: Command = {
    name: "stopCrafting",
    usage: "!stopCrafting",
    args: 0,
    run(username, args, bot) {
        // @ts-ignore
        bot.emit("stopCrafting");
    }
}