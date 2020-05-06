import axios from "axios";

export default axios.create({
  baseURL: "https://luckyaffiliateuserapistaging.dsquares.com/api/",
  headers: {
    common: {
      Authorization: localStorage.getItem("Token")
        ? `Bearer ${localStorage.getItem("Token")}`
        : null,
      LanguageId: 1
    }
  }
});
