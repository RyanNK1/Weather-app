import React from 'react'

const api = {
  key: "8e47847af179c12b7af114ca39d77102",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  
  const datebuilder =  (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay]
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          />
        </div>
        <div className='location-box'>
          <div className='location'>Nairobi, Kenya</div>
          <div className='date'>(dateBuilder(new Date()))</div>

        </div>
      </main>
    </div>
  );
}

export default App;
