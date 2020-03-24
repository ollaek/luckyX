import axios from "axios";

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("Token") ? `${localStorage.getItem("Token")}` : null}`;
axios.defaults.headers.common["LanguageId"] = 1;

export default axios.create({
    baseURL: "https://luckyaffiliateapistaging.dsquares.com/api/",
    params: {
        Authorization: localStorage.getItem("Token") ? `Bearar ${localStorage.getItem("Token")}` : null,
        LanguageId: 1
    }
});