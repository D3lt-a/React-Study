

// eslint-disable-next-line react/prop-types
function CntryFlag({src, name}) {
  return (
    <> 
      <img src={src} width='300' alt=""  />
      <p>{name}</p> 
    </>
  )
}

export default CntryFlag
