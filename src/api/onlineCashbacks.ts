import backEndBase from "./backEndBase";

const onlineCashbacksApi = {
    getStoreDetails: (id:any) => (
        backEndBase.get(`merchant/get-affiliate-merchant-details?merchantId=${id}`).then((res)=>{ return res.data })
    ),
    getStoresByCategoryId: (id:any) => (
        backEndBase.get(`AffiliateCategory/get-affiliate-merchants-by-category?categoryId=${id}`).then((res)=>{return res.data})
    ),
    getAllCategories: () => (
        backEndBase.get(`AffiliateCategory/get-categories?pageSize=100&pageIndex=0`).then((res)=>{return res.data})
    )
};

export {
    onlineCashbacksApi
};