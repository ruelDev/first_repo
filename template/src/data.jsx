import heroImg from './assets/memeLogo1.png';
import aboutImg from './assets/memeLogo1.png';

export const data = {
  navbar: {
    title: "$WOLF",
    menus: [
      { text: "Home", link: "/" },
      // { text: "Tokenomics", link: "#tokenomics" },
      { text: "About", link: "#about" },
      // { text: "Trade", link: "#dexscreener" },
      { text: "Contact", link: "#footer" }
    ]
  },
  hero: {
    title: "Welcome to $WOLF!",
    description: "Join the revolution of fun and community-driven finance with $Wolf, the meme coin that's taking the crypto world by storm! Dive into our vibrant community and discover how you can be part of this exciting journey.",
    buttons: [
      { text: "Telegram", link: "/" },
      { text: "Twitter", link: "/" }
    ],
    image: heroImg
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
      description
:
  "Sell Tax",
      link
:
  "https://netflix.com",
}
,
{
  title: "100%",
      description
:
  "LP Burnt",
      link
:
  "https://google.com",
}
]
},
  about: {
    title: "WOLF",
    subtitle: "About us",
    description: [
      'At $WOLF, we believe in the power of memes to bring people together. Our mission is to create a fun, inclusive, and rewarding ecosystem for crypto enthusiasts. Our dedicated team of developers, artists, and community leaders are passionate about making [Coin Name] a unique and entertaining asset in the blockchain space.',
      "#WOLF #ElonMusk #DOGE #SOL #SOLANA #DRAGON",
      "Contract Address: BBeZSVTCWMQemzZd1q Quoa4G7ifDhodaC9qvZ6o9nH11",
    ],
    buttons: [
      { text: "Buy on RAYDIUM", link: "/" },
    ],
    image: aboutImg
  },
  tradeLink: 'https://dexscreener.com/solana/BBeZSVTCWMQemzZd1qQuoa4G7ifDhodaC9qvZ6o9nH11?embed=1&theme=dark&trades=0&info=0',
  contractAddress: 'BBeZSVTCWMQemzZd1qQuoa4G7ifDhodaC9qvZ6o9nH11',
  footer: {
    title: "Join Our Community",
    buttons: [
      { text: "Join Now", link: "/" },
      { text: "Follow on Twitter", link: "/" }
    ],
    appName: 'WOLF'
  },
  theme: {
    primary: "#10375C",
    primaryLight: "rgb(24,71,119)",
    secondary: "#BEB7A4",
    secondaryLight: "rgba(190,183,164,0.93)",
    accent: "#F3C623",
    light: "#fefefe",
    dark: "#1c1c1c",
  }
};