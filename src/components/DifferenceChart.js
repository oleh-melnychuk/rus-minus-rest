import axios from 'axios';
import { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';


const DifferenceChart = () => {
const [rusData, setRusData] = useState(null)

const totalAmount =  689210;

useEffect(() => {
    axios.get('https://russianwarship.rip/api/v2/statistics/latest')
    .then(function ({data: {data: {stats}}}) {
      setRusData(stats)
    })
}, [])





    if(!rusData) return <div>Loading</div>


    return(<div className='container'>
        <h3>Good russians statistics</h3>
        <p>
        Good russians - { rusData.personnel_units} <br />
        Rest of them - {totalAmount - rusData.personnel_units}
        </p>
    <PieChart
    data={[
      { title: 'Good russians', value: rusData.personnel_units, color: '#E38627' },
      { title: 'Bad russians', value: totalAmount - rusData.personnel_units, color: '#C13C37' },
    ]}
    label={({ dataEntry }) => `${dataEntry.title} - ${Math.round(dataEntry.percentage)} %`}
    labelPosition={60}
    
  />
  </div>);

}

export default DifferenceChart