import React from 'react'
import '../App.css'

const Footer = () => {
	return ( 
		<div className='footer justify-content-center'>
			<div className='py-2 text-white'>
				<p> Made and Maintained with &hearts; by  
						<a className='text-white' href='mailto:mnfadli@students.undip.ac.id' style={{textDecoration: 'none'}}> Muhammad Nur Fadli</a> 
				</p>
			</div>
		</div>
	)
}

export default Footer;