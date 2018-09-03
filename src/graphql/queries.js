import gql from 'graphql-tag';

export const GET_EVENTS = gql`
  query GetEvents($searchString: String!) {
    events(searchString: $searchString) {
      name
      location
      description
      startDateUtc
      endDateUtc
      isAllDay
      duration
    }
  }
`;

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
        isAllDay
        duration
      }
    }
  }
`;
