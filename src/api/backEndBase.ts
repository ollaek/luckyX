import axios from "axios";

export default axios.create({
    baseURL: "https://luckyaffiliateapistaging.dsquares.com/api/",
    params: {
        Authorization: localStorage.getItem("Token") ? `Bearar ${localStorage.getItem("Token")}` : null,
        LanguageId: 1
    }
});