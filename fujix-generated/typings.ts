export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Int'],
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>,
  not?: Maybe<Scalars['Boolean']>,
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>,
  not?: Maybe<Scalars['DateTime']>,
  in?: Maybe<Array<Scalars['DateTime']>>,
  notIn?: Maybe<Array<Scalars['DateTime']>>,
  lt?: Maybe<Scalars['DateTime']>,
  lte?: Maybe<Scalars['DateTime']>,
  gt?: Maybe<Scalars['DateTime']>,
  gte?: Maybe<Scalars['DateTime']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createOneUser: User,
  updateOneUser?: Maybe<User>,
  updateManyUser: BatchPayload,
  deleteOneUser?: Maybe<User>,
  deleteManyUser: BatchPayload,
  createOnePost: Post,
  updateOnePost?: Maybe<Post>,
  updateManyPost: BatchPayload,
  deleteOnePost?: Maybe<Post>,
  deleteManyPost: BatchPayload,
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput,
  where: PostWhereUniqueInput
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput,
  where?: Maybe<PostWhereInput>
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Post = {
   __typename?: 'Post',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  published: Scalars['Boolean'],
  updatedAt: Scalars['DateTime'],
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  author: User,
};

export type PostCreateInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  author: UserCreateOneWithoutAuthorInput,
};

export type PostCreateManyWithoutPostsInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>,
  connect?: Maybe<Array<PostWhereUniqueInput>>,
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
};

export type PostFilter = {
  every?: Maybe<PostWhereInput>,
  some?: Maybe<PostWhereInput>,
  none?: Maybe<PostWhereInput>,
};

export type PostOrderByInput = {
  id?: Maybe<OrderByArg>,
  createdAt?: Maybe<OrderByArg>,
  published?: Maybe<OrderByArg>,
  updatedAt?: Maybe<OrderByArg>,
  title?: Maybe<OrderByArg>,
  content?: Maybe<OrderByArg>,
};

export type PostScalarWhereInput = {
  id?: Maybe<StringFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  published?: Maybe<BooleanFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  title?: Maybe<StringFilter>,
  content?: Maybe<NullableStringFilter>,
  AND?: Maybe<Array<PostScalarWhereInput>>,
  OR?: Maybe<Array<PostScalarWhereInput>>,
  NOT?: Maybe<Array<PostScalarWhereInput>>,
};

export type PostUpdateInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>,
};

export type PostUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
};

export type PostUpdateManyMutationInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>,
  connect?: Maybe<Array<PostWhereUniqueInput>>,
  set?: Maybe<Array<PostWhereUniqueInput>>,
  disconnect?: Maybe<Array<PostWhereUniqueInput>>,
  delete?: Maybe<Array<PostWhereUniqueInput>>,
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>,
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PostScalarWhereInput>>,
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>,
};

export type PostUpdateManyWithWhereNestedInput = {
  where: PostScalarWhereInput,
  data: PostUpdateManyDataInput,
};

export type PostUpdateWithoutAuthorDataInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput,
  data: PostUpdateWithoutAuthorDataInput,
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput,
  update: PostUpdateWithoutAuthorDataInput,
  create: PostCreateWithoutAuthorInput,
};

export type PostWhereInput = {
  id?: Maybe<StringFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  published?: Maybe<BooleanFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  title?: Maybe<StringFilter>,
  content?: Maybe<NullableStringFilter>,
  AND?: Maybe<Array<PostWhereInput>>,
  OR?: Maybe<Array<PostWhereInput>>,
  NOT?: Maybe<Array<PostWhereInput>>,
  author?: Maybe<UserWhereInput>,
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Query = {
   __typename?: 'Query',
  _getPhotonTypings: Scalars['String'],
  dmmf: Scalars['String'],
  findOneUser?: Maybe<User>,
  findManyUser: Array<User>,
  aggregateUser: Scalars['Int'],
  findOnePost?: Maybe<Post>,
  findManyPost: Array<Post>,
  aggregatePost: Scalars['Int'],
};


export type QueryFindOneUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryFindManyUserArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>
};


export type QueryFindOnePostArgs = {
  where: PostWhereUniqueInput
};


export type QueryFindManyPostArgs = {
  where?: Maybe<PostWhereInput>,
  orderBy?: Maybe<PostOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAggregatePostArgs = {
  where?: Maybe<PostWhereInput>
};

export enum Role {
  Author = 'AUTHOR',
  Admin = 'ADMIN'
}

export type StringFilter = {
  equals?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  posts: Array<Post>,
  role: Role,
};


export type UserPostsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>,
  before?: Maybe<Scalars['ID']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  role: Role,
  posts?: Maybe<PostCreateManyWithoutPostsInput>,
};

export type UserCreateOneWithoutAuthorInput = {
  create?: Maybe<UserCreateWithoutPostsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  role: Role,
};

export type UserOrderByInput = {
  id?: Maybe<OrderByArg>,
  createdAt?: Maybe<OrderByArg>,
  updatedAt?: Maybe<OrderByArg>,
  email?: Maybe<OrderByArg>,
  name?: Maybe<OrderByArg>,
  role?: Maybe<OrderByArg>,
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  role?: Maybe<Role>,
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>,
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  role?: Maybe<Role>,
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutPostsDataInput>,
  upsert?: Maybe<UserUpsertWithoutPostsInput>,
};

export type UserUpdateWithoutPostsDataInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  role?: Maybe<Role>,
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsDataInput,
  create: UserCreateWithoutPostsInput,
};

export type UserWhereInput = {
  id?: Maybe<StringFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  updatedAt?: Maybe<DateTimeFilter>,
  email?: Maybe<StringFilter>,
  name?: Maybe<NullableStringFilter>,
  posts?: Maybe<PostFilter>,
  role?: Maybe<Role>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
};
