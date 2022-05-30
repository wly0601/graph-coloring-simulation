import React from 'react'

const Result = (props) => {
	const adjacencyMatrix = props.adjacency;
	const colorPalletes = props.color;

	return (
		<table className="table mt-5">
			<thead className="thead-dark">
				<tr>
	  			<th scope="col"> Node </th>
	 		 		<th scope="col"> Adjacent Node </th>
	  			<th scope="col"> Checking Color of Adjacent Nodes </th>
	  			<th scope="col"> Decision </th>
	  			<th scope="col"> Color </th>
				</tr>
  		</thead>
  		<tbody>
				<tr>
	  			<th scope="row">1</th>
	  			<td>2</td>
	  			<td>2 belum diwarnai </td>
	  			<td>1 diwarnai merah</td>
	  			<td style={{background:'red'}}>  </td>
				</tr>
				<tr>
	  			<th scope="row">2</th>
	  			<td>1</td>
	  			<td>1 diwarnai merah </td>
	  			<td>2 diwarnai hijau</td>
	  			<td style={{background:'green'}}>  </td> 
				</tr>
  		</tbody>
		</table>
	)
};

export default Result;