import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  /** POST /api/napi */
  getSession?: Maybe<NapiResopnse>;
  /** POST /CompanyListToTokenApi/TokenCompanies */
  getCompanies?: Maybe<GetCompeniesResopnse>;
  /** POST /ExportDataApi/exportData */
  getTransactions?: Maybe<GetTransactionsResponseJsonResponse>;
  /** POST /ExportDataApi/exportData */
  getBatch?: Maybe<GetBatchResponseJsonResponse>;
  /** POST /ExportDataApi/exportData */
  getRecords?: Maybe<GetRecordsResponseJsonResponse>;
  /** POST /jtransApi/chkBatch */
  checkBatch?: Maybe<CheckBatchResponseJsonResponse>;
  /** POST /ExportDataApi/exportData */
  getAccounts?: Maybe<GetAccountsResponseJsonResponse>;
  /** POST /ExportDataApi/exportData */
  getBankPageRecords?: Maybe<GetBankPageRecordsResponseJsonResponse>;
};


export type QueryGetBatchArgs = {
  input?: Maybe<GetBatchRequestJsonRequest>;
};


export type QueryCheckBatchArgs = {
  input?: Maybe<CheckBatchRequestJsonRequest>;
};


export type QueryGetBankPageRecordsArgs = {
  input?: Maybe<GetBankPageRecordsRequestJsonRequest>;
};

export type NapiResopnse = {
  __typename?: 'napiResopnse';
  data: Array<Maybe<Scalars['JSON']>>;
  session: NapiResopnseSession;
};


export type NapiResopnseSession = {
  __typename?: 'NapiResopnseSession';
  branch?: Maybe<Scalars['Int']>;
  cid?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['Int']>;
  company_name?: Maybe<Scalars['String']>;
  use_name?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
  wizcomp_no?: Maybe<Scalars['Int']>;
};

export type GetCompeniesResopnse = {
  __typename?: 'getCompeniesResopnse';
  repdata: Array<Maybe<GetCompeniesResopnseRepdata>>;
};

export type GetCompeniesResopnseRepdata = {
  __typename?: 'GetCompeniesResopnseRepdata';
  Comp_Vatnum: Scalars['String'];
  Company_File_Name: Scalars['String'];
  Company_Name: Scalars['String'];
};

export type GetTransactionsResponseJsonResponse = {
  __typename?: 'GetTransactionsResponseJsonResponse';
  repdata: Array<Maybe<GetTransactionsResponseJsonResponseRepdata>>;
};

export type GetTransactionsResponseJsonResponseRepdata = {
  __typename?: 'GetTransactionsResponseJsonResponseRepdata';
  /** VAT registration number (max [20 or 9?] characters) */
  authorizedDealerNumber?: Maybe<Scalars['String']>;
  /** Batch Identifier */
  batchId: Scalars['Int'];
  /** Branch */
  branch?: Maybe<Scalars['Int']>;
  /** Branch Name */
  branchName?: Maybe<Scalars['String']>;
  /** Cheque Identifier */
  chequeId?: Maybe<Scalars['Int']>;
  /** Code of cost center (existing code) */
  costingCode?: Maybe<Scalars['String']>;
  /** Cost-center code name */
  costingCodeName?: Maybe<Scalars['String']>;
  /** Cost-center code filter */
  costingCodeFilter?: Maybe<Scalars['String']>;
  /** Main credit account identifier (max 15 charactes) */
  creditorId?: Maybe<Scalars['String']>;
  /** Currency */
  currencyCode?: Maybe<Scalars['String']>;
  /** Additional date */
  date3?: Maybe<Scalars['String']>;
  /** Main debit account identifier (max 15 charactes) */
  debtorId?: Maybe<Scalars['String']>;
  /** Description (max 250 characters) */
  description?: Maybe<Scalars['String']>;
  /** Remarks (max 50 characters) */
  details1?: Maybe<Scalars['String']>;
  /** Additional remarks (max 50 characters) */
  details2?: Maybe<Scalars['String']>;
  /** Due date */
  dueDate?: Maybe<Scalars['String']>;
  /** exchange rate differences */
  exchangeRateDifferences?: Maybe<Scalars['String']>;
  /** Total amount in foreign currency */
  foreignCurrencySum?: Maybe<Scalars['Float']>;
  /** Transaction Identifier */
  id: Scalars['Int'];
  /** Inventory Identifier */
  inventoryId?: Maybe<Scalars['Int']>;
  /** Linked file */
  linkedFile?: Maybe<Scalars['String']>;
  /** Quantity */
  quantity?: Maybe<Scalars['Float']>;
  /** Reference */
  reference1?: Maybe<Scalars['Int']>;
  /** Reference-2 */
  reference2?: Maybe<Scalars['Int']>;
  /** Referenc-3 */
  reference3?: Maybe<Scalars['Int']>;
  /** Register number */
  registerNumber?: Maybe<Scalars['Int']>;
  /** Total NIS amount */
  shekelSum?: Maybe<Scalars['Float']>;
  /** Identifier of transaction cancelled by Strogno */
  stornoCancelledTransactionId?: Maybe<Scalars['Int']>;
  /** Transaction type code */
  type?: Maybe<Scalars['String']>;
  /** User name */
  userName?: Maybe<Scalars['String']>;
  /** Date */
  valueDate?: Maybe<Scalars['String']>;
};

