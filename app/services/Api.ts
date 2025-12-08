// https://api.coingecko.com/api/v3/exchanges ==> fetching All of The Coins Trust Ranking Wise 
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&page=1 ==? Exachanging All of the  in Other Currency
// https://api.coingecko.com/api/v3/coins/bitcoin ==> Fetching Particulear Coin  Details

import axios from "axios"


const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  timeout: 10000, // optional
});

// Example API Calls
export const getExchanges = () => api.get("/exchanges");
export const getCoins = (Curr: string, Num: number) => api.get(`/coins/markets?vs_currency=${Curr}&page=${Num}`);
 export const GetCoinDetails=(Coin:string)=>api.get(`/coins/${Coin}`);

export default api;
