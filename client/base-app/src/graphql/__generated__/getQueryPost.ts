/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getQueryPost
// ====================================================

export interface getQueryPost_post {
  __typename: "Post";
  id: string;
  title: string;
}

export interface getQueryPost {
  post: getQueryPost_post | null;
}

export interface getQueryPostVariables {
  userId: string;
}
