import { useState } from 'react';
import './Input.css';
import { calculateTip } from './service/calculateTip';
const Input = ({ form, setForm, setList }) => {
	//Store the error Class False or True
	const [error, setError] = useState({
		errorBill: false,
		errorService: false,
		errorCustomer: false,
	});
	//Handle the Error Class in Different Input Section
	const handleErrorClass = (amount, service, customer) => {
		if (error.errorBill || error.errorService || error.errorCustomer) {
			setError({
				errorBill: false,
				errorService: false,
				errorCustomer: false,
			});
		}
		if (amount === '' || isNaN(amount)) {
			setError((prev) => {
				return { ...prev, errorBill: true };
			});
		}
		if (service === '' || service === '0') {
			setError((prev) => {
				return { ...prev, errorService: true };
			});
		}
		if (customer === '' || !isNaN(customer)) {
			setError((prev) => {
				return { ...prev, errorCustomer: true };
			});
		}
	};
	//Handle the change of Input Field
	const handleChange = (event) => {
		setForm((prev) => {
			return { ...prev, [event.target.name]: event.target.value };
		});
	};
	//Handle the Sbmission of the form
	const handleSubmit = (e) => {
		e.preventDefault();
		const result = calculateTip(form.bill, form.service, form.customer);
		handleErrorClass(form.bill, form.service, form.customer);
		if (result || result === 0) {
			const newObj = { ...form, tip: result };
			setList((prev) => {
				return [...prev, newObj];
			});
			setForm({
				bill: '',
				service: '',
				customer: '',
			});
		} else {
			alert('Invalid Input!');
		}
	};
	return (
		<div className='input'>
			<form
				action='#'
				onSubmit={handleSubmit}
			>
				<div className='part1'>
					<label htmlFor='bill'>Enter Your bill amount</label>
					<input
						type='text'
						id='bill'
						name='bill'
						value={form.bill}
						onChange={handleChange}
						placeholder='Enter Bill Amount...'
						required
						className={`${error.errorBill ? 'error' : ''}`}
					/>
				</div>
				<div className='part2'>
					<label htmlFor='service'>Select Service</label>
					<select
						name='service'
						id='service'
						value={form.service}
						onChange={handleChange}
						required
						className={`${error.errorService ? 'error' : ''}`}
					>
						<option value='0'>Choose...</option>
						<option value='20'>Excellent - 20%</option>
						<option value='10'>Moderate - 10%</option>
						<option value='5'>Bad - 5%</option>
					</select>
					<label htmlFor='customer-name'>Enter Customer Name</label>
					<input
						type='text'
						id='customer-name'
						name='customer'
						value={form.customer}
						placeholder='Enter Customer Name...'
						onChange={handleChange}
						spellCheck='false'
						className={`${error.errorCustomer ? 'error' : ''}`}
					/>
					<input
						type='submit'
						className='addcust-btn'
						value='Add Customer'
						onClick={handleSubmit}
						required
					/>
				</div>
			</form>
		</div>
	);
};
export default Input;
