
interface GraphQLRequestOptions {
  url: string;
  operation: string;
  authorization: string;
  headers?: any;
}
export declare const request: ({ url, operation, authorization, headers }: GraphQLRequestOptions) => Promise<string>;
export declare type Scalars = 'String' | 'Boolean' | 'Int' | 'Float' | 'ID' | 'DateTime';
export declare type ScalarMap = 'string' | 'boolean' | 'number' | 'Date';
export declare type Object = 'object';
export declare type Scalar = 'scalar';
export declare type Enum = 'enum';
export declare type Kind = Object | Scalar | Enum;
export interface InputField {
    name: string;
    inputType: FieldType;
}
export interface Input {
    name: string;
    fields: InputField[];
}
export interface FieldType {
    kind: Kind;
    isRequired: boolean;
    isList: boolean;
    type: Scalars | string;
}
export interface OutputField {
    name: string;
    outputType: FieldType;
    args: InputField[];
}
export interface Output {
    name: string;
    fields: OutputField[];
}
export declare type MappingKey = 'model' | 'aggregate' | 'createOne' | 'deleteMany' | 'deleteOne' | 'findMany' | 'findOne' | 'updateMany' | 'updateOne' | 'upsertOne';
export declare type Mapping = {
    [key in MappingKey]: string;
};
export interface BaseFetcherConfig {
    outputTypes: Output[];
    inputTypes: Input[];
    apiKey: string;
    url: string;
}
export interface Schema {
    rootQueryType: 'Query';
    rootMutationType: 'Mutation';
    enums: Enum[];
    inputTypes: Input[];
    outputTypes: Output[];
}
export interface DataModelEnum {
    name: string;
    values: string[];
    dbName: string | null;
}
export interface DataModelFieldDefault {
    name: string;
    returnType: Scalar | string;
    args: [any];
}
export interface DataModelField {
    name: string;
    kind: Kind;
    dbName: string | null;
    isList: boolean;
    isUnique: boolean;
    isId: boolean;
    type: Scalar | string;
    isGenerated: boolean;
    isUpdatedAt: boolean;
    default: DataModelFieldDefault;
}
export interface DataModelModel {
    name: string;
    dbName: string | null;
    isEmbedded: boolean;
    isGenerated: boolean;
    fields: DataModelField[];
    idFields: any[];
}
export interface DataModel {
    enums: DataModelEnum[];
    models: DataModelModel[];
}
export interface DMMF {
    schema: Schema;
    mappings?: Mapping[];
    datamodel?: DataModel;
}
export declare const parseVariables: (variables: any, inputTypes: Input[], fields: InputField[], initial?: boolean) => string;
export declare const getFields: (outputTypes: Output[], outputTypeName: string) => string;
export declare const getFieldsObject: (outputType: Output) => {};
export declare const prepareSelection: (selection: any, outputTypeName: any, outputTypes: Output[]) => any;
export declare const stringifySelection: (selection: any) => string;
export declare const getSelection: (selection: any, outputTypeName: string, outputTypes: Output[]) => string;
export interface FetchOptions {
    operation: string;
    variables: any;
    fields?: any;
    outputTypeName: string;
    operationName: string;
}
export declare class BaseFetcher {
    private outputTypes;
    private inputTypes;
    private apiKey;
    private url;
    constructor(config: BaseFetcherConfig);
    fetch<T>({ operation, variables, fields, outputTypeName, operationName }: FetchOptions): Promise<T>;
}


export declare type OrderByDirection = 'asc' | 'desc';

export interface SelectionArgument<T> {
  select?: T;
}

export type OmittedFields = '$args';

export type MergeTruthyValues<R extends object, S extends object> = {
  [key in keyof S | keyof R]: key extends OmittedFields ? never : key extends false ? never : key extends keyof S ? S[key] extends false ? never : S[key] : key extends keyof R ? R[key] : never;
};

export type CleanupNever<T> = {
  [key in keyof T]: T[key] extends never ? never : key;
}[keyof T];


export type AccountWhereUniqueInput = {
  id?: string
}

export type TransactionWhereUniqueInput = {
  id?: string
}

export type AccountWhereInput = {
  createdAt?: DateTimeFilter
  currency?: Currency
  id?: StringFilter
  name?: StringFilter
  transations?: TransactionFilter
  updatedAt?: DateTimeFilter
  AND?: AccountWhereInput[]
  OR?: AccountWhereInput[]
  NOT?: AccountWhereInput[]
  owner?: UserWhereInput
}

