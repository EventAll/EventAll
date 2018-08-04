import gql from 'graphql-tag';

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($email: String!, $password: String!) {
    createAccount(email: $email, password: $password) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        gender
        events {
          name
          location
          description
          startDateUtc,
          endDateUtc,
          isAllDay
          isRecurring
          duration
          recurrencePattern
        }
      }
    }
  }
`;
