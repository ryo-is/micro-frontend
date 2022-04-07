/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getQueryUser
// ====================================================

export interface getQueryUser_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface getQueryUser {
  user: getQueryUser_user | null;
}

export interface getQueryUserVariables {
  userId: number;
}