export type GetBatchResponseJsonResponse = {
  __typename?: 'GetBatchResponseJsonResponse';
  repdata: Array<Maybe<GetBatchResponseJsonResponseRepdata>>;
};

export type GetBatchResponseJsonResponseRepdata = {
  __typename?: 'GetBatchResponseJsonResponseRepdata';
  /** Remarks */
  details?: Maybe<Scalars['String']>;
  /** Batch identifier */
  id: Scalars['Int'];
  /** Initiate date */
  initDate?: Maybe<Scalars['String']>;
  /** Initiate time */
  initTime?: Maybe<Scalars['String']>;
  /** Issue date */
  issueDate?: Maybe<Scalars['String']>;
  /** Status */
  status?: Maybe<Scalars['String']>;
  /** Type */
  type?: Maybe<Scalars['String']>;
};

export type GetBatchRequestJsonRequest = {
  id?: Maybe<Scalars['Int']>;
};

export type GetRecordsResponseJsonResponse = {
  __typename?: 'GetRecordsResponseJsonResponse';
  repdata: Array<Maybe<GetRecordsResponseJsonResponseRepdata>>;
};

export type GetRecordsResponseJsonResponseRepdata = {
  __typename?: 'GetRecordsResponseJsonResponseRepdata';
  /** Main account details identifier */
  accountId: Scalars['String'];
  /** Batch identifier */
  batchId: Scalars['Int'];
  /** Counter account identifier */
  counterAccountId?: Maybe<Scalars['String']>;
  /** Counter account name */
  counterAccountName?: Maybe<Scalars['String']>;
  /** Cumulative balance */
  cumulativeBalance?: Maybe<Scalars['Float']>;
  /** Cumulative balance by filter */
  cumulativeBalanceByFilter?: Maybe<Scalars['Float']>;
  /** Cumulative balance by sorting code */
  cumulativeBalanceBySortKey?: Maybe<Scalars['Float']>;
  /** Cumulative balance of total open amount of record */
  cumulativeBalanceOfOpenSumInRecord?: Maybe<Scalars['Float']>;
  /** Cumulative balance without opening balance */
  cumulativeBalanceWithoutOpeningBalance?: Maybe<Scalars['Float']>;
  /** Credit / Debit */
  debitOrCredit?: Maybe<GetRecordsResponseJsonResponseRepdataDebitOrCredit>;
  /** Credit / Debit */
  debitOrCreditNumber?: Maybe<Scalars['Int']>;
  /** Estimated total amount */
  estimatedSum?: Maybe<Scalars['Float']>;
  /** Credit amount in foreign currency */
  foreignCurrencyCredit?: Maybe<Scalars['Float']>;
  /** Cumulative balance in foreign currency */
  foreignCurrencyCumulativeBalance?: Maybe<Scalars['Float']>;
  /** Cumulative balance in foreign currency without opening balance */
  foreignCurrencyCumulativeBalanceWithoutOpeningBalance?: Maybe<Scalars['Float']>;
  /** Dedit amount in foreign currency */
  foreignCurrencyDebit?: Maybe<Scalars['Float']>;
  /** Total amount in foreign currency */
  foreignCurrencySum?: Maybe<Scalars['Float']>;
  /** Total amount in foreign currency closed in record */
  foreignCurrencySumClosedInRecord?: Maybe<Scalars['Float']>;
  /** Total amount in foreign currency open  in record */
  foreignCurrencySumOpenInRecord?: Maybe<Scalars['Float']>;
  /** Record identifier */
  id: Scalars['Int'];
  /** Match number - card analysis */
  matchNumberCardAnalysis?: Maybe<Scalars['Int']>;
  /** Credit amount in NIS */
  shekelCredit?: Maybe<Scalars['Float']>;
  /** Dedit amount in NIS */
  shekelDebit?: Maybe<Scalars['Float']>;
  /** Total NIS amount */
  shekelSum?: Maybe<Scalars['Float']>;
  /** Total NIS amount closed in record */
  shekelSumClosedInRecord?: Maybe<Scalars['Float']>;
  /** Total NIS amount open  in record */
  shekelSumOpenInRecord?: Maybe<Scalars['Float']>;
  /** Transaction identifier */
  transactionId: Scalars['Int'];
};

export enum GetRecordsResponseJsonResponseRepdataDebitOrCredit {
  _ = '_'
}

export type CheckBatchResponseJsonResponse = {
  __typename?: 'CheckBatchResponseJsonResponse';
  batch_check?: Maybe<Scalars['JSON']>;
};

export type CheckBatchRequestJsonRequest = {
  /** Batch identifier */
  batchNo?: Maybe<Scalars['Int']>;
};

export type GetAccountsResponseJsonResponse = {
  __typename?: 'GetAccountsResponseJsonResponse';
  repdata: Array<Maybe<GetAccountsResponseJsonResponseRepdata>>;
};

export type GetAccountsResponseJsonResponseRepdata = {
  __typename?: 'GetAccountsResponseJsonResponseRepdata';
  accountantTransfer?: Maybe<Scalars['String']>;
  /** Address (max 50 characters) */
  address?: Maybe<Scalars['String']>;
  /** Salesperson */
  agent?: Maybe<Scalars['Int']>;
  /** VAT registration number (max [20 or 9?] characters) */
  authorizedDealerNumber?: Maybe<Scalars['String']>;
  /** Code for the balance and profit and loss report */
  balanceCode?: Maybe<Scalars['String']>;
  /** Bank account # (max 20 characters) */
  bankAccountId?: Maybe<Scalars['String']>;
  /** Bank branch code (max 5 characters) */
  bankBranchId?: Maybe<Scalars['String']>;
  /** Bank code (max 3 characters) */
  bankId?: Maybe<Scalars['String']>;
  /** Callphone */
  cellphone?: Maybe<Scalars['String']>;
  centralAccount?: Maybe<Scalars['String']>;
  /** City (max 20 characters) */
  city?: Maybe<Scalars['String']>;
  /** Code of cost center (existing code) */
  costingCode?: Maybe<Scalars['String']>;
  /** Country (max 20 characters) */
  country?: Maybe<Scalars['String']>;
  /** Remarks (max 50 characters) */
  details?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** Fax (max 30 characters) */
  fax?: Maybe<Scalars['String']>;
  /** Filtering (5 characters) */
  filter?: Maybe<Scalars['String']>;
  /** % customer discount */
  generalDiscountPercent?: Maybe<Scalars['Float']>;
  /** Account identifier (max 15 characters) */
  id: Scalars['String'];
  /** Income file number (max 20 characters) */
  incomeFileNumber?: Maybe<Scalars['String']>;
  /** Initiate date */
  initDate?: Maybe<Scalars['String']>;
  /** Active/inactive account */
  isActive?: Maybe<Scalars['String']>;
  /** Code of the main account */
  mainAccount?: Maybe<Scalars['String']>;
  /** Credit limit */
  maxCredit?: Maybe<Scalars['Float']>;
  /** Credit currency (max 5 characters) */
  maxCreditCurrency?: Maybe<Scalars['String']>;
  /** Credit risk limit */
  maxObligo?: Maybe<Scalars['Float']>;
  /** Credit risk currency (max 5 characters) */
  maxObligoCurrency?: Maybe<Scalars['String']>;
  /** Account name (max 50 characters) */
  name?: Maybe<Scalars['String']>;
  /** Occupation (max 15 characters) */
  occupation?: Maybe<Scalars['String']>;
  /** Phone (max 30 characters) */
  phone?: Maybe<Scalars['String']>;
  /** Sorting code */
  sortGroup?: Maybe<Scalars['Int']>;
  /** Type of account */
  type?: Maybe<Scalars['String']>;
  /** VAT exempt, 1/0 */
  vatExempt?: Maybe<Scalars['String']>;
  /** % withholding tax */
  withholdingPercent?: Maybe<Scalars['Float']>;
  /** Validity date of the % withholding tax */
  withholdingValidity?: Maybe<Scalars['String']>;
  /** Zip code (max 10 characters) */
  zipcode?: Maybe<Scalars['String']>;
};

export type GetBankPageRecordsResponseJsonResponse = {
  __typename?: 'GetBankPageRecordsResponseJsonResponse';
  repdata: Array<Maybe<GetBankPageRecordsResponseJsonResponseRepdata>>;
};

export type GetBankPageRecordsResponseJsonResponseRepdata = {
  __typename?: 'GetBankPageRecordsResponseJsonResponseRepdata';
  /** Account identifier */
  accountId?: Maybe<Scalars['String']>;
  /** Account name (max 50 characters) */
  accountName?: Maybe<Scalars['String']>;
  /** Adjusted record */
  adjustedRecord?: Maybe<Scalars['String']>;
  /** Bank page identifier */
  bankPageId: Scalars['Int'];
  /** Cumulative balance */
  cumulativeBalance?: Maybe<Scalars['Float']>;
  /** Calculated cumulative balance */
  cumulativeBalanceCalculated?: Maybe<Scalars['Float']>;
  /** Date */
  date?: Maybe<Scalars['String']>;
  /** Credit / Debit */
  debitOrCredit?: Maybe<GetRecordsResponseJsonResponseRepdataDebitOrCredit>;
  /** Remarks (max 50 characters) */
  details?: Maybe<Scalars['String']>;
  /** Bank page record identifier */
  id: Scalars['Int'];
  /** Match number */
  matchNumber?: Maybe<Scalars['Int']>;
  /** Reference */
  reference?: Maybe<Scalars['Int']>;
  /** Total ammount */
  sum?: Maybe<Scalars['Float']>;
};

export type GetBankPageRecordsRequestJsonRequest = {
  minID?: Maybe<Scalars['Int']>;
  maxID?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** POST /jtransApi/tmpBatch */
  importTransactionsToBatch?: Maybe<ImportTransactionsToBatchResponseJsonResponse>;
  /** POST /jtransApi/newBatch */
  createBatch?: Maybe<NewBatchResponseJsonResponse>;
  /** POST /jtransApi/issueBatch */
  issueBatch?: Maybe<IssueBatchResponseJsonResponse>;
  /** POST /BankPagesApi/importBankPage */
  importBankPage?: Maybe<ImportBankPageResponseJsonResponse>;
};


