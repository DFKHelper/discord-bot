import { Channel, Client } from "discord.js";
import { Kings } from "./types";

global.kings = {} as Kings;

global.client = undefined as Client;

global.announcementChannel = undefined as Channel;
