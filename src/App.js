import { useEffect } from "react";
import Chart from "./components/chart";


function App() {
  
  // api endpoints for the data 
  const educDataUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
  const countyDataUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

  const fetchEducData = (url) => {
    
  }

  const fetchCountyDataUrl = (url) => {

  }
  
  useEffect(() => {
    fetchEducData(educDataUrl);
    fetchCountyDataUrl(countyDataUrl);
  }, [])

  return (
    <div className="App">
      <Chart />
    </div>
  );
}

export default App;
