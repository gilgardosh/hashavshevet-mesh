import {
  GetAccountsRequestJsonRequest,
  GetBankPageRecordsRequestJsonRequest,
  GetBatchRequestJsonRequest,
  GetRecordsRequestJsonRequest,
  GetTransactionsRequestJsonRequest,
  Resolvers,
} from '../generated/mesh';
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
            idMin: root.batchId,
            idMax: root.batchId,
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
        const result = await context.Hashavshevet.api.getTransactions({
          input: {
            idMin: root.transactionId,
            idMax: root.transactionId,
          },
        });
        return result?.repdata.length && result?.repdata[0];
      },
    },
    account: {
      selectionSet: `{
        accountId
      }`,
      resolve: async (root, _args, context) => {
        const result = await context.Hashavshevet.api.getAccounts({
          input: {
            idMin: root.accountId,
            idMax: root.accountId,
          },
        });
        return result?.repdata.length && result?.repdata[0];
      },
    },
    counterAccount: {
      selectionSet: `{
        counterAccountId
      }`,
      resolve: async (root, _args, context) => {
        const result = await context.Hashavshevet.api.getAccounts({
          input: {
            idMin: root.counterAccountId,
            idMax: root.counterAccountId,
          },
        });
        return result?.repdata.length && result?.repdata[0];
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
            idMin: root.batchId,
            idMax: root.batchId,
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
        const result = await context.Hashavshevet.api.getRecords({});
        return result?.repdata.length && result?.repdata.filter((r) => r && r.transactionId === root.id);
      },
    },
    creditor: {
      selectionSet: `{
        creditorId
      }`,
      resolve: async (root, _args, context) => {
        const result = await context.Hashavshevet.api.getAccounts({
          input: {
            idMin: root.creditorId,
            idMax: root.creditorId,
          },
        });
        return result?.repdata.length && result?.repdata[0];
      },
    },
    debtor: {
      selectionSet: `{
        debtorId
      }`,
      resolve: async (root, _args, context) => {
        const result = await context.Hashavshevet.api.getAccounts({
          input: {
            idMin: root.debtorId,
            idMax: root.debtorId,
          },
        });
        return result?.repdata.length && result?.repdata[0];
      },
    },
  },
  HashavshevetSchemaJsonBatch: {
    transactions: {
      selectionSet: `{
        batchId
      }`,
      resolve: async (root, _args, context) => {
        const result = await context.Hashavshevet.api.getTransactions({
          input: {
            batchIdMin: root.id,
            batchIdMax: root.id,
          },
        });
        return result?.repdata;
      },
    },
  },
  HashavshevetSchemaJsonBankPageRecord: {
    account: {
      selectionSet: `{
        accountId
      }`,
      resolve: async (root, _args, context) => {
        const result = await context.Hashavshevet.api.getAccounts({
          input: {
            idMin: root.accountId,
            idMax: root.accountId,
          },
        });
        return result?.repdata.length && result?.repdata[0];
      },
    },
  },
};

const handleRecordsFilterParameters = (args: GetRecordsRequestJsonRequest = {}) => {
  const parametersArray = [
    {
      p_name: '__MUSTACH_P0__',
      id: '0',
      type: 'long',
      name: 'id',
      defVal: args.idMin || -999999999,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P1__',
      id: '500',
      type: 'long',
      name: 'id1',
      defVal: args.idMax || 999999999,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P2__',
      id: '1',
      type: 'long',
      name: 'transactionId',
      defVal: args.transactionIdMin || -999999999,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P3__',
      id: '501',
      type: 'long',
      name: 'transactionId1',
      defVal: args.transactionIdMax || 999999999,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P4__',
      id: '2',
      type: 'txt',
      name: 'accountId',
      defVal: `"${args.accountIdMin || ''}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P5__',
      id: '502',
      type: 'txt',
      name: 'accountId1',
      defVal: `"${args.accountIdMax || 'תתתתתתתתתתתתתתת'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P6__',
      id: '3',
      type: 'txt',
      name: 'counterAccountId',
      defVal: `"${args.ounterAccountIdMin || ''}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P7__',
      id: '503',
      type: 'txt',
      name: 'counterAccountId1',
      defVal: `"${args.ounterAccountIdMax || 'תתתתתתתתתתתתתתת'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P8__',
      id: '4',
      type: 'long',
      name: 'debitOrCreditNumber',
      defVal: args.debitOrCreditNumberMin || -999999999,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P9__',
      id: '504',
      type: 'long',
      name: 'debitOrCreditNumber1',
      defVal: args.debitOrCreditNumberMax || 999999999,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
  ];
  return parametersArray;
};

export const getRecordsResolver = (next) => (root, args, context, info) => {
  const parameters = handleRecordsFilterParameters(args.input);
  args.input = {
    parameters,
    datafile: recordsDataFile,
  };
  return next(root, args, context, info);
};

const handleTransactionsFilterParameters = (args: GetTransactionsRequestJsonRequest = {}) => {
  const parametersArray = [
    {
      p_name: '__MUSTACH_P0__',
      id: '0',
      type: 'txt',
      name: 'creditorId',
      defVal: `"${args.creditorIdMin || ''}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P1__',
      id: '500',
      type: 'txt',
      name: 'creditorId1',
      defVal: `"${args.creditorIdMax || 'תתתתתתתתתתתתתתת'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P2__',
      id: '1',
      type: 'txt',
      name: 'debtorId',
      defVal: `"${args.debtorIdMin || ''}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P3__',
      id: '501',
      type: 'txt',
      name: 'debtorId1',
      defVal: `"${args.debtorIdMax || 'תתתתתתתתתתתתתתת'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P4__',
      id: '2',
      type: 'float',
      name: 'shekelSum',
      defVal: args.shekelSumMin || -999999999,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P5__',
      id: '502',
      type: 'float',
      name: 'shekelSum1',
      defVal: args.shekelSumMax || 999999999,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P8__',
      id: '3',
      type: 'date',
      name: 'valueDate',
      defVal: `"${args.valueDateMin || '2000/01/01'}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P9__',
      id: '503',
      type: 'date',
      name: 'valueDate1',
      defVal: `"${args.valueDateMax || '2030/01/01'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P10__',
      id: '4',
      type: 'date',
      name: 'dueDate',
      defVal: `"${args.dueDateMin || '2000/01/01'}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P11__',
      id: '504',
      type: 'date',
      name: 'dueDate1',
      defVal: `"${args.dueDateMax || '2030/01/01'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P12__',
      id: '5',
      type: 'long',
      name: 'id',
      defVal: args.idMin || -999999999,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P13__',
      id: '505',
      type: 'long',
      name: 'id1',
      defVal: args.idMax || 999999999,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P14__',
      id: '6',
      type: 'long',
      name: 'batchId',
      defVal: args.batchIdMin || -999999999,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P15__',
      id: '506',
      type: 'long',
      name: 'batchId1',
      defVal: args.batchIdMax || 999999999,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
  ];

  return parametersArray;
};

export const getTransactionsResolver = (next) => (root, args, context, info) => {
  const parameters = handleTransactionsFilterParameters(args.input);
  args.input = {
    parameters,
    datafile: transactionsDataFile,
  };
  return next(root, args, context, info);
};

const handleBatchParameters = (args: GetBatchRequestJsonRequest = {}) => {
  const parametersArray = [
    {
      p_name: '__MUSTACH_P0__',
      id: '0',
      type: 'long',
      name: 'id',
      defVal: args.idMin || -999999999,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P1__',
      id: '500',
      type: 'long',
      name: 'id1',
      defVal: args.idMax || 999999999,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P2__',
      id: '1',
      type: 'txt',
      name: 'status',
      defVal: `"${args.statusMin || ''}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P3__',
      id: '501',
      type: 'txt',
      name: 'status1',
      defVal: `"${args.statusMax || 'תתתתתתתתתתתתתתת'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P4__',
      id: '2',
      type: 'date',
      name: 'initDate',
      defVal: `"${args.initDateMin || '2000/01/01'}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P5__',
      id: '502',
      type: 'date',
      name: 'initDate1',
      defVal: `"${args.initDateMax || '2030/01/01'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P6__',
      id: '3',
      type: 'date',
      name: 'issueDate',
      defVal: `"${args.issueDateMin || '2000/01/01'}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P7__',
      id: '503',
      type: 'date',
      name: 'issueDate1',
      defVal: `"${args.issueDateMax || '2030/01/01'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
  ];
  return parametersArray;
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

const handleBankPageRecordsParameters = (args: GetBankPageRecordsRequestJsonRequest = {}) => {
  const parametersArray = [
    {
      p_name: '__MUSTACH_P0__',
      id: '0',
      type: 'long',
      name: 'id',
      defVal: args.idMin || -999999999,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P1__',
      id: '500',
      type: 'long',
      name: 'id1',
      defVal: args.idMax || 999999999,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P2__',
      id: '1',
      type: 'long',
      name: 'bankPageId',
      defVal: args.bankPageIdMin || -999999999,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P3__',
      id: '501',
      type: 'long',
      name: 'bankPageId1',
      defVal: args.bankPageIdMax || 999999999,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P4__',
      id: '2',
      type: 'date',
      name: 'date',
      defVal: `"${args.dateMin || '2000/01/01'}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P5__',
      id: '502',
      type: 'date',
      name: 'date1',
      defVal: `"${args.dateMax || '2030/01/01'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
  ];
  return parametersArray;
};

export const getBankPageRecordsResolver = (next) => async (root, args, context, info) => {
  const parameters = handleBankPageRecordsParameters(args.input);
  args.input = {
    parameters,
    datafile: bankPageRecordsDataFile,
  };
  const data = await next(root, args, context, info);
  return data;
};

const handleAccountsParameters = (args: GetAccountsRequestJsonRequest = {}) => {
  const parametersArray = [
    {
      p_name: '__MUSTACH_P0__',
      id: '0',
      type: 'txt',
      name: 'id',
      defVal: `"${args.idMin || ''}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P1__',
      id: '500',
      type: 'txt',
      name: 'id1',
      defVal: `"${args.idMax || 'תתתתתתתתתתתתתתת'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P2__',
      id: '1',
      type: 'txt',
      name: 'isActive',
      defVal: `"${args.isActiveMin || ''}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P3__',
      id: '501',
      type: 'txt',
      name: 'isActive1',
      defVal: `"${args.isActiveMax || 'תתתתתתתתתתתתתתת'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P4__',
      id: '2',
      type: 'txt',
      name: 'name',
      defVal: `"${args.nameMin || ''}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P5__',
      id: '502',
      type: 'txt',
      name: 'name1',
      defVal: `"${args.nameMax || 'תתתתתתתתתתתתתתת'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
  ];

  return parametersArray;
};

export const getAccountsResolver = (next) => (root, args, context, info) => {
  const parameters = handleAccountsParameters(args.input);
  args.input = {
    parameters,
    datafile: accountsDataFile,
  };
  return next(root, args, context, info);
};
