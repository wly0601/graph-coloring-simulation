import React, {useState, useRef} from 'react';
import Matrix from './AdjacencyMatrix';

const InputForm = () =>{
	const sizeRef = useRef('');
	const [enteredSize, setEnteredSize] = useState(null)

  function submitHandler(event) {
    event.preventDefault();

    const matrixSize = {
      size: sizeRef.current.value,
    };

    setEnteredSize(parseInt(matrixSize.size));
  }

  console.log(enteredSize)

  let content = (<p> </p>)

  if(enteredSize === null){
  	content = (<p> </p>)
  } else if(isNaN(enteredSize) || enteredSize <= 0){
  	content = (<div className='container justify-content-center'> 
      <p style = {{fontSize : '24px', textAlign: 'center', margin: '30px'}}> Size Must be Positive Integer!</p>
    </div>)
  }else{
  	content = (<Matrix size={enteredSize} default={0}/>)
  }
  

	return (
		<div className='container-fluid m-auto'> 
		<form onSubmit={submitHandler}>
			<div className="input-group my-2 px-auto">
  			<div className="input-group-prepend">
    			<span className="input-group-text px-4" id="inputGroup-sizing-default">Size of Matrix (n x n)</span>
  			</div>
  			<input type="text" required ref={sizeRef} className="form-control rounded" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
			</div>

			<button type="submit" className="btn btn-primary"> Create Adjacency Matrix </button>
		</form>
		{content}
		</div>
	)
};

export default InputForm;