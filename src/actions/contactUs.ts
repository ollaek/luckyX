import actionCreatorFactory from "typescript-fsa";

import { zendeskApi } from "../api/zendesk";
import { asyncAction } from "../helpers";
import actionIds from "./action-ids";

const actionCreator = actionCreatorFactory();

const getSubjectsAction = actionCreator.async<any, string[], any>(
  actionIds.CONTACT_US_GET_SUBJECTS
);


const getSubjectsAsync = asyncAction(getSubjectsAction, zendeskApi.getSubjects);


export {
  getSubjectsAction,
  getSubjectsAsync,
};