export type MutationImportTransactionsToBatchArgs = {
  input?: Maybe<ImportTransactionsToBatchRequestJsonRequest>;
};


export type MutationIssueBatchArgs = {
  input?: Maybe<CheckBatchRequestJsonRequest>;
};


export type MutationImportBankPageArgs = {
  input?: Maybe<ImportBankPageRequestJsonRequest>;
};

export type ImportTransactionsToBatchResponseJsonResponse = {
  __typename?: 'ImportTransactionsToBatchResponseJsonResponse';
  /** Final Status */
  status?: Maybe<Scalars['String']>;
  /** Batch Issue Status */
  batch_issue?: Maybe<Scalars['String']>;
  /** Batch Check Status */
  batch_check?: Maybe<Scalars['String']>;
  /** Batch identifier (on cases new batch was created) */
  newbatch?: Maybe<Scalars['Int']>;
  /** Batch identifier (on cases added to existing batch) */
  batchno?: Maybe<Scalars['Int']>;
  /** Batch identifier */
  batchId?: Maybe<Scalars['Int']>;
  /** errors list */
  errors?: Maybe<Array<Maybe<ImportTransactionsToBatchResponseJsonResponseErrors>>>;
};

export type ImportTransactionsToBatchResponseJsonResponseErrors = {
  __typename?: 'ImportTransactionsToBatchResponseJsonResponseErrors';
  /** Transaction identifier. AKA transactionId */
  headerID?: Maybe<Scalars['String']>;
  /** Error code */
  err?: Maybe<Scalars['Int']>;
  /** Record identifier. AKA recordId */
  recId?: Maybe<Scalars['Int']>;
  /** Field name where error occurred */
  field?: Maybe<Scalars['String']>;
  /** Error message */
  TxtMsg?: Maybe<Scalars['String']>;
};

export type ImportTransactionsToBatchRequestJsonRequest = {
  /** Insert the transactions to the temporary batch having this number. If no such temporary batch exists, open a new batch. */
  batchNo?: Maybe<Scalars['Int']>;
  /** check the batch for errors and return the batch status */
  check?: Maybe<Scalars['Boolean']>;
  /** Insert the transactions to the last open temporary batch. If false, open a new batch. */
  insertolastb?: Maybe<Scalars['Boolean']>;
  /** input the temporary batch into the permanent storage. */
  issue?: Maybe<Scalars['Boolean']>;
  rows?: Maybe<Array<Maybe<ImportTransactionsToBatchRequestJsonRequestRows>>>;
};

export type ImportTransactionsToBatchRequestJsonRequestRows = {
  /** VAT registration number (max [20 or 9?] characters) */
  Osek874?: Maybe<Scalars['String']>;
  /** Branch */
  Branch?: Maybe<Scalars['Int']>;
  /** Code of cost center (existing code) */
  CostCode?: Maybe<Scalars['String']>;
  /** Main credit account identifier (max 15 charactes) */
  TransCredID?: Maybe<Scalars['String']>;
  /** Name of the main credit account (max 50 characters) */
  CredName?: Maybe<Scalars['String']>;
  /** Currency (max 5 characters) */
  CurrencyCode?: Maybe<Scalars['String']>;
  /** Additional date */
  DatF3?: Maybe<Scalars['String']>;
  /** Main debit account identifier (max 15 charactes) */
  TransDebID?: Maybe<Scalars['String']>;
  /** Name of the main debit account (max 50 characters) */
  DebName?: Maybe<Scalars['String']>;
  /** Description (max 250 characters) */
  Description?: Maybe<Scalars['String']>;
  /** Remarks (max 50 characters) */
  Details?: Maybe<Scalars['String']>;
  /** Additional remarks (max 50 characters) */
  Det2?: Maybe<Scalars['String']>;
  /** Due date */
  DueDate?: Maybe<Scalars['String']>;
  /** Total amount in foreign currency */
  SuFDlr?: Maybe<Scalars['Float']>;
  /** Quantity */
  Quant?: Maybe<Scalars['Float']>;
  /** Reference */
  Referance?: Maybe<Scalars['Int']>;
  /** Reference-2 */
  Ref2?: Maybe<Scalars['Int']>;
  /** Reference-3 */
  Ref3?: Maybe<Scalars['Int']>;
  /** Total NIS amount (credit or debit) */
  SuF: Scalars['Float'];
  /** Transaction type code */
  TransType?: Maybe<Scalars['String']>;
  /** Date */
  ValueDate?: Maybe<Scalars['String']>;
  /** List of Records to add. */
  moves?: Maybe<Array<Maybe<ImportTransactionsToBatchRequestJsonRequestRowsMoves>>>;
};

export type ImportTransactionsToBatchRequestJsonRequestRowsMoves = {
  /** Account identifier (max 15 characters) */
  AccountKey?: Maybe<Scalars['String']>;
  /** Debit=1, Credit=0 */
  DebitCredit?: Maybe<Scalars['Int']>;
  /** Foreign currency amount */
  SufDlr?: Maybe<Scalars['Float']>;
  /** NIS amount */
  Suf?: Maybe<Scalars['Float']>;
};

export type NewBatchResponseJsonResponse = {
  __typename?: 'NewBatchResponseJsonResponse';
  newbatch: Scalars['Int'];
};

