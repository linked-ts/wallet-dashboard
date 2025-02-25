"use client";

import { useWalletStore } from "@/store/walletStore";

export default function TransactionList() {
  const { transactions } = useWalletStore();

  if (!transactions) return <p className="text-gray-400">Транзакции не найдены</p>;

  return (
    <div className="w-full max-w-2xl bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">История транзакций</h2>
      <ul className="space-y-3">
        {transactions.slice(0, 5).map((tx) => (
          <li key={tx.hash} className="p-3 bg-gray-700 rounded-lg">
            <p><strong>От:</strong> {tx.from}</p>
            <p><strong>Кому:</strong> {tx.to}</p>
            <p><strong>Сумма:</strong> {tx.value} ETH</p>
            <p className="text-gray-400 text-sm">{tx.timeStamp}</p>
            <a
              href={`https://etherscan.io/tx/${tx.hash}`}
              target="_blank"
              className="text-blue-400 underline"
            >
              Подробнее
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
