import React from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import SearchState from "./context/search/SearchState";
import Home from "./components/pages/Home";
import Notfound from "./components/pages/Notfound";

const App = () => {

	return (
		<div className="App container">
			<GithubState>
				<AlertState>
					<SearchState>
						<Router>
							<Navbar/>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route exact path="/users/:login" component={User}/>
								<Route exact path="/about" component={About}/>
								<Route component={Notfound}/>
							</Switch>
						</Router>
					</SearchState>
				</AlertState>
			</GithubState>
		</div>
	)
}

export default App;
