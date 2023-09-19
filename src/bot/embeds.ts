import { IAPIHero, rarityMap } from "@dfkhelper/core";
import { EmbedBuilder } from "discord.js";
import { parseApiHero } from "../lib/heroes";
import { HeroInteractionButtonIdType, King, Kings, Realm } from "../lib/types";

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
  .setFooter({ text: 'Built Out of Boredom' });

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

const heroBasicsEmbedBuilder = (apiHero: IAPIHero, base: EmbedBuilder) => {
  const hero = parseApiHero(apiHero);
  const fullStamAt = (staminaFullAt: string) => {
    const now = Math.floor(Date.now() / 1000);
    const diff = Number(staminaFullAt) - now;
    if (diff < 0) {
      return "(Full)";
    }
    const minutes = Math.floor(diff / 60);
    const seconds = Math.floor(diff) % 60;
    return `(Full in: ${minutes}m ${seconds}s)`;
  }
  return base.setFields(
    { name: "Class", value: `${hero.mainClass} / ${hero.subClass}`, inline: true },
    { name: "Rarity", value: rarityMap[hero.rarity], inline: true },
    { name: "Level", value: hero.level.toString(), inline: true },
    { name: "Generation", value: hero.generation.toString(), inline: true },
    { name: "Gender", value: hero.gender, inline: true },
    { name: "Element", value: hero.element, inline: true },
    { name: "Profession", value: `${hero.profession} (${hero[hero.profession.toLowerCase()]})`, inline: true },
    { name: "Stat Boosts", value: `${hero.statBoost1} / ${hero.statBoost2}`, inline: true },
    { name: "HP / MP / SP", value: `${hero.hp} / ${hero.mp} / ${hero.sp}`, inline: true },
    { name: "Stamina", value: `${hero.status} ${fullStamAt(hero.staminafullat)}`, inline: true },
    {
      name: "XP", value: `${hero.xp.toLocaleString()} / ${(
        Math.round((
          hero.xp * 100 / hero.xp_progress
        ) / 1000) * 1000
      ).toLocaleString()} (${Number(hero.xp_progress.toFixed(2))}%)`, inline: true
    },
  )
}

const heroStatsEmbedBuilder = (apiHero: IAPIHero, base: EmbedBuilder) => {
  const hero = parseApiHero(apiHero);
  return base.setFields(
    { name: "Active", value: `${hero.active1} / ${hero.active2}`, inline: true },
    { name: "Passive", value: `${hero.passive1} / ${hero.passive2}`, inline: true },
    { name: "Crafting", value: `${hero.crafting1} / ${hero.crafting2}`, inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: "Fishing", value: hero.fishing.toString(), inline: true },
    { name: "Foraging", value: hero.foraging.toString(), inline: true },
    { name: "Gardening", value: hero.gardening.toString(), inline: true },
    { name: "Mining", value: hero.mining.toString(), inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: "Strength", value: `${hero.strength} (${hero.strengthGrowthP}% / ${hero.strengthgrowths / 100}%)`, inline: true },
    { name: "Dexterity", value: `${hero.dexterity} (${hero.dexterityGrowthP}% / ${hero.dexteritygrowths / 100}%)`, inline: true },
    { name: "Agility", value: `${hero.agility} (${hero.agilityGrowthP}% / ${hero.agilitygrowths / 100}%)`, inline: true },
    { name: "Vitality", value: `${hero.vitality} (${hero.vitalityGrowthP}% / ${hero.vitalitygrowths / 100}%)`, inline: true },
    { name: "Endurance", value: `${hero.endurance} (${hero.enduranceGrowthP}% / ${hero.endurancegrowths / 100}%)`, inline: true },
    { name: "Intelligence", value: `${hero.intelligence} (${hero.intelligenceGrowthP}% / ${hero.intelligencegrowths
      / 100}%)`, inline: true },
    { name: "Wisdom", value: `${hero.wisdom} (${hero.wisdomGrowthP}% / ${hero.wisdomgrowths / 100}%)`, inline: true },
    { name: "Luck", value: `${hero.luck} (${hero.luckGrowthP}% / ${hero.luckgrowths / 100}%)`, inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: "Hair", value: `${hero.hairStyle}\n${hero.hairColor}`, inline: true },
    { name: "Head Appendage", value: `${hero.headAppendage}\n${hero.appendageColor}`, inline: true },
    { name: "Back Appendage", value: `${hero.backAppendage}\n${hero.backAppendageColor}`, inline: true },
    { name: "Skin Color", value:hero.skinColor, inline: true },
    { name: "Eye Color", value: hero.eyeColor, inline: true },
  )
}

