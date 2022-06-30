import { createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import s from './App.module.css';

export default function Menu(props) {
    let i = 0
    const [openSubMenus, setOpenSubMenus] = createSignal([]);
    const depth = () => props.options[0].depth

    function handleClick(e, idx) {
        setOpenSubMenus((sms) => {
            return sms.map(menu => {
                if (menu.id === idx) {
                    return { ...menu, open: !menu.open }
                }
                return { ...menu, open: false }
            })
        })

    }

    createEffect(() => console.log(JSON.stringify(openSubMenus(), null, 2)))

    createEffect(() => {
        console.log(openSubMenus())
    })

    onMount(() => {

        setOpenSubMenus(() => {

            const subMenusState = []
            props.options.forEach((opt, i) => {
                console.log(opt)
                if (opt.options) {
                    subMenusState.push({ id: i, open: false })
                }
            })
            return subMenusState
        })
    })

    const el = (option, index) => (
        <div
            class={s.Option}
            onclick={e => {
                props.setValue(option.value);
                setOpenSubMenus(sms => sms.map(m => ({ ...m, open: false })))
                props.setIsOpen(false);
            }}
        >
            {option.text}
        </div>
    );

    return (
        <div
            menu-index={props.index}
            class={s.Menu}
            style={{
                transform: depth() === 1 ?
                    '' : `translate(${152 - (depth() * 1.9)}px, -26px)`
            }}
        >
            <For each={props.options}>
                {(option, idx) => {
                    return (
                        <Show
                            when={option.options}
                            fallback={el(option, idx())}
                        >
                            <div class={s.SubMenuOpt}
                                onClick={e => handleClick(e, idx())}
                            >
                                {el(option, idx())} ‣
                            </div>

                            <Show when={openSubMenus().find(m => m.id === idx())?.open}>
                                <Menu
                                    index={i++}
                                    options={option.options}
                                    setValue={props.setValue}
                                    setIsOpen={props.setIsOpen}
                                />
                            </Show>
                        </Show>)
                }}
            </For>
        </div >
    );
}
