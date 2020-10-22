/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PageTypeUpdateInput } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: PageTypeUpdate
// ====================================================

export interface PageTypeUpdate_pageTypeUpdate_errors {
  __typename: "PageError";
  field: string | null;
  message: string | null;
}

export interface PageTypeUpdate_pageTypeUpdate_pageType_metadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface PageTypeUpdate_pageTypeUpdate_pageType_privateMetadata {
  __typename: "MetadataItem";
  key: string;
  value: string;
}

export interface PageTypeUpdate_pageTypeUpdate_pageType {
  __typename: "PageType";
  id: string;
  name: string;
  metadata: (PageTypeUpdate_pageTypeUpdate_pageType_metadata | null)[];
  privateMetadata: (PageTypeUpdate_pageTypeUpdate_pageType_privateMetadata | null)[];
}

export interface PageTypeUpdate_pageTypeUpdate {
  __typename: "PageTypeUpdate";
  errors: PageTypeUpdate_pageTypeUpdate_errors[];
  pageType: PageTypeUpdate_pageTypeUpdate_pageType | null;
}

export interface PageTypeUpdate {
  pageTypeUpdate: PageTypeUpdate_pageTypeUpdate | null;
}

export interface PageTypeUpdateVariables {
  id: string;
  input: PageTypeUpdateInput;
}
