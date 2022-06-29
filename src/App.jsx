import logo from './logo.svg';
import styles from './App.module.css';
import Dropdown from './Dropdown';
import DropdownMenu from './DropdownMenu';

function App() {
	const dropdownOptions = [
		{ text: 'option A', value: 'A', options: null },
		{ text: 'option B', value: 'B', options: null },
		{ text: 'option C', value: 'C', options: null },
		{ text: 'option M', value: 'Mango!', options: null },
	];


	const dropdownMenuOptions = [
		{ depth: 1, text: 'option A', value: 'A', options: null },
		{ depth: 1, text: 'option B', value: 'B', options: null },
		{
			depth: 1, text: 'option C',
			value: 'C',
			options: [
				{ depth: 2, text: 'option C1', value: 'C1', options: null },
				{ depth: 2, text: 'option C2', value: 'C2', options: null },
				{
					depth: 2, text: 'option C3',
					value: 'C3',
					options: [
						{ depth: 3, text: 'option C3A', value: 'C3A', options: null },
						{ depth: 3, text: 'option C3B', value: 'C3B', options: null },
						{ depth: 3, text: 'option C3C', value: 'C3C', options: null },
					],
				},
				{
					depth: 2, text: 'option C4', value: 'C4', options: [
						{ depth: 3, text: 'option C4a', value: 'C4a', options: null },

					]
				},
				{
					depth: 2, text: 'option C5',
					value: 'C5',
					options: [
						{ depth: 3, text: 'option C5a', value: 'C5a', options: null },
						{
							depth: 3, text: 'option C5b',
							value: 'C5b',
							options: [
								{
									depth: 4, text: 'option C5b1',
									value: 'C5b1',
									options: null,
								},
							],
						},
					],
				},
			],
		},
	];

	return (
		<div class={styles.App}>
			<h1>Dropdown</h1>

			<Dropdown
				options={dropdownOptions}
				initialValue={dropdownOptions[0].value}
			/>

			<DropdownMenu
				options={dropdownMenuOptions}
				initialValue={dropdownMenuOptions[0].value}
			/>
		</div>
	);
}

export default App;
