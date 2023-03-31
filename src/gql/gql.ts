/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Precure($color: Color, $after: String, $before: String, $age: Age, $series_id: String) {\n    precureAllStars(color: $color, after: $after, before: $before, age: $age, series_id: $series_id) {\n      id\n      cure_name\n      series\n    }\n    seriesAll {\n      title\n      id\n    }\n  }\n": types.PrecureDocument,
    "\n      query precureIds {\n        precureAllStars {\n          id\n        }\n      }\n    ": types.PrecureIdsDocument,
    "\n      query PrecureQuery($id: String) {\n        precure(id: $id) {\n          after_prologue\n          age\n          before_prologue\n          birthday\n          color\n          cure_name\n          debut\n          fairy\n          id\n          item\n          name\n          series\n          series_id\n          special {\n            solo\n            team\n          }\n          voice\n          voice_birthday\n          youtube_id\n        }\n      }\n    ": types.PrecureQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Precure($color: Color, $after: String, $before: String, $age: Age, $series_id: String) {\n    precureAllStars(color: $color, after: $after, before: $before, age: $age, series_id: $series_id) {\n      id\n      cure_name\n      series\n    }\n    seriesAll {\n      title\n      id\n    }\n  }\n"): (typeof documents)["\n  query Precure($color: Color, $after: String, $before: String, $age: Age, $series_id: String) {\n    precureAllStars(color: $color, after: $after, before: $before, age: $age, series_id: $series_id) {\n      id\n      cure_name\n      series\n    }\n    seriesAll {\n      title\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query precureIds {\n        precureAllStars {\n          id\n        }\n      }\n    "): (typeof documents)["\n      query precureIds {\n        precureAllStars {\n          id\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query PrecureQuery($id: String) {\n        precure(id: $id) {\n          after_prologue\n          age\n          before_prologue\n          birthday\n          color\n          cure_name\n          debut\n          fairy\n          id\n          item\n          name\n          series\n          series_id\n          special {\n            solo\n            team\n          }\n          voice\n          voice_birthday\n          youtube_id\n        }\n      }\n    "): (typeof documents)["\n      query PrecureQuery($id: String) {\n        precure(id: $id) {\n          after_prologue\n          age\n          before_prologue\n          birthday\n          color\n          cure_name\n          debut\n          fairy\n          id\n          item\n          name\n          series\n          series_id\n          special {\n            solo\n            team\n          }\n          voice\n          voice_birthday\n          youtube_id\n        }\n      }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;