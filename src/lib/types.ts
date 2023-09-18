import { Address } from "viem";

export type Realm = "dfk" | "klaytn";

export type Lobby = 1n | 3n | 9n;

export type King = {
  lobby: Lobby;
  name: string;
  address: Address;
  heroes: readonly bigint[];
};

export type NewKingData = { lobby: Lobby, newKing: King, oldKing: King };

export type Kings = Record<Realm, King[]>;

export type ArrayItem<T> = T extends (infer I)[] ? I : T;
