import React, {useState} from 'react'

const Matrix = (props) => {

	var temp = [];
	console.log(props.size, 'size nya')
	for(let i = 0; i < props.size; i++){
		temp.push([]);
		for(let j = 0; j < props.size; j++){
			temp[i].push(0);
		}
	}

	const [matrix, setMatrix] = useState(temp)
	console.log(matrix, 'masih temp engga')

	function submitMatrixHandler(event){
		setMatrix(temp);
		event.preventDefault();

		var count = 0;
		for(let i = 0; i < props.size; i++){
			for(let j = 0; j < props.size; j++){
				console.log(parseInt(event.target[count].value), i,j)
				matrix[i][j] = !isNaN(parseInt(event.target[count].value)) ? parseInt(event.target[count].value) : 0;
				count++;
			}
		}
		
		setMatrix(matrix);
		console.log(matrix);
	}

	const elements = [];

	for(let i = 1; i <= props.size; i++){
		elements.push([]);
		for(let j = 1; j <= props.size; j++){
			elements[i-1].push(
				<td key={`${i} ${j}`}>
					<div className="input-group input-group-sm m-0">
  					<input type="text" placeholder={props.default} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
					</div>
				</td>
			);
		}
	}

	return (
		<div className='container table-flow'>	
			<h3 className='mt-5'> Success Created {props.size}x{props.size} Adjacency Matrix : </h3>
			<form onSubmit={submitMatrixHandler}>
				<table className="table table-sm table-bordered mt-5">
					<tbody>
   					{elements.map((index, rowIndex = 1) => (
   						<tr key={rowIndex}> 
   							{index}
   						</tr>
   					))}
  				</tbody>
				</table>
				<button type="submit" className="btn btn-primary"> Show Coloring Table! </button>
			</form>
		</div>
	)
};

export default Matrix;