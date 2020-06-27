import { IAutocompleteOBJ } from '../../../Api/apiObjects';

export const SEARCHING_BY = 'SEARCHING_BY';
export const SAVE_AUTOCOMPLETE_LIST = 'SAVE_AUTOCOMPLETE_LIST';

export interface ISearchingBy {
    type: typeof SEARCHING_BY;
    searchingBy: string;
}

export interface ISaveAutocompleteList {
    type: typeof SAVE_AUTOCOMPLETE_LIST;
    autocompleteList: Array<IAutocompleteOBJ>;
}

export type homeActionType = ISearchingBy | ISaveAutocompleteList;