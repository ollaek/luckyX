export type UserModel = {
  Id: string;
  Name: string;
  Email: string;
  Phone: string;
  AccessToken: string;
  RefreshToken: string;
};

export type SocialUserModel = {
  Email: string;
  FullName: string;
  SocialId: string;
};

export type TUserState = {
  User: UserModel;
  isFetching: boolean;
};
