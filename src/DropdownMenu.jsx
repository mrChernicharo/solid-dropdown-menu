import { createEffect, createSignal, Show } from "solid-js";
import s from "./Menu.module.css";
import Menu from "./Menu";

export default function DropdownMenu(props) {
  const [value, setValue] = createSignal(props.initialValue);
  const [isOpen, setIsOpen] = createSignal(false);

  const handleOpen = (e) => setIsOpen(!isOpen());

  return (
    <div class={s.DropDown}>
      <div class={s.Input} onClick={handleOpen}>
        ❖ {value()}
      </div>

      <div class={s.MenuWrapper}>
        <div class={`${s.MenuContainer} ${isOpen() ? s.expanded : s.hidden}`}>
          <Menu options={props.options} setValue={setValue} setIsOpen={setIsOpen} />
        </div>
      </div>

      <Show when={isOpen()}>
        <div class={s.Overlay} onclick={handleOpen}></div>
      </Show>
    </div>
  );
}
