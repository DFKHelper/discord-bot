import { King, Realm } from "../../lib/types";
import { catMap, newEmbed } from "./common";

const duelLobbyFieldBuilder = (king: King, name?: string) => {
  return {
    name: name || catMap[Number(king.lobby)],
    value: [
      `**King:** ${king.name} - [${king.address.slice(
        0,
        6,
      )}...${king.address.slice(-4)}](https://dfkhelper.com/heroes/browse?address=${king.address})`,
      `**Heroes:** ${king.heroes.map(h => `[${h.toString()}](https://dfkhelper.com/viewer/hero/${h.toString()})`)
        .join(" | ")}`,
    ].join("\n"),
  };
};

export const embedCurrentBuilder = (realm: Realm, kings: King[]) => newEmbed(realm)
  .setTitle(`${realm === "dfk" ? "Crystalv" : "Serend"}ale Kings`)
  .setDescription("Current Kings")
  .addFields(...kings.map(king => duelLobbyFieldBuilder(king)));
export const embedEventBuilder = (realm: Realm, oldKing: King, newKing: King) => newEmbed(realm)
  .setTitle(`New ${realm === "dfk" ? "Crystalv" : "Serend"}ale King Event`)
  .setDescription(`Oh Snap! ${oldKing.name} has been dethroned by ${newKing.name} in the ${catMap[Number(newKing.lobby)]} Lobby!`)
  .addFields(duelLobbyFieldBuilder(newKing, "New King"), duelLobbyFieldBuilder(oldKing, "Old King"));
