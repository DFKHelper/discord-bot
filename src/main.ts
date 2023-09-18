import "dotenv/config";
import "./lib/state";
import { initializeBot } from "./bot";
import { getInitialKingData, listenForNewDuelKingEvents } from "./lib/dfk";

const main = async () => {
  console.log("Starting DFKHelper Bot");
  initializeBot();
  await getInitialKingData();

  listenForNewDuelKingEvents("dfk");
  listenForNewDuelKingEvents("klaytn");

};

main();
