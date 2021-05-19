import { Resolvers } from "./generated/mesh";
import { getRecordsDataFile, getTransactionsDataFile } from "./utils/dataFiles";

export const resolvers: Resolvers = {
  getRecords: (next) => (root, args, context, info) => {
    if (!args.input) {
      args.input = {};
    }
    args.input["datafile"] = getRecordsDataFile;
    return next(root, args, context, info);
  },
  getTransactions: (next) => (root, args, context, info) => {
    if (!args.input) {
      args.input = {};
    }
    args.input["datafile"] = getTransactionsDataFile;
    return next(root, args, context, info);
  },
  
};
