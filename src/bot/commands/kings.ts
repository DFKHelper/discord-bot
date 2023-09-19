import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChatInputCommandInteraction,
  ComponentType,
  SlashCommandBuilder,
} from "discord.js";
import { Realm } from "../../lib/types";
import { embedCurrentBuilder } from "../embeds";

const data = new SlashCommandBuilder()
  .setName("kings")
  .setDescription("Get the current DFK Duel kings")
  .addStringOption(option =>
    option.setName("realm")
      .setDescription("DFK Realm")
      .addChoices(
        { name: "CV", value: "dfk" },
        { name: "SD", value: "klaytn" },
      ),
  )
  .addBooleanOption(option =>
    option.setName("public")
      .setDescription("Show publicly"));

const execute = async (interaction: ChatInputCommandInteraction) => {

  const initialRealm: Realm = interaction.options.getString("realm") as Realm || "dfk";

  const makeRow = (realm: Realm) => {
    const dfkButton = new ButtonBuilder()
      .setCustomId('dfk')
      .setLabel('Crystalvale')
      .setStyle(ButtonStyle.Primary)
      .setDisabled(realm === 'dfk')
    const klaytnButton = new ButtonBuilder()
      .setCustomId('klaytn')
      .setLabel('Serendale')
      .setStyle(ButtonStyle.Success)
      .setDisabled(realm === 'klaytn')
    return new ActionRowBuilder<ButtonBuilder>()
      .addComponents(dfkButton, klaytnButton);
  }


  const response = await interaction.reply({
    embeds: [ embedCurrentBuilder(initialRealm, global.kings[initialRealm]) ],
    components: [makeRow(initialRealm)],
    ephemeral: !interaction.options.getBoolean("public"),
  });
  const collector = response.createMessageComponentCollector({ componentType: ComponentType.Button, time: 3_600_000 });
  collector.on('collect', async i => {
    const realm = i.customId as Realm;
    await i.update({
      embeds: [ embedCurrentBuilder(realm, global.kings[realm]) ],
      components: [makeRow(realm)],
    });
  });
};

export default { data, execute };
