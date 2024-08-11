
// eslint-disable-next-line react/prop-types
function CntryInfo({Capital,Continent,Population,CL}) {
  return (
    <> 

        <div>
            <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                <li>Capital: {Capital} </li>
                <li>Continent: {Continent} </li>
                <li>Population: {Population} </li>
                <li>Common Languages: {CL} </li>
            </ul>
        </div>
    </>
  )
}

export default CntryInfo
