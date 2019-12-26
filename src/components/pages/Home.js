import React, {Fragment} from 'react';
import Alert from "../layout/Alert";
import Search from "../users/Search";
import Users from "../users/users";

const Home = () =>
	<Fragment>
		<Alert/>
		<Search/>
		<Users/>
	</Fragment>

export default Home;