export type DateTimeFilter = {
  equals?: Date
  not?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
}

export type StringFilter = {
  equals?: string
  not?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
}

export type TransactionFilter = {
  every?: TransactionWhereInput
  some?: TransactionWhereInput
  none?: TransactionWhereInput
}

export type TransactionWhereInput = {
  amount?: IntFilter
  createdAt?: DateTimeFilter
  description?: NullableStringFilter
  id?: StringFilter
  updatedAt?: DateTimeFilter
  AND?: TransactionWhereInput[]
  OR?: TransactionWhereInput[]
  NOT?: TransactionWhereInput[]
  account?: AccountWhereInput
}

export type IntFilter = {
  equals?: number
  not?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
}

export type NullableStringFilter = {
  equals?: string
  not?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
}

export type UserWhereInput = {
  createdAt?: DateTimeFilter
  email?: StringFilter
  id?: StringFilter
  name?: StringFilter
  password?: StringFilter
  updatedAt?: DateTimeFilter
  accounts?: AccountFilter
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
}

export type AccountFilter = {
  every?: AccountWhereInput
  some?: AccountWhereInput
  none?: AccountWhereInput
}

export type AccountOrderByInput = {
  createdAt?: OrderByArg
  currency?: OrderByArg
  id?: OrderByArg
  name?: OrderByArg
  updatedAt?: OrderByArg
}

export type TransactionOrderByInput = {
  amount?: OrderByArg
  createdAt?: OrderByArg
  description?: OrderByArg
  id?: OrderByArg
  updatedAt?: OrderByArg
}

export type UserWhereUniqueInput = {
  email?: string
  id?: string
}

export type UserOrderByInput = {
  createdAt?: OrderByArg
  email?: OrderByArg
  id?: OrderByArg
  name?: OrderByArg
  password?: OrderByArg
  updatedAt?: OrderByArg
}

export type AccountCreateInput = {
  createdAt?: Date
  currency: Currency
  id?: string
  name: string
  updatedAt?: Date
  owner: UserCreateOneWithoutAccountsInput
  transations?: TransactionCreateManyWithoutAccountInput
}

export type UserCreateOneWithoutAccountsInput = {
  create?: UserCreateWithoutAccountsInput
  connect?: UserWhereUniqueInput
}

export type UserCreateWithoutAccountsInput = {
  createdAt?: Date
  email: string
  id?: string
  name: string
  password: string
  updatedAt?: Date
}

export type TransactionCreateManyWithoutAccountInput = {
  create?: TransactionCreateWithoutAccountInput[]
  connect?: TransactionWhereUniqueInput[]
}

export type TransactionCreateWithoutAccountInput = {
  amount: number
  createdAt?: Date
  description?: string
  id?: string
  updatedAt?: Date
}

export type AccountUpdateInput = {
  createdAt?: Date
  currency?: Currency
  id?: string
  name?: string
  updatedAt?: Date
  owner?: UserUpdateOneRequiredWithoutAccountsInput
  transations?: TransactionUpdateManyWithoutAccountInput
}

export type UserUpdateOneRequiredWithoutAccountsInput = {
  create?: UserCreateWithoutAccountsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutAccountsDataInput
  upsert?: UserUpsertWithoutAccountsInput
}

export type UserUpdateWithoutAccountsDataInput = {
  createdAt?: Date
  email?: string
  id?: string
  name?: string
  password?: string
  updatedAt?: Date
}

export type UserUpsertWithoutAccountsInput = {
  update: UserUpdateWithoutAccountsDataInput
  create: UserCreateWithoutAccountsInput
}

export type TransactionUpdateManyWithoutAccountInput = {
  create?: TransactionCreateWithoutAccountInput[]
  connect?: TransactionWhereUniqueInput[]
  set?: TransactionWhereUniqueInput[]
  disconnect?: TransactionWhereUniqueInput[]
  delete?: TransactionWhereUniqueInput[]
  update?: TransactionUpdateWithWhereUniqueWithoutAccountInput[]
  updateMany?: TransactionUpdateManyWithWhereNestedInput[]
  deleteMany?: TransactionScalarWhereInput[]
  upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput[]
}

