import axios from "axios";
import backEndBase from "./backEndBase";

const axiosBase = axios.create({
  baseURL: "https://dsquares.zendesk.com/api/v2/"
});

const zendeskApi = {
  Request: (req: any) =>
    axiosBase.post("requests.json", {
      request: {
        requester: {
          name: req.name
        },
        subject: req.subject,
        comment: {
          body: req.body
        },
        custom_fields: [{ id: 360017256811, value: req.number }]
      }
    }),
  getSubjects: () =>
    backEndBase
      .get("AffiliateSubject/Get-Affiliate-Subject")
      .then(res => res.data)
};

export { zendeskApi };
