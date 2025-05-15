
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>
/**
 * Model ProdcutImgs
 * 
 */
export type ProdcutImgs = $Result.DefaultSelection<Prisma.$ProdcutImgsPayload>
/**
 * Model ProductCategories
 * 
 */
export type ProductCategories = $Result.DefaultSelection<Prisma.$ProductCategoriesPayload>
/**
 * Model ProductReview
 * 
 */
export type ProductReview = $Result.DefaultSelection<Prisma.$ProductReviewPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model ProductVariants
 * 
 */
export type ProductVariants = $Result.DefaultSelection<Prisma.$ProductVariantsPayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model ShipmentProvider
 * 
 */
export type ShipmentProvider = $Result.DefaultSelection<Prisma.$ShipmentProviderPayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model ShopReview
 * 
 */
export type ShopReview = $Result.DefaultSelection<Prisma.$ShopReviewPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prodcutImgs`: Exposes CRUD operations for the **ProdcutImgs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProdcutImgs
    * const prodcutImgs = await prisma.prodcutImgs.findMany()
    * ```
    */
  get prodcutImgs(): Prisma.ProdcutImgsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCategories`: Exposes CRUD operations for the **ProductCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategories.findMany()
    * ```
    */
  get productCategories(): Prisma.ProductCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productReview`: Exposes CRUD operations for the **ProductReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductReviews
    * const productReviews = await prisma.productReview.findMany()
    * ```
    */
  get productReview(): Prisma.ProductReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariants`: Exposes CRUD operations for the **ProductVariants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariants.findMany()
    * ```
    */
  get productVariants(): Prisma.ProductVariantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentProvider`: Exposes CRUD operations for the **ShipmentProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentProviders
    * const shipmentProviders = await prisma.shipmentProvider.findMany()
    * ```
    */
  get shipmentProvider(): Prisma.ShipmentProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopReview`: Exposes CRUD operations for the **ShopReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopReviews
    * const shopReviews = await prisma.shopReview.findMany()
    * ```
    */
  get shopReview(): Prisma.ShopReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Address: 'Address',
    Cart: 'Cart',
    Categories: 'Categories',
    PaymentMethod: 'PaymentMethod',
    ProdcutImgs: 'ProdcutImgs',
    ProductCategories: 'ProductCategories',
    ProductReview: 'ProductReview',
    Products: 'Products',
    ProductVariants: 'ProductVariants',
    Shipment: 'Shipment',
    ShipmentProvider: 'ShipmentProvider',
    Shop: 'Shop',
    ShopReview: 'ShopReview',
    Transaction: 'Transaction',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "address" | "cart" | "categories" | "paymentMethod" | "prodcutImgs" | "productCategories" | "productReview" | "products" | "productVariants" | "shipment" | "shipmentProvider" | "shop" | "shopReview" | "transaction" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
      ProdcutImgs: {
        payload: Prisma.$ProdcutImgsPayload<ExtArgs>
        fields: Prisma.ProdcutImgsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdcutImgsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdcutImgsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdcutImgsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdcutImgsPayload>
          }
          findFirst: {
            args: Prisma.ProdcutImgsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdcutImgsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdcutImgsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdcutImgsPayload>
          }
          findMany: {
            args: Prisma.ProdcutImgsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdcutImgsPayload>[]
          }
          create: {
            args: Prisma.ProdcutImgsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdcutImgsPayload>
          }
          createMany: {
            args: Prisma.ProdcutImgsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProdcutImgsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdcutImgsPayload>
          }
          update: {
            args: Prisma.ProdcutImgsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdcutImgsPayload>
          }
          deleteMany: {
            args: Prisma.ProdcutImgsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdcutImgsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProdcutImgsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdcutImgsPayload>
          }
          aggregate: {
            args: Prisma.ProdcutImgsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdcutImgs>
          }
          groupBy: {
            args: Prisma.ProdcutImgsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdcutImgsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdcutImgsCountArgs<ExtArgs>
            result: $Utils.Optional<ProdcutImgsCountAggregateOutputType> | number
          }
        }
      }
      ProductCategories: {
        payload: Prisma.$ProductCategoriesPayload<ExtArgs>
        fields: Prisma.ProductCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          findMany: {
            args: Prisma.ProductCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>[]
          }
          create: {
            args: Prisma.ProductCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          createMany: {
            args: Prisma.ProductCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          update: {
            args: Prisma.ProductCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCategoriesPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCategories>
          }
          groupBy: {
            args: Prisma.ProductCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCategoriesCountAggregateOutputType> | number
          }
        }
      }
      ProductReview: {
        payload: Prisma.$ProductReviewPayload<ExtArgs>
        fields: Prisma.ProductReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          findFirst: {
            args: Prisma.ProductReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          findMany: {
            args: Prisma.ProductReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>[]
          }
          create: {
            args: Prisma.ProductReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          createMany: {
            args: Prisma.ProductReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          update: {
            args: Prisma.ProductReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          deleteMany: {
            args: Prisma.ProductReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewPayload>
          }
          aggregate: {
            args: Prisma.ProductReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductReview>
          }
          groupBy: {
            args: Prisma.ProductReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ProductReviewCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      ProductVariants: {
        payload: Prisma.$ProductVariantsPayload<ExtArgs>
        fields: Prisma.ProductVariantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          findMany: {
            args: Prisma.ProductVariantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>[]
          }
          create: {
            args: Prisma.ProductVariantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          createMany: {
            args: Prisma.ProductVariantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductVariantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          update: {
            args: Prisma.ProductVariantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductVariantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariants>
          }
          groupBy: {
            args: Prisma.ProductVariantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantsCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      ShipmentProvider: {
        payload: Prisma.$ShipmentProviderPayload<ExtArgs>
        fields: Prisma.ShipmentProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProviderPayload>
          }
          findFirst: {
            args: Prisma.ShipmentProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProviderPayload>
          }
          findMany: {
            args: Prisma.ShipmentProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProviderPayload>[]
          }
          create: {
            args: Prisma.ShipmentProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProviderPayload>
          }
          createMany: {
            args: Prisma.ShipmentProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShipmentProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProviderPayload>
          }
          update: {
            args: Prisma.ShipmentProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProviderPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShipmentProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProviderPayload>
          }
          aggregate: {
            args: Prisma.ShipmentProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentProvider>
          }
          groupBy: {
            args: Prisma.ShipmentProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentProviderCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      ShopReview: {
        payload: Prisma.$ShopReviewPayload<ExtArgs>
        fields: Prisma.ShopReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopReviewPayload>
          }
          findFirst: {
            args: Prisma.ShopReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopReviewPayload>
          }
          findMany: {
            args: Prisma.ShopReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopReviewPayload>[]
          }
          create: {
            args: Prisma.ShopReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopReviewPayload>
          }
          createMany: {
            args: Prisma.ShopReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopReviewPayload>
          }
          update: {
            args: Prisma.ShopReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopReviewPayload>
          }
          deleteMany: {
            args: Prisma.ShopReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopReviewPayload>
          }
          aggregate: {
            args: Prisma.ShopReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopReview>
          }
          groupBy: {
            args: Prisma.ShopReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ShopReviewCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    address?: AddressOmit
    cart?: CartOmit
    categories?: CategoriesOmit
    paymentMethod?: PaymentMethodOmit
    prodcutImgs?: ProdcutImgsOmit
    productCategories?: ProductCategoriesOmit
    productReview?: ProductReviewOmit
    products?: ProductsOmit
    productVariants?: ProductVariantsOmit
    shipment?: ShipmentOmit
    shipmentProvider?: ShipmentProviderOmit
    shop?: ShopOmit
    shopReview?: ShopReviewOmit
    transaction?: TransactionOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    Transaction: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | CartCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    ProductCategories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCategories?: boolean | CategoriesCountOutputTypeCountProductCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoriesWhereInput
  }


  /**
   * Count Type PaymentMethodCountOutputType
   */

  export type PaymentMethodCountOutputType = {
    Transaction: number
  }

  export type PaymentMethodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | PaymentMethodCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethodCountOutputType
     */
    select?: PaymentMethodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentMethodCountOutputType without action
   */
  export type PaymentMethodCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    Cart: number
    ProdcutImgs: number
    ProductCategories: number
    ProductVariants: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cart?: boolean | ProductsCountOutputTypeCountCartArgs
    ProdcutImgs?: boolean | ProductsCountOutputTypeCountProdcutImgsArgs
    ProductCategories?: boolean | ProductsCountOutputTypeCountProductCategoriesArgs
    ProductVariants?: boolean | ProductsCountOutputTypeCountProductVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProdcutImgsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdcutImgsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProductCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoriesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProductVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantsWhereInput
  }


  /**
   * Count Type ShipmentProviderCountOutputType
   */

  export type ShipmentProviderCountOutputType = {
    Transaction: number
  }

  export type ShipmentProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | ShipmentProviderCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * ShipmentProviderCountOutputType without action
   */
  export type ShipmentProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProviderCountOutputType
     */
    select?: ShipmentProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentProviderCountOutputType without action
   */
  export type ShipmentProviderCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    Products: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ShopCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    ProductReview: number
    Shipment: number
    ShopReview: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductReview?: boolean | TransactionCountOutputTypeCountProductReviewArgs
    Shipment?: boolean | TransactionCountOutputTypeCountShipmentArgs
    ShopReview?: boolean | TransactionCountOutputTypeCountShopReviewArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountProductReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReviewWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountShipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountShopReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopReviewWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Address: number
    Cart: number
    Shop: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Address?: boolean | UsersCountOutputTypeCountAddressArgs
    Cart?: boolean | UsersCountOutputTypeCountCartArgs
    Shop?: boolean | UsersCountOutputTypeCountShopArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    address: string | null
    addNote: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    address: string | null
    addNote: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    userId: number
    address: number
    addNote: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    addNote?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    addNote?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    userId?: true
    address?: true
    addNote?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    userId: string | null
    address: string | null
    addNote: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    address?: boolean
    addNote?: boolean
    created_at?: boolean
    updated_at?: boolean
    Users?: boolean | Address$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>



  export type AddressSelectScalar = {
    id?: boolean
    userId?: boolean
    address?: boolean
    addNote?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "address" | "addNote" | "created_at" | "updated_at", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Address$UsersArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      address: string | null
      addNote: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Address$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Address$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly userId: FieldRef<"Address", 'String'>
    readonly address: FieldRef<"Address", 'String'>
    readonly addNote: FieldRef<"Address", 'String'>
    readonly created_at: FieldRef<"Address", 'DateTime'>
    readonly updated_at: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.Users
   */
  export type Address$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    quantity: number | null
  }

  export type CartSumAggregateOutputType = {
    quantity: number | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    quantity: number | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    quantity: number | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    quantity: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    quantity?: true
  }

  export type CartSumAggregateInputType = {
    quantity?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    quantity?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    quantity?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    quantity?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: string
    userId: string | null
    productId: string | null
    quantity: number | null
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    quantity?: boolean
    Products?: boolean | Cart$ProductsArgs<ExtArgs>
    Users?: boolean | Cart$UsersArgs<ExtArgs>
    Transaction?: boolean | Cart$TransactionArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>



  export type CartSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    quantity?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "quantity", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | Cart$ProductsArgs<ExtArgs>
    Users?: boolean | Cart$UsersArgs<ExtArgs>
    Transaction?: boolean | Cart$TransactionArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs> | null
      Users: Prisma.$UsersPayload<ExtArgs> | null
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      productId: string | null
      quantity: number | null
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends Cart$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$ProductsArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Users<T extends Cart$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Cart$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Transaction<T extends Cart$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Cart$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'String'>
    readonly userId: FieldRef<"Cart", 'String'>
    readonly productId: FieldRef<"Cart", 'String'>
    readonly quantity: FieldRef<"Cart", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.Products
   */
  export type Cart$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
  }

  /**
   * Cart.Users
   */
  export type Cart$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Cart.Transaction
   */
  export type Cart$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    categoryName: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    categoryName: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    categoryName: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    categoryName?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    categoryName?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    categoryName?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    categoryName: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    created_at?: boolean
    updated_at?: boolean
    ProductCategories?: boolean | Categories$ProductCategoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type CategoriesSelectScalar = {
    id?: boolean
    categoryName?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryName" | "created_at" | "updated_at", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCategories?: boolean | Categories$ProductCategoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      ProductCategories: Prisma.$ProductCategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryName: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductCategories<T extends Categories$ProductCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Categories$ProductCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'String'>
    readonly categoryName: FieldRef<"Categories", 'String'>
    readonly created_at: FieldRef<"Categories", 'DateTime'>
    readonly updated_at: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.ProductCategories
   */
  export type Categories$ProductCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    where?: ProductCategoriesWhereInput
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[]
    cursor?: ProductCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCategoriesScalarFieldEnum | ProductCategoriesScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: string | null
    paymentName: string | null
    description: string | null
    img: string | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: string | null
    paymentName: string | null
    description: string | null
    img: string | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    paymentName: number
    description: number
    img: number
    _all: number
  }


  export type PaymentMethodMinAggregateInputType = {
    id?: true
    paymentName?: true
    description?: true
    img?: true
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true
    paymentName?: true
    description?: true
    img?: true
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true
    paymentName?: true
    description?: true
    img?: true
    _all?: true
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[]
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentMethodCountAggregateInputType | true
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: string
    paymentName: string | null
    description: string | null
    img: string | null
    _count: PaymentMethodCountAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentName?: boolean
    description?: boolean
    img?: boolean
    Transaction?: boolean | PaymentMethod$TransactionArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMethod"]>



  export type PaymentMethodSelectScalar = {
    id?: boolean
    paymentName?: boolean
    description?: boolean
    img?: boolean
  }

  export type PaymentMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentName" | "description" | "img", ExtArgs["result"]["paymentMethod"]>
  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | PaymentMethod$TransactionArgs<ExtArgs>
    _count?: boolean | PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentName: string | null
      description: string | null
      img: string | null
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transaction<T extends PaymentMethod$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentMethod model
   */
  interface PaymentMethodFieldRefs {
    readonly id: FieldRef<"PaymentMethod", 'String'>
    readonly paymentName: FieldRef<"PaymentMethod", 'String'>
    readonly description: FieldRef<"PaymentMethod", 'String'>
    readonly img: FieldRef<"PaymentMethod", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[]
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number
  }

  /**
   * PaymentMethod.Transaction
   */
  export type PaymentMethod$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Model ProdcutImgs
   */

  export type AggregateProdcutImgs = {
    _count: ProdcutImgsCountAggregateOutputType | null
    _min: ProdcutImgsMinAggregateOutputType | null
    _max: ProdcutImgsMaxAggregateOutputType | null
  }

  export type ProdcutImgsMinAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProdcutImgsMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProdcutImgsCountAggregateOutputType = {
    id: number
    productId: number
    url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProdcutImgsMinAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type ProdcutImgsMaxAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type ProdcutImgsCountAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProdcutImgsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdcutImgs to aggregate.
     */
    where?: ProdcutImgsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdcutImgs to fetch.
     */
    orderBy?: ProdcutImgsOrderByWithRelationInput | ProdcutImgsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdcutImgsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdcutImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdcutImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProdcutImgs
    **/
    _count?: true | ProdcutImgsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdcutImgsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdcutImgsMaxAggregateInputType
  }

  export type GetProdcutImgsAggregateType<T extends ProdcutImgsAggregateArgs> = {
        [P in keyof T & keyof AggregateProdcutImgs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdcutImgs[P]>
      : GetScalarType<T[P], AggregateProdcutImgs[P]>
  }




  export type ProdcutImgsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdcutImgsWhereInput
    orderBy?: ProdcutImgsOrderByWithAggregationInput | ProdcutImgsOrderByWithAggregationInput[]
    by: ProdcutImgsScalarFieldEnum[] | ProdcutImgsScalarFieldEnum
    having?: ProdcutImgsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdcutImgsCountAggregateInputType | true
    _min?: ProdcutImgsMinAggregateInputType
    _max?: ProdcutImgsMaxAggregateInputType
  }

  export type ProdcutImgsGroupByOutputType = {
    id: string
    productId: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProdcutImgsCountAggregateOutputType | null
    _min: ProdcutImgsMinAggregateOutputType | null
    _max: ProdcutImgsMaxAggregateOutputType | null
  }

  type GetProdcutImgsGroupByPayload<T extends ProdcutImgsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdcutImgsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdcutImgsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdcutImgsGroupByOutputType[P]>
            : GetScalarType<T[P], ProdcutImgsGroupByOutputType[P]>
        }
      >
    >


  export type ProdcutImgsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
    Products?: boolean | ProdcutImgs$ProductsArgs<ExtArgs>
  }, ExtArgs["result"]["prodcutImgs"]>



  export type ProdcutImgsSelectScalar = {
    id?: boolean
    productId?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProdcutImgsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "url" | "created_at" | "updated_at", ExtArgs["result"]["prodcutImgs"]>
  export type ProdcutImgsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ProdcutImgs$ProductsArgs<ExtArgs>
  }

  export type $ProdcutImgsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProdcutImgs"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string | null
      url: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["prodcutImgs"]>
    composites: {}
  }

  type ProdcutImgsGetPayload<S extends boolean | null | undefined | ProdcutImgsDefaultArgs> = $Result.GetResult<Prisma.$ProdcutImgsPayload, S>

  type ProdcutImgsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdcutImgsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdcutImgsCountAggregateInputType | true
    }

  export interface ProdcutImgsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProdcutImgs'], meta: { name: 'ProdcutImgs' } }
    /**
     * Find zero or one ProdcutImgs that matches the filter.
     * @param {ProdcutImgsFindUniqueArgs} args - Arguments to find a ProdcutImgs
     * @example
     * // Get one ProdcutImgs
     * const prodcutImgs = await prisma.prodcutImgs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdcutImgsFindUniqueArgs>(args: SelectSubset<T, ProdcutImgsFindUniqueArgs<ExtArgs>>): Prisma__ProdcutImgsClient<$Result.GetResult<Prisma.$ProdcutImgsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProdcutImgs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdcutImgsFindUniqueOrThrowArgs} args - Arguments to find a ProdcutImgs
     * @example
     * // Get one ProdcutImgs
     * const prodcutImgs = await prisma.prodcutImgs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdcutImgsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdcutImgsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdcutImgsClient<$Result.GetResult<Prisma.$ProdcutImgsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdcutImgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdcutImgsFindFirstArgs} args - Arguments to find a ProdcutImgs
     * @example
     * // Get one ProdcutImgs
     * const prodcutImgs = await prisma.prodcutImgs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdcutImgsFindFirstArgs>(args?: SelectSubset<T, ProdcutImgsFindFirstArgs<ExtArgs>>): Prisma__ProdcutImgsClient<$Result.GetResult<Prisma.$ProdcutImgsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdcutImgs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdcutImgsFindFirstOrThrowArgs} args - Arguments to find a ProdcutImgs
     * @example
     * // Get one ProdcutImgs
     * const prodcutImgs = await prisma.prodcutImgs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdcutImgsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdcutImgsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdcutImgsClient<$Result.GetResult<Prisma.$ProdcutImgsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProdcutImgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdcutImgsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProdcutImgs
     * const prodcutImgs = await prisma.prodcutImgs.findMany()
     * 
     * // Get first 10 ProdcutImgs
     * const prodcutImgs = await prisma.prodcutImgs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prodcutImgsWithIdOnly = await prisma.prodcutImgs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdcutImgsFindManyArgs>(args?: SelectSubset<T, ProdcutImgsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdcutImgsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProdcutImgs.
     * @param {ProdcutImgsCreateArgs} args - Arguments to create a ProdcutImgs.
     * @example
     * // Create one ProdcutImgs
     * const ProdcutImgs = await prisma.prodcutImgs.create({
     *   data: {
     *     // ... data to create a ProdcutImgs
     *   }
     * })
     * 
     */
    create<T extends ProdcutImgsCreateArgs>(args: SelectSubset<T, ProdcutImgsCreateArgs<ExtArgs>>): Prisma__ProdcutImgsClient<$Result.GetResult<Prisma.$ProdcutImgsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProdcutImgs.
     * @param {ProdcutImgsCreateManyArgs} args - Arguments to create many ProdcutImgs.
     * @example
     * // Create many ProdcutImgs
     * const prodcutImgs = await prisma.prodcutImgs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdcutImgsCreateManyArgs>(args?: SelectSubset<T, ProdcutImgsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProdcutImgs.
     * @param {ProdcutImgsDeleteArgs} args - Arguments to delete one ProdcutImgs.
     * @example
     * // Delete one ProdcutImgs
     * const ProdcutImgs = await prisma.prodcutImgs.delete({
     *   where: {
     *     // ... filter to delete one ProdcutImgs
     *   }
     * })
     * 
     */
    delete<T extends ProdcutImgsDeleteArgs>(args: SelectSubset<T, ProdcutImgsDeleteArgs<ExtArgs>>): Prisma__ProdcutImgsClient<$Result.GetResult<Prisma.$ProdcutImgsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProdcutImgs.
     * @param {ProdcutImgsUpdateArgs} args - Arguments to update one ProdcutImgs.
     * @example
     * // Update one ProdcutImgs
     * const prodcutImgs = await prisma.prodcutImgs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdcutImgsUpdateArgs>(args: SelectSubset<T, ProdcutImgsUpdateArgs<ExtArgs>>): Prisma__ProdcutImgsClient<$Result.GetResult<Prisma.$ProdcutImgsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProdcutImgs.
     * @param {ProdcutImgsDeleteManyArgs} args - Arguments to filter ProdcutImgs to delete.
     * @example
     * // Delete a few ProdcutImgs
     * const { count } = await prisma.prodcutImgs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdcutImgsDeleteManyArgs>(args?: SelectSubset<T, ProdcutImgsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdcutImgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdcutImgsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProdcutImgs
     * const prodcutImgs = await prisma.prodcutImgs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdcutImgsUpdateManyArgs>(args: SelectSubset<T, ProdcutImgsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProdcutImgs.
     * @param {ProdcutImgsUpsertArgs} args - Arguments to update or create a ProdcutImgs.
     * @example
     * // Update or create a ProdcutImgs
     * const prodcutImgs = await prisma.prodcutImgs.upsert({
     *   create: {
     *     // ... data to create a ProdcutImgs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProdcutImgs we want to update
     *   }
     * })
     */
    upsert<T extends ProdcutImgsUpsertArgs>(args: SelectSubset<T, ProdcutImgsUpsertArgs<ExtArgs>>): Prisma__ProdcutImgsClient<$Result.GetResult<Prisma.$ProdcutImgsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProdcutImgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdcutImgsCountArgs} args - Arguments to filter ProdcutImgs to count.
     * @example
     * // Count the number of ProdcutImgs
     * const count = await prisma.prodcutImgs.count({
     *   where: {
     *     // ... the filter for the ProdcutImgs we want to count
     *   }
     * })
    **/
    count<T extends ProdcutImgsCountArgs>(
      args?: Subset<T, ProdcutImgsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdcutImgsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProdcutImgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdcutImgsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdcutImgsAggregateArgs>(args: Subset<T, ProdcutImgsAggregateArgs>): Prisma.PrismaPromise<GetProdcutImgsAggregateType<T>>

    /**
     * Group by ProdcutImgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdcutImgsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdcutImgsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdcutImgsGroupByArgs['orderBy'] }
        : { orderBy?: ProdcutImgsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdcutImgsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdcutImgsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProdcutImgs model
   */
  readonly fields: ProdcutImgsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProdcutImgs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdcutImgsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends ProdcutImgs$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, ProdcutImgs$ProductsArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProdcutImgs model
   */
  interface ProdcutImgsFieldRefs {
    readonly id: FieldRef<"ProdcutImgs", 'String'>
    readonly productId: FieldRef<"ProdcutImgs", 'String'>
    readonly url: FieldRef<"ProdcutImgs", 'String'>
    readonly created_at: FieldRef<"ProdcutImgs", 'DateTime'>
    readonly updated_at: FieldRef<"ProdcutImgs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProdcutImgs findUnique
   */
  export type ProdcutImgsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdcutImgs
     */
    select?: ProdcutImgsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdcutImgs
     */
    omit?: ProdcutImgsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdcutImgsInclude<ExtArgs> | null
    /**
     * Filter, which ProdcutImgs to fetch.
     */
    where: ProdcutImgsWhereUniqueInput
  }

  /**
   * ProdcutImgs findUniqueOrThrow
   */
  export type ProdcutImgsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdcutImgs
     */
    select?: ProdcutImgsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdcutImgs
     */
    omit?: ProdcutImgsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdcutImgsInclude<ExtArgs> | null
    /**
     * Filter, which ProdcutImgs to fetch.
     */
    where: ProdcutImgsWhereUniqueInput
  }

  /**
   * ProdcutImgs findFirst
   */
  export type ProdcutImgsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdcutImgs
     */
    select?: ProdcutImgsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdcutImgs
     */
    omit?: ProdcutImgsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdcutImgsInclude<ExtArgs> | null
    /**
     * Filter, which ProdcutImgs to fetch.
     */
    where?: ProdcutImgsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdcutImgs to fetch.
     */
    orderBy?: ProdcutImgsOrderByWithRelationInput | ProdcutImgsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdcutImgs.
     */
    cursor?: ProdcutImgsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdcutImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdcutImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdcutImgs.
     */
    distinct?: ProdcutImgsScalarFieldEnum | ProdcutImgsScalarFieldEnum[]
  }

  /**
   * ProdcutImgs findFirstOrThrow
   */
  export type ProdcutImgsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdcutImgs
     */
    select?: ProdcutImgsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdcutImgs
     */
    omit?: ProdcutImgsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdcutImgsInclude<ExtArgs> | null
    /**
     * Filter, which ProdcutImgs to fetch.
     */
    where?: ProdcutImgsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdcutImgs to fetch.
     */
    orderBy?: ProdcutImgsOrderByWithRelationInput | ProdcutImgsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdcutImgs.
     */
    cursor?: ProdcutImgsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdcutImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdcutImgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdcutImgs.
     */
    distinct?: ProdcutImgsScalarFieldEnum | ProdcutImgsScalarFieldEnum[]
  }

  /**
   * ProdcutImgs findMany
   */
  export type ProdcutImgsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdcutImgs
     */
    select?: ProdcutImgsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdcutImgs
     */
    omit?: ProdcutImgsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdcutImgsInclude<ExtArgs> | null
    /**
     * Filter, which ProdcutImgs to fetch.
     */
    where?: ProdcutImgsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdcutImgs to fetch.
     */
    orderBy?: ProdcutImgsOrderByWithRelationInput | ProdcutImgsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProdcutImgs.
     */
    cursor?: ProdcutImgsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdcutImgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdcutImgs.
     */
    skip?: number
    distinct?: ProdcutImgsScalarFieldEnum | ProdcutImgsScalarFieldEnum[]
  }

  /**
   * ProdcutImgs create
   */
  export type ProdcutImgsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdcutImgs
     */
    select?: ProdcutImgsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdcutImgs
     */
    omit?: ProdcutImgsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdcutImgsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProdcutImgs.
     */
    data: XOR<ProdcutImgsCreateInput, ProdcutImgsUncheckedCreateInput>
  }

  /**
   * ProdcutImgs createMany
   */
  export type ProdcutImgsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProdcutImgs.
     */
    data: ProdcutImgsCreateManyInput | ProdcutImgsCreateManyInput[]
  }

  /**
   * ProdcutImgs update
   */
  export type ProdcutImgsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdcutImgs
     */
    select?: ProdcutImgsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdcutImgs
     */
    omit?: ProdcutImgsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdcutImgsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProdcutImgs.
     */
    data: XOR<ProdcutImgsUpdateInput, ProdcutImgsUncheckedUpdateInput>
    /**
     * Choose, which ProdcutImgs to update.
     */
    where: ProdcutImgsWhereUniqueInput
  }

  /**
   * ProdcutImgs updateMany
   */
  export type ProdcutImgsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProdcutImgs.
     */
    data: XOR<ProdcutImgsUpdateManyMutationInput, ProdcutImgsUncheckedUpdateManyInput>
    /**
     * Filter which ProdcutImgs to update
     */
    where?: ProdcutImgsWhereInput
    /**
     * Limit how many ProdcutImgs to update.
     */
    limit?: number
  }

  /**
   * ProdcutImgs upsert
   */
  export type ProdcutImgsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdcutImgs
     */
    select?: ProdcutImgsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdcutImgs
     */
    omit?: ProdcutImgsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdcutImgsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProdcutImgs to update in case it exists.
     */
    where: ProdcutImgsWhereUniqueInput
    /**
     * In case the ProdcutImgs found by the `where` argument doesn't exist, create a new ProdcutImgs with this data.
     */
    create: XOR<ProdcutImgsCreateInput, ProdcutImgsUncheckedCreateInput>
    /**
     * In case the ProdcutImgs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdcutImgsUpdateInput, ProdcutImgsUncheckedUpdateInput>
  }

  /**
   * ProdcutImgs delete
   */
  export type ProdcutImgsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdcutImgs
     */
    select?: ProdcutImgsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdcutImgs
     */
    omit?: ProdcutImgsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdcutImgsInclude<ExtArgs> | null
    /**
     * Filter which ProdcutImgs to delete.
     */
    where: ProdcutImgsWhereUniqueInput
  }

  /**
   * ProdcutImgs deleteMany
   */
  export type ProdcutImgsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdcutImgs to delete
     */
    where?: ProdcutImgsWhereInput
    /**
     * Limit how many ProdcutImgs to delete.
     */
    limit?: number
  }

  /**
   * ProdcutImgs.Products
   */
  export type ProdcutImgs$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
  }

  /**
   * ProdcutImgs without action
   */
  export type ProdcutImgsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdcutImgs
     */
    select?: ProdcutImgsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdcutImgs
     */
    omit?: ProdcutImgsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdcutImgsInclude<ExtArgs> | null
  }


  /**
   * Model ProductCategories
   */

  export type AggregateProductCategories = {
    _count: ProductCategoriesCountAggregateOutputType | null
    _min: ProductCategoriesMinAggregateOutputType | null
    _max: ProductCategoriesMaxAggregateOutputType | null
  }

  export type ProductCategoriesMinAggregateOutputType = {
    id: string | null
    productId: string | null
    categoryId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCategoriesMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    categoryId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCategoriesCountAggregateOutputType = {
    id: number
    productId: number
    categoryId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductCategoriesMinAggregateInputType = {
    id?: true
    productId?: true
    categoryId?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCategoriesMaxAggregateInputType = {
    id?: true
    productId?: true
    categoryId?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCategoriesCountAggregateInputType = {
    id?: true
    productId?: true
    categoryId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to aggregate.
     */
    where?: ProductCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoriesMaxAggregateInputType
  }

  export type GetProductCategoriesAggregateType<T extends ProductCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategories[P]>
      : GetScalarType<T[P], AggregateProductCategories[P]>
  }




  export type ProductCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoriesWhereInput
    orderBy?: ProductCategoriesOrderByWithAggregationInput | ProductCategoriesOrderByWithAggregationInput[]
    by: ProductCategoriesScalarFieldEnum[] | ProductCategoriesScalarFieldEnum
    having?: ProductCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoriesCountAggregateInputType | true
    _min?: ProductCategoriesMinAggregateInputType
    _max?: ProductCategoriesMaxAggregateInputType
  }

  export type ProductCategoriesGroupByOutputType = {
    id: string
    productId: string | null
    categoryId: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProductCategoriesCountAggregateOutputType | null
    _min: ProductCategoriesMinAggregateOutputType | null
    _max: ProductCategoriesMaxAggregateOutputType | null
  }

  type GetProductCategoriesGroupByPayload<T extends ProductCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    categoryId?: boolean
    created_at?: boolean
    updated_at?: boolean
    Categories?: boolean | ProductCategories$CategoriesArgs<ExtArgs>
    Products?: boolean | ProductCategories$ProductsArgs<ExtArgs>
  }, ExtArgs["result"]["productCategories"]>



  export type ProductCategoriesSelectScalar = {
    id?: boolean
    productId?: boolean
    categoryId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "categoryId" | "created_at" | "updated_at", ExtArgs["result"]["productCategories"]>
  export type ProductCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categories?: boolean | ProductCategories$CategoriesArgs<ExtArgs>
    Products?: boolean | ProductCategories$ProductsArgs<ExtArgs>
  }

  export type $ProductCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategories"
    objects: {
      Categories: Prisma.$CategoriesPayload<ExtArgs> | null
      Products: Prisma.$ProductsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string | null
      categoryId: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["productCategories"]>
    composites: {}
  }

  type ProductCategoriesGetPayload<S extends boolean | null | undefined | ProductCategoriesDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoriesPayload, S>

  type ProductCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCategoriesCountAggregateInputType | true
    }

  export interface ProductCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategories'], meta: { name: 'ProductCategories' } }
    /**
     * Find zero or one ProductCategories that matches the filter.
     * @param {ProductCategoriesFindUniqueArgs} args - Arguments to find a ProductCategories
     * @example
     * // Get one ProductCategories
     * const productCategories = await prisma.productCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCategoriesFindUniqueArgs>(args: SelectSubset<T, ProductCategoriesFindUniqueArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCategoriesFindUniqueOrThrowArgs} args - Arguments to find a ProductCategories
     * @example
     * // Get one ProductCategories
     * const productCategories = await prisma.productCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesFindFirstArgs} args - Arguments to find a ProductCategories
     * @example
     * // Get one ProductCategories
     * const productCategories = await prisma.productCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCategoriesFindFirstArgs>(args?: SelectSubset<T, ProductCategoriesFindFirstArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesFindFirstOrThrowArgs} args - Arguments to find a ProductCategories
     * @example
     * // Get one ProductCategories
     * const productCategories = await prisma.productCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategories.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoriesWithIdOnly = await prisma.productCategories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCategoriesFindManyArgs>(args?: SelectSubset<T, ProductCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCategories.
     * @param {ProductCategoriesCreateArgs} args - Arguments to create a ProductCategories.
     * @example
     * // Create one ProductCategories
     * const ProductCategories = await prisma.productCategories.create({
     *   data: {
     *     // ... data to create a ProductCategories
     *   }
     * })
     * 
     */
    create<T extends ProductCategoriesCreateArgs>(args: SelectSubset<T, ProductCategoriesCreateArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoriesCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategories = await prisma.productCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCategoriesCreateManyArgs>(args?: SelectSubset<T, ProductCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductCategories.
     * @param {ProductCategoriesDeleteArgs} args - Arguments to delete one ProductCategories.
     * @example
     * // Delete one ProductCategories
     * const ProductCategories = await prisma.productCategories.delete({
     *   where: {
     *     // ... filter to delete one ProductCategories
     *   }
     * })
     * 
     */
    delete<T extends ProductCategoriesDeleteArgs>(args: SelectSubset<T, ProductCategoriesDeleteArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCategories.
     * @param {ProductCategoriesUpdateArgs} args - Arguments to update one ProductCategories.
     * @example
     * // Update one ProductCategories
     * const productCategories = await prisma.productCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCategoriesUpdateArgs>(args: SelectSubset<T, ProductCategoriesUpdateArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoriesDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCategoriesDeleteManyArgs>(args?: SelectSubset<T, ProductCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategories = await prisma.productCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCategoriesUpdateManyArgs>(args: SelectSubset<T, ProductCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductCategories.
     * @param {ProductCategoriesUpsertArgs} args - Arguments to update or create a ProductCategories.
     * @example
     * // Update or create a ProductCategories
     * const productCategories = await prisma.productCategories.upsert({
     *   create: {
     *     // ... data to create a ProductCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategories we want to update
     *   }
     * })
     */
    upsert<T extends ProductCategoriesUpsertArgs>(args: SelectSubset<T, ProductCategoriesUpsertArgs<ExtArgs>>): Prisma__ProductCategoriesClient<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategories.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoriesCountArgs>(
      args?: Subset<T, ProductCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCategoriesAggregateArgs>(args: Subset<T, ProductCategoriesAggregateArgs>): Prisma.PrismaPromise<GetProductCategoriesAggregateType<T>>

    /**
     * Group by ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategories model
   */
  readonly fields: ProductCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Categories<T extends ProductCategories$CategoriesArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategories$CategoriesArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Products<T extends ProductCategories$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategories$ProductsArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCategories model
   */
  interface ProductCategoriesFieldRefs {
    readonly id: FieldRef<"ProductCategories", 'String'>
    readonly productId: FieldRef<"ProductCategories", 'String'>
    readonly categoryId: FieldRef<"ProductCategories", 'String'>
    readonly created_at: FieldRef<"ProductCategories", 'DateTime'>
    readonly updated_at: FieldRef<"ProductCategories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategories findUnique
   */
  export type ProductCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where: ProductCategoriesWhereUniqueInput
  }

  /**
   * ProductCategories findUniqueOrThrow
   */
  export type ProductCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where: ProductCategoriesWhereUniqueInput
  }

  /**
   * ProductCategories findFirst
   */
  export type ProductCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoriesScalarFieldEnum | ProductCategoriesScalarFieldEnum[]
  }

  /**
   * ProductCategories findFirstOrThrow
   */
  export type ProductCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoriesScalarFieldEnum | ProductCategoriesScalarFieldEnum[]
  }

  /**
   * ProductCategories findMany
   */
  export type ProductCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    distinct?: ProductCategoriesScalarFieldEnum | ProductCategoriesScalarFieldEnum[]
  }

  /**
   * ProductCategories create
   */
  export type ProductCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategories.
     */
    data: XOR<ProductCategoriesCreateInput, ProductCategoriesUncheckedCreateInput>
  }

  /**
   * ProductCategories createMany
   */
  export type ProductCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoriesCreateManyInput | ProductCategoriesCreateManyInput[]
  }

  /**
   * ProductCategories update
   */
  export type ProductCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategories.
     */
    data: XOR<ProductCategoriesUpdateInput, ProductCategoriesUncheckedUpdateInput>
    /**
     * Choose, which ProductCategories to update.
     */
    where: ProductCategoriesWhereUniqueInput
  }

  /**
   * ProductCategories updateMany
   */
  export type ProductCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoriesUpdateManyMutationInput, ProductCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoriesWhereInput
    /**
     * Limit how many ProductCategories to update.
     */
    limit?: number
  }

  /**
   * ProductCategories upsert
   */
  export type ProductCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategories to update in case it exists.
     */
    where: ProductCategoriesWhereUniqueInput
    /**
     * In case the ProductCategories found by the `where` argument doesn't exist, create a new ProductCategories with this data.
     */
    create: XOR<ProductCategoriesCreateInput, ProductCategoriesUncheckedCreateInput>
    /**
     * In case the ProductCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoriesUpdateInput, ProductCategoriesUncheckedUpdateInput>
  }

  /**
   * ProductCategories delete
   */
  export type ProductCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    /**
     * Filter which ProductCategories to delete.
     */
    where: ProductCategoriesWhereUniqueInput
  }

  /**
   * ProductCategories deleteMany
   */
  export type ProductCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoriesWhereInput
    /**
     * Limit how many ProductCategories to delete.
     */
    limit?: number
  }

  /**
   * ProductCategories.Categories
   */
  export type ProductCategories$CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
  }

  /**
   * ProductCategories.Products
   */
  export type ProductCategories$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
  }

  /**
   * ProductCategories without action
   */
  export type ProductCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model ProductReview
   */

  export type AggregateProductReview = {
    _count: ProductReviewCountAggregateOutputType | null
    _avg: ProductReviewAvgAggregateOutputType | null
    _sum: ProductReviewSumAggregateOutputType | null
    _min: ProductReviewMinAggregateOutputType | null
    _max: ProductReviewMaxAggregateOutputType | null
  }

  export type ProductReviewAvgAggregateOutputType = {
    review: number | null
  }

  export type ProductReviewSumAggregateOutputType = {
    review: number | null
  }

  export type ProductReviewMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    review: number | null
    addNote: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductReviewMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    review: number | null
    addNote: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductReviewCountAggregateOutputType = {
    id: number
    transactionId: number
    review: number
    addNote: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductReviewAvgAggregateInputType = {
    review?: true
  }

  export type ProductReviewSumAggregateInputType = {
    review?: true
  }

  export type ProductReviewMinAggregateInputType = {
    id?: true
    transactionId?: true
    review?: true
    addNote?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductReviewMaxAggregateInputType = {
    id?: true
    transactionId?: true
    review?: true
    addNote?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductReviewCountAggregateInputType = {
    id?: true
    transactionId?: true
    review?: true
    addNote?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReview to aggregate.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductReviews
    **/
    _count?: true | ProductReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductReviewMaxAggregateInputType
  }

  export type GetProductReviewAggregateType<T extends ProductReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateProductReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductReview[P]>
      : GetScalarType<T[P], AggregateProductReview[P]>
  }




  export type ProductReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReviewWhereInput
    orderBy?: ProductReviewOrderByWithAggregationInput | ProductReviewOrderByWithAggregationInput[]
    by: ProductReviewScalarFieldEnum[] | ProductReviewScalarFieldEnum
    having?: ProductReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductReviewCountAggregateInputType | true
    _avg?: ProductReviewAvgAggregateInputType
    _sum?: ProductReviewSumAggregateInputType
    _min?: ProductReviewMinAggregateInputType
    _max?: ProductReviewMaxAggregateInputType
  }

  export type ProductReviewGroupByOutputType = {
    id: string
    transactionId: string | null
    review: number | null
    addNote: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProductReviewCountAggregateOutputType | null
    _avg: ProductReviewAvgAggregateOutputType | null
    _sum: ProductReviewSumAggregateOutputType | null
    _min: ProductReviewMinAggregateOutputType | null
    _max: ProductReviewMaxAggregateOutputType | null
  }

  type GetProductReviewGroupByPayload<T extends ProductReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ProductReviewGroupByOutputType[P]>
        }
      >
    >


  export type ProductReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    review?: boolean
    addNote?: boolean
    created_at?: boolean
    updated_at?: boolean
    Transaction?: boolean | ProductReview$TransactionArgs<ExtArgs>
  }, ExtArgs["result"]["productReview"]>



  export type ProductReviewSelectScalar = {
    id?: boolean
    transactionId?: boolean
    review?: boolean
    addNote?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "review" | "addNote" | "created_at" | "updated_at", ExtArgs["result"]["productReview"]>
  export type ProductReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | ProductReview$TransactionArgs<ExtArgs>
  }

  export type $ProductReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductReview"
    objects: {
      Transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string | null
      review: number | null
      addNote: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["productReview"]>
    composites: {}
  }

  type ProductReviewGetPayload<S extends boolean | null | undefined | ProductReviewDefaultArgs> = $Result.GetResult<Prisma.$ProductReviewPayload, S>

  type ProductReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductReviewCountAggregateInputType | true
    }

  export interface ProductReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductReview'], meta: { name: 'ProductReview' } }
    /**
     * Find zero or one ProductReview that matches the filter.
     * @param {ProductReviewFindUniqueArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductReviewFindUniqueArgs>(args: SelectSubset<T, ProductReviewFindUniqueArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductReviewFindUniqueOrThrowArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindFirstArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductReviewFindFirstArgs>(args?: SelectSubset<T, ProductReviewFindFirstArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindFirstOrThrowArgs} args - Arguments to find a ProductReview
     * @example
     * // Get one ProductReview
     * const productReview = await prisma.productReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductReviews
     * const productReviews = await prisma.productReview.findMany()
     * 
     * // Get first 10 ProductReviews
     * const productReviews = await prisma.productReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productReviewWithIdOnly = await prisma.productReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductReviewFindManyArgs>(args?: SelectSubset<T, ProductReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductReview.
     * @param {ProductReviewCreateArgs} args - Arguments to create a ProductReview.
     * @example
     * // Create one ProductReview
     * const ProductReview = await prisma.productReview.create({
     *   data: {
     *     // ... data to create a ProductReview
     *   }
     * })
     * 
     */
    create<T extends ProductReviewCreateArgs>(args: SelectSubset<T, ProductReviewCreateArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductReviews.
     * @param {ProductReviewCreateManyArgs} args - Arguments to create many ProductReviews.
     * @example
     * // Create many ProductReviews
     * const productReview = await prisma.productReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductReviewCreateManyArgs>(args?: SelectSubset<T, ProductReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductReview.
     * @param {ProductReviewDeleteArgs} args - Arguments to delete one ProductReview.
     * @example
     * // Delete one ProductReview
     * const ProductReview = await prisma.productReview.delete({
     *   where: {
     *     // ... filter to delete one ProductReview
     *   }
     * })
     * 
     */
    delete<T extends ProductReviewDeleteArgs>(args: SelectSubset<T, ProductReviewDeleteArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductReview.
     * @param {ProductReviewUpdateArgs} args - Arguments to update one ProductReview.
     * @example
     * // Update one ProductReview
     * const productReview = await prisma.productReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductReviewUpdateArgs>(args: SelectSubset<T, ProductReviewUpdateArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductReviews.
     * @param {ProductReviewDeleteManyArgs} args - Arguments to filter ProductReviews to delete.
     * @example
     * // Delete a few ProductReviews
     * const { count } = await prisma.productReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductReviewDeleteManyArgs>(args?: SelectSubset<T, ProductReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductReviews
     * const productReview = await prisma.productReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductReviewUpdateManyArgs>(args: SelectSubset<T, ProductReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductReview.
     * @param {ProductReviewUpsertArgs} args - Arguments to update or create a ProductReview.
     * @example
     * // Update or create a ProductReview
     * const productReview = await prisma.productReview.upsert({
     *   create: {
     *     // ... data to create a ProductReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductReview we want to update
     *   }
     * })
     */
    upsert<T extends ProductReviewUpsertArgs>(args: SelectSubset<T, ProductReviewUpsertArgs<ExtArgs>>): Prisma__ProductReviewClient<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewCountArgs} args - Arguments to filter ProductReviews to count.
     * @example
     * // Count the number of ProductReviews
     * const count = await prisma.productReview.count({
     *   where: {
     *     // ... the filter for the ProductReviews we want to count
     *   }
     * })
    **/
    count<T extends ProductReviewCountArgs>(
      args?: Subset<T, ProductReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductReviewAggregateArgs>(args: Subset<T, ProductReviewAggregateArgs>): Prisma.PrismaPromise<GetProductReviewAggregateType<T>>

    /**
     * Group by ProductReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductReviewGroupByArgs['orderBy'] }
        : { orderBy?: ProductReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductReview model
   */
  readonly fields: ProductReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transaction<T extends ProductReview$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, ProductReview$TransactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductReview model
   */
  interface ProductReviewFieldRefs {
    readonly id: FieldRef<"ProductReview", 'String'>
    readonly transactionId: FieldRef<"ProductReview", 'String'>
    readonly review: FieldRef<"ProductReview", 'Int'>
    readonly addNote: FieldRef<"ProductReview", 'String'>
    readonly created_at: FieldRef<"ProductReview", 'DateTime'>
    readonly updated_at: FieldRef<"ProductReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductReview findUnique
   */
  export type ProductReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview findUniqueOrThrow
   */
  export type ProductReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview findFirst
   */
  export type ProductReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductReviews.
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductReviews.
     */
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * ProductReview findFirstOrThrow
   */
  export type ProductReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProductReview to fetch.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductReviews.
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductReviews.
     */
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * ProductReview findMany
   */
  export type ProductReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter, which ProductReviews to fetch.
     */
    where?: ProductReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviews to fetch.
     */
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductReviews.
     */
    cursor?: ProductReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviews.
     */
    skip?: number
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * ProductReview create
   */
  export type ProductReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductReview.
     */
    data: XOR<ProductReviewCreateInput, ProductReviewUncheckedCreateInput>
  }

  /**
   * ProductReview createMany
   */
  export type ProductReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductReviews.
     */
    data: ProductReviewCreateManyInput | ProductReviewCreateManyInput[]
  }

  /**
   * ProductReview update
   */
  export type ProductReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductReview.
     */
    data: XOR<ProductReviewUpdateInput, ProductReviewUncheckedUpdateInput>
    /**
     * Choose, which ProductReview to update.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview updateMany
   */
  export type ProductReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductReviews.
     */
    data: XOR<ProductReviewUpdateManyMutationInput, ProductReviewUncheckedUpdateManyInput>
    /**
     * Filter which ProductReviews to update
     */
    where?: ProductReviewWhereInput
    /**
     * Limit how many ProductReviews to update.
     */
    limit?: number
  }

  /**
   * ProductReview upsert
   */
  export type ProductReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductReview to update in case it exists.
     */
    where: ProductReviewWhereUniqueInput
    /**
     * In case the ProductReview found by the `where` argument doesn't exist, create a new ProductReview with this data.
     */
    create: XOR<ProductReviewCreateInput, ProductReviewUncheckedCreateInput>
    /**
     * In case the ProductReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductReviewUpdateInput, ProductReviewUncheckedUpdateInput>
  }

  /**
   * ProductReview delete
   */
  export type ProductReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    /**
     * Filter which ProductReview to delete.
     */
    where: ProductReviewWhereUniqueInput
  }

  /**
   * ProductReview deleteMany
   */
  export type ProductReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReviews to delete
     */
    where?: ProductReviewWhereInput
    /**
     * Limit how many ProductReviews to delete.
     */
    limit?: number
  }

  /**
   * ProductReview.Transaction
   */
  export type ProductReview$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * ProductReview without action
   */
  export type ProductReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: Decimal | null
    quantity: number | null
    rating: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: Decimal | null
    quantity: number | null
    rating: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    shopid: string | null
    productName: string | null
    desciption: string | null
    price: Decimal | null
    quantity: number | null
    status: string | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    shopid: string | null
    productName: string | null
    desciption: string | null
    price: Decimal | null
    quantity: number | null
    status: string | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    shopid: number
    productName: number
    desciption: number
    price: number
    quantity: number
    status: number
    rating: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
    quantity?: true
    rating?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
    quantity?: true
    rating?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    shopid?: true
    productName?: true
    desciption?: true
    price?: true
    quantity?: true
    status?: true
    rating?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    shopid?: true
    productName?: true
    desciption?: true
    price?: true
    quantity?: true
    status?: true
    rating?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    shopid?: true
    productName?: true
    desciption?: true
    price?: true
    quantity?: true
    status?: true
    rating?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    shopid: string | null
    productName: string | null
    desciption: string | null
    price: Decimal | null
    quantity: number | null
    status: string | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopid?: boolean
    productName?: boolean
    desciption?: boolean
    price?: boolean
    quantity?: boolean
    status?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
    Cart?: boolean | Products$CartArgs<ExtArgs>
    ProdcutImgs?: boolean | Products$ProdcutImgsArgs<ExtArgs>
    ProductCategories?: boolean | Products$ProductCategoriesArgs<ExtArgs>
    Shop?: boolean | Products$ShopArgs<ExtArgs>
    ProductVariants?: boolean | Products$ProductVariantsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>



  export type ProductsSelectScalar = {
    id?: boolean
    shopid?: boolean
    productName?: boolean
    desciption?: boolean
    price?: boolean
    quantity?: boolean
    status?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopid" | "productName" | "desciption" | "price" | "quantity" | "status" | "rating" | "created_at" | "updated_at", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cart?: boolean | Products$CartArgs<ExtArgs>
    ProdcutImgs?: boolean | Products$ProdcutImgsArgs<ExtArgs>
    ProductCategories?: boolean | Products$ProductCategoriesArgs<ExtArgs>
    Shop?: boolean | Products$ShopArgs<ExtArgs>
    ProductVariants?: boolean | Products$ProductVariantsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      Cart: Prisma.$CartPayload<ExtArgs>[]
      ProdcutImgs: Prisma.$ProdcutImgsPayload<ExtArgs>[]
      ProductCategories: Prisma.$ProductCategoriesPayload<ExtArgs>[]
      Shop: Prisma.$ShopPayload<ExtArgs> | null
      ProductVariants: Prisma.$ProductVariantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopid: string | null
      productName: string | null
      desciption: string | null
      price: Prisma.Decimal | null
      quantity: number | null
      status: string | null
      rating: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cart<T extends Products$CartArgs<ExtArgs> = {}>(args?: Subset<T, Products$CartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProdcutImgs<T extends Products$ProdcutImgsArgs<ExtArgs> = {}>(args?: Subset<T, Products$ProdcutImgsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdcutImgsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProductCategories<T extends Products$ProductCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Products$ProductCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Shop<T extends Products$ShopArgs<ExtArgs> = {}>(args?: Subset<T, Products$ShopArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ProductVariants<T extends Products$ProductVariantsArgs<ExtArgs> = {}>(args?: Subset<T, Products$ProductVariantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'String'>
    readonly shopid: FieldRef<"Products", 'String'>
    readonly productName: FieldRef<"Products", 'String'>
    readonly desciption: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Decimal'>
    readonly quantity: FieldRef<"Products", 'Int'>
    readonly status: FieldRef<"Products", 'String'>
    readonly rating: FieldRef<"Products", 'Int'>
    readonly created_at: FieldRef<"Products", 'DateTime'>
    readonly updated_at: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.Cart
   */
  export type Products$CartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Products.ProdcutImgs
   */
  export type Products$ProdcutImgsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdcutImgs
     */
    select?: ProdcutImgsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdcutImgs
     */
    omit?: ProdcutImgsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdcutImgsInclude<ExtArgs> | null
    where?: ProdcutImgsWhereInput
    orderBy?: ProdcutImgsOrderByWithRelationInput | ProdcutImgsOrderByWithRelationInput[]
    cursor?: ProdcutImgsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdcutImgsScalarFieldEnum | ProdcutImgsScalarFieldEnum[]
  }

  /**
   * Products.ProductCategories
   */
  export type Products$ProductCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategories
     */
    select?: ProductCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCategories
     */
    omit?: ProductCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoriesInclude<ExtArgs> | null
    where?: ProductCategoriesWhereInput
    orderBy?: ProductCategoriesOrderByWithRelationInput | ProductCategoriesOrderByWithRelationInput[]
    cursor?: ProductCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCategoriesScalarFieldEnum | ProductCategoriesScalarFieldEnum[]
  }

  /**
   * Products.Shop
   */
  export type Products$ShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
  }

  /**
   * Products.ProductVariants
   */
  export type Products$ProductVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    where?: ProductVariantsWhereInput
    orderBy?: ProductVariantsOrderByWithRelationInput | ProductVariantsOrderByWithRelationInput[]
    cursor?: ProductVariantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantsScalarFieldEnum | ProductVariantsScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariants
   */

  export type AggregateProductVariants = {
    _count: ProductVariantsCountAggregateOutputType | null
    _min: ProductVariantsMinAggregateOutputType | null
    _max: ProductVariantsMaxAggregateOutputType | null
  }

  export type ProductVariantsMinAggregateOutputType = {
    id: string | null
    productId: string | null
    vartiantName: string | null
    img: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductVariantsMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    vartiantName: string | null
    img: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductVariantsCountAggregateOutputType = {
    id: number
    productId: number
    vartiantName: number
    img: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductVariantsMinAggregateInputType = {
    id?: true
    productId?: true
    vartiantName?: true
    img?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductVariantsMaxAggregateInputType = {
    id?: true
    productId?: true
    vartiantName?: true
    img?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductVariantsCountAggregateInputType = {
    id?: true
    productId?: true
    vartiantName?: true
    img?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductVariantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to aggregate.
     */
    where?: ProductVariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantsOrderByWithRelationInput | ProductVariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantsMaxAggregateInputType
  }

  export type GetProductVariantsAggregateType<T extends ProductVariantsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariants[P]>
      : GetScalarType<T[P], AggregateProductVariants[P]>
  }




  export type ProductVariantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantsWhereInput
    orderBy?: ProductVariantsOrderByWithAggregationInput | ProductVariantsOrderByWithAggregationInput[]
    by: ProductVariantsScalarFieldEnum[] | ProductVariantsScalarFieldEnum
    having?: ProductVariantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantsCountAggregateInputType | true
    _min?: ProductVariantsMinAggregateInputType
    _max?: ProductVariantsMaxAggregateInputType
  }

  export type ProductVariantsGroupByOutputType = {
    id: string
    productId: string | null
    vartiantName: string | null
    img: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProductVariantsCountAggregateOutputType | null
    _min: ProductVariantsMinAggregateOutputType | null
    _max: ProductVariantsMaxAggregateOutputType | null
  }

  type GetProductVariantsGroupByPayload<T extends ProductVariantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantsGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    vartiantName?: boolean
    img?: boolean
    created_at?: boolean
    updated_at?: boolean
    Products?: boolean | ProductVariants$ProductsArgs<ExtArgs>
  }, ExtArgs["result"]["productVariants"]>



  export type ProductVariantsSelectScalar = {
    id?: boolean
    productId?: boolean
    vartiantName?: boolean
    img?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductVariantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "vartiantName" | "img" | "created_at" | "updated_at", ExtArgs["result"]["productVariants"]>
  export type ProductVariantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ProductVariants$ProductsArgs<ExtArgs>
  }

  export type $ProductVariantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariants"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string | null
      vartiantName: string | null
      img: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["productVariants"]>
    composites: {}
  }

  type ProductVariantsGetPayload<S extends boolean | null | undefined | ProductVariantsDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantsPayload, S>

  type ProductVariantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantsCountAggregateInputType | true
    }

  export interface ProductVariantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariants'], meta: { name: 'ProductVariants' } }
    /**
     * Find zero or one ProductVariants that matches the filter.
     * @param {ProductVariantsFindUniqueArgs} args - Arguments to find a ProductVariants
     * @example
     * // Get one ProductVariants
     * const productVariants = await prisma.productVariants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantsFindUniqueArgs>(args: SelectSubset<T, ProductVariantsFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantsFindUniqueOrThrowArgs} args - Arguments to find a ProductVariants
     * @example
     * // Get one ProductVariants
     * const productVariants = await prisma.productVariants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsFindFirstArgs} args - Arguments to find a ProductVariants
     * @example
     * // Get one ProductVariants
     * const productVariants = await prisma.productVariants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantsFindFirstArgs>(args?: SelectSubset<T, ProductVariantsFindFirstArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsFindFirstOrThrowArgs} args - Arguments to find a ProductVariants
     * @example
     * // Get one ProductVariants
     * const productVariants = await prisma.productVariants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariants.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantsWithIdOnly = await prisma.productVariants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantsFindManyArgs>(args?: SelectSubset<T, ProductVariantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariants.
     * @param {ProductVariantsCreateArgs} args - Arguments to create a ProductVariants.
     * @example
     * // Create one ProductVariants
     * const ProductVariants = await prisma.productVariants.create({
     *   data: {
     *     // ... data to create a ProductVariants
     *   }
     * })
     * 
     */
    create<T extends ProductVariantsCreateArgs>(args: SelectSubset<T, ProductVariantsCreateArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantsCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariants = await prisma.productVariants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantsCreateManyArgs>(args?: SelectSubset<T, ProductVariantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductVariants.
     * @param {ProductVariantsDeleteArgs} args - Arguments to delete one ProductVariants.
     * @example
     * // Delete one ProductVariants
     * const ProductVariants = await prisma.productVariants.delete({
     *   where: {
     *     // ... filter to delete one ProductVariants
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantsDeleteArgs>(args: SelectSubset<T, ProductVariantsDeleteArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariants.
     * @param {ProductVariantsUpdateArgs} args - Arguments to update one ProductVariants.
     * @example
     * // Update one ProductVariants
     * const productVariants = await prisma.productVariants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantsUpdateArgs>(args: SelectSubset<T, ProductVariantsUpdateArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantsDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantsDeleteManyArgs>(args?: SelectSubset<T, ProductVariantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariants = await prisma.productVariants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantsUpdateManyArgs>(args: SelectSubset<T, ProductVariantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductVariants.
     * @param {ProductVariantsUpsertArgs} args - Arguments to update or create a ProductVariants.
     * @example
     * // Update or create a ProductVariants
     * const productVariants = await prisma.productVariants.upsert({
     *   create: {
     *     // ... data to create a ProductVariants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariants we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantsUpsertArgs>(args: SelectSubset<T, ProductVariantsUpsertArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariants.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantsCountArgs>(
      args?: Subset<T, ProductVariantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductVariantsAggregateArgs>(args: Subset<T, ProductVariantsAggregateArgs>): Prisma.PrismaPromise<GetProductVariantsAggregateType<T>>

    /**
     * Group by ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductVariantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantsGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductVariantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariants model
   */
  readonly fields: ProductVariantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends ProductVariants$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariants$ProductsArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductVariants model
   */
  interface ProductVariantsFieldRefs {
    readonly id: FieldRef<"ProductVariants", 'String'>
    readonly productId: FieldRef<"ProductVariants", 'String'>
    readonly vartiantName: FieldRef<"ProductVariants", 'String'>
    readonly img: FieldRef<"ProductVariants", 'String'>
    readonly created_at: FieldRef<"ProductVariants", 'DateTime'>
    readonly updated_at: FieldRef<"ProductVariants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariants findUnique
   */
  export type ProductVariantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where: ProductVariantsWhereUniqueInput
  }

  /**
   * ProductVariants findUniqueOrThrow
   */
  export type ProductVariantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where: ProductVariantsWhereUniqueInput
  }

  /**
   * ProductVariants findFirst
   */
  export type ProductVariantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantsOrderByWithRelationInput | ProductVariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantsScalarFieldEnum | ProductVariantsScalarFieldEnum[]
  }

  /**
   * ProductVariants findFirstOrThrow
   */
  export type ProductVariantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantsOrderByWithRelationInput | ProductVariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantsScalarFieldEnum | ProductVariantsScalarFieldEnum[]
  }

  /**
   * ProductVariants findMany
   */
  export type ProductVariantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantsOrderByWithRelationInput | ProductVariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantsScalarFieldEnum | ProductVariantsScalarFieldEnum[]
  }

  /**
   * ProductVariants create
   */
  export type ProductVariantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariants.
     */
    data: XOR<ProductVariantsCreateInput, ProductVariantsUncheckedCreateInput>
  }

  /**
   * ProductVariants createMany
   */
  export type ProductVariantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantsCreateManyInput | ProductVariantsCreateManyInput[]
  }

  /**
   * ProductVariants update
   */
  export type ProductVariantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariants.
     */
    data: XOR<ProductVariantsUpdateInput, ProductVariantsUncheckedUpdateInput>
    /**
     * Choose, which ProductVariants to update.
     */
    where: ProductVariantsWhereUniqueInput
  }

  /**
   * ProductVariants updateMany
   */
  export type ProductVariantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantsUpdateManyMutationInput, ProductVariantsUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantsWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
  }

  /**
   * ProductVariants upsert
   */
  export type ProductVariantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariants to update in case it exists.
     */
    where: ProductVariantsWhereUniqueInput
    /**
     * In case the ProductVariants found by the `where` argument doesn't exist, create a new ProductVariants with this data.
     */
    create: XOR<ProductVariantsCreateInput, ProductVariantsUncheckedCreateInput>
    /**
     * In case the ProductVariants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantsUpdateInput, ProductVariantsUncheckedUpdateInput>
  }

  /**
   * ProductVariants delete
   */
  export type ProductVariantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter which ProductVariants to delete.
     */
    where: ProductVariantsWhereUniqueInput
  }

  /**
   * ProductVariants deleteMany
   */
  export type ProductVariantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantsWhereInput
    /**
     * Limit how many ProductVariants to delete.
     */
    limit?: number
  }

  /**
   * ProductVariants.Products
   */
  export type ProductVariants$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
  }

  /**
   * ProductVariants without action
   */
  export type ProductVariantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    startDate: Date | null
    expected: Date | null
    endDate: Date | null
    status: string | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    startDate: Date | null
    expected: Date | null
    endDate: Date | null
    status: string | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    orderId: number
    startDate: number
    expected: number
    endDate: number
    status: number
    _all: number
  }


  export type ShipmentMinAggregateInputType = {
    id?: true
    orderId?: true
    startDate?: true
    expected?: true
    endDate?: true
    status?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    orderId?: true
    startDate?: true
    expected?: true
    endDate?: true
    status?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    orderId?: true
    startDate?: true
    expected?: true
    endDate?: true
    status?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: string
    orderId: string | null
    startDate: Date | null
    expected: Date | null
    endDate: Date | null
    status: string | null
    _count: ShipmentCountAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    startDate?: boolean
    expected?: boolean
    endDate?: boolean
    status?: boolean
    Transaction?: boolean | Shipment$TransactionArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>



  export type ShipmentSelectScalar = {
    id?: boolean
    orderId?: boolean
    startDate?: boolean
    expected?: boolean
    endDate?: boolean
    status?: boolean
  }

  export type ShipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "startDate" | "expected" | "endDate" | "status", ExtArgs["result"]["shipment"]>
  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | Shipment$TransactionArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      Transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string | null
      startDate: Date | null
      expected: Date | null
      endDate: Date | null
      status: string | null
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transaction<T extends Shipment$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$TransactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipment model
   */
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'String'>
    readonly orderId: FieldRef<"Shipment", 'String'>
    readonly startDate: FieldRef<"Shipment", 'DateTime'>
    readonly expected: FieldRef<"Shipment", 'DateTime'>
    readonly endDate: FieldRef<"Shipment", 'DateTime'>
    readonly status: FieldRef<"Shipment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to delete.
     */
    limit?: number
  }

  /**
   * Shipment.Transaction
   */
  export type Shipment$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentProvider
   */

  export type AggregateShipmentProvider = {
    _count: ShipmentProviderCountAggregateOutputType | null
    _avg: ShipmentProviderAvgAggregateOutputType | null
    _sum: ShipmentProviderSumAggregateOutputType | null
    _min: ShipmentProviderMinAggregateOutputType | null
    _max: ShipmentProviderMaxAggregateOutputType | null
  }

  export type ShipmentProviderAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ShipmentProviderSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ShipmentProviderMinAggregateOutputType = {
    id: string | null
    providerName: string | null
    description: string | null
    price: Decimal | null
  }

  export type ShipmentProviderMaxAggregateOutputType = {
    id: string | null
    providerName: string | null
    description: string | null
    price: Decimal | null
  }

  export type ShipmentProviderCountAggregateOutputType = {
    id: number
    providerName: number
    description: number
    price: number
    _all: number
  }


  export type ShipmentProviderAvgAggregateInputType = {
    price?: true
  }

  export type ShipmentProviderSumAggregateInputType = {
    price?: true
  }

  export type ShipmentProviderMinAggregateInputType = {
    id?: true
    providerName?: true
    description?: true
    price?: true
  }

  export type ShipmentProviderMaxAggregateInputType = {
    id?: true
    providerName?: true
    description?: true
    price?: true
  }

  export type ShipmentProviderCountAggregateInputType = {
    id?: true
    providerName?: true
    description?: true
    price?: true
    _all?: true
  }

  export type ShipmentProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentProvider to aggregate.
     */
    where?: ShipmentProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentProviders to fetch.
     */
    orderBy?: ShipmentProviderOrderByWithRelationInput | ShipmentProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentProviders
    **/
    _count?: true | ShipmentProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentProviderMaxAggregateInputType
  }

  export type GetShipmentProviderAggregateType<T extends ShipmentProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentProvider[P]>
      : GetScalarType<T[P], AggregateShipmentProvider[P]>
  }




  export type ShipmentProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentProviderWhereInput
    orderBy?: ShipmentProviderOrderByWithAggregationInput | ShipmentProviderOrderByWithAggregationInput[]
    by: ShipmentProviderScalarFieldEnum[] | ShipmentProviderScalarFieldEnum
    having?: ShipmentProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentProviderCountAggregateInputType | true
    _avg?: ShipmentProviderAvgAggregateInputType
    _sum?: ShipmentProviderSumAggregateInputType
    _min?: ShipmentProviderMinAggregateInputType
    _max?: ShipmentProviderMaxAggregateInputType
  }

  export type ShipmentProviderGroupByOutputType = {
    id: string
    providerName: string | null
    description: string | null
    price: Decimal | null
    _count: ShipmentProviderCountAggregateOutputType | null
    _avg: ShipmentProviderAvgAggregateOutputType | null
    _sum: ShipmentProviderSumAggregateOutputType | null
    _min: ShipmentProviderMinAggregateOutputType | null
    _max: ShipmentProviderMaxAggregateOutputType | null
  }

  type GetShipmentProviderGroupByPayload<T extends ShipmentProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentProviderGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerName?: boolean
    description?: boolean
    price?: boolean
    Transaction?: boolean | ShipmentProvider$TransactionArgs<ExtArgs>
    _count?: boolean | ShipmentProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentProvider"]>



  export type ShipmentProviderSelectScalar = {
    id?: boolean
    providerName?: boolean
    description?: boolean
    price?: boolean
  }

  export type ShipmentProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerName" | "description" | "price", ExtArgs["result"]["shipmentProvider"]>
  export type ShipmentProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | ShipmentProvider$TransactionArgs<ExtArgs>
    _count?: boolean | ShipmentProviderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShipmentProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentProvider"
    objects: {
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerName: string | null
      description: string | null
      price: Prisma.Decimal | null
    }, ExtArgs["result"]["shipmentProvider"]>
    composites: {}
  }

  type ShipmentProviderGetPayload<S extends boolean | null | undefined | ShipmentProviderDefaultArgs> = $Result.GetResult<Prisma.$ShipmentProviderPayload, S>

  type ShipmentProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentProviderCountAggregateInputType | true
    }

  export interface ShipmentProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentProvider'], meta: { name: 'ShipmentProvider' } }
    /**
     * Find zero or one ShipmentProvider that matches the filter.
     * @param {ShipmentProviderFindUniqueArgs} args - Arguments to find a ShipmentProvider
     * @example
     * // Get one ShipmentProvider
     * const shipmentProvider = await prisma.shipmentProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentProviderFindUniqueArgs>(args: SelectSubset<T, ShipmentProviderFindUniqueArgs<ExtArgs>>): Prisma__ShipmentProviderClient<$Result.GetResult<Prisma.$ShipmentProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentProviderFindUniqueOrThrowArgs} args - Arguments to find a ShipmentProvider
     * @example
     * // Get one ShipmentProvider
     * const shipmentProvider = await prisma.shipmentProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentProviderClient<$Result.GetResult<Prisma.$ShipmentProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProviderFindFirstArgs} args - Arguments to find a ShipmentProvider
     * @example
     * // Get one ShipmentProvider
     * const shipmentProvider = await prisma.shipmentProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentProviderFindFirstArgs>(args?: SelectSubset<T, ShipmentProviderFindFirstArgs<ExtArgs>>): Prisma__ShipmentProviderClient<$Result.GetResult<Prisma.$ShipmentProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProviderFindFirstOrThrowArgs} args - Arguments to find a ShipmentProvider
     * @example
     * // Get one ShipmentProvider
     * const shipmentProvider = await prisma.shipmentProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentProviderClient<$Result.GetResult<Prisma.$ShipmentProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentProviders
     * const shipmentProviders = await prisma.shipmentProvider.findMany()
     * 
     * // Get first 10 ShipmentProviders
     * const shipmentProviders = await prisma.shipmentProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentProviderWithIdOnly = await prisma.shipmentProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentProviderFindManyArgs>(args?: SelectSubset<T, ShipmentProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentProvider.
     * @param {ShipmentProviderCreateArgs} args - Arguments to create a ShipmentProvider.
     * @example
     * // Create one ShipmentProvider
     * const ShipmentProvider = await prisma.shipmentProvider.create({
     *   data: {
     *     // ... data to create a ShipmentProvider
     *   }
     * })
     * 
     */
    create<T extends ShipmentProviderCreateArgs>(args: SelectSubset<T, ShipmentProviderCreateArgs<ExtArgs>>): Prisma__ShipmentProviderClient<$Result.GetResult<Prisma.$ShipmentProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentProviders.
     * @param {ShipmentProviderCreateManyArgs} args - Arguments to create many ShipmentProviders.
     * @example
     * // Create many ShipmentProviders
     * const shipmentProvider = await prisma.shipmentProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentProviderCreateManyArgs>(args?: SelectSubset<T, ShipmentProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShipmentProvider.
     * @param {ShipmentProviderDeleteArgs} args - Arguments to delete one ShipmentProvider.
     * @example
     * // Delete one ShipmentProvider
     * const ShipmentProvider = await prisma.shipmentProvider.delete({
     *   where: {
     *     // ... filter to delete one ShipmentProvider
     *   }
     * })
     * 
     */
    delete<T extends ShipmentProviderDeleteArgs>(args: SelectSubset<T, ShipmentProviderDeleteArgs<ExtArgs>>): Prisma__ShipmentProviderClient<$Result.GetResult<Prisma.$ShipmentProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentProvider.
     * @param {ShipmentProviderUpdateArgs} args - Arguments to update one ShipmentProvider.
     * @example
     * // Update one ShipmentProvider
     * const shipmentProvider = await prisma.shipmentProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentProviderUpdateArgs>(args: SelectSubset<T, ShipmentProviderUpdateArgs<ExtArgs>>): Prisma__ShipmentProviderClient<$Result.GetResult<Prisma.$ShipmentProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentProviders.
     * @param {ShipmentProviderDeleteManyArgs} args - Arguments to filter ShipmentProviders to delete.
     * @example
     * // Delete a few ShipmentProviders
     * const { count } = await prisma.shipmentProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentProviderDeleteManyArgs>(args?: SelectSubset<T, ShipmentProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentProviders
     * const shipmentProvider = await prisma.shipmentProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentProviderUpdateManyArgs>(args: SelectSubset<T, ShipmentProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShipmentProvider.
     * @param {ShipmentProviderUpsertArgs} args - Arguments to update or create a ShipmentProvider.
     * @example
     * // Update or create a ShipmentProvider
     * const shipmentProvider = await prisma.shipmentProvider.upsert({
     *   create: {
     *     // ... data to create a ShipmentProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentProvider we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentProviderUpsertArgs>(args: SelectSubset<T, ShipmentProviderUpsertArgs<ExtArgs>>): Prisma__ShipmentProviderClient<$Result.GetResult<Prisma.$ShipmentProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProviderCountArgs} args - Arguments to filter ShipmentProviders to count.
     * @example
     * // Count the number of ShipmentProviders
     * const count = await prisma.shipmentProvider.count({
     *   where: {
     *     // ... the filter for the ShipmentProviders we want to count
     *   }
     * })
    **/
    count<T extends ShipmentProviderCountArgs>(
      args?: Subset<T, ShipmentProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentProviderAggregateArgs>(args: Subset<T, ShipmentProviderAggregateArgs>): Prisma.PrismaPromise<GetShipmentProviderAggregateType<T>>

    /**
     * Group by ShipmentProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentProviderGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentProvider model
   */
  readonly fields: ShipmentProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transaction<T extends ShipmentProvider$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentProvider$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShipmentProvider model
   */
  interface ShipmentProviderFieldRefs {
    readonly id: FieldRef<"ShipmentProvider", 'String'>
    readonly providerName: FieldRef<"ShipmentProvider", 'String'>
    readonly description: FieldRef<"ShipmentProvider", 'String'>
    readonly price: FieldRef<"ShipmentProvider", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentProvider findUnique
   */
  export type ShipmentProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProvider
     */
    select?: ShipmentProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProvider
     */
    omit?: ShipmentProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProviderInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentProvider to fetch.
     */
    where: ShipmentProviderWhereUniqueInput
  }

  /**
   * ShipmentProvider findUniqueOrThrow
   */
  export type ShipmentProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProvider
     */
    select?: ShipmentProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProvider
     */
    omit?: ShipmentProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProviderInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentProvider to fetch.
     */
    where: ShipmentProviderWhereUniqueInput
  }

  /**
   * ShipmentProvider findFirst
   */
  export type ShipmentProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProvider
     */
    select?: ShipmentProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProvider
     */
    omit?: ShipmentProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProviderInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentProvider to fetch.
     */
    where?: ShipmentProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentProviders to fetch.
     */
    orderBy?: ShipmentProviderOrderByWithRelationInput | ShipmentProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentProviders.
     */
    cursor?: ShipmentProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentProviders.
     */
    distinct?: ShipmentProviderScalarFieldEnum | ShipmentProviderScalarFieldEnum[]
  }

  /**
   * ShipmentProvider findFirstOrThrow
   */
  export type ShipmentProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProvider
     */
    select?: ShipmentProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProvider
     */
    omit?: ShipmentProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProviderInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentProvider to fetch.
     */
    where?: ShipmentProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentProviders to fetch.
     */
    orderBy?: ShipmentProviderOrderByWithRelationInput | ShipmentProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentProviders.
     */
    cursor?: ShipmentProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentProviders.
     */
    distinct?: ShipmentProviderScalarFieldEnum | ShipmentProviderScalarFieldEnum[]
  }

  /**
   * ShipmentProvider findMany
   */
  export type ShipmentProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProvider
     */
    select?: ShipmentProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProvider
     */
    omit?: ShipmentProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProviderInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentProviders to fetch.
     */
    where?: ShipmentProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentProviders to fetch.
     */
    orderBy?: ShipmentProviderOrderByWithRelationInput | ShipmentProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentProviders.
     */
    cursor?: ShipmentProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentProviders.
     */
    skip?: number
    distinct?: ShipmentProviderScalarFieldEnum | ShipmentProviderScalarFieldEnum[]
  }

  /**
   * ShipmentProvider create
   */
  export type ShipmentProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProvider
     */
    select?: ShipmentProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProvider
     */
    omit?: ShipmentProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentProvider.
     */
    data: XOR<ShipmentProviderCreateInput, ShipmentProviderUncheckedCreateInput>
  }

  /**
   * ShipmentProvider createMany
   */
  export type ShipmentProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentProviders.
     */
    data: ShipmentProviderCreateManyInput | ShipmentProviderCreateManyInput[]
  }

  /**
   * ShipmentProvider update
   */
  export type ShipmentProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProvider
     */
    select?: ShipmentProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProvider
     */
    omit?: ShipmentProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentProvider.
     */
    data: XOR<ShipmentProviderUpdateInput, ShipmentProviderUncheckedUpdateInput>
    /**
     * Choose, which ShipmentProvider to update.
     */
    where: ShipmentProviderWhereUniqueInput
  }

  /**
   * ShipmentProvider updateMany
   */
  export type ShipmentProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentProviders.
     */
    data: XOR<ShipmentProviderUpdateManyMutationInput, ShipmentProviderUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentProviders to update
     */
    where?: ShipmentProviderWhereInput
    /**
     * Limit how many ShipmentProviders to update.
     */
    limit?: number
  }

  /**
   * ShipmentProvider upsert
   */
  export type ShipmentProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProvider
     */
    select?: ShipmentProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProvider
     */
    omit?: ShipmentProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentProvider to update in case it exists.
     */
    where: ShipmentProviderWhereUniqueInput
    /**
     * In case the ShipmentProvider found by the `where` argument doesn't exist, create a new ShipmentProvider with this data.
     */
    create: XOR<ShipmentProviderCreateInput, ShipmentProviderUncheckedCreateInput>
    /**
     * In case the ShipmentProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentProviderUpdateInput, ShipmentProviderUncheckedUpdateInput>
  }

  /**
   * ShipmentProvider delete
   */
  export type ShipmentProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProvider
     */
    select?: ShipmentProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProvider
     */
    omit?: ShipmentProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProviderInclude<ExtArgs> | null
    /**
     * Filter which ShipmentProvider to delete.
     */
    where: ShipmentProviderWhereUniqueInput
  }

  /**
   * ShipmentProvider deleteMany
   */
  export type ShipmentProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentProviders to delete
     */
    where?: ShipmentProviderWhereInput
    /**
     * Limit how many ShipmentProviders to delete.
     */
    limit?: number
  }

  /**
   * ShipmentProvider.Transaction
   */
  export type ShipmentProvider$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * ShipmentProvider without action
   */
  export type ShipmentProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProvider
     */
    select?: ShipmentProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProvider
     */
    omit?: ShipmentProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProviderInclude<ExtArgs> | null
  }


  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    rating: number | null
    productQuantity: number | null
  }

  export type ShopSumAggregateOutputType = {
    rating: number | null
    productQuantity: number | null
  }

  export type ShopMinAggregateOutputType = {
    id: string | null
    userId: string | null
    realName: string | null
    shopName: string | null
    description: string | null
    phoneContact: string | null
    emailContact: string | null
    addressContact: string | null
    rating: number | null
    certify: boolean | null
    productQuantity: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ShopMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    realName: string | null
    shopName: string | null
    description: string | null
    phoneContact: string | null
    emailContact: string | null
    addressContact: string | null
    rating: number | null
    certify: boolean | null
    productQuantity: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    userId: number
    realName: number
    shopName: number
    description: number
    phoneContact: number
    emailContact: number
    addressContact: number
    rating: number
    certify: number
    productQuantity: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    rating?: true
    productQuantity?: true
  }

  export type ShopSumAggregateInputType = {
    rating?: true
    productQuantity?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    userId?: true
    realName?: true
    shopName?: true
    description?: true
    phoneContact?: true
    emailContact?: true
    addressContact?: true
    rating?: true
    certify?: true
    productQuantity?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    userId?: true
    realName?: true
    shopName?: true
    description?: true
    phoneContact?: true
    emailContact?: true
    addressContact?: true
    rating?: true
    certify?: true
    productQuantity?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    userId?: true
    realName?: true
    shopName?: true
    description?: true
    phoneContact?: true
    emailContact?: true
    addressContact?: true
    rating?: true
    certify?: true
    productQuantity?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: string
    userId: string | null
    realName: string | null
    shopName: string | null
    description: string | null
    phoneContact: string | null
    emailContact: string | null
    addressContact: string | null
    rating: number | null
    certify: boolean | null
    productQuantity: number | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    realName?: boolean
    shopName?: boolean
    description?: boolean
    phoneContact?: boolean
    emailContact?: boolean
    addressContact?: boolean
    rating?: boolean
    certify?: boolean
    productQuantity?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    Products?: boolean | Shop$ProductsArgs<ExtArgs>
    Users?: boolean | Shop$UsersArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>



  export type ShopSelectScalar = {
    id?: boolean
    userId?: boolean
    realName?: boolean
    shopName?: boolean
    description?: boolean
    phoneContact?: boolean
    emailContact?: boolean
    addressContact?: boolean
    rating?: boolean
    certify?: boolean
    productQuantity?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "realName" | "shopName" | "description" | "phoneContact" | "emailContact" | "addressContact" | "rating" | "certify" | "productQuantity" | "status" | "created_at" | "updated_at", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | Shop$ProductsArgs<ExtArgs>
    Users?: boolean | Shop$UsersArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      realName: string | null
      shopName: string | null
      description: string | null
      phoneContact: string | null
      emailContact: string | null
      addressContact: string | null
      rating: number | null
      certify: boolean | null
      productQuantity: number | null
      status: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends Shop$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends Shop$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'String'>
    readonly userId: FieldRef<"Shop", 'String'>
    readonly realName: FieldRef<"Shop", 'String'>
    readonly shopName: FieldRef<"Shop", 'String'>
    readonly description: FieldRef<"Shop", 'String'>
    readonly phoneContact: FieldRef<"Shop", 'String'>
    readonly emailContact: FieldRef<"Shop", 'String'>
    readonly addressContact: FieldRef<"Shop", 'String'>
    readonly rating: FieldRef<"Shop", 'Int'>
    readonly certify: FieldRef<"Shop", 'Boolean'>
    readonly productQuantity: FieldRef<"Shop", 'Int'>
    readonly status: FieldRef<"Shop", 'String'>
    readonly created_at: FieldRef<"Shop", 'DateTime'>
    readonly updated_at: FieldRef<"Shop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.Products
   */
  export type Shop$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Shop.Users
   */
  export type Shop$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model ShopReview
   */

  export type AggregateShopReview = {
    _count: ShopReviewCountAggregateOutputType | null
    _avg: ShopReviewAvgAggregateOutputType | null
    _sum: ShopReviewSumAggregateOutputType | null
    _min: ShopReviewMinAggregateOutputType | null
    _max: ShopReviewMaxAggregateOutputType | null
  }

  export type ShopReviewAvgAggregateOutputType = {
    review: number | null
  }

  export type ShopReviewSumAggregateOutputType = {
    review: number | null
  }

  export type ShopReviewMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    review: number | null
    addNote: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ShopReviewMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    review: number | null
    addNote: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ShopReviewCountAggregateOutputType = {
    id: number
    transactionId: number
    review: number
    addNote: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ShopReviewAvgAggregateInputType = {
    review?: true
  }

  export type ShopReviewSumAggregateInputType = {
    review?: true
  }

  export type ShopReviewMinAggregateInputType = {
    id?: true
    transactionId?: true
    review?: true
    addNote?: true
    created_at?: true
    updated_at?: true
  }

  export type ShopReviewMaxAggregateInputType = {
    id?: true
    transactionId?: true
    review?: true
    addNote?: true
    created_at?: true
    updated_at?: true
  }

  export type ShopReviewCountAggregateInputType = {
    id?: true
    transactionId?: true
    review?: true
    addNote?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ShopReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopReview to aggregate.
     */
    where?: ShopReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopReviews to fetch.
     */
    orderBy?: ShopReviewOrderByWithRelationInput | ShopReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopReviews
    **/
    _count?: true | ShopReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopReviewMaxAggregateInputType
  }

  export type GetShopReviewAggregateType<T extends ShopReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateShopReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopReview[P]>
      : GetScalarType<T[P], AggregateShopReview[P]>
  }




  export type ShopReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopReviewWhereInput
    orderBy?: ShopReviewOrderByWithAggregationInput | ShopReviewOrderByWithAggregationInput[]
    by: ShopReviewScalarFieldEnum[] | ShopReviewScalarFieldEnum
    having?: ShopReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopReviewCountAggregateInputType | true
    _avg?: ShopReviewAvgAggregateInputType
    _sum?: ShopReviewSumAggregateInputType
    _min?: ShopReviewMinAggregateInputType
    _max?: ShopReviewMaxAggregateInputType
  }

  export type ShopReviewGroupByOutputType = {
    id: string
    transactionId: string | null
    review: number | null
    addNote: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ShopReviewCountAggregateOutputType | null
    _avg: ShopReviewAvgAggregateOutputType | null
    _sum: ShopReviewSumAggregateOutputType | null
    _min: ShopReviewMinAggregateOutputType | null
    _max: ShopReviewMaxAggregateOutputType | null
  }

  type GetShopReviewGroupByPayload<T extends ShopReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ShopReviewGroupByOutputType[P]>
        }
      >
    >


  export type ShopReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    review?: boolean
    addNote?: boolean
    created_at?: boolean
    updated_at?: boolean
    Transaction?: boolean | ShopReview$TransactionArgs<ExtArgs>
  }, ExtArgs["result"]["shopReview"]>



  export type ShopReviewSelectScalar = {
    id?: boolean
    transactionId?: boolean
    review?: boolean
    addNote?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ShopReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "review" | "addNote" | "created_at" | "updated_at", ExtArgs["result"]["shopReview"]>
  export type ShopReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | ShopReview$TransactionArgs<ExtArgs>
  }

  export type $ShopReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopReview"
    objects: {
      Transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string | null
      review: number | null
      addNote: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["shopReview"]>
    composites: {}
  }

  type ShopReviewGetPayload<S extends boolean | null | undefined | ShopReviewDefaultArgs> = $Result.GetResult<Prisma.$ShopReviewPayload, S>

  type ShopReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopReviewCountAggregateInputType | true
    }

  export interface ShopReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopReview'], meta: { name: 'ShopReview' } }
    /**
     * Find zero or one ShopReview that matches the filter.
     * @param {ShopReviewFindUniqueArgs} args - Arguments to find a ShopReview
     * @example
     * // Get one ShopReview
     * const shopReview = await prisma.shopReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopReviewFindUniqueArgs>(args: SelectSubset<T, ShopReviewFindUniqueArgs<ExtArgs>>): Prisma__ShopReviewClient<$Result.GetResult<Prisma.$ShopReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopReviewFindUniqueOrThrowArgs} args - Arguments to find a ShopReview
     * @example
     * // Get one ShopReview
     * const shopReview = await prisma.shopReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopReviewClient<$Result.GetResult<Prisma.$ShopReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopReviewFindFirstArgs} args - Arguments to find a ShopReview
     * @example
     * // Get one ShopReview
     * const shopReview = await prisma.shopReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopReviewFindFirstArgs>(args?: SelectSubset<T, ShopReviewFindFirstArgs<ExtArgs>>): Prisma__ShopReviewClient<$Result.GetResult<Prisma.$ShopReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopReviewFindFirstOrThrowArgs} args - Arguments to find a ShopReview
     * @example
     * // Get one ShopReview
     * const shopReview = await prisma.shopReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopReviewClient<$Result.GetResult<Prisma.$ShopReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopReviews
     * const shopReviews = await prisma.shopReview.findMany()
     * 
     * // Get first 10 ShopReviews
     * const shopReviews = await prisma.shopReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopReviewWithIdOnly = await prisma.shopReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopReviewFindManyArgs>(args?: SelectSubset<T, ShopReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopReview.
     * @param {ShopReviewCreateArgs} args - Arguments to create a ShopReview.
     * @example
     * // Create one ShopReview
     * const ShopReview = await prisma.shopReview.create({
     *   data: {
     *     // ... data to create a ShopReview
     *   }
     * })
     * 
     */
    create<T extends ShopReviewCreateArgs>(args: SelectSubset<T, ShopReviewCreateArgs<ExtArgs>>): Prisma__ShopReviewClient<$Result.GetResult<Prisma.$ShopReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopReviews.
     * @param {ShopReviewCreateManyArgs} args - Arguments to create many ShopReviews.
     * @example
     * // Create many ShopReviews
     * const shopReview = await prisma.shopReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopReviewCreateManyArgs>(args?: SelectSubset<T, ShopReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShopReview.
     * @param {ShopReviewDeleteArgs} args - Arguments to delete one ShopReview.
     * @example
     * // Delete one ShopReview
     * const ShopReview = await prisma.shopReview.delete({
     *   where: {
     *     // ... filter to delete one ShopReview
     *   }
     * })
     * 
     */
    delete<T extends ShopReviewDeleteArgs>(args: SelectSubset<T, ShopReviewDeleteArgs<ExtArgs>>): Prisma__ShopReviewClient<$Result.GetResult<Prisma.$ShopReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopReview.
     * @param {ShopReviewUpdateArgs} args - Arguments to update one ShopReview.
     * @example
     * // Update one ShopReview
     * const shopReview = await prisma.shopReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopReviewUpdateArgs>(args: SelectSubset<T, ShopReviewUpdateArgs<ExtArgs>>): Prisma__ShopReviewClient<$Result.GetResult<Prisma.$ShopReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopReviews.
     * @param {ShopReviewDeleteManyArgs} args - Arguments to filter ShopReviews to delete.
     * @example
     * // Delete a few ShopReviews
     * const { count } = await prisma.shopReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopReviewDeleteManyArgs>(args?: SelectSubset<T, ShopReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopReviews
     * const shopReview = await prisma.shopReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopReviewUpdateManyArgs>(args: SelectSubset<T, ShopReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopReview.
     * @param {ShopReviewUpsertArgs} args - Arguments to update or create a ShopReview.
     * @example
     * // Update or create a ShopReview
     * const shopReview = await prisma.shopReview.upsert({
     *   create: {
     *     // ... data to create a ShopReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopReview we want to update
     *   }
     * })
     */
    upsert<T extends ShopReviewUpsertArgs>(args: SelectSubset<T, ShopReviewUpsertArgs<ExtArgs>>): Prisma__ShopReviewClient<$Result.GetResult<Prisma.$ShopReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopReviewCountArgs} args - Arguments to filter ShopReviews to count.
     * @example
     * // Count the number of ShopReviews
     * const count = await prisma.shopReview.count({
     *   where: {
     *     // ... the filter for the ShopReviews we want to count
     *   }
     * })
    **/
    count<T extends ShopReviewCountArgs>(
      args?: Subset<T, ShopReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopReviewAggregateArgs>(args: Subset<T, ShopReviewAggregateArgs>): Prisma.PrismaPromise<GetShopReviewAggregateType<T>>

    /**
     * Group by ShopReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopReviewGroupByArgs['orderBy'] }
        : { orderBy?: ShopReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopReview model
   */
  readonly fields: ShopReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transaction<T extends ShopReview$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, ShopReview$TransactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopReview model
   */
  interface ShopReviewFieldRefs {
    readonly id: FieldRef<"ShopReview", 'String'>
    readonly transactionId: FieldRef<"ShopReview", 'String'>
    readonly review: FieldRef<"ShopReview", 'Int'>
    readonly addNote: FieldRef<"ShopReview", 'String'>
    readonly created_at: FieldRef<"ShopReview", 'DateTime'>
    readonly updated_at: FieldRef<"ShopReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopReview findUnique
   */
  export type ShopReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopReview
     */
    select?: ShopReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopReview
     */
    omit?: ShopReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopReviewInclude<ExtArgs> | null
    /**
     * Filter, which ShopReview to fetch.
     */
    where: ShopReviewWhereUniqueInput
  }

  /**
   * ShopReview findUniqueOrThrow
   */
  export type ShopReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopReview
     */
    select?: ShopReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopReview
     */
    omit?: ShopReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopReviewInclude<ExtArgs> | null
    /**
     * Filter, which ShopReview to fetch.
     */
    where: ShopReviewWhereUniqueInput
  }

  /**
   * ShopReview findFirst
   */
  export type ShopReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopReview
     */
    select?: ShopReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopReview
     */
    omit?: ShopReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopReviewInclude<ExtArgs> | null
    /**
     * Filter, which ShopReview to fetch.
     */
    where?: ShopReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopReviews to fetch.
     */
    orderBy?: ShopReviewOrderByWithRelationInput | ShopReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopReviews.
     */
    cursor?: ShopReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopReviews.
     */
    distinct?: ShopReviewScalarFieldEnum | ShopReviewScalarFieldEnum[]
  }

  /**
   * ShopReview findFirstOrThrow
   */
  export type ShopReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopReview
     */
    select?: ShopReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopReview
     */
    omit?: ShopReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopReviewInclude<ExtArgs> | null
    /**
     * Filter, which ShopReview to fetch.
     */
    where?: ShopReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopReviews to fetch.
     */
    orderBy?: ShopReviewOrderByWithRelationInput | ShopReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopReviews.
     */
    cursor?: ShopReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopReviews.
     */
    distinct?: ShopReviewScalarFieldEnum | ShopReviewScalarFieldEnum[]
  }

  /**
   * ShopReview findMany
   */
  export type ShopReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopReview
     */
    select?: ShopReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopReview
     */
    omit?: ShopReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopReviewInclude<ExtArgs> | null
    /**
     * Filter, which ShopReviews to fetch.
     */
    where?: ShopReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopReviews to fetch.
     */
    orderBy?: ShopReviewOrderByWithRelationInput | ShopReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopReviews.
     */
    cursor?: ShopReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopReviews.
     */
    skip?: number
    distinct?: ShopReviewScalarFieldEnum | ShopReviewScalarFieldEnum[]
  }

  /**
   * ShopReview create
   */
  export type ShopReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopReview
     */
    select?: ShopReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopReview
     */
    omit?: ShopReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopReview.
     */
    data: XOR<ShopReviewCreateInput, ShopReviewUncheckedCreateInput>
  }

  /**
   * ShopReview createMany
   */
  export type ShopReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopReviews.
     */
    data: ShopReviewCreateManyInput | ShopReviewCreateManyInput[]
  }

  /**
   * ShopReview update
   */
  export type ShopReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopReview
     */
    select?: ShopReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopReview
     */
    omit?: ShopReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopReview.
     */
    data: XOR<ShopReviewUpdateInput, ShopReviewUncheckedUpdateInput>
    /**
     * Choose, which ShopReview to update.
     */
    where: ShopReviewWhereUniqueInput
  }

  /**
   * ShopReview updateMany
   */
  export type ShopReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopReviews.
     */
    data: XOR<ShopReviewUpdateManyMutationInput, ShopReviewUncheckedUpdateManyInput>
    /**
     * Filter which ShopReviews to update
     */
    where?: ShopReviewWhereInput
    /**
     * Limit how many ShopReviews to update.
     */
    limit?: number
  }

  /**
   * ShopReview upsert
   */
  export type ShopReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopReview
     */
    select?: ShopReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopReview
     */
    omit?: ShopReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopReview to update in case it exists.
     */
    where: ShopReviewWhereUniqueInput
    /**
     * In case the ShopReview found by the `where` argument doesn't exist, create a new ShopReview with this data.
     */
    create: XOR<ShopReviewCreateInput, ShopReviewUncheckedCreateInput>
    /**
     * In case the ShopReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopReviewUpdateInput, ShopReviewUncheckedUpdateInput>
  }

  /**
   * ShopReview delete
   */
  export type ShopReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopReview
     */
    select?: ShopReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopReview
     */
    omit?: ShopReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopReviewInclude<ExtArgs> | null
    /**
     * Filter which ShopReview to delete.
     */
    where: ShopReviewWhereUniqueInput
  }

  /**
   * ShopReview deleteMany
   */
  export type ShopReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopReviews to delete
     */
    where?: ShopReviewWhereInput
    /**
     * Limit how many ShopReviews to delete.
     */
    limit?: number
  }

  /**
   * ShopReview.Transaction
   */
  export type ShopReview$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * ShopReview without action
   */
  export type ShopReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopReview
     */
    select?: ShopReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopReview
     */
    omit?: ShopReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopReviewInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    payPrice: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    payPrice: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    cartId: string | null
    paymentMethod: string | null
    shipProvider: string | null
    payPrice: Decimal | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    cartId: string | null
    paymentMethod: string | null
    shipProvider: string | null
    payPrice: Decimal | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    cartId: number
    paymentMethod: number
    shipProvider: number
    payPrice: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    payPrice?: true
  }

  export type TransactionSumAggregateInputType = {
    payPrice?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    cartId?: true
    paymentMethod?: true
    shipProvider?: true
    payPrice?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    cartId?: true
    paymentMethod?: true
    shipProvider?: true
    payPrice?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    cartId?: true
    paymentMethod?: true
    shipProvider?: true
    payPrice?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    cartId: string | null
    paymentMethod: string | null
    shipProvider: string | null
    payPrice: Decimal | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    paymentMethod?: boolean
    shipProvider?: boolean
    payPrice?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    ProductReview?: boolean | Transaction$ProductReviewArgs<ExtArgs>
    Shipment?: boolean | Transaction$ShipmentArgs<ExtArgs>
    ShopReview?: boolean | Transaction$ShopReviewArgs<ExtArgs>
    Cart?: boolean | Transaction$CartArgs<ExtArgs>
    PaymentMethod?: boolean | Transaction$PaymentMethodArgs<ExtArgs>
    ShipmentProvider?: boolean | Transaction$ShipmentProviderArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>



  export type TransactionSelectScalar = {
    id?: boolean
    cartId?: boolean
    paymentMethod?: boolean
    shipProvider?: boolean
    payPrice?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartId" | "paymentMethod" | "shipProvider" | "payPrice" | "status" | "created_at" | "updated_at", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductReview?: boolean | Transaction$ProductReviewArgs<ExtArgs>
    Shipment?: boolean | Transaction$ShipmentArgs<ExtArgs>
    ShopReview?: boolean | Transaction$ShopReviewArgs<ExtArgs>
    Cart?: boolean | Transaction$CartArgs<ExtArgs>
    PaymentMethod?: boolean | Transaction$PaymentMethodArgs<ExtArgs>
    ShipmentProvider?: boolean | Transaction$ShipmentProviderArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      ProductReview: Prisma.$ProductReviewPayload<ExtArgs>[]
      Shipment: Prisma.$ShipmentPayload<ExtArgs>[]
      ShopReview: Prisma.$ShopReviewPayload<ExtArgs>[]
      Cart: Prisma.$CartPayload<ExtArgs> | null
      PaymentMethod: Prisma.$PaymentMethodPayload<ExtArgs> | null
      ShipmentProvider: Prisma.$ShipmentProviderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cartId: string | null
      paymentMethod: string | null
      shipProvider: string | null
      payPrice: Prisma.Decimal | null
      status: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductReview<T extends Transaction$ProductReviewArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$ProductReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Shipment<T extends Transaction$ShipmentArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$ShipmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ShopReview<T extends Transaction$ShopReviewArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$ShopReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cart<T extends Transaction$CartArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$CartArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    PaymentMethod<T extends Transaction$PaymentMethodArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$PaymentMethodArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ShipmentProvider<T extends Transaction$ShipmentProviderArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$ShipmentProviderArgs<ExtArgs>>): Prisma__ShipmentProviderClient<$Result.GetResult<Prisma.$ShipmentProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly cartId: FieldRef<"Transaction", 'String'>
    readonly paymentMethod: FieldRef<"Transaction", 'String'>
    readonly shipProvider: FieldRef<"Transaction", 'String'>
    readonly payPrice: FieldRef<"Transaction", 'Decimal'>
    readonly status: FieldRef<"Transaction", 'String'>
    readonly created_at: FieldRef<"Transaction", 'DateTime'>
    readonly updated_at: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.ProductReview
   */
  export type Transaction$ProductReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: ProductReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: ProductReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewInclude<ExtArgs> | null
    where?: ProductReviewWhereInput
    orderBy?: ProductReviewOrderByWithRelationInput | ProductReviewOrderByWithRelationInput[]
    cursor?: ProductReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductReviewScalarFieldEnum | ProductReviewScalarFieldEnum[]
  }

  /**
   * Transaction.Shipment
   */
  export type Transaction$ShipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Transaction.ShopReview
   */
  export type Transaction$ShopReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopReview
     */
    select?: ShopReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopReview
     */
    omit?: ShopReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopReviewInclude<ExtArgs> | null
    where?: ShopReviewWhereInput
    orderBy?: ShopReviewOrderByWithRelationInput | ShopReviewOrderByWithRelationInput[]
    cursor?: ShopReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopReviewScalarFieldEnum | ShopReviewScalarFieldEnum[]
  }

  /**
   * Transaction.Cart
   */
  export type Transaction$CartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
  }

  /**
   * Transaction.PaymentMethod
   */
  export type Transaction$PaymentMethodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    where?: PaymentMethodWhereInput
  }

  /**
   * Transaction.ShipmentProvider
   */
  export type Transaction$ShipmentProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProvider
     */
    select?: ShipmentProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProvider
     */
    omit?: ShipmentProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProviderInclude<ExtArgs> | null
    where?: ShipmentProviderWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    realName: string | null
    phoneNumber: string | null
    dob: Date | null
    sex: string | null
    avartar: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    realName: string | null
    phoneNumber: string | null
    dob: Date | null
    sex: string | null
    avartar: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    realName: number
    phoneNumber: number
    dob: number
    sex: number
    avartar: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    realName?: true
    phoneNumber?: true
    dob?: true
    sex?: true
    avartar?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    realName?: true
    phoneNumber?: true
    dob?: true
    sex?: true
    avartar?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    realName?: true
    phoneNumber?: true
    dob?: true
    sex?: true
    avartar?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string | null
    email: string | null
    password: string | null
    role: string | null
    realName: string | null
    phoneNumber: string | null
    dob: Date | null
    sex: string | null
    avartar: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    realName?: boolean
    phoneNumber?: boolean
    dob?: boolean
    sex?: boolean
    avartar?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    Address?: boolean | Users$AddressArgs<ExtArgs>
    Cart?: boolean | Users$CartArgs<ExtArgs>
    Shop?: boolean | Users$ShopArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    realName?: boolean
    phoneNumber?: boolean
    dob?: boolean
    sex?: boolean
    avartar?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "realName" | "phoneNumber" | "dob" | "sex" | "avartar" | "status" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Address?: boolean | Users$AddressArgs<ExtArgs>
    Cart?: boolean | Users$CartArgs<ExtArgs>
    Shop?: boolean | Users$ShopArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Address: Prisma.$AddressPayload<ExtArgs>[]
      Cart: Prisma.$CartPayload<ExtArgs>[]
      Shop: Prisma.$ShopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string | null
      email: string | null
      password: string | null
      role: string | null
      realName: string | null
      phoneNumber: string | null
      dob: Date | null
      sex: string | null
      avartar: string | null
      status: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Address<T extends Users$AddressArgs<ExtArgs> = {}>(args?: Subset<T, Users$AddressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cart<T extends Users$CartArgs<ExtArgs> = {}>(args?: Subset<T, Users$CartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Shop<T extends Users$ShopArgs<ExtArgs> = {}>(args?: Subset<T, Users$ShopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly realName: FieldRef<"Users", 'String'>
    readonly phoneNumber: FieldRef<"Users", 'String'>
    readonly dob: FieldRef<"Users", 'DateTime'>
    readonly sex: FieldRef<"Users", 'String'>
    readonly avartar: FieldRef<"Users", 'String'>
    readonly status: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Address
   */
  export type Users$AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Users.Cart
   */
  export type Users$CartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Users.Shop
   */
  export type Users$ShopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    cursor?: ShopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    address: 'address',
    addNote: 'addNote',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    quantity: 'quantity'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    categoryName: 'categoryName',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    paymentName: 'paymentName',
    description: 'description',
    img: 'img'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const ProdcutImgsScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    url: 'url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProdcutImgsScalarFieldEnum = (typeof ProdcutImgsScalarFieldEnum)[keyof typeof ProdcutImgsScalarFieldEnum]


  export const ProductCategoriesScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    categoryId: 'categoryId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductCategoriesScalarFieldEnum = (typeof ProductCategoriesScalarFieldEnum)[keyof typeof ProductCategoriesScalarFieldEnum]


  export const ProductReviewScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    review: 'review',
    addNote: 'addNote',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductReviewScalarFieldEnum = (typeof ProductReviewScalarFieldEnum)[keyof typeof ProductReviewScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    shopid: 'shopid',
    productName: 'productName',
    desciption: 'desciption',
    price: 'price',
    quantity: 'quantity',
    status: 'status',
    rating: 'rating',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const ProductVariantsScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    vartiantName: 'vartiantName',
    img: 'img',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductVariantsScalarFieldEnum = (typeof ProductVariantsScalarFieldEnum)[keyof typeof ProductVariantsScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    startDate: 'startDate',
    expected: 'expected',
    endDate: 'endDate',
    status: 'status'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const ShipmentProviderScalarFieldEnum: {
    id: 'id',
    providerName: 'providerName',
    description: 'description',
    price: 'price'
  };

  export type ShipmentProviderScalarFieldEnum = (typeof ShipmentProviderScalarFieldEnum)[keyof typeof ShipmentProviderScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    realName: 'realName',
    shopName: 'shopName',
    description: 'description',
    phoneContact: 'phoneContact',
    emailContact: 'emailContact',
    addressContact: 'addressContact',
    rating: 'rating',
    certify: 'certify',
    productQuantity: 'productQuantity',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const ShopReviewScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    review: 'review',
    addNote: 'addNote',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ShopReviewScalarFieldEnum = (typeof ShopReviewScalarFieldEnum)[keyof typeof ShopReviewScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    paymentMethod: 'paymentMethod',
    shipProvider: 'shipProvider',
    payPrice: 'payPrice',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    realName: 'realName',
    phoneNumber: 'phoneNumber',
    dob: 'dob',
    sex: 'sex',
    avartar: 'avartar',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    userId?: StringNullableFilter<"Address"> | string | null
    address?: StringNullableFilter<"Address"> | string | null
    addNote?: StringNullableFilter<"Address"> | string | null
    created_at?: DateTimeNullableFilter<"Address"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Address"> | Date | string | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    addNote?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Users?: UsersOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    userId?: StringNullableFilter<"Address"> | string | null
    address?: StringNullableFilter<"Address"> | string | null
    addNote?: StringNullableFilter<"Address"> | string | null
    created_at?: DateTimeNullableFilter<"Address"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Address"> | Date | string | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    addNote?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    userId?: StringNullableWithAggregatesFilter<"Address"> | string | null
    address?: StringNullableWithAggregatesFilter<"Address"> | string | null
    addNote?: StringNullableWithAggregatesFilter<"Address"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Address"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Address"> | Date | string | null
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: StringFilter<"Cart"> | string
    userId?: StringNullableFilter<"Cart"> | string | null
    productId?: StringNullableFilter<"Cart"> | string | null
    quantity?: IntNullableFilter<"Cart"> | number | null
    Products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Transaction?: TransactionListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    Products?: ProductsOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    userId?: StringNullableFilter<"Cart"> | string | null
    productId?: StringNullableFilter<"Cart"> | string | null
    quantity?: IntNullableFilter<"Cart"> | number | null
    Products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cart"> | string
    userId?: StringNullableWithAggregatesFilter<"Cart"> | string | null
    productId?: StringNullableWithAggregatesFilter<"Cart"> | string | null
    quantity?: IntNullableWithAggregatesFilter<"Cart"> | number | null
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: StringFilter<"Categories"> | string
    categoryName?: StringNullableFilter<"Categories"> | string | null
    created_at?: DateTimeNullableFilter<"Categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Categories"> | Date | string | null
    ProductCategories?: ProductCategoriesListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    categoryName?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    ProductCategories?: ProductCategoriesOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    categoryName?: StringNullableFilter<"Categories"> | string | null
    created_at?: DateTimeNullableFilter<"Categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Categories"> | Date | string | null
    ProductCategories?: ProductCategoriesListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    categoryName?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categories"> | string
    categoryName?: StringNullableWithAggregatesFilter<"Categories"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Categories"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Categories"> | Date | string | null
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    id?: StringFilter<"PaymentMethod"> | string
    paymentName?: StringNullableFilter<"PaymentMethod"> | string | null
    description?: StringNullableFilter<"PaymentMethod"> | string | null
    img?: StringNullableFilter<"PaymentMethod"> | string | null
    Transaction?: TransactionListRelationFilter
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder
    paymentName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    OR?: PaymentMethodWhereInput[]
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[]
    paymentName?: StringNullableFilter<"PaymentMethod"> | string | null
    description?: StringNullableFilter<"PaymentMethod"> | string | null
    img?: StringNullableFilter<"PaymentMethod"> | string | null
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder
    paymentName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    _count?: PaymentMethodCountOrderByAggregateInput
    _max?: PaymentMethodMaxOrderByAggregateInput
    _min?: PaymentMethodMinOrderByAggregateInput
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    OR?: PaymentMethodScalarWhereWithAggregatesInput[]
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentMethod"> | string
    paymentName?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    description?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
    img?: StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null
  }

  export type ProdcutImgsWhereInput = {
    AND?: ProdcutImgsWhereInput | ProdcutImgsWhereInput[]
    OR?: ProdcutImgsWhereInput[]
    NOT?: ProdcutImgsWhereInput | ProdcutImgsWhereInput[]
    id?: StringFilter<"ProdcutImgs"> | string
    productId?: StringNullableFilter<"ProdcutImgs"> | string | null
    url?: StringNullableFilter<"ProdcutImgs"> | string | null
    created_at?: DateTimeNullableFilter<"ProdcutImgs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProdcutImgs"> | Date | string | null
    Products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }

  export type ProdcutImgsOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Products?: ProductsOrderByWithRelationInput
  }

  export type ProdcutImgsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProdcutImgsWhereInput | ProdcutImgsWhereInput[]
    OR?: ProdcutImgsWhereInput[]
    NOT?: ProdcutImgsWhereInput | ProdcutImgsWhereInput[]
    productId?: StringNullableFilter<"ProdcutImgs"> | string | null
    url?: StringNullableFilter<"ProdcutImgs"> | string | null
    created_at?: DateTimeNullableFilter<"ProdcutImgs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProdcutImgs"> | Date | string | null
    Products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }, "id">

  export type ProdcutImgsOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ProdcutImgsCountOrderByAggregateInput
    _max?: ProdcutImgsMaxOrderByAggregateInput
    _min?: ProdcutImgsMinOrderByAggregateInput
  }

  export type ProdcutImgsScalarWhereWithAggregatesInput = {
    AND?: ProdcutImgsScalarWhereWithAggregatesInput | ProdcutImgsScalarWhereWithAggregatesInput[]
    OR?: ProdcutImgsScalarWhereWithAggregatesInput[]
    NOT?: ProdcutImgsScalarWhereWithAggregatesInput | ProdcutImgsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProdcutImgs"> | string
    productId?: StringNullableWithAggregatesFilter<"ProdcutImgs"> | string | null
    url?: StringNullableWithAggregatesFilter<"ProdcutImgs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ProdcutImgs"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ProdcutImgs"> | Date | string | null
  }

  export type ProductCategoriesWhereInput = {
    AND?: ProductCategoriesWhereInput | ProductCategoriesWhereInput[]
    OR?: ProductCategoriesWhereInput[]
    NOT?: ProductCategoriesWhereInput | ProductCategoriesWhereInput[]
    id?: StringFilter<"ProductCategories"> | string
    productId?: StringNullableFilter<"ProductCategories"> | string | null
    categoryId?: StringNullableFilter<"ProductCategories"> | string | null
    created_at?: DateTimeNullableFilter<"ProductCategories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProductCategories"> | Date | string | null
    Categories?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
    Products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }

  export type ProductCategoriesOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Categories?: CategoriesOrderByWithRelationInput
    Products?: ProductsOrderByWithRelationInput
  }

  export type ProductCategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductCategoriesWhereInput | ProductCategoriesWhereInput[]
    OR?: ProductCategoriesWhereInput[]
    NOT?: ProductCategoriesWhereInput | ProductCategoriesWhereInput[]
    productId?: StringNullableFilter<"ProductCategories"> | string | null
    categoryId?: StringNullableFilter<"ProductCategories"> | string | null
    created_at?: DateTimeNullableFilter<"ProductCategories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProductCategories"> | Date | string | null
    Categories?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
    Products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }, "id">

  export type ProductCategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ProductCategoriesCountOrderByAggregateInput
    _max?: ProductCategoriesMaxOrderByAggregateInput
    _min?: ProductCategoriesMinOrderByAggregateInput
  }

  export type ProductCategoriesScalarWhereWithAggregatesInput = {
    AND?: ProductCategoriesScalarWhereWithAggregatesInput | ProductCategoriesScalarWhereWithAggregatesInput[]
    OR?: ProductCategoriesScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoriesScalarWhereWithAggregatesInput | ProductCategoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductCategories"> | string
    productId?: StringNullableWithAggregatesFilter<"ProductCategories"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"ProductCategories"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ProductCategories"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ProductCategories"> | Date | string | null
  }

  export type ProductReviewWhereInput = {
    AND?: ProductReviewWhereInput | ProductReviewWhereInput[]
    OR?: ProductReviewWhereInput[]
    NOT?: ProductReviewWhereInput | ProductReviewWhereInput[]
    id?: StringFilter<"ProductReview"> | string
    transactionId?: StringNullableFilter<"ProductReview"> | string | null
    review?: IntNullableFilter<"ProductReview"> | number | null
    addNote?: StringNullableFilter<"ProductReview"> | string | null
    created_at?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
    Transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type ProductReviewOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    addNote?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Transaction?: TransactionOrderByWithRelationInput
  }

  export type ProductReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductReviewWhereInput | ProductReviewWhereInput[]
    OR?: ProductReviewWhereInput[]
    NOT?: ProductReviewWhereInput | ProductReviewWhereInput[]
    transactionId?: StringNullableFilter<"ProductReview"> | string | null
    review?: IntNullableFilter<"ProductReview"> | number | null
    addNote?: StringNullableFilter<"ProductReview"> | string | null
    created_at?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
    Transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id">

  export type ProductReviewOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    addNote?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ProductReviewCountOrderByAggregateInput
    _avg?: ProductReviewAvgOrderByAggregateInput
    _max?: ProductReviewMaxOrderByAggregateInput
    _min?: ProductReviewMinOrderByAggregateInput
    _sum?: ProductReviewSumOrderByAggregateInput
  }

  export type ProductReviewScalarWhereWithAggregatesInput = {
    AND?: ProductReviewScalarWhereWithAggregatesInput | ProductReviewScalarWhereWithAggregatesInput[]
    OR?: ProductReviewScalarWhereWithAggregatesInput[]
    NOT?: ProductReviewScalarWhereWithAggregatesInput | ProductReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductReview"> | string
    transactionId?: StringNullableWithAggregatesFilter<"ProductReview"> | string | null
    review?: IntNullableWithAggregatesFilter<"ProductReview"> | number | null
    addNote?: StringNullableWithAggregatesFilter<"ProductReview"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ProductReview"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ProductReview"> | Date | string | null
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: StringFilter<"Products"> | string
    shopid?: StringNullableFilter<"Products"> | string | null
    productName?: StringNullableFilter<"Products"> | string | null
    desciption?: StringNullableFilter<"Products"> | string | null
    price?: DecimalNullableFilter<"Products"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"Products"> | number | null
    status?: StringNullableFilter<"Products"> | string | null
    rating?: IntNullableFilter<"Products"> | number | null
    created_at?: DateTimeNullableFilter<"Products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Products"> | Date | string | null
    Cart?: CartListRelationFilter
    ProdcutImgs?: ProdcutImgsListRelationFilter
    ProductCategories?: ProductCategoriesListRelationFilter
    Shop?: XOR<ShopNullableScalarRelationFilter, ShopWhereInput> | null
    ProductVariants?: ProductVariantsListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    shopid?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    desciption?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Cart?: CartOrderByRelationAggregateInput
    ProdcutImgs?: ProdcutImgsOrderByRelationAggregateInput
    ProductCategories?: ProductCategoriesOrderByRelationAggregateInput
    Shop?: ShopOrderByWithRelationInput
    ProductVariants?: ProductVariantsOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    shopid?: StringNullableFilter<"Products"> | string | null
    productName?: StringNullableFilter<"Products"> | string | null
    desciption?: StringNullableFilter<"Products"> | string | null
    price?: DecimalNullableFilter<"Products"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"Products"> | number | null
    status?: StringNullableFilter<"Products"> | string | null
    rating?: IntNullableFilter<"Products"> | number | null
    created_at?: DateTimeNullableFilter<"Products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Products"> | Date | string | null
    Cart?: CartListRelationFilter
    ProdcutImgs?: ProdcutImgsListRelationFilter
    ProductCategories?: ProductCategoriesListRelationFilter
    Shop?: XOR<ShopNullableScalarRelationFilter, ShopWhereInput> | null
    ProductVariants?: ProductVariantsListRelationFilter
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    shopid?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    desciption?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Products"> | string
    shopid?: StringNullableWithAggregatesFilter<"Products"> | string | null
    productName?: StringNullableWithAggregatesFilter<"Products"> | string | null
    desciption?: StringNullableWithAggregatesFilter<"Products"> | string | null
    price?: DecimalNullableWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableWithAggregatesFilter<"Products"> | number | null
    status?: StringNullableWithAggregatesFilter<"Products"> | string | null
    rating?: IntNullableWithAggregatesFilter<"Products"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Products"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Products"> | Date | string | null
  }

  export type ProductVariantsWhereInput = {
    AND?: ProductVariantsWhereInput | ProductVariantsWhereInput[]
    OR?: ProductVariantsWhereInput[]
    NOT?: ProductVariantsWhereInput | ProductVariantsWhereInput[]
    id?: StringFilter<"ProductVariants"> | string
    productId?: StringNullableFilter<"ProductVariants"> | string | null
    vartiantName?: StringNullableFilter<"ProductVariants"> | string | null
    img?: StringNullableFilter<"ProductVariants"> | string | null
    created_at?: DateTimeNullableFilter<"ProductVariants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProductVariants"> | Date | string | null
    Products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }

  export type ProductVariantsOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    vartiantName?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Products?: ProductsOrderByWithRelationInput
  }

  export type ProductVariantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVariantsWhereInput | ProductVariantsWhereInput[]
    OR?: ProductVariantsWhereInput[]
    NOT?: ProductVariantsWhereInput | ProductVariantsWhereInput[]
    productId?: StringNullableFilter<"ProductVariants"> | string | null
    vartiantName?: StringNullableFilter<"ProductVariants"> | string | null
    img?: StringNullableFilter<"ProductVariants"> | string | null
    created_at?: DateTimeNullableFilter<"ProductVariants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProductVariants"> | Date | string | null
    Products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }, "id">

  export type ProductVariantsOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    vartiantName?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ProductVariantsCountOrderByAggregateInput
    _max?: ProductVariantsMaxOrderByAggregateInput
    _min?: ProductVariantsMinOrderByAggregateInput
  }

  export type ProductVariantsScalarWhereWithAggregatesInput = {
    AND?: ProductVariantsScalarWhereWithAggregatesInput | ProductVariantsScalarWhereWithAggregatesInput[]
    OR?: ProductVariantsScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantsScalarWhereWithAggregatesInput | ProductVariantsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductVariants"> | string
    productId?: StringNullableWithAggregatesFilter<"ProductVariants"> | string | null
    vartiantName?: StringNullableWithAggregatesFilter<"ProductVariants"> | string | null
    img?: StringNullableWithAggregatesFilter<"ProductVariants"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ProductVariants"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ProductVariants"> | Date | string | null
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: StringFilter<"Shipment"> | string
    orderId?: StringNullableFilter<"Shipment"> | string | null
    startDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    expected?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    status?: StringNullableFilter<"Shipment"> | string | null
    Transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expected?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    Transaction?: TransactionOrderByWithRelationInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    orderId?: StringNullableFilter<"Shipment"> | string | null
    startDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    expected?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    status?: StringNullableFilter<"Shipment"> | string | null
    Transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expected?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shipment"> | string
    orderId?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    expected?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
  }

  export type ShipmentProviderWhereInput = {
    AND?: ShipmentProviderWhereInput | ShipmentProviderWhereInput[]
    OR?: ShipmentProviderWhereInput[]
    NOT?: ShipmentProviderWhereInput | ShipmentProviderWhereInput[]
    id?: StringFilter<"ShipmentProvider"> | string
    providerName?: StringNullableFilter<"ShipmentProvider"> | string | null
    description?: StringNullableFilter<"ShipmentProvider"> | string | null
    price?: DecimalNullableFilter<"ShipmentProvider"> | Decimal | DecimalJsLike | number | string | null
    Transaction?: TransactionListRelationFilter
  }

  export type ShipmentProviderOrderByWithRelationInput = {
    id?: SortOrder
    providerName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type ShipmentProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShipmentProviderWhereInput | ShipmentProviderWhereInput[]
    OR?: ShipmentProviderWhereInput[]
    NOT?: ShipmentProviderWhereInput | ShipmentProviderWhereInput[]
    providerName?: StringNullableFilter<"ShipmentProvider"> | string | null
    description?: StringNullableFilter<"ShipmentProvider"> | string | null
    price?: DecimalNullableFilter<"ShipmentProvider"> | Decimal | DecimalJsLike | number | string | null
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type ShipmentProviderOrderByWithAggregationInput = {
    id?: SortOrder
    providerName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    _count?: ShipmentProviderCountOrderByAggregateInput
    _avg?: ShipmentProviderAvgOrderByAggregateInput
    _max?: ShipmentProviderMaxOrderByAggregateInput
    _min?: ShipmentProviderMinOrderByAggregateInput
    _sum?: ShipmentProviderSumOrderByAggregateInput
  }

  export type ShipmentProviderScalarWhereWithAggregatesInput = {
    AND?: ShipmentProviderScalarWhereWithAggregatesInput | ShipmentProviderScalarWhereWithAggregatesInput[]
    OR?: ShipmentProviderScalarWhereWithAggregatesInput[]
    NOT?: ShipmentProviderScalarWhereWithAggregatesInput | ShipmentProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShipmentProvider"> | string
    providerName?: StringNullableWithAggregatesFilter<"ShipmentProvider"> | string | null
    description?: StringNullableWithAggregatesFilter<"ShipmentProvider"> | string | null
    price?: DecimalNullableWithAggregatesFilter<"ShipmentProvider"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: StringFilter<"Shop"> | string
    userId?: StringNullableFilter<"Shop"> | string | null
    realName?: StringNullableFilter<"Shop"> | string | null
    shopName?: StringNullableFilter<"Shop"> | string | null
    description?: StringNullableFilter<"Shop"> | string | null
    phoneContact?: StringNullableFilter<"Shop"> | string | null
    emailContact?: StringNullableFilter<"Shop"> | string | null
    addressContact?: StringNullableFilter<"Shop"> | string | null
    rating?: IntNullableFilter<"Shop"> | number | null
    certify?: BoolNullableFilter<"Shop"> | boolean | null
    productQuantity?: IntNullableFilter<"Shop"> | number | null
    status?: StringNullableFilter<"Shop"> | string | null
    created_at?: DateTimeNullableFilter<"Shop"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Shop"> | Date | string | null
    Products?: ProductsListRelationFilter
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    realName?: SortOrderInput | SortOrder
    shopName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    phoneContact?: SortOrderInput | SortOrder
    emailContact?: SortOrderInput | SortOrder
    addressContact?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    certify?: SortOrderInput | SortOrder
    productQuantity?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Products?: ProductsOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    userId?: StringNullableFilter<"Shop"> | string | null
    realName?: StringNullableFilter<"Shop"> | string | null
    shopName?: StringNullableFilter<"Shop"> | string | null
    description?: StringNullableFilter<"Shop"> | string | null
    phoneContact?: StringNullableFilter<"Shop"> | string | null
    emailContact?: StringNullableFilter<"Shop"> | string | null
    addressContact?: StringNullableFilter<"Shop"> | string | null
    rating?: IntNullableFilter<"Shop"> | number | null
    certify?: BoolNullableFilter<"Shop"> | boolean | null
    productQuantity?: IntNullableFilter<"Shop"> | number | null
    status?: StringNullableFilter<"Shop"> | string | null
    created_at?: DateTimeNullableFilter<"Shop"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Shop"> | Date | string | null
    Products?: ProductsListRelationFilter
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    realName?: SortOrderInput | SortOrder
    shopName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    phoneContact?: SortOrderInput | SortOrder
    emailContact?: SortOrderInput | SortOrder
    addressContact?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    certify?: SortOrderInput | SortOrder
    productQuantity?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ShopCountOrderByAggregateInput
    _avg?: ShopAvgOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
    _sum?: ShopSumOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shop"> | string
    userId?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    realName?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    shopName?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    description?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    phoneContact?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    emailContact?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    addressContact?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    rating?: IntNullableWithAggregatesFilter<"Shop"> | number | null
    certify?: BoolNullableWithAggregatesFilter<"Shop"> | boolean | null
    productQuantity?: IntNullableWithAggregatesFilter<"Shop"> | number | null
    status?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Shop"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Shop"> | Date | string | null
  }

  export type ShopReviewWhereInput = {
    AND?: ShopReviewWhereInput | ShopReviewWhereInput[]
    OR?: ShopReviewWhereInput[]
    NOT?: ShopReviewWhereInput | ShopReviewWhereInput[]
    id?: StringFilter<"ShopReview"> | string
    transactionId?: StringNullableFilter<"ShopReview"> | string | null
    review?: IntNullableFilter<"ShopReview"> | number | null
    addNote?: StringNullableFilter<"ShopReview"> | string | null
    created_at?: DateTimeNullableFilter<"ShopReview"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ShopReview"> | Date | string | null
    Transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type ShopReviewOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    addNote?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Transaction?: TransactionOrderByWithRelationInput
  }

  export type ShopReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopReviewWhereInput | ShopReviewWhereInput[]
    OR?: ShopReviewWhereInput[]
    NOT?: ShopReviewWhereInput | ShopReviewWhereInput[]
    transactionId?: StringNullableFilter<"ShopReview"> | string | null
    review?: IntNullableFilter<"ShopReview"> | number | null
    addNote?: StringNullableFilter<"ShopReview"> | string | null
    created_at?: DateTimeNullableFilter<"ShopReview"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ShopReview"> | Date | string | null
    Transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id">

  export type ShopReviewOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    review?: SortOrderInput | SortOrder
    addNote?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ShopReviewCountOrderByAggregateInput
    _avg?: ShopReviewAvgOrderByAggregateInput
    _max?: ShopReviewMaxOrderByAggregateInput
    _min?: ShopReviewMinOrderByAggregateInput
    _sum?: ShopReviewSumOrderByAggregateInput
  }

  export type ShopReviewScalarWhereWithAggregatesInput = {
    AND?: ShopReviewScalarWhereWithAggregatesInput | ShopReviewScalarWhereWithAggregatesInput[]
    OR?: ShopReviewScalarWhereWithAggregatesInput[]
    NOT?: ShopReviewScalarWhereWithAggregatesInput | ShopReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShopReview"> | string
    transactionId?: StringNullableWithAggregatesFilter<"ShopReview"> | string | null
    review?: IntNullableWithAggregatesFilter<"ShopReview"> | number | null
    addNote?: StringNullableWithAggregatesFilter<"ShopReview"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ShopReview"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"ShopReview"> | Date | string | null
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    cartId?: StringNullableFilter<"Transaction"> | string | null
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    shipProvider?: StringNullableFilter<"Transaction"> | string | null
    payPrice?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"Transaction"> | string | null
    created_at?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    ProductReview?: ProductReviewListRelationFilter
    Shipment?: ShipmentListRelationFilter
    ShopReview?: ShopReviewListRelationFilter
    Cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    PaymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
    ShipmentProvider?: XOR<ShipmentProviderNullableScalarRelationFilter, ShipmentProviderWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    cartId?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    shipProvider?: SortOrderInput | SortOrder
    payPrice?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    ProductReview?: ProductReviewOrderByRelationAggregateInput
    Shipment?: ShipmentOrderByRelationAggregateInput
    ShopReview?: ShopReviewOrderByRelationAggregateInput
    Cart?: CartOrderByWithRelationInput
    PaymentMethod?: PaymentMethodOrderByWithRelationInput
    ShipmentProvider?: ShipmentProviderOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    cartId?: StringNullableFilter<"Transaction"> | string | null
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    shipProvider?: StringNullableFilter<"Transaction"> | string | null
    payPrice?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"Transaction"> | string | null
    created_at?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    ProductReview?: ProductReviewListRelationFilter
    Shipment?: ShipmentListRelationFilter
    ShopReview?: ShopReviewListRelationFilter
    Cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    PaymentMethod?: XOR<PaymentMethodNullableScalarRelationFilter, PaymentMethodWhereInput> | null
    ShipmentProvider?: XOR<ShipmentProviderNullableScalarRelationFilter, ShipmentProviderWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    cartId?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    shipProvider?: SortOrderInput | SortOrder
    payPrice?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    cartId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    shipProvider?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    payPrice?: DecimalNullableWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    role?: StringNullableFilter<"Users"> | string | null
    realName?: StringNullableFilter<"Users"> | string | null
    phoneNumber?: StringNullableFilter<"Users"> | string | null
    dob?: DateTimeNullableFilter<"Users"> | Date | string | null
    sex?: StringNullableFilter<"Users"> | string | null
    avartar?: StringNullableFilter<"Users"> | string | null
    status?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    Address?: AddressListRelationFilter
    Cart?: CartListRelationFilter
    Shop?: ShopListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    realName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    avartar?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Address?: AddressOrderByRelationAggregateInput
    Cart?: CartOrderByRelationAggregateInput
    Shop?: ShopOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    username?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    role?: StringNullableFilter<"Users"> | string | null
    realName?: StringNullableFilter<"Users"> | string | null
    phoneNumber?: StringNullableFilter<"Users"> | string | null
    dob?: DateTimeNullableFilter<"Users"> | Date | string | null
    sex?: StringNullableFilter<"Users"> | string | null
    avartar?: StringNullableFilter<"Users"> | string | null
    status?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    Address?: AddressListRelationFilter
    Cart?: CartListRelationFilter
    Shop?: ShopListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    realName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    avartar?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: StringNullableWithAggregatesFilter<"Users"> | string | null
    realName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Users"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    sex?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avartar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    status?: StringNullableWithAggregatesFilter<"Users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
  }

  export type AddressCreateInput = {
    id: string
    address?: string | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Users?: UsersCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id: string
    userId?: string | null
    address?: string | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateManyInput = {
    id: string
    userId?: string | null
    address?: string | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartCreateInput = {
    id: string
    quantity?: number | null
    Products?: ProductsCreateNestedOneWithoutCartInput
    Users?: UsersCreateNestedOneWithoutCartInput
    Transaction?: TransactionCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id: string
    userId?: string | null
    productId?: string | null
    quantity?: number | null
    Transaction?: TransactionUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Products?: ProductsUpdateOneWithoutCartNestedInput
    Users?: UsersUpdateOneWithoutCartNestedInput
    Transaction?: TransactionUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Transaction?: TransactionUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id: string
    userId?: string | null
    productId?: string | null
    quantity?: number | null
  }

  export type CartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoriesCreateInput = {
    id: string
    categoryName?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductCategories?: ProductCategoriesCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateInput = {
    id: string
    categoryName?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductCategories?: ProductCategoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductCategories?: ProductCategoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesCreateManyInput = {
    id: string
    categoryName?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentMethodCreateInput = {
    id: string
    paymentName?: string | null
    description?: string | null
    img?: string | null
    Transaction?: TransactionCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUncheckedCreateInput = {
    id: string
    paymentName?: string | null
    description?: string | null
    img?: string | null
    Transaction?: TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput
  }

  export type PaymentMethodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput
  }

  export type PaymentMethodCreateManyInput = {
    id: string
    paymentName?: string | null
    description?: string | null
    img?: string | null
  }

  export type PaymentMethodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdcutImgsCreateInput = {
    id: string
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsCreateNestedOneWithoutProdcutImgsInput
  }

  export type ProdcutImgsUncheckedCreateInput = {
    id: string
    productId?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProdcutImgsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUpdateOneWithoutProdcutImgsNestedInput
  }

  export type ProdcutImgsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdcutImgsCreateManyInput = {
    id: string
    productId?: string | null
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProdcutImgsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdcutImgsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoriesCreateInput = {
    id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Categories?: CategoriesCreateNestedOneWithoutProductCategoriesInput
    Products?: ProductsCreateNestedOneWithoutProductCategoriesInput
  }

  export type ProductCategoriesUncheckedCreateInput = {
    id: string
    productId?: string | null
    categoryId?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductCategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUpdateOneWithoutProductCategoriesNestedInput
    Products?: ProductsUpdateOneWithoutProductCategoriesNestedInput
  }

  export type ProductCategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoriesCreateManyInput = {
    id: string
    productId?: string | null
    categoryId?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductCategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductReviewCreateInput = {
    id: string
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Transaction?: TransactionCreateNestedOneWithoutProductReviewInput
  }

  export type ProductReviewUncheckedCreateInput = {
    id: string
    transactionId?: string | null
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transaction?: TransactionUpdateOneWithoutProductReviewNestedInput
  }

  export type ProductReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductReviewCreateManyInput = {
    id: string
    transactionId?: string | null
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsCreateInput = {
    id: string
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartCreateNestedManyWithoutProductsInput
    ProdcutImgs?: ProdcutImgsCreateNestedManyWithoutProductsInput
    ProductCategories?: ProductCategoriesCreateNestedManyWithoutProductsInput
    Shop?: ShopCreateNestedOneWithoutProductsInput
    ProductVariants?: ProductVariantsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateInput = {
    id: string
    shopid?: string | null
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartUncheckedCreateNestedManyWithoutProductsInput
    ProdcutImgs?: ProdcutImgsUncheckedCreateNestedManyWithoutProductsInput
    ProductCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutProductsInput
    ProductVariants?: ProductVariantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUpdateManyWithoutProductsNestedInput
    ProdcutImgs?: ProdcutImgsUpdateManyWithoutProductsNestedInput
    ProductCategories?: ProductCategoriesUpdateManyWithoutProductsNestedInput
    Shop?: ShopUpdateOneWithoutProductsNestedInput
    ProductVariants?: ProductVariantsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopid?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUncheckedUpdateManyWithoutProductsNestedInput
    ProdcutImgs?: ProdcutImgsUncheckedUpdateManyWithoutProductsNestedInput
    ProductCategories?: ProductCategoriesUncheckedUpdateManyWithoutProductsNestedInput
    ProductVariants?: ProductVariantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsCreateManyInput = {
    id: string
    shopid?: string | null
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopid?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductVariantsCreateInput = {
    id: string
    vartiantName?: string | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsCreateNestedOneWithoutProductVariantsInput
  }

  export type ProductVariantsUncheckedCreateInput = {
    id: string
    productId?: string | null
    vartiantName?: string | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductVariantsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vartiantName?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUpdateOneWithoutProductVariantsNestedInput
  }

  export type ProductVariantsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    vartiantName?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductVariantsCreateManyInput = {
    id: string
    productId?: string | null
    vartiantName?: string | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductVariantsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vartiantName?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductVariantsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    vartiantName?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShipmentCreateInput = {
    id: string
    startDate?: Date | string | null
    expected?: Date | string | null
    endDate?: Date | string | null
    status?: string | null
    Transaction?: TransactionCreateNestedOneWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateInput = {
    id: string
    orderId?: string | null
    startDate?: Date | string | null
    expected?: Date | string | null
    endDate?: Date | string | null
    status?: string | null
  }

  export type ShipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUpdateOneWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentCreateManyInput = {
    id: string
    orderId?: string | null
    startDate?: Date | string | null
    expected?: Date | string | null
    endDate?: Date | string | null
    status?: string | null
  }

  export type ShipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentProviderCreateInput = {
    id: string
    providerName?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    Transaction?: TransactionCreateNestedManyWithoutShipmentProviderInput
  }

  export type ShipmentProviderUncheckedCreateInput = {
    id: string
    providerName?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    Transaction?: TransactionUncheckedCreateNestedManyWithoutShipmentProviderInput
  }

  export type ShipmentProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Transaction?: TransactionUpdateManyWithoutShipmentProviderNestedInput
  }

  export type ShipmentProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Transaction?: TransactionUncheckedUpdateManyWithoutShipmentProviderNestedInput
  }

  export type ShipmentProviderCreateManyInput = {
    id: string
    providerName?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type ShipmentProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ShipmentProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ShopCreateInput = {
    id: string
    realName?: string | null
    shopName?: string | null
    description?: string | null
    phoneContact?: string | null
    emailContact?: string | null
    addressContact?: string | null
    rating?: number | null
    certify?: boolean | null
    productQuantity?: number | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsCreateNestedManyWithoutShopInput
    Users?: UsersCreateNestedOneWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id: string
    userId?: string | null
    realName?: string | null
    shopName?: string | null
    description?: string | null
    phoneContact?: string | null
    emailContact?: string | null
    addressContact?: string | null
    rating?: number | null
    certify?: boolean | null
    productQuantity?: number | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    addressContact?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    certify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUpdateManyWithoutShopNestedInput
    Users?: UsersUpdateOneWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    addressContact?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    certify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id: string
    userId?: string | null
    realName?: string | null
    shopName?: string | null
    description?: string | null
    phoneContact?: string | null
    emailContact?: string | null
    addressContact?: string | null
    rating?: number | null
    certify?: boolean | null
    productQuantity?: number | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ShopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    addressContact?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    certify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    addressContact?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    certify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopReviewCreateInput = {
    id: string
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Transaction?: TransactionCreateNestedOneWithoutShopReviewInput
  }

  export type ShopReviewUncheckedCreateInput = {
    id: string
    transactionId?: string | null
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ShopReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Transaction?: TransactionUpdateOneWithoutShopReviewNestedInput
  }

  export type ShopReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopReviewCreateManyInput = {
    id: string
    transactionId?: string | null
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ShopReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateInput = {
    id: string
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewCreateNestedManyWithoutTransactionInput
    Shipment?: ShipmentCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewCreateNestedManyWithoutTransactionInput
    Cart?: CartCreateNestedOneWithoutTransactionInput
    PaymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionInput
    ShipmentProvider?: ShipmentProviderCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id: string
    cartId?: string | null
    paymentMethod?: string | null
    shipProvider?: string | null
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewUncheckedCreateNestedManyWithoutTransactionInput
    Shipment?: ShipmentUncheckedCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUpdateManyWithoutTransactionNestedInput
    Shipment?: ShipmentUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUpdateManyWithoutTransactionNestedInput
    Cart?: CartUpdateOneWithoutTransactionNestedInput
    PaymentMethod?: PaymentMethodUpdateOneWithoutTransactionNestedInput
    ShipmentProvider?: ShipmentProviderUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    shipProvider?: NullableStringFieldUpdateOperationsInput | string | null
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUncheckedUpdateManyWithoutTransactionNestedInput
    Shipment?: ShipmentUncheckedUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id: string
    cartId?: string | null
    paymentMethod?: string | null
    shipProvider?: string | null
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    shipProvider?: NullableStringFieldUpdateOperationsInput | string | null
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateInput = {
    id: string
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    realName?: string | null
    phoneNumber?: string | null
    dob?: Date | string | null
    sex?: string | null
    avartar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Address?: AddressCreateNestedManyWithoutUsersInput
    Cart?: CartCreateNestedManyWithoutUsersInput
    Shop?: ShopCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id: string
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    realName?: string | null
    phoneNumber?: string | null
    dob?: Date | string | null
    sex?: string | null
    avartar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Address?: AddressUncheckedCreateNestedManyWithoutUsersInput
    Cart?: CartUncheckedCreateNestedManyWithoutUsersInput
    Shop?: ShopUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avartar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateManyWithoutUsersNestedInput
    Cart?: CartUpdateManyWithoutUsersNestedInput
    Shop?: ShopUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avartar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUncheckedUpdateManyWithoutUsersNestedInput
    Cart?: CartUncheckedUpdateManyWithoutUsersNestedInput
    Shop?: ShopUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id: string
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    realName?: string | null
    phoneNumber?: string | null
    dob?: Date | string | null
    sex?: string | null
    avartar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avartar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avartar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    addNote?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    addNote?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    address?: SortOrder
    addNote?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductsNullableScalarRelationFilter = {
    is?: ProductsWhereInput | null
    isNot?: ProductsWhereInput | null
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductCategoriesListRelationFilter = {
    every?: ProductCategoriesWhereInput
    some?: ProductCategoriesWhereInput
    none?: ProductCategoriesWhereInput
  }

  export type ProductCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder
    paymentName?: SortOrder
    description?: SortOrder
    img?: SortOrder
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentName?: SortOrder
    description?: SortOrder
    img?: SortOrder
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder
    paymentName?: SortOrder
    description?: SortOrder
    img?: SortOrder
  }

  export type ProdcutImgsCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProdcutImgsMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProdcutImgsMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: CategoriesWhereInput | null
    isNot?: CategoriesWhereInput | null
  }

  export type ProductCategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductCategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductCategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type ProductReviewCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    review?: SortOrder
    addNote?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductReviewAvgOrderByAggregateInput = {
    review?: SortOrder
  }

  export type ProductReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    review?: SortOrder
    addNote?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductReviewMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    review?: SortOrder
    addNote?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductReviewSumOrderByAggregateInput = {
    review?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type ProdcutImgsListRelationFilter = {
    every?: ProdcutImgsWhereInput
    some?: ProdcutImgsWhereInput
    none?: ProdcutImgsWhereInput
  }

  export type ShopNullableScalarRelationFilter = {
    is?: ShopWhereInput | null
    isNot?: ShopWhereInput | null
  }

  export type ProductVariantsListRelationFilter = {
    every?: ProductVariantsWhereInput
    some?: ProductVariantsWhereInput
    none?: ProductVariantsWhereInput
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdcutImgsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    shopid?: SortOrder
    productName?: SortOrder
    desciption?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    rating?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    shopid?: SortOrder
    productName?: SortOrder
    desciption?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    shopid?: SortOrder
    productName?: SortOrder
    desciption?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    rating?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ProductVariantsCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    vartiantName?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductVariantsMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    vartiantName?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductVariantsMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    vartiantName?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    startDate?: SortOrder
    expected?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    startDate?: SortOrder
    expected?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    startDate?: SortOrder
    expected?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type ShipmentProviderCountOrderByAggregateInput = {
    id?: SortOrder
    providerName?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type ShipmentProviderAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ShipmentProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    providerName?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type ShipmentProviderMinOrderByAggregateInput = {
    id?: SortOrder
    providerName?: SortOrder
    description?: SortOrder
    price?: SortOrder
  }

  export type ShipmentProviderSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    realName?: SortOrder
    shopName?: SortOrder
    description?: SortOrder
    phoneContact?: SortOrder
    emailContact?: SortOrder
    addressContact?: SortOrder
    rating?: SortOrder
    certify?: SortOrder
    productQuantity?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShopAvgOrderByAggregateInput = {
    rating?: SortOrder
    productQuantity?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    realName?: SortOrder
    shopName?: SortOrder
    description?: SortOrder
    phoneContact?: SortOrder
    emailContact?: SortOrder
    addressContact?: SortOrder
    rating?: SortOrder
    certify?: SortOrder
    productQuantity?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    realName?: SortOrder
    shopName?: SortOrder
    description?: SortOrder
    phoneContact?: SortOrder
    emailContact?: SortOrder
    addressContact?: SortOrder
    rating?: SortOrder
    certify?: SortOrder
    productQuantity?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShopSumOrderByAggregateInput = {
    rating?: SortOrder
    productQuantity?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ShopReviewCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    review?: SortOrder
    addNote?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShopReviewAvgOrderByAggregateInput = {
    review?: SortOrder
  }

  export type ShopReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    review?: SortOrder
    addNote?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShopReviewMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    review?: SortOrder
    addNote?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShopReviewSumOrderByAggregateInput = {
    review?: SortOrder
  }

  export type ProductReviewListRelationFilter = {
    every?: ProductReviewWhereInput
    some?: ProductReviewWhereInput
    none?: ProductReviewWhereInput
  }

  export type ShipmentListRelationFilter = {
    every?: ShipmentWhereInput
    some?: ShipmentWhereInput
    none?: ShipmentWhereInput
  }

  export type ShopReviewListRelationFilter = {
    every?: ShopReviewWhereInput
    some?: ShopReviewWhereInput
    none?: ShopReviewWhereInput
  }

  export type CartNullableScalarRelationFilter = {
    is?: CartWhereInput | null
    isNot?: CartWhereInput | null
  }

  export type PaymentMethodNullableScalarRelationFilter = {
    is?: PaymentMethodWhereInput | null
    isNot?: PaymentMethodWhereInput | null
  }

  export type ShipmentProviderNullableScalarRelationFilter = {
    is?: ShipmentProviderWhereInput | null
    isNot?: ShipmentProviderWhereInput | null
  }

  export type ProductReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    paymentMethod?: SortOrder
    shipProvider?: SortOrder
    payPrice?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    payPrice?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    paymentMethod?: SortOrder
    shipProvider?: SortOrder
    payPrice?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    paymentMethod?: SortOrder
    shipProvider?: SortOrder
    payPrice?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    payPrice?: SortOrder
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type ShopListRelationFilter = {
    every?: ShopWhereInput
    some?: ShopWhereInput
    none?: ShopWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    realName?: SortOrder
    phoneNumber?: SortOrder
    dob?: SortOrder
    sex?: SortOrder
    avartar?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    realName?: SortOrder
    phoneNumber?: SortOrder
    dob?: SortOrder
    sex?: SortOrder
    avartar?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    realName?: SortOrder
    phoneNumber?: SortOrder
    dob?: SortOrder
    sex?: SortOrder
    avartar?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersCreateNestedOneWithoutAddressInput = {
    create?: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAddressInput
    connect?: UsersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneWithoutAddressNestedInput = {
    create?: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAddressInput
    upsert?: UsersUpsertWithoutAddressInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAddressInput, UsersUpdateWithoutAddressInput>, UsersUncheckedUpdateWithoutAddressInput>
  }

  export type ProductsCreateNestedOneWithoutCartInput = {
    create?: XOR<ProductsCreateWithoutCartInput, ProductsUncheckedCreateWithoutCartInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCartInput
    connect?: ProductsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutCartInput = {
    create?: XOR<UsersCreateWithoutCartInput, UsersUncheckedCreateWithoutCartInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCartInput
    connect?: UsersWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutCartInput = {
    create?: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput> | TransactionCreateWithoutCartInput[] | TransactionUncheckedCreateWithoutCartInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCartInput | TransactionCreateOrConnectWithoutCartInput[]
    createMany?: TransactionCreateManyCartInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput> | TransactionCreateWithoutCartInput[] | TransactionUncheckedCreateWithoutCartInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCartInput | TransactionCreateOrConnectWithoutCartInput[]
    createMany?: TransactionCreateManyCartInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUpdateOneWithoutCartNestedInput = {
    create?: XOR<ProductsCreateWithoutCartInput, ProductsUncheckedCreateWithoutCartInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCartInput
    upsert?: ProductsUpsertWithoutCartInput
    disconnect?: ProductsWhereInput | boolean
    delete?: ProductsWhereInput | boolean
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutCartInput, ProductsUpdateWithoutCartInput>, ProductsUncheckedUpdateWithoutCartInput>
  }

  export type UsersUpdateOneWithoutCartNestedInput = {
    create?: XOR<UsersCreateWithoutCartInput, UsersUncheckedCreateWithoutCartInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCartInput
    upsert?: UsersUpsertWithoutCartInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCartInput, UsersUpdateWithoutCartInput>, UsersUncheckedUpdateWithoutCartInput>
  }

  export type TransactionUpdateManyWithoutCartNestedInput = {
    create?: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput> | TransactionCreateWithoutCartInput[] | TransactionUncheckedCreateWithoutCartInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCartInput | TransactionCreateOrConnectWithoutCartInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCartInput | TransactionUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: TransactionCreateManyCartInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCartInput | TransactionUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCartInput | TransactionUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput> | TransactionCreateWithoutCartInput[] | TransactionUncheckedCreateWithoutCartInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCartInput | TransactionCreateOrConnectWithoutCartInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCartInput | TransactionUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: TransactionCreateManyCartInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCartInput | TransactionUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCartInput | TransactionUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ProductCategoriesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput> | ProductCategoriesCreateWithoutCategoriesInput[] | ProductCategoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutCategoriesInput | ProductCategoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductCategoriesCreateManyCategoriesInputEnvelope
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
  }

  export type ProductCategoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput> | ProductCategoriesCreateWithoutCategoriesInput[] | ProductCategoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutCategoriesInput | ProductCategoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductCategoriesCreateManyCategoriesInputEnvelope
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
  }

  export type ProductCategoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput> | ProductCategoriesCreateWithoutCategoriesInput[] | ProductCategoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutCategoriesInput | ProductCategoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductCategoriesUpsertWithWhereUniqueWithoutCategoriesInput | ProductCategoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductCategoriesCreateManyCategoriesInputEnvelope
    set?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    disconnect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    delete?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    update?: ProductCategoriesUpdateWithWhereUniqueWithoutCategoriesInput | ProductCategoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductCategoriesUpdateManyWithWhereWithoutCategoriesInput | ProductCategoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[]
  }

  export type ProductCategoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput> | ProductCategoriesCreateWithoutCategoriesInput[] | ProductCategoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutCategoriesInput | ProductCategoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductCategoriesUpsertWithWhereUniqueWithoutCategoriesInput | ProductCategoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductCategoriesCreateManyCategoriesInputEnvelope
    set?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    disconnect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    delete?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    update?: ProductCategoriesUpdateWithWhereUniqueWithoutCategoriesInput | ProductCategoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductCategoriesUpdateManyWithWhereWithoutCategoriesInput | ProductCategoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput> | TransactionCreateWithoutPaymentMethodInput[] | TransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentMethodInput | TransactionCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPaymentMethodInput = {
    create?: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput> | TransactionCreateWithoutPaymentMethodInput[] | TransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentMethodInput | TransactionCreateOrConnectWithoutPaymentMethodInput[]
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput> | TransactionCreateWithoutPaymentMethodInput[] | TransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentMethodInput | TransactionCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput | TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput | TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPaymentMethodInput | TransactionUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput = {
    create?: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput> | TransactionCreateWithoutPaymentMethodInput[] | TransactionUncheckedCreateWithoutPaymentMethodInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentMethodInput | TransactionCreateOrConnectWithoutPaymentMethodInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput | TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput[]
    createMany?: TransactionCreateManyPaymentMethodInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput | TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPaymentMethodInput | TransactionUpdateManyWithWhereWithoutPaymentMethodInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutProdcutImgsInput = {
    create?: XOR<ProductsCreateWithoutProdcutImgsInput, ProductsUncheckedCreateWithoutProdcutImgsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProdcutImgsInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsUpdateOneWithoutProdcutImgsNestedInput = {
    create?: XOR<ProductsCreateWithoutProdcutImgsInput, ProductsUncheckedCreateWithoutProdcutImgsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProdcutImgsInput
    upsert?: ProductsUpsertWithoutProdcutImgsInput
    disconnect?: ProductsWhereInput | boolean
    delete?: ProductsWhereInput | boolean
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProdcutImgsInput, ProductsUpdateWithoutProdcutImgsInput>, ProductsUncheckedUpdateWithoutProdcutImgsInput>
  }

  export type CategoriesCreateNestedOneWithoutProductCategoriesInput = {
    create?: XOR<CategoriesCreateWithoutProductCategoriesInput, CategoriesUncheckedCreateWithoutProductCategoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductCategoriesInput
    connect?: CategoriesWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutProductCategoriesInput = {
    create?: XOR<ProductsCreateWithoutProductCategoriesInput, ProductsUncheckedCreateWithoutProductCategoriesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductCategoriesInput
    connect?: ProductsWhereUniqueInput
  }

  export type CategoriesUpdateOneWithoutProductCategoriesNestedInput = {
    create?: XOR<CategoriesCreateWithoutProductCategoriesInput, CategoriesUncheckedCreateWithoutProductCategoriesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductCategoriesInput
    upsert?: CategoriesUpsertWithoutProductCategoriesInput
    disconnect?: CategoriesWhereInput | boolean
    delete?: CategoriesWhereInput | boolean
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProductCategoriesInput, CategoriesUpdateWithoutProductCategoriesInput>, CategoriesUncheckedUpdateWithoutProductCategoriesInput>
  }

  export type ProductsUpdateOneWithoutProductCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutProductCategoriesInput, ProductsUncheckedCreateWithoutProductCategoriesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductCategoriesInput
    upsert?: ProductsUpsertWithoutProductCategoriesInput
    disconnect?: ProductsWhereInput | boolean
    delete?: ProductsWhereInput | boolean
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProductCategoriesInput, ProductsUpdateWithoutProductCategoriesInput>, ProductsUncheckedUpdateWithoutProductCategoriesInput>
  }

  export type TransactionCreateNestedOneWithoutProductReviewInput = {
    create?: XOR<TransactionCreateWithoutProductReviewInput, TransactionUncheckedCreateWithoutProductReviewInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutProductReviewInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUpdateOneWithoutProductReviewNestedInput = {
    create?: XOR<TransactionCreateWithoutProductReviewInput, TransactionUncheckedCreateWithoutProductReviewInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutProductReviewInput
    upsert?: TransactionUpsertWithoutProductReviewInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutProductReviewInput, TransactionUpdateWithoutProductReviewInput>, TransactionUncheckedUpdateWithoutProductReviewInput>
  }

  export type CartCreateNestedManyWithoutProductsInput = {
    create?: XOR<CartCreateWithoutProductsInput, CartUncheckedCreateWithoutProductsInput> | CartCreateWithoutProductsInput[] | CartUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductsInput | CartCreateOrConnectWithoutProductsInput[]
    createMany?: CartCreateManyProductsInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type ProdcutImgsCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProdcutImgsCreateWithoutProductsInput, ProdcutImgsUncheckedCreateWithoutProductsInput> | ProdcutImgsCreateWithoutProductsInput[] | ProdcutImgsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProdcutImgsCreateOrConnectWithoutProductsInput | ProdcutImgsCreateOrConnectWithoutProductsInput[]
    createMany?: ProdcutImgsCreateManyProductsInputEnvelope
    connect?: ProdcutImgsWhereUniqueInput | ProdcutImgsWhereUniqueInput[]
  }

  export type ProductCategoriesCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput> | ProductCategoriesCreateWithoutProductsInput[] | ProductCategoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutProductsInput | ProductCategoriesCreateOrConnectWithoutProductsInput[]
    createMany?: ProductCategoriesCreateManyProductsInputEnvelope
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
  }

  export type ShopCreateNestedOneWithoutProductsInput = {
    create?: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutProductsInput
    connect?: ShopWhereUniqueInput
  }

  export type ProductVariantsCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductVariantsCreateWithoutProductsInput, ProductVariantsUncheckedCreateWithoutProductsInput> | ProductVariantsCreateWithoutProductsInput[] | ProductVariantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutProductsInput | ProductVariantsCreateOrConnectWithoutProductsInput[]
    createMany?: ProductVariantsCreateManyProductsInputEnvelope
    connect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<CartCreateWithoutProductsInput, CartUncheckedCreateWithoutProductsInput> | CartCreateWithoutProductsInput[] | CartUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductsInput | CartCreateOrConnectWithoutProductsInput[]
    createMany?: CartCreateManyProductsInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type ProdcutImgsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProdcutImgsCreateWithoutProductsInput, ProdcutImgsUncheckedCreateWithoutProductsInput> | ProdcutImgsCreateWithoutProductsInput[] | ProdcutImgsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProdcutImgsCreateOrConnectWithoutProductsInput | ProdcutImgsCreateOrConnectWithoutProductsInput[]
    createMany?: ProdcutImgsCreateManyProductsInputEnvelope
    connect?: ProdcutImgsWhereUniqueInput | ProdcutImgsWhereUniqueInput[]
  }

  export type ProductCategoriesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput> | ProductCategoriesCreateWithoutProductsInput[] | ProductCategoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutProductsInput | ProductCategoriesCreateOrConnectWithoutProductsInput[]
    createMany?: ProductCategoriesCreateManyProductsInputEnvelope
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
  }

  export type ProductVariantsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ProductVariantsCreateWithoutProductsInput, ProductVariantsUncheckedCreateWithoutProductsInput> | ProductVariantsCreateWithoutProductsInput[] | ProductVariantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutProductsInput | ProductVariantsCreateOrConnectWithoutProductsInput[]
    createMany?: ProductVariantsCreateManyProductsInputEnvelope
    connect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CartUpdateManyWithoutProductsNestedInput = {
    create?: XOR<CartCreateWithoutProductsInput, CartUncheckedCreateWithoutProductsInput> | CartCreateWithoutProductsInput[] | CartUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductsInput | CartCreateOrConnectWithoutProductsInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutProductsInput | CartUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: CartCreateManyProductsInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutProductsInput | CartUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: CartUpdateManyWithWhereWithoutProductsInput | CartUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type ProdcutImgsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProdcutImgsCreateWithoutProductsInput, ProdcutImgsUncheckedCreateWithoutProductsInput> | ProdcutImgsCreateWithoutProductsInput[] | ProdcutImgsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProdcutImgsCreateOrConnectWithoutProductsInput | ProdcutImgsCreateOrConnectWithoutProductsInput[]
    upsert?: ProdcutImgsUpsertWithWhereUniqueWithoutProductsInput | ProdcutImgsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProdcutImgsCreateManyProductsInputEnvelope
    set?: ProdcutImgsWhereUniqueInput | ProdcutImgsWhereUniqueInput[]
    disconnect?: ProdcutImgsWhereUniqueInput | ProdcutImgsWhereUniqueInput[]
    delete?: ProdcutImgsWhereUniqueInput | ProdcutImgsWhereUniqueInput[]
    connect?: ProdcutImgsWhereUniqueInput | ProdcutImgsWhereUniqueInput[]
    update?: ProdcutImgsUpdateWithWhereUniqueWithoutProductsInput | ProdcutImgsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProdcutImgsUpdateManyWithWhereWithoutProductsInput | ProdcutImgsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProdcutImgsScalarWhereInput | ProdcutImgsScalarWhereInput[]
  }

  export type ProductCategoriesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput> | ProductCategoriesCreateWithoutProductsInput[] | ProductCategoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutProductsInput | ProductCategoriesCreateOrConnectWithoutProductsInput[]
    upsert?: ProductCategoriesUpsertWithWhereUniqueWithoutProductsInput | ProductCategoriesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductCategoriesCreateManyProductsInputEnvelope
    set?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    disconnect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    delete?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    update?: ProductCategoriesUpdateWithWhereUniqueWithoutProductsInput | ProductCategoriesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductCategoriesUpdateManyWithWhereWithoutProductsInput | ProductCategoriesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[]
  }

  export type ShopUpdateOneWithoutProductsNestedInput = {
    create?: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutProductsInput
    upsert?: ShopUpsertWithoutProductsInput
    disconnect?: ShopWhereInput | boolean
    delete?: ShopWhereInput | boolean
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutProductsInput, ShopUpdateWithoutProductsInput>, ShopUncheckedUpdateWithoutProductsInput>
  }

  export type ProductVariantsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductVariantsCreateWithoutProductsInput, ProductVariantsUncheckedCreateWithoutProductsInput> | ProductVariantsCreateWithoutProductsInput[] | ProductVariantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutProductsInput | ProductVariantsCreateOrConnectWithoutProductsInput[]
    upsert?: ProductVariantsUpsertWithWhereUniqueWithoutProductsInput | ProductVariantsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductVariantsCreateManyProductsInputEnvelope
    set?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    disconnect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    delete?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    connect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    update?: ProductVariantsUpdateWithWhereUniqueWithoutProductsInput | ProductVariantsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductVariantsUpdateManyWithWhereWithoutProductsInput | ProductVariantsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductVariantsScalarWhereInput | ProductVariantsScalarWhereInput[]
  }

  export type CartUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<CartCreateWithoutProductsInput, CartUncheckedCreateWithoutProductsInput> | CartCreateWithoutProductsInput[] | CartUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductsInput | CartCreateOrConnectWithoutProductsInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutProductsInput | CartUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: CartCreateManyProductsInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutProductsInput | CartUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: CartUpdateManyWithWhereWithoutProductsInput | CartUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type ProdcutImgsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProdcutImgsCreateWithoutProductsInput, ProdcutImgsUncheckedCreateWithoutProductsInput> | ProdcutImgsCreateWithoutProductsInput[] | ProdcutImgsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProdcutImgsCreateOrConnectWithoutProductsInput | ProdcutImgsCreateOrConnectWithoutProductsInput[]
    upsert?: ProdcutImgsUpsertWithWhereUniqueWithoutProductsInput | ProdcutImgsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProdcutImgsCreateManyProductsInputEnvelope
    set?: ProdcutImgsWhereUniqueInput | ProdcutImgsWhereUniqueInput[]
    disconnect?: ProdcutImgsWhereUniqueInput | ProdcutImgsWhereUniqueInput[]
    delete?: ProdcutImgsWhereUniqueInput | ProdcutImgsWhereUniqueInput[]
    connect?: ProdcutImgsWhereUniqueInput | ProdcutImgsWhereUniqueInput[]
    update?: ProdcutImgsUpdateWithWhereUniqueWithoutProductsInput | ProdcutImgsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProdcutImgsUpdateManyWithWhereWithoutProductsInput | ProdcutImgsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProdcutImgsScalarWhereInput | ProdcutImgsScalarWhereInput[]
  }

  export type ProductCategoriesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput> | ProductCategoriesCreateWithoutProductsInput[] | ProductCategoriesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductCategoriesCreateOrConnectWithoutProductsInput | ProductCategoriesCreateOrConnectWithoutProductsInput[]
    upsert?: ProductCategoriesUpsertWithWhereUniqueWithoutProductsInput | ProductCategoriesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductCategoriesCreateManyProductsInputEnvelope
    set?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    disconnect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    delete?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    connect?: ProductCategoriesWhereUniqueInput | ProductCategoriesWhereUniqueInput[]
    update?: ProductCategoriesUpdateWithWhereUniqueWithoutProductsInput | ProductCategoriesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductCategoriesUpdateManyWithWhereWithoutProductsInput | ProductCategoriesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[]
  }

  export type ProductVariantsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ProductVariantsCreateWithoutProductsInput, ProductVariantsUncheckedCreateWithoutProductsInput> | ProductVariantsCreateWithoutProductsInput[] | ProductVariantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutProductsInput | ProductVariantsCreateOrConnectWithoutProductsInput[]
    upsert?: ProductVariantsUpsertWithWhereUniqueWithoutProductsInput | ProductVariantsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ProductVariantsCreateManyProductsInputEnvelope
    set?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    disconnect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    delete?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    connect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    update?: ProductVariantsUpdateWithWhereUniqueWithoutProductsInput | ProductVariantsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ProductVariantsUpdateManyWithWhereWithoutProductsInput | ProductVariantsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ProductVariantsScalarWhereInput | ProductVariantsScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutProductVariantsInput = {
    create?: XOR<ProductsCreateWithoutProductVariantsInput, ProductsUncheckedCreateWithoutProductVariantsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductVariantsInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsUpdateOneWithoutProductVariantsNestedInput = {
    create?: XOR<ProductsCreateWithoutProductVariantsInput, ProductsUncheckedCreateWithoutProductVariantsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductVariantsInput
    upsert?: ProductsUpsertWithoutProductVariantsInput
    disconnect?: ProductsWhereInput | boolean
    delete?: ProductsWhereInput | boolean
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProductVariantsInput, ProductsUpdateWithoutProductVariantsInput>, ProductsUncheckedUpdateWithoutProductVariantsInput>
  }

  export type TransactionCreateNestedOneWithoutShipmentInput = {
    create?: XOR<TransactionCreateWithoutShipmentInput, TransactionUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutShipmentInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUpdateOneWithoutShipmentNestedInput = {
    create?: XOR<TransactionCreateWithoutShipmentInput, TransactionUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutShipmentInput
    upsert?: TransactionUpsertWithoutShipmentInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutShipmentInput, TransactionUpdateWithoutShipmentInput>, TransactionUncheckedUpdateWithoutShipmentInput>
  }

  export type TransactionCreateNestedManyWithoutShipmentProviderInput = {
    create?: XOR<TransactionCreateWithoutShipmentProviderInput, TransactionUncheckedCreateWithoutShipmentProviderInput> | TransactionCreateWithoutShipmentProviderInput[] | TransactionUncheckedCreateWithoutShipmentProviderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutShipmentProviderInput | TransactionCreateOrConnectWithoutShipmentProviderInput[]
    createMany?: TransactionCreateManyShipmentProviderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutShipmentProviderInput = {
    create?: XOR<TransactionCreateWithoutShipmentProviderInput, TransactionUncheckedCreateWithoutShipmentProviderInput> | TransactionCreateWithoutShipmentProviderInput[] | TransactionUncheckedCreateWithoutShipmentProviderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutShipmentProviderInput | TransactionCreateOrConnectWithoutShipmentProviderInput[]
    createMany?: TransactionCreateManyShipmentProviderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutShipmentProviderNestedInput = {
    create?: XOR<TransactionCreateWithoutShipmentProviderInput, TransactionUncheckedCreateWithoutShipmentProviderInput> | TransactionCreateWithoutShipmentProviderInput[] | TransactionUncheckedCreateWithoutShipmentProviderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutShipmentProviderInput | TransactionCreateOrConnectWithoutShipmentProviderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutShipmentProviderInput | TransactionUpsertWithWhereUniqueWithoutShipmentProviderInput[]
    createMany?: TransactionCreateManyShipmentProviderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutShipmentProviderInput | TransactionUpdateWithWhereUniqueWithoutShipmentProviderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutShipmentProviderInput | TransactionUpdateManyWithWhereWithoutShipmentProviderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutShipmentProviderNestedInput = {
    create?: XOR<TransactionCreateWithoutShipmentProviderInput, TransactionUncheckedCreateWithoutShipmentProviderInput> | TransactionCreateWithoutShipmentProviderInput[] | TransactionUncheckedCreateWithoutShipmentProviderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutShipmentProviderInput | TransactionCreateOrConnectWithoutShipmentProviderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutShipmentProviderInput | TransactionUpsertWithWhereUniqueWithoutShipmentProviderInput[]
    createMany?: TransactionCreateManyShipmentProviderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutShipmentProviderInput | TransactionUpdateWithWhereUniqueWithoutShipmentProviderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutShipmentProviderInput | TransactionUpdateManyWithWhereWithoutShipmentProviderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductsCreateWithoutShopInput, ProductsUncheckedCreateWithoutShopInput> | ProductsCreateWithoutShopInput[] | ProductsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutShopInput | ProductsCreateOrConnectWithoutShopInput[]
    createMany?: ProductsCreateManyShopInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutShopInput = {
    create?: XOR<UsersCreateWithoutShopInput, UsersUncheckedCreateWithoutShopInput>
    connectOrCreate?: UsersCreateOrConnectWithoutShopInput
    connect?: UsersWhereUniqueInput
  }

  export type ProductsUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductsCreateWithoutShopInput, ProductsUncheckedCreateWithoutShopInput> | ProductsCreateWithoutShopInput[] | ProductsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutShopInput | ProductsCreateOrConnectWithoutShopInput[]
    createMany?: ProductsCreateManyShopInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ProductsUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductsCreateWithoutShopInput, ProductsUncheckedCreateWithoutShopInput> | ProductsCreateWithoutShopInput[] | ProductsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutShopInput | ProductsCreateOrConnectWithoutShopInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutShopInput | ProductsUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductsCreateManyShopInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutShopInput | ProductsUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutShopInput | ProductsUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type UsersUpdateOneWithoutShopNestedInput = {
    create?: XOR<UsersCreateWithoutShopInput, UsersUncheckedCreateWithoutShopInput>
    connectOrCreate?: UsersCreateOrConnectWithoutShopInput
    upsert?: UsersUpsertWithoutShopInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutShopInput, UsersUpdateWithoutShopInput>, UsersUncheckedUpdateWithoutShopInput>
  }

  export type ProductsUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductsCreateWithoutShopInput, ProductsUncheckedCreateWithoutShopInput> | ProductsCreateWithoutShopInput[] | ProductsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutShopInput | ProductsCreateOrConnectWithoutShopInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutShopInput | ProductsUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductsCreateManyShopInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutShopInput | ProductsUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutShopInput | ProductsUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type TransactionCreateNestedOneWithoutShopReviewInput = {
    create?: XOR<TransactionCreateWithoutShopReviewInput, TransactionUncheckedCreateWithoutShopReviewInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutShopReviewInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUpdateOneWithoutShopReviewNestedInput = {
    create?: XOR<TransactionCreateWithoutShopReviewInput, TransactionUncheckedCreateWithoutShopReviewInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutShopReviewInput
    upsert?: TransactionUpsertWithoutShopReviewInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutShopReviewInput, TransactionUpdateWithoutShopReviewInput>, TransactionUncheckedUpdateWithoutShopReviewInput>
  }

  export type ProductReviewCreateNestedManyWithoutTransactionInput = {
    create?: XOR<ProductReviewCreateWithoutTransactionInput, ProductReviewUncheckedCreateWithoutTransactionInput> | ProductReviewCreateWithoutTransactionInput[] | ProductReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutTransactionInput | ProductReviewCreateOrConnectWithoutTransactionInput[]
    createMany?: ProductReviewCreateManyTransactionInputEnvelope
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutTransactionInput = {
    create?: XOR<ShipmentCreateWithoutTransactionInput, ShipmentUncheckedCreateWithoutTransactionInput> | ShipmentCreateWithoutTransactionInput[] | ShipmentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutTransactionInput | ShipmentCreateOrConnectWithoutTransactionInput[]
    createMany?: ShipmentCreateManyTransactionInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShopReviewCreateNestedManyWithoutTransactionInput = {
    create?: XOR<ShopReviewCreateWithoutTransactionInput, ShopReviewUncheckedCreateWithoutTransactionInput> | ShopReviewCreateWithoutTransactionInput[] | ShopReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ShopReviewCreateOrConnectWithoutTransactionInput | ShopReviewCreateOrConnectWithoutTransactionInput[]
    createMany?: ShopReviewCreateManyTransactionInputEnvelope
    connect?: ShopReviewWhereUniqueInput | ShopReviewWhereUniqueInput[]
  }

  export type CartCreateNestedOneWithoutTransactionInput = {
    create?: XOR<CartCreateWithoutTransactionInput, CartUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CartCreateOrConnectWithoutTransactionInput
    connect?: CartWhereUniqueInput
  }

  export type PaymentMethodCreateNestedOneWithoutTransactionInput = {
    create?: XOR<PaymentMethodCreateWithoutTransactionInput, PaymentMethodUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutTransactionInput
    connect?: PaymentMethodWhereUniqueInput
  }

  export type ShipmentProviderCreateNestedOneWithoutTransactionInput = {
    create?: XOR<ShipmentProviderCreateWithoutTransactionInput, ShipmentProviderUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: ShipmentProviderCreateOrConnectWithoutTransactionInput
    connect?: ShipmentProviderWhereUniqueInput
  }

  export type ProductReviewUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<ProductReviewCreateWithoutTransactionInput, ProductReviewUncheckedCreateWithoutTransactionInput> | ProductReviewCreateWithoutTransactionInput[] | ProductReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutTransactionInput | ProductReviewCreateOrConnectWithoutTransactionInput[]
    createMany?: ProductReviewCreateManyTransactionInputEnvelope
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<ShipmentCreateWithoutTransactionInput, ShipmentUncheckedCreateWithoutTransactionInput> | ShipmentCreateWithoutTransactionInput[] | ShipmentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutTransactionInput | ShipmentCreateOrConnectWithoutTransactionInput[]
    createMany?: ShipmentCreateManyTransactionInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShopReviewUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<ShopReviewCreateWithoutTransactionInput, ShopReviewUncheckedCreateWithoutTransactionInput> | ShopReviewCreateWithoutTransactionInput[] | ShopReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ShopReviewCreateOrConnectWithoutTransactionInput | ShopReviewCreateOrConnectWithoutTransactionInput[]
    createMany?: ShopReviewCreateManyTransactionInputEnvelope
    connect?: ShopReviewWhereUniqueInput | ShopReviewWhereUniqueInput[]
  }

  export type ProductReviewUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<ProductReviewCreateWithoutTransactionInput, ProductReviewUncheckedCreateWithoutTransactionInput> | ProductReviewCreateWithoutTransactionInput[] | ProductReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutTransactionInput | ProductReviewCreateOrConnectWithoutTransactionInput[]
    upsert?: ProductReviewUpsertWithWhereUniqueWithoutTransactionInput | ProductReviewUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: ProductReviewCreateManyTransactionInputEnvelope
    set?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    disconnect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    delete?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    update?: ProductReviewUpdateWithWhereUniqueWithoutTransactionInput | ProductReviewUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: ProductReviewUpdateManyWithWhereWithoutTransactionInput | ProductReviewUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: ProductReviewScalarWhereInput | ProductReviewScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<ShipmentCreateWithoutTransactionInput, ShipmentUncheckedCreateWithoutTransactionInput> | ShipmentCreateWithoutTransactionInput[] | ShipmentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutTransactionInput | ShipmentCreateOrConnectWithoutTransactionInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutTransactionInput | ShipmentUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: ShipmentCreateManyTransactionInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutTransactionInput | ShipmentUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutTransactionInput | ShipmentUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShopReviewUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<ShopReviewCreateWithoutTransactionInput, ShopReviewUncheckedCreateWithoutTransactionInput> | ShopReviewCreateWithoutTransactionInput[] | ShopReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ShopReviewCreateOrConnectWithoutTransactionInput | ShopReviewCreateOrConnectWithoutTransactionInput[]
    upsert?: ShopReviewUpsertWithWhereUniqueWithoutTransactionInput | ShopReviewUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: ShopReviewCreateManyTransactionInputEnvelope
    set?: ShopReviewWhereUniqueInput | ShopReviewWhereUniqueInput[]
    disconnect?: ShopReviewWhereUniqueInput | ShopReviewWhereUniqueInput[]
    delete?: ShopReviewWhereUniqueInput | ShopReviewWhereUniqueInput[]
    connect?: ShopReviewWhereUniqueInput | ShopReviewWhereUniqueInput[]
    update?: ShopReviewUpdateWithWhereUniqueWithoutTransactionInput | ShopReviewUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: ShopReviewUpdateManyWithWhereWithoutTransactionInput | ShopReviewUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: ShopReviewScalarWhereInput | ShopReviewScalarWhereInput[]
  }

  export type CartUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<CartCreateWithoutTransactionInput, CartUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CartCreateOrConnectWithoutTransactionInput
    upsert?: CartUpsertWithoutTransactionInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutTransactionInput, CartUpdateWithoutTransactionInput>, CartUncheckedUpdateWithoutTransactionInput>
  }

  export type PaymentMethodUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutTransactionInput, PaymentMethodUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutTransactionInput
    upsert?: PaymentMethodUpsertWithoutTransactionInput
    disconnect?: PaymentMethodWhereInput | boolean
    delete?: PaymentMethodWhereInput | boolean
    connect?: PaymentMethodWhereUniqueInput
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutTransactionInput, PaymentMethodUpdateWithoutTransactionInput>, PaymentMethodUncheckedUpdateWithoutTransactionInput>
  }

  export type ShipmentProviderUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<ShipmentProviderCreateWithoutTransactionInput, ShipmentProviderUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: ShipmentProviderCreateOrConnectWithoutTransactionInput
    upsert?: ShipmentProviderUpsertWithoutTransactionInput
    disconnect?: ShipmentProviderWhereInput | boolean
    delete?: ShipmentProviderWhereInput | boolean
    connect?: ShipmentProviderWhereUniqueInput
    update?: XOR<XOR<ShipmentProviderUpdateToOneWithWhereWithoutTransactionInput, ShipmentProviderUpdateWithoutTransactionInput>, ShipmentProviderUncheckedUpdateWithoutTransactionInput>
  }

  export type ProductReviewUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<ProductReviewCreateWithoutTransactionInput, ProductReviewUncheckedCreateWithoutTransactionInput> | ProductReviewCreateWithoutTransactionInput[] | ProductReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ProductReviewCreateOrConnectWithoutTransactionInput | ProductReviewCreateOrConnectWithoutTransactionInput[]
    upsert?: ProductReviewUpsertWithWhereUniqueWithoutTransactionInput | ProductReviewUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: ProductReviewCreateManyTransactionInputEnvelope
    set?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    disconnect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    delete?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    connect?: ProductReviewWhereUniqueInput | ProductReviewWhereUniqueInput[]
    update?: ProductReviewUpdateWithWhereUniqueWithoutTransactionInput | ProductReviewUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: ProductReviewUpdateManyWithWhereWithoutTransactionInput | ProductReviewUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: ProductReviewScalarWhereInput | ProductReviewScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<ShipmentCreateWithoutTransactionInput, ShipmentUncheckedCreateWithoutTransactionInput> | ShipmentCreateWithoutTransactionInput[] | ShipmentUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutTransactionInput | ShipmentCreateOrConnectWithoutTransactionInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutTransactionInput | ShipmentUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: ShipmentCreateManyTransactionInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutTransactionInput | ShipmentUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutTransactionInput | ShipmentUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShopReviewUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<ShopReviewCreateWithoutTransactionInput, ShopReviewUncheckedCreateWithoutTransactionInput> | ShopReviewCreateWithoutTransactionInput[] | ShopReviewUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: ShopReviewCreateOrConnectWithoutTransactionInput | ShopReviewCreateOrConnectWithoutTransactionInput[]
    upsert?: ShopReviewUpsertWithWhereUniqueWithoutTransactionInput | ShopReviewUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: ShopReviewCreateManyTransactionInputEnvelope
    set?: ShopReviewWhereUniqueInput | ShopReviewWhereUniqueInput[]
    disconnect?: ShopReviewWhereUniqueInput | ShopReviewWhereUniqueInput[]
    delete?: ShopReviewWhereUniqueInput | ShopReviewWhereUniqueInput[]
    connect?: ShopReviewWhereUniqueInput | ShopReviewWhereUniqueInput[]
    update?: ShopReviewUpdateWithWhereUniqueWithoutTransactionInput | ShopReviewUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: ShopReviewUpdateManyWithWhereWithoutTransactionInput | ShopReviewUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: ShopReviewScalarWhereInput | ShopReviewScalarWhereInput[]
  }

  export type AddressCreateNestedManyWithoutUsersInput = {
    create?: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput> | AddressCreateWithoutUsersInput[] | AddressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUsersInput | AddressCreateOrConnectWithoutUsersInput[]
    createMany?: AddressCreateManyUsersInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type CartCreateNestedManyWithoutUsersInput = {
    create?: XOR<CartCreateWithoutUsersInput, CartUncheckedCreateWithoutUsersInput> | CartCreateWithoutUsersInput[] | CartUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUsersInput | CartCreateOrConnectWithoutUsersInput[]
    createMany?: CartCreateManyUsersInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type ShopCreateNestedManyWithoutUsersInput = {
    create?: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput> | ShopCreateWithoutUsersInput[] | ShopUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutUsersInput | ShopCreateOrConnectWithoutUsersInput[]
    createMany?: ShopCreateManyUsersInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput> | AddressCreateWithoutUsersInput[] | AddressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUsersInput | AddressCreateOrConnectWithoutUsersInput[]
    createMany?: AddressCreateManyUsersInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CartCreateWithoutUsersInput, CartUncheckedCreateWithoutUsersInput> | CartCreateWithoutUsersInput[] | CartUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUsersInput | CartCreateOrConnectWithoutUsersInput[]
    createMany?: CartCreateManyUsersInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type ShopUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput> | ShopCreateWithoutUsersInput[] | ShopUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutUsersInput | ShopCreateOrConnectWithoutUsersInput[]
    createMany?: ShopCreateManyUsersInputEnvelope
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
  }

  export type AddressUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput> | AddressCreateWithoutUsersInput[] | AddressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUsersInput | AddressCreateOrConnectWithoutUsersInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUsersInput | AddressUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: AddressCreateManyUsersInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUsersInput | AddressUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUsersInput | AddressUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type CartUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CartCreateWithoutUsersInput, CartUncheckedCreateWithoutUsersInput> | CartCreateWithoutUsersInput[] | CartUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUsersInput | CartCreateOrConnectWithoutUsersInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUsersInput | CartUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CartCreateManyUsersInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUsersInput | CartUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUsersInput | CartUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type ShopUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput> | ShopCreateWithoutUsersInput[] | ShopUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutUsersInput | ShopCreateOrConnectWithoutUsersInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutUsersInput | ShopUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ShopCreateManyUsersInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutUsersInput | ShopUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutUsersInput | ShopUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput> | AddressCreateWithoutUsersInput[] | AddressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUsersInput | AddressCreateOrConnectWithoutUsersInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUsersInput | AddressUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: AddressCreateManyUsersInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUsersInput | AddressUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUsersInput | AddressUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type CartUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CartCreateWithoutUsersInput, CartUncheckedCreateWithoutUsersInput> | CartCreateWithoutUsersInput[] | CartUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUsersInput | CartCreateOrConnectWithoutUsersInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUsersInput | CartUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CartCreateManyUsersInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUsersInput | CartUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUsersInput | CartUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type ShopUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput> | ShopCreateWithoutUsersInput[] | ShopUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ShopCreateOrConnectWithoutUsersInput | ShopCreateOrConnectWithoutUsersInput[]
    upsert?: ShopUpsertWithWhereUniqueWithoutUsersInput | ShopUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ShopCreateManyUsersInputEnvelope
    set?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    disconnect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    delete?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    connect?: ShopWhereUniqueInput | ShopWhereUniqueInput[]
    update?: ShopUpdateWithWhereUniqueWithoutUsersInput | ShopUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ShopUpdateManyWithWhereWithoutUsersInput | ShopUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ShopScalarWhereInput | ShopScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UsersCreateWithoutAddressInput = {
    id: string
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    realName?: string | null
    phoneNumber?: string | null
    dob?: Date | string | null
    sex?: string | null
    avartar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartCreateNestedManyWithoutUsersInput
    Shop?: ShopCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutAddressInput = {
    id: string
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    realName?: string | null
    phoneNumber?: string | null
    dob?: Date | string | null
    sex?: string | null
    avartar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartUncheckedCreateNestedManyWithoutUsersInput
    Shop?: ShopUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutAddressInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
  }

  export type UsersUpsertWithoutAddressInput = {
    update: XOR<UsersUpdateWithoutAddressInput, UsersUncheckedUpdateWithoutAddressInput>
    create: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAddressInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAddressInput, UsersUncheckedUpdateWithoutAddressInput>
  }

  export type UsersUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avartar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUpdateManyWithoutUsersNestedInput
    Shop?: ShopUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avartar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUncheckedUpdateManyWithoutUsersNestedInput
    Shop?: ShopUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ProductsCreateWithoutCartInput = {
    id: string
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProdcutImgs?: ProdcutImgsCreateNestedManyWithoutProductsInput
    ProductCategories?: ProductCategoriesCreateNestedManyWithoutProductsInput
    Shop?: ShopCreateNestedOneWithoutProductsInput
    ProductVariants?: ProductVariantsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutCartInput = {
    id: string
    shopid?: string | null
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProdcutImgs?: ProdcutImgsUncheckedCreateNestedManyWithoutProductsInput
    ProductCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutProductsInput
    ProductVariants?: ProductVariantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutCartInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCartInput, ProductsUncheckedCreateWithoutCartInput>
  }

  export type UsersCreateWithoutCartInput = {
    id: string
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    realName?: string | null
    phoneNumber?: string | null
    dob?: Date | string | null
    sex?: string | null
    avartar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Address?: AddressCreateNestedManyWithoutUsersInput
    Shop?: ShopCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCartInput = {
    id: string
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    realName?: string | null
    phoneNumber?: string | null
    dob?: Date | string | null
    sex?: string | null
    avartar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Address?: AddressUncheckedCreateNestedManyWithoutUsersInput
    Shop?: ShopUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutCartInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCartInput, UsersUncheckedCreateWithoutCartInput>
  }

  export type TransactionCreateWithoutCartInput = {
    id: string
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewCreateNestedManyWithoutTransactionInput
    Shipment?: ShipmentCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewCreateNestedManyWithoutTransactionInput
    PaymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionInput
    ShipmentProvider?: ShipmentProviderCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCartInput = {
    id: string
    paymentMethod?: string | null
    shipProvider?: string | null
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewUncheckedCreateNestedManyWithoutTransactionInput
    Shipment?: ShipmentUncheckedCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutCartInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput>
  }

  export type TransactionCreateManyCartInputEnvelope = {
    data: TransactionCreateManyCartInput | TransactionCreateManyCartInput[]
  }

  export type ProductsUpsertWithoutCartInput = {
    update: XOR<ProductsUpdateWithoutCartInput, ProductsUncheckedUpdateWithoutCartInput>
    create: XOR<ProductsCreateWithoutCartInput, ProductsUncheckedCreateWithoutCartInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutCartInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutCartInput, ProductsUncheckedUpdateWithoutCartInput>
  }

  export type ProductsUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProdcutImgs?: ProdcutImgsUpdateManyWithoutProductsNestedInput
    ProductCategories?: ProductCategoriesUpdateManyWithoutProductsNestedInput
    Shop?: ShopUpdateOneWithoutProductsNestedInput
    ProductVariants?: ProductVariantsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopid?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProdcutImgs?: ProdcutImgsUncheckedUpdateManyWithoutProductsNestedInput
    ProductCategories?: ProductCategoriesUncheckedUpdateManyWithoutProductsNestedInput
    ProductVariants?: ProductVariantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type UsersUpsertWithoutCartInput = {
    update: XOR<UsersUpdateWithoutCartInput, UsersUncheckedUpdateWithoutCartInput>
    create: XOR<UsersCreateWithoutCartInput, UsersUncheckedCreateWithoutCartInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCartInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCartInput, UsersUncheckedUpdateWithoutCartInput>
  }

  export type UsersUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avartar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateManyWithoutUsersNestedInput
    Shop?: ShopUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avartar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUncheckedUpdateManyWithoutUsersNestedInput
    Shop?: ShopUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutCartInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCartInput, TransactionUncheckedUpdateWithoutCartInput>
    create: XOR<TransactionCreateWithoutCartInput, TransactionUncheckedCreateWithoutCartInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCartInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCartInput, TransactionUncheckedUpdateWithoutCartInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCartInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCartInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    cartId?: StringNullableFilter<"Transaction"> | string | null
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    shipProvider?: StringNullableFilter<"Transaction"> | string | null
    payPrice?: DecimalNullableFilter<"Transaction"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"Transaction"> | string | null
    created_at?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Transaction"> | Date | string | null
  }

  export type ProductCategoriesCreateWithoutCategoriesInput = {
    id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsCreateNestedOneWithoutProductCategoriesInput
  }

  export type ProductCategoriesUncheckedCreateWithoutCategoriesInput = {
    id: string
    productId?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductCategoriesCreateOrConnectWithoutCategoriesInput = {
    where: ProductCategoriesWhereUniqueInput
    create: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCategoriesCreateManyCategoriesInputEnvelope = {
    data: ProductCategoriesCreateManyCategoriesInput | ProductCategoriesCreateManyCategoriesInput[]
  }

  export type ProductCategoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ProductCategoriesWhereUniqueInput
    update: XOR<ProductCategoriesUpdateWithoutCategoriesInput, ProductCategoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductCategoriesCreateWithoutCategoriesInput, ProductCategoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCategoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ProductCategoriesWhereUniqueInput
    data: XOR<ProductCategoriesUpdateWithoutCategoriesInput, ProductCategoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductCategoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: ProductCategoriesScalarWhereInput
    data: XOR<ProductCategoriesUpdateManyMutationInput, ProductCategoriesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type ProductCategoriesScalarWhereInput = {
    AND?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[]
    OR?: ProductCategoriesScalarWhereInput[]
    NOT?: ProductCategoriesScalarWhereInput | ProductCategoriesScalarWhereInput[]
    id?: StringFilter<"ProductCategories"> | string
    productId?: StringNullableFilter<"ProductCategories"> | string | null
    categoryId?: StringNullableFilter<"ProductCategories"> | string | null
    created_at?: DateTimeNullableFilter<"ProductCategories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProductCategories"> | Date | string | null
  }

  export type TransactionCreateWithoutPaymentMethodInput = {
    id: string
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewCreateNestedManyWithoutTransactionInput
    Shipment?: ShipmentCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewCreateNestedManyWithoutTransactionInput
    Cart?: CartCreateNestedOneWithoutTransactionInput
    ShipmentProvider?: ShipmentProviderCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutPaymentMethodInput = {
    id: string
    cartId?: string | null
    shipProvider?: string | null
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewUncheckedCreateNestedManyWithoutTransactionInput
    Shipment?: ShipmentUncheckedCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPaymentMethodInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput>
  }

  export type TransactionCreateManyPaymentMethodInputEnvelope = {
    data: TransactionCreateManyPaymentMethodInput | TransactionCreateManyPaymentMethodInput[]
  }

  export type TransactionUpsertWithWhereUniqueWithoutPaymentMethodInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPaymentMethodInput, TransactionUncheckedUpdateWithoutPaymentMethodInput>
    create: XOR<TransactionCreateWithoutPaymentMethodInput, TransactionUncheckedCreateWithoutPaymentMethodInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPaymentMethodInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPaymentMethodInput, TransactionUncheckedUpdateWithoutPaymentMethodInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPaymentMethodInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPaymentMethodInput>
  }

  export type ProductsCreateWithoutProdcutImgsInput = {
    id: string
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartCreateNestedManyWithoutProductsInput
    ProductCategories?: ProductCategoriesCreateNestedManyWithoutProductsInput
    Shop?: ShopCreateNestedOneWithoutProductsInput
    ProductVariants?: ProductVariantsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutProdcutImgsInput = {
    id: string
    shopid?: string | null
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartUncheckedCreateNestedManyWithoutProductsInput
    ProductCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutProductsInput
    ProductVariants?: ProductVariantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutProdcutImgsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProdcutImgsInput, ProductsUncheckedCreateWithoutProdcutImgsInput>
  }

  export type ProductsUpsertWithoutProdcutImgsInput = {
    update: XOR<ProductsUpdateWithoutProdcutImgsInput, ProductsUncheckedUpdateWithoutProdcutImgsInput>
    create: XOR<ProductsCreateWithoutProdcutImgsInput, ProductsUncheckedCreateWithoutProdcutImgsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProdcutImgsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProdcutImgsInput, ProductsUncheckedUpdateWithoutProdcutImgsInput>
  }

  export type ProductsUpdateWithoutProdcutImgsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUpdateManyWithoutProductsNestedInput
    ProductCategories?: ProductCategoriesUpdateManyWithoutProductsNestedInput
    Shop?: ShopUpdateOneWithoutProductsNestedInput
    ProductVariants?: ProductVariantsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProdcutImgsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopid?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUncheckedUpdateManyWithoutProductsNestedInput
    ProductCategories?: ProductCategoriesUncheckedUpdateManyWithoutProductsNestedInput
    ProductVariants?: ProductVariantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type CategoriesCreateWithoutProductCategoriesInput = {
    id: string
    categoryName?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoriesUncheckedCreateWithoutProductCategoriesInput = {
    id: string
    categoryName?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoriesCreateOrConnectWithoutProductCategoriesInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProductCategoriesInput, CategoriesUncheckedCreateWithoutProductCategoriesInput>
  }

  export type ProductsCreateWithoutProductCategoriesInput = {
    id: string
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartCreateNestedManyWithoutProductsInput
    ProdcutImgs?: ProdcutImgsCreateNestedManyWithoutProductsInput
    Shop?: ShopCreateNestedOneWithoutProductsInput
    ProductVariants?: ProductVariantsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutProductCategoriesInput = {
    id: string
    shopid?: string | null
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartUncheckedCreateNestedManyWithoutProductsInput
    ProdcutImgs?: ProdcutImgsUncheckedCreateNestedManyWithoutProductsInput
    ProductVariants?: ProductVariantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutProductCategoriesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProductCategoriesInput, ProductsUncheckedCreateWithoutProductCategoriesInput>
  }

  export type CategoriesUpsertWithoutProductCategoriesInput = {
    update: XOR<CategoriesUpdateWithoutProductCategoriesInput, CategoriesUncheckedUpdateWithoutProductCategoriesInput>
    create: XOR<CategoriesCreateWithoutProductCategoriesInput, CategoriesUncheckedCreateWithoutProductCategoriesInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutProductCategoriesInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutProductCategoriesInput, CategoriesUncheckedUpdateWithoutProductCategoriesInput>
  }

  export type CategoriesUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoriesUncheckedUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsUpsertWithoutProductCategoriesInput = {
    update: XOR<ProductsUpdateWithoutProductCategoriesInput, ProductsUncheckedUpdateWithoutProductCategoriesInput>
    create: XOR<ProductsCreateWithoutProductCategoriesInput, ProductsUncheckedCreateWithoutProductCategoriesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProductCategoriesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProductCategoriesInput, ProductsUncheckedUpdateWithoutProductCategoriesInput>
  }

  export type ProductsUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUpdateManyWithoutProductsNestedInput
    ProdcutImgs?: ProdcutImgsUpdateManyWithoutProductsNestedInput
    Shop?: ShopUpdateOneWithoutProductsNestedInput
    ProductVariants?: ProductVariantsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProductCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopid?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUncheckedUpdateManyWithoutProductsNestedInput
    ProdcutImgs?: ProdcutImgsUncheckedUpdateManyWithoutProductsNestedInput
    ProductVariants?: ProductVariantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type TransactionCreateWithoutProductReviewInput = {
    id: string
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Shipment?: ShipmentCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewCreateNestedManyWithoutTransactionInput
    Cart?: CartCreateNestedOneWithoutTransactionInput
    PaymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionInput
    ShipmentProvider?: ShipmentProviderCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutProductReviewInput = {
    id: string
    cartId?: string | null
    paymentMethod?: string | null
    shipProvider?: string | null
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Shipment?: ShipmentUncheckedCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutProductReviewInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutProductReviewInput, TransactionUncheckedCreateWithoutProductReviewInput>
  }

  export type TransactionUpsertWithoutProductReviewInput = {
    update: XOR<TransactionUpdateWithoutProductReviewInput, TransactionUncheckedUpdateWithoutProductReviewInput>
    create: XOR<TransactionCreateWithoutProductReviewInput, TransactionUncheckedCreateWithoutProductReviewInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutProductReviewInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutProductReviewInput, TransactionUncheckedUpdateWithoutProductReviewInput>
  }

  export type TransactionUpdateWithoutProductReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Shipment?: ShipmentUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUpdateManyWithoutTransactionNestedInput
    Cart?: CartUpdateOneWithoutTransactionNestedInput
    PaymentMethod?: PaymentMethodUpdateOneWithoutTransactionNestedInput
    ShipmentProvider?: ShipmentProviderUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutProductReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    shipProvider?: NullableStringFieldUpdateOperationsInput | string | null
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Shipment?: ShipmentUncheckedUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type CartCreateWithoutProductsInput = {
    id: string
    quantity?: number | null
    Users?: UsersCreateNestedOneWithoutCartInput
    Transaction?: TransactionCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutProductsInput = {
    id: string
    userId?: string | null
    quantity?: number | null
    Transaction?: TransactionUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutProductsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutProductsInput, CartUncheckedCreateWithoutProductsInput>
  }

  export type CartCreateManyProductsInputEnvelope = {
    data: CartCreateManyProductsInput | CartCreateManyProductsInput[]
  }

  export type ProdcutImgsCreateWithoutProductsInput = {
    id: string
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProdcutImgsUncheckedCreateWithoutProductsInput = {
    id: string
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProdcutImgsCreateOrConnectWithoutProductsInput = {
    where: ProdcutImgsWhereUniqueInput
    create: XOR<ProdcutImgsCreateWithoutProductsInput, ProdcutImgsUncheckedCreateWithoutProductsInput>
  }

  export type ProdcutImgsCreateManyProductsInputEnvelope = {
    data: ProdcutImgsCreateManyProductsInput | ProdcutImgsCreateManyProductsInput[]
  }

  export type ProductCategoriesCreateWithoutProductsInput = {
    id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Categories?: CategoriesCreateNestedOneWithoutProductCategoriesInput
  }

  export type ProductCategoriesUncheckedCreateWithoutProductsInput = {
    id: string
    categoryId?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductCategoriesCreateOrConnectWithoutProductsInput = {
    where: ProductCategoriesWhereUniqueInput
    create: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput>
  }

  export type ProductCategoriesCreateManyProductsInputEnvelope = {
    data: ProductCategoriesCreateManyProductsInput | ProductCategoriesCreateManyProductsInput[]
  }

  export type ShopCreateWithoutProductsInput = {
    id: string
    realName?: string | null
    shopName?: string | null
    description?: string | null
    phoneContact?: string | null
    emailContact?: string | null
    addressContact?: string | null
    rating?: number | null
    certify?: boolean | null
    productQuantity?: number | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Users?: UsersCreateNestedOneWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutProductsInput = {
    id: string
    userId?: string | null
    realName?: string | null
    shopName?: string | null
    description?: string | null
    phoneContact?: string | null
    emailContact?: string | null
    addressContact?: string | null
    rating?: number | null
    certify?: boolean | null
    productQuantity?: number | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ShopCreateOrConnectWithoutProductsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
  }

  export type ProductVariantsCreateWithoutProductsInput = {
    id: string
    vartiantName?: string | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductVariantsUncheckedCreateWithoutProductsInput = {
    id: string
    vartiantName?: string | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductVariantsCreateOrConnectWithoutProductsInput = {
    where: ProductVariantsWhereUniqueInput
    create: XOR<ProductVariantsCreateWithoutProductsInput, ProductVariantsUncheckedCreateWithoutProductsInput>
  }

  export type ProductVariantsCreateManyProductsInputEnvelope = {
    data: ProductVariantsCreateManyProductsInput | ProductVariantsCreateManyProductsInput[]
  }

  export type CartUpsertWithWhereUniqueWithoutProductsInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutProductsInput, CartUncheckedUpdateWithoutProductsInput>
    create: XOR<CartCreateWithoutProductsInput, CartUncheckedCreateWithoutProductsInput>
  }

  export type CartUpdateWithWhereUniqueWithoutProductsInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutProductsInput, CartUncheckedUpdateWithoutProductsInput>
  }

  export type CartUpdateManyWithWhereWithoutProductsInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutProductsInput>
  }

  export type CartScalarWhereInput = {
    AND?: CartScalarWhereInput | CartScalarWhereInput[]
    OR?: CartScalarWhereInput[]
    NOT?: CartScalarWhereInput | CartScalarWhereInput[]
    id?: StringFilter<"Cart"> | string
    userId?: StringNullableFilter<"Cart"> | string | null
    productId?: StringNullableFilter<"Cart"> | string | null
    quantity?: IntNullableFilter<"Cart"> | number | null
  }

  export type ProdcutImgsUpsertWithWhereUniqueWithoutProductsInput = {
    where: ProdcutImgsWhereUniqueInput
    update: XOR<ProdcutImgsUpdateWithoutProductsInput, ProdcutImgsUncheckedUpdateWithoutProductsInput>
    create: XOR<ProdcutImgsCreateWithoutProductsInput, ProdcutImgsUncheckedCreateWithoutProductsInput>
  }

  export type ProdcutImgsUpdateWithWhereUniqueWithoutProductsInput = {
    where: ProdcutImgsWhereUniqueInput
    data: XOR<ProdcutImgsUpdateWithoutProductsInput, ProdcutImgsUncheckedUpdateWithoutProductsInput>
  }

  export type ProdcutImgsUpdateManyWithWhereWithoutProductsInput = {
    where: ProdcutImgsScalarWhereInput
    data: XOR<ProdcutImgsUpdateManyMutationInput, ProdcutImgsUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProdcutImgsScalarWhereInput = {
    AND?: ProdcutImgsScalarWhereInput | ProdcutImgsScalarWhereInput[]
    OR?: ProdcutImgsScalarWhereInput[]
    NOT?: ProdcutImgsScalarWhereInput | ProdcutImgsScalarWhereInput[]
    id?: StringFilter<"ProdcutImgs"> | string
    productId?: StringNullableFilter<"ProdcutImgs"> | string | null
    url?: StringNullableFilter<"ProdcutImgs"> | string | null
    created_at?: DateTimeNullableFilter<"ProdcutImgs"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProdcutImgs"> | Date | string | null
  }

  export type ProductCategoriesUpsertWithWhereUniqueWithoutProductsInput = {
    where: ProductCategoriesWhereUniqueInput
    update: XOR<ProductCategoriesUpdateWithoutProductsInput, ProductCategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductCategoriesCreateWithoutProductsInput, ProductCategoriesUncheckedCreateWithoutProductsInput>
  }

  export type ProductCategoriesUpdateWithWhereUniqueWithoutProductsInput = {
    where: ProductCategoriesWhereUniqueInput
    data: XOR<ProductCategoriesUpdateWithoutProductsInput, ProductCategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type ProductCategoriesUpdateManyWithWhereWithoutProductsInput = {
    where: ProductCategoriesScalarWhereInput
    data: XOR<ProductCategoriesUpdateManyMutationInput, ProductCategoriesUncheckedUpdateManyWithoutProductsInput>
  }

  export type ShopUpsertWithoutProductsInput = {
    update: XOR<ShopUpdateWithoutProductsInput, ShopUncheckedUpdateWithoutProductsInput>
    create: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutProductsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutProductsInput, ShopUncheckedUpdateWithoutProductsInput>
  }

  export type ShopUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    addressContact?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    certify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUpdateOneWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    addressContact?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    certify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductVariantsUpsertWithWhereUniqueWithoutProductsInput = {
    where: ProductVariantsWhereUniqueInput
    update: XOR<ProductVariantsUpdateWithoutProductsInput, ProductVariantsUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductVariantsCreateWithoutProductsInput, ProductVariantsUncheckedCreateWithoutProductsInput>
  }

  export type ProductVariantsUpdateWithWhereUniqueWithoutProductsInput = {
    where: ProductVariantsWhereUniqueInput
    data: XOR<ProductVariantsUpdateWithoutProductsInput, ProductVariantsUncheckedUpdateWithoutProductsInput>
  }

  export type ProductVariantsUpdateManyWithWhereWithoutProductsInput = {
    where: ProductVariantsScalarWhereInput
    data: XOR<ProductVariantsUpdateManyMutationInput, ProductVariantsUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductVariantsScalarWhereInput = {
    AND?: ProductVariantsScalarWhereInput | ProductVariantsScalarWhereInput[]
    OR?: ProductVariantsScalarWhereInput[]
    NOT?: ProductVariantsScalarWhereInput | ProductVariantsScalarWhereInput[]
    id?: StringFilter<"ProductVariants"> | string
    productId?: StringNullableFilter<"ProductVariants"> | string | null
    vartiantName?: StringNullableFilter<"ProductVariants"> | string | null
    img?: StringNullableFilter<"ProductVariants"> | string | null
    created_at?: DateTimeNullableFilter<"ProductVariants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProductVariants"> | Date | string | null
  }

  export type ProductsCreateWithoutProductVariantsInput = {
    id: string
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartCreateNestedManyWithoutProductsInput
    ProdcutImgs?: ProdcutImgsCreateNestedManyWithoutProductsInput
    ProductCategories?: ProductCategoriesCreateNestedManyWithoutProductsInput
    Shop?: ShopCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutProductVariantsInput = {
    id: string
    shopid?: string | null
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartUncheckedCreateNestedManyWithoutProductsInput
    ProdcutImgs?: ProdcutImgsUncheckedCreateNestedManyWithoutProductsInput
    ProductCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutProductVariantsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProductVariantsInput, ProductsUncheckedCreateWithoutProductVariantsInput>
  }

  export type ProductsUpsertWithoutProductVariantsInput = {
    update: XOR<ProductsUpdateWithoutProductVariantsInput, ProductsUncheckedUpdateWithoutProductVariantsInput>
    create: XOR<ProductsCreateWithoutProductVariantsInput, ProductsUncheckedCreateWithoutProductVariantsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProductVariantsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProductVariantsInput, ProductsUncheckedUpdateWithoutProductVariantsInput>
  }

  export type ProductsUpdateWithoutProductVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUpdateManyWithoutProductsNestedInput
    ProdcutImgs?: ProdcutImgsUpdateManyWithoutProductsNestedInput
    ProductCategories?: ProductCategoriesUpdateManyWithoutProductsNestedInput
    Shop?: ShopUpdateOneWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProductVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopid?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUncheckedUpdateManyWithoutProductsNestedInput
    ProdcutImgs?: ProdcutImgsUncheckedUpdateManyWithoutProductsNestedInput
    ProductCategories?: ProductCategoriesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type TransactionCreateWithoutShipmentInput = {
    id: string
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewCreateNestedManyWithoutTransactionInput
    Cart?: CartCreateNestedOneWithoutTransactionInput
    PaymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionInput
    ShipmentProvider?: ShipmentProviderCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutShipmentInput = {
    id: string
    cartId?: string | null
    paymentMethod?: string | null
    shipProvider?: string | null
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewUncheckedCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutShipmentInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutShipmentInput, TransactionUncheckedCreateWithoutShipmentInput>
  }

  export type TransactionUpsertWithoutShipmentInput = {
    update: XOR<TransactionUpdateWithoutShipmentInput, TransactionUncheckedUpdateWithoutShipmentInput>
    create: XOR<TransactionCreateWithoutShipmentInput, TransactionUncheckedCreateWithoutShipmentInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutShipmentInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutShipmentInput, TransactionUncheckedUpdateWithoutShipmentInput>
  }

  export type TransactionUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUpdateManyWithoutTransactionNestedInput
    Cart?: CartUpdateOneWithoutTransactionNestedInput
    PaymentMethod?: PaymentMethodUpdateOneWithoutTransactionNestedInput
    ShipmentProvider?: ShipmentProviderUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    shipProvider?: NullableStringFieldUpdateOperationsInput | string | null
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUncheckedUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateWithoutShipmentProviderInput = {
    id: string
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewCreateNestedManyWithoutTransactionInput
    Shipment?: ShipmentCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewCreateNestedManyWithoutTransactionInput
    Cart?: CartCreateNestedOneWithoutTransactionInput
    PaymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutShipmentProviderInput = {
    id: string
    cartId?: string | null
    paymentMethod?: string | null
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewUncheckedCreateNestedManyWithoutTransactionInput
    Shipment?: ShipmentUncheckedCreateNestedManyWithoutTransactionInput
    ShopReview?: ShopReviewUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutShipmentProviderInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutShipmentProviderInput, TransactionUncheckedCreateWithoutShipmentProviderInput>
  }

  export type TransactionCreateManyShipmentProviderInputEnvelope = {
    data: TransactionCreateManyShipmentProviderInput | TransactionCreateManyShipmentProviderInput[]
  }

  export type TransactionUpsertWithWhereUniqueWithoutShipmentProviderInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutShipmentProviderInput, TransactionUncheckedUpdateWithoutShipmentProviderInput>
    create: XOR<TransactionCreateWithoutShipmentProviderInput, TransactionUncheckedCreateWithoutShipmentProviderInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutShipmentProviderInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutShipmentProviderInput, TransactionUncheckedUpdateWithoutShipmentProviderInput>
  }

  export type TransactionUpdateManyWithWhereWithoutShipmentProviderInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutShipmentProviderInput>
  }

  export type ProductsCreateWithoutShopInput = {
    id: string
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartCreateNestedManyWithoutProductsInput
    ProdcutImgs?: ProdcutImgsCreateNestedManyWithoutProductsInput
    ProductCategories?: ProductCategoriesCreateNestedManyWithoutProductsInput
    ProductVariants?: ProductVariantsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutShopInput = {
    id: string
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Cart?: CartUncheckedCreateNestedManyWithoutProductsInput
    ProdcutImgs?: ProdcutImgsUncheckedCreateNestedManyWithoutProductsInput
    ProductCategories?: ProductCategoriesUncheckedCreateNestedManyWithoutProductsInput
    ProductVariants?: ProductVariantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutShopInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutShopInput, ProductsUncheckedCreateWithoutShopInput>
  }

  export type ProductsCreateManyShopInputEnvelope = {
    data: ProductsCreateManyShopInput | ProductsCreateManyShopInput[]
  }

  export type UsersCreateWithoutShopInput = {
    id: string
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    realName?: string | null
    phoneNumber?: string | null
    dob?: Date | string | null
    sex?: string | null
    avartar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Address?: AddressCreateNestedManyWithoutUsersInput
    Cart?: CartCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutShopInput = {
    id: string
    username?: string | null
    email?: string | null
    password?: string | null
    role?: string | null
    realName?: string | null
    phoneNumber?: string | null
    dob?: Date | string | null
    sex?: string | null
    avartar?: string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Address?: AddressUncheckedCreateNestedManyWithoutUsersInput
    Cart?: CartUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutShopInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutShopInput, UsersUncheckedCreateWithoutShopInput>
  }

  export type ProductsUpsertWithWhereUniqueWithoutShopInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutShopInput, ProductsUncheckedUpdateWithoutShopInput>
    create: XOR<ProductsCreateWithoutShopInput, ProductsUncheckedCreateWithoutShopInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutShopInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutShopInput, ProductsUncheckedUpdateWithoutShopInput>
  }

  export type ProductsUpdateManyWithWhereWithoutShopInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutShopInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: StringFilter<"Products"> | string
    shopid?: StringNullableFilter<"Products"> | string | null
    productName?: StringNullableFilter<"Products"> | string | null
    desciption?: StringNullableFilter<"Products"> | string | null
    price?: DecimalNullableFilter<"Products"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"Products"> | number | null
    status?: StringNullableFilter<"Products"> | string | null
    rating?: IntNullableFilter<"Products"> | number | null
    created_at?: DateTimeNullableFilter<"Products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Products"> | Date | string | null
  }

  export type UsersUpsertWithoutShopInput = {
    update: XOR<UsersUpdateWithoutShopInput, UsersUncheckedUpdateWithoutShopInput>
    create: XOR<UsersCreateWithoutShopInput, UsersUncheckedCreateWithoutShopInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutShopInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutShopInput, UsersUncheckedUpdateWithoutShopInput>
  }

  export type UsersUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avartar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateManyWithoutUsersNestedInput
    Cart?: CartUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    avartar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUncheckedUpdateManyWithoutUsersNestedInput
    Cart?: CartUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type TransactionCreateWithoutShopReviewInput = {
    id: string
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewCreateNestedManyWithoutTransactionInput
    Shipment?: ShipmentCreateNestedManyWithoutTransactionInput
    Cart?: CartCreateNestedOneWithoutTransactionInput
    PaymentMethod?: PaymentMethodCreateNestedOneWithoutTransactionInput
    ShipmentProvider?: ShipmentProviderCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutShopReviewInput = {
    id: string
    cartId?: string | null
    paymentMethod?: string | null
    shipProvider?: string | null
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    ProductReview?: ProductReviewUncheckedCreateNestedManyWithoutTransactionInput
    Shipment?: ShipmentUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutShopReviewInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutShopReviewInput, TransactionUncheckedCreateWithoutShopReviewInput>
  }

  export type TransactionUpsertWithoutShopReviewInput = {
    update: XOR<TransactionUpdateWithoutShopReviewInput, TransactionUncheckedUpdateWithoutShopReviewInput>
    create: XOR<TransactionCreateWithoutShopReviewInput, TransactionUncheckedCreateWithoutShopReviewInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutShopReviewInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutShopReviewInput, TransactionUncheckedUpdateWithoutShopReviewInput>
  }

  export type TransactionUpdateWithoutShopReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUpdateManyWithoutTransactionNestedInput
    Shipment?: ShipmentUpdateManyWithoutTransactionNestedInput
    Cart?: CartUpdateOneWithoutTransactionNestedInput
    PaymentMethod?: PaymentMethodUpdateOneWithoutTransactionNestedInput
    ShipmentProvider?: ShipmentProviderUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutShopReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    shipProvider?: NullableStringFieldUpdateOperationsInput | string | null
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUncheckedUpdateManyWithoutTransactionNestedInput
    Shipment?: ShipmentUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type ProductReviewCreateWithoutTransactionInput = {
    id: string
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductReviewUncheckedCreateWithoutTransactionInput = {
    id: string
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductReviewCreateOrConnectWithoutTransactionInput = {
    where: ProductReviewWhereUniqueInput
    create: XOR<ProductReviewCreateWithoutTransactionInput, ProductReviewUncheckedCreateWithoutTransactionInput>
  }

  export type ProductReviewCreateManyTransactionInputEnvelope = {
    data: ProductReviewCreateManyTransactionInput | ProductReviewCreateManyTransactionInput[]
  }

  export type ShipmentCreateWithoutTransactionInput = {
    id: string
    startDate?: Date | string | null
    expected?: Date | string | null
    endDate?: Date | string | null
    status?: string | null
  }

  export type ShipmentUncheckedCreateWithoutTransactionInput = {
    id: string
    startDate?: Date | string | null
    expected?: Date | string | null
    endDate?: Date | string | null
    status?: string | null
  }

  export type ShipmentCreateOrConnectWithoutTransactionInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutTransactionInput, ShipmentUncheckedCreateWithoutTransactionInput>
  }

  export type ShipmentCreateManyTransactionInputEnvelope = {
    data: ShipmentCreateManyTransactionInput | ShipmentCreateManyTransactionInput[]
  }

  export type ShopReviewCreateWithoutTransactionInput = {
    id: string
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ShopReviewUncheckedCreateWithoutTransactionInput = {
    id: string
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ShopReviewCreateOrConnectWithoutTransactionInput = {
    where: ShopReviewWhereUniqueInput
    create: XOR<ShopReviewCreateWithoutTransactionInput, ShopReviewUncheckedCreateWithoutTransactionInput>
  }

  export type ShopReviewCreateManyTransactionInputEnvelope = {
    data: ShopReviewCreateManyTransactionInput | ShopReviewCreateManyTransactionInput[]
  }

  export type CartCreateWithoutTransactionInput = {
    id: string
    quantity?: number | null
    Products?: ProductsCreateNestedOneWithoutCartInput
    Users?: UsersCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutTransactionInput = {
    id: string
    userId?: string | null
    productId?: string | null
    quantity?: number | null
  }

  export type CartCreateOrConnectWithoutTransactionInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutTransactionInput, CartUncheckedCreateWithoutTransactionInput>
  }

  export type PaymentMethodCreateWithoutTransactionInput = {
    id: string
    paymentName?: string | null
    description?: string | null
    img?: string | null
  }

  export type PaymentMethodUncheckedCreateWithoutTransactionInput = {
    id: string
    paymentName?: string | null
    description?: string | null
    img?: string | null
  }

  export type PaymentMethodCreateOrConnectWithoutTransactionInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutTransactionInput, PaymentMethodUncheckedCreateWithoutTransactionInput>
  }

  export type ShipmentProviderCreateWithoutTransactionInput = {
    id: string
    providerName?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type ShipmentProviderUncheckedCreateWithoutTransactionInput = {
    id: string
    providerName?: string | null
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type ShipmentProviderCreateOrConnectWithoutTransactionInput = {
    where: ShipmentProviderWhereUniqueInput
    create: XOR<ShipmentProviderCreateWithoutTransactionInput, ShipmentProviderUncheckedCreateWithoutTransactionInput>
  }

  export type ProductReviewUpsertWithWhereUniqueWithoutTransactionInput = {
    where: ProductReviewWhereUniqueInput
    update: XOR<ProductReviewUpdateWithoutTransactionInput, ProductReviewUncheckedUpdateWithoutTransactionInput>
    create: XOR<ProductReviewCreateWithoutTransactionInput, ProductReviewUncheckedCreateWithoutTransactionInput>
  }

  export type ProductReviewUpdateWithWhereUniqueWithoutTransactionInput = {
    where: ProductReviewWhereUniqueInput
    data: XOR<ProductReviewUpdateWithoutTransactionInput, ProductReviewUncheckedUpdateWithoutTransactionInput>
  }

  export type ProductReviewUpdateManyWithWhereWithoutTransactionInput = {
    where: ProductReviewScalarWhereInput
    data: XOR<ProductReviewUpdateManyMutationInput, ProductReviewUncheckedUpdateManyWithoutTransactionInput>
  }

  export type ProductReviewScalarWhereInput = {
    AND?: ProductReviewScalarWhereInput | ProductReviewScalarWhereInput[]
    OR?: ProductReviewScalarWhereInput[]
    NOT?: ProductReviewScalarWhereInput | ProductReviewScalarWhereInput[]
    id?: StringFilter<"ProductReview"> | string
    transactionId?: StringNullableFilter<"ProductReview"> | string | null
    review?: IntNullableFilter<"ProductReview"> | number | null
    addNote?: StringNullableFilter<"ProductReview"> | string | null
    created_at?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ProductReview"> | Date | string | null
  }

  export type ShipmentUpsertWithWhereUniqueWithoutTransactionInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutTransactionInput, ShipmentUncheckedUpdateWithoutTransactionInput>
    create: XOR<ShipmentCreateWithoutTransactionInput, ShipmentUncheckedCreateWithoutTransactionInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutTransactionInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutTransactionInput, ShipmentUncheckedUpdateWithoutTransactionInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutTransactionInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutTransactionInput>
  }

  export type ShipmentScalarWhereInput = {
    AND?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    OR?: ShipmentScalarWhereInput[]
    NOT?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    id?: StringFilter<"Shipment"> | string
    orderId?: StringNullableFilter<"Shipment"> | string | null
    startDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    expected?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    status?: StringNullableFilter<"Shipment"> | string | null
  }

  export type ShopReviewUpsertWithWhereUniqueWithoutTransactionInput = {
    where: ShopReviewWhereUniqueInput
    update: XOR<ShopReviewUpdateWithoutTransactionInput, ShopReviewUncheckedUpdateWithoutTransactionInput>
    create: XOR<ShopReviewCreateWithoutTransactionInput, ShopReviewUncheckedCreateWithoutTransactionInput>
  }

  export type ShopReviewUpdateWithWhereUniqueWithoutTransactionInput = {
    where: ShopReviewWhereUniqueInput
    data: XOR<ShopReviewUpdateWithoutTransactionInput, ShopReviewUncheckedUpdateWithoutTransactionInput>
  }

  export type ShopReviewUpdateManyWithWhereWithoutTransactionInput = {
    where: ShopReviewScalarWhereInput
    data: XOR<ShopReviewUpdateManyMutationInput, ShopReviewUncheckedUpdateManyWithoutTransactionInput>
  }

  export type ShopReviewScalarWhereInput = {
    AND?: ShopReviewScalarWhereInput | ShopReviewScalarWhereInput[]
    OR?: ShopReviewScalarWhereInput[]
    NOT?: ShopReviewScalarWhereInput | ShopReviewScalarWhereInput[]
    id?: StringFilter<"ShopReview"> | string
    transactionId?: StringNullableFilter<"ShopReview"> | string | null
    review?: IntNullableFilter<"ShopReview"> | number | null
    addNote?: StringNullableFilter<"ShopReview"> | string | null
    created_at?: DateTimeNullableFilter<"ShopReview"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"ShopReview"> | Date | string | null
  }

  export type CartUpsertWithoutTransactionInput = {
    update: XOR<CartUpdateWithoutTransactionInput, CartUncheckedUpdateWithoutTransactionInput>
    create: XOR<CartCreateWithoutTransactionInput, CartUncheckedCreateWithoutTransactionInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutTransactionInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutTransactionInput, CartUncheckedUpdateWithoutTransactionInput>
  }

  export type CartUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Products?: ProductsUpdateOneWithoutCartNestedInput
    Users?: UsersUpdateOneWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentMethodUpsertWithoutTransactionInput = {
    update: XOR<PaymentMethodUpdateWithoutTransactionInput, PaymentMethodUncheckedUpdateWithoutTransactionInput>
    create: XOR<PaymentMethodCreateWithoutTransactionInput, PaymentMethodUncheckedCreateWithoutTransactionInput>
    where?: PaymentMethodWhereInput
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutTransactionInput = {
    where?: PaymentMethodWhereInput
    data: XOR<PaymentMethodUpdateWithoutTransactionInput, PaymentMethodUncheckedUpdateWithoutTransactionInput>
  }

  export type PaymentMethodUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentMethodUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentProviderUpsertWithoutTransactionInput = {
    update: XOR<ShipmentProviderUpdateWithoutTransactionInput, ShipmentProviderUncheckedUpdateWithoutTransactionInput>
    create: XOR<ShipmentProviderCreateWithoutTransactionInput, ShipmentProviderUncheckedCreateWithoutTransactionInput>
    where?: ShipmentProviderWhereInput
  }

  export type ShipmentProviderUpdateToOneWithWhereWithoutTransactionInput = {
    where?: ShipmentProviderWhereInput
    data: XOR<ShipmentProviderUpdateWithoutTransactionInput, ShipmentProviderUncheckedUpdateWithoutTransactionInput>
  }

  export type ShipmentProviderUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ShipmentProviderUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type AddressCreateWithoutUsersInput = {
    id: string
    address?: string | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AddressUncheckedCreateWithoutUsersInput = {
    id: string
    address?: string | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AddressCreateOrConnectWithoutUsersInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput>
  }

  export type AddressCreateManyUsersInputEnvelope = {
    data: AddressCreateManyUsersInput | AddressCreateManyUsersInput[]
  }

  export type CartCreateWithoutUsersInput = {
    id: string
    quantity?: number | null
    Products?: ProductsCreateNestedOneWithoutCartInput
    Transaction?: TransactionCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUsersInput = {
    id: string
    productId?: string | null
    quantity?: number | null
    Transaction?: TransactionUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUsersInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUsersInput, CartUncheckedCreateWithoutUsersInput>
  }

  export type CartCreateManyUsersInputEnvelope = {
    data: CartCreateManyUsersInput | CartCreateManyUsersInput[]
  }

  export type ShopCreateWithoutUsersInput = {
    id: string
    realName?: string | null
    shopName?: string | null
    description?: string | null
    phoneContact?: string | null
    emailContact?: string | null
    addressContact?: string | null
    rating?: number | null
    certify?: boolean | null
    productQuantity?: number | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutUsersInput = {
    id: string
    realName?: string | null
    shopName?: string | null
    description?: string | null
    phoneContact?: string | null
    emailContact?: string | null
    addressContact?: string | null
    rating?: number | null
    certify?: boolean | null
    productQuantity?: number | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutUsersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
  }

  export type ShopCreateManyUsersInputEnvelope = {
    data: ShopCreateManyUsersInput | ShopCreateManyUsersInput[]
  }

  export type AddressUpsertWithWhereUniqueWithoutUsersInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUsersInput, AddressUncheckedUpdateWithoutUsersInput>
    create: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUsersInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUsersInput, AddressUncheckedUpdateWithoutUsersInput>
  }

  export type AddressUpdateManyWithWhereWithoutUsersInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUsersInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: StringFilter<"Address"> | string
    userId?: StringNullableFilter<"Address"> | string | null
    address?: StringNullableFilter<"Address"> | string | null
    addNote?: StringNullableFilter<"Address"> | string | null
    created_at?: DateTimeNullableFilter<"Address"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Address"> | Date | string | null
  }

  export type CartUpsertWithWhereUniqueWithoutUsersInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutUsersInput, CartUncheckedUpdateWithoutUsersInput>
    create: XOR<CartCreateWithoutUsersInput, CartUncheckedCreateWithoutUsersInput>
  }

  export type CartUpdateWithWhereUniqueWithoutUsersInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutUsersInput, CartUncheckedUpdateWithoutUsersInput>
  }

  export type CartUpdateManyWithWhereWithoutUsersInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutUsersInput>
  }

  export type ShopUpsertWithWhereUniqueWithoutUsersInput = {
    where: ShopWhereUniqueInput
    update: XOR<ShopUpdateWithoutUsersInput, ShopUncheckedUpdateWithoutUsersInput>
    create: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
  }

  export type ShopUpdateWithWhereUniqueWithoutUsersInput = {
    where: ShopWhereUniqueInput
    data: XOR<ShopUpdateWithoutUsersInput, ShopUncheckedUpdateWithoutUsersInput>
  }

  export type ShopUpdateManyWithWhereWithoutUsersInput = {
    where: ShopScalarWhereInput
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyWithoutUsersInput>
  }

  export type ShopScalarWhereInput = {
    AND?: ShopScalarWhereInput | ShopScalarWhereInput[]
    OR?: ShopScalarWhereInput[]
    NOT?: ShopScalarWhereInput | ShopScalarWhereInput[]
    id?: StringFilter<"Shop"> | string
    userId?: StringNullableFilter<"Shop"> | string | null
    realName?: StringNullableFilter<"Shop"> | string | null
    shopName?: StringNullableFilter<"Shop"> | string | null
    description?: StringNullableFilter<"Shop"> | string | null
    phoneContact?: StringNullableFilter<"Shop"> | string | null
    emailContact?: StringNullableFilter<"Shop"> | string | null
    addressContact?: StringNullableFilter<"Shop"> | string | null
    rating?: IntNullableFilter<"Shop"> | number | null
    certify?: BoolNullableFilter<"Shop"> | boolean | null
    productQuantity?: IntNullableFilter<"Shop"> | number | null
    status?: StringNullableFilter<"Shop"> | string | null
    created_at?: DateTimeNullableFilter<"Shop"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Shop"> | Date | string | null
  }

  export type TransactionCreateManyCartInput = {
    id: string
    paymentMethod?: string | null
    shipProvider?: string | null
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TransactionUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUpdateManyWithoutTransactionNestedInput
    Shipment?: ShipmentUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUpdateManyWithoutTransactionNestedInput
    PaymentMethod?: PaymentMethodUpdateOneWithoutTransactionNestedInput
    ShipmentProvider?: ShipmentProviderUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    shipProvider?: NullableStringFieldUpdateOperationsInput | string | null
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUncheckedUpdateManyWithoutTransactionNestedInput
    Shipment?: ShipmentUncheckedUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    shipProvider?: NullableStringFieldUpdateOperationsInput | string | null
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoriesCreateManyCategoriesInput = {
    id: string
    productId?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductCategoriesUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUpdateOneWithoutProductCategoriesNestedInput
  }

  export type ProductCategoriesUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoriesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateManyPaymentMethodInput = {
    id: string
    cartId?: string | null
    shipProvider?: string | null
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TransactionUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUpdateManyWithoutTransactionNestedInput
    Shipment?: ShipmentUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUpdateManyWithoutTransactionNestedInput
    Cart?: CartUpdateOneWithoutTransactionNestedInput
    ShipmentProvider?: ShipmentProviderUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    shipProvider?: NullableStringFieldUpdateOperationsInput | string | null
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUncheckedUpdateManyWithoutTransactionNestedInput
    Shipment?: ShipmentUncheckedUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutPaymentMethodInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    shipProvider?: NullableStringFieldUpdateOperationsInput | string | null
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartCreateManyProductsInput = {
    id: string
    userId?: string | null
    quantity?: number | null
  }

  export type ProdcutImgsCreateManyProductsInput = {
    id: string
    url?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductCategoriesCreateManyProductsInput = {
    id: string
    categoryId?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductVariantsCreateManyProductsInput = {
    id: string
    vartiantName?: string | null
    img?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CartUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Users?: UsersUpdateOneWithoutCartNestedInput
    Transaction?: TransactionUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Transaction?: TransactionUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProdcutImgsUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdcutImgsUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdcutImgsUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoriesUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Categories?: CategoriesUpdateOneWithoutProductCategoriesNestedInput
  }

  export type ProductCategoriesUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCategoriesUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductVariantsUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vartiantName?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductVariantsUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vartiantName?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductVariantsUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vartiantName?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateManyShipmentProviderInput = {
    id: string
    cartId?: string | null
    paymentMethod?: string | null
    payPrice?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TransactionUpdateWithoutShipmentProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUpdateManyWithoutTransactionNestedInput
    Shipment?: ShipmentUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUpdateManyWithoutTransactionNestedInput
    Cart?: CartUpdateOneWithoutTransactionNestedInput
    PaymentMethod?: PaymentMethodUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutShipmentProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ProductReview?: ProductReviewUncheckedUpdateManyWithoutTransactionNestedInput
    Shipment?: ShipmentUncheckedUpdateManyWithoutTransactionNestedInput
    ShopReview?: ShopReviewUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutShipmentProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    payPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsCreateManyShopInput = {
    id: string
    productName?: string | null
    desciption?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    status?: string | null
    rating?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductsUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUpdateManyWithoutProductsNestedInput
    ProdcutImgs?: ProdcutImgsUpdateManyWithoutProductsNestedInput
    ProductCategories?: ProductCategoriesUpdateManyWithoutProductsNestedInput
    ProductVariants?: ProductVariantsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Cart?: CartUncheckedUpdateManyWithoutProductsNestedInput
    ProdcutImgs?: ProdcutImgsUncheckedUpdateManyWithoutProductsNestedInput
    ProductCategories?: ProductCategoriesUncheckedUpdateManyWithoutProductsNestedInput
    ProductVariants?: ProductVariantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    desciption?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductReviewCreateManyTransactionInput = {
    id: string
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ShipmentCreateManyTransactionInput = {
    id: string
    startDate?: Date | string | null
    expected?: Date | string | null
    endDate?: Date | string | null
    status?: string | null
  }

  export type ShopReviewCreateManyTransactionInput = {
    id: string
    review?: number | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductReviewUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductReviewUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductReviewUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShipmentUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expected?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopReviewUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopReviewUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopReviewUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableIntFieldUpdateOperationsInput | number | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateManyUsersInput = {
    id: string
    address?: string | null
    addNote?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CartCreateManyUsersInput = {
    id: string
    productId?: string | null
    quantity?: number | null
  }

  export type ShopCreateManyUsersInput = {
    id: string
    realName?: string | null
    shopName?: string | null
    description?: string | null
    phoneContact?: string | null
    emailContact?: string | null
    addressContact?: string | null
    rating?: number | null
    certify?: boolean | null
    productQuantity?: number | null
    status?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type AddressUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addNote?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Products?: ProductsUpdateOneWithoutCartNestedInput
    Transaction?: TransactionUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    Transaction?: TransactionUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShopUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    addressContact?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    certify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    addressContact?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    certify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    realName?: NullableStringFieldUpdateOperationsInput | string | null
    shopName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    addressContact?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    certify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    productQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}