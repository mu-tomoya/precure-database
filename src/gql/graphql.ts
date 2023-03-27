/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Age = {
  /** 等しい */
  eq?: InputMaybe<Scalars['Int']>;
  /** 以上 */
  gt?: InputMaybe<Scalars['Int']>;
  /** 以下 */
  lt?: InputMaybe<Scalars['Int']>;
};

export enum Color {
  /** 黒系統 */
  Black = 'black',
  /** 青系統 */
  Blue = 'blue',
  /** 金 */
  Gold = 'gold',
  /** 緑系統 */
  Green = 'green',
  /** ピンク系統 */
  Pink = 'pink',
  /** 紫系統 */
  Purple = 'purple',
  /** 赤系統 */
  Red = 'red',
  /** 白系統 */
  White = 'white',
  /** 黄系統 */
  Yellow = 'yellow'
}

export type Precure = {
  __typename?: 'Precure';
  /** 変身後口上 */
  after_prologue?: Maybe<Scalars['String']>;
  /** 満年齢 */
  age?: Maybe<Scalars['Float']>;
  /** 変身前口上 */
  before_prologue?: Maybe<Scalars['String']>;
  /** 誕生日 */
  birthday?: Maybe<Scalars['String']>;
  /** プリキュアカラー */
  color: Scalars['String'];
  /** プリキュア名 */
  cure_name: Scalars['String'];
  /** プリキュアチームとしての加入した放送日 */
  debut: Scalars['String'];
  /** メイン妖精 */
  fairy?: Maybe<Array<Scalars['String']>>;
  /** プリキュアID（参加順） */
  id: Scalars['ID'];
  /** 変身アイテム */
  item: Scalars['String'];
  /** 名前（変身前） */
  name: Scalars['String'];
  /** 出演シリーズ */
  series: Scalars['String'];
  /** 出演シリーズid */
  series_id: Scalars['String'];
  /** 必殺技 */
  special?: Maybe<Special>;
  /** 声優 */
  voice: Scalars['String'];
  /** 声優の生年月日。生年不明は9999年としてある。 */
  voice_birthday: Scalars['String'];
  /** Youtubeの公式変身動画の動画id */
  youtube_id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** プリキュア検索 */
  precure?: Maybe<Precure>;
  /** プリキュアオールスターズから検索（エコー、モフルン、特別仕様のプリキュアは除く） */
  precureAllStars?: Maybe<Array<Precure>>;
  /** プリキュアシリーズの検索 */
  seriesAll?: Maybe<Array<Series>>;
  /** IDからシリーズを検索 */
  seriesById: Series;
  /** プリキュア主題歌の検索 */
  songAll?: Maybe<Array<Song>>;
  /** IDから主題歌を検索 */
  songById: Song;
};


export type QueryPrecureArgs = {
  cure_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  voice?: InputMaybe<Scalars['String']>;
};


export type QueryPrecureAllStarsArgs = {
  after?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Age>;
  before?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Color>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QuerySeriesAllArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Total>;
};


export type QuerySeriesByIdArgs = {
  id: Scalars['Int'];
};


export type QuerySongAllArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  series?: InputMaybe<Scalars['String']>;
  term?: InputMaybe<Term>;
  type?: InputMaybe<Type>;
};


export type QuerySongByIdArgs = {
  id: Scalars['Int'];
};

export type Series = {
  __typename?: 'Series';
  /** キャラクターデザイン */
  characterdesign: Scalars['String'];
  /** シリーズディレクター */
  director: Array<Scalars['String']>;
  /** 放送終了日 */
  end?: Maybe<Scalars['String']>;
  /** 作品番号 */
  id: Scalars['ID'];
  /** 音楽 */
  music: Array<Scalars['String']>;
  /** 東映アニメーションプロデューサー */
  producer: Array<Scalars['String']>;
  /** 放送開始日 */
  start: Scalars['String'];
  /** 作品名 */
  title: Scalars['String'];
  /** 全話数 */
  total?: Maybe<Scalars['Int']>;
  /** シリーズ構成 */
  writer: Array<Scalars['String']>;
  /** Youtubeの第一話のid */
  youtube_id?: Maybe<Scalars['String']>;
};

export type Song = {
  __typename?: 'Song';
  /** 編曲 */
  arrange: Array<Scalars['String']>;
  /** ID */
  id: Scalars['ID'];
  /** 作詞 */
  lyric: Array<Scalars['String']>;
  /** 作曲 */
  music: Array<Scalars['String']>;
  /** 主題歌シリーズ */
  series: Scalars['String'];
  /** 主題歌シリーズID */
  series_id: Scalars['String'];
  /** 放送期間、all:全期間、first:前期、second:後期 */
  term: Scalars['String'];
  /** 主題歌タイトル */
  title: Scalars['String'];
  /** op:オープニング、ed:エンディング */
  type: Scalars['String'];
  /** プリキュアシンガー */
  vocal: Array<Scalars['String']>;
};

export type Special = {
  __typename?: 'Special';
  /** 個人必殺技 */
  solo: Array<Scalars['String']>;
  /** チーム必殺技 */
  team: Array<Scalars['String']>;
};

export enum Term {
  /** 全期間 */
  All = 'all',
  /** 前期 */
  First = 'first',
  /** 後期 */
  Second = 'second'
}

export type Total = {
  /** 等しい */
  eq?: InputMaybe<Scalars['Int']>;
  /** 以上 */
  gt?: InputMaybe<Scalars['Int']>;
  /** 以下 */
  lt?: InputMaybe<Scalars['Int']>;
};

export enum Type {
  /** エンディング */
  Ed = 'ed',
  /** "オープニング */
  Op = 'op'
}

export type AllStarsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllStarsQuery = { __typename?: 'Query', precureAllStars?: Array<{ __typename?: 'Precure', id: string, cure_name: string, series: string }> | null };


export const AllStarsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllStars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"precureAllStars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cure_name"}},{"kind":"Field","name":{"kind":"Name","value":"series"}}]}}]}}]} as unknown as DocumentNode<AllStarsQuery, AllStarsQueryVariables>;