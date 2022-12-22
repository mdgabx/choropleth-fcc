import { useEffect, useState } from "react";
import Chart from "./components/chart";



function App() {
  
  // api endpoints for the data 
  const educDataUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
  const countyDataUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";


  //states
  const [educData, setEducData] = useState([]);
  const [countyData, setCountyData] = useState([])

  const fetchEducData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setEducData(data))
  }

  const fetchCountyDataUrl = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCountyData(data))
  }
  
  useEffect(() => {
    fetchEducData(educDataUrl);
    fetchCountyDataUrl(countyDataUrl);
  }, []);

  return (
    <div className="App">
      <Chart educData={educData} countyData={countyData} />
    </div>
  );
}

export default App;
