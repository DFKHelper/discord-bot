import { EmbedBuilder } from "discord.js";
import { King, Kings, Realm } from "../lib/types";

const catMap: { [lobby: number]: string } = { 1: "Solo", 3: "Squad", 9: "Warr" } as const;

const fieldBuilder = (king: King, name?: string) => {
  return {
    name: name || catMap[Number(king.lobby)],
    value: [
      `**King:** ${king.name} - [${king.address.slice(0, 6)}...${king.address.slice(-4)}](https://dfkhelper.com/heroes/browse?address=${king.address})`,
      `**Heroes:** ${king.heroes.map(h => `[${h.toString()}](https://dfkhelper.com/viewer/hero/${h.toString()})`).join(" | ")}`,
    ].join("\n")
  }
}

const newEmbed = (realm: Realm) => new EmbedBuilder()
  .setColor(realm === "dfk" ? 2080493 : 2121262)
  .setAuthor({ name: 'DFKHelper General Bot', iconURL: 'https://dfkhelper.com/Logo.png', url: 'https://dfkhelper.com/' })
  .setThumbnail(`https://defi-kingdoms.b-cdn.net/art-assets/tokens/${realm === "dfk"
    ? "crystal_token_x2"
    : "jade_token"}.png`)
  .setTimestamp()
  .setFooter({ text: 'Built Out of boredom' });

export const embedCurrentBuilder = (realm: Realm, kings: King[]) => newEmbed(realm)
  .setTitle(`${realm === "dfk" ? "Crystalv" : "Serend"}ale Kings`)
  .setDescription("Current Kings")
  .addFields(...kings.map(king => fieldBuilder(king)))

const embedEventBuilder = (realm: Realm, oldKing: King, newKing: King) => newEmbed(realm)
  .setTitle(`New ${realm === "dfk" ? "Crystalv" : "Serend"}ale King Event`)
  .setDescription(`Oh Snap! ${oldKing.name} has been dethroned by ${newKing.name} in the ${catMap[Number(newKing.lobby)]} Lobby!`)
  .addFields(fieldBuilder(newKing, "New King"), fieldBuilder(oldKing, "Old King"))

export const sendEmbed = async (realms: Realm[], kings: Kings, event?: [King, King]) => {
  global.announcementChannel.send({
    embeds: event
      ? [ embedEventBuilder(realms[0], event[0], event[1]) ]
      : realms.map(realm => embedCurrentBuilder(realm, kings[realm]))
  });
}
