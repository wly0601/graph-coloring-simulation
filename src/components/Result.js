import React from 'react'
import Coloring from '../utils/backtracking'

const Result = (props) => {
	const A = props.adjacency;
	const C = ['',...props.color];

	const nodeColor = [];

	for (let i = 0; i < A.length; i++) {
		nodeColor.push(0);
	}
	
	let iterations = 1;
	let stop = false;
	let history = [];
	var decision = '';
	
	function coloring(node, A, C) {
		let color = 1;
	
		while (color <= C.length - 1) {
			for (let i = node + 1; i < A.length; i++) {
				nodeColor[i] = 0;
			}
			if (Coloring.isSafe(node, color, A, nodeColor) === true) {
				nodeColor[node] = color;
				decision = `${node+1} diwarnai ${C[color]}`;
				history.push({
						iter: iterations++,
						node: node + 1,
						nodeCheck: Coloring.isAdjecent(node, A),
						adjacentNode: Coloring.adjacentColorNode(node, A, C, nodeColor),
						decision: decision
					})
				if (node !== A.length - 1) {
					coloring(node + 1, A, C);
					if (stop === false) {
						if (nodeColor[node + 1] !== 0) {
							decision = `Baktracking ke simpul ${node+1}, hapus warna pada simpul ${node+2}`;
							history.push({
									iter: iterations++,
									node: node + 2,
									nodeCheck: Coloring.isAdjecent(node, A),
									adjacentNode: Coloring.adjacentColorNode(node, A, C, nodeColor),
									decision: decision
								})

						} else if (nodeColor[node + 1] === 0) {
							decision = `Baktracking ke simpul ${node+1}`;
							history.push({
									iter: iterations++,
									node: node + 2,
									nodeCheck: Coloring.isAdjecent(node, A),
									adjacentNode: Coloring.adjacentColorNode(node, A, C, nodeColor),
									decision: decision
								})
						}
					}
				} else if (node === A.length - 1 && nodeColor[node] !== 0) {
					stop = true;
				}
			}
	
			if (stop === true) {
				break;
			}
			color++
		}
		if (node === 0 && color >= C.length - 1 && stop === false) {
			return false;
		}
		return history;
	}

	let content = (<div className='container justify-content-center'> 
				<p style = {{fontSize : '24px', textAlign: 'center', margin: '30px'}}> No Solution, Please add More Color! 3</p>
		  </div>)

	const showTable = coloring(0,A,C);

	return (
		<table className="table mt-5">
			<thead className="thead-dark">
				<tr>
					<th scope="col"> Iterations </th>
					<th scope="col"> Node </th>
					<th scope="col"> Adjacent Node </th>
					<th scope="col"> Checking Color of Adjacent Nodes </th>
					<th scope="col"> Decision </th>
				</tr>
			</thead>
			<tbody>
				{showTable.map((index, rowIndex = 1) => {
					return (
   					<tr key={rowIndex}>
   						<td> {index.iter} </td> 
   						<td> {index.node}</td>
							<td> {index.nodeCheck}</td>
							<td> {index.adjacentNode}</td>
							<td> {index.decision}</td>    
   					</tr>
   				)})}
			</tbody>
		</table>
	)
};

export default Result;