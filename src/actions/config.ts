import actionCreatorFactory from "typescript-fsa";

import { config } from "../api/config";
import { asyncAction } from "../helpers";
import actionIds from "./action-ids";

const actionCreator = actionCreatorFactory();

const getConfigAction = actionCreator.async<any, string[], any>(
  actionIds.CONFIG_GET
);


const getConfigAsync = asyncAction(getConfigAction, config.get);


export {
  getConfigAction,
  getConfigAsync,
};
