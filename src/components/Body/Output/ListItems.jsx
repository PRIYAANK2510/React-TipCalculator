import './Listitems.css';
const ListItems = ({ item }) => {
	return (
		<li>
			<span>{item.customer}</span> offering a tip of <span>{item.tip}</span> Rs.
		</li>
	);
};
export default ListItems;
