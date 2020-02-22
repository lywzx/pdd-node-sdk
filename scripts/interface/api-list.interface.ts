export interface ApiListInterface {
  id: number;

  catName: string;

  docList: ApiListItemInterface[];
}

export interface ApiListItemInterface {
  id: string;

  scopeName: string;

  scopeNameId: number;

  apiName: string;

  usageScenarios: string;

  scopeTips: string | null;
}
