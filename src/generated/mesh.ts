import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  /** POST /api/napi */
  getSession?: Maybe<NapiResopnse>;
  /** POST /CompanyListToTokenApi/TokenCompanies */
  getCompanies?: Maybe<GetCompeniesResopnse>;
  /** POST /ExportDataApi/exportData */
  getRecords?: Maybe<GetRecordsResponseJsonResponse>;
  /** POST /ExportDataApi/exportData */
  getTransactions?: Maybe<GetTransactionsResponseJsonResponse>;
  /** POST /ExportDataApi/exportData */
  getBatch?: Maybe<GetBatchResponseJsonResponse>;
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
  data: Array<Maybe<Scalars['JSON']>>;
  session: NapiResopnseSession;
};


export type NapiResopnseSession = {
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
  repdata: Array<Maybe<GetCompeniesResopnseRepdata>>;
};

export type GetCompeniesResopnseRepdata = {
  Comp_Vatnum: Scalars['String'];
  Company_File_Name: Scalars['String'];
  Company_Name: Scalars['String'];
};

export type GetRecordsResponseJsonResponse = {
  repdata: Array<Maybe<GetRecordsResponseJsonResponseRepdata>>;
};

export type GetRecordsResponseJsonResponseRepdata = {
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
  _ = 'זכות'
}

export type GetTransactionsResponseJsonResponse = {
  repdata: Array<Maybe<GetTransactionsResponseJsonResponseRepdata>>;
};

export type GetTransactionsResponseJsonResponseRepdata = {
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
  repdata: Array<Maybe<GetBatchResponseJsonResponseRepdata>>;
};

