import gql from 'graphql-tag';

export const GET_EVENT = '';

export const GET_ALL_EVENTS = gql`
  query GetAllEvents {
    user {
      id
      events {
        name
        location
        description
        startDateUtc
        endDateUtc
      }
    }
  }
`;
