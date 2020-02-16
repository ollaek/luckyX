import backEndBase from "./backEndBase";

import { TopStoresRequestModel } from "../types";

const appApi = {
    getStores : (req:TopStoresRequestModel) => (
        backEndBase.post('/merchant/get-affiliate-merchants',{
            LanguageId: req.LanguageId,
            Featured: req.Featured,
            FeaturedMerchantsNumber: req.FeaturedMerchantsNumber,
            pageSize: req.pageSize,
            pageIndex: req.pageIndex
        }).then((res)=>{ return res.data })
    ),
    getCategories: () => (
        backEndBase.get('/AffiliateCategory/get-highest-cashback-categories').then((res)=>{ return res.data })
    ),
};

export {
    appApi
};