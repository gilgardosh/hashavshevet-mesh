/* eslint-disable camelcase */
import {
  getRecordsResponse,
  Resolvers,
  RecordType,
  getTransactionsResponse,
  Transaction,
  getSortCodesResponse,
  SortCode,
  getAccountsResponse,
  Account,
} from '../../.mesh';

const resolvers: Resolvers = {
  RecordType: {
    batch: {
      selectionSet: `{
        batchId
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.batchId) {
          return null;
        }
        return context.Hashavshevet.Query.getBatch({
          root,
          context,
          info,
          selectionSet: `{
            status {
              repdata {
                id
                ${info.fieldNodes
                  .find((n) => n.name.value === 'batch')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          args: {
            input: {
              idMin: root.batchId,
              idMax: root.batchId,
            },
          },
        }).then((res) => {
          return res.status?.repdata && res.status.repdata.length > 0 ? res.status.repdata[0] : null;
        });
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
        return context.Hashavshevet.Query.getTransactions({
          root,
          context,
          info,
          key: root.transactionId,
          selectionSet: `{
            status {
              repdata {
                id
                ${info.fieldNodes
                  .find((n) => n.name.value === 'transaction')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          argsFromKeys: (transactionIds: number[]) => ({
            input: {
              idMin: Math.min.apply(null, transactionIds),
              idMax: Math.max.apply(null, transactionIds),
            },
          }),
          valuesFromResults: (transactionsList: getTransactionsResponse, transactionIds: number[]) =>
            transactionIds.map((transactionId) => {
              return transactionsList.status?.repdata?.find(
                (transaction: Transaction) => transaction.id === transactionId,
              );
            }),
        });
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
        return context.Hashavshevet.Query.getAccounts({
          root,
          context,
          info,
          selectionSet: `{
            status {
              repdata {
                id
                ${info.fieldNodes
                  .find((n) => n.name.value === 'account')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          args: {
            input: {
              idMin: root.accountId,
              idMax: root.accountId,
            },
          },
        }).then((res) => {
          return res.status?.repdata && res.status.repdata.length > 0 ? res.status.repdata[0] : null;
        });
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
        return context.Hashavshevet.Query.getAccounts({
          root,
          context,
          info,
          selectionSet: `{
            status {
              repdata {
                id
                ${info.fieldNodes
                  .find((n) => n.name.value === 'counterAccount')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          args: {
            input: {
              idMin: root.counterAccountId,
              idMax: root.counterAccountId,
            },
          },
        }).then((res) => {
          return res.status?.repdata && res.status.repdata.length > 0 ? res.status.repdata[0] : null;
        });
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
        return context.Hashavshevet.Query.getBatch({
          root,
          context,
          info,
          selectionSet: `{
            status {
              repdata {
                id
                ${info.fieldNodes
                  .find((n) => n.name.value === 'batch')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          args: {
            input: {
              idMin: root.batchId,
              idMax: root.batchId,
            },
          },
        }).then((res) => {
          return res.status?.repdata && res.status.repdata.length > 0 ? res.status.repdata[0] : null;
        });
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
          selectionSet: `{
            status {
              repdata {
                transactionId
                ${info.fieldNodes
                  .find((n) => n.name.value === 'records')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          argsFromKeys: (batchIds: number[]) => ({
            input: {
              transactionIdMin: Math.min.apply(null, batchIds),
              transactionIdMax: Math.max.apply(null, batchIds),
            },
          }),
          valuesFromResults: (recordsList: getRecordsResponse, batchIds: number[]) =>
            batchIds.map((transactionId) => {
              return recordsList.status?.repdata?.filter(
                (record: RecordType) => record.transactionId === transactionId,
              );
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
        return context.Hashavshevet.Query.getAccounts({
          root,
          context,
          info,
          selectionSet: `{
            status {
              repdata {
                id
                ${info.fieldNodes
                  .find((n) => n.name.value === 'creditor')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          args: {
            input: {
              idMin: root.creditorId,
              idMax: root.creditorId,
            },
          },
        }).then((res) => {
          return res.status?.repdata && res.status.repdata.length > 0 ? res.status.repdata[0] : null;
        });
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
        return context.Hashavshevet.Query.getAccounts({
          root,
          context,
          info,
          selectionSet: `{
            status {
              repdata {
                id
                ${info.fieldNodes
                  .find((n) => n.name.value === 'debtor')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          args: {
            input: {
              idMin: root.debtorId,
              idMax: root.debtorId,
            },
          },
        }).then((res) => {
          return res.status.repdata && res.status.repdata.length > 0 ? res.status.repdata[0] : null;
        });
      },
    },
  },
  Batch: {
    transactions: {
      selectionSet: `{
        id
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.id) {
          return [];
        }
        return context.Hashavshevet.Query.getTransactions({
          root,
          context,
          info,
          key: root.id,
          selectionSet: `{
            status {
              repdata {
                batchId
                ${info.fieldNodes
                  .find((n) => n.name.value === 'transactions')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          argsFromKeys: (batchIds: number[]) => ({
            input: {
              batchIdMin: Math.min.apply(null, batchIds),
              batchIdMax: Math.max.apply(null, batchIds),
            },
          }),
          valuesFromResults: (recordsList: getTransactionsResponse, batchIds: number[]) =>
            batchIds.map((batchId) => {
              return recordsList.status?.repdata?.filter((record: RecordType) => record.batchId === batchId);
            }),
        });
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
        return context.Hashavshevet.Query.getAccounts({
          root,
          context,
          info,
          selectionSet: `{
            status {
              repdata {
                id
                ${info.fieldNodes
                  .find((n) => n.name.value === 'account')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          args: {
            input: {
              idMin: root.accountId,
              idMax: root.accountId,
            },
          },
        }).then((res) => {
          return res.status?.repdata && res.status.repdata.length > 0 ? res.status.repdata[0] : null;
        });
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
        return context.Hashavshevet.Query.getBatch({
          root,
          context,
          info,
          selectionSet: `{
            status {
              repdata {
                id
                ${info.fieldNodes
                  .find((n) => n.name.value === 'batch')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          args: {
            input: {
              idMin: root.batchno,
              idMax: root.batchno,
            },
          },
        }).then((res) => {
          return res.status?.repdata && res.status.repdata.length > 0 ? res.status.repdata[0] : null;
        });
      },
    },
  },
  Account: {
    sortCode: {
      selectionSet: `{
        sortCodeId
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.sortCodeId) {
          return null;
        }
        return context.Hashavshevet.Query.getSortCodes({
          root,
          context,
          info,
          key: root.sortCodeId,
          selectionSet: `{
            status {
              repdata {
                code
                ${info.fieldNodes
                  .find((n) => n.name.value === 'sortCode')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          argsFromKeys: (sortCodeIds: number[]) => ({
            input: {
              idMin: Math.min.apply(null, sortCodeIds),
              idMax: Math.max.apply(null, sortCodeIds),
            },
          }),
          valuesFromResults: (transactionsList: getSortCodesResponse, sortCodeIds: number[]) =>
            sortCodeIds.map((sortCodeId) => {
              return transactionsList.status?.repdata?.find((sortCode: SortCode) => sortCode.code === sortCodeId);
            }),
        });
      },
    },
  },
  SortCode: {
    accounts: {
      selectionSet: `{
        code
      }`,
      resolve: async (root, _args, context, info) => {
        if (!root.code) {
          return [];
        }
        return context.Hashavshevet.Query.getAccounts({
          root,
          context,
          info,
          key: root.code,
          selectionSet: `{
            status {
              repdata {
                id
                ${info.fieldNodes
                  .find((n) => n.name.value === 'accounts')
                  .selectionSet.selections.map((s: any) => s.name?.value || '')
                  .join('\n')}
              }
            }
          }`,
          argsFromKeys: (sortCodes: number[]) => ({
            input: {
              sortCodeMin: Math.min.apply(null, sortCodes),
              sortCodeMax: Math.max.apply(null, sortCodes),
            },
          }),
          valuesFromResults: (recordsList: getAccountsResponse, sortCodes: number[]) =>
            sortCodes.map((sortCode) => {
              return recordsList.status?.repdata?.filter((account: Account) => account.sortCodeId === sortCode);
            }),
        });
      },
    },
  },
};

module.exports = resolvers;
