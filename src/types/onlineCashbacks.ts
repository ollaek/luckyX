import { StoresModelWithTotalCount } from "./";

export type StoreDetailsModel = {
    MerchantId: number,
    AffiliateMerchantId: number,
    MerchantNameDb: string[],
    MerchantWebsiteUrl: string,
    CashbackValue: string,
    CashbackIndicatorId: number,
    LastEditDate: string,
    MerchantLogoDb: string[],
    AffiliateCategoryMerchants: StoreCategoryModel[],
    TermsandConditions: string,
    Description: string,
    AboutTheMerchant: string
};

export type StoreCategoryModel = {
    AffiliateCategoryId: number,
    AffiliateCategoryName: string[],
    CategoryLogo: string,
    CashbackValue: string,
    CashbackIndicatorId: number
}

export type CategoriesModel = {
    AffiliateCategoryId: number,
    AffiliateCategoryName: string
}

export type StoresByCategoryIdRequestModel = {
    categoryId:number,
    pageSize: number,
    pageIndex: number
};

export type TOnlineCashbacksState = {
    isLoading: boolean,
    storeDetails?: StoreDetailsModel,
    stores?: StoresModelWithTotalCount,
    catrgories: CategoriesModel[]
};