import React from 'react'
import Check from '../utils/backtracking'
import Result from './Result';
import Summary from './Summary'

const Color = (props) => {
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
      if (Check.isSafe(node, color, A, nodeColor) === true) {
        nodeColor[node] = color;
        decision = `${node+1} diwarnai ${C[color]}`;
        history.push({
            iter: iterations++,
            node: node + 1,
            nodeCheck: Check.isAdjecent(node, A),
            adjacentNode: Check.adjacentColorNode(node, A, C, nodeColor),
            decision: decision,
          })

        if (node !== A.length - 1) {
          coloring(node + 1, A, C);
          if (stop === false) {
            if (nodeColor[node + 1] !== 0) {
              decision = `Baktracking ke simpul ${node+1}, hapus warna pada simpul ${node+2}`;
              history.push({
                  iter: iterations++,
                  node: node + 2,
                  nodeCheck: Check.isAdjecent(node+1, A),
                  adjacentNode: Check.adjacentColorNode(node+1, A, C, nodeColor),
                  decision: decision,
                })

            } else if (nodeColor[node + 1] === 0) {
              decision = `Baktracking ke simpul ${node+1}`;
              history.push({
                  iter: iterations++,
                  node: node + 2,
                  nodeCheck: Check.isAdjecent(node+1, A),
                  adjacentNode: Check.adjacentColorNode(node+1, A, C, nodeColor),
                  decision: decision,
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

  let showSummary = false

  let content = (<div className='container justify-content-center'> 
        <p style = {{fontSize : '24px', textAlign: 'center', margin: '30px'}}> No Solution, Please add More Color! </p>
      </div>)

  const showTable = coloring(0,A,C);

  if(showTable !== false){
    showSummary = true;
    content = (<Result content={showTable} />);
  } 

  for(let j = 0; j < A.length; j++){
    if((Check.isAdjecent(j, A) === '' || A[j][j] === 1) && props.check === true){
      showSummary = false;
      content = (<div className='container justify-content-center'> 
        <p style = {{fontSize : '24px', textAlign: 'center', margin: '30px'}}> Graph Must be Connected and Not Contain Loop! </p>
      </div>)

      break;
    }
  }

  stop = false;

  for(let i = 0; i < A.length; i++){
      for(let j = 0; j < A.length; j++){

        if(Math.floor(A[i][j]) > 1 || Math.floor(A[i][j]) < 0){
          showSummary = false;
          content = (<div className='container justify-content-center'> 
            <p style = {{fontSize : '24px', textAlign: 'center', margin: '30px'}}> Entry of Adjacency Matrix must be 0 or 1.</p>
          </div>)
          stop = true;
          break;
        };
      }

      if(stop === true){
        break;
      }
    }

  return (
    <div className='container'>
      {content}
      {showSummary && (<Summary content={nodeColor} color={C}/>)}
    </div>
  )
};

export default Color;