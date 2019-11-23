import React from 'react';

const Country = (props) => {
	const { name, capital } = props;
	return (
		<div>
			<h3>Name : {name} </h3>
			<h3>Capital : {capital} </h3>
			<hr />
		</div>
	);
};

export default Country;