export type GetBatchResponseJsonResponseRepdata = {
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

export type CheckBatchResponseJsonResponse = {
  batch_check?: Maybe<Scalars['JSON']>;
};

export type CheckBatchRequestJsonRequest = {
  /** Batch identifier */
  batchNo?: Maybe<Scalars['Int']>;
};

export type GetAccountsResponseJsonResponse = {
  repdata: Array<Maybe<GetAccountsResponseJsonResponseRepdata>>;
};

export type GetAccountsResponseJsonResponseRepdata = {
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
  repdata: Array<Maybe<GetBankPageRecordsResponseJsonResponseRepdata>>;
};

export type GetBankPageRecordsResponseJsonResponseRepdata = {
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
  /** POST /jtransApi/newBatch */
  createBatch?: Maybe<NewBatchResponseJsonResponse>;
  /** POST /jtransApi/tmpBatch */
  importTransactionsToBatch?: Maybe<ImportTransactionsToBatchResponseJsonResponse>;
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

export type NewBatchResponseJsonResponse = {
  newbatch: Scalars['Int'];
};

export type ImportTransactionsToBatchResponseJsonResponse = {
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

export type IssueBatchResponseJsonResponse = {
  batch_check?: Maybe<Scalars['JSON']>;
  /** Batch issue status */
  batch_issue?: Maybe<Scalars['String']>;
};

export type ImportBankPageResponseJsonResponse = {
  status: ImportBankPageResponseJsonResponseStatus;
  errors: Array<Maybe<ImportBankPageResponseJsonResponseErrors>>;
};

export enum ImportBankPageResponseJsonResponseStatus {
  Errors = 'errors',
  Ok = 'OK'
}

export type ImportBankPageResponseJsonResponseErrors = {
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  napiResopnse: ResolverTypeWrapper<NapiResopnse>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  NapiResopnseSession: ResolverTypeWrapper<NapiResopnseSession>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  getCompeniesResopnse: ResolverTypeWrapper<GetCompeniesResopnse>;
  GetCompeniesResopnseRepdata: ResolverTypeWrapper<GetCompeniesResopnseRepdata>;
  GetRecordsResponseJsonResponse: ResolverTypeWrapper<GetRecordsResponseJsonResponse>;
  GetRecordsResponseJsonResponseRepdata: ResolverTypeWrapper<GetRecordsResponseJsonResponseRepdata>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GetRecordsResponseJsonResponseRepdataDebitOrCredit: GetRecordsResponseJsonResponseRepdataDebitOrCredit;
  GetTransactionsResponseJsonResponse: ResolverTypeWrapper<GetTransactionsResponseJsonResponse>;
  GetTransactionsResponseJsonResponseRepdata: ResolverTypeWrapper<GetTransactionsResponseJsonResponseRepdata>;
  GetBatchResponseJsonResponse: ResolverTypeWrapper<GetBatchResponseJsonResponse>;
  GetBatchResponseJsonResponseRepdata: ResolverTypeWrapper<GetBatchResponseJsonResponseRepdata>;
  GetBatchRequestJsonRequest: GetBatchRequestJsonRequest;
  CheckBatchResponseJsonResponse: ResolverTypeWrapper<CheckBatchResponseJsonResponse>;
  CheckBatchRequestJsonRequest: CheckBatchRequestJsonRequest;
  GetAccountsResponseJsonResponse: ResolverTypeWrapper<GetAccountsResponseJsonResponse>;
  GetAccountsResponseJsonResponseRepdata: ResolverTypeWrapper<GetAccountsResponseJsonResponseRepdata>;
  GetBankPageRecordsResponseJsonResponse: ResolverTypeWrapper<GetBankPageRecordsResponseJsonResponse>;
  GetBankPageRecordsResponseJsonResponseRepdata: ResolverTypeWrapper<GetBankPageRecordsResponseJsonResponseRepdata>;
  GetBankPageRecordsRequestJsonRequest: GetBankPageRecordsRequestJsonRequest;
  Mutation: ResolverTypeWrapper<{}>;
  NewBatchResponseJsonResponse: ResolverTypeWrapper<NewBatchResponseJsonResponse>;
  ImportTransactionsToBatchResponseJsonResponse: ResolverTypeWrapper<ImportTransactionsToBatchResponseJsonResponse>;
  ImportTransactionsToBatchResponseJsonResponseErrors: ResolverTypeWrapper<ImportTransactionsToBatchResponseJsonResponseErrors>;
  ImportTransactionsToBatchRequestJsonRequest: ImportTransactionsToBatchRequestJsonRequest;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ImportTransactionsToBatchRequestJsonRequestRows: ImportTransactionsToBatchRequestJsonRequestRows;
  ImportTransactionsToBatchRequestJsonRequestRowsMoves: ImportTransactionsToBatchRequestJsonRequestRowsMoves;
  IssueBatchResponseJsonResponse: ResolverTypeWrapper<IssueBatchResponseJsonResponse>;
  ImportBankPageResponseJsonResponse: ResolverTypeWrapper<ImportBankPageResponseJsonResponse>;
  ImportBankPageResponseJsonResponseStatus: ImportBankPageResponseJsonResponseStatus;
  ImportBankPageResponseJsonResponseErrors: ResolverTypeWrapper<ImportBankPageResponseJsonResponseErrors>;
  ImportBankPageRequestJsonRequest: ImportBankPageRequestJsonRequest;
  ImportBankPageRequestJsonRequestRows: ImportBankPageRequestJsonRequestRows;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  napiResopnse: NapiResopnse;
  JSON: Scalars['JSON'];
  NapiResopnseSession: NapiResopnseSession;
  Int: Scalars['Int'];
  String: Scalars['String'];
  getCompeniesResopnse: GetCompeniesResopnse;
  GetCompeniesResopnseRepdata: GetCompeniesResopnseRepdata;
  GetRecordsResponseJsonResponse: GetRecordsResponseJsonResponse;
  GetRecordsResponseJsonResponseRepdata: GetRecordsResponseJsonResponseRepdata;
  Float: Scalars['Float'];
  GetTransactionsResponseJsonResponse: GetTransactionsResponseJsonResponse;
  GetTransactionsResponseJsonResponseRepdata: GetTransactionsResponseJsonResponseRepdata;
  GetBatchResponseJsonResponse: GetBatchResponseJsonResponse;
  GetBatchResponseJsonResponseRepdata: GetBatchResponseJsonResponseRepdata;
  GetBatchRequestJsonRequest: GetBatchRequestJsonRequest;
  CheckBatchResponseJsonResponse: CheckBatchResponseJsonResponse;
  CheckBatchRequestJsonRequest: CheckBatchRequestJsonRequest;
  GetAccountsResponseJsonResponse: GetAccountsResponseJsonResponse;
  GetAccountsResponseJsonResponseRepdata: GetAccountsResponseJsonResponseRepdata;
  GetBankPageRecordsResponseJsonResponse: GetBankPageRecordsResponseJsonResponse;
  GetBankPageRecordsResponseJsonResponseRepdata: GetBankPageRecordsResponseJsonResponseRepdata;
  GetBankPageRecordsRequestJsonRequest: GetBankPageRecordsRequestJsonRequest;
  Mutation: {};
  NewBatchResponseJsonResponse: NewBatchResponseJsonResponse;
  ImportTransactionsToBatchResponseJsonResponse: ImportTransactionsToBatchResponseJsonResponse;
  ImportTransactionsToBatchResponseJsonResponseErrors: ImportTransactionsToBatchResponseJsonResponseErrors;
  ImportTransactionsToBatchRequestJsonRequest: ImportTransactionsToBatchRequestJsonRequest;
  Boolean: Scalars['Boolean'];
  ImportTransactionsToBatchRequestJsonRequestRows: ImportTransactionsToBatchRequestJsonRequestRows;
  ImportTransactionsToBatchRequestJsonRequestRowsMoves: ImportTransactionsToBatchRequestJsonRequestRowsMoves;
  IssueBatchResponseJsonResponse: IssueBatchResponseJsonResponse;
  ImportBankPageResponseJsonResponse: ImportBankPageResponseJsonResponse;
  ImportBankPageResponseJsonResponseErrors: ImportBankPageResponseJsonResponseErrors;
  ImportBankPageRequestJsonRequest: ImportBankPageRequestJsonRequest;
  ImportBankPageRequestJsonRequestRows: ImportBankPageRequestJsonRequestRows;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getSession?: Resolver<Maybe<ResolversTypes['napiResopnse']>, ParentType, ContextType>;
  getCompanies?: Resolver<Maybe<ResolversTypes['getCompeniesResopnse']>, ParentType, ContextType>;
  getRecords?: Resolver<Maybe<ResolversTypes['GetRecordsResponseJsonResponse']>, ParentType, ContextType>;
  getTransactions?: Resolver<Maybe<ResolversTypes['GetTransactionsResponseJsonResponse']>, ParentType, ContextType>;
  getBatch?: Resolver<Maybe<ResolversTypes['GetBatchResponseJsonResponse']>, ParentType, ContextType, RequireFields<QueryGetBatchArgs, never>>;
  checkBatch?: Resolver<Maybe<ResolversTypes['CheckBatchResponseJsonResponse']>, ParentType, ContextType, RequireFields<QueryCheckBatchArgs, never>>;
  getAccounts?: Resolver<Maybe<ResolversTypes['GetAccountsResponseJsonResponse']>, ParentType, ContextType>;
  getBankPageRecords?: Resolver<Maybe<ResolversTypes['GetBankPageRecordsResponseJsonResponse']>, ParentType, ContextType, RequireFields<QueryGetBankPageRecordsArgs, never>>;
}>;

export type NapiResopnseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['napiResopnse'] = ResolversParentTypes['napiResopnse']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['JSON']>>, ParentType, ContextType>;
  session?: Resolver<ResolversTypes['NapiResopnseSession'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type NapiResopnseSessionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NapiResopnseSession'] = ResolversParentTypes['NapiResopnseSession']> = ResolversObject<{
  branch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  company_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wizcomp_no?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetCompeniesResopnseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['getCompeniesResopnse'] = ResolversParentTypes['getCompeniesResopnse']> = ResolversObject<{
  repdata?: Resolver<Array<Maybe<ResolversTypes['GetCompeniesResopnseRepdata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetCompeniesResopnseRepdataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetCompeniesResopnseRepdata'] = ResolversParentTypes['GetCompeniesResopnseRepdata']> = ResolversObject<{
  Comp_Vatnum?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Company_File_Name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Company_Name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetRecordsResponseJsonResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetRecordsResponseJsonResponse'] = ResolversParentTypes['GetRecordsResponseJsonResponse']> = ResolversObject<{
  repdata?: Resolver<Array<Maybe<ResolversTypes['GetRecordsResponseJsonResponseRepdata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetRecordsResponseJsonResponseRepdataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetRecordsResponseJsonResponseRepdata'] = ResolversParentTypes['GetRecordsResponseJsonResponseRepdata']> = ResolversObject<{
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  batchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  counterAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  counterAccountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cumulativeBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceByFilter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceBySortKey?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceOfOpenSumInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceWithoutOpeningBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debitOrCredit?: Resolver<Maybe<ResolversTypes['GetRecordsResponseJsonResponseRepdataDebitOrCredit']>, ParentType, ContextType>;
  debitOrCreditNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  estimatedSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyCredit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyCumulativeBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyCumulativeBalanceWithoutOpeningBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencyDebit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencySum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencySumClosedInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  foreignCurrencySumOpenInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchNumberCardAnalysis?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shekelCredit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelDebit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelSumClosedInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shekelSumOpenInRecord?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  transactionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetRecordsResponseJsonResponseRepdataDebitOrCreditResolvers = { _: 'זכות' };

export type GetTransactionsResponseJsonResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetTransactionsResponseJsonResponse'] = ResolversParentTypes['GetTransactionsResponseJsonResponse']> = ResolversObject<{
  repdata?: Resolver<Array<Maybe<ResolversTypes['GetTransactionsResponseJsonResponseRepdata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetTransactionsResponseJsonResponseRepdataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetTransactionsResponseJsonResponseRepdata'] = ResolversParentTypes['GetTransactionsResponseJsonResponseRepdata']> = ResolversObject<{
  authorizedDealerNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batchId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  branch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  branchName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chequeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  costingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costingCodeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costingCodeFilter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creditorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  debtorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchangeRateDifferences?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  foreignCurrencySum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inventoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  linkedFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reference1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reference2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reference3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  registerNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shekelSum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stornoCancelledTransactionId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetBatchResponseJsonResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetBatchResponseJsonResponse'] = ResolversParentTypes['GetBatchResponseJsonResponse']> = ResolversObject<{
  repdata?: Resolver<Array<Maybe<ResolversTypes['GetBatchResponseJsonResponseRepdata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetBatchResponseJsonResponseRepdataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetBatchResponseJsonResponseRepdata'] = ResolversParentTypes['GetBatchResponseJsonResponseRepdata']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  initDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issueDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CheckBatchResponseJsonResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CheckBatchResponseJsonResponse'] = ResolversParentTypes['CheckBatchResponseJsonResponse']> = ResolversObject<{
  batch_check?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetAccountsResponseJsonResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetAccountsResponseJsonResponse'] = ResolversParentTypes['GetAccountsResponseJsonResponse']> = ResolversObject<{
  repdata?: Resolver<Array<Maybe<ResolversTypes['GetAccountsResponseJsonResponseRepdata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetAccountsResponseJsonResponseRepdataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetAccountsResponseJsonResponseRepdata'] = ResolversParentTypes['GetAccountsResponseJsonResponseRepdata']> = ResolversObject<{
  accountantTransfer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  authorizedDealerNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  balanceCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bankAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bankBranchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bankId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cellphone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  centralAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  generalDiscountPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  incomeFileNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxCredit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxCreditCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxObligo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxObligoCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occupation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortGroup?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vatExempt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  withholdingPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  withholdingValidity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetBankPageRecordsResponseJsonResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetBankPageRecordsResponseJsonResponse'] = ResolversParentTypes['GetBankPageRecordsResponseJsonResponse']> = ResolversObject<{
  repdata?: Resolver<Array<Maybe<ResolversTypes['GetBankPageRecordsResponseJsonResponseRepdata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetBankPageRecordsResponseJsonResponseRepdataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetBankPageRecordsResponseJsonResponseRepdata'] = ResolversParentTypes['GetBankPageRecordsResponseJsonResponseRepdata']> = ResolversObject<{
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  adjustedRecord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bankPageId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cumulativeBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cumulativeBalanceCalculated?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  debitOrCredit?: Resolver<Maybe<ResolversTypes['GetRecordsResponseJsonResponseRepdataDebitOrCredit']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createBatch?: Resolver<Maybe<ResolversTypes['NewBatchResponseJsonResponse']>, ParentType, ContextType>;
  importTransactionsToBatch?: Resolver<Maybe<ResolversTypes['ImportTransactionsToBatchResponseJsonResponse']>, ParentType, ContextType, RequireFields<MutationImportTransactionsToBatchArgs, never>>;
  issueBatch?: Resolver<Maybe<ResolversTypes['IssueBatchResponseJsonResponse']>, ParentType, ContextType, RequireFields<MutationIssueBatchArgs, never>>;
  importBankPage?: Resolver<Maybe<ResolversTypes['ImportBankPageResponseJsonResponse']>, ParentType, ContextType, RequireFields<MutationImportBankPageArgs, never>>;
}>;

export type NewBatchResponseJsonResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewBatchResponseJsonResponse'] = ResolversParentTypes['NewBatchResponseJsonResponse']> = ResolversObject<{
  newbatch?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImportTransactionsToBatchResponseJsonResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ImportTransactionsToBatchResponseJsonResponse'] = ResolversParentTypes['ImportTransactionsToBatchResponseJsonResponse']> = ResolversObject<{
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch_issue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch_check?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newbatch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  batchno?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  batchId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImportTransactionsToBatchResponseJsonResponseErrors']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImportTransactionsToBatchResponseJsonResponseErrorsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ImportTransactionsToBatchResponseJsonResponseErrors'] = ResolversParentTypes['ImportTransactionsToBatchResponseJsonResponseErrors']> = ResolversObject<{
  headerID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  err?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  TxtMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueBatchResponseJsonResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IssueBatchResponseJsonResponse'] = ResolversParentTypes['IssueBatchResponseJsonResponse']> = ResolversObject<{
  batch_check?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  batch_issue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImportBankPageResponseJsonResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ImportBankPageResponseJsonResponse'] = ResolversParentTypes['ImportBankPageResponseJsonResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['ImportBankPageResponseJsonResponseStatus'], ParentType, ContextType>;
  errors?: Resolver<Array<Maybe<ResolversTypes['ImportBankPageResponseJsonResponseErrors']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImportBankPageResponseJsonResponseStatusResolvers = { Errors: 'errors', Ok: 'OK' };

export type ImportBankPageResponseJsonResponseErrorsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ImportBankPageResponseJsonResponseErrors'] = ResolversParentTypes['ImportBankPageResponseJsonResponseErrors']> = ResolversObject<{
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  err?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  napiResopnse?: NapiResopnseResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  NapiResopnseSession?: NapiResopnseSessionResolvers<ContextType>;
  getCompeniesResopnse?: GetCompeniesResopnseResolvers<ContextType>;
  GetCompeniesResopnseRepdata?: GetCompeniesResopnseRepdataResolvers<ContextType>;
  GetRecordsResponseJsonResponse?: GetRecordsResponseJsonResponseResolvers<ContextType>;
  GetRecordsResponseJsonResponseRepdata?: GetRecordsResponseJsonResponseRepdataResolvers<ContextType>;
  GetRecordsResponseJsonResponseRepdataDebitOrCredit?: GetRecordsResponseJsonResponseRepdataDebitOrCreditResolvers;
  GetTransactionsResponseJsonResponse?: GetTransactionsResponseJsonResponseResolvers<ContextType>;
  GetTransactionsResponseJsonResponseRepdata?: GetTransactionsResponseJsonResponseRepdataResolvers<ContextType>;
  GetBatchResponseJsonResponse?: GetBatchResponseJsonResponseResolvers<ContextType>;
  GetBatchResponseJsonResponseRepdata?: GetBatchResponseJsonResponseRepdataResolvers<ContextType>;
  CheckBatchResponseJsonResponse?: CheckBatchResponseJsonResponseResolvers<ContextType>;
  GetAccountsResponseJsonResponse?: GetAccountsResponseJsonResponseResolvers<ContextType>;
  GetAccountsResponseJsonResponseRepdata?: GetAccountsResponseJsonResponseRepdataResolvers<ContextType>;
  GetBankPageRecordsResponseJsonResponse?: GetBankPageRecordsResponseJsonResponseResolvers<ContextType>;
  GetBankPageRecordsResponseJsonResponseRepdata?: GetBankPageRecordsResponseJsonResponseRepdataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NewBatchResponseJsonResponse?: NewBatchResponseJsonResponseResolvers<ContextType>;
  ImportTransactionsToBatchResponseJsonResponse?: ImportTransactionsToBatchResponseJsonResponseResolvers<ContextType>;
  ImportTransactionsToBatchResponseJsonResponseErrors?: ImportTransactionsToBatchResponseJsonResponseErrorsResolvers<ContextType>;
  IssueBatchResponseJsonResponse?: IssueBatchResponseJsonResponseResolvers<ContextType>;
  ImportBankPageResponseJsonResponse?: ImportBankPageResponseJsonResponseResolvers<ContextType>;
  ImportBankPageResponseJsonResponseStatus?: ImportBankPageResponseJsonResponseStatusResolvers;
  ImportBankPageResponseJsonResponseErrors?: ImportBankPageResponseJsonResponseErrorsResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MeshContext> = Resolvers<ContextType>;

import { MeshContext as BaseMeshContext, ProjectionOptions } from '@graphql-mesh/runtime';

export type HashavshevetSdk = {
  createBatch: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Mutation['createBatch']>,
  importTransactionsToBatch: (args: MutationImportTransactionsToBatchArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['importTransactionsToBatch']>,
  issueBatch: (args: MutationIssueBatchArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['issueBatch']>,
  importBankPage: (args: MutationImportBankPageArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['importBankPage']>,
  getSession: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getSession']>,
  getCompanies: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getCompanies']>,
  getRecords: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getRecords']>,
  getTransactions: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getTransactions']>,
  getBatch: (args: QueryGetBatchArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getBatch']>,
  checkBatch: (args: QueryCheckBatchArgs, projectionOptions?: ProjectionOptions) => Promise<Query['checkBatch']>,
  getAccounts: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getAccounts']>,
  getBankPageRecords: (args: QueryGetBankPageRecordsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getBankPageRecords']>
};

export type QueryHashavshevetSdk = {
  getSession: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getSession']>,
  getCompanies: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getCompanies']>,
  getRecords: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getRecords']>,
  getTransactions: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getTransactions']>,
  getBatch: (args: QueryGetBatchArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getBatch']>,
  checkBatch: (args: QueryCheckBatchArgs, projectionOptions?: ProjectionOptions) => Promise<Query['checkBatch']>,
  getAccounts: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getAccounts']>,
  getBankPageRecords: (args: QueryGetBankPageRecordsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getBankPageRecords']>
};

export type MutationHashavshevetSdk = {
  createBatch: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Mutation['createBatch']>,
  importTransactionsToBatch: (args: MutationImportTransactionsToBatchArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['importTransactionsToBatch']>,
  issueBatch: (args: MutationIssueBatchArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['issueBatch']>,
  importBankPage: (args: MutationImportBankPageArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['importBankPage']>
};

export type SubscriptionHashavshevetSdk = {

};

export type HashavshevetContext = { 
      ["Hashavshevet"]: { api: HashavshevetSdk, apiQuery: QueryHashavshevetSdk, apiMutation: MutationHashavshevetSdk, apiSubscription: SubscriptionHashavshevetSdk }, 
    };

export type MeshContext = HashavshevetContext & BaseMeshContext;