import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        userName
        email
        role
      }
    }
  }
`;
export const ADD_OFFER = gql`
  mutation addOffer($projectId: ID!, $newOffer: String!) {
    addOffer(projectId: $projectId, newOffer: $newOffer) {
      _id
      offers {
        ContractorName
      }
    }
  }
`;
export const ADD_PROJECT = gql`
  mutation addProject(
    $projectDescription: String!
    $projectMaterials: String!
    $projectZipCode: String!
    $initPrice: String!
  ) {
    addProject(
      projectDescription: $projectDescription
      projectMaterials: $projectMaterials
      projectZipCode: $projectZipCode
      initPrice: $initPrice
    ) {
      _id
      initPrice
      projectDescription
      projectMaterials
      userName
    }
  }
`;
export const APPROVE_OFFER = gql`
mutation approveOffer($projectId: ID!, $newOffer: String!, $contractorName: String!) {
  approveOffer(projectId: $projectId, newOffer: $newOffer, contractorName: $contractorName) {
        _id
    userName
    projectDescription
    projectMaterials
    initPrice
    offers {
      newOffer
    }
  }
}
`;
