import React from 'react'
import {Data} from '../examples/matrix.example-1'
import Coloring from '../components/Coloring';
import Navbar from '../components/Navbar';
import { BlockMath } from 'react-katex';
import RenderMatrix from '../components/RenderMatrix'
import Footer from '../components/Footer';

const example__1 = (props) =>{
	
	const C = ['merah','hijau','biru']
	const setLatexMatrix = RenderMatrix(Data);

	return (
	<div className='App'>
		<Navbar />
		<h4 className='m-4'> Example With Adjacency Matrix : </h4>
		<BlockMath math={"A = " + setLatexMatrix} />	
		<h4 className='m-4'> With Color C =  &#123; Merah, Hijau, Biru &#125;</h4>
		<Coloring adjacency={Data} color={C} />
		<Footer />
	</div>
	)
}

export default example__1;