import { IAPIHero } from "@dfkhelper/core";
import { Address } from "viem";

export const fetchProfileNames = async (addresses: Address[]): Promise<Record<Address, string>> => {
  const res = await fetch("https://api.defikingdoms.com/profiles", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ limit: 10, params: [ { field: "lower_id", operator: "in", value: addresses.map(a => a.toLowerCase()) } ] })
  });

  if (!res.ok) {
    console.error("Error fetching names of addresses:", addresses, res.statusText);
    return {};
  }
  const parsed: { name: string }[] | { name: string } = await res.json();
  let owners;
  if (Array.isArray(parsed)) {
    owners = parsed;
  } else {
    owners = [parsed];
  }
  return owners.reduce((o, { name }, i) => ({...o, [addresses[i]]: name }), {});
};

export const fetchHero = async (id: number) => {
  const res = await fetch("https://api.defikingdoms.com/heroes", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ limit: 1, params: [ { field: "id", operator: "=", value: id } ] })
  });

  if (!res.ok) {
    console.error("Error fetching hero:", id, res.statusText);
    return undefined;
  }
  const heroes: IAPIHero[] = await res.json();
  if (heroes.length === 0) {
    return undefined;
  }
  return heroes[0];
};
