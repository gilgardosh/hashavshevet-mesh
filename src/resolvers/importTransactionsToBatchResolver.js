module.exports = (next) => (root, args, context, info) => {
  if (!args.input) {
    args.input = {};
  }
  const rows = args.input.transactionsList.map((t) => {
    let moves = [];
    if (t.records) {
      moves = t.records.map((r) => ({
        AccountKey: r.accountId,
        DebitCredit: r.debitOrCreditNumber,
        SuF: r.shekelSum,
        SuFDlr: r.foreignCurrencySum,
      }));
    }
    return {
      Branch: t.branch,
      CostCode: t.costingCode,
      CredName: t.creditorName,
      CurrencyCode: t.currencyCode,
      DatF3: t.date3,
      DebName: t.debtorName,
      Description: t.description,
      Det2: t.details2,
      Details: t.details1,
      DueDate: t.dueDate,
      Osek874: t.authorizedDealerNumber,
      Quant: t.quantity,
      Ref2: t.reference2,
      Ref3: t.reference3,
      Referance: t.reference1,
      SuF: t.shekelSum,
      SuFDlr: t.foreignCurrencySum,
      TransCredID: t.creditorId,
      TransDebID: t.debtorId,
      TransType: t.type,
      ValueDate: t.valueDate,
      moves,
    };
  });

  args.input = {
    batchNo: args.input.batchId,
    insertolastb: args.input.insertToLastBatch,
    check: args.input.checkBatch,
    issue: args.input.issueBatch,
    rows,
  };
  return next(root, args, context, info);
};
