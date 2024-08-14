import React from 'react';

function CntryRsl12() {
    const [data, setData] = React.useState(null);
    const [srch, setSrch] = React.useState("");
    const [error, setError] = React.useState(null);

    const inputChange = (e) => {
        setSrch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from causing a page reload

        if (srch) {
            fetch(`https://restcountries.com/v3.1/name/${srch}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    setData(data);
                    setError(null); // Clear any previous errors
                })
                .catch((err) => {
                    console.error('Fetch error:', err);
                    setError('Failed to fetch data. Please try again later.');
                });
        } else {
            setError('Please enter a country name.');
        }
    };

    return (
        <div className="bg-slate-200 p-8 mt rounded-2xl">
            <form onSubmit={handleSubmit} className="mb-8">
                <input 
                    className="block w-96 p-4 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Enter your Country" 
                    onChange={inputChange} 
                    name="isrch" 
                />
                <button 
                    className="inline-block bg-blue-500 text-white rounded-lg px-5 py-2.5 mt-2 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </form>

            {error && <div className="text-red-500 mb-4">{error}</div>}
            
            {data && data.length > 0 && (
                <div className="bg-slate-200 p-8 rounded-2xl">
                    <img src={data[0].flags.png} width="300" alt="" />
                    <p>{data[0].name.common}</p>
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                        <li>Capital: {data[0].capital}</li>
                        <li>Continent: {data[0].region}</li>
                        <li>Population: {data[0].population}</li>
                        <li>Common languages: {Object.values(data[0].languages).join(', ')}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CntryRsl12;
