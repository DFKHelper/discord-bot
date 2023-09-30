import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChatInputCommandInteraction,
  ComponentType,
  SlashCommandBuilder,
} from "discord.js";
import { fetchHero } from "../../lib/fetch";
import { HeroInteractionButtonIdType } from "../../lib/types";
import { heroEmbedBuilder } from "../embeds/heroes";

const data = new SlashCommandBuilder()
  .setName("hero")
  .setDescription("Get information about a Hero")
  .addNumberOption(option => option.setName("id").setDescription("Hero ID").setRequired(true))
  .addBooleanOption(option => option.setName("public").setDescription("Show publicly"));

const execute = async (interaction: ChatInputCommandInteraction) => {

  const heroId = interaction.options.getNumber("id");
  if (heroId < 1 || heroId > 2999999999999) {
    await interaction.reply({
      content: `Uh... ${heroId}? That's not a valid Hero ID bud. Try again.`,
      ephemeral: true,
    });
    return;
  }
  const hero = await fetchHero(heroId);
  if (!hero) {
    await interaction.reply({
      content: `Uh... ${heroId}? That's not a valid Hero ID bud. Try again.`,
      ephemeral: true,
    });
    return;
  }
  const makeRow = (selected: HeroInteractionButtonIdType) => {
    const basics = new ButtonBuilder()
      .setCustomId("basics")
      .setLabel("Basics")
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(selected === "basics");
    const stats = new ButtonBuilder()
      .setCustomId("stats")
      .setLabel("Stats")
      .setStyle(ButtonStyle.Success)
      .setDisabled(selected === "stats");
    const advanced = new ButtonBuilder()
      .setCustomId("recessives")
      .setLabel("Recessives")
      .setStyle(ButtonStyle.Danger)
      .setDisabled(selected === "recessives");
    return new ActionRowBuilder<ButtonBuilder>()
      .addComponents(basics, stats, advanced);
  };

  const response = await interaction.reply({
    embeds: [ heroEmbedBuilder(hero, "basics") ],
    components: [ makeRow("basics") ],
    ephemeral: !interaction.options.getBoolean("public"),
  });
  const collector = response.createMessageComponentCollector({ componentType: ComponentType.Button, time: 3_600_000 });
  collector.on("collect", async i => {
    const view = i.customId as HeroInteractionButtonIdType;
    await i.update({
      embeds: [ heroEmbedBuilder(hero, view) ],
      components: [ makeRow(view) ],
    });
  });
};

export default { data, execute };
