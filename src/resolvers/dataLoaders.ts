import DataLoader from 'dataloader';
import {
  GetAccountsResponse,
  GetBatchResponse,
  GetTransactionsResponse,
  HashavshevetSchemaJsonAccount,
  HashavshevetSchemaJsonBatch,
  HashavshevetSchemaJsonTransaction,
} from '../generated/mesh';

let transactionLoader: DataLoader<number, HashavshevetSchemaJsonTransaction, number>;

export const getTransactionLoader = (context) => {
  if (!transactionLoader) {
    transactionLoader = new DataLoader(async (transactionsIds: number[]) => {
      const transactionsList: GetTransactionsResponse = await context.Hashavshevet.api.getTransactions({
        input: {
          idMin: Math.min.apply(null, transactionsIds),
          idMax: Math.max.apply(null, transactionsIds),
        },
      });
      return transactionsIds.map((id) => {
        return transactionsList.repdata?.find(
          (transaction: HashavshevetSchemaJsonTransaction) => transaction.id === id,
        );
      });
    });
  }
  return transactionLoader;
};

let batchLoader: DataLoader<number, HashavshevetSchemaJsonBatch, number>;

export const getBatchLoader = (context) => {
  if (!batchLoader) {
    batchLoader = new DataLoader(async (batchsIds: number[]) => {
      const reqList = batchsIds.map((id) => {
        const promise: Promise<GetBatchResponse> = context.Hashavshevet.api.getBatch({
          input: {
            batchIdMin: id,
            batchIdMax: id,
          },
        });
        return promise;
      });
      const batchsList = await Promise.all(reqList).then((res) => res.map((raw) => raw.repdata[0]));

      return batchsIds.map((id) => {
        return batchsList.find((batch: HashavshevetSchemaJsonBatch) => batch.id === id);
      });
    });
  }
  return batchLoader;
};

let accountLoader: DataLoader<string, HashavshevetSchemaJsonAccount, string>;

export const getAccountLoader = (context) => {
  if (!accountLoader) {
    accountLoader = new DataLoader(async (accountsIds: string[]) => {
      const reqList = accountsIds.map((id) => {
        const promise: Promise<GetAccountsResponse> = context.Hashavshevet.api.getAccounts({
          input: { idMin: id, idMax: id },
        });
        return promise;
      });
      const accontsList = await Promise.all(reqList).then((res) => {
        return res.map((raw) => {
          return raw.repdata[0];
        });
      });

      return accountsIds.map((id) => {
        return accontsList.find((account: HashavshevetSchemaJsonAccount) => account.id === id);
      });
    });
  }
  return accountLoader;
};