export type TransactionUpdateWithWhereUniqueWithoutAccountInput = {
  where: TransactionWhereUniqueInput
  data: TransactionUpdateWithoutAccountDataInput
}

export type TransactionUpdateWithoutAccountDataInput = {
  amount?: number
  createdAt?: Date
  description?: string
  id?: string
  updatedAt?: Date
}

export type TransactionUpdateManyWithWhereNestedInput = {
  where: TransactionScalarWhereInput
  data: TransactionUpdateManyDataInput
}

export type TransactionScalarWhereInput = {
  amount?: IntFilter
  createdAt?: DateTimeFilter
  description?: NullableStringFilter
  id?: StringFilter
  updatedAt?: DateTimeFilter
  AND?: TransactionScalarWhereInput[]
  OR?: TransactionScalarWhereInput[]
  NOT?: TransactionScalarWhereInput[]
}

export type TransactionUpdateManyDataInput = {
  amount?: number
  createdAt?: Date
  description?: string
  id?: string
  updatedAt?: Date
}

export type TransactionUpsertWithWhereUniqueWithoutAccountInput = {
  where: TransactionWhereUniqueInput
  update: TransactionUpdateWithoutAccountDataInput
  create: TransactionCreateWithoutAccountInput
}

export type AccountUpdateManyMutationInput = {
  createdAt?: Date
  currency?: Currency
  id?: string
  name?: string
  updatedAt?: Date
}

export type TransactionCreateInput = {
  amount: number
  createdAt?: Date
  description?: string
  id?: string
  updatedAt?: Date
  account: AccountCreateOneWithoutTransationsInput
}

export type AccountCreateOneWithoutTransationsInput = {
  create?: AccountCreateWithoutTransationsInput
  connect?: AccountWhereUniqueInput
}

export type AccountCreateWithoutTransationsInput = {
  createdAt?: Date
  currency: Currency
  id?: string
  name: string
  updatedAt?: Date
  owner: UserCreateOneWithoutAccountsInput
}

export type TransactionUpdateInput = {
  amount?: number
  createdAt?: Date
  description?: string
  id?: string
  updatedAt?: Date
  account?: AccountUpdateOneRequiredWithoutTransationsInput
}

export type AccountUpdateOneRequiredWithoutTransationsInput = {
  create?: AccountCreateWithoutTransationsInput
  connect?: AccountWhereUniqueInput
  update?: AccountUpdateWithoutTransationsDataInput
  upsert?: AccountUpsertWithoutTransationsInput
}

export type AccountUpdateWithoutTransationsDataInput = {
  createdAt?: Date
  currency?: Currency
  id?: string
  name?: string
  updatedAt?: Date
  owner?: UserUpdateOneRequiredWithoutAccountsInput
}

export type AccountUpsertWithoutTransationsInput = {
  update: AccountUpdateWithoutTransationsDataInput
  create: AccountCreateWithoutTransationsInput
}

export type TransactionUpdateManyMutationInput = {
  amount?: number
  createdAt?: Date
  description?: string
  id?: string
  updatedAt?: Date
}

export type UserCreateInput = {
  createdAt?: Date
  email: string
  id?: string
  name: string
  password: string
  updatedAt?: Date
  accounts?: AccountCreateManyWithoutOwnerInput
}

export type AccountCreateManyWithoutOwnerInput = {
  create?: AccountCreateWithoutOwnerInput[]
  connect?: AccountWhereUniqueInput[]
}

export type AccountCreateWithoutOwnerInput = {
  createdAt?: Date
  currency: Currency
  id?: string
  name: string
  updatedAt?: Date
  transations?: TransactionCreateManyWithoutAccountInput
}

export type UserUpdateInput = {
  createdAt?: Date
  email?: string
  id?: string
  name?: string
  password?: string
  updatedAt?: Date
  accounts?: AccountUpdateManyWithoutOwnerInput
}

export type AccountUpdateManyWithoutOwnerInput = {
  create?: AccountCreateWithoutOwnerInput[]
  connect?: AccountWhereUniqueInput[]
  set?: AccountWhereUniqueInput[]
  disconnect?: AccountWhereUniqueInput[]
  delete?: AccountWhereUniqueInput[]
  update?: AccountUpdateWithWhereUniqueWithoutOwnerInput[]
  updateMany?: AccountUpdateManyWithWhereNestedInput[]
  deleteMany?: AccountScalarWhereInput[]
  upsert?: AccountUpsertWithWhereUniqueWithoutOwnerInput[]
}

export type AccountUpdateWithWhereUniqueWithoutOwnerInput = {
  where: AccountWhereUniqueInput
  data: AccountUpdateWithoutOwnerDataInput
}

export type AccountUpdateWithoutOwnerDataInput = {
  createdAt?: Date
  currency?: Currency
  id?: string
  name?: string
  updatedAt?: Date
  transations?: TransactionUpdateManyWithoutAccountInput
}

export type AccountUpdateManyWithWhereNestedInput = {
  where: AccountScalarWhereInput
  data: AccountUpdateManyDataInput
}

export type AccountScalarWhereInput = {
  createdAt?: DateTimeFilter
  currency?: Currency
  id?: StringFilter
  name?: StringFilter
  transations?: TransactionFilter
  updatedAt?: DateTimeFilter
  AND?: AccountScalarWhereInput[]
  OR?: AccountScalarWhereInput[]
  NOT?: AccountScalarWhereInput[]
}

export type AccountUpdateManyDataInput = {
  createdAt?: Date
  currency?: Currency
  id?: string
  name?: string
  updatedAt?: Date
}

export type AccountUpsertWithWhereUniqueWithoutOwnerInput = {
  where: AccountWhereUniqueInput
  update: AccountUpdateWithoutOwnerDataInput
  create: AccountCreateWithoutOwnerInput
}

export type UserUpdateManyMutationInput = {
  createdAt?: Date
  email?: string
  id?: string
  name?: string
  password?: string
  updatedAt?: Date
}



export interface DmmfArguments {

}

export interface FindOneAccountArguments<T> extends SelectionArgument<T> {
  where: AccountWhereUniqueInput;
}

export interface FindManyAccountArguments<T> extends SelectionArgument<T> {
  where?: AccountWhereInput;
  orderBy?: AccountOrderByInput;
  skip?: number;
  after?: AccountWhereUniqueInput;
  before?: AccountWhereUniqueInput;
  first?: number;
  last?: number;
}

export interface AggregateAccountArguments {
  where?: AccountWhereInput;
}

export interface FindOneTransactionArguments<T> extends SelectionArgument<T> {
  where: TransactionWhereUniqueInput;
}

export interface FindManyTransactionArguments<T> extends SelectionArgument<T> {
  where?: TransactionWhereInput;
  orderBy?: TransactionOrderByInput;
  skip?: number;
  after?: TransactionWhereUniqueInput;
  before?: TransactionWhereUniqueInput;
  first?: number;
  last?: number;
}

export interface AggregateTransactionArguments {
  where?: TransactionWhereInput;
}

export interface FindOneUserArguments<T> extends SelectionArgument<T> {
  where: UserWhereUniqueInput;
}

export interface FindManyUserArguments<T> extends SelectionArgument<T> {
  where?: UserWhereInput;
  orderBy?: UserOrderByInput;
  skip?: number;
  after?: UserWhereUniqueInput;
  before?: UserWhereUniqueInput;
  first?: number;
  last?: number;
}

export interface AggregateUserArguments {
  where?: UserWhereInput;
}

export interface QueryFetcherConfig extends BaseFetcherConfig {}

export declare class QueryFetcher extends BaseFetcher {
  constructor(config: QueryFetcherConfig);
  dmmf(args?: DmmfArguments): Promise<string>;
  findOneAccount<T extends AccountSelection>(args: FindOneAccountArguments<T>): Promise<AccountSelectPayload<T>>;
  findManyAccount<T extends AccountSelection>(args?: FindManyAccountArguments<T>): Promise<AccountSelectPayload<T>[]>;
  aggregateAccount(args?: AggregateAccountArguments): Promise<number>;
  findOneTransaction<T extends TransactionSelection>(args: FindOneTransactionArguments<T>): Promise<TransactionSelectPayload<T>>;
  findManyTransaction<T extends TransactionSelection>(args?: FindManyTransactionArguments<T>): Promise<TransactionSelectPayload<T>[]>;
  aggregateTransaction(args?: AggregateTransactionArguments): Promise<number>;
  findOneUser<T extends UserSelection>(args: FindOneUserArguments<T>): Promise<UserSelectPayload<T>>;
  findManyUser<T extends UserSelection>(args?: FindManyUserArguments<T>): Promise<UserSelectPayload<T>[]>;
  aggregateUser(args?: AggregateUserArguments): Promise<number>;
}




export interface CreateOneAccountArguments<T> extends SelectionArgument<T> {
  data: AccountCreateInput;
}

export interface UpdateOneAccountArguments<T> extends SelectionArgument<T> {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
}

export interface UpdateManyAccountArguments<T> extends SelectionArgument<T> {
  data: AccountUpdateManyMutationInput;
  where?: AccountWhereInput;
}

export interface DeleteOneAccountArguments<T> extends SelectionArgument<T> {
  where: AccountWhereUniqueInput;
}

export interface DeleteManyAccountArguments<T> extends SelectionArgument<T> {
  where?: AccountWhereInput;
}

export interface CreateOneTransactionArguments<T> extends SelectionArgument<T> {
  data: TransactionCreateInput;
}

export interface UpdateOneTransactionArguments<T> extends SelectionArgument<T> {
  data: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
}

export interface UpdateManyTransactionArguments<T> extends SelectionArgument<T> {
  data: TransactionUpdateManyMutationInput;
  where?: TransactionWhereInput;
}

export interface DeleteOneTransactionArguments<T> extends SelectionArgument<T> {
  where: TransactionWhereUniqueInput;
}

export interface DeleteManyTransactionArguments<T> extends SelectionArgument<T> {
  where?: TransactionWhereInput;
}

export interface CreateOneUserArguments<T> extends SelectionArgument<T> {
  data: UserCreateInput;
}

