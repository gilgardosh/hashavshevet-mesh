module.exports = (next) => (root, args, context, info) => {
  if (!args.input) {
    args.input = {};
  }
  const rows = args.input.rows.map((t) => {
    let moves = [];
    if (t.moves) {
      moves = t.moves.map((r) => ({
        AccountKey: r.AccountKey,
        DebitCredit: r.DebitCredit,
        SuF: r.SuF,
        SuFDlr: r.SuFDlr,
      }));
    }
    return {
      Branch: t.Branch,
      CostCode: t.CostCode,
      CredName: t.CredName,
      CurrencyCode: t.CurrencyCode,
      DatF3: t.DatF3,
      DebName: t.DebName,
      Description: t.Description,
      Det2: t.Det2,
      Details: t.Details,
      DueDate: t.DueDate,
      Osek874: t.Osek874,
      Quant: t.Quant,
      Ref2: t.Ref2,
      Ref3: t.Ref3,
      Referance: t.Referance,
      SuF: t.SuF,
      SuFDlr: t.SuFDlr,
      TransCredID: t.TransCredID,
      TransDebID: t.TransDebID,
      TransType: t.TransType,
      ValueDate: t.ValueDate,
      moves,
    };
  });

  args.input = {
    batchNo: args.input.batchNo,
    insertolastb: args.input.insertolastb,
    check: args.input.check,
    issue: args.input.issue,
    rows,
  };
  return next(root, args, context, info);
};
