/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export enum NftDetailType {
  BLIND_BOX = "1",
  USER = "2",
  ORDER = "3",
  MARKET = "4",
}

export enum SearchType {
  NORMAL = "normal",
  MARKET = "market",
  M_BOX = "m_box",
}

export enum BannerType {
  BANNER = "banner",
  NOTICE = "notice",
}

export enum SortType {
  createdAt = "createdAt",
  price = "price",
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  HarvestAddress: undefined;
  RealNameAuthentication: undefined;
  InviteFriends: undefined;
  Ceshi: undefined,
  HelpCenterDetails: {
    id: any
  }
  NftDetail: {
    id: number | string;
    title: string;
    dType: NftDetailType;
    orderId?: number | string; // 市场id
    buyId?: number | string; // 用户购买id
  };
  BlindBoxDetail: {
    id: number | string;
    title: string;
    dType: NftDetailType;
    orderId?: number | string;
    attrId?: number | string;
    buyId?: number | string; // 用户购买id

  };
  Home: undefined;
  BannerDetail: {
    index: number;
    title: string;
    type: BannerType;
  };
  NoticeList: {
    index: number;
    title: string;
    type: BannerType;
  };
  NoticeDetail: {
    index: number;
    title: string;
    type: BannerType;
  };
  Three: undefined;
  Modal: undefined;
  NftDetailScreens: undefined;
  Search: {
    type: SearchType;
    k?: string;
  };
  NotFound: undefined;
  PersonalModification: undefined;
  SetUp: undefined;
  HelpCenter: undefined;
  AboutUs: undefined;

  NewAddress?: {
    detail: string;
    mobile: string;
    receiver: string;
    id: string | number;
  };
  AccountSecurity: undefined;
  LoginPassword: undefined;
  TransactionPassword: undefined;
  MyCertification: undefined;
  RealName: undefined;
  BankCardAuthentication: undefined;
  AlipayCertification: undefined;
  WechatAuthentication: undefined;
  MyWallet: undefined;
  Withdrawal: undefined;
  MyOrder: undefined;
  Login: undefined;
  LoginCode: undefined;
  LoginModify: undefined;
  BuyBlindBox: {
    id: number | string;
    dType: NftDetailType;
    orderId?: number | string;
  };
  PayDetail: undefined;
  MyCardRoll: {
    type?: number;
  };
  OrderDateils: {
    id: number | string;
    orderId?: number | string;
    dType: NftDetailType;
    buyId?: number | string; // 用户购买id

  };
  Give: {
    id: number | string;
  };
  Sell: undefined;
  MyViewCertification: undefined;
  MyRightsAndInterests: undefined;
  PrivateRightsPolicy: undefined;
  ServiceAgreement: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  PrivateRightsPolicy: undefined;
  ServiceAgreement: undefined;
  Home: undefined;
  Mine: undefined;
  BlindBoxIndex: undefined;
  MarketIndex: undefined;
  Withdrawal: undefined;
  MyViewCertification: undefined;
  HarvestAddress: undefined;
  RealNameAuthentication: undefined;
  InviteFriends: undefined;
  Market?: {
    tagId: number;
  };
  BlindBox: {
    tagId: number;
  };

};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
