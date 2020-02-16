export type TopStoresModel = {
    MerchantId: number,
    MerchantNameDb: string[],
    MerchantLogoDb: string[],
    CashbackValue: string,
    CashbackIndicatorId: number  ,
    AffiliateMerchantId: string
};

export type TopStoresRequestModel = {
    LanguageId: number,
    Featured: boolean,
    FeaturedMerchantsNumber?: number,
    pageSize:number,
    pageIndex:number
};

export type TopCategoriesModel = {
    AffiliateCategoryId: number,
    AffiliateCategoryName: string[],
    CategoryLogo: string,
    CashbackValue: string,
    CashbackIndicatorId: number
};


export type TAppState = {
    isLoading: boolean,
    topStores: TopStoresModel[],
    topCategories: TopCategoriesModel[]
};

