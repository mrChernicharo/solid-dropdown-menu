import { createEffect, createSignal, onCleanup } from 'solid-js';
import s from './App.module.css';

export default function Menu(props) {
    const [isSubMenuOpen, setIsSubMenuOpen] = createSignal(false);
    createEffect(() => console.log(JSON.stringify(props.options, null, 2)))
    const firstOpt = () => props.options[0]

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
                transform: firstOpt().depth === 1 ? ''
                    : `translate(${122 - (firstOpt().depth * 1.8)}px, -26px)`
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
                            }}
                        >
                            {optionElement(option)} ‣
                        </div>
                        <Show when={isSubMenuOpen()}>
                            <Menu
                                options={option.options}
                                setValue={props.setValue}
                                setIsOpen={props.setIsOpen}
                            />
                        </Show>
                    </Show>
                )}
            </For>
        </div>
    );
}
