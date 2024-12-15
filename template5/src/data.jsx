import heroImg from './assets/trump/5.png';
import navbarImg from './assets/memeLogo1.png';
import aboutImg from './assets/trump/TRUMP BOOK.png';
import backgroundAbout from './assets/trump/bgAbout.png';
import backgroundImage from './assets/trump/america-flag.jpg';
import telegram from "./assets/svgs/icons8-telegram-app.svg";
import twitter from "./assets/svgs/icons8-twitter.svg";
import discord from "./assets/svgs/icons8-discord.svg";
import tokenomiksImg from './assets/trump/bookOfTrump1.jpg';
import backgroundTokenomics from './assets/whiteBg3.jpg';
import backgroundHtb from './assets/whiteBg3.jpg';
import htbImg1 from './assets/trump/books/1.png';
import htbImg2 from './assets/trump/books/2.png';
import htbImg3 from './assets/trump/books/3.png';
import htbImg4 from './assets/trump/books/4.png';
import htbImg5 from './assets/trump/books/5.png';


export const data = {
  navbar: {
    title: "$BookOfTrump",
    image: navbarImg,
    menus: [
      { text: "Telegram", link: "#about" },
      { text: "Twitter", link: "#footer" }
    ],
    button: [
        {text: "Buy $BookOfTrump", link: "/"},
        {text: "Links", link: "#footer"},
    ],
    hamburger: true
  },
  hero: {
    title: "BookOfTrump",
    description: "The Art of the Deal",
    buttons: [
      { text: "Telegram", link: "/" },
      { text: "Twitter", link: "/" }
    ],
    image: heroImg,
    backgroundImage: backgroundImage
  },
  tokenomics: {
    title: "Tokenomics",
    image: tokenomiksImg,
    backgroundImage: backgroundTokenomics,
    details: [
      {
        title: "$BOT",
        description: "Ticker",
      },
      {
        title: "Ethereum",
        description: "Network",
      },
      {
        title: "No Tax 0/0",
        description: "Texes",
      },
      {
        title: "100% Burned",
        description: "Liquidity",
      },
      {
        title: "100,000,000",
        description: "Total Supply",
      },
      {
        title: "Renounced",
        description: "Contract Ownership",
      },
    ],
  },
  about: {
    title: "Book Of Trump",
    subtitle: "About us",
    description: [
      'BookOfTrump is the latest, boldest meme coin to hit the blockchain, blending humor, satire, and the unstoppable force of internet culture. This token is more than just a cryptocurrency—it\'s a movement for those who appreciate the lighter side of politics and meme finance. Built on the foundation of community-driven projects, BookOfTrump is your ticket to ride the wave of meme-coin success while poking a little fun at one of the most talked-about figures in modern history.',
    ],
    image: aboutImg,
    backgroundImage: backgroundAbout,
  },
  tradeLink: 'https://dexscreener.com/solana/BBeZSVTCWMQemzZd1qQuoa4G7ifDhodaC9qvZ6o9nH11?embed=1&theme=dark&trades=0&info=0',
  contractAddress: 'BBeZSVTCWMQemzZd1qQuoa4G7ifDhodaC9qvZ6o9nH11',
  howToBuy: {
    title: "How to Buy",
    steps: [
      {
        title: "Step 1: Download a Crypto Wallet",
        description: "Download a wallet like MetaMask or Trust Wallet, which supports Ethereum-based tokens. Follow the instructions to create a secure wallet and store your passphrase safely.",
        image: htbImg1,
        backgroundImage: null,
      },
      {
        title: "Step 2: Fund your wallet",
        description: "Purchase $ETH through your wallet or transfer it from an exchange. This ETH will be used to buy $BookOfTrump.",
        image: htbImg2,
        backgroundImage: null,
      },
      {
        title: "Step 3: Visit our wallet listing partners",
        description: "Search for 'Book of Trump' by entering the contract address, confirm the token, and swap your ETH for $BOT.",
        image: htbImg3,
        backgroundImage: null,
      },
      {
        title: "Step 4: Swap $ETH for $BookOfTrump",
        description: "Trade your $ETH for $BookOfTrump. Copy and paste the contract address to find $BookOfTrump.",
        image: htbImg4,
        backgroundImage: null,
      },
      {
        title: "Step 5: CELEBRATE!",
        description: "Join us on Discord or Telegram to connect with fellow BookOfTrump fans and stay updated on the latest happenings.",
        image: htbImg5,
        backgroundImage: null,
      },
    ],
    backgroundImage: backgroundHtb,
  },
  infiniteScroll: [
    {
      text: "wolf token",
      image: heroImg
    },
    {
      text: "wolf token",
      image: heroImg
    },
    {
      text: "wolf token",
      image: heroImg
    },
    {
      text: "wolf token",
      image: heroImg
    },
  ],
  footer: {
    title: "",
    buttons: [
      { text: telegram, link: "/" },
      { text: twitter, link: "/" },
      { text: discord, link: "/" },
    ],
    appName: 'BookOfTrump',
    paragraph: "Join our community to stay up to date with the latest news, events, and giveaways!",
  },
  theme: {
    primary: "#FFCC00",
    primaryLight: "#CBDCEB",
    secondary: "#9D0B0B",
    secondaryLight: "rgba(190,183,164,0.93)",
    accent: "#fff",
    light: "#fefefe",
    dark: "#1c1c1c",
  }
};