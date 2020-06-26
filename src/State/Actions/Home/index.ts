import * as HomeActions from './types';

export function searchingBy(searchingBy: string): HomeActions.ISearchingBy {
    return {
        type: HomeActions.SEARCHING_BY,
        searchingBy: searchingBy
    }
}