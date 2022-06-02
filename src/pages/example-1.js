import React from 'react'
import {Data} from '../examples/matrix.example-1'
import Coloring from '../components/Coloring';

const example__1 = (props) =>{
	
	const C = ['merah','hijau','biru']

	return (
		<div className='container'>
      <Coloring adjacency={Data} color={C} />
    </div>
	)
}

export default example__1;