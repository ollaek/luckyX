import backEndBase from "./backEndBase";


const areasApi = {
  get: () =>
    backEndBase
      .get("Lookup/affiliate-areas")
      .then(res => {
        return res.data;
      }),
};

export { areasApi };