export type IssueBatchResponseJsonResponse = {
  __typename?: 'IssueBatchResponseJsonResponse';
  batch_check?: Maybe<Scalars['JSON']>;
  /** Batch issue status */
  batch_issue?: Maybe<Scalars['String']>;
};

export type ImportBankPageResponseJsonResponse = {
  __typename?: 'ImportBankPageResponseJsonResponse';
  status: ImportBankPageResponseJsonResponseStatus;
  errors: Array<Maybe<ImportBankPageResponseJsonResponseErrors>>;
};

export enum ImportBankPageResponseJsonResponseStatus {
  Errors = 'Errors',
  Ok = 'Ok'
}

export type ImportBankPageResponseJsonResponseErrors = {
  __typename?: 'ImportBankPageResponseJsonResponseErrors';
  /** Index */
  index: Scalars['Int'];
  /** Field name where error occurred */
  field?: Maybe<Scalars['String']>;
  /** Error description */
  err?: Maybe<Scalars['String']>;
};

export type ImportBankPageRequestJsonRequest = {
  rows: Array<Maybe<ImportBankPageRequestJsonRequestRows>>;
};

export type ImportBankPageRequestJsonRequestRows = {
  /** Account identifier (max 15 characters) */
  AccountKey: Scalars['String'];
  /** Debit=1, Credit=0 */
  CreditDebit: Scalars['Int'];
  /** Date */
  DatF: Scalars['String'];
  /** Remarks (max 50 characters) */
  Details?: Maybe<Scalars['String']>;
  /** Reference */
  Reference?: Maybe<Scalars['Int']>;
  /** NIS amount */
  SuF: Scalars['Float'];
};

export type GetSessionQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSessionQueryQuery = (
  { __typename?: 'Query' }
  & { getSession?: Maybe<(
    { __typename?: 'napiResopnse' }
    & Pick<NapiResopnse, 'data'>
    & { session: (
      { __typename?: 'NapiResopnseSession' }
      & Pick<NapiResopnseSession, 'branch' | 'cid' | 'company_id' | 'company_name' | 'use_name' | 'user' | 'user_id' | 'wizcomp_no'>
    ) }
  )> }
);

export type GetCompaniesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQueryQuery = (
  { __typename?: 'Query' }
  & { getCompanies?: Maybe<(
    { __typename?: 'getCompeniesResopnse' }
    & { repdata: Array<Maybe<(
      { __typename?: 'GetCompeniesResopnseRepdata' }
      & Pick<GetCompeniesResopnseRepdata, 'Comp_Vatnum' | 'Company_File_Name' | 'Company_Name'>
    )>> }
  )> }
);

export type GetTransactionsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransactionsQueryQuery = (
  { __typename?: 'Query' }
  & { getTransactions?: Maybe<(
    { __typename?: 'GetTransactionsResponseJsonResponse' }
    & { repdata: Array<Maybe<(
      { __typename?: 'GetTransactionsResponseJsonResponseRepdata' }
      & Pick<GetTransactionsResponseJsonResponseRepdata, 'authorizedDealerNumber' | 'batchId' | 'branch' | 'branchName' | 'chequeId' | 'costingCode' | 'costingCodeName' | 'costingCodeFilter' | 'creditorId' | 'currencyCode' | 'date3' | 'debtorId' | 'description' | 'details1' | 'details2' | 'dueDate' | 'exchangeRateDifferences' | 'foreignCurrencySum' | 'id' | 'inventoryId' | 'linkedFile' | 'quantity' | 'reference1' | 'reference2' | 'reference3' | 'registerNumber' | 'shekelSum' | 'stornoCancelledTransactionId' | 'type' | 'userName' | 'valueDate'>
    )>> }
  )> }
);

export type GetBatchQueryQueryVariables = Exact<{
  input?: Maybe<GetBatchRequestJsonRequest>;
}>;


export type GetBatchQueryQuery = (
  { __typename?: 'Query' }
  & { getBatch?: Maybe<(
    { __typename?: 'GetBatchResponseJsonResponse' }
    & { repdata: Array<Maybe<(
      { __typename?: 'GetBatchResponseJsonResponseRepdata' }
      & Pick<GetBatchResponseJsonResponseRepdata, 'details' | 'id' | 'initDate' | 'initTime' | 'issueDate' | 'status' | 'type'>
    )>> }
  )> }
);

export type GetRecordsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecordsQueryQuery = (
  { __typename?: 'Query' }
  & { getRecords?: Maybe<(
    { __typename?: 'GetRecordsResponseJsonResponse' }
    & { repdata: Array<Maybe<(
      { __typename?: 'GetRecordsResponseJsonResponseRepdata' }
      & Pick<GetRecordsResponseJsonResponseRepdata, 'accountId' | 'batchId' | 'counterAccountId' | 'counterAccountName' | 'cumulativeBalance' | 'cumulativeBalanceByFilter' | 'cumulativeBalanceBySortKey' | 'cumulativeBalanceOfOpenSumInRecord' | 'cumulativeBalanceWithoutOpeningBalance' | 'debitOrCredit' | 'debitOrCreditNumber' | 'estimatedSum' | 'foreignCurrencyCredit' | 'foreignCurrencyCumulativeBalance' | 'foreignCurrencyCumulativeBalanceWithoutOpeningBalance' | 'foreignCurrencyDebit' | 'foreignCurrencySum' | 'foreignCurrencySumClosedInRecord' | 'foreignCurrencySumOpenInRecord' | 'id' | 'matchNumberCardAnalysis' | 'shekelCredit' | 'shekelDebit' | 'shekelSum' | 'shekelSumClosedInRecord' | 'shekelSumOpenInRecord' | 'transactionId'>
    )>> }
  )> }
);

export type CheckBatchQueryQueryVariables = Exact<{
  input?: Maybe<CheckBatchRequestJsonRequest>;
}>;


export type CheckBatchQueryQuery = (
  { __typename?: 'Query' }
  & { checkBatch?: Maybe<(
    { __typename?: 'CheckBatchResponseJsonResponse' }
    & Pick<CheckBatchResponseJsonResponse, 'batch_check'>
  )> }
);

export type GetAccountsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountsQueryQuery = (
  { __typename?: 'Query' }
  & { getAccounts?: Maybe<(
    { __typename?: 'GetAccountsResponseJsonResponse' }
    & { repdata: Array<Maybe<(
      { __typename?: 'GetAccountsResponseJsonResponseRepdata' }
      & Pick<GetAccountsResponseJsonResponseRepdata, 'accountantTransfer' | 'address' | 'agent' | 'authorizedDealerNumber' | 'balanceCode' | 'bankAccountId' | 'bankBranchId' | 'bankId' | 'cellphone' | 'centralAccount' | 'city' | 'costingCode' | 'country' | 'details' | 'email' | 'fax' | 'filter' | 'generalDiscountPercent' | 'id' | 'incomeFileNumber' | 'initDate' | 'isActive' | 'mainAccount' | 'maxCredit' | 'maxCreditCurrency' | 'maxObligo' | 'maxObligoCurrency' | 'name' | 'occupation' | 'phone' | 'sortGroup' | 'type' | 'vatExempt' | 'withholdingPercent' | 'withholdingValidity' | 'zipcode'>
    )>> }
  )> }
);

export type GetBankPageRecordsQueryQueryVariables = Exact<{
  input?: Maybe<GetBankPageRecordsRequestJsonRequest>;
}>;


export type GetBankPageRecordsQueryQuery = (
  { __typename?: 'Query' }
  & { getBankPageRecords?: Maybe<(
    { __typename?: 'GetBankPageRecordsResponseJsonResponse' }
    & { repdata: Array<Maybe<(
      { __typename?: 'GetBankPageRecordsResponseJsonResponseRepdata' }
      & Pick<GetBankPageRecordsResponseJsonResponseRepdata, 'accountId' | 'accountName' | 'adjustedRecord' | 'bankPageId' | 'cumulativeBalance' | 'cumulativeBalanceCalculated' | 'date' | 'debitOrCredit' | 'details' | 'id' | 'matchNumber' | 'reference' | 'sum'>
    )>> }
  )> }
);

export type ImportTransactionsToBatchMutationMutationVariables = Exact<{
  input?: Maybe<ImportTransactionsToBatchRequestJsonRequest>;
}>;


export type ImportTransactionsToBatchMutationMutation = (
  { __typename?: 'Mutation' }
  & { importTransactionsToBatch?: Maybe<(
    { __typename?: 'ImportTransactionsToBatchResponseJsonResponse' }
    & Pick<ImportTransactionsToBatchResponseJsonResponse, 'status' | 'batch_issue' | 'batch_check' | 'newbatch' | 'batchno' | 'batchId'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'ImportTransactionsToBatchResponseJsonResponseErrors' }
      & Pick<ImportTransactionsToBatchResponseJsonResponseErrors, 'headerID' | 'err' | 'recId' | 'field' | 'TxtMsg'>
    )>>> }
  )> }
);

export type CreateBatchMutationMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateBatchMutationMutation = (
  { __typename?: 'Mutation' }
  & { createBatch?: Maybe<(
    { __typename?: 'NewBatchResponseJsonResponse' }
    & Pick<NewBatchResponseJsonResponse, 'newbatch'>
  )> }
);

export type IssueBatchMutationMutationVariables = Exact<{
  input?: Maybe<CheckBatchRequestJsonRequest>;
}>;


export type IssueBatchMutationMutation = (
  { __typename?: 'Mutation' }
  & { issueBatch?: Maybe<(
    { __typename?: 'IssueBatchResponseJsonResponse' }
    & Pick<IssueBatchResponseJsonResponse, 'batch_check' | 'batch_issue'>
  )> }
);

export type ImportBankPageMutationMutationVariables = Exact<{
  input?: Maybe<ImportBankPageRequestJsonRequest>;
}>;


export type ImportBankPageMutationMutation = (
  { __typename?: 'Mutation' }
  & { importBankPage?: Maybe<(
    { __typename?: 'ImportBankPageResponseJsonResponse' }
    & Pick<ImportBankPageResponseJsonResponse, 'status'>
    & { errors: Array<Maybe<(
      { __typename?: 'ImportBankPageResponseJsonResponseErrors' }
      & Pick<ImportBankPageResponseJsonResponseErrors, 'index' | 'field' | 'err'>
    )>> }
  )> }
);


