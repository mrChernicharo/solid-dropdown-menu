import { createSignal } from 'solid-js';
import s from './App.module.css';

export default function Dropdown(props) {
	const [value, setValue] = createSignal(props.initialValue);
	const [isOpen, setIsOpen] = createSignal(false);

	return (
		<div>
			<div class={s.Input} onClick={e => setIsOpen(!isOpen())}>
				<span>{value()}</span>
				<span
					style={{
						transform: 'rotate(180deg) translateY(-2px)',
					}}
				>
					▴
				</span>
			</div>

			{/* <Show when={isOpen()}> */}
			<div
				class={`${s.OptionsContainer} ${
					isOpen() ? s.expanding : s.hidden
				}`}
			>
				<For each={props.options}>
					{option => (
						<div
							class={s.Option}
							onclick={e => {
								setValue(option.value);
								setIsOpen(false);
							}}
						>
							{option.text}
						</div>
					)}
				</For>
			</div>
			{/* </Show> */}
		</div>
	);
}
