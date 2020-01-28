import authBase from "./authBase";

import { SocialUserModel } from "../types";

const authApi = {
  extrnalSignIn: (user: SocialUserModel) =>
    authBase
      .post("account/sociallogin", {
        Email: user.Email,
        FullName: user.FullName,
        SocialId: user.SocialId
      })
      .then(res => {
        return res.data;
      })
};

export { authApi };
