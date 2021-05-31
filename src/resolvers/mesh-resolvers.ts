import { Resolvers } from '../generated/mesh';

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
