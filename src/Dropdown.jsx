import { createSignal } from "solid-js";
import s from "./Dropdown.module.css";

export default function Dropdown(props) {
  const [value, setValue] = createSignal(props.initialValue);
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class={s.DropDown}>
      <div class={s.Input} onClick={(e) => setIsOpen(true)}>
        <span>{value()}</span>
        <span style={{ transform: "rotate(180deg) translateY(-2px)" }}>▴</span>
      </div>

      <div class={s.OptionsWrapper}>
        <div class={`${s.OptionsContainer} ${isOpen() ? s.expanded : s.hidden}`}>
          <For each={props.options}>
            {(option) => (
              <div
                class={s.Option}
                onclick={(e) => {
                  setValue(option.value);
                  setIsOpen(false);
                }}
              >
                {option.text}
              </div>
            )}
          </For>
        </div>
      </div>
      <Show when={isOpen()}>
        <div class={s.Overlay} onclick={(e) => setIsOpen(false)}></div>
      </Show>
    </div>
  );
}
