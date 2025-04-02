
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Guardian
 * 
 */
export type Guardian = $Result.DefaultSelection<Prisma.$GuardianPayload>
/**
 * Model GuardianUser
 * 
 */
export type GuardianUser = $Result.DefaultSelection<Prisma.$GuardianUserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventParticipant
 * 
 */
export type EventParticipant = $Result.DefaultSelection<Prisma.$EventParticipantPayload>
/**
 * Model DailyTip
 * 
 */
export type DailyTip = $Result.DefaultSelection<Prisma.$DailyTipPayload>
/**
 * Model Health
 * 
 */
export type Health = $Result.DefaultSelection<Prisma.$HealthPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guardian`: Exposes CRUD operations for the **Guardian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guardians
    * const guardians = await prisma.guardian.findMany()
    * ```
    */
  get guardian(): Prisma.GuardianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guardianUser`: Exposes CRUD operations for the **GuardianUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuardianUsers
    * const guardianUsers = await prisma.guardianUser.findMany()
    * ```
    */
  get guardianUser(): Prisma.GuardianUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventParticipant`: Exposes CRUD operations for the **EventParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventParticipants
    * const eventParticipants = await prisma.eventParticipant.findMany()
    * ```
    */
  get eventParticipant(): Prisma.EventParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyTip`: Exposes CRUD operations for the **DailyTip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyTips
    * const dailyTips = await prisma.dailyTip.findMany()
    * ```
    */
  get dailyTip(): Prisma.DailyTipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.health`: Exposes CRUD operations for the **Health** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Health
    * const health = await prisma.health.findMany()
    * ```
    */
  get health(): Prisma.HealthDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Guardian: 'Guardian',
    GuardianUser: 'GuardianUser',
    Event: 'Event',
    EventParticipant: 'EventParticipant',
    DailyTip: 'DailyTip',
    Health: 'Health'
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
      modelProps: "user" | "guardian" | "guardianUser" | "event" | "eventParticipant" | "dailyTip" | "health"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Guardian: {
        payload: Prisma.$GuardianPayload<ExtArgs>
        fields: Prisma.GuardianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuardianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuardianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          findFirst: {
            args: Prisma.GuardianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuardianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          findMany: {
            args: Prisma.GuardianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>[]
          }
          create: {
            args: Prisma.GuardianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          createMany: {
            args: Prisma.GuardianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuardianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>[]
          }
          delete: {
            args: Prisma.GuardianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          update: {
            args: Prisma.GuardianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          deleteMany: {
            args: Prisma.GuardianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuardianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuardianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>[]
          }
          upsert: {
            args: Prisma.GuardianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          aggregate: {
            args: Prisma.GuardianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuardian>
          }
          groupBy: {
            args: Prisma.GuardianGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuardianGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuardianCountArgs<ExtArgs>
            result: $Utils.Optional<GuardianCountAggregateOutputType> | number
          }
        }
      }
      GuardianUser: {
        payload: Prisma.$GuardianUserPayload<ExtArgs>
        fields: Prisma.GuardianUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuardianUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuardianUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianUserPayload>
          }
          findFirst: {
            args: Prisma.GuardianUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuardianUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianUserPayload>
          }
          findMany: {
            args: Prisma.GuardianUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianUserPayload>[]
          }
          create: {
            args: Prisma.GuardianUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianUserPayload>
          }
          createMany: {
            args: Prisma.GuardianUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuardianUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianUserPayload>[]
          }
          delete: {
            args: Prisma.GuardianUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianUserPayload>
          }
          update: {
            args: Prisma.GuardianUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianUserPayload>
          }
          deleteMany: {
            args: Prisma.GuardianUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuardianUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuardianUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianUserPayload>[]
          }
          upsert: {
            args: Prisma.GuardianUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianUserPayload>
          }
          aggregate: {
            args: Prisma.GuardianUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuardianUser>
          }
          groupBy: {
            args: Prisma.GuardianUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuardianUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuardianUserCountArgs<ExtArgs>
            result: $Utils.Optional<GuardianUserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventParticipant: {
        payload: Prisma.$EventParticipantPayload<ExtArgs>
        fields: Prisma.EventParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          findFirst: {
            args: Prisma.EventParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          findMany: {
            args: Prisma.EventParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          create: {
            args: Prisma.EventParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          createMany: {
            args: Prisma.EventParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          delete: {
            args: Prisma.EventParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          update: {
            args: Prisma.EventParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          deleteMany: {
            args: Prisma.EventParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>[]
          }
          upsert: {
            args: Prisma.EventParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventParticipantPayload>
          }
          aggregate: {
            args: Prisma.EventParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventParticipant>
          }
          groupBy: {
            args: Prisma.EventParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<EventParticipantCountAggregateOutputType> | number
          }
        }
      }
      DailyTip: {
        payload: Prisma.$DailyTipPayload<ExtArgs>
        fields: Prisma.DailyTipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyTipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyTipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTipPayload>
          }
          findFirst: {
            args: Prisma.DailyTipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyTipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTipPayload>
          }
          findMany: {
            args: Prisma.DailyTipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTipPayload>[]
          }
          create: {
            args: Prisma.DailyTipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTipPayload>
          }
          createMany: {
            args: Prisma.DailyTipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyTipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTipPayload>[]
          }
          delete: {
            args: Prisma.DailyTipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTipPayload>
          }
          update: {
            args: Prisma.DailyTipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTipPayload>
          }
          deleteMany: {
            args: Prisma.DailyTipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyTipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyTipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTipPayload>[]
          }
          upsert: {
            args: Prisma.DailyTipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTipPayload>
          }
          aggregate: {
            args: Prisma.DailyTipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyTip>
          }
          groupBy: {
            args: Prisma.DailyTipGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyTipGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyTipCountArgs<ExtArgs>
            result: $Utils.Optional<DailyTipCountAggregateOutputType> | number
          }
        }
      }
      Health: {
        payload: Prisma.$HealthPayload<ExtArgs>
        fields: Prisma.HealthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          findFirst: {
            args: Prisma.HealthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          findMany: {
            args: Prisma.HealthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>[]
          }
          create: {
            args: Prisma.HealthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          createMany: {
            args: Prisma.HealthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HealthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>[]
          }
          delete: {
            args: Prisma.HealthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          update: {
            args: Prisma.HealthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          deleteMany: {
            args: Prisma.HealthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HealthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>[]
          }
          upsert: {
            args: Prisma.HealthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthPayload>
          }
          aggregate: {
            args: Prisma.HealthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealth>
          }
          groupBy: {
            args: Prisma.HealthGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthCountArgs<ExtArgs>
            result: $Utils.Optional<HealthCountAggregateOutputType> | number
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
    user?: UserOmit
    guardian?: GuardianOmit
    guardianUser?: GuardianUserOmit
    event?: EventOmit
    eventParticipant?: EventParticipantOmit
    dailyTip?: DailyTipOmit
    health?: HealthOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    guardians: number
    health: number
    events: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guardians?: boolean | UserCountOutputTypeCountGuardiansArgs
    health?: boolean | UserCountOutputTypeCountHealthArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGuardiansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuardianUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHealthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
  }


  /**
   * Count Type GuardianCountOutputType
   */

  export type GuardianCountOutputType = {
    users: number
  }

  export type GuardianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GuardianCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * GuardianCountOutputType without action
   */
  export type GuardianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianCountOutputType
     */
    select?: GuardianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuardianCountOutputType without action
   */
  export type GuardianCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuardianUserWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    participants: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | EventCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    guardians?: boolean | User$guardiansArgs<ExtArgs>
    health?: boolean | User$healthArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guardians?: boolean | User$guardiansArgs<ExtArgs>
    health?: boolean | User$healthArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      guardians: Prisma.$GuardianUserPayload<ExtArgs>[]
      health: Prisma.$HealthPayload<ExtArgs>[]
      events: Prisma.$EventParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guardians<T extends User$guardiansArgs<ExtArgs> = {}>(args?: Subset<T, User$guardiansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    health<T extends User$healthArgs<ExtArgs> = {}>(args?: Subset<T, User$healthArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.guardians
   */
  export type User$guardiansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
    where?: GuardianUserWhereInput
    orderBy?: GuardianUserOrderByWithRelationInput | GuardianUserOrderByWithRelationInput[]
    cursor?: GuardianUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuardianUserScalarFieldEnum | GuardianUserScalarFieldEnum[]
  }

  /**
   * User.health
   */
  export type User$healthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    where?: HealthWhereInput
    orderBy?: HealthOrderByWithRelationInput | HealthOrderByWithRelationInput[]
    cursor?: HealthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HealthScalarFieldEnum | HealthScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    cursor?: EventParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Guardian
   */

  export type AggregateGuardian = {
    _count: GuardianCountAggregateOutputType | null
    _min: GuardianMinAggregateOutputType | null
    _max: GuardianMaxAggregateOutputType | null
  }

  export type GuardianMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type GuardianMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type GuardianCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type GuardianMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type GuardianMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type GuardianCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type GuardianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guardian to aggregate.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guardians
    **/
    _count?: true | GuardianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuardianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuardianMaxAggregateInputType
  }

  export type GetGuardianAggregateType<T extends GuardianAggregateArgs> = {
        [P in keyof T & keyof AggregateGuardian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuardian[P]>
      : GetScalarType<T[P], AggregateGuardian[P]>
  }




  export type GuardianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuardianWhereInput
    orderBy?: GuardianOrderByWithAggregationInput | GuardianOrderByWithAggregationInput[]
    by: GuardianScalarFieldEnum[] | GuardianScalarFieldEnum
    having?: GuardianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuardianCountAggregateInputType | true
    _min?: GuardianMinAggregateInputType
    _max?: GuardianMaxAggregateInputType
  }

  export type GuardianGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    _count: GuardianCountAggregateOutputType | null
    _min: GuardianMinAggregateOutputType | null
    _max: GuardianMaxAggregateOutputType | null
  }

  type GetGuardianGroupByPayload<T extends GuardianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuardianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuardianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuardianGroupByOutputType[P]>
            : GetScalarType<T[P], GuardianGroupByOutputType[P]>
        }
      >
    >


  export type GuardianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    users?: boolean | Guardian$usersArgs<ExtArgs>
    _count?: boolean | GuardianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guardian"]>

  export type GuardianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["guardian"]>

  export type GuardianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["guardian"]>

  export type GuardianSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type GuardianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt", ExtArgs["result"]["guardian"]>
  export type GuardianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Guardian$usersArgs<ExtArgs>
    _count?: boolean | GuardianCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuardianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuardianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuardianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guardian"
    objects: {
      users: Prisma.$GuardianUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["guardian"]>
    composites: {}
  }

  type GuardianGetPayload<S extends boolean | null | undefined | GuardianDefaultArgs> = $Result.GetResult<Prisma.$GuardianPayload, S>

  type GuardianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuardianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuardianCountAggregateInputType | true
    }

  export interface GuardianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guardian'], meta: { name: 'Guardian' } }
    /**
     * Find zero or one Guardian that matches the filter.
     * @param {GuardianFindUniqueArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuardianFindUniqueArgs>(args: SelectSubset<T, GuardianFindUniqueArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guardian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuardianFindUniqueOrThrowArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuardianFindUniqueOrThrowArgs>(args: SelectSubset<T, GuardianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guardian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianFindFirstArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuardianFindFirstArgs>(args?: SelectSubset<T, GuardianFindFirstArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guardian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianFindFirstOrThrowArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuardianFindFirstOrThrowArgs>(args?: SelectSubset<T, GuardianFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guardians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guardians
     * const guardians = await prisma.guardian.findMany()
     * 
     * // Get first 10 Guardians
     * const guardians = await prisma.guardian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guardianWithIdOnly = await prisma.guardian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuardianFindManyArgs>(args?: SelectSubset<T, GuardianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guardian.
     * @param {GuardianCreateArgs} args - Arguments to create a Guardian.
     * @example
     * // Create one Guardian
     * const Guardian = await prisma.guardian.create({
     *   data: {
     *     // ... data to create a Guardian
     *   }
     * })
     * 
     */
    create<T extends GuardianCreateArgs>(args: SelectSubset<T, GuardianCreateArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guardians.
     * @param {GuardianCreateManyArgs} args - Arguments to create many Guardians.
     * @example
     * // Create many Guardians
     * const guardian = await prisma.guardian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuardianCreateManyArgs>(args?: SelectSubset<T, GuardianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guardians and returns the data saved in the database.
     * @param {GuardianCreateManyAndReturnArgs} args - Arguments to create many Guardians.
     * @example
     * // Create many Guardians
     * const guardian = await prisma.guardian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guardians and only return the `id`
     * const guardianWithIdOnly = await prisma.guardian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuardianCreateManyAndReturnArgs>(args?: SelectSubset<T, GuardianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guardian.
     * @param {GuardianDeleteArgs} args - Arguments to delete one Guardian.
     * @example
     * // Delete one Guardian
     * const Guardian = await prisma.guardian.delete({
     *   where: {
     *     // ... filter to delete one Guardian
     *   }
     * })
     * 
     */
    delete<T extends GuardianDeleteArgs>(args: SelectSubset<T, GuardianDeleteArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guardian.
     * @param {GuardianUpdateArgs} args - Arguments to update one Guardian.
     * @example
     * // Update one Guardian
     * const guardian = await prisma.guardian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuardianUpdateArgs>(args: SelectSubset<T, GuardianUpdateArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guardians.
     * @param {GuardianDeleteManyArgs} args - Arguments to filter Guardians to delete.
     * @example
     * // Delete a few Guardians
     * const { count } = await prisma.guardian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuardianDeleteManyArgs>(args?: SelectSubset<T, GuardianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guardians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guardians
     * const guardian = await prisma.guardian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuardianUpdateManyArgs>(args: SelectSubset<T, GuardianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guardians and returns the data updated in the database.
     * @param {GuardianUpdateManyAndReturnArgs} args - Arguments to update many Guardians.
     * @example
     * // Update many Guardians
     * const guardian = await prisma.guardian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guardians and only return the `id`
     * const guardianWithIdOnly = await prisma.guardian.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuardianUpdateManyAndReturnArgs>(args: SelectSubset<T, GuardianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guardian.
     * @param {GuardianUpsertArgs} args - Arguments to update or create a Guardian.
     * @example
     * // Update or create a Guardian
     * const guardian = await prisma.guardian.upsert({
     *   create: {
     *     // ... data to create a Guardian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guardian we want to update
     *   }
     * })
     */
    upsert<T extends GuardianUpsertArgs>(args: SelectSubset<T, GuardianUpsertArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guardians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianCountArgs} args - Arguments to filter Guardians to count.
     * @example
     * // Count the number of Guardians
     * const count = await prisma.guardian.count({
     *   where: {
     *     // ... the filter for the Guardians we want to count
     *   }
     * })
    **/
    count<T extends GuardianCountArgs>(
      args?: Subset<T, GuardianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuardianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guardian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuardianAggregateArgs>(args: Subset<T, GuardianAggregateArgs>): Prisma.PrismaPromise<GetGuardianAggregateType<T>>

    /**
     * Group by Guardian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianGroupByArgs} args - Group by arguments.
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
      T extends GuardianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuardianGroupByArgs['orderBy'] }
        : { orderBy?: GuardianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuardianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuardianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guardian model
   */
  readonly fields: GuardianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guardian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuardianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Guardian$usersArgs<ExtArgs> = {}>(args?: Subset<T, Guardian$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Guardian model
   */
  interface GuardianFieldRefs {
    readonly id: FieldRef<"Guardian", 'String'>
    readonly name: FieldRef<"Guardian", 'String'>
    readonly email: FieldRef<"Guardian", 'String'>
    readonly password: FieldRef<"Guardian", 'String'>
    readonly createdAt: FieldRef<"Guardian", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guardian findUnique
   */
  export type GuardianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where: GuardianWhereUniqueInput
  }

  /**
   * Guardian findUniqueOrThrow
   */
  export type GuardianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where: GuardianWhereUniqueInput
  }

  /**
   * Guardian findFirst
   */
  export type GuardianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guardians.
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guardians.
     */
    distinct?: GuardianScalarFieldEnum | GuardianScalarFieldEnum[]
  }

  /**
   * Guardian findFirstOrThrow
   */
  export type GuardianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guardians.
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guardians.
     */
    distinct?: GuardianScalarFieldEnum | GuardianScalarFieldEnum[]
  }

  /**
   * Guardian findMany
   */
  export type GuardianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardians to fetch.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guardians.
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    distinct?: GuardianScalarFieldEnum | GuardianScalarFieldEnum[]
  }

  /**
   * Guardian create
   */
  export type GuardianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * The data needed to create a Guardian.
     */
    data: XOR<GuardianCreateInput, GuardianUncheckedCreateInput>
  }

  /**
   * Guardian createMany
   */
  export type GuardianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guardians.
     */
    data: GuardianCreateManyInput | GuardianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guardian createManyAndReturn
   */
  export type GuardianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * The data used to create many Guardians.
     */
    data: GuardianCreateManyInput | GuardianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guardian update
   */
  export type GuardianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * The data needed to update a Guardian.
     */
    data: XOR<GuardianUpdateInput, GuardianUncheckedUpdateInput>
    /**
     * Choose, which Guardian to update.
     */
    where: GuardianWhereUniqueInput
  }

  /**
   * Guardian updateMany
   */
  export type GuardianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guardians.
     */
    data: XOR<GuardianUpdateManyMutationInput, GuardianUncheckedUpdateManyInput>
    /**
     * Filter which Guardians to update
     */
    where?: GuardianWhereInput
    /**
     * Limit how many Guardians to update.
     */
    limit?: number
  }

  /**
   * Guardian updateManyAndReturn
   */
  export type GuardianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * The data used to update Guardians.
     */
    data: XOR<GuardianUpdateManyMutationInput, GuardianUncheckedUpdateManyInput>
    /**
     * Filter which Guardians to update
     */
    where?: GuardianWhereInput
    /**
     * Limit how many Guardians to update.
     */
    limit?: number
  }

  /**
   * Guardian upsert
   */
  export type GuardianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * The filter to search for the Guardian to update in case it exists.
     */
    where: GuardianWhereUniqueInput
    /**
     * In case the Guardian found by the `where` argument doesn't exist, create a new Guardian with this data.
     */
    create: XOR<GuardianCreateInput, GuardianUncheckedCreateInput>
    /**
     * In case the Guardian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuardianUpdateInput, GuardianUncheckedUpdateInput>
  }

  /**
   * Guardian delete
   */
  export type GuardianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter which Guardian to delete.
     */
    where: GuardianWhereUniqueInput
  }

  /**
   * Guardian deleteMany
   */
  export type GuardianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guardians to delete
     */
    where?: GuardianWhereInput
    /**
     * Limit how many Guardians to delete.
     */
    limit?: number
  }

  /**
   * Guardian.users
   */
  export type Guardian$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
    where?: GuardianUserWhereInput
    orderBy?: GuardianUserOrderByWithRelationInput | GuardianUserOrderByWithRelationInput[]
    cursor?: GuardianUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuardianUserScalarFieldEnum | GuardianUserScalarFieldEnum[]
  }

  /**
   * Guardian without action
   */
  export type GuardianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
  }


  /**
   * Model GuardianUser
   */

  export type AggregateGuardianUser = {
    _count: GuardianUserCountAggregateOutputType | null
    _min: GuardianUserMinAggregateOutputType | null
    _max: GuardianUserMaxAggregateOutputType | null
  }

  export type GuardianUserMinAggregateOutputType = {
    guardianId: string | null
    userId: string | null
  }

  export type GuardianUserMaxAggregateOutputType = {
    guardianId: string | null
    userId: string | null
  }

  export type GuardianUserCountAggregateOutputType = {
    guardianId: number
    userId: number
    _all: number
  }


  export type GuardianUserMinAggregateInputType = {
    guardianId?: true
    userId?: true
  }

  export type GuardianUserMaxAggregateInputType = {
    guardianId?: true
    userId?: true
  }

  export type GuardianUserCountAggregateInputType = {
    guardianId?: true
    userId?: true
    _all?: true
  }

  export type GuardianUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuardianUser to aggregate.
     */
    where?: GuardianUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuardianUsers to fetch.
     */
    orderBy?: GuardianUserOrderByWithRelationInput | GuardianUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuardianUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuardianUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuardianUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuardianUsers
    **/
    _count?: true | GuardianUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuardianUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuardianUserMaxAggregateInputType
  }

  export type GetGuardianUserAggregateType<T extends GuardianUserAggregateArgs> = {
        [P in keyof T & keyof AggregateGuardianUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuardianUser[P]>
      : GetScalarType<T[P], AggregateGuardianUser[P]>
  }




  export type GuardianUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuardianUserWhereInput
    orderBy?: GuardianUserOrderByWithAggregationInput | GuardianUserOrderByWithAggregationInput[]
    by: GuardianUserScalarFieldEnum[] | GuardianUserScalarFieldEnum
    having?: GuardianUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuardianUserCountAggregateInputType | true
    _min?: GuardianUserMinAggregateInputType
    _max?: GuardianUserMaxAggregateInputType
  }

  export type GuardianUserGroupByOutputType = {
    guardianId: string
    userId: string
    _count: GuardianUserCountAggregateOutputType | null
    _min: GuardianUserMinAggregateOutputType | null
    _max: GuardianUserMaxAggregateOutputType | null
  }

  type GetGuardianUserGroupByPayload<T extends GuardianUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuardianUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuardianUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuardianUserGroupByOutputType[P]>
            : GetScalarType<T[P], GuardianUserGroupByOutputType[P]>
        }
      >
    >


  export type GuardianUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guardianId?: boolean
    userId?: boolean
    guardian?: boolean | GuardianDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guardianUser"]>

  export type GuardianUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guardianId?: boolean
    userId?: boolean
    guardian?: boolean | GuardianDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guardianUser"]>

  export type GuardianUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guardianId?: boolean
    userId?: boolean
    guardian?: boolean | GuardianDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guardianUser"]>

  export type GuardianUserSelectScalar = {
    guardianId?: boolean
    userId?: boolean
  }

  export type GuardianUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"guardianId" | "userId", ExtArgs["result"]["guardianUser"]>
  export type GuardianUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guardian?: boolean | GuardianDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GuardianUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guardian?: boolean | GuardianDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GuardianUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guardian?: boolean | GuardianDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GuardianUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuardianUser"
    objects: {
      guardian: Prisma.$GuardianPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      guardianId: string
      userId: string
    }, ExtArgs["result"]["guardianUser"]>
    composites: {}
  }

  type GuardianUserGetPayload<S extends boolean | null | undefined | GuardianUserDefaultArgs> = $Result.GetResult<Prisma.$GuardianUserPayload, S>

  type GuardianUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuardianUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuardianUserCountAggregateInputType | true
    }

  export interface GuardianUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuardianUser'], meta: { name: 'GuardianUser' } }
    /**
     * Find zero or one GuardianUser that matches the filter.
     * @param {GuardianUserFindUniqueArgs} args - Arguments to find a GuardianUser
     * @example
     * // Get one GuardianUser
     * const guardianUser = await prisma.guardianUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuardianUserFindUniqueArgs>(args: SelectSubset<T, GuardianUserFindUniqueArgs<ExtArgs>>): Prisma__GuardianUserClient<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuardianUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuardianUserFindUniqueOrThrowArgs} args - Arguments to find a GuardianUser
     * @example
     * // Get one GuardianUser
     * const guardianUser = await prisma.guardianUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuardianUserFindUniqueOrThrowArgs>(args: SelectSubset<T, GuardianUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuardianUserClient<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuardianUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianUserFindFirstArgs} args - Arguments to find a GuardianUser
     * @example
     * // Get one GuardianUser
     * const guardianUser = await prisma.guardianUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuardianUserFindFirstArgs>(args?: SelectSubset<T, GuardianUserFindFirstArgs<ExtArgs>>): Prisma__GuardianUserClient<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuardianUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianUserFindFirstOrThrowArgs} args - Arguments to find a GuardianUser
     * @example
     * // Get one GuardianUser
     * const guardianUser = await prisma.guardianUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuardianUserFindFirstOrThrowArgs>(args?: SelectSubset<T, GuardianUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuardianUserClient<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuardianUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuardianUsers
     * const guardianUsers = await prisma.guardianUser.findMany()
     * 
     * // Get first 10 GuardianUsers
     * const guardianUsers = await prisma.guardianUser.findMany({ take: 10 })
     * 
     * // Only select the `guardianId`
     * const guardianUserWithGuardianIdOnly = await prisma.guardianUser.findMany({ select: { guardianId: true } })
     * 
     */
    findMany<T extends GuardianUserFindManyArgs>(args?: SelectSubset<T, GuardianUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuardianUser.
     * @param {GuardianUserCreateArgs} args - Arguments to create a GuardianUser.
     * @example
     * // Create one GuardianUser
     * const GuardianUser = await prisma.guardianUser.create({
     *   data: {
     *     // ... data to create a GuardianUser
     *   }
     * })
     * 
     */
    create<T extends GuardianUserCreateArgs>(args: SelectSubset<T, GuardianUserCreateArgs<ExtArgs>>): Prisma__GuardianUserClient<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuardianUsers.
     * @param {GuardianUserCreateManyArgs} args - Arguments to create many GuardianUsers.
     * @example
     * // Create many GuardianUsers
     * const guardianUser = await prisma.guardianUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuardianUserCreateManyArgs>(args?: SelectSubset<T, GuardianUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuardianUsers and returns the data saved in the database.
     * @param {GuardianUserCreateManyAndReturnArgs} args - Arguments to create many GuardianUsers.
     * @example
     * // Create many GuardianUsers
     * const guardianUser = await prisma.guardianUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuardianUsers and only return the `guardianId`
     * const guardianUserWithGuardianIdOnly = await prisma.guardianUser.createManyAndReturn({
     *   select: { guardianId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuardianUserCreateManyAndReturnArgs>(args?: SelectSubset<T, GuardianUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuardianUser.
     * @param {GuardianUserDeleteArgs} args - Arguments to delete one GuardianUser.
     * @example
     * // Delete one GuardianUser
     * const GuardianUser = await prisma.guardianUser.delete({
     *   where: {
     *     // ... filter to delete one GuardianUser
     *   }
     * })
     * 
     */
    delete<T extends GuardianUserDeleteArgs>(args: SelectSubset<T, GuardianUserDeleteArgs<ExtArgs>>): Prisma__GuardianUserClient<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuardianUser.
     * @param {GuardianUserUpdateArgs} args - Arguments to update one GuardianUser.
     * @example
     * // Update one GuardianUser
     * const guardianUser = await prisma.guardianUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuardianUserUpdateArgs>(args: SelectSubset<T, GuardianUserUpdateArgs<ExtArgs>>): Prisma__GuardianUserClient<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuardianUsers.
     * @param {GuardianUserDeleteManyArgs} args - Arguments to filter GuardianUsers to delete.
     * @example
     * // Delete a few GuardianUsers
     * const { count } = await prisma.guardianUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuardianUserDeleteManyArgs>(args?: SelectSubset<T, GuardianUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuardianUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuardianUsers
     * const guardianUser = await prisma.guardianUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuardianUserUpdateManyArgs>(args: SelectSubset<T, GuardianUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuardianUsers and returns the data updated in the database.
     * @param {GuardianUserUpdateManyAndReturnArgs} args - Arguments to update many GuardianUsers.
     * @example
     * // Update many GuardianUsers
     * const guardianUser = await prisma.guardianUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuardianUsers and only return the `guardianId`
     * const guardianUserWithGuardianIdOnly = await prisma.guardianUser.updateManyAndReturn({
     *   select: { guardianId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuardianUserUpdateManyAndReturnArgs>(args: SelectSubset<T, GuardianUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuardianUser.
     * @param {GuardianUserUpsertArgs} args - Arguments to update or create a GuardianUser.
     * @example
     * // Update or create a GuardianUser
     * const guardianUser = await prisma.guardianUser.upsert({
     *   create: {
     *     // ... data to create a GuardianUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuardianUser we want to update
     *   }
     * })
     */
    upsert<T extends GuardianUserUpsertArgs>(args: SelectSubset<T, GuardianUserUpsertArgs<ExtArgs>>): Prisma__GuardianUserClient<$Result.GetResult<Prisma.$GuardianUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuardianUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianUserCountArgs} args - Arguments to filter GuardianUsers to count.
     * @example
     * // Count the number of GuardianUsers
     * const count = await prisma.guardianUser.count({
     *   where: {
     *     // ... the filter for the GuardianUsers we want to count
     *   }
     * })
    **/
    count<T extends GuardianUserCountArgs>(
      args?: Subset<T, GuardianUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuardianUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuardianUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuardianUserAggregateArgs>(args: Subset<T, GuardianUserAggregateArgs>): Prisma.PrismaPromise<GetGuardianUserAggregateType<T>>

    /**
     * Group by GuardianUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianUserGroupByArgs} args - Group by arguments.
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
      T extends GuardianUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuardianUserGroupByArgs['orderBy'] }
        : { orderBy?: GuardianUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuardianUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuardianUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuardianUser model
   */
  readonly fields: GuardianUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuardianUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuardianUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guardian<T extends GuardianDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuardianDefaultArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GuardianUser model
   */
  interface GuardianUserFieldRefs {
    readonly guardianId: FieldRef<"GuardianUser", 'String'>
    readonly userId: FieldRef<"GuardianUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GuardianUser findUnique
   */
  export type GuardianUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
    /**
     * Filter, which GuardianUser to fetch.
     */
    where: GuardianUserWhereUniqueInput
  }

  /**
   * GuardianUser findUniqueOrThrow
   */
  export type GuardianUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
    /**
     * Filter, which GuardianUser to fetch.
     */
    where: GuardianUserWhereUniqueInput
  }

  /**
   * GuardianUser findFirst
   */
  export type GuardianUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
    /**
     * Filter, which GuardianUser to fetch.
     */
    where?: GuardianUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuardianUsers to fetch.
     */
    orderBy?: GuardianUserOrderByWithRelationInput | GuardianUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuardianUsers.
     */
    cursor?: GuardianUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuardianUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuardianUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuardianUsers.
     */
    distinct?: GuardianUserScalarFieldEnum | GuardianUserScalarFieldEnum[]
  }

  /**
   * GuardianUser findFirstOrThrow
   */
  export type GuardianUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
    /**
     * Filter, which GuardianUser to fetch.
     */
    where?: GuardianUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuardianUsers to fetch.
     */
    orderBy?: GuardianUserOrderByWithRelationInput | GuardianUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuardianUsers.
     */
    cursor?: GuardianUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuardianUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuardianUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuardianUsers.
     */
    distinct?: GuardianUserScalarFieldEnum | GuardianUserScalarFieldEnum[]
  }

  /**
   * GuardianUser findMany
   */
  export type GuardianUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
    /**
     * Filter, which GuardianUsers to fetch.
     */
    where?: GuardianUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuardianUsers to fetch.
     */
    orderBy?: GuardianUserOrderByWithRelationInput | GuardianUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuardianUsers.
     */
    cursor?: GuardianUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuardianUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuardianUsers.
     */
    skip?: number
    distinct?: GuardianUserScalarFieldEnum | GuardianUserScalarFieldEnum[]
  }

  /**
   * GuardianUser create
   */
  export type GuardianUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
    /**
     * The data needed to create a GuardianUser.
     */
    data: XOR<GuardianUserCreateInput, GuardianUserUncheckedCreateInput>
  }

  /**
   * GuardianUser createMany
   */
  export type GuardianUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuardianUsers.
     */
    data: GuardianUserCreateManyInput | GuardianUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuardianUser createManyAndReturn
   */
  export type GuardianUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * The data used to create many GuardianUsers.
     */
    data: GuardianUserCreateManyInput | GuardianUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuardianUser update
   */
  export type GuardianUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
    /**
     * The data needed to update a GuardianUser.
     */
    data: XOR<GuardianUserUpdateInput, GuardianUserUncheckedUpdateInput>
    /**
     * Choose, which GuardianUser to update.
     */
    where: GuardianUserWhereUniqueInput
  }

  /**
   * GuardianUser updateMany
   */
  export type GuardianUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuardianUsers.
     */
    data: XOR<GuardianUserUpdateManyMutationInput, GuardianUserUncheckedUpdateManyInput>
    /**
     * Filter which GuardianUsers to update
     */
    where?: GuardianUserWhereInput
    /**
     * Limit how many GuardianUsers to update.
     */
    limit?: number
  }

  /**
   * GuardianUser updateManyAndReturn
   */
  export type GuardianUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * The data used to update GuardianUsers.
     */
    data: XOR<GuardianUserUpdateManyMutationInput, GuardianUserUncheckedUpdateManyInput>
    /**
     * Filter which GuardianUsers to update
     */
    where?: GuardianUserWhereInput
    /**
     * Limit how many GuardianUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuardianUser upsert
   */
  export type GuardianUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
    /**
     * The filter to search for the GuardianUser to update in case it exists.
     */
    where: GuardianUserWhereUniqueInput
    /**
     * In case the GuardianUser found by the `where` argument doesn't exist, create a new GuardianUser with this data.
     */
    create: XOR<GuardianUserCreateInput, GuardianUserUncheckedCreateInput>
    /**
     * In case the GuardianUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuardianUserUpdateInput, GuardianUserUncheckedUpdateInput>
  }

  /**
   * GuardianUser delete
   */
  export type GuardianUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
    /**
     * Filter which GuardianUser to delete.
     */
    where: GuardianUserWhereUniqueInput
  }

  /**
   * GuardianUser deleteMany
   */
  export type GuardianUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuardianUsers to delete
     */
    where?: GuardianUserWhereInput
    /**
     * Limit how many GuardianUsers to delete.
     */
    limit?: number
  }

  /**
   * GuardianUser without action
   */
  export type GuardianUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianUser
     */
    select?: GuardianUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuardianUser
     */
    omit?: GuardianUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianUserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    eventDate: Date | null
    location: string | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    eventDate: Date | null
    location: string | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    eventDate: number
    location: number
    createdAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventDate?: true
    location?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventDate?: true
    location?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    eventDate?: true
    location?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string | null
    eventDate: Date
    location: string | null
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    eventDate?: boolean
    location?: boolean
    createdAt?: boolean
    participants?: boolean | Event$participantsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    eventDate?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    eventDate?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    eventDate?: boolean
    location?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "eventDate" | "location" | "createdAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | Event$participantsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      participants: Prisma.$EventParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      eventDate: Date
      location: string | null
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends Event$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Event$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly eventDate: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.participants
   */
  export type Event$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    cursor?: EventParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventParticipant
   */

  export type AggregateEventParticipant = {
    _count: EventParticipantCountAggregateOutputType | null
    _min: EventParticipantMinAggregateOutputType | null
    _max: EventParticipantMaxAggregateOutputType | null
  }

  export type EventParticipantMinAggregateOutputType = {
    eventId: string | null
    userId: string | null
    joinedAt: Date | null
  }

  export type EventParticipantMaxAggregateOutputType = {
    eventId: string | null
    userId: string | null
    joinedAt: Date | null
  }

  export type EventParticipantCountAggregateOutputType = {
    eventId: number
    userId: number
    joinedAt: number
    _all: number
  }


  export type EventParticipantMinAggregateInputType = {
    eventId?: true
    userId?: true
    joinedAt?: true
  }

  export type EventParticipantMaxAggregateInputType = {
    eventId?: true
    userId?: true
    joinedAt?: true
  }

  export type EventParticipantCountAggregateInputType = {
    eventId?: true
    userId?: true
    joinedAt?: true
    _all?: true
  }

  export type EventParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipant to aggregate.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventParticipants
    **/
    _count?: true | EventParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventParticipantMaxAggregateInputType
  }

  export type GetEventParticipantAggregateType<T extends EventParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateEventParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventParticipant[P]>
      : GetScalarType<T[P], AggregateEventParticipant[P]>
  }




  export type EventParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventParticipantWhereInput
    orderBy?: EventParticipantOrderByWithAggregationInput | EventParticipantOrderByWithAggregationInput[]
    by: EventParticipantScalarFieldEnum[] | EventParticipantScalarFieldEnum
    having?: EventParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventParticipantCountAggregateInputType | true
    _min?: EventParticipantMinAggregateInputType
    _max?: EventParticipantMaxAggregateInputType
  }

  export type EventParticipantGroupByOutputType = {
    eventId: string
    userId: string
    joinedAt: Date
    _count: EventParticipantCountAggregateOutputType | null
    _min: EventParticipantMinAggregateOutputType | null
    _max: EventParticipantMaxAggregateOutputType | null
  }

  type GetEventParticipantGroupByPayload<T extends EventParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], EventParticipantGroupByOutputType[P]>
        }
      >
    >


  export type EventParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    userId?: boolean
    joinedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    userId?: boolean
    joinedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    userId?: boolean
    joinedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventParticipant"]>

  export type EventParticipantSelectScalar = {
    eventId?: boolean
    userId?: boolean
    joinedAt?: boolean
  }

  export type EventParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "userId" | "joinedAt", ExtArgs["result"]["eventParticipant"]>
  export type EventParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventParticipant"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      userId: string
      joinedAt: Date
    }, ExtArgs["result"]["eventParticipant"]>
    composites: {}
  }

  type EventParticipantGetPayload<S extends boolean | null | undefined | EventParticipantDefaultArgs> = $Result.GetResult<Prisma.$EventParticipantPayload, S>

  type EventParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventParticipantCountAggregateInputType | true
    }

  export interface EventParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventParticipant'], meta: { name: 'EventParticipant' } }
    /**
     * Find zero or one EventParticipant that matches the filter.
     * @param {EventParticipantFindUniqueArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventParticipantFindUniqueArgs>(args: SelectSubset<T, EventParticipantFindUniqueArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventParticipantFindUniqueOrThrowArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, EventParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindFirstArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventParticipantFindFirstArgs>(args?: SelectSubset<T, EventParticipantFindFirstArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindFirstOrThrowArgs} args - Arguments to find a EventParticipant
     * @example
     * // Get one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, EventParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventParticipants
     * const eventParticipants = await prisma.eventParticipant.findMany()
     * 
     * // Get first 10 EventParticipants
     * const eventParticipants = await prisma.eventParticipant.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const eventParticipantWithEventIdOnly = await prisma.eventParticipant.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends EventParticipantFindManyArgs>(args?: SelectSubset<T, EventParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventParticipant.
     * @param {EventParticipantCreateArgs} args - Arguments to create a EventParticipant.
     * @example
     * // Create one EventParticipant
     * const EventParticipant = await prisma.eventParticipant.create({
     *   data: {
     *     // ... data to create a EventParticipant
     *   }
     * })
     * 
     */
    create<T extends EventParticipantCreateArgs>(args: SelectSubset<T, EventParticipantCreateArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventParticipants.
     * @param {EventParticipantCreateManyArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventParticipantCreateManyArgs>(args?: SelectSubset<T, EventParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventParticipants and returns the data saved in the database.
     * @param {EventParticipantCreateManyAndReturnArgs} args - Arguments to create many EventParticipants.
     * @example
     * // Create many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventParticipants and only return the `eventId`
     * const eventParticipantWithEventIdOnly = await prisma.eventParticipant.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, EventParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventParticipant.
     * @param {EventParticipantDeleteArgs} args - Arguments to delete one EventParticipant.
     * @example
     * // Delete one EventParticipant
     * const EventParticipant = await prisma.eventParticipant.delete({
     *   where: {
     *     // ... filter to delete one EventParticipant
     *   }
     * })
     * 
     */
    delete<T extends EventParticipantDeleteArgs>(args: SelectSubset<T, EventParticipantDeleteArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventParticipant.
     * @param {EventParticipantUpdateArgs} args - Arguments to update one EventParticipant.
     * @example
     * // Update one EventParticipant
     * const eventParticipant = await prisma.eventParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventParticipantUpdateArgs>(args: SelectSubset<T, EventParticipantUpdateArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventParticipants.
     * @param {EventParticipantDeleteManyArgs} args - Arguments to filter EventParticipants to delete.
     * @example
     * // Delete a few EventParticipants
     * const { count } = await prisma.eventParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventParticipantDeleteManyArgs>(args?: SelectSubset<T, EventParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventParticipantUpdateManyArgs>(args: SelectSubset<T, EventParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventParticipants and returns the data updated in the database.
     * @param {EventParticipantUpdateManyAndReturnArgs} args - Arguments to update many EventParticipants.
     * @example
     * // Update many EventParticipants
     * const eventParticipant = await prisma.eventParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventParticipants and only return the `eventId`
     * const eventParticipantWithEventIdOnly = await prisma.eventParticipant.updateManyAndReturn({
     *   select: { eventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, EventParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventParticipant.
     * @param {EventParticipantUpsertArgs} args - Arguments to update or create a EventParticipant.
     * @example
     * // Update or create a EventParticipant
     * const eventParticipant = await prisma.eventParticipant.upsert({
     *   create: {
     *     // ... data to create a EventParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventParticipant we want to update
     *   }
     * })
     */
    upsert<T extends EventParticipantUpsertArgs>(args: SelectSubset<T, EventParticipantUpsertArgs<ExtArgs>>): Prisma__EventParticipantClient<$Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantCountArgs} args - Arguments to filter EventParticipants to count.
     * @example
     * // Count the number of EventParticipants
     * const count = await prisma.eventParticipant.count({
     *   where: {
     *     // ... the filter for the EventParticipants we want to count
     *   }
     * })
    **/
    count<T extends EventParticipantCountArgs>(
      args?: Subset<T, EventParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventParticipantAggregateArgs>(args: Subset<T, EventParticipantAggregateArgs>): Prisma.PrismaPromise<GetEventParticipantAggregateType<T>>

    /**
     * Group by EventParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventParticipantGroupByArgs} args - Group by arguments.
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
      T extends EventParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventParticipantGroupByArgs['orderBy'] }
        : { orderBy?: EventParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventParticipant model
   */
  readonly fields: EventParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventParticipant model
   */
  interface EventParticipantFieldRefs {
    readonly eventId: FieldRef<"EventParticipant", 'String'>
    readonly userId: FieldRef<"EventParticipant", 'String'>
    readonly joinedAt: FieldRef<"EventParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventParticipant findUnique
   */
  export type EventParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant findUniqueOrThrow
   */
  export type EventParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant findFirst
   */
  export type EventParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant findFirstOrThrow
   */
  export type EventParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipant to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventParticipants.
     */
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant findMany
   */
  export type EventParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter, which EventParticipants to fetch.
     */
    where?: EventParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventParticipants to fetch.
     */
    orderBy?: EventParticipantOrderByWithRelationInput | EventParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventParticipants.
     */
    cursor?: EventParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventParticipants.
     */
    skip?: number
    distinct?: EventParticipantScalarFieldEnum | EventParticipantScalarFieldEnum[]
  }

  /**
   * EventParticipant create
   */
  export type EventParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a EventParticipant.
     */
    data: XOR<EventParticipantCreateInput, EventParticipantUncheckedCreateInput>
  }

  /**
   * EventParticipant createMany
   */
  export type EventParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventParticipants.
     */
    data: EventParticipantCreateManyInput | EventParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventParticipant createManyAndReturn
   */
  export type EventParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many EventParticipants.
     */
    data: EventParticipantCreateManyInput | EventParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventParticipant update
   */
  export type EventParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a EventParticipant.
     */
    data: XOR<EventParticipantUpdateInput, EventParticipantUncheckedUpdateInput>
    /**
     * Choose, which EventParticipant to update.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant updateMany
   */
  export type EventParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventParticipants.
     */
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyInput>
    /**
     * Filter which EventParticipants to update
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number
  }

  /**
   * EventParticipant updateManyAndReturn
   */
  export type EventParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * The data used to update EventParticipants.
     */
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyInput>
    /**
     * Filter which EventParticipants to update
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventParticipant upsert
   */
  export type EventParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the EventParticipant to update in case it exists.
     */
    where: EventParticipantWhereUniqueInput
    /**
     * In case the EventParticipant found by the `where` argument doesn't exist, create a new EventParticipant with this data.
     */
    create: XOR<EventParticipantCreateInput, EventParticipantUncheckedCreateInput>
    /**
     * In case the EventParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventParticipantUpdateInput, EventParticipantUncheckedUpdateInput>
  }

  /**
   * EventParticipant delete
   */
  export type EventParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
    /**
     * Filter which EventParticipant to delete.
     */
    where: EventParticipantWhereUniqueInput
  }

  /**
   * EventParticipant deleteMany
   */
  export type EventParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventParticipants to delete
     */
    where?: EventParticipantWhereInput
    /**
     * Limit how many EventParticipants to delete.
     */
    limit?: number
  }

  /**
   * EventParticipant without action
   */
  export type EventParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventParticipant
     */
    select?: EventParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventParticipant
     */
    omit?: EventParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventParticipantInclude<ExtArgs> | null
  }


  /**
   * Model DailyTip
   */

  export type AggregateDailyTip = {
    _count: DailyTipCountAggregateOutputType | null
    _min: DailyTipMinAggregateOutputType | null
    _max: DailyTipMaxAggregateOutputType | null
  }

  export type DailyTipMinAggregateOutputType = {
    id: string | null
    tipDate: Date | null
    content: string | null
  }

  export type DailyTipMaxAggregateOutputType = {
    id: string | null
    tipDate: Date | null
    content: string | null
  }

  export type DailyTipCountAggregateOutputType = {
    id: number
    tipDate: number
    content: number
    _all: number
  }


  export type DailyTipMinAggregateInputType = {
    id?: true
    tipDate?: true
    content?: true
  }

  export type DailyTipMaxAggregateInputType = {
    id?: true
    tipDate?: true
    content?: true
  }

  export type DailyTipCountAggregateInputType = {
    id?: true
    tipDate?: true
    content?: true
    _all?: true
  }

  export type DailyTipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyTip to aggregate.
     */
    where?: DailyTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTips to fetch.
     */
    orderBy?: DailyTipOrderByWithRelationInput | DailyTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyTips
    **/
    _count?: true | DailyTipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyTipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyTipMaxAggregateInputType
  }

  export type GetDailyTipAggregateType<T extends DailyTipAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyTip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyTip[P]>
      : GetScalarType<T[P], AggregateDailyTip[P]>
  }




  export type DailyTipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyTipWhereInput
    orderBy?: DailyTipOrderByWithAggregationInput | DailyTipOrderByWithAggregationInput[]
    by: DailyTipScalarFieldEnum[] | DailyTipScalarFieldEnum
    having?: DailyTipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyTipCountAggregateInputType | true
    _min?: DailyTipMinAggregateInputType
    _max?: DailyTipMaxAggregateInputType
  }

  export type DailyTipGroupByOutputType = {
    id: string
    tipDate: Date
    content: string
    _count: DailyTipCountAggregateOutputType | null
    _min: DailyTipMinAggregateOutputType | null
    _max: DailyTipMaxAggregateOutputType | null
  }

  type GetDailyTipGroupByPayload<T extends DailyTipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyTipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyTipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyTipGroupByOutputType[P]>
            : GetScalarType<T[P], DailyTipGroupByOutputType[P]>
        }
      >
    >


  export type DailyTipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipDate?: boolean
    content?: boolean
  }, ExtArgs["result"]["dailyTip"]>

  export type DailyTipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipDate?: boolean
    content?: boolean
  }, ExtArgs["result"]["dailyTip"]>

  export type DailyTipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipDate?: boolean
    content?: boolean
  }, ExtArgs["result"]["dailyTip"]>

  export type DailyTipSelectScalar = {
    id?: boolean
    tipDate?: boolean
    content?: boolean
  }

  export type DailyTipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipDate" | "content", ExtArgs["result"]["dailyTip"]>

  export type $DailyTipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyTip"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipDate: Date
      content: string
    }, ExtArgs["result"]["dailyTip"]>
    composites: {}
  }

  type DailyTipGetPayload<S extends boolean | null | undefined | DailyTipDefaultArgs> = $Result.GetResult<Prisma.$DailyTipPayload, S>

  type DailyTipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyTipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyTipCountAggregateInputType | true
    }

  export interface DailyTipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyTip'], meta: { name: 'DailyTip' } }
    /**
     * Find zero or one DailyTip that matches the filter.
     * @param {DailyTipFindUniqueArgs} args - Arguments to find a DailyTip
     * @example
     * // Get one DailyTip
     * const dailyTip = await prisma.dailyTip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyTipFindUniqueArgs>(args: SelectSubset<T, DailyTipFindUniqueArgs<ExtArgs>>): Prisma__DailyTipClient<$Result.GetResult<Prisma.$DailyTipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyTip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyTipFindUniqueOrThrowArgs} args - Arguments to find a DailyTip
     * @example
     * // Get one DailyTip
     * const dailyTip = await prisma.dailyTip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyTipFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyTipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyTipClient<$Result.GetResult<Prisma.$DailyTipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyTip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTipFindFirstArgs} args - Arguments to find a DailyTip
     * @example
     * // Get one DailyTip
     * const dailyTip = await prisma.dailyTip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyTipFindFirstArgs>(args?: SelectSubset<T, DailyTipFindFirstArgs<ExtArgs>>): Prisma__DailyTipClient<$Result.GetResult<Prisma.$DailyTipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyTip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTipFindFirstOrThrowArgs} args - Arguments to find a DailyTip
     * @example
     * // Get one DailyTip
     * const dailyTip = await prisma.dailyTip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyTipFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyTipFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyTipClient<$Result.GetResult<Prisma.$DailyTipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyTips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyTips
     * const dailyTips = await prisma.dailyTip.findMany()
     * 
     * // Get first 10 DailyTips
     * const dailyTips = await prisma.dailyTip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyTipWithIdOnly = await prisma.dailyTip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyTipFindManyArgs>(args?: SelectSubset<T, DailyTipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyTip.
     * @param {DailyTipCreateArgs} args - Arguments to create a DailyTip.
     * @example
     * // Create one DailyTip
     * const DailyTip = await prisma.dailyTip.create({
     *   data: {
     *     // ... data to create a DailyTip
     *   }
     * })
     * 
     */
    create<T extends DailyTipCreateArgs>(args: SelectSubset<T, DailyTipCreateArgs<ExtArgs>>): Prisma__DailyTipClient<$Result.GetResult<Prisma.$DailyTipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyTips.
     * @param {DailyTipCreateManyArgs} args - Arguments to create many DailyTips.
     * @example
     * // Create many DailyTips
     * const dailyTip = await prisma.dailyTip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyTipCreateManyArgs>(args?: SelectSubset<T, DailyTipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyTips and returns the data saved in the database.
     * @param {DailyTipCreateManyAndReturnArgs} args - Arguments to create many DailyTips.
     * @example
     * // Create many DailyTips
     * const dailyTip = await prisma.dailyTip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyTips and only return the `id`
     * const dailyTipWithIdOnly = await prisma.dailyTip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyTipCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyTipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyTip.
     * @param {DailyTipDeleteArgs} args - Arguments to delete one DailyTip.
     * @example
     * // Delete one DailyTip
     * const DailyTip = await prisma.dailyTip.delete({
     *   where: {
     *     // ... filter to delete one DailyTip
     *   }
     * })
     * 
     */
    delete<T extends DailyTipDeleteArgs>(args: SelectSubset<T, DailyTipDeleteArgs<ExtArgs>>): Prisma__DailyTipClient<$Result.GetResult<Prisma.$DailyTipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyTip.
     * @param {DailyTipUpdateArgs} args - Arguments to update one DailyTip.
     * @example
     * // Update one DailyTip
     * const dailyTip = await prisma.dailyTip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyTipUpdateArgs>(args: SelectSubset<T, DailyTipUpdateArgs<ExtArgs>>): Prisma__DailyTipClient<$Result.GetResult<Prisma.$DailyTipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyTips.
     * @param {DailyTipDeleteManyArgs} args - Arguments to filter DailyTips to delete.
     * @example
     * // Delete a few DailyTips
     * const { count } = await prisma.dailyTip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyTipDeleteManyArgs>(args?: SelectSubset<T, DailyTipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyTips
     * const dailyTip = await prisma.dailyTip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyTipUpdateManyArgs>(args: SelectSubset<T, DailyTipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyTips and returns the data updated in the database.
     * @param {DailyTipUpdateManyAndReturnArgs} args - Arguments to update many DailyTips.
     * @example
     * // Update many DailyTips
     * const dailyTip = await prisma.dailyTip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyTips and only return the `id`
     * const dailyTipWithIdOnly = await prisma.dailyTip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyTipUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyTipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyTip.
     * @param {DailyTipUpsertArgs} args - Arguments to update or create a DailyTip.
     * @example
     * // Update or create a DailyTip
     * const dailyTip = await prisma.dailyTip.upsert({
     *   create: {
     *     // ... data to create a DailyTip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyTip we want to update
     *   }
     * })
     */
    upsert<T extends DailyTipUpsertArgs>(args: SelectSubset<T, DailyTipUpsertArgs<ExtArgs>>): Prisma__DailyTipClient<$Result.GetResult<Prisma.$DailyTipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTipCountArgs} args - Arguments to filter DailyTips to count.
     * @example
     * // Count the number of DailyTips
     * const count = await prisma.dailyTip.count({
     *   where: {
     *     // ... the filter for the DailyTips we want to count
     *   }
     * })
    **/
    count<T extends DailyTipCountArgs>(
      args?: Subset<T, DailyTipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyTipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyTipAggregateArgs>(args: Subset<T, DailyTipAggregateArgs>): Prisma.PrismaPromise<GetDailyTipAggregateType<T>>

    /**
     * Group by DailyTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTipGroupByArgs} args - Group by arguments.
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
      T extends DailyTipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyTipGroupByArgs['orderBy'] }
        : { orderBy?: DailyTipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyTipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyTipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyTip model
   */
  readonly fields: DailyTipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyTip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyTipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the DailyTip model
   */
  interface DailyTipFieldRefs {
    readonly id: FieldRef<"DailyTip", 'String'>
    readonly tipDate: FieldRef<"DailyTip", 'DateTime'>
    readonly content: FieldRef<"DailyTip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyTip findUnique
   */
  export type DailyTipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
    /**
     * Filter, which DailyTip to fetch.
     */
    where: DailyTipWhereUniqueInput
  }

  /**
   * DailyTip findUniqueOrThrow
   */
  export type DailyTipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
    /**
     * Filter, which DailyTip to fetch.
     */
    where: DailyTipWhereUniqueInput
  }

  /**
   * DailyTip findFirst
   */
  export type DailyTipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
    /**
     * Filter, which DailyTip to fetch.
     */
    where?: DailyTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTips to fetch.
     */
    orderBy?: DailyTipOrderByWithRelationInput | DailyTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyTips.
     */
    cursor?: DailyTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyTips.
     */
    distinct?: DailyTipScalarFieldEnum | DailyTipScalarFieldEnum[]
  }

  /**
   * DailyTip findFirstOrThrow
   */
  export type DailyTipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
    /**
     * Filter, which DailyTip to fetch.
     */
    where?: DailyTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTips to fetch.
     */
    orderBy?: DailyTipOrderByWithRelationInput | DailyTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyTips.
     */
    cursor?: DailyTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyTips.
     */
    distinct?: DailyTipScalarFieldEnum | DailyTipScalarFieldEnum[]
  }

  /**
   * DailyTip findMany
   */
  export type DailyTipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
    /**
     * Filter, which DailyTips to fetch.
     */
    where?: DailyTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTips to fetch.
     */
    orderBy?: DailyTipOrderByWithRelationInput | DailyTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyTips.
     */
    cursor?: DailyTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTips.
     */
    skip?: number
    distinct?: DailyTipScalarFieldEnum | DailyTipScalarFieldEnum[]
  }

  /**
   * DailyTip create
   */
  export type DailyTipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
    /**
     * The data needed to create a DailyTip.
     */
    data: XOR<DailyTipCreateInput, DailyTipUncheckedCreateInput>
  }

  /**
   * DailyTip createMany
   */
  export type DailyTipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyTips.
     */
    data: DailyTipCreateManyInput | DailyTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyTip createManyAndReturn
   */
  export type DailyTipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
    /**
     * The data used to create many DailyTips.
     */
    data: DailyTipCreateManyInput | DailyTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyTip update
   */
  export type DailyTipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
    /**
     * The data needed to update a DailyTip.
     */
    data: XOR<DailyTipUpdateInput, DailyTipUncheckedUpdateInput>
    /**
     * Choose, which DailyTip to update.
     */
    where: DailyTipWhereUniqueInput
  }

  /**
   * DailyTip updateMany
   */
  export type DailyTipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyTips.
     */
    data: XOR<DailyTipUpdateManyMutationInput, DailyTipUncheckedUpdateManyInput>
    /**
     * Filter which DailyTips to update
     */
    where?: DailyTipWhereInput
    /**
     * Limit how many DailyTips to update.
     */
    limit?: number
  }

  /**
   * DailyTip updateManyAndReturn
   */
  export type DailyTipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
    /**
     * The data used to update DailyTips.
     */
    data: XOR<DailyTipUpdateManyMutationInput, DailyTipUncheckedUpdateManyInput>
    /**
     * Filter which DailyTips to update
     */
    where?: DailyTipWhereInput
    /**
     * Limit how many DailyTips to update.
     */
    limit?: number
  }

  /**
   * DailyTip upsert
   */
  export type DailyTipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
    /**
     * The filter to search for the DailyTip to update in case it exists.
     */
    where: DailyTipWhereUniqueInput
    /**
     * In case the DailyTip found by the `where` argument doesn't exist, create a new DailyTip with this data.
     */
    create: XOR<DailyTipCreateInput, DailyTipUncheckedCreateInput>
    /**
     * In case the DailyTip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyTipUpdateInput, DailyTipUncheckedUpdateInput>
  }

  /**
   * DailyTip delete
   */
  export type DailyTipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
    /**
     * Filter which DailyTip to delete.
     */
    where: DailyTipWhereUniqueInput
  }

  /**
   * DailyTip deleteMany
   */
  export type DailyTipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyTips to delete
     */
    where?: DailyTipWhereInput
    /**
     * Limit how many DailyTips to delete.
     */
    limit?: number
  }

  /**
   * DailyTip without action
   */
  export type DailyTipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTip
     */
    select?: DailyTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTip
     */
    omit?: DailyTipOmit<ExtArgs> | null
  }


  /**
   * Model Health
   */

  export type AggregateHealth = {
    _count: HealthCountAggregateOutputType | null
    _avg: HealthAvgAggregateOutputType | null
    _sum: HealthSumAggregateOutputType | null
    _min: HealthMinAggregateOutputType | null
    _max: HealthMaxAggregateOutputType | null
  }

  export type HealthAvgAggregateOutputType = {
    heartRate: number | null
    steps: number | null
    sleepHours: number | null
  }

  export type HealthSumAggregateOutputType = {
    heartRate: number | null
    steps: number | null
    sleepHours: number | null
  }

  export type HealthMinAggregateOutputType = {
    id: string | null
    userId: string | null
    recordedAt: Date | null
    heartRate: number | null
    bloodPressure: string | null
    steps: number | null
    sleepHours: number | null
    notes: string | null
  }

  export type HealthMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    recordedAt: Date | null
    heartRate: number | null
    bloodPressure: string | null
    steps: number | null
    sleepHours: number | null
    notes: string | null
  }

  export type HealthCountAggregateOutputType = {
    id: number
    userId: number
    recordedAt: number
    heartRate: number
    bloodPressure: number
    steps: number
    sleepHours: number
    notes: number
    _all: number
  }


  export type HealthAvgAggregateInputType = {
    heartRate?: true
    steps?: true
    sleepHours?: true
  }

  export type HealthSumAggregateInputType = {
    heartRate?: true
    steps?: true
    sleepHours?: true
  }

  export type HealthMinAggregateInputType = {
    id?: true
    userId?: true
    recordedAt?: true
    heartRate?: true
    bloodPressure?: true
    steps?: true
    sleepHours?: true
    notes?: true
  }

  export type HealthMaxAggregateInputType = {
    id?: true
    userId?: true
    recordedAt?: true
    heartRate?: true
    bloodPressure?: true
    steps?: true
    sleepHours?: true
    notes?: true
  }

  export type HealthCountAggregateInputType = {
    id?: true
    userId?: true
    recordedAt?: true
    heartRate?: true
    bloodPressure?: true
    steps?: true
    sleepHours?: true
    notes?: true
    _all?: true
  }

  export type HealthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Health to aggregate.
     */
    where?: HealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health to fetch.
     */
    orderBy?: HealthOrderByWithRelationInput | HealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Health
    **/
    _count?: true | HealthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthMaxAggregateInputType
  }

  export type GetHealthAggregateType<T extends HealthAggregateArgs> = {
        [P in keyof T & keyof AggregateHealth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealth[P]>
      : GetScalarType<T[P], AggregateHealth[P]>
  }




  export type HealthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthWhereInput
    orderBy?: HealthOrderByWithAggregationInput | HealthOrderByWithAggregationInput[]
    by: HealthScalarFieldEnum[] | HealthScalarFieldEnum
    having?: HealthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthCountAggregateInputType | true
    _avg?: HealthAvgAggregateInputType
    _sum?: HealthSumAggregateInputType
    _min?: HealthMinAggregateInputType
    _max?: HealthMaxAggregateInputType
  }

  export type HealthGroupByOutputType = {
    id: string
    userId: string
    recordedAt: Date
    heartRate: number | null
    bloodPressure: string | null
    steps: number | null
    sleepHours: number | null
    notes: string | null
    _count: HealthCountAggregateOutputType | null
    _avg: HealthAvgAggregateOutputType | null
    _sum: HealthSumAggregateOutputType | null
    _min: HealthMinAggregateOutputType | null
    _max: HealthMaxAggregateOutputType | null
  }

  type GetHealthGroupByPayload<T extends HealthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthGroupByOutputType[P]>
            : GetScalarType<T[P], HealthGroupByOutputType[P]>
        }
      >
    >


  export type HealthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    heartRate?: boolean
    bloodPressure?: boolean
    steps?: boolean
    sleepHours?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["health"]>

  export type HealthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    heartRate?: boolean
    bloodPressure?: boolean
    steps?: boolean
    sleepHours?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["health"]>

  export type HealthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    heartRate?: boolean
    bloodPressure?: boolean
    steps?: boolean
    sleepHours?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["health"]>

  export type HealthSelectScalar = {
    id?: boolean
    userId?: boolean
    recordedAt?: boolean
    heartRate?: boolean
    bloodPressure?: boolean
    steps?: boolean
    sleepHours?: boolean
    notes?: boolean
  }

  export type HealthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "recordedAt" | "heartRate" | "bloodPressure" | "steps" | "sleepHours" | "notes", ExtArgs["result"]["health"]>
  export type HealthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HealthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HealthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HealthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Health"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      recordedAt: Date
      heartRate: number | null
      bloodPressure: string | null
      steps: number | null
      sleepHours: number | null
      notes: string | null
    }, ExtArgs["result"]["health"]>
    composites: {}
  }

  type HealthGetPayload<S extends boolean | null | undefined | HealthDefaultArgs> = $Result.GetResult<Prisma.$HealthPayload, S>

  type HealthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthCountAggregateInputType | true
    }

  export interface HealthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Health'], meta: { name: 'Health' } }
    /**
     * Find zero or one Health that matches the filter.
     * @param {HealthFindUniqueArgs} args - Arguments to find a Health
     * @example
     * // Get one Health
     * const health = await prisma.health.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealthFindUniqueArgs>(args: SelectSubset<T, HealthFindUniqueArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Health that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealthFindUniqueOrThrowArgs} args - Arguments to find a Health
     * @example
     * // Get one Health
     * const health = await prisma.health.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealthFindUniqueOrThrowArgs>(args: SelectSubset<T, HealthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthFindFirstArgs} args - Arguments to find a Health
     * @example
     * // Get one Health
     * const health = await prisma.health.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealthFindFirstArgs>(args?: SelectSubset<T, HealthFindFirstArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthFindFirstOrThrowArgs} args - Arguments to find a Health
     * @example
     * // Get one Health
     * const health = await prisma.health.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealthFindFirstOrThrowArgs>(args?: SelectSubset<T, HealthFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Health that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Health
     * const health = await prisma.health.findMany()
     * 
     * // Get first 10 Health
     * const health = await prisma.health.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthWithIdOnly = await prisma.health.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealthFindManyArgs>(args?: SelectSubset<T, HealthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Health.
     * @param {HealthCreateArgs} args - Arguments to create a Health.
     * @example
     * // Create one Health
     * const Health = await prisma.health.create({
     *   data: {
     *     // ... data to create a Health
     *   }
     * })
     * 
     */
    create<T extends HealthCreateArgs>(args: SelectSubset<T, HealthCreateArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Health.
     * @param {HealthCreateManyArgs} args - Arguments to create many Health.
     * @example
     * // Create many Health
     * const health = await prisma.health.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealthCreateManyArgs>(args?: SelectSubset<T, HealthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Health and returns the data saved in the database.
     * @param {HealthCreateManyAndReturnArgs} args - Arguments to create many Health.
     * @example
     * // Create many Health
     * const health = await prisma.health.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Health and only return the `id`
     * const healthWithIdOnly = await prisma.health.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HealthCreateManyAndReturnArgs>(args?: SelectSubset<T, HealthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Health.
     * @param {HealthDeleteArgs} args - Arguments to delete one Health.
     * @example
     * // Delete one Health
     * const Health = await prisma.health.delete({
     *   where: {
     *     // ... filter to delete one Health
     *   }
     * })
     * 
     */
    delete<T extends HealthDeleteArgs>(args: SelectSubset<T, HealthDeleteArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Health.
     * @param {HealthUpdateArgs} args - Arguments to update one Health.
     * @example
     * // Update one Health
     * const health = await prisma.health.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealthUpdateArgs>(args: SelectSubset<T, HealthUpdateArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Health.
     * @param {HealthDeleteManyArgs} args - Arguments to filter Health to delete.
     * @example
     * // Delete a few Health
     * const { count } = await prisma.health.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealthDeleteManyArgs>(args?: SelectSubset<T, HealthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Health.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Health
     * const health = await prisma.health.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealthUpdateManyArgs>(args: SelectSubset<T, HealthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Health and returns the data updated in the database.
     * @param {HealthUpdateManyAndReturnArgs} args - Arguments to update many Health.
     * @example
     * // Update many Health
     * const health = await prisma.health.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Health and only return the `id`
     * const healthWithIdOnly = await prisma.health.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HealthUpdateManyAndReturnArgs>(args: SelectSubset<T, HealthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Health.
     * @param {HealthUpsertArgs} args - Arguments to update or create a Health.
     * @example
     * // Update or create a Health
     * const health = await prisma.health.upsert({
     *   create: {
     *     // ... data to create a Health
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Health we want to update
     *   }
     * })
     */
    upsert<T extends HealthUpsertArgs>(args: SelectSubset<T, HealthUpsertArgs<ExtArgs>>): Prisma__HealthClient<$Result.GetResult<Prisma.$HealthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Health.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthCountArgs} args - Arguments to filter Health to count.
     * @example
     * // Count the number of Health
     * const count = await prisma.health.count({
     *   where: {
     *     // ... the filter for the Health we want to count
     *   }
     * })
    **/
    count<T extends HealthCountArgs>(
      args?: Subset<T, HealthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Health.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HealthAggregateArgs>(args: Subset<T, HealthAggregateArgs>): Prisma.PrismaPromise<GetHealthAggregateType<T>>

    /**
     * Group by Health.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthGroupByArgs} args - Group by arguments.
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
      T extends HealthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthGroupByArgs['orderBy'] }
        : { orderBy?: HealthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HealthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Health model
   */
  readonly fields: HealthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Health.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Health model
   */
  interface HealthFieldRefs {
    readonly id: FieldRef<"Health", 'String'>
    readonly userId: FieldRef<"Health", 'String'>
    readonly recordedAt: FieldRef<"Health", 'DateTime'>
    readonly heartRate: FieldRef<"Health", 'Int'>
    readonly bloodPressure: FieldRef<"Health", 'String'>
    readonly steps: FieldRef<"Health", 'Int'>
    readonly sleepHours: FieldRef<"Health", 'Float'>
    readonly notes: FieldRef<"Health", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Health findUnique
   */
  export type HealthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter, which Health to fetch.
     */
    where: HealthWhereUniqueInput
  }

  /**
   * Health findUniqueOrThrow
   */
  export type HealthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter, which Health to fetch.
     */
    where: HealthWhereUniqueInput
  }

  /**
   * Health findFirst
   */
  export type HealthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter, which Health to fetch.
     */
    where?: HealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health to fetch.
     */
    orderBy?: HealthOrderByWithRelationInput | HealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Health.
     */
    cursor?: HealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Health.
     */
    distinct?: HealthScalarFieldEnum | HealthScalarFieldEnum[]
  }

  /**
   * Health findFirstOrThrow
   */
  export type HealthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter, which Health to fetch.
     */
    where?: HealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health to fetch.
     */
    orderBy?: HealthOrderByWithRelationInput | HealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Health.
     */
    cursor?: HealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Health.
     */
    distinct?: HealthScalarFieldEnum | HealthScalarFieldEnum[]
  }

  /**
   * Health findMany
   */
  export type HealthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter, which Health to fetch.
     */
    where?: HealthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Health to fetch.
     */
    orderBy?: HealthOrderByWithRelationInput | HealthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Health.
     */
    cursor?: HealthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Health from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Health.
     */
    skip?: number
    distinct?: HealthScalarFieldEnum | HealthScalarFieldEnum[]
  }

  /**
   * Health create
   */
  export type HealthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * The data needed to create a Health.
     */
    data: XOR<HealthCreateInput, HealthUncheckedCreateInput>
  }

  /**
   * Health createMany
   */
  export type HealthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Health.
     */
    data: HealthCreateManyInput | HealthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Health createManyAndReturn
   */
  export type HealthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * The data used to create many Health.
     */
    data: HealthCreateManyInput | HealthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Health update
   */
  export type HealthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * The data needed to update a Health.
     */
    data: XOR<HealthUpdateInput, HealthUncheckedUpdateInput>
    /**
     * Choose, which Health to update.
     */
    where: HealthWhereUniqueInput
  }

  /**
   * Health updateMany
   */
  export type HealthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Health.
     */
    data: XOR<HealthUpdateManyMutationInput, HealthUncheckedUpdateManyInput>
    /**
     * Filter which Health to update
     */
    where?: HealthWhereInput
    /**
     * Limit how many Health to update.
     */
    limit?: number
  }

  /**
   * Health updateManyAndReturn
   */
  export type HealthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * The data used to update Health.
     */
    data: XOR<HealthUpdateManyMutationInput, HealthUncheckedUpdateManyInput>
    /**
     * Filter which Health to update
     */
    where?: HealthWhereInput
    /**
     * Limit how many Health to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Health upsert
   */
  export type HealthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * The filter to search for the Health to update in case it exists.
     */
    where: HealthWhereUniqueInput
    /**
     * In case the Health found by the `where` argument doesn't exist, create a new Health with this data.
     */
    create: XOR<HealthCreateInput, HealthUncheckedCreateInput>
    /**
     * In case the Health was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthUpdateInput, HealthUncheckedUpdateInput>
  }

  /**
   * Health delete
   */
  export type HealthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
    /**
     * Filter which Health to delete.
     */
    where: HealthWhereUniqueInput
  }

  /**
   * Health deleteMany
   */
  export type HealthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Health to delete
     */
    where?: HealthWhereInput
    /**
     * Limit how many Health to delete.
     */
    limit?: number
  }

  /**
   * Health without action
   */
  export type HealthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Health
     */
    select?: HealthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Health
     */
    omit?: HealthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GuardianScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type GuardianScalarFieldEnum = (typeof GuardianScalarFieldEnum)[keyof typeof GuardianScalarFieldEnum]


  export const GuardianUserScalarFieldEnum: {
    guardianId: 'guardianId',
    userId: 'userId'
  };

  export type GuardianUserScalarFieldEnum = (typeof GuardianUserScalarFieldEnum)[keyof typeof GuardianUserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    eventDate: 'eventDate',
    location: 'location',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventParticipantScalarFieldEnum: {
    eventId: 'eventId',
    userId: 'userId',
    joinedAt: 'joinedAt'
  };

  export type EventParticipantScalarFieldEnum = (typeof EventParticipantScalarFieldEnum)[keyof typeof EventParticipantScalarFieldEnum]


  export const DailyTipScalarFieldEnum: {
    id: 'id',
    tipDate: 'tipDate',
    content: 'content'
  };

  export type DailyTipScalarFieldEnum = (typeof DailyTipScalarFieldEnum)[keyof typeof DailyTipScalarFieldEnum]


  export const HealthScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    recordedAt: 'recordedAt',
    heartRate: 'heartRate',
    bloodPressure: 'bloodPressure',
    steps: 'steps',
    sleepHours: 'sleepHours',
    notes: 'notes'
  };

  export type HealthScalarFieldEnum = (typeof HealthScalarFieldEnum)[keyof typeof HealthScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    guardians?: GuardianUserListRelationFilter
    health?: HealthListRelationFilter
    events?: EventParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    guardians?: GuardianUserOrderByRelationAggregateInput
    health?: HealthOrderByRelationAggregateInput
    events?: EventParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    guardians?: GuardianUserListRelationFilter
    health?: HealthListRelationFilter
    events?: EventParticipantListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GuardianWhereInput = {
    AND?: GuardianWhereInput | GuardianWhereInput[]
    OR?: GuardianWhereInput[]
    NOT?: GuardianWhereInput | GuardianWhereInput[]
    id?: StringFilter<"Guardian"> | string
    name?: StringFilter<"Guardian"> | string
    email?: StringFilter<"Guardian"> | string
    password?: StringFilter<"Guardian"> | string
    createdAt?: DateTimeFilter<"Guardian"> | Date | string
    users?: GuardianUserListRelationFilter
  }

  export type GuardianOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    users?: GuardianUserOrderByRelationAggregateInput
  }

  export type GuardianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: GuardianWhereInput | GuardianWhereInput[]
    OR?: GuardianWhereInput[]
    NOT?: GuardianWhereInput | GuardianWhereInput[]
    name?: StringFilter<"Guardian"> | string
    password?: StringFilter<"Guardian"> | string
    createdAt?: DateTimeFilter<"Guardian"> | Date | string
    users?: GuardianUserListRelationFilter
  }, "id" | "email">

  export type GuardianOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: GuardianCountOrderByAggregateInput
    _max?: GuardianMaxOrderByAggregateInput
    _min?: GuardianMinOrderByAggregateInput
  }

  export type GuardianScalarWhereWithAggregatesInput = {
    AND?: GuardianScalarWhereWithAggregatesInput | GuardianScalarWhereWithAggregatesInput[]
    OR?: GuardianScalarWhereWithAggregatesInput[]
    NOT?: GuardianScalarWhereWithAggregatesInput | GuardianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guardian"> | string
    name?: StringWithAggregatesFilter<"Guardian"> | string
    email?: StringWithAggregatesFilter<"Guardian"> | string
    password?: StringWithAggregatesFilter<"Guardian"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Guardian"> | Date | string
  }

  export type GuardianUserWhereInput = {
    AND?: GuardianUserWhereInput | GuardianUserWhereInput[]
    OR?: GuardianUserWhereInput[]
    NOT?: GuardianUserWhereInput | GuardianUserWhereInput[]
    guardianId?: StringFilter<"GuardianUser"> | string
    userId?: StringFilter<"GuardianUser"> | string
    guardian?: XOR<GuardianScalarRelationFilter, GuardianWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GuardianUserOrderByWithRelationInput = {
    guardianId?: SortOrder
    userId?: SortOrder
    guardian?: GuardianOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GuardianUserWhereUniqueInput = Prisma.AtLeast<{
    guardianId_userId?: GuardianUserGuardianIdUserIdCompoundUniqueInput
    AND?: GuardianUserWhereInput | GuardianUserWhereInput[]
    OR?: GuardianUserWhereInput[]
    NOT?: GuardianUserWhereInput | GuardianUserWhereInput[]
    guardianId?: StringFilter<"GuardianUser"> | string
    userId?: StringFilter<"GuardianUser"> | string
    guardian?: XOR<GuardianScalarRelationFilter, GuardianWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "guardianId_userId">

  export type GuardianUserOrderByWithAggregationInput = {
    guardianId?: SortOrder
    userId?: SortOrder
    _count?: GuardianUserCountOrderByAggregateInput
    _max?: GuardianUserMaxOrderByAggregateInput
    _min?: GuardianUserMinOrderByAggregateInput
  }

  export type GuardianUserScalarWhereWithAggregatesInput = {
    AND?: GuardianUserScalarWhereWithAggregatesInput | GuardianUserScalarWhereWithAggregatesInput[]
    OR?: GuardianUserScalarWhereWithAggregatesInput[]
    NOT?: GuardianUserScalarWhereWithAggregatesInput | GuardianUserScalarWhereWithAggregatesInput[]
    guardianId?: StringWithAggregatesFilter<"GuardianUser"> | string
    userId?: StringWithAggregatesFilter<"GuardianUser"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    eventDate?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    participants?: EventParticipantListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    eventDate?: SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    participants?: EventParticipantOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    eventDate?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    participants?: EventParticipantListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    eventDate?: SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    eventDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventParticipantWhereInput = {
    AND?: EventParticipantWhereInput | EventParticipantWhereInput[]
    OR?: EventParticipantWhereInput[]
    NOT?: EventParticipantWhereInput | EventParticipantWhereInput[]
    eventId?: StringFilter<"EventParticipant"> | string
    userId?: StringFilter<"EventParticipant"> | string
    joinedAt?: DateTimeFilter<"EventParticipant"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventParticipantOrderByWithRelationInput = {
    eventId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EventParticipantWhereUniqueInput = Prisma.AtLeast<{
    eventId_userId?: EventParticipantEventIdUserIdCompoundUniqueInput
    AND?: EventParticipantWhereInput | EventParticipantWhereInput[]
    OR?: EventParticipantWhereInput[]
    NOT?: EventParticipantWhereInput | EventParticipantWhereInput[]
    eventId?: StringFilter<"EventParticipant"> | string
    userId?: StringFilter<"EventParticipant"> | string
    joinedAt?: DateTimeFilter<"EventParticipant"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "eventId_userId">

  export type EventParticipantOrderByWithAggregationInput = {
    eventId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    _count?: EventParticipantCountOrderByAggregateInput
    _max?: EventParticipantMaxOrderByAggregateInput
    _min?: EventParticipantMinOrderByAggregateInput
  }

  export type EventParticipantScalarWhereWithAggregatesInput = {
    AND?: EventParticipantScalarWhereWithAggregatesInput | EventParticipantScalarWhereWithAggregatesInput[]
    OR?: EventParticipantScalarWhereWithAggregatesInput[]
    NOT?: EventParticipantScalarWhereWithAggregatesInput | EventParticipantScalarWhereWithAggregatesInput[]
    eventId?: StringWithAggregatesFilter<"EventParticipant"> | string
    userId?: StringWithAggregatesFilter<"EventParticipant"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"EventParticipant"> | Date | string
  }

  export type DailyTipWhereInput = {
    AND?: DailyTipWhereInput | DailyTipWhereInput[]
    OR?: DailyTipWhereInput[]
    NOT?: DailyTipWhereInput | DailyTipWhereInput[]
    id?: StringFilter<"DailyTip"> | string
    tipDate?: DateTimeFilter<"DailyTip"> | Date | string
    content?: StringFilter<"DailyTip"> | string
  }

  export type DailyTipOrderByWithRelationInput = {
    id?: SortOrder
    tipDate?: SortOrder
    content?: SortOrder
  }

  export type DailyTipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tipDate?: Date | string
    AND?: DailyTipWhereInput | DailyTipWhereInput[]
    OR?: DailyTipWhereInput[]
    NOT?: DailyTipWhereInput | DailyTipWhereInput[]
    content?: StringFilter<"DailyTip"> | string
  }, "id" | "tipDate">

  export type DailyTipOrderByWithAggregationInput = {
    id?: SortOrder
    tipDate?: SortOrder
    content?: SortOrder
    _count?: DailyTipCountOrderByAggregateInput
    _max?: DailyTipMaxOrderByAggregateInput
    _min?: DailyTipMinOrderByAggregateInput
  }

  export type DailyTipScalarWhereWithAggregatesInput = {
    AND?: DailyTipScalarWhereWithAggregatesInput | DailyTipScalarWhereWithAggregatesInput[]
    OR?: DailyTipScalarWhereWithAggregatesInput[]
    NOT?: DailyTipScalarWhereWithAggregatesInput | DailyTipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyTip"> | string
    tipDate?: DateTimeWithAggregatesFilter<"DailyTip"> | Date | string
    content?: StringWithAggregatesFilter<"DailyTip"> | string
  }

  export type HealthWhereInput = {
    AND?: HealthWhereInput | HealthWhereInput[]
    OR?: HealthWhereInput[]
    NOT?: HealthWhereInput | HealthWhereInput[]
    id?: StringFilter<"Health"> | string
    userId?: StringFilter<"Health"> | string
    recordedAt?: DateTimeFilter<"Health"> | Date | string
    heartRate?: IntNullableFilter<"Health"> | number | null
    bloodPressure?: StringNullableFilter<"Health"> | string | null
    steps?: IntNullableFilter<"Health"> | number | null
    sleepHours?: FloatNullableFilter<"Health"> | number | null
    notes?: StringNullableFilter<"Health"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HealthOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
    heartRate?: SortOrderInput | SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    steps?: SortOrderInput | SortOrder
    sleepHours?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HealthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HealthWhereInput | HealthWhereInput[]
    OR?: HealthWhereInput[]
    NOT?: HealthWhereInput | HealthWhereInput[]
    userId?: StringFilter<"Health"> | string
    recordedAt?: DateTimeFilter<"Health"> | Date | string
    heartRate?: IntNullableFilter<"Health"> | number | null
    bloodPressure?: StringNullableFilter<"Health"> | string | null
    steps?: IntNullableFilter<"Health"> | number | null
    sleepHours?: FloatNullableFilter<"Health"> | number | null
    notes?: StringNullableFilter<"Health"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HealthOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
    heartRate?: SortOrderInput | SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    steps?: SortOrderInput | SortOrder
    sleepHours?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: HealthCountOrderByAggregateInput
    _avg?: HealthAvgOrderByAggregateInput
    _max?: HealthMaxOrderByAggregateInput
    _min?: HealthMinOrderByAggregateInput
    _sum?: HealthSumOrderByAggregateInput
  }

  export type HealthScalarWhereWithAggregatesInput = {
    AND?: HealthScalarWhereWithAggregatesInput | HealthScalarWhereWithAggregatesInput[]
    OR?: HealthScalarWhereWithAggregatesInput[]
    NOT?: HealthScalarWhereWithAggregatesInput | HealthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Health"> | string
    userId?: StringWithAggregatesFilter<"Health"> | string
    recordedAt?: DateTimeWithAggregatesFilter<"Health"> | Date | string
    heartRate?: IntNullableWithAggregatesFilter<"Health"> | number | null
    bloodPressure?: StringNullableWithAggregatesFilter<"Health"> | string | null
    steps?: IntNullableWithAggregatesFilter<"Health"> | number | null
    sleepHours?: FloatNullableWithAggregatesFilter<"Health"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Health"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    guardians?: GuardianUserCreateNestedManyWithoutUserInput
    health?: HealthCreateNestedManyWithoutUserInput
    events?: EventParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    guardians?: GuardianUserUncheckedCreateNestedManyWithoutUserInput
    health?: HealthUncheckedCreateNestedManyWithoutUserInput
    events?: EventParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guardians?: GuardianUserUpdateManyWithoutUserNestedInput
    health?: HealthUpdateManyWithoutUserNestedInput
    events?: EventParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guardians?: GuardianUserUncheckedUpdateManyWithoutUserNestedInput
    health?: HealthUncheckedUpdateManyWithoutUserNestedInput
    events?: EventParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuardianCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    users?: GuardianUserCreateNestedManyWithoutGuardianInput
  }

  export type GuardianUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    users?: GuardianUserUncheckedCreateNestedManyWithoutGuardianInput
  }

  export type GuardianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: GuardianUserUpdateManyWithoutGuardianNestedInput
  }

  export type GuardianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: GuardianUserUncheckedUpdateManyWithoutGuardianNestedInput
  }

  export type GuardianCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type GuardianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuardianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuardianUserCreateInput = {
    guardian: GuardianCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutGuardiansInput
  }

  export type GuardianUserUncheckedCreateInput = {
    guardianId: string
    userId: string
  }

  export type GuardianUserUpdateInput = {
    guardian?: GuardianUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutGuardiansNestedInput
  }

  export type GuardianUserUncheckedUpdateInput = {
    guardianId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GuardianUserCreateManyInput = {
    guardianId: string
    userId: string
  }

  export type GuardianUserUpdateManyMutationInput = {

  }

  export type GuardianUserUncheckedUpdateManyInput = {
    guardianId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    eventDate: Date | string
    location?: string | null
    createdAt?: Date | string
    participants?: EventParticipantCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    eventDate: Date | string
    location?: string | null
    createdAt?: Date | string
    participants?: EventParticipantUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: EventParticipantUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: EventParticipantUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    eventDate: Date | string
    location?: string | null
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantCreateInput = {
    joinedAt?: Date | string
    event: EventCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutEventsInput
  }

  export type EventParticipantUncheckedCreateInput = {
    eventId: string
    userId: string
    joinedAt?: Date | string
  }

  export type EventParticipantUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventParticipantUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantCreateManyInput = {
    eventId: string
    userId: string
    joinedAt?: Date | string
  }

  export type EventParticipantUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyTipCreateInput = {
    id?: string
    tipDate: Date | string
    content: string
  }

  export type DailyTipUncheckedCreateInput = {
    id?: string
    tipDate: Date | string
    content: string
  }

  export type DailyTipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DailyTipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DailyTipCreateManyInput = {
    id?: string
    tipDate: Date | string
    content: string
  }

  export type DailyTipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DailyTipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipDate?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type HealthCreateInput = {
    id?: string
    recordedAt?: Date | string
    heartRate?: number | null
    bloodPressure?: string | null
    steps?: number | null
    sleepHours?: number | null
    notes?: string | null
    user: UserCreateNestedOneWithoutHealthInput
  }

  export type HealthUncheckedCreateInput = {
    id?: string
    userId: string
    recordedAt?: Date | string
    heartRate?: number | null
    bloodPressure?: string | null
    steps?: number | null
    sleepHours?: number | null
    notes?: string | null
  }

  export type HealthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableIntFieldUpdateOperationsInput | number | null
    sleepHours?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutHealthNestedInput
  }

  export type HealthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableIntFieldUpdateOperationsInput | number | null
    sleepHours?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HealthCreateManyInput = {
    id?: string
    userId: string
    recordedAt?: Date | string
    heartRate?: number | null
    bloodPressure?: string | null
    steps?: number | null
    sleepHours?: number | null
    notes?: string | null
  }

  export type HealthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableIntFieldUpdateOperationsInput | number | null
    sleepHours?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HealthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableIntFieldUpdateOperationsInput | number | null
    sleepHours?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GuardianUserListRelationFilter = {
    every?: GuardianUserWhereInput
    some?: GuardianUserWhereInput
    none?: GuardianUserWhereInput
  }

  export type HealthListRelationFilter = {
    every?: HealthWhereInput
    some?: HealthWhereInput
    none?: HealthWhereInput
  }

  export type EventParticipantListRelationFilter = {
    every?: EventParticipantWhereInput
    some?: EventParticipantWhereInput
    none?: EventParticipantWhereInput
  }

  export type GuardianUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HealthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GuardianCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type GuardianMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type GuardianMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type GuardianScalarRelationFilter = {
    is?: GuardianWhereInput
    isNot?: GuardianWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GuardianUserGuardianIdUserIdCompoundUniqueInput = {
    guardianId: string
    userId: string
  }

  export type GuardianUserCountOrderByAggregateInput = {
    guardianId?: SortOrder
    userId?: SortOrder
  }

  export type GuardianUserMaxOrderByAggregateInput = {
    guardianId?: SortOrder
    userId?: SortOrder
  }

  export type GuardianUserMinOrderByAggregateInput = {
    guardianId?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventDate?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventDate?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventDate?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventParticipantEventIdUserIdCompoundUniqueInput = {
    eventId: string
    userId: string
  }

  export type EventParticipantCountOrderByAggregateInput = {
    eventId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type EventParticipantMaxOrderByAggregateInput = {
    eventId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type EventParticipantMinOrderByAggregateInput = {
    eventId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type DailyTipCountOrderByAggregateInput = {
    id?: SortOrder
    tipDate?: SortOrder
    content?: SortOrder
  }

  export type DailyTipMaxOrderByAggregateInput = {
    id?: SortOrder
    tipDate?: SortOrder
    content?: SortOrder
  }

  export type DailyTipMinOrderByAggregateInput = {
    id?: SortOrder
    tipDate?: SortOrder
    content?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type HealthCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
    heartRate?: SortOrder
    bloodPressure?: SortOrder
    steps?: SortOrder
    sleepHours?: SortOrder
    notes?: SortOrder
  }

  export type HealthAvgOrderByAggregateInput = {
    heartRate?: SortOrder
    steps?: SortOrder
    sleepHours?: SortOrder
  }

  export type HealthMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
    heartRate?: SortOrder
    bloodPressure?: SortOrder
    steps?: SortOrder
    sleepHours?: SortOrder
    notes?: SortOrder
  }

  export type HealthMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recordedAt?: SortOrder
    heartRate?: SortOrder
    bloodPressure?: SortOrder
    steps?: SortOrder
    sleepHours?: SortOrder
    notes?: SortOrder
  }

  export type HealthSumOrderByAggregateInput = {
    heartRate?: SortOrder
    steps?: SortOrder
    sleepHours?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type GuardianUserCreateNestedManyWithoutUserInput = {
    create?: XOR<GuardianUserCreateWithoutUserInput, GuardianUserUncheckedCreateWithoutUserInput> | GuardianUserCreateWithoutUserInput[] | GuardianUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuardianUserCreateOrConnectWithoutUserInput | GuardianUserCreateOrConnectWithoutUserInput[]
    createMany?: GuardianUserCreateManyUserInputEnvelope
    connect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
  }

  export type HealthCreateNestedManyWithoutUserInput = {
    create?: XOR<HealthCreateWithoutUserInput, HealthUncheckedCreateWithoutUserInput> | HealthCreateWithoutUserInput[] | HealthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthCreateOrConnectWithoutUserInput | HealthCreateOrConnectWithoutUserInput[]
    createMany?: HealthCreateManyUserInputEnvelope
    connect?: HealthWhereUniqueInput | HealthWhereUniqueInput[]
  }

  export type EventParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type GuardianUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GuardianUserCreateWithoutUserInput, GuardianUserUncheckedCreateWithoutUserInput> | GuardianUserCreateWithoutUserInput[] | GuardianUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuardianUserCreateOrConnectWithoutUserInput | GuardianUserCreateOrConnectWithoutUserInput[]
    createMany?: GuardianUserCreateManyUserInputEnvelope
    connect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
  }

  export type HealthUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HealthCreateWithoutUserInput, HealthUncheckedCreateWithoutUserInput> | HealthCreateWithoutUserInput[] | HealthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthCreateOrConnectWithoutUserInput | HealthCreateOrConnectWithoutUserInput[]
    createMany?: HealthCreateManyUserInputEnvelope
    connect?: HealthWhereUniqueInput | HealthWhereUniqueInput[]
  }

  export type EventParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GuardianUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<GuardianUserCreateWithoutUserInput, GuardianUserUncheckedCreateWithoutUserInput> | GuardianUserCreateWithoutUserInput[] | GuardianUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuardianUserCreateOrConnectWithoutUserInput | GuardianUserCreateOrConnectWithoutUserInput[]
    upsert?: GuardianUserUpsertWithWhereUniqueWithoutUserInput | GuardianUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GuardianUserCreateManyUserInputEnvelope
    set?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    disconnect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    delete?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    connect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    update?: GuardianUserUpdateWithWhereUniqueWithoutUserInput | GuardianUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GuardianUserUpdateManyWithWhereWithoutUserInput | GuardianUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GuardianUserScalarWhereInput | GuardianUserScalarWhereInput[]
  }

  export type HealthUpdateManyWithoutUserNestedInput = {
    create?: XOR<HealthCreateWithoutUserInput, HealthUncheckedCreateWithoutUserInput> | HealthCreateWithoutUserInput[] | HealthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthCreateOrConnectWithoutUserInput | HealthCreateOrConnectWithoutUserInput[]
    upsert?: HealthUpsertWithWhereUniqueWithoutUserInput | HealthUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HealthCreateManyUserInputEnvelope
    set?: HealthWhereUniqueInput | HealthWhereUniqueInput[]
    disconnect?: HealthWhereUniqueInput | HealthWhereUniqueInput[]
    delete?: HealthWhereUniqueInput | HealthWhereUniqueInput[]
    connect?: HealthWhereUniqueInput | HealthWhereUniqueInput[]
    update?: HealthUpdateWithWhereUniqueWithoutUserInput | HealthUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HealthUpdateManyWithWhereWithoutUserInput | HealthUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HealthScalarWhereInput | HealthScalarWhereInput[]
  }

  export type EventParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutUserInput | EventParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutUserInput | EventParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutUserInput | EventParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type GuardianUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GuardianUserCreateWithoutUserInput, GuardianUserUncheckedCreateWithoutUserInput> | GuardianUserCreateWithoutUserInput[] | GuardianUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GuardianUserCreateOrConnectWithoutUserInput | GuardianUserCreateOrConnectWithoutUserInput[]
    upsert?: GuardianUserUpsertWithWhereUniqueWithoutUserInput | GuardianUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GuardianUserCreateManyUserInputEnvelope
    set?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    disconnect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    delete?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    connect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    update?: GuardianUserUpdateWithWhereUniqueWithoutUserInput | GuardianUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GuardianUserUpdateManyWithWhereWithoutUserInput | GuardianUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GuardianUserScalarWhereInput | GuardianUserScalarWhereInput[]
  }

  export type HealthUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HealthCreateWithoutUserInput, HealthUncheckedCreateWithoutUserInput> | HealthCreateWithoutUserInput[] | HealthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HealthCreateOrConnectWithoutUserInput | HealthCreateOrConnectWithoutUserInput[]
    upsert?: HealthUpsertWithWhereUniqueWithoutUserInput | HealthUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HealthCreateManyUserInputEnvelope
    set?: HealthWhereUniqueInput | HealthWhereUniqueInput[]
    disconnect?: HealthWhereUniqueInput | HealthWhereUniqueInput[]
    delete?: HealthWhereUniqueInput | HealthWhereUniqueInput[]
    connect?: HealthWhereUniqueInput | HealthWhereUniqueInput[]
    update?: HealthUpdateWithWhereUniqueWithoutUserInput | HealthUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HealthUpdateManyWithWhereWithoutUserInput | HealthUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HealthScalarWhereInput | HealthScalarWhereInput[]
  }

  export type EventParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput> | EventParticipantCreateWithoutUserInput[] | EventParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutUserInput | EventParticipantCreateOrConnectWithoutUserInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutUserInput | EventParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventParticipantCreateManyUserInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutUserInput | EventParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutUserInput | EventParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type GuardianUserCreateNestedManyWithoutGuardianInput = {
    create?: XOR<GuardianUserCreateWithoutGuardianInput, GuardianUserUncheckedCreateWithoutGuardianInput> | GuardianUserCreateWithoutGuardianInput[] | GuardianUserUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: GuardianUserCreateOrConnectWithoutGuardianInput | GuardianUserCreateOrConnectWithoutGuardianInput[]
    createMany?: GuardianUserCreateManyGuardianInputEnvelope
    connect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
  }

  export type GuardianUserUncheckedCreateNestedManyWithoutGuardianInput = {
    create?: XOR<GuardianUserCreateWithoutGuardianInput, GuardianUserUncheckedCreateWithoutGuardianInput> | GuardianUserCreateWithoutGuardianInput[] | GuardianUserUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: GuardianUserCreateOrConnectWithoutGuardianInput | GuardianUserCreateOrConnectWithoutGuardianInput[]
    createMany?: GuardianUserCreateManyGuardianInputEnvelope
    connect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
  }

  export type GuardianUserUpdateManyWithoutGuardianNestedInput = {
    create?: XOR<GuardianUserCreateWithoutGuardianInput, GuardianUserUncheckedCreateWithoutGuardianInput> | GuardianUserCreateWithoutGuardianInput[] | GuardianUserUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: GuardianUserCreateOrConnectWithoutGuardianInput | GuardianUserCreateOrConnectWithoutGuardianInput[]
    upsert?: GuardianUserUpsertWithWhereUniqueWithoutGuardianInput | GuardianUserUpsertWithWhereUniqueWithoutGuardianInput[]
    createMany?: GuardianUserCreateManyGuardianInputEnvelope
    set?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    disconnect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    delete?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    connect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    update?: GuardianUserUpdateWithWhereUniqueWithoutGuardianInput | GuardianUserUpdateWithWhereUniqueWithoutGuardianInput[]
    updateMany?: GuardianUserUpdateManyWithWhereWithoutGuardianInput | GuardianUserUpdateManyWithWhereWithoutGuardianInput[]
    deleteMany?: GuardianUserScalarWhereInput | GuardianUserScalarWhereInput[]
  }

  export type GuardianUserUncheckedUpdateManyWithoutGuardianNestedInput = {
    create?: XOR<GuardianUserCreateWithoutGuardianInput, GuardianUserUncheckedCreateWithoutGuardianInput> | GuardianUserCreateWithoutGuardianInput[] | GuardianUserUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: GuardianUserCreateOrConnectWithoutGuardianInput | GuardianUserCreateOrConnectWithoutGuardianInput[]
    upsert?: GuardianUserUpsertWithWhereUniqueWithoutGuardianInput | GuardianUserUpsertWithWhereUniqueWithoutGuardianInput[]
    createMany?: GuardianUserCreateManyGuardianInputEnvelope
    set?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    disconnect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    delete?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    connect?: GuardianUserWhereUniqueInput | GuardianUserWhereUniqueInput[]
    update?: GuardianUserUpdateWithWhereUniqueWithoutGuardianInput | GuardianUserUpdateWithWhereUniqueWithoutGuardianInput[]
    updateMany?: GuardianUserUpdateManyWithWhereWithoutGuardianInput | GuardianUserUpdateManyWithWhereWithoutGuardianInput[]
    deleteMany?: GuardianUserScalarWhereInput | GuardianUserScalarWhereInput[]
  }

  export type GuardianCreateNestedOneWithoutUsersInput = {
    create?: XOR<GuardianCreateWithoutUsersInput, GuardianUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GuardianCreateOrConnectWithoutUsersInput
    connect?: GuardianWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGuardiansInput = {
    create?: XOR<UserCreateWithoutGuardiansInput, UserUncheckedCreateWithoutGuardiansInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuardiansInput
    connect?: UserWhereUniqueInput
  }

  export type GuardianUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<GuardianCreateWithoutUsersInput, GuardianUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GuardianCreateOrConnectWithoutUsersInput
    upsert?: GuardianUpsertWithoutUsersInput
    connect?: GuardianWhereUniqueInput
    update?: XOR<XOR<GuardianUpdateToOneWithWhereWithoutUsersInput, GuardianUpdateWithoutUsersInput>, GuardianUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutGuardiansNestedInput = {
    create?: XOR<UserCreateWithoutGuardiansInput, UserUncheckedCreateWithoutGuardiansInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuardiansInput
    upsert?: UserUpsertWithoutGuardiansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuardiansInput, UserUpdateWithoutGuardiansInput>, UserUncheckedUpdateWithoutGuardiansInput>
  }

  export type EventParticipantCreateNestedManyWithoutEventInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type EventParticipantUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EventParticipantUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutEventInput | EventParticipantUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutEventInput | EventParticipantUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutEventInput | EventParticipantUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type EventParticipantUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput> | EventParticipantCreateWithoutEventInput[] | EventParticipantUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventParticipantCreateOrConnectWithoutEventInput | EventParticipantCreateOrConnectWithoutEventInput[]
    upsert?: EventParticipantUpsertWithWhereUniqueWithoutEventInput | EventParticipantUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventParticipantCreateManyEventInputEnvelope
    set?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    disconnect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    delete?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    connect?: EventParticipantWhereUniqueInput | EventParticipantWhereUniqueInput[]
    update?: EventParticipantUpdateWithWhereUniqueWithoutEventInput | EventParticipantUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventParticipantUpdateManyWithWhereWithoutEventInput | EventParticipantUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: EventCreateOrConnectWithoutParticipantsInput
    upsert?: EventUpsertWithoutParticipantsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutParticipantsInput, EventUpdateWithoutParticipantsInput>, EventUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserCreateNestedOneWithoutHealthInput = {
    create?: XOR<UserCreateWithoutHealthInput, UserUncheckedCreateWithoutHealthInput>
    connectOrCreate?: UserCreateOrConnectWithoutHealthInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutHealthNestedInput = {
    create?: XOR<UserCreateWithoutHealthInput, UserUncheckedCreateWithoutHealthInput>
    connectOrCreate?: UserCreateOrConnectWithoutHealthInput
    upsert?: UserUpsertWithoutHealthInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHealthInput, UserUpdateWithoutHealthInput>, UserUncheckedUpdateWithoutHealthInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type GuardianUserCreateWithoutUserInput = {
    guardian: GuardianCreateNestedOneWithoutUsersInput
  }

  export type GuardianUserUncheckedCreateWithoutUserInput = {
    guardianId: string
  }

  export type GuardianUserCreateOrConnectWithoutUserInput = {
    where: GuardianUserWhereUniqueInput
    create: XOR<GuardianUserCreateWithoutUserInput, GuardianUserUncheckedCreateWithoutUserInput>
  }

  export type GuardianUserCreateManyUserInputEnvelope = {
    data: GuardianUserCreateManyUserInput | GuardianUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HealthCreateWithoutUserInput = {
    id?: string
    recordedAt?: Date | string
    heartRate?: number | null
    bloodPressure?: string | null
    steps?: number | null
    sleepHours?: number | null
    notes?: string | null
  }

  export type HealthUncheckedCreateWithoutUserInput = {
    id?: string
    recordedAt?: Date | string
    heartRate?: number | null
    bloodPressure?: string | null
    steps?: number | null
    sleepHours?: number | null
    notes?: string | null
  }

  export type HealthCreateOrConnectWithoutUserInput = {
    where: HealthWhereUniqueInput
    create: XOR<HealthCreateWithoutUserInput, HealthUncheckedCreateWithoutUserInput>
  }

  export type HealthCreateManyUserInputEnvelope = {
    data: HealthCreateManyUserInput | HealthCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventParticipantCreateWithoutUserInput = {
    joinedAt?: Date | string
    event: EventCreateNestedOneWithoutParticipantsInput
  }

  export type EventParticipantUncheckedCreateWithoutUserInput = {
    eventId: string
    joinedAt?: Date | string
  }

  export type EventParticipantCreateOrConnectWithoutUserInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput>
  }

  export type EventParticipantCreateManyUserInputEnvelope = {
    data: EventParticipantCreateManyUserInput | EventParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GuardianUserUpsertWithWhereUniqueWithoutUserInput = {
    where: GuardianUserWhereUniqueInput
    update: XOR<GuardianUserUpdateWithoutUserInput, GuardianUserUncheckedUpdateWithoutUserInput>
    create: XOR<GuardianUserCreateWithoutUserInput, GuardianUserUncheckedCreateWithoutUserInput>
  }

  export type GuardianUserUpdateWithWhereUniqueWithoutUserInput = {
    where: GuardianUserWhereUniqueInput
    data: XOR<GuardianUserUpdateWithoutUserInput, GuardianUserUncheckedUpdateWithoutUserInput>
  }

  export type GuardianUserUpdateManyWithWhereWithoutUserInput = {
    where: GuardianUserScalarWhereInput
    data: XOR<GuardianUserUpdateManyMutationInput, GuardianUserUncheckedUpdateManyWithoutUserInput>
  }

  export type GuardianUserScalarWhereInput = {
    AND?: GuardianUserScalarWhereInput | GuardianUserScalarWhereInput[]
    OR?: GuardianUserScalarWhereInput[]
    NOT?: GuardianUserScalarWhereInput | GuardianUserScalarWhereInput[]
    guardianId?: StringFilter<"GuardianUser"> | string
    userId?: StringFilter<"GuardianUser"> | string
  }

  export type HealthUpsertWithWhereUniqueWithoutUserInput = {
    where: HealthWhereUniqueInput
    update: XOR<HealthUpdateWithoutUserInput, HealthUncheckedUpdateWithoutUserInput>
    create: XOR<HealthCreateWithoutUserInput, HealthUncheckedCreateWithoutUserInput>
  }

  export type HealthUpdateWithWhereUniqueWithoutUserInput = {
    where: HealthWhereUniqueInput
    data: XOR<HealthUpdateWithoutUserInput, HealthUncheckedUpdateWithoutUserInput>
  }

  export type HealthUpdateManyWithWhereWithoutUserInput = {
    where: HealthScalarWhereInput
    data: XOR<HealthUpdateManyMutationInput, HealthUncheckedUpdateManyWithoutUserInput>
  }

  export type HealthScalarWhereInput = {
    AND?: HealthScalarWhereInput | HealthScalarWhereInput[]
    OR?: HealthScalarWhereInput[]
    NOT?: HealthScalarWhereInput | HealthScalarWhereInput[]
    id?: StringFilter<"Health"> | string
    userId?: StringFilter<"Health"> | string
    recordedAt?: DateTimeFilter<"Health"> | Date | string
    heartRate?: IntNullableFilter<"Health"> | number | null
    bloodPressure?: StringNullableFilter<"Health"> | string | null
    steps?: IntNullableFilter<"Health"> | number | null
    sleepHours?: FloatNullableFilter<"Health"> | number | null
    notes?: StringNullableFilter<"Health"> | string | null
  }

  export type EventParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: EventParticipantWhereUniqueInput
    update: XOR<EventParticipantUpdateWithoutUserInput, EventParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<EventParticipantCreateWithoutUserInput, EventParticipantUncheckedCreateWithoutUserInput>
  }

  export type EventParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: EventParticipantWhereUniqueInput
    data: XOR<EventParticipantUpdateWithoutUserInput, EventParticipantUncheckedUpdateWithoutUserInput>
  }

  export type EventParticipantUpdateManyWithWhereWithoutUserInput = {
    where: EventParticipantScalarWhereInput
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type EventParticipantScalarWhereInput = {
    AND?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
    OR?: EventParticipantScalarWhereInput[]
    NOT?: EventParticipantScalarWhereInput | EventParticipantScalarWhereInput[]
    eventId?: StringFilter<"EventParticipant"> | string
    userId?: StringFilter<"EventParticipant"> | string
    joinedAt?: DateTimeFilter<"EventParticipant"> | Date | string
  }

  export type GuardianUserCreateWithoutGuardianInput = {
    user: UserCreateNestedOneWithoutGuardiansInput
  }

  export type GuardianUserUncheckedCreateWithoutGuardianInput = {
    userId: string
  }

  export type GuardianUserCreateOrConnectWithoutGuardianInput = {
    where: GuardianUserWhereUniqueInput
    create: XOR<GuardianUserCreateWithoutGuardianInput, GuardianUserUncheckedCreateWithoutGuardianInput>
  }

  export type GuardianUserCreateManyGuardianInputEnvelope = {
    data: GuardianUserCreateManyGuardianInput | GuardianUserCreateManyGuardianInput[]
    skipDuplicates?: boolean
  }

  export type GuardianUserUpsertWithWhereUniqueWithoutGuardianInput = {
    where: GuardianUserWhereUniqueInput
    update: XOR<GuardianUserUpdateWithoutGuardianInput, GuardianUserUncheckedUpdateWithoutGuardianInput>
    create: XOR<GuardianUserCreateWithoutGuardianInput, GuardianUserUncheckedCreateWithoutGuardianInput>
  }

  export type GuardianUserUpdateWithWhereUniqueWithoutGuardianInput = {
    where: GuardianUserWhereUniqueInput
    data: XOR<GuardianUserUpdateWithoutGuardianInput, GuardianUserUncheckedUpdateWithoutGuardianInput>
  }

  export type GuardianUserUpdateManyWithWhereWithoutGuardianInput = {
    where: GuardianUserScalarWhereInput
    data: XOR<GuardianUserUpdateManyMutationInput, GuardianUserUncheckedUpdateManyWithoutGuardianInput>
  }

  export type GuardianCreateWithoutUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type GuardianUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type GuardianCreateOrConnectWithoutUsersInput = {
    where: GuardianWhereUniqueInput
    create: XOR<GuardianCreateWithoutUsersInput, GuardianUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutGuardiansInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    health?: HealthCreateNestedManyWithoutUserInput
    events?: EventParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGuardiansInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    health?: HealthUncheckedCreateNestedManyWithoutUserInput
    events?: EventParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGuardiansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuardiansInput, UserUncheckedCreateWithoutGuardiansInput>
  }

  export type GuardianUpsertWithoutUsersInput = {
    update: XOR<GuardianUpdateWithoutUsersInput, GuardianUncheckedUpdateWithoutUsersInput>
    create: XOR<GuardianCreateWithoutUsersInput, GuardianUncheckedCreateWithoutUsersInput>
    where?: GuardianWhereInput
  }

  export type GuardianUpdateToOneWithWhereWithoutUsersInput = {
    where?: GuardianWhereInput
    data: XOR<GuardianUpdateWithoutUsersInput, GuardianUncheckedUpdateWithoutUsersInput>
  }

  export type GuardianUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuardianUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutGuardiansInput = {
    update: XOR<UserUpdateWithoutGuardiansInput, UserUncheckedUpdateWithoutGuardiansInput>
    create: XOR<UserCreateWithoutGuardiansInput, UserUncheckedCreateWithoutGuardiansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuardiansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuardiansInput, UserUncheckedUpdateWithoutGuardiansInput>
  }

  export type UserUpdateWithoutGuardiansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    health?: HealthUpdateManyWithoutUserNestedInput
    events?: EventParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGuardiansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    health?: HealthUncheckedUpdateManyWithoutUserNestedInput
    events?: EventParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventParticipantCreateWithoutEventInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutEventsInput
  }

  export type EventParticipantUncheckedCreateWithoutEventInput = {
    userId: string
    joinedAt?: Date | string
  }

  export type EventParticipantCreateOrConnectWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    create: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput>
  }

  export type EventParticipantCreateManyEventInputEnvelope = {
    data: EventParticipantCreateManyEventInput | EventParticipantCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventParticipantUpsertWithWhereUniqueWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    update: XOR<EventParticipantUpdateWithoutEventInput, EventParticipantUncheckedUpdateWithoutEventInput>
    create: XOR<EventParticipantCreateWithoutEventInput, EventParticipantUncheckedCreateWithoutEventInput>
  }

  export type EventParticipantUpdateWithWhereUniqueWithoutEventInput = {
    where: EventParticipantWhereUniqueInput
    data: XOR<EventParticipantUpdateWithoutEventInput, EventParticipantUncheckedUpdateWithoutEventInput>
  }

  export type EventParticipantUpdateManyWithWhereWithoutEventInput = {
    where: EventParticipantScalarWhereInput
    data: XOR<EventParticipantUpdateManyMutationInput, EventParticipantUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutParticipantsInput = {
    id?: string
    title: string
    description?: string | null
    eventDate: Date | string
    location?: string | null
    createdAt?: Date | string
  }

  export type EventUncheckedCreateWithoutParticipantsInput = {
    id?: string
    title: string
    description?: string | null
    eventDate: Date | string
    location?: string | null
    createdAt?: Date | string
  }

  export type EventCreateOrConnectWithoutParticipantsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    guardians?: GuardianUserCreateNestedManyWithoutUserInput
    health?: HealthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    guardians?: GuardianUserUncheckedCreateNestedManyWithoutUserInput
    health?: HealthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type EventUpsertWithoutParticipantsInput = {
    update: XOR<EventUpdateWithoutParticipantsInput, EventUncheckedUpdateWithoutParticipantsInput>
    create: XOR<EventCreateWithoutParticipantsInput, EventUncheckedCreateWithoutParticipantsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutParticipantsInput, EventUncheckedUpdateWithoutParticipantsInput>
  }

  export type EventUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guardians?: GuardianUserUpdateManyWithoutUserNestedInput
    health?: HealthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guardians?: GuardianUserUncheckedUpdateManyWithoutUserNestedInput
    health?: HealthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHealthInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    guardians?: GuardianUserCreateNestedManyWithoutUserInput
    events?: EventParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHealthInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    guardians?: GuardianUserUncheckedCreateNestedManyWithoutUserInput
    events?: EventParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHealthInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHealthInput, UserUncheckedCreateWithoutHealthInput>
  }

  export type UserUpsertWithoutHealthInput = {
    update: XOR<UserUpdateWithoutHealthInput, UserUncheckedUpdateWithoutHealthInput>
    create: XOR<UserCreateWithoutHealthInput, UserUncheckedCreateWithoutHealthInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHealthInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHealthInput, UserUncheckedUpdateWithoutHealthInput>
  }

  export type UserUpdateWithoutHealthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guardians?: GuardianUserUpdateManyWithoutUserNestedInput
    events?: EventParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHealthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guardians?: GuardianUserUncheckedUpdateManyWithoutUserNestedInput
    events?: EventParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GuardianUserCreateManyUserInput = {
    guardianId: string
  }

  export type HealthCreateManyUserInput = {
    id?: string
    recordedAt?: Date | string
    heartRate?: number | null
    bloodPressure?: string | null
    steps?: number | null
    sleepHours?: number | null
    notes?: string | null
  }

  export type EventParticipantCreateManyUserInput = {
    eventId: string
    joinedAt?: Date | string
  }

  export type GuardianUserUpdateWithoutUserInput = {
    guardian?: GuardianUpdateOneRequiredWithoutUsersNestedInput
  }

  export type GuardianUserUncheckedUpdateWithoutUserInput = {
    guardianId?: StringFieldUpdateOperationsInput | string
  }

  export type GuardianUserUncheckedUpdateManyWithoutUserInput = {
    guardianId?: StringFieldUpdateOperationsInput | string
  }

  export type HealthUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableIntFieldUpdateOperationsInput | number | null
    sleepHours?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HealthUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableIntFieldUpdateOperationsInput | number | null
    sleepHours?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HealthUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: NullableIntFieldUpdateOperationsInput | number | null
    sleepHours?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventParticipantUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantUncheckedUpdateManyWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuardianUserCreateManyGuardianInput = {
    userId: string
  }

  export type GuardianUserUpdateWithoutGuardianInput = {
    user?: UserUpdateOneRequiredWithoutGuardiansNestedInput
  }

  export type GuardianUserUncheckedUpdateWithoutGuardianInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GuardianUserUncheckedUpdateManyWithoutGuardianInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EventParticipantCreateManyEventInput = {
    userId: string
    joinedAt?: Date | string
  }

  export type EventParticipantUpdateWithoutEventInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventParticipantUncheckedUpdateWithoutEventInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventParticipantUncheckedUpdateManyWithoutEventInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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