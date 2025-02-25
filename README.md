# Ethereum Wallet Dashboard

This is a simple Ethereum Wallet Dashboard built with **Next.js, TypeScript, TailwindCSS, Zustand, and Ethers.js**. The application allows users to connect their MetaMask wallet, view their Ethereum balance, and check their transaction history.

## 🚀 Features
- Connects to **MetaMask** wallet
- Displays **Ethereum balance**
- Fetches and displays **transaction history** using **Etherscan API**
- State management with **Zustand**

## 🛠️ Tech Stack
- **Next.js** – React framework for server-side rendering
- **TypeScript** – Strongly typed JavaScript
- **TailwindCSS** – Utility-first CSS framework
- **Ethers.js** – Interacting with Ethereum blockchain
- **Zustand** – Simple state management

## 📦 Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/linked-ts/wallet-dashboard.git
   cd wallet-dashboard
   ```
2. **Install dependencies**
   ```sh
   npm install  # or yarn install
   ```
3. **Create a `.env.local` file** and add your Etherscan API key:
   ```sh
   NEXT_PUBLIC_ETHERSCAN_API_KEY=your_api_key_here
   ```
4. **Run the development server**
   ```sh
   npm run dev  # or yarn dev
   ```

## 📝 License
This project is **MIT licensed**. Feel free to use and modify it!
