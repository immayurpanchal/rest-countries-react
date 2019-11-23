import React from 'react';
import Search from './components/Search/Search';
import CountryList from './components/CountryList/CountryList';
import axios from 'axios';

class App extends React.Component {
	state = {
		countries : []
	};

	onSearch = async (query) => {
		const res = await axios(`https://restcountries.eu/rest/v2/name/${query}`);
		this.setState({ countries: res.data });
	};

	render () {
		return (
			<div>
				<Search onSearch={this.onSearch} />
				<CountryList countries={this.state.countries} />
			</div>
		);
	}
}

export default App;
