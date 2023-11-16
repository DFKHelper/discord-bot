import { DuelS6DiamondABI, mainContractAddrMap } from "@dfkhelper/core";

export const dfkDuel = { address: mainContractAddrMap["53935"].Duel, abi: DuelS6DiamondABI } as const;
export const klaytnDuel = { address: mainContractAddrMap["8217"].Duel, abi: DuelS6DiamondABI } as const;
export const multicallAddress = "0xcA11bde05977b3631167028862bE2a173976CA11" as const;
