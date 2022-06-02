import React from 'react'

const Summary = (props) => {
	const node = props.content.map((index, iteration) => {
		return {
			nodeNumber : iteration+1,
			colorNode  : props.color[index],
		}
	})

  return (
    <div className='container'>
			<p style = {{fontSize : '24px', textAlign: 'center', marginTop: '40px'}}> Coloring Table of Graph with Given Adjacency Matrix Above : </p>
    	<table className="table mt-4 table-bordered">
      	<thead className="thead-dark">
        	<tr>
          	<th scope="col"> Simpul ke-</th>
         	 	<th scope="col"> Warna Simpul </th>
        	</tr>
      	</thead>
      	<tbody>
        {node.map((index, rowIndex = 1) => {
          return (
             <tr key={rowIndex}>
              <td> {index.nodeNumber} </td> 
              <td> {index.colorNode}</td>
             </tr>
           )})}
      	</tbody>
    	</table>
    </div>
  )
};

export default Summary;