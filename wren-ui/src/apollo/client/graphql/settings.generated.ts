import * as Types from './__types__';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetSettingsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetSettingsQuery = { __typename?: 'Query', settings: { __typename?: 'Settings', dataSource: { __typename?: 'DataSource', type: Types.DataSourceName, properties: any, sampleDataset?: Types.SampleDatasetName | null } } };

export type ResetCurrentProjectMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type ResetCurrentProjectMutation = { __typename?: 'Mutation', resetCurrentProject: boolean };


export const GetSettingsDocument = gql`
    query GetSettings {
  settings {
    dataSource {
      type
      properties
      sampleDataset
    }
  }
}
    `;

/**
 * __useGetSettingsQuery__
 *
 * To run a query within a React component, call `useGetSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSettingsQuery(baseOptions?: Apollo.QueryHookOptions<GetSettingsQuery, GetSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSettingsQuery, GetSettingsQueryVariables>(GetSettingsDocument, options);
      }
export function useGetSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSettingsQuery, GetSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSettingsQuery, GetSettingsQueryVariables>(GetSettingsDocument, options);
        }
export type GetSettingsQueryHookResult = ReturnType<typeof useGetSettingsQuery>;
export type GetSettingsLazyQueryHookResult = ReturnType<typeof useGetSettingsLazyQuery>;
export type GetSettingsQueryResult = Apollo.QueryResult<GetSettingsQuery, GetSettingsQueryVariables>;
export const ResetCurrentProjectDocument = gql`
    mutation ResetCurrentProject {
  resetCurrentProject
}
    `;
export type ResetCurrentProjectMutationFn = Apollo.MutationFunction<ResetCurrentProjectMutation, ResetCurrentProjectMutationVariables>;

/**
 * __useResetCurrentProjectMutation__
 *
 * To run a mutation, you first call `useResetCurrentProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetCurrentProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetCurrentProjectMutation, { data, loading, error }] = useResetCurrentProjectMutation({
 *   variables: {
 *   },
 * });
 */
export function useResetCurrentProjectMutation(baseOptions?: Apollo.MutationHookOptions<ResetCurrentProjectMutation, ResetCurrentProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetCurrentProjectMutation, ResetCurrentProjectMutationVariables>(ResetCurrentProjectDocument, options);
      }
export type ResetCurrentProjectMutationHookResult = ReturnType<typeof useResetCurrentProjectMutation>;
export type ResetCurrentProjectMutationResult = Apollo.MutationResult<ResetCurrentProjectMutation>;
export type ResetCurrentProjectMutationOptions = Apollo.BaseMutationOptions<ResetCurrentProjectMutation, ResetCurrentProjectMutationVariables>;