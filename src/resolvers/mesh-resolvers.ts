import { Resolvers } from '../generated/mesh';
import {
  accountsDataFile,
  bankPageRecordsDataFile,
  batchDataFile,
  recordsDataFile,
  transactionsDataFile,
} from './dataFiles';

export const resolvers: Resolvers = {
  HashavshevetSchemaJsonRecord: {
    batch: {
      selectionSet: `{
      batchId
    }`,
      resolve: async (root, _args, context) => {
        const result = await context.Hashavshevet.api.getBatch({
          input: {
            id: root.batchId,
          },
        });
        return result?.repdata.length && result?.repdata[0];
      },
    },
    transaction: {
      selectionSet: `{
        transactionId
      }`,
      resolve: async (root, _args, context) => {
        const result = await context.Hashavshevet.api.getTransactions();
        return result?.repdata.length && result?.repdata.find((t) => t.id === root.transactionId);
      },
    },
  },
  HashavshevetSchemaJsonTransaction: {
    batch: {
      selectionSet: `{
      batchId
    }`,
      resolve: async (root, _args, context) => {
        const result = await context.Hashavshevet.api.getBatch({
          input: {
            id: root.batchId,
          },
        });
        return result?.repdata.length && result?.repdata[0];
      },
    },
    records: {
      selectionSet: `{
        id
      }`,
      resolve: async (root, _args, context) => {
        const result = await context.Hashavshevet.api.getRecords();
        return result?.repdata.length && result?.repdata.filter((r) => r.transactionId === root.id);
      },
    },
  },
  HashavshevetSchemaJsonBatch: {
    transactions: {
      selectionSet: `{
        batchId
      }`,
      resolve: async (root, _args, context) => {
        const result = await context.Hashavshevet.api.getTransactions();
        return result?.repdata.length && result?.repdata.filter((t) => t.batchId === root.id);
      },
    },
  },
};

export const getRecordsResolver = (next) => (root, args, context, info) => {
  if (!args.input) {
    args.input = {};
  }
  args.input.datafile = recordsDataFile;
  return next(root, args, context, info);
};

export const getTransactionsResolver = (next) => (root, args, context, info) => {
  if (!args.input) {
    args.input = {};
  }
  args.input.datafile = transactionsDataFile;
  return next(root, args, context, info);
};

export const getBatchResolver = (next) => (root, args, context, info) => {
  if (!args.input) {
    args.input = {};
  }
  const parameters = handleBatchParameters(args.input);
  args.input = {
    parameters,
    datafile: batchDataFile,
  };
  return next(root, args, context, info);
};

export const getBankPageRecordsResolver = (next) => (root, args, context, info) => {
  if (!args.input) {
    args.input = {};
  }
  const parameters = handleBankPageRecordsParameters(args.input);
  args.input = {
    parameters,
    datafile: bankPageRecordsDataFile,
  };
  return next(root, args, context, info);
};

export const getAccountsResolver = (next) => (root, args, context, info) => {
  if (!args.input) {
    args.input = {};
  }
  args.input.datafile = accountsDataFile;
  return next(root, args, context, info);
};

const handleBatchParameters = (args) => {
  const parametersArray = [
    {
      p_name: '__MUSTACH_P0__',
      id: '0',
      type: 'long',
      name: 'id',
      defVal: args.id || '-999999999',
      opName: 'שווה',
      opOrigin: 'from',
    },
  ];
  return parametersArray;
};

const handleBankPageRecordsParameters = (args) => {
  const parametersArray = [
    {
      p_name: '__MUSTACH_P0__',
      id: '0', // if you change this, parameter will be ignored
      type: 'long',
      name: 'betweenIDs',
      defVal: args.minID || -999999999,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P1__',
      id: '500', // if you change this, parameter will be ignored
      type: 'long',
      name: 'betweenIDs1',
      defVal: args.maxID || 999999999,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
  ];
  return parametersArray;
};
