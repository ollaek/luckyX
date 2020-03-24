import axios from "axios";

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("Token") ? `${localStorage.getItem("Token")}` : null}`;
axios.defaults.headers.common["LanguageId"] = 1;

export default axios.create({
    baseURL: "https://luckyaffiliateuserapistaging.dsquares.com/api/",
});