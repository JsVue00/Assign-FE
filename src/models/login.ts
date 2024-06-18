export interface ILoginRequest {
  Username: string;
  Password: string;
  IsAppUser: boolean;
  OnlineId: number;
  WebId: number;
  Ip: string;
  Country: string;
  Url: string;
  Region: string;
  City: string;
  Platform: string;
  Browser: string;
  Lang: string;
  SimulateId: number;
  OperatorId: number;
}

export interface IloginResponse {
  Username: string;
  LoginName: string;
  CustomerId: number;
  ParentId: number;
  Currency: string;
  Token: string;
  BetCredit: number;
  IsPasswordExpired: boolean;
  IsCashPlayer: boolean;
  IsStockPlayer: boolean;
  OnlineId: number;
  IsLoginNameUpdated: boolean;
  CustomerStatus: number;
  AccountType: number;
}
