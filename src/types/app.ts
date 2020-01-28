export type TopStoresModel = {
    id: number,
    name: string,
    logo: string,
    cashback: string  
};

export type TopCategoriesModel = {
    id: number,
    name: string,
    logo: string,
    cashback: string    
};


export type TAppState = {
    isLoading: boolean,
    topStores: TopStoresModel[],
    topCategories: TopCategoriesModel[]
};

