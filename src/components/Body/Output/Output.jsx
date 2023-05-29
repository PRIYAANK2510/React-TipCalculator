import ListItems from './ListItems';
import './Output.css';
const Output = ({ list }) => {
	return (
		<div className='output'>
			{list.length !== 0 && <h3>Customer List</h3>}
			{list.length !== 0 && (
				<div className='customer-list'>
					<ul>
						{list.map((item, index) => (
							<ListItems
								key={index + 1}
								item={item}
							/>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
export default Output;
