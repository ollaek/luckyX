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
    pageIndex:number,
    SearchKey?: string
};

export type TopCategoriesModel = {
    AffiliateCategoryId: number,
    AffiliateCategoryName: string[],
    CategoryLogo: string,
    CashbackValue: string,
    CashbackIndicatorId: number
};

export type StoresModelWithTotalCount = {
    AffiliateMerchantsList: TopStoresModel[],
    TotalCount: number
}

export type TAppState = {
    isLoading: boolean,
    topStores?: StoresModelWithTotalCount,
    topCategories: TopCategoriesModel[]
};

