export const SEARCHING_BY = 'SEARCHING_BY';

export interface ISearchingBy {
    type: typeof SEARCHING_BY;
    searchingBy: string;
}

export type homeActionType = ISearchingBy;