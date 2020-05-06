import axios from 'axios';

export default {
  setupInterceptors: () => {
      axios.interceptors.response.use(response => {
        return response;
      }, error => {
      if (error.response.status === 404) {
        window.location.assign('/Error404');
      }

      if (!error.status) {
        window.location.assign('/ErrorNoConnection');
      }

      return Promise.reject(error);
    });
  },
};