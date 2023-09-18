import { createPublicClient, fallback, http } from "viem";
import { dfk, klaytn } from "viem/chains";

const publicClientSettings = {
  cacheTime: 10_000, // 7s
  pollingInterval: 5_000, // 4s
  batch: {
    multicall: {
      batchSize: 1_024, // 1KB orig
      wait: 500, // 0.5s
    },
  },
}
const makeTransport = (url: string) => http(url, { retryCount: 1, retryDelay: 500, timeout: 3_000 });

const makeFallbackTransport = (urls: string[]) => fallback( urls.map(url => makeTransport(url)), {
  retryCount: 1,
  retryDelay: 500,
  rank: {
    interval: 60_000,
    sampleCount: 10,
  }
});

export const dfkPublicClient = createPublicClient({
  chain: dfk,
  transport: makeFallbackTransport([
    "https://rpc.dfkhelper.com/ext/bc/q2aTwKuyzgs8pynF7UXBZCU7DejbZbZ6EUyHr3JQzYgwNPUPi/rpc",
    "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc",
  ]),
  name: "DFK Chain Public Client",
  ...publicClientSettings,
});

export const klaytnPublicClient = createPublicClient({
  chain: klaytn,
  transport: makeFallbackTransport([
    "https://klaytn.blockpi.network/v1/rpc/public",
    "https://1rpc.io/klay",
  ]),
  name: "Klaytn Chain Public Client",
  ...publicClientSettings
});
