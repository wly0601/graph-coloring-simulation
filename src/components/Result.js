import React from 'react'

const Result = (props) => {
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
        {props.content.map((index, rowIndex = 1) => {
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