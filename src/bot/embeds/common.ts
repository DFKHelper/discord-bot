import { EmbedBuilder } from "discord.js";
import { Realm } from "../../lib/types";

export const newEmbed = (realm: Realm) => new EmbedBuilder()
  .setColor(realm === "dfk" ? 2080493 : 2121262)
  .setAuthor({ name: "DFKHelper General Bot", iconURL: "https://dfkhelper.com/Logo.png", url: "https://dfkhelper.com/" })
  .setThumbnail(`https://defi-kingdoms.b-cdn.net/art-assets/tokens/${realm === "dfk"
    ? "crystal_token_x2"
    : "jade_token"}.png`)
  .setTimestamp()
  .setFooter({ text: "Built Out of Boredom" });

export const catMap: { [lobby: number]: string } = { 1: "Solo", 3: "Squad", 9: "Warr" } as const;
