import React, {useState} from 'react'
import Coloring from './Coloring'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import RenderMatrix from './RenderMatrix'

const Matrix = (props) => {
  const inputMatrix = [];
  const [matrix, setMatrix] = useState([]);
  const [color, setColor] = useState([]);
  const [check, setCheck] = useState(false); 

  for(let i = 0; i < props.size; i++){
    inputMatrix.push([]);
    for(let j = 0; j < props.size; j++){
      inputMatrix[i].push(0);
    }
  }

  function submitMatrixHandler(event){
    event.preventDefault();

    var count = 0;
    for(let i = 0; i < props.size; i++){
      for(let j = 0; j < props.size; j++){
        inputMatrix[i][j] = !isNaN(parseInt(event.target[count].value)) ? parseInt(event.target[count].value) : 0;
        count++;
      }
    }

    var colorPicker = event.target[event.target.length - 2].value.toString();
    const colorArray = colorPicker.split(',');
    
    setColor(colorArray);
    setMatrix(inputMatrix);
    setCheck(true)

  }

  let content;
  let printMatrix = false;
  let setLatexMatrix;

  if(color.length === 0){
      content = (<p> </p>)
    } else if(color.length <= 0){
      content = (<div className='container justify-content-center'> 
        <p style = {{fontSize : '24px', textAlign: 'center', margin: '30px'}}> Number of Colors Must be Positive Integer !</p>
        </div>)
      } else {
        printMatrix = true;
        setLatexMatrix = RenderMatrix(matrix);
        content = (<Coloring adjacency={matrix} color={color} check={check}/>);
    }

  const elements = [];

  for(let i = 0; i < props.size; i++){
    elements.push([]);
    for(let j = 0; j < props.size; j++){
      elements[i].push(
        <td key={`${i+1} ${j+1}`}>
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
        <table className="table table-sm table-bordered table-responsive mt-5">
          <tbody>
             {elements.map((index, rowIndex = 1) => (
               <tr key={rowIndex}> 
                 {index}
               </tr>
             ))}
            </tbody>
        </table>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default"> Choose colors (separate it with comma ' , ').</span>
          </div>
          <input type="text" required placeholder='red,green,blue' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>

        <button type="submit" className="btn btn-primary"> Show Coloring Table! </button>
      </form>
      {printMatrix === true && (
        <div className='container mt-5'> 
          <p style = {{fontSize : '24px', textAlign: 'center', margin: '30px'}}> Adjacency Matrix Input : </p> 
          <BlockMath math={"A = " + setLatexMatrix} />
        </div>
      )}
      {content}
    </div>
  )
};

export default Matrix;