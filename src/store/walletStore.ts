import { create } from "zustand";
import { ethers } from "ethers";
import { persist } from "zustand/middleware";

interface Transaction {
    hash: string;
    from: string;
    to: string;
    value: string;
    timeStamp: string;
}

interface WalletState {
    account: string | null;
    balance: string | null;
    transactions: Transaction[] | null;
    connectWallet: () => Promise<void>;
    fetchTransactions: () => Promise<void>;
}

declare let window: any;

export const useWalletStore = create(
    persist<WalletState>(
        (set, get) => ({
            account: null,
            balance: null,
            transactions: null,

            connectWallet: async () => {
                if (!window.ethereum) {
                    alert("MetaMask is not installed!");
                    return;
                }

                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                const balance = await provider.getBalance(accounts[0]);

                set({
                    account: accounts[0],
                    balance: ethers.formatEther(balance),
                });
                get().fetchTransactions();
            },

            fetchTransactions: async () => {
                const { account } = get();
                if (!account) return;

                const apiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;
                const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${account}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`;

                try {
                    const response = await fetch(url);
                    const data = await response.json();

                    if (data.result) {
                        set({
                            transactions: data.result.map((tx: any) => ({
                                hash: tx.hash,
                                from: tx.from,
                                to: tx.to,
                                value: ethers.formatEther(tx.value),
                                timeStamp: new Date(Number(tx.timeStamp) * 1000).toLocaleString(),
                            })),
                        });
                    }
                } catch (error) {
                    console.error("Ошибка загрузки транзакции", error);
                }
            },
        }),
        {
            name: "wallet-storage",
        }
    )
);