const heroRecessivesEmbedBuilder = (apiHero: IAPIHero, base: EmbedBuilder) => {
  const hero = parseApiHero(apiHero);
  return base.setFields(
    { name: "Main Class", value: `P: ${hero.mainClass}\nR1: ${hero.mainClassR1}\nR2: ${hero.mainClassR2}\nR3: ${hero.mainClassR3}`, inline: true },
    { name: "Sub Class", value: `P: ${hero.subClass}\nR1: ${hero.subClassR1}\nR2: ${hero.subClassR2}\nR3: ${hero.subClassR3}`, inline: true },
    { name: "Profession", value: `P: ${hero.profession}\nR1: ${hero.professionR1}\nR2: ${hero.professionR2}\nR3: ${hero.professionR3}`, inline: true },
    { name: "Element", value: `P: ${hero.element}\nR1: ${hero.elementR1}\nR2: ${hero.elementR2}\nR3: ${hero.elementR3}`, inline: true },
    { name: "Boost 1", value: `P: ${hero.statBoost1}\nR1: ${hero.statBoost1R1}\nR2: ${hero.statBoost1R2}\nR3: ${hero.statBoost1R3}`, inline: true },
    { name: "Boost 2", value: `P: ${hero.statBoost2}\nR1: ${hero.statBoost2R1}\nR2: ${hero.statBoost2R2}\nR3: ${hero.statBoost2R3}`, inline: true },
    { name: "Active 1", value: `P: ${hero.active1}\nR1: ${hero.active1R1}\nR2: ${hero.active1R2}\nR3: ${hero.active1R3}`, inline: true },
    { name: "Active 2", value: `P: ${hero.active2}\nR1: ${hero.active2R1}\nR2: ${hero.active2R2}\nR3: ${hero.active2R3}`, inline: true },
    { name: "Passive 1", value: `P: ${hero.passive1}\nR1: ${hero.passive1R1}\nR2: ${hero.passive1R2}\nR3: ${hero.passive1R3}`, inline: true },
    { name: "Passive 2", value: `P: ${hero.passive2}\nR1: ${hero.passive2R1}\nR2: ${hero.passive2R2}\nR3: ${hero.passive2R3}`, inline: true },
    { name: "Crafting 1", value: `P: ${hero.crafting1}\nR1: ${hero.crafting1R1}\nR2: ${hero.crafting1R2}\nR3: ${hero.crafting1R3}`, inline: true },
    { name: "Crafting 2", value: `P: ${hero.crafting2}\nR1: ${hero.crafting2R1}\nR2: ${hero.crafting2R2}\nR3: ${hero.crafting2R3}`, inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: "Gender", value: `P: ${hero.gender}\nR1: ${hero.genderR1}\nR2: ${hero.genderR2}\nR3: ${hero.genderR3}`, inline: true },
    { name: "Background", value: `P: ${hero.background}\nR1: ${hero.backgroundR1}\nR2: ${hero.backgroundR2}\nR3: ${hero.backgroundR3}`, inline: true },
    { name: "Hair Style", value: `P: ${hero.hairStyle}\nR1: ${hero.hairStyleR1}\nR2: ${hero.hairStyleR2}\nR3: ${hero.hairStyleR3}`, inline: true },
    { name: "Hair Color", value: `P: ${hero.hairColor}\nR1: ${hero.hairColorR1}\nR2: ${hero.hairColorR2}\nR3: ${hero.hairColorR3}`, inline: true },
    { name: "Head App", value: `P: ${hero.headAppendage}\nR1: ${hero.headAppendageR1}\nR2: ${hero.headAppendageR2}\nR3: ${hero.headAppendageR3}`, inline: true },
    { name: "Head App Color", value: `P: ${hero.appendageColor}\nR1: ${hero.appendageColorR1}\nR2: ${hero.appendageColorR2}\nR3: ${hero.appendageColorR3}`, inline: true },
    { name: "Back App", value: `P: ${hero.backAppendage}\nR1: ${hero.backAppendageR1}\nR2: ${hero.backAppendageR2}\nR3: ${hero.backAppendageR3}`, inline: true },
    { name: "Back App Color", value: `P: ${hero.backAppendageColor}\nR1: ${hero.backAppendageColorR1}\nR2: ${hero.backAppendageColorR2}\nR3: ${hero.backAppendageColorR3}`, inline: true },
    { name: "Skin Color", value: `P: ${hero.skinColor}\nR1: ${hero.skinColorR1}\nR2: ${hero.skinColorR2}\nR3: ${hero.skinColorR3}`, inline: true },
    { name: "Eye Color", value: `P: ${hero.eyeColor}\nR1: ${hero.eyeColorR1}\nR2: ${hero.eyeColorR2}\nR3: ${hero.eyeColorR3}`, inline: true },
    { name: "Unknown 1", value: `P: ${hero.statsunknown1}\nR1: ${hero.statsunknown1r1}\nR2: ${hero.statsunknown1r2}\nR3: ${hero.statsunknown1r3}`, inline: true },
    { name: "Unknown 2", value: `P: ${hero.statsunknown2}\nR1: ${hero.statsunknown2r1}\nR2: ${hero.statsunknown2r2}\nR3: ${hero.statsunknown2r3}`, inline: true },
  )
}

export const heroEmbedBuilder = (apiHero: IAPIHero, view: HeroInteractionButtonIdType) => {
  const base = newEmbed("dfk")
    .setTitle(`#${apiHero.id}`)
    .setURL(`https://dfkhelper.com/viewer/hero/${apiHero.id}`)
    .setThumbnail(`https://heroes.defikingdoms.com/image/${apiHero.id}`)
    .setDescription(`${apiHero.firstname_string} ${apiHero.lastname_string}`)
  return view === "recessives"
    ? heroRecessivesEmbedBuilder(apiHero, base)
    : view === "stats"
      ? heroStatsEmbedBuilder(apiHero, base)
      : heroBasicsEmbedBuilder(apiHero, base);
}
