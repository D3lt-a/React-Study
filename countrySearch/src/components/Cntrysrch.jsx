import React from "react"

function Cntrysrch() {
    const  setSrch = React.useState
    const inputChange = (e) => {
        const {value, name} = e.target
        setSrch((values)=> ({...values,[name]: value}))
    }
    return (
        <>
            <div className=" bg-slate-200 p-8 w-fit rounded-2xl ">
                <form action="" className="">
                    <input className='block w-96 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder="Enter your Country" onChange={inputChange} name="inpt-srch"/>
                        <button className="inline-block my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
                </form>
            </div>
        </>
    )
}

export default Cntrysrch
