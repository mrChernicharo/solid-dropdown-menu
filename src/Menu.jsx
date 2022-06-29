import { createEffect, createSignal, onCleanup } from 'solid-js';
import s from './App.module.css';

export default function Menu(props) {
	const [isSubMenuOpen, setIsSubMenuOpen] = createSignal(false);
	// createEffect(() => {
	// });

	const optionElement = option => (
		<div
			class={s.Option}
			onclick={e => {
				props.setValue(option.value);
				setIsSubMenuOpen(false);
				props.setIsOpen(false);
			}}
		>
			{option.text}
		</div>
	);

	return (
		<div
			style={{
				width: '100%',
				border: '1px solid',
				transform: `translate(${props.depth() * 12 + 'px'}, 0)`,
			}}
		>
			<For each={props.options}>
				{option => (
					<Show
						when={option.options}
						fallback={optionElement(option)}
					>
						<div
							class={s.SubMenuContainer}
							onclick={e => {
								setIsSubMenuOpen(!isSubMenuOpen());
								if (isSubMenuOpen()) {
									props.setDepth(props.depth() + 1);
								} else {
									props.setDepth(props.depth() - 1);
								}
							}}
						>
							{optionElement(option)} ‣
						</div>
						{/* <div class={`${s.SubMenuContainer}`}> */}
						<Show when={isSubMenuOpen()}>
							<Menu
								options={option.options}
								setValue={props.setValue}
								setIsOpen={props.setIsOpen}
								setDepth={props.setDepth}
								depth={props.depth}
							/>
						</Show>
						{/* </div> */}
					</Show>
				)}
			</For>
		</div>
	);
}
