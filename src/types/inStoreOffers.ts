export type InStoreOfferModel = {
  OfferId: number;
  OfferTitle: string[];
  ExpireDate: Date;
  OriginalPrice?: any;
  OfferPrice?: any;
  OfferPercentage: number;
  OfferDiscountTypeName: string[];
  Value: number;
  IsTop?: any;
  SortingNumber: number;
  NumberOfFavorites: number;
  CategoryId: number;
  CategoryName: string[];
  MerchantName: string;
  MerchantLogoDb: string[];
  OfferImgDb: string[];
};

export type InStoreOfferDetailsModel = {
  OfferId: number;
  OfferTitle: string[];
  ExpireDate: Date;
  OriginalPrice?: any;
  OfferPrice?: any;
  OfferPercentage: number;
  OfferDiscountTypeName: string[];
  Value?: any;
  IsTop?: any;
  SortingNumber: number;
  NumberOfFavorites: number;
  MerchantId: any;
  CategoryId: number;
  CategoryName: string[];
  TermsAndConditions: string[];
  Description: string[];
  Branches: BranchModal[];
  MerchantName: string;
  MerchantLogoDb: string[];
  OfferImages: OfferImageModal[];
};

export type OfferImageModal = {
  Name: string;
  Type: string;
  Url: string;
};

export type BranchModal = {
  Id: number;
  Address: string;
  Name: string;
  CityId: number;
  Latitude?: any;
  Longtitude?: any;
  ShortenUrl?: any;
  Phone?: any;
  WorkingHoursFrom?: any;
  WorkingHoursTo?: any;
  BranchGeoCoordinate?: any;
};

export  type Region = {
  Id: number;
  Name: string;
}

export  type City = {
  Id: number;
  Name: string;
  Regions: Region[];
}

export  type SubCategory2 = {
  Id: number;
  Name: string;
  SubCategories?: any;
  Image?: any;
}

export  type SubCategory = {
  Id: number;
  Name: string;
  SubCategories: SubCategory2[];
  Image: string;
}

export type Category = {
  Id: number;
  Name: string;
  SubCategories: SubCategory[];
  Image: string;
  SortingOrder?: any;
}

export type CitiesAndCategories = {
  Cities: City[];
  Categories: Category[];
}

export type OffersFilterRequestModel = {
  RegionIds: number[];
  CategoryIds: number[];
  pageSize: number;
  pageIndex: number;
}

export type OffersModelWithTotalCount = {
  AffiliateOffersList: InStoreOfferModel[];
  TotalCount: number;
};

export type OffersRequestModel = {
  pageSize: number;
  pageIndex: number;
};

export type TInStoreOffersState = {
  isLoading: boolean;
  Offers: InStoreOfferModel[];
  Offer: InStoreOfferDetailsModel;
  TotalCount: number;
  Cities: City[];
  Categories: Category[];
  RelatedOffers: InStoreOfferModel[];
};
