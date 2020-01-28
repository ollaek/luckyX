import dummy from "./dummy";

const appApi = {
    getStores : () => (
        dummy.get('/TopStores').then((res)=>{ return res.data })
    ),
    getCategories: () => (
        dummy.get('/TopCategories').then((res)=>{ return res.data })
    ),
};

export {
    appApi
};