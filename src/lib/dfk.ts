import { dfkDuel, klaytnDuel, multicallAddress } from "./constants";
import { fetchProfileNames } from "./fetch";
import { unique } from "./helpers";
import { King, Realm } from "./types";
import { dfkPublicClient, klaytnPublicClient } from "./viem";
import { sendEmbed } from "../bot/embeds";

const getDuel = (realm: Realm) => realm === "dfk" ? dfkDuel : klaytnDuel;
const getClient = (realm: Realm) => realm === "dfk" ? dfkPublicClient : klaytnPublicClient;

export const getCurrentKings = async (realm: Realm): Promise<King[]> => {
  console.log("Getting Current Kings");
  const kingInfo = await getClient(realm).multicall({
    contracts: [
      { ...getDuel(realm), functionName: "getKingInfo", args: [ 1n ] },
      { ...getDuel(realm), functionName: "getKingInfo", args: [ 3n ] },
      { ...getDuel(realm), functionName: "getKingInfo", args: [ 9n ] }
    ],
    multicallAddress,
    allowFailure: false
  })
  const [
    { player: king1, heroes: king1Heroes },
    { player: king3, heroes: king3Heroes },
    { player: king9, heroes: king9Heroes }
  ] = await getClient(realm).multicall({
    contracts: [
      { ...getDuel(realm), functionName: "getDuelEntry", args: [ kingInfo[0][0] ] },
      { ...getDuel(realm), functionName: "getDuelEntry", args: [ kingInfo[1][0] ] },
      { ...getDuel(realm), functionName: "getDuelEntry", args: [ kingInfo[2][0] ] }
    ],
    multicallAddress,
    allowFailure: false
  })

  const kings = await fetchProfileNames([king1, king3, king9].filter(unique));
  return [
    { lobby: 1n, name: kings[king1], heroes: king1Heroes, address: king1 },
    { lobby: 3n, name: kings[king3], heroes: king3Heroes, address: king3 },
    { lobby: 9n, name: kings[king9], heroes: king9Heroes, address: king9 }
  ]
};

const onNewDuelKing = async (realm: Realm) => {
  const newKings = await getCurrentKings(realm);
  await Promise.all(global.kings[realm].map(async (king: King, i: number) => {
    if (king.address !== newKings[i].address) {
      return sendEmbed([realm], global.kings, [ king, newKings[i] ]);
    }
    return Promise.resolve();
  }))
  global.kings[realm] = newKings;
  await sendEmbed(["dfk"], { ...global.kings });
}

export const getInitialKingData = async () => {
  global.kings.dfk = await getCurrentKings("dfk");
  global.kings.klaytn = await getCurrentKings("klaytn");
}


export const listenForNewDuelKingEvents = (realm: Realm) => {
  // noinspection JSUnusedGlobalSymbols
  getClient(realm).watchContractEvent({
    ...getDuel(realm),
    eventName: "DuelNewKing",
    onLogs: async () => onNewDuelKing(realm),
  });
  console.log(`Listening for new duel kings on ${realm}`);
};
