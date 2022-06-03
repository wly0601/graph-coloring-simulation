const renderLatexMatrix = (props) => {
  return (
    "\\begin{pmatrix}\n" +
    props
      .map((row, index) => {
        if (index === props.length - 1) return row.join(" & ") + "\n"
        else return row.join(" & ") + "\\\\\n"
      })
      .join("") +
    "\\end{pmatrix}"
  )
}

export default renderLatexMatrix;