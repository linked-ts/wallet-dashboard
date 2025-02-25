"use client";

import { useWalletStore } from "@/store/walletStore";
import TransactionList from "@/components/TransactionList";

export default function Home() {
  const { account, balance, connectWallet } = useWalletStore();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Ethereum Wallet Dashboard</h1>

      {!account ? (
        <button onClick={connectWallet} className="bg-blue-500 px-6 py-3 rounded-lg text-lg">
          Подключить MetaMask
        </button>
      ) : (
        <div className="text-center">
          <p className="text-lg">👛 Кошелёк: {account}</p>
          <p className="text-lg">💰 Баланс: {balance} ETH</p>

          <div className="mt-6">
            <TransactionList />
          </div>
        </div>
      )}
    </main>
  );
}
