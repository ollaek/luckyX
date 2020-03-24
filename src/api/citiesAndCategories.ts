import backEndBase from "./backEndBase";


const citiesAndCategoriesApi = {
  get: () =>
    backEndBase
      .get("Filter/affiliate-filter-lookups?languageId=1")
      .then(res => {
        return res.data;
      }),
};

export { citiesAndCategoriesApi };
