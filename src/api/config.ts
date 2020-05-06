import axios from "axios";

const config = {
  get: () =>
    axios
      .get(`${process.env.PUBLIC_URL}/config.json`)
      .then(res => {
        return res.data;
      })
};

export { config };
