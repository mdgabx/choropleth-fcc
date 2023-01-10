import * as d3 from 'd3';


const Chart = (props) => {

    console.log(props)
    const educData =  props.educData;
    const countyData = props.countyData;

    if(educData.length !== 0 && countyData.length !== 0) {

        // console.log('educData', educData);
        // console.log('countyData', countyData);

        const w = 1000;
        const h = 650;

       const svg =  d3.select(".svg-chart")
            .append("svg")
            .attr("width", w)
            .attr("height", h)

        svg.selectAll('path')
            .data(countyData)
            .enter()
            .append('path')
            .attr('d', d3.geoPath())
            .attr('class', 'county')
            .attr('fill', (countyDataItem) => {
                let id = countyDataItem['id']
                let county = educData.find((item) => item["fips"] === id)
                let percentageBachelor = county["bachelorsOrHigher"]

                if(percentageBachelor <= 15) {
                    return 'red'
                } else if (percentageBachelor <= 30) {
                    return 'orange'
                } else if (percentageBachelor <= 45) {
                    return 'maroon'
                } else {
                    return 'green'
                }

            })

            
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