import React, {useReducer} from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer';


import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USER,
	GET_REPOS,
	GET_USER
} from "../types";

const GithubState = props => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false
	}

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	// Search users
	const searchUsers = async (text) => {
		setLoading();
		const res =
			await axios.get(`https://api.github.com/search/users?
			q=${text}
			&${process.env.REACT_APP_GITHUB_CLIENT_ID}
			&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items
		});
	};

	// Get user
	const getUser = async (login) => {
		setLoading();
		const res =
			await axios.get(`https://api.github.com/users/${login}
			?${process.env.REACT_APP_GITHUB_CLIENT_ID}
			&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		dispatch({
			type: GET_USER,
			payload: res.data
		});
	}

	// Get Repos
	const getUserRepos = async (login) => {
		setLoading()
		const res =
			await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc
			&${process.env.REACT_APP_GITHUB_CLIENT_ID}
			&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		dispatch({
			type: GET_REPOS,
			payload: res.data
		})
	}

	// Clear Users
	const clearUsers = () => dispatch({type: CLEAR_USER});

	// Set loading
	const setLoading = () => {
		dispatch({
			type: SET_LOADING
		})
	};

	return <GithubContext.Provider
		value={{
			users: state.users,
			user: state.user,
			repos: state.repos,
			loading: state.loading,
			searchUsers,
			clearUsers,
			getUser,
			getUserRepos
		}}>

		{props.children}
	</GithubContext.Provider>
}


export default GithubState
