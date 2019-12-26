import React, {useContext} from 'react';
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
import SearchContext from "../../context/search/searchContext"

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const searchContext = useContext(SearchContext)

	const {clearUsers, users, searchUsers} = githubContext;
	const {showAlert} = alertContext;
	const {text, setText} = searchContext;

	const onchange = (e) =>
		setText(e.target.value)

	const onSubmit = (e) => {
		e.preventDefault()
		if (!text.length) {
			showAlert('Please enter a text', 'light')
		} else {
			searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form className="form" onSubmit={onSubmit}>
				<input type="text"
					   name="text"
					   placeholder="Search User..."
					   value={text}
					   onChange={onchange}
				/>
				<input type="submit" value="Search" className="btn btn-dark btn-block"/>
			</form>

			{users.length > 0 && <button
				className="btn btn-light btn-block"
				onClick={clearUsers}>
				Clear
			</button>}

		</div>
	)
};

export default Search;
