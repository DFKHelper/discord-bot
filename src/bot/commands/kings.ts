import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Realm } from "../../lib/types";
import { embedCurrentBuilder } from "../embeds";

const data = new SlashCommandBuilder()
  .setName("kings")
  .setDescription("Get the current DFK Duel kings")
  .addStringOption(option =>
    option.setName("realm")
      .setDescription("DFK Realm")
      .setRequired(true)
      .addChoices(
        { name: "CV", value: "dfk" },
        { name: "SD", value: "klaytn" },
      ),
  )
  .addBooleanOption(option =>
    option.setName("public")
      .setDescription("Show publicly"));

const execute = async (interaction: ChatInputCommandInteraction) => {
  const realm = interaction.options.getString("realm") as Realm;
  await interaction.reply({
    embeds: [ embedCurrentBuilder(realm, global.kings[realm]) ],
    ephemeral: !interaction.options.getBoolean("public"),
  });
};

export default { data, execute };
