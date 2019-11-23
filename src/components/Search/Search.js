import React from 'react';
import './Search.css';

class Search extends React.Component {
	constructor (props) {
		super(props);
		this.inputText = '';
	}

	getInputText = (e) => {
		this.inputText = e.target.value;
	};

	onButtonClicked = () => {
		this.props.onSearch(this.inputText);
	};

	render () {
		return (
			<div>
				<div>
					<div className='ui icon input searchInput'>
						<input type='text' placeholder='Search...' onChange={this.getInputText} />
						<i className='search icon' />
					</div>
					<button className='ui primary button' onClick={this.onButtonClicked}>
						Search
					</button>
				</div>
			</div>
		);
	}
}

export default Search;
