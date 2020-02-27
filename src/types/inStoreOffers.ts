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

export type RegionModel = {
  Id: number;
  Name: string;
};

export type AreaModel = {
  Id: number;
  Name: string;
  Regions: RegionModel[];
};

export type OffersModelWithTotalCount = {
  AffiliateOffersList: InStoreOfferModel[],
  TotalCount: number
}

export type OffersRequestModel = {
  pageSize: number,
  pageIndex: number
}

export type TInStoreOffersState = {
  isLoading: boolean;
  Offers: InStoreOfferModel[];
  TotalCount: number;
  Areas: AreaModel[];
};
