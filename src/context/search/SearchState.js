import React, {useReducer} from 'react'
import SearchContext from './searchContext'
import searchReducer from './searchReducer';

import {
	SET_SEARCH,
} from "../types";

const SearchState = props => {
	const initialState = '';

	const [state, dispatch] = useReducer(searchReducer, initialState);

	const setText = (text) => {
		dispatch({
			type: SET_SEARCH,
			payload: text
		});
	};

	return <SearchContext.Provider
		value={{
			text: state,
			setText,
		}}>

		{props.children}
	</SearchContext.Provider>
}


export default SearchState
