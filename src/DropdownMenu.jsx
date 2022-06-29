import { createEffect, createSignal, Show } from 'solid-js';
import s from './App.module.css';
import Menu from './Menu';

export default function DropdownMenu(props) {
    const [value, setValue] = createSignal(props.initialValue);
    const [isOpen, setIsOpen] = createSignal(false);


    const handleOpen = (e) => setIsOpen(!isOpen())
    return (
        <div>
            <div class={s.Input} onClick={handleOpen}>
                ❖ {value()}
            </div>

            <div
                class={`${s.OptionsContainer} ${isOpen() ? s.expanding : s.hidden
                    }`}
            >
                <Menu
                    options={props.options}
                    setValue={setValue}
                    setIsOpen={setIsOpen}
                />
            </div>
        </div>
    );
}