export const GetSessionQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSessionQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"session"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"branch"}},{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"company_id"}},{"kind":"Field","name":{"kind":"Name","value":"company_name"}},{"kind":"Field","name":{"kind":"Name","value":"use_name"}},{"kind":"Field","name":{"kind":"Name","value":"user"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"wizcomp_no"}}]}}]}}]}}]};
export const GetCompaniesQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCompaniesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompanies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repdata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Comp_Vatnum"}},{"kind":"Field","name":{"kind":"Name","value":"Company_File_Name"}},{"kind":"Field","name":{"kind":"Name","value":"Company_Name"}}]}}]}}]}}]};
export const GetTransactionsQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTransactionsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTransactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repdata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorizedDealerNumber"}},{"kind":"Field","name":{"kind":"Name","value":"batchId"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}},{"kind":"Field","name":{"kind":"Name","value":"branchName"}},{"kind":"Field","name":{"kind":"Name","value":"chequeId"}},{"kind":"Field","name":{"kind":"Name","value":"costingCode"}},{"kind":"Field","name":{"kind":"Name","value":"costingCodeName"}},{"kind":"Field","name":{"kind":"Name","value":"costingCodeFilter"}},{"kind":"Field","name":{"kind":"Name","value":"creditorId"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"date3"}},{"kind":"Field","name":{"kind":"Name","value":"debtorId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"details1"}},{"kind":"Field","name":{"kind":"Name","value":"details2"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"exchangeRateDifferences"}},{"kind":"Field","name":{"kind":"Name","value":"foreignCurrencySum"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedFile"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"reference1"}},{"kind":"Field","name":{"kind":"Name","value":"reference2"}},{"kind":"Field","name":{"kind":"Name","value":"reference3"}},{"kind":"Field","name":{"kind":"Name","value":"registerNumber"}},{"kind":"Field","name":{"kind":"Name","value":"shekelSum"}},{"kind":"Field","name":{"kind":"Name","value":"stornoCancelledTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"valueDate"}}]}}]}}]}}]};
export const GetBatchQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBatchQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetBatchRequestJsonRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repdata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"initDate"}},{"kind":"Field","name":{"kind":"Name","value":"initTime"}},{"kind":"Field","name":{"kind":"Name","value":"issueDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]};
export const GetRecordsQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRecordsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRecords"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repdata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"batchId"}},{"kind":"Field","name":{"kind":"Name","value":"counterAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"counterAccountName"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeBalance"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeBalanceByFilter"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeBalanceBySortKey"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeBalanceOfOpenSumInRecord"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeBalanceWithoutOpeningBalance"}},{"kind":"Field","name":{"kind":"Name","value":"debitOrCredit"}},{"kind":"Field","name":{"kind":"Name","value":"debitOrCreditNumber"}},{"kind":"Field","name":{"kind":"Name","value":"estimatedSum"}},{"kind":"Field","name":{"kind":"Name","value":"foreignCurrencyCredit"}},{"kind":"Field","name":{"kind":"Name","value":"foreignCurrencyCumulativeBalance"}},{"kind":"Field","name":{"kind":"Name","value":"foreignCurrencyCumulativeBalanceWithoutOpeningBalance"}},{"kind":"Field","name":{"kind":"Name","value":"foreignCurrencyDebit"}},{"kind":"Field","name":{"kind":"Name","value":"foreignCurrencySum"}},{"kind":"Field","name":{"kind":"Name","value":"foreignCurrencySumClosedInRecord"}},{"kind":"Field","name":{"kind":"Name","value":"foreignCurrencySumOpenInRecord"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"matchNumberCardAnalysis"}},{"kind":"Field","name":{"kind":"Name","value":"shekelCredit"}},{"kind":"Field","name":{"kind":"Name","value":"shekelDebit"}},{"kind":"Field","name":{"kind":"Name","value":"shekelSum"}},{"kind":"Field","name":{"kind":"Name","value":"shekelSumClosedInRecord"}},{"kind":"Field","name":{"kind":"Name","value":"shekelSumOpenInRecord"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}}]}}]}}]}}]};
export const CheckBatchQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkBatchQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckBatchRequestJsonRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkBatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch_check"}}]}}]}}]};
export const GetAccountsQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAccountsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAccounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repdata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountantTransfer"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"agent"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedDealerNumber"}},{"kind":"Field","name":{"kind":"Name","value":"balanceCode"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"bankBranchId"}},{"kind":"Field","name":{"kind":"Name","value":"bankId"}},{"kind":"Field","name":{"kind":"Name","value":"cellphone"}},{"kind":"Field","name":{"kind":"Name","value":"centralAccount"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"costingCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fax"}},{"kind":"Field","name":{"kind":"Name","value":"filter"}},{"kind":"Field","name":{"kind":"Name","value":"generalDiscountPercent"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"incomeFileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"initDate"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"mainAccount"}},{"kind":"Field","name":{"kind":"Name","value":"maxCredit"}},{"kind":"Field","name":{"kind":"Name","value":"maxCreditCurrency"}},{"kind":"Field","name":{"kind":"Name","value":"maxObligo"}},{"kind":"Field","name":{"kind":"Name","value":"maxObligoCurrency"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"occupation"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"sortGroup"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"vatExempt"}},{"kind":"Field","name":{"kind":"Name","value":"withholdingPercent"}},{"kind":"Field","name":{"kind":"Name","value":"withholdingValidity"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}}]}}]}}]}}]};
export const GetBankPageRecordsQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBankPageRecordsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetBankPageRecordsRequestJsonRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBankPageRecords"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repdata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"accountName"}},{"kind":"Field","name":{"kind":"Name","value":"adjustedRecord"}},{"kind":"Field","name":{"kind":"Name","value":"bankPageId"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeBalance"}},{"kind":"Field","name":{"kind":"Name","value":"cumulativeBalanceCalculated"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"debitOrCredit"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"matchNumber"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"sum"}}]}}]}}]}}]};
export const ImportTransactionsToBatchMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"importTransactionsToBatchMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ImportTransactionsToBatchRequestJsonRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importTransactionsToBatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"batch_issue"}},{"kind":"Field","name":{"kind":"Name","value":"batch_check"}},{"kind":"Field","name":{"kind":"Name","value":"newbatch"}},{"kind":"Field","name":{"kind":"Name","value":"batchno"}},{"kind":"Field","name":{"kind":"Name","value":"batchId"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headerID"}},{"kind":"Field","name":{"kind":"Name","value":"err"}},{"kind":"Field","name":{"kind":"Name","value":"recId"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"TxtMsg"}}]}}]}}]}}]};
export const CreateBatchMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBatchMutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBatch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newbatch"}}]}}]}}]};
export const IssueBatchMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"issueBatchMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckBatchRequestJsonRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issueBatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"batch_check"}},{"kind":"Field","name":{"kind":"Name","value":"batch_issue"}}]}}]}}]};
export const ImportBankPageMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"importBankPageMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ImportBankPageRequestJsonRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importBankPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"err"}}]}}]}}]}}]};
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    getSessionQuery(variables?: GetSessionQueryQueryVariables, options?: C): Promise<GetSessionQueryQuery> {
      return requester<GetSessionQueryQuery, GetSessionQueryQueryVariables>(GetSessionQueryDocument, variables, options);
    },
    getCompaniesQuery(variables?: GetCompaniesQueryQueryVariables, options?: C): Promise<GetCompaniesQueryQuery> {
      return requester<GetCompaniesQueryQuery, GetCompaniesQueryQueryVariables>(GetCompaniesQueryDocument, variables, options);
    },
    getTransactionsQuery(variables?: GetTransactionsQueryQueryVariables, options?: C): Promise<GetTransactionsQueryQuery> {
      return requester<GetTransactionsQueryQuery, GetTransactionsQueryQueryVariables>(GetTransactionsQueryDocument, variables, options);
    },
    getBatchQuery(variables?: GetBatchQueryQueryVariables, options?: C): Promise<GetBatchQueryQuery> {
      return requester<GetBatchQueryQuery, GetBatchQueryQueryVariables>(GetBatchQueryDocument, variables, options);
    },
    getRecordsQuery(variables?: GetRecordsQueryQueryVariables, options?: C): Promise<GetRecordsQueryQuery> {
      return requester<GetRecordsQueryQuery, GetRecordsQueryQueryVariables>(GetRecordsQueryDocument, variables, options);
    },
    checkBatchQuery(variables?: CheckBatchQueryQueryVariables, options?: C): Promise<CheckBatchQueryQuery> {
      return requester<CheckBatchQueryQuery, CheckBatchQueryQueryVariables>(CheckBatchQueryDocument, variables, options);
    },
    getAccountsQuery(variables?: GetAccountsQueryQueryVariables, options?: C): Promise<GetAccountsQueryQuery> {
      return requester<GetAccountsQueryQuery, GetAccountsQueryQueryVariables>(GetAccountsQueryDocument, variables, options);
    },
    getBankPageRecordsQuery(variables?: GetBankPageRecordsQueryQueryVariables, options?: C): Promise<GetBankPageRecordsQueryQuery> {
      return requester<GetBankPageRecordsQueryQuery, GetBankPageRecordsQueryQueryVariables>(GetBankPageRecordsQueryDocument, variables, options);
    },
    importTransactionsToBatchMutation(variables?: ImportTransactionsToBatchMutationMutationVariables, options?: C): Promise<ImportTransactionsToBatchMutationMutation> {
      return requester<ImportTransactionsToBatchMutationMutation, ImportTransactionsToBatchMutationMutationVariables>(ImportTransactionsToBatchMutationDocument, variables, options);
    },
    createBatchMutation(variables?: CreateBatchMutationMutationVariables, options?: C): Promise<CreateBatchMutationMutation> {
      return requester<CreateBatchMutationMutation, CreateBatchMutationMutationVariables>(CreateBatchMutationDocument, variables, options);
    },
    issueBatchMutation(variables?: IssueBatchMutationMutationVariables, options?: C): Promise<IssueBatchMutationMutation> {
      return requester<IssueBatchMutationMutation, IssueBatchMutationMutationVariables>(IssueBatchMutationDocument, variables, options);
    },
    importBankPageMutation(variables?: ImportBankPageMutationMutationVariables, options?: C): Promise<ImportBankPageMutationMutation> {
      return requester<ImportBankPageMutationMutation, ImportBankPageMutationMutationVariables>(ImportBankPageMutationDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;