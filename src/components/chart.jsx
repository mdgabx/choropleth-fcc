import * as d3 from 'd3';

const Chart = (props) => {

    if(props !== undefined || props !== null) {
        const educData = props.educData;
        const countyData = props.countyData;

        const w = 400;
        const h = 400;
        const padding = 50;

        d3.select(".svg-chart")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
    }
    
    return ( 
        <div className="container">
            <h1 id="title">United States Educational Attainment</h1>
            <p id="description">Adults percentage with a bachelors degree and higher (2010-2014)</p>
            <div className="svg-chart">

            </div>
        </div>
     );
}
 
export default Chart;