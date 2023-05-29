import { useState } from 'react';
import './Body.css';
import Input from './Input/Input';
import Output from './Output/Output';
const Body = () => {
	const [form, setForm] = useState({
		bill: '',
		service: '',
		customer: '',
	});
	const [list, setList] = useState([]);
	const [total, setTotal] = useState({
		totalCustomer: 0,
		totalTip: 0,
	});
	const handleClick = () => {
		const len = list.length;
		let sum = 0;
		for (let obj of list) {
			sum = sum + obj.tip;
		}
		setTotal({
			totalCustomer: len,
			totalTip: Math.round(sum * 100) / 100,
		});
	};
	return (
		<>
			<Input
				form={form}
				setForm={setForm}
				setList={setList}
			/>
			<Output list={list} />
			<div className='total-container'>
				<button onClick={handleClick}>Calculate Tip & Customer</button>
				<div className='total-detail'>
					<p>Total Customer</p>
					<p>Tip</p>
					<p>{total.totalCustomer}</p>
					<p>{total.totalTip}</p>
				</div>
			</div>
		</>
	);
};
export default Body;