export interface UpdateOneUserArguments<T> extends SelectionArgument<T> {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface UpdateManyUserArguments<T> extends SelectionArgument<T> {
  data: UserUpdateManyMutationInput;
  where?: UserWhereInput;
}

export interface DeleteOneUserArguments<T> extends SelectionArgument<T> {
  where: UserWhereUniqueInput;
}

export interface DeleteManyUserArguments<T> extends SelectionArgument<T> {
  where?: UserWhereInput;
}

export interface MutationFetcherConfig extends BaseFetcherConfig {}

export declare class MutationFetcher extends BaseFetcher {
  constructor(config: MutationFetcherConfig);
  createOneAccount<T extends AccountSelection>(args: CreateOneAccountArguments<T>): Promise<AccountSelectPayload<T>>;
  updateOneAccount<T extends AccountSelection>(args: UpdateOneAccountArguments<T>): Promise<AccountSelectPayload<T>>;
  updateManyAccount<T extends BatchPayloadSelection>(args: UpdateManyAccountArguments<T>): Promise<BatchPayloadSelectPayload<T>>;
  deleteOneAccount<T extends AccountSelection>(args: DeleteOneAccountArguments<T>): Promise<AccountSelectPayload<T>>;
  deleteManyAccount<T extends BatchPayloadSelection>(args?: DeleteManyAccountArguments<T>): Promise<BatchPayloadSelectPayload<T>>;
  createOneTransaction<T extends TransactionSelection>(args: CreateOneTransactionArguments<T>): Promise<TransactionSelectPayload<T>>;
  updateOneTransaction<T extends TransactionSelection>(args: UpdateOneTransactionArguments<T>): Promise<TransactionSelectPayload<T>>;
  updateManyTransaction<T extends BatchPayloadSelection>(args: UpdateManyTransactionArguments<T>): Promise<BatchPayloadSelectPayload<T>>;
  deleteOneTransaction<T extends TransactionSelection>(args: DeleteOneTransactionArguments<T>): Promise<TransactionSelectPayload<T>>;
  deleteManyTransaction<T extends BatchPayloadSelection>(args?: DeleteManyTransactionArguments<T>): Promise<BatchPayloadSelectPayload<T>>;
  createOneUser<T extends UserSelection>(args: CreateOneUserArguments<T>): Promise<UserSelectPayload<T>>;
  updateOneUser<T extends UserSelection>(args: UpdateOneUserArguments<T>): Promise<UserSelectPayload<T>>;
  updateManyUser<T extends BatchPayloadSelection>(args: UpdateManyUserArguments<T>): Promise<BatchPayloadSelectPayload<T>>;
  deleteOneUser<T extends UserSelection>(args: DeleteOneUserArguments<T>): Promise<UserSelectPayload<T>>;
  deleteManyUser<T extends BatchPayloadSelection>(args?: DeleteManyUserArguments<T>): Promise<BatchPayloadSelectPayload<T>>;
}

export type Query = {
  dmmf: string
  aggregateAccount: number
  aggregateTransaction: number
  aggregateUser: number
}


export type Account = {
  createdAt: Date
  currency: Currency
  id: string
  name: string
  updatedAt: Date
}

export type AccountSelection = {
  createdAt?: boolean;
  currency?: boolean;
  id?: boolean;
  name?: boolean;
  owner?: UserSelection ;
  transations?: TransactionSelection & { $args?: AccountTransationsSelectionArgs };
  updatedAt?: boolean
}
export type AccountScalarKeys = 'createdAt' | 'currency' | 'id' | 'name' | 'updatedAt'

type AccountSelectPayload<T extends AccountSelection | undefined> = T extends undefined ? never : T extends AccountSelection ? {
  [P in CleanupNever<MergeTruthyValues<{}, T>>]: P extends undefined
  ? never
  : P extends AccountScalarKeys
    ? Account[P]
    : P extends 'owner' ? UserSelectPayload<T[P]> 
  :P extends 'transations' ? TransactionSelectPayload<T[P]>[] 
  : never;
} : keyof T extends OmittedFields ? Account : never;

export type AccountTransationsSelectionArgs = {
  skip?: number
  after?: TransactionWhereUniqueInput
  before?: TransactionWhereUniqueInput
  first?: number
  last?: number
}
export type User = {
  createdAt: Date
  email: string
  id: string
  name: string
  password: string
  updatedAt: Date
}

export type UserSelection = {
  createdAt?: boolean;
  email?: boolean;
  id?: boolean;
  name?: boolean;
  password?: boolean;
  updatedAt?: boolean;
  accounts?: AccountSelection & { $args?: UserAccountsSelectionArgs }
}
export type UserScalarKeys = 'createdAt' | 'email' | 'id' | 'name' | 'password' | 'updatedAt'

type UserSelectPayload<T extends UserSelection | undefined> = T extends undefined ? never : T extends UserSelection ? {
  [P in CleanupNever<MergeTruthyValues<{}, T>>]: P extends undefined
  ? never
  : P extends UserScalarKeys
    ? User[P]
    : P extends 'accounts' ? AccountSelectPayload<T[P]>[] 
  : never;
} : keyof T extends OmittedFields ? User : never;

export type UserAccountsSelectionArgs = {
  skip?: number
  after?: AccountWhereUniqueInput
  before?: AccountWhereUniqueInput
  first?: number
  last?: number
}
export type Transaction = {
  amount: number
  createdAt: Date
  description?: string
  id: string
  updatedAt: Date
}

export type TransactionSelection = {
  account?: AccountSelection ;
  amount?: boolean;
  createdAt?: boolean;
  description?: boolean;
  id?: boolean;
  updatedAt?: boolean
}
export type TransactionScalarKeys = 'amount' | 'createdAt' | 'description' | 'id' | 'updatedAt'

type TransactionSelectPayload<T extends TransactionSelection | undefined> = T extends undefined ? never : T extends TransactionSelection ? {
  [P in CleanupNever<MergeTruthyValues<{}, T>>]: P extends undefined
  ? never
  : P extends TransactionScalarKeys
    ? Transaction[P]
    : P extends 'account' ? AccountSelectPayload<T[P]> 
  : never;
} : keyof T extends OmittedFields ? Transaction : never;


export type Mutation = {

}


export type BatchPayload = {
  count: number
}

export type BatchPayloadSelection = {
  count?: boolean
}
export type BatchPayloadScalarKeys = 'count'

type BatchPayloadSelectPayload<T extends BatchPayloadSelection | undefined> = T extends undefined ? never : T extends BatchPayloadSelection ? {
  [P in CleanupNever<MergeTruthyValues<{}, T>>]: P extends undefined
  ? never
  : P extends BatchPayloadScalarKeys
    ? BatchPayload[P]
    :  never;
} : keyof T extends OmittedFields ? BatchPayload : never;


export type Currency = 'CNY' | 'EUR' | 'RUB' | 'USD'

export type OrderByArg = 'asc' | 'desc'

interface ClientConfig {
  url: string;
  apiKey: string;
}

export default class Client {
  private url;
  private apiKey;
  dmmf: DMMF;
  query: QueryFetcher;
  mutation: MutationFetcher;
  constructor(config: ClientConfig);
}
