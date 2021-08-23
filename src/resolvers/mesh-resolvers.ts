/* eslint-disable camelcase */
import {
  _queryInput_getAccounts_Input,
  getAccountsResponse,
  _queryInput_getBankPageRecords_Input,
  getBankPageRecordsResponse,
  _queryInput_getBatch_Input,
  getBatchResponse,
  _queryInput_getRecords_Input,
  getRecordsResponse,
  _queryInput_getTransactions_Input,
  getTransactionsResponse,
  Resolvers,
  RecordType,
} from '../../.mesh';
import {
  accountsDataFile,
  bankPageRecordsDataFile,
  batchDataFile,
  recordsDataFile,
  transactionsDataFile,
} from './dataFiles';
import {
  getAccountByIdLoader,
  getBatchByIdLoader,
  getTransactionByIdLoader,
  getTransactionsByBatchIdLoader,
} from './dataLoaders';

export const resolvers: Resolvers = {
  RecordType: {
    batch: {
      selectionSet: `{
      batchId
    }`,
      resolve: async (root, _args, context, info) => {
        if (!root.batchId) {
          return null;
        }
        try {
          return await getBatchByIdLoader(context, info).load(root.batchId);
        } catch (e) {
          console.log(`Couldn't find batch id='${root.batchId}'\n`);
          return null;
        }
      },
    },
    transaction: {
      selectionSet: `{
        transactionId
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.transactionId) {
          return null;
        }
        try {
          return await getTransactionByIdLoader(context, info).load(root.transactionId);
        } catch (e) {
          console.log(`Couldn't find transaction id='${root.transactionId}'`);
          return null;
        }
      },
    },
    account: {
      selectionSet: `{
        accountId
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.accountId) {
          return null;
        }
        try {
          return await getAccountByIdLoader(context, info).load(root.accountId);
        } catch (e) {
          console.log(`Couldn't find account id='${root.accountId}'`);
          return null;
        }
      },
    },
    counterAccount: {
      selectionSet: `{
        counterAccountId
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.counterAccountId) {
          return null;
        }
        try {
          return await getAccountByIdLoader(context, info).load(root.counterAccountId);
        } catch (e) {
          console.log(`Couldn't find account id='${root.counterAccountId}'`);
          return null;
        }
      },
    },
  },
  Transaction: {
    batch: {
      selectionSet: `{
      batchId
    }`,
      resolve: async (root, _args, context, info) => {
        if (!root.batchId) {
          return null;
        }
        try {
          return await getBatchByIdLoader(context, info).load(root.batchId);
        } catch (e) {
          console.log(`Couldn't find batch id='${root.batchId}'`);
          return null;
        }
      },
    },
    records: {
      selectionSet: `{
        id
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.id) {
          return [];
        }
        return context.Hashavshevet.Query.getRecords({
          root,
          context,
          info,
          key: root.id,
          argsFromKeys: (batchIds: number[]) => ({
            input: {
              transactionIdMin: Math.min.apply(null, batchIds),
              transactionIdMax: Math.max.apply(null, batchIds),
            },
          }),
          valuesFromResults: (recordsList: getRecordsResponse, batchIds: number[]) =>
            batchIds.map((transactionId) => {
              return recordsList.repdata?.filter((record: RecordType) => record.transactionId === transactionId);
            }),
        });
      },
    },
    creditor: {
      selectionSet: `{
        creditorId
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.creditorId) {
          return null;
        }
        try {
          return await getAccountByIdLoader(context, info).load(root.creditorId);
        } catch (e) {
          console.log(`Couldn't find account id='${root.creditorId}'`);
          return null;
        }
      },
    },
    debtor: {
      selectionSet: `{
        debtorId
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.debtorId) {
          return null;
        }
        try {
          return await getAccountByIdLoader(context, info).load(root.debtorId);
        } catch (e) {
          console.log(`Couldn't find account id='${root.debtorId}'`);
          return null;
        }
      },
    },
  },
  Batch: {
    transactions: {
      selectionSet: `{
        batchId
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.id) {
          return [];
        }
        return await getTransactionsByBatchIdLoader(context, info).load(root.id);
      },
    },
  },
  BankPageRecord: {
    account: {
      selectionSet: `{
        accountId
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.accountId) {
          return null;
        }
        try {
          return await getAccountByIdLoader(context, info).load(root.accountId);
        } catch (e) {
          console.log(`Couldn't find account id='${root.accountId}'`);
          return null;
        }
      },
    },
  },
  importTransactionsToBatchResponse: {
    batch: {
      selectionSet: `{
      batchno
    }`,
      resolve: async (root, _args, context, info) => {
        if (!root.batchno) {
          return null;
        }
        try {
          return await getBatchByIdLoader(context, info).load(root.batchno);
        } catch (e) {
          console.log(`Couldn't find batch id='${root.batchno}'`);
          return null;
        }
      },
    },
  },
};

const handleRecordsFilterParameters = (args: _queryInput_getRecords_Input = {}) => {
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

export const getRecordsResolver = (next) => async (root, args, context, info) => {
  const parameters = handleRecordsFilterParameters(args.input);
  args.input = {
    parameters,
    datafile: recordsDataFile,
  };
  const data = (await next(root, args, context, info)) as getRecordsResponse;
  if (data.repdata?.length && !data.repdata?.[0].id) {
    return null;
  }
  return data;
};

const handleTransactionsFilterParameters = (args: _queryInput_getTransactions_Input = {}) => {
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

export const getTransactionsResolver = (next) => async (root, args, context, info) => {
  const parameters = handleTransactionsFilterParameters(args.input);
  args.input = {
    parameters,
    datafile: transactionsDataFile,
  };
  const data = (await next(root, args, context, info)) as getTransactionsResponse;
  if (data.repdata?.length && !data.repdata?.[0].id) {
    return null;
  }
  return data;
};

const handleBatchParameters = (args: _queryInput_getBatch_Input = {}) => {
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
      defVal: `"${args.initDateMin || '1990/01/01'}"`,
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
  ];
  return parametersArray;
};

export const getBatchResolver = (next) => async (root, args, context, info) => {
  if (!args.input) {
    args.input = {};
  }
  const parameters = handleBatchParameters(args.input);
  args.input = {
    parameters,
    datafile: batchDataFile,
  };
  const data = (await next(root, args, context, info)) as getBatchResponse;
  if (data.repdata?.length && !data.repdata?.[0].id) {
    return null;
  }
  return data;
};

const handleBankPageRecordsParameters = (args: _queryInput_getBankPageRecords_Input = {}) => {
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
  const data = (await next(root, args, context, info)) as getBankPageRecordsResponse;
  if (data.repdata?.length && !data.repdata?.[0].id) {
    return null;
  }
  return data;
};

const handleAccountsParameters = (args: _queryInput_getAccounts_Input = {}) => {
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

export const getAccountsResolver = (next) => async (root, args, context, info) => {
  const parameters = handleAccountsParameters(args.input);
  args.input = {
    parameters,
    datafile: accountsDataFile,
  };
  const data = (await next(root, args, context, info)) as getAccountsResponse;
  if (data.repdata?.length && !data.repdata?.[0].id) {
    return null;
  }
  return data;
};
