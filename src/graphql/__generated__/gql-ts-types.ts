export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type FilmsListResponse = {
  __typename?: 'FilmsListResponse';
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FilmsResponse = {
  __typename?: 'FilmsResponse';
  episode_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PlanetsListResponse = {
  __typename?: 'PlanetsListResponse';
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PlanetsResponse = {
  __typename?: 'PlanetsResponse';
  climate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  terrain?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  fetchAllFilms?: Maybe<Array<Maybe<FilmsListResponse>>>;
  fetchAllPlanets?: Maybe<Array<Maybe<PlanetsListResponse>>>;
  fetchAllStars?: Maybe<Array<Maybe<StarsListResponse>>>;
  fetchAllVehicles?: Maybe<Array<Maybe<VehiclesListResponse>>>;
  fetchFilmById?: Maybe<FilmsResponse>;
  fetchPlanetById?: Maybe<PlanetsResponse>;
  fetchStartById?: Maybe<StarsResponse>;
  fetchVehiclesById?: Maybe<VehiclesResponse>;
};


export type QueryFetchFilmByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFetchPlanetByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFetchStartByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFetchVehiclesByIdArgs = {
  id: Scalars['Int']['input'];
};

export type StarsListResponse = {
  __typename?: 'StarsListResponse';
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type StarsResponse = {
  __typename?: 'StarsResponse';
  birth_year?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type VehiclesListResponse = {
  __typename?: 'VehiclesListResponse';
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type VehiclesResponse = {
  __typename?: 'VehiclesResponse';
  cost_in_credits?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  vehicle_class?: Maybe<Scalars['String']['output']>;
};
