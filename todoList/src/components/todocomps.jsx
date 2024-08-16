/* eslint-disable react/prop-types */

function TodoComponent({Title,Description}) {
  return (
    <div>
      <h3>{Title}</h3>
      <p>{Description}</p>
    </div>
  )
}

export default TodoComponent
