import { Command } from '../interfaces'
import { sendMSG } from "../functions";
import {initStuff} from "../index";

export const command: Command = {
    name: "drop",
    usage: "!drop <Item> <Anzahl>",
    args: 2,

    run: async function (rank, username, args, bot) {
        // Get the item to drop
        const item = initStuff.mcData.itemsByName[args[0].toLowerCase()];
        if (!item) {
            sendMSG(username, "Please specify an item!");
            return;
        }

        const target = bot.players[username] ? bot.players[username].entity : null
        if (!target) return sendMSG(username, "I can't see you! D:");
        const position = target?.position;
        await bot.lookAt(position, true);

        // Get the amount to drop
        const amount = parseInt(args[1]);

        await  bot.toss(item.id, null, amount, () => {
            sendMSG(username, `Dropped ${amount} of ${item.name}`);
        });

        // @ts-ignore
        bot.emit("stopCollect");
        // sendMSG(username, "Stopping...")
    }
}
