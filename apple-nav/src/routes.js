import React from 'react';

import Mac from './Components/SubNavComponents/Mac';
import Ipad from './Components/SubNavComponents/Ipad';
import Iphone from './Components/SubNavComponents/Iphone';
import Watch from './Components/SubNavComponents/Watch';
import Tv from './Components/SubNavComponents/Tv';
import Support from './Components/SubNavComponents/Support';
import Search from './Components/SubNavComponents/Search';
import Bag from './Components/SubNavComponents/Bag';
import Music from './Components/SubNavComponents/Music';

export const mainRoutes = [
  {
    path: "/",
    exact: true,
    subnav: () => <div>Main: home</div>
  },
  {
    path: "/mac",
    exact: true,
    subnav: () => <div><Mac /></div>
  },
  {
    path: "/ipad",
    exact: true,
    subnav: () => <div><Ipad /></div>
  },
  {
    path: "/iphone",
    exact: true,
    subnav: () => <div><Iphone /></div>
  },
  {
    path: "/watch",
    exact: true,
    subnav: () => <div><Watch /></div>
  },
  {
    path: "/tv",
    exact: true,
    subnav: () => <div><Tv /></div>
  },
  {
    path: "/music",
    exact: true,
    subnav: () => <div><Music /></div>
  },
  {
    path: "/support",
    exact: true,
    subnav: () => <div><Support /></div>
  },
  {
    path: "/search",
    exact: true,
    subnav: () => <div><Search /></div>
  },
  {
    path: "/bag",
    exact: true,
    subnav: () => <div><Bag /></div>
  }
];

export const subRoutes = [
  {
    path: "/macbook",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/macbook-air",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/macbook-pro",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/imac",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/imac-pro",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/mac-pro",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/mac-mini",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/mac/accessories",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/mojave",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/compare",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/ipad-pro",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/ipad-air",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/ipad_",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/ipad-mini",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/ipad/compare",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/apple-pencil",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/smart-keyboard",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/ipad/accessories",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/ios12",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/iphonexs",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/iphonexr",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/iphone8",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/iphone7",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/iphone/compare",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/apple-card",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/airpods",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/iphone/accessories",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/apple-music",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/itunes",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/homepod",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/airpods",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/ipod-touch",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/music/accessories",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/giftcards",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/apple-tv-app",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/apple-tv-plus",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/apple-tv-4k",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/apple-tv-hd",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/airplay",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/tv/accessories",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/series4",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/nikeplus",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/hermes",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/series3",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/watchos",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/bands",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/watch/accessories",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  },
  {
    path: "/watch/compare",
    exact: true,
    content: () => <div>Subnav Main Content</div>
  }
];
