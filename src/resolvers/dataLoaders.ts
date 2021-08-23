import DataLoader from 'dataloader';
import { GraphQLResolveInfo } from 'graphql';
import {
  getAccountsResponse,
  getBatchResponse,
  getTransactionsResponse,
  Account,
  Batch,
  Transaction,
  MeshContext,
} from '../../.mesh';

let transactionByIdLoader: DataLoader<number, Transaction, number>;

export const getTransactionByIdLoader = (context: MeshContext, info: GraphQLResolveInfo) => {
  if (!transactionByIdLoader) {
    transactionByIdLoader = new DataLoader(async (transactionsIds: number[]) => {
      const transactionsList: getTransactionsResponse = await context.Hashavshevet.Query.getTransactions({
        args: {
          input: {
            idMin: Math.min.apply(null, transactionsIds),
            idMax: Math.max.apply(null, transactionsIds),
          },
        },
        context,
        info,
      });
      return transactionsIds.map((id) => {
        return transactionsList.repdata?.find((transaction: Transaction) => transaction.id === id);
      });
    });
  }
  return transactionByIdLoader;
};

let transactionsByBatchIdLoader: DataLoader<number, Transaction[], number>;

export const getTransactionsByBatchIdLoader = (context: MeshContext, info: GraphQLResolveInfo) => {
  if (!transactionsByBatchIdLoader) {
    transactionsByBatchIdLoader = new DataLoader(async (batchIds: number[]) => {
      const transactionsList: getTransactionsResponse = await context.Hashavshevet.Query.getTransactions({
        args: {
          input: {
            batchIdMin: Math.min.apply(null, batchIds),
            batchIdMax: Math.max.apply(null, batchIds),
          },
        },
        context,
        info,
      });
      return batchIds.map((batchId) => {
        return transactionsList.repdata?.filter((transaction: Transaction) => transaction.batchId === batchId);
      });
    });
  }
  return transactionsByBatchIdLoader;
};

let batchByIdLoader: DataLoader<number, Batch, number>;

export const getBatchByIdLoader = (context: MeshContext, info: GraphQLResolveInfo) => {
  if (!batchByIdLoader) {
    batchByIdLoader = new DataLoader(async (batchsIds: number[]) => {
      const reqList = [...new Set(batchsIds)].map((id) => {
        const promise: Promise<getBatchResponse> = context.Hashavshevet.Query.getBatch({
          args: {
            input: {
              idMin: id,
              idMax: id,
            },
          },
          context,
          info,
        });
        return promise;
      });
      const batchsList = await Promise.allSettled(reqList).then((res) =>
        // TODO: this loader tend to return partial data, improvement needed
        res.map((raw) => (raw.status === 'fulfilled' ? raw.value.repdata[0] : null)),
      );

      return batchsIds.map((id) => {
        return batchsList.find((batch: Batch) => batch.id === id);
      });
    });
  }
  return batchByIdLoader;
};

let accountByIdLoader: DataLoader<string, Account, string>;

export const getAccountByIdLoader = (context: MeshContext, info: GraphQLResolveInfo) => {
  if (!accountByIdLoader) {
    accountByIdLoader = new DataLoader(async (accountsIds: string[]) => {
      const promiseList = accountsIds.map((id) => {
        const promise: Promise<getAccountsResponse> = context.Hashavshevet.Query.getAccounts({
          args: {
            input: { idMin: id, idMax: id },
          },
          context,
          info,
        });
        return promise;
      });
      const accontsList = (await Promise.allSettled(promiseList))
        .filter((a) => a.status === 'fulfilled' && a.value !== null)
        .map((a: PromiseFulfilledResult<getAccountsResponse>) => {
          return a.value.repdata[0];
        });

      return accountsIds.map((id) => {
        return accontsList.find((account: Account) => account.id === id) || null;
      });
    });
  }
  return accountByIdLoader;
};
