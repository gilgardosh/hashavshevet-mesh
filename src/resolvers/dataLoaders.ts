import DataLoader from 'dataloader';
import {
  GetAccountsResponse,
  GetBatchResponse,
  GetRecordsResponse,
  GetTransactionsResponse,
  HashavshevetSchemaJsonAccount,
  HashavshevetSchemaJsonBatch,
  HashavshevetSchemaJsonRecord,
  HashavshevetSchemaJsonTransaction,
} from '../generated/mesh';

let recordsByTransactionIdLoader: DataLoader<number, HashavshevetSchemaJsonRecord[], number>;

export const getRecordsByTransactionIdLoader = (context) => {
  if (!recordsByTransactionIdLoader) {
    recordsByTransactionIdLoader = new DataLoader(async (batchIds: number[]) => {
      const recordsList: GetRecordsResponse = await context.Hashavshevet.api.getRecords({
        input: {
          transactionIdMin: Math.min.apply(null, batchIds),
          transactionIdMax: Math.max.apply(null, batchIds),
        },
      });
      return batchIds.map((transactionId) => {
        return recordsList.repdata?.filter(
          (record: HashavshevetSchemaJsonRecord) => record.transactionId === transactionId,
        );
      });
    });
  }
  return recordsByTransactionIdLoader;
};

let transactionByIdLoader: DataLoader<number, HashavshevetSchemaJsonTransaction, number>;

export const getTransactionByIdLoader = (context) => {
  if (!transactionByIdLoader) {
    transactionByIdLoader = new DataLoader(async (transactionsIds: number[]) => {
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
  return transactionByIdLoader;
};

let transactionsByBatchIdLoader: DataLoader<number, HashavshevetSchemaJsonTransaction[], number>;

export const getTransactionsByBatchIdLoader = (context) => {
  if (!transactionsByBatchIdLoader) {
    transactionsByBatchIdLoader = new DataLoader(async (batchIds: number[]) => {
      const transactionsList: GetTransactionsResponse = await context.Hashavshevet.api.getTransactions({
        input: {
          batchIdMin: Math.min.apply(null, batchIds),
          batchIdMax: Math.max.apply(null, batchIds),
        },
      });
      return batchIds.map((batchId) => {
        return transactionsList.repdata?.filter(
          (transaction: HashavshevetSchemaJsonTransaction) => transaction.batchId === batchId,
        );
      });
    });
  }
  return transactionsByBatchIdLoader;
};

let batchByIdLoader: DataLoader<number, HashavshevetSchemaJsonBatch, number>;

export const getBatchByIdLoader = (context) => {
  if (!batchByIdLoader) {
    batchByIdLoader = new DataLoader(async (batchsIds: number[]) => {
      const reqList = [...new Set(batchsIds)].map((id) => {
        const promise: Promise<GetBatchResponse> = context.Hashavshevet.api.getBatch({
          input: {
            batchIdMin: id,
            batchIdMax: id,
          },
        });
        return promise;
      });
      const batchsList = await Promise.allSettled(reqList).then((res) =>
        // TODO: this loader tend to return partial data, improvement needed
        res.map((raw) => (raw.status === 'fulfilled' ? raw.value.repdata[0] : null)),
      );

      return batchsIds.map((id) => {
        return batchsList.find((batch: HashavshevetSchemaJsonBatch) => batch.id === id);
      });
    });
  }
  return batchByIdLoader;
};

let accountByIdLoader: DataLoader<string, HashavshevetSchemaJsonAccount, string>;

export const getAccountByIdLoader = (context) => {
  if (!accountByIdLoader) {
    accountByIdLoader = new DataLoader(async (accountsIds: string[]) => {
      const reqList = [...new Set(accountsIds)].map((id) => {
        const promise: Promise<GetAccountsResponse> = context.Hashavshevet.api.getAccounts({
          input: { idMin: id, idMax: id },
        });
        return promise;
      });
      const accontsList = await Promise.allSettled(reqList).then((res) =>
        res.map((raw) => (raw.status === 'fulfilled' ? raw.value.repdata[0] : null)),
      );
      return accountsIds.map((id) => {
        return accontsList.find((account: HashavshevetSchemaJsonAccount) => account.id === id);
      });
    });
  }
  return accountByIdLoader;
};
