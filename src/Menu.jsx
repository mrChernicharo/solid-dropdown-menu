import { createEffect, createSignal, onCleanup } from 'solid-js';
import s from './App.module.css';

export default function Menu(props) {
    let i = 0
    let j = 0
    const [openSubMenus, setOpenSubMenus] = createSignal([]);
    const depth = () => props.options[0].depth



    createEffect(() => console.log(JSON.stringify(openSubMenus(), null, 2)))

    createEffect(() => {

        setOpenSubMenus(() => {

            const subMenusState = []
            props.options.forEach(opt => {
                console.log(opt)
                if (opt.options) {
                    subMenusState.push(false)
                }
            })
            return subMenusState
        })
    })

    const el = (option, index) => (
        <div
            // data-index={index}
            class={s.Option}
            onclick={e => {
                // props.setValue(option.value);
                // setIsSubMenuOpen(false);
                // props.setIsOpen(false);
            }}
        >
            {option.text}
        </div>
    );

    return (
        <div
            menu-index={props.index}
            style={{
                width: '100%',
                border: '1px solid',
                transform: depth() === 1 ? ''
                    : `translate(${122 - (depth() * 1.8)}px, -26px)`
            }}
        >
            <For each={props.options}>
                {(option, idx) => {
                    return (
                        <Show
                            when={option.options}
                            fallback={el(option, idx())}
                        >

                            {console.log()}
                            <div
                                // data-index={idx()}
                                class={s.SubMenuContainer}
                                onclick={e => {
                                    // console.log(option, i)
                                    setOpenSubMenus((sms) => {

                                        const bools = [...sms]
                                        // const bool = bools[i]
                                        // bools.splice(i, 1, bool)
                                        console.log({ bools, index: props.index, i: i, j: j++, depth: depth(), idx: idx() })
                                        return bools
                                    })
                                    // setIsSubMenuOpen(!isSubMenuOpen());
                                }}
                            >
                                {el(option, idx())} ‣
                            </div>

                            {/* <Show when={isSubMenuOpen()}> */}
                            <Menu
                                index={i++}
                                options={option.options}
                                setValue={props.setValue}
                                setIsOpen={props.setIsOpen}
                            />
                            {/* </Show> */}
                        </Show>)
                }}
            </For>
        </div >
    );
}
