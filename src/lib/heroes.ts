import {
  activeSkillMap,
  appendageColorMap,
  backAppendageMap,
  backgroundMap,
  classMap,
  classTierMap,
  craftingMap,
  elementMap,
  enhancementStoneAddrMap,
  EnhancementStoneSymbol,
  eyeColorMap,
  genderMap,
  hairColorMap,
  hairStyleGenderMap,
  headAppendageMap,
  IAPIHero,
  passiveSkillMap,
  professionMap,
  questIdMap,
  skinColorMap,
  statMap,
} from "@dfkhelper/core";

export const staminaRemaining = (timestamp: string, total: number) => {
  const ts = Number(timestamp);
  const now = Math.round(Date.now() / 1000);
  if (now >= ts) {
    return total;
  }
  return total - Math.floor((
    ts - now
  ) / 1200);
};

export const getQuestEmoji = (questInstanceId: number) => {
  return [ "💤", "🎣", "🍁", "⛏️", "⛏️", "🧑‍🌾", "💪" ][questInstanceId];
};

export const getQuestBonus = (hero: any) => {
  const map: { [index: string]: number[] } = {
    "Warrior": [ 0, 14 ],
    "Knight": [ 10, 12 ],
    "Thief": [ 2, 8 ],
    "Archer": [ 14, 12 ],
    "Priest": [ 6, 4 ],
    "Wizard": [ 4, 6 ],
    "Monk": [ 0, 14 ],
    "Pirate": [ 0, 14 ],
    "Berserker": [ 0, 10 ],
    "Seer": [ 6, 4 ],
    "Legionnaire": [ 12, 10 ],
    "Scholar": [ 4, 6 ],
    "Paladin": [ 0, 10 ],
    "DarkKnight": [ 0, 10 ],
    "Summoner": [ 4, 6 ],
    "Ninja": [ 2, 14 ],
    "Shapeshifter": [ 14, 2 ],
    "Bard": [ 14, 2 ],
    "Dragoon": [ 0, 12 ],
    "Sage": [ 4, 6 ],
    "SpellBow": [ 14, 4 ],
    "DreadKnight": [ 0, 14 ],
  };
  const v = map[hero.mainClass];
  return [
    v.includes(hero.statboost1),
    v.includes(hero.statboost2),
    hero[statMap[v[0]].toLowerCase()] + hero[statMap[v[1]].toLowerCase()],
  ];
};

export const getHighestStat = (hero: any) => {
  const { statID } = Object.entries(statMap).reduce((o, [ k, a ]) => {
    const v = hero[a.toLowerCase()];
    if (v > o.value) {
      o.statID = Number(k);
      o.value = v;
    }
    return o;
  }, { statID: 0, value: 0 });
  return statID;
};

export type Network = "dfk" | "kla";
export type NetworkDisplay = "DFK" | "Klaytn" | "Harmony";

export const NetworkMap: { [key in Network]: NetworkDisplay } = {
  dfk: "DFK",
  kla: "Klaytn",
};

