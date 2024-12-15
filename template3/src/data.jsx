import heroImg from './assets/hero1.png';
import navbarImg from './assets/memeLogo2.png';
import aboutImg from './assets/about.png';
import backgroundImage from './assets/herobg2.jpg';
import telegram from "./assets/svgs/icons8-telegram-app.svg";
import twitter from "./assets/svgs/icons8-twitter.svg";
import discord from "./assets/svgs/icons8-discord.svg";
import backgroundHtb from './assets/herobg2.jpg';


export const data = {
  navbar: {
    title: "$Shiva",
    image: navbarImg,
    menus: [
      { text: "Home", link: "/" },
      { text: "About", link: "#about" },
      { text: "Contact", link: "#footer" }
    ],
    button: [
      {text: "Chart", link: "/"},
      {text: "Buy $Shiva", link: "/"},
    ],
    hamburger: true
  },
  hero: {
    title: "Welcome to the Shiva Meme Coin Revolution – The Ultimate Fusion of Fun, Community, and Financial Freedom!",
    description: "Dive into the heart of the meme coin craze with a token that captures the playful essence of the iconic Shiba Inu. Join us in a journey where crypto meets camaraderie, and where every holder is part of an unstoppable pack.",
    buttons: [
      { text: "Buy $Shiva", link: "/" },
    ],
    image: heroImg,
    backgroundImage: backgroundImage
  },
  tokenomics: {
    title: "Tokenomics",
    details: [
      {
        title: "0%",
        description: "Buy Tax",
        link: "https://stripe.com",
      },
      {
        title: "0%",
        description:"Sell Tax",
        link:"https://netflix.com",
      },
      {
        title: "100%",
        description:"LP Burnt",
        link:"https://google.com",
      },
    ]
},
  about: {
    title: "SHIVA",
    subtitle: "About us",
    description: [
      'At $Shiva, we believe in the power of memes to bring people together. Our mission is to create a fun, inclusive, and rewarding ecosystem for crypto enthusiasts. Our dedicated team of developers, artists, and community leaders are passionate about making [Coin Name] a unique and entertaining asset in the blockchain space.',
      "#SHIVA #DOGE #SOL #SOLANA #SHIVADOGE #SHIVADOGEARMY #SHIVADOGEFAM",
    ],
    buttons: false,
    image: aboutImg
  },
  tradeLink: 'https://dexscreener.com/solana/BBeZSVTCWMQemzZd1qQuoa4G7ifDhodaC9qvZ6o9nH11?embed=1&theme=dark&trades=0&info=0',
  contractAddress: 'BBeZSVTCWMQemzZd1qQuoa4G7ifDhodaC9qvZ6o9nH11',
  infiniteScroll: [
    {
      text: "Shiva Token",
      image: heroImg
    },
    {
      text: "Shiva token",
      image: heroImg
    },
    {
      text: "Shiva token",
      image: heroImg
    },
    {
      text: "Shiva token",
      image: heroImg
    },
    {
      text: "Shiva token",
      image: heroImg
    },
  ],
  howToBuy: {
    title: "How to Buy",
    steps: [
      {
        title: "Step 1: Download a Crypto Wallet",
        description: "Download a wallet like MetaMask or Trust Wallet, which supports Ethereum-based tokens. Follow the instructions to create a secure wallet and store your passphrase safely.",
        image: null,
        backgroundImage: null,
      },
      {
        title: "Step 2: Fund your wallet",
        description: "Purchase $ETH through your wallet or transfer it from an exchange. This ETH will be used to buy $Shiva.",
        image: null,
        backgroundImage: null,
      },
      {
        title: "Step 3: Visit our wallet listing partners",
        description: "Transfer SOL to your wallet",
        image: null,
        backgroundImage: null,
      },
      {
        title: "Step 4: Swap $ETH for $Shiva",
        description: "Trade your $ETH for $Shiva. Copy and paste the contract address to find $Shiva.",
        image: null,
        backgroundImage: null,
      },
      {
        title: "Step 5: CELEBRATE!",
        description: "Join us on Discord or Telegram to connect with fellow $Shiva fans and stay updated on the latest happenings.",
        image: null,
        backgroundImage: null,
      },
    ],
    backgroundImage: backgroundHtb,
  },
  footer: {
    title: "",
    buttons: [
      { text: telegram, link: "/" },
      { text: twitter, link: "/" },
      { text: discord, link: "/" },
    ],
    appName: 'Shiva',
    paragraph: "Join our community to stay up to date with the latest news, events, and giveaways!",
  },
  theme: {
    primary: "#FA876A",
    primaryLight: "rgba(241,63,55,0.94)",
    secondary: "#F4CCBE",
    secondaryLight: "rgba(190,183,164,0.93)",
    accent: "#FFEB4A",
    light: "#fefefe",
    dark: "#1c1c1c",
  }
};