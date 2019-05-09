import React from "react";

//MainNav
import AppleLogo from './MainNav/AppleLogo';
import SearchLogo from './MainNav/SearchLogo';
import ShopBagLogo from './MainNav/ShopBagLogo';

//Mac
import MacAccessoriesLogo from './Mac/MacAccessoriesLogo';
import MacCompareLogo from './Mac/MacCompareLogo';
import ImacLogo from './Mac/ImacLogo';
import ImacProLogo from './Mac/ImacProLogo';
import MacBookAirLogo from './Mac/MacBookAirLogo';
import MacBookProLogo from './Mac/MacBookProLogo';
import MacBookLogo from './Mac/MacBookLogo';
import MacMiniLogo from './Mac/MacMiniLogo';
import MacProLogo from './Mac/MacProLogo';
import MojaveLogo from './Mac/MojaveLogo';

//Iphone
import IphoneAccessoriesLogo from './iPhone/IphoneAccessoriesLogo';
import AirPodsLogo from './iPhone/AirPodsLogo';
import AppleCardLogo from './iPhone/AppleCardLogo';
import IphoneCompareLogo from './iPhone/IphoneCompareLogo';
import IphoneIos12Logo from './iPhone/IphoneIos12Logo';
import Iphone7Logo from './iPhone/Iphone7Logo';
import Iphone8Logo from './iPhone/Iphone8Logo';
import IphoneXrLogo from './iPhone/IphoneXrLogo';
import IphoneXsLogo from './iPhone/IphoneXsLogo';

//Watch
import AppleWatch3Logo from './Watch/AppleWatch3Logo';
import AppleWatch4Logo from './Watch/AppleWatch4Logo';
import AppleWatchHermesLogo from './Watch/AppleWatchHermesLogo';
import AppleWatchNikeLogo from './Watch/AppleWatchNikeLogo';
import BandsLogo from './Watch/BandsLogo';
import WatchCompareLogo from './Watch/WatchCompareLogo';
import WatchAccessoriesLogo from './Watch/WatchAccessoriesLogo';
import WatchOsLogo from './Watch/WatchOsLogo';

//Tv
import AirPlayLogo from './Tv/AirPlayLogo';
import AppleTv4kLogo from './Tv/AppleTv4kLogo';
import AppleTvHdLogo from './Tv/AppleTvHdLogo';
import AppleTvLogo from './Tv/AppleTvLogo';
import AppleTvPlusLogo from './Tv/AppleTvPlusLogo';
import TvAccessoriesLogo from './Tv/TvAccessoriesLogo';

//iPad
import ApplePencilLogo from './iPad/ApplePencilLogo';
import IpadIos12Logo from './iPad/IpadIos12Logo';
import IpadAccessoriesLogo from './iPad/IpadAccessoriesLogo';
import IpadAirLogo from './iPad/IpadAirLogo';
import IpadCompareLogo from './iPad/IpadCompareLogo';
import IpadLogo from './iPad/IpadLogo';
import IpadMiniLogo from './iPad/IpadMiniLogo';
import IpadProLogo from './iPad/IpadProLogo';
import SmartKeyboardLogo from './iPad/SmartKeyboardLogo';

//Music
import AirpodsLogo from './Music/AirpodsLogo';
import AppleMusicLogo from './Music/AppleMusicLogo';
import GiftCardsLogo from './Music/GiftCardsLogo';
import HomePodLogo from './Music/HomePodLogo';
import IpodTouchLogo from './Music/IpodTouchLogo';
import ItunesLogo from './Music/ItunesLogo';
import MusicAccessoriesLogo from './Music/MusicAccessoriesLogo';


const Icon = props => {
  switch (props.name) {

    //MainNav
    case "appleLogo":
      return <AppleLogo {...props} />;
    case "searchLogo":
      return <SearchLogo {...props} />;
    case "shopBagLogo":
      return <ShopBagLogo {...props} />;

    //Mac
    case "macAccessoriesLogo":
      return <MacAccessoriesLogo {...props} />;
    case "macCompareLogo":
      return <MacCompareLogo {...props} />;
    case "imacLogo":
      return <ImacLogo {...props} />;
    case "imacProLogo":
      return <ImacProLogo {...props} />;
    case "macBookAirLogo":
      return <MacBookAirLogo {...props} />;
    case "macBookLogo":
      return <MacBookLogo {...props} />;
    case "macBookProLogo":
      return <MacBookProLogo {...props} />;
    case "macMiniLogo":
      return <MacMiniLogo {...props} />;
    case "macProLogo":
      return <MacProLogo {...props} />;
    case "mojaveLogo":
      return <MojaveLogo {...props} />;

    //iPhone
    case "iphoneAccessoriesLogo":
      return <IphoneAccessoriesLogo {...props} />;
    case "airPodsLogo":
      return <AirPodsLogo {...props} />;
    case "appleCardLogo":
      return <AppleCardLogo {...props} />;
    case "iphoneCompareLogo":
      return <IphoneCompareLogo {...props} />;
    case "iphoneIos12Logo":
      return <IphoneIos12Logo {...props} />;
    case "iphone7Logo":
      return <Iphone7Logo {...props} />;
    case "iphone8Logo":
      return <Iphone8Logo {...props} />;
    case "iphoneXrLogo":
      return <IphoneXrLogo {...props} />;
    case "iphoneXsLogo":
      return <IphoneXsLogo {...props} />;

    //Watch
    case "appleWatch3Logo":
      return <AppleWatch3Logo {...props} />;
    case "appleWatch4Logo":
      return <AppleWatch4Logo {...props} />;
    case "appleWatchHermesLogo":
      return <AppleWatchHermesLogo {...props} />;
    case "appleWatchNikeLogo":
      return <AppleWatchNikeLogo {...props} />;
    case "bandsLogo":
      return <BandsLogo {...props} />;
    case "watchCompareLogo":
      return <WatchCompareLogo {...props} />;
    case "watchAccessoriesLogo":
      return <WatchAccessoriesLogo {...props} />;
    case "watchOsLogo":
      return <WatchOsLogo {...props} />;

    //Tv
    case "airPlayLogo":
      return <AirPlayLogo {...props} />;
    case "appleTv4kLogo":
      return <AppleTv4kLogo {...props} />;
    case "appleTvHdLogo":
      return <AppleTvHdLogo {...props} />;
    case "appleTvLogo":
      return <AppleTvLogo {...props} />;
    case "appleTvPlusLogo":
      return <AppleTvPlusLogo {...props} />;
    case "tvAccessoriesLogo":
      return <TvAccessoriesLogo {...props} />;

    //iPad
    case "applePencilLogo":
      return <ApplePencilLogo {...props} />;
    case "ipadIos12Logo":
      return <IpadIos12Logo {...props} />;
    case "ipadAccessoriesLogo":
      return <IpadAccessoriesLogo {...props} />;
    case "ipadAirLogo":
      return <IpadAirLogo {...props} />;
    case "ipadCompareLogo":
      return <IpadCompareLogo {...props} />;
    case "ipadLogo":
      return <IpadLogo {...props} />;
    case "ipadMiniLogo":
      return <IpadMiniLogo {...props} />;
    case "ipadProLogo":
      return <IpadProLogo {...props} />;
    case "smartKeyboardLogo":
      return <SmartKeyboardLogo {...props} />;

    //Music
    case "airpodsLogo":
      return <AirpodsLogo {...props} />;
    case "appleMusicLogo":
      return <AppleMusicLogo {...props} />;
    case "giftCardsLogo":
      return <GiftCardsLogo {...props} />;
    case "homePodLogo":
      return <HomePodLogo {...props} />;
    case "ipodTouchLogo":
      return <IpodTouchLogo {...props} />;
    case "itunesLogo":
      return <ItunesLogo {...props} />;
    case "musicAccessoriesLogo":
      return <MusicAccessoriesLogo {...props} />;


    default:
      return;
  }
};

export default Icon;