export const parseApiHero = (hero: IAPIHero) => {
  // noinspection OverlyComplexArithmeticExpressionJS
  const h = {
    ...hero,
    wallet: hero.owner,
    owner: hero.owner_name,
    status: `${Math.floor(Number(hero.current_stamina))}/${hero.stamina}`,
    summons: `${hero.summons_remaining}/${hero.maxsummons}`,
    mainClass: classMap[hero.class],
    mainClassR1: classMap[hero.classr1],
    mainClassR2: classMap[hero.classr2],
    mainClassR3: classMap[hero.classr3],
    subClass: classMap[hero.subclass],
    subClassR1: classMap[hero.subclassr1],
    subClassR2: classMap[hero.subclassr2],
    subClassR3: classMap[hero.subclassr3],
    tier: classTierMap[classMap[hero.class]],
    xp: Number(hero.xp),
    xp_progress:
      Number((
        Number(hero.xp_progress) * 100
      ).toFixed(2)),
    quest: "ai",
    summon: "TBD",
    network: NetworkMap[hero.network],
    currentQuestId: Number(hero.currentquest),
    currentQuestName: questIdMap[Number(hero.currentquest)],
    stats: hero.strength
      + hero.intelligence
      + hero.wisdom
      + hero.luck
      + hero.agility
      + hero.vitality
      + hero.endurance
      + hero.dexterity,
    mining: hero.mining / 10,
    gardening: hero.gardening / 10,
    fishing: hero.fishing / 10,
    foraging: hero.foraging / 10,
    profession: professionMap[hero.profession],
    professionR1: professionMap[hero.professionr1],
    professionR2: professionMap[hero.professionr2],
    professionR3: professionMap[hero.professionr3],
    crafting1: craftingMap[hero.statsunknown1],
    crafting1R1: craftingMap[hero.statsunknown1r1],
    crafting1R2: craftingMap[hero.statsunknown1r2],
    crafting1R3: craftingMap[hero.statsunknown1r3],
    crafting2: craftingMap[hero.statsunknown2],
    crafting2R1: craftingMap[hero.statsunknown2r1],
    crafting2R2: craftingMap[hero.statsunknown2r2],
    crafting2R3: craftingMap[hero.statsunknown2r3],
    active1: activeSkillMap[hero.active1],
    active1R1: activeSkillMap[hero.active1r1],
    active1R2: activeSkillMap[hero.active1r2],
    active1R3: activeSkillMap[hero.active1r3],
    active2: activeSkillMap[hero.active2],
    active2R1: activeSkillMap[hero.active2r1],
    active2R2: activeSkillMap[hero.active2r2],
    active2R3: activeSkillMap[hero.active2r3],
    passive1: passiveSkillMap[hero.passive1],
    passive1R1: passiveSkillMap[hero.passive1r1],
    passive1R2: passiveSkillMap[hero.passive1r2],
    passive1R3: passiveSkillMap[hero.passive1r3],
    passive2: passiveSkillMap[hero.passive2],
    passive2R1: passiveSkillMap[hero.passive2r1],
    passive2R2: passiveSkillMap[hero.passive2r2],
    passive2R3: passiveSkillMap[hero.passive2r3],
    background: backgroundMap[hero.background],
    backgroundR1: backgroundMap[hero.backgroundr1],
    backgroundR2: backgroundMap[hero.backgroundr2],
    backgroundR3: backgroundMap[hero.backgroundr3],
    element: elementMap[hero.element],
    elementR1: elementMap[hero.elementr1],
    elementR2: elementMap[hero.elementr2],
    elementR3: elementMap[hero.elementr3],
    gender: genderMap[hero.gender],
    genderR1: genderMap[hero.genderr1],
    genderR2: genderMap[hero.genderr2],
    genderR3: genderMap[hero.genderr3],
    hairStyle: hairStyleGenderMap[genderMap[hero.gender]][hero.hairstyle],
    hairStyleR1: hairStyleGenderMap[genderMap[hero.gender]][hero.hairstyler1],
    hairStyleR2: hairStyleGenderMap[genderMap[hero.gender]][hero.hairstyler2],
    hairStyleR3: hairStyleGenderMap[genderMap[hero.gender]][hero.hairstyler3],
    headAppendage: headAppendageMap[hero.headappendage],
    headAppendageR1: headAppendageMap[hero.headappendager1],
    headAppendageR2: headAppendageMap[hero.headappendager2],
    headAppendageR3: headAppendageMap[hero.headappendager3],
    appendageColor: appendageColorMap[hero.appendagecolor],
    appendageColorR1: appendageColorMap[hero.appendagecolorr1],
    appendageColorR2: appendageColorMap[hero.appendagecolorr2],
    appendageColorR3: appendageColorMap[hero.appendagecolorr3],
    backAppendage: backAppendageMap[hero.backappendage],
    backAppendageR1: backAppendageMap[hero.backappendager1],
    backAppendageR2: backAppendageMap[hero.backappendager2],
    backAppendageR3: backAppendageMap[hero.backappendager3],
    hairColor: hairColorMap[hero.haircolor],
    hairColorR1: hairColorMap[hero.haircolorr1],
    hairColorR2: hairColorMap[hero.haircolorr2],
    hairColorR3: hairColorMap[hero.haircolorr3],
    backAppendageColor: appendageColorMap[hero.backappendagecolor],
    backAppendageColorR1: appendageColorMap[hero.backappendagecolorr1],
    backAppendageColorR2: appendageColorMap[hero.backappendagecolorr2],
    backAppendageColorR3: appendageColorMap[hero.backappendagecolorr3],
    eyeColor: eyeColorMap[hero.eyecolor],
    eyeColorR1: eyeColorMap[hero.eyecolorr1],
    eyeColorR2: eyeColorMap[hero.eyecolorr2],
    eyeColorR3: eyeColorMap[hero.eyecolorr3],
    skinColor: skinColorMap[hero.skincolor],
    skinColorR1: skinColorMap[hero.skincolorr1],
    skinColorR2: skinColorMap[hero.skincolorr2],
    skinColorR3: skinColorMap[hero.skincolorr3],
    pjStatus: hero.pjstatus === "SURVIVED",
    strengthGrowthP: hero.strengthgrowthp / 100,
    enduranceGrowthP: hero.endurancegrowthp / 100,
    wisdomGrowthP: hero.wisdomgrowthp / 100,
    vitalityGrowthP: hero.vitalitygrowthp / 100,
    luckGrowthP: hero.luckgrowthp / 100,
    agilityGrowthP: hero.agilitygrowthp / 100,
    dexterityGrowthP: hero.dexteritygrowthp / 100,
    intelligenceGrowthP: hero.intelligencegrowthp / 100,
    name: `${hero.firstname_string} ${hero.lastname_string}`,
    summonTears: hero.summoner_tears + hero.assistant_tears,
    statBoost1: statMap[hero.statboost1],
    statBoost1R1: statMap[hero.statboost1r1],
    statBoost1R2: statMap[hero.statboost1r2],
    statBoost1R3: statMap[hero.statboost1r3],
    statBoost2: statMap[hero.statboost2],
    statBoost2R1: statMap[hero.statboost2r1],
    statBoost2R2: statMap[hero.statboost2r2],
    statBoost2R3: statMap[hero.statboost2r3],
    summonStone: Object.entries(enhancementStoneAddrMap).reduce((acc, [ , map ]) => {
      const r = Object.entries(map).reduce((v, [ symbol, addr ]) => {
        if (addr.toLowerCase() === (
          hero.summon_stone || ""
        ).toLowerCase()) {
          v = symbol;
        }
        return v;
      }, "");
      if (r !== "") {
        acc = r as EnhancementStoneSymbol;
      }
      return acc;
    }, "" as EnhancementStoneSymbol),
    highestStat: 0,
    questBonus: [ false, false, 0 ],
  };
  h.highestStat = getHighestStat(h)
  h.questBonus = getQuestBonus(h)
  return h;
};
