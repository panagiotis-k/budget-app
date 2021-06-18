import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	const { dataPoints } = props;

	//array of values
	const dataPointsValues = dataPoints.map((datapoint) => datapoint.value);
	console.log(dataPointsValues);

	const totalMaximum = Math.max(...dataPointsValues);
	console.log(totalMaximum);

	return (
		<div className="chart">
			{dataPoints.map((dataPoint) => {
				return (
					<ChartBar
						key={dataPoint.label}
						value={dataPoint.value}
						maxValue={totalMaximum}
						label={dataPoint.label}
					/>
				);
			})}
		</div>
	);
};

export default Chart;
