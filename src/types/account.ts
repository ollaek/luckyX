export type TAccountState = {
    MobileNumber: boolean;
    OTP: boolean;
    Merged: boolean;
    isLoading: boolean;
    errorMSG: String;
    otpWaitingTime: number;
    isMobileExistInLucky: boolean;
    isMobileMerged: boolean;
    success: string;
  };