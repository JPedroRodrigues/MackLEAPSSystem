"use client"

import {useState, useRef} from "react"

// Dropdown select component
export default function DropdownSelect(props) {
    const [selectClass, setSelectClass] = useState(false);
    const [caretClass, setCaretClass] = useState(false);
    const [menuClass, setMenuClass] = useState(false);
    const [selected, setSelected] = useState("Escolha");
    // Setting a reference
    const divRefs = useRef([]);

    function handleKeyDown(e, option) {
        if (e.key === "Enter") {
            setSelected(option);
            setCaretClass(prevCaretClass => !prevCaretClass);
            setMenuClass(prevMenuClass => !prevMenuClass);
            setSelectClass(prevSelectClass => !prevSelectClass);
            props.onRoleChange && props.onRoleChange(option);
        }
    }

    function setDivRef(index, ref) {
        divRefs.current[index] = ref;
    }

    /* Create a list item based on an array
    * 1º: Checks if the item name is the same as the selected one to change its style
    * 2º: If the user clicks on an item, the selected item will be the one clicked
    * Then, the program changes the classes of all other elements of the dropdown select
    */
    const opt = props.option.map(item => {
        let i = 1;
        return <li 
            className={selected === item? "active" : ""} 
            onClick={() => {
                setSelected(item);
                setCaretClass(prevCaretClass => !prevCaretClass);
                setMenuClass(prevMenuClass => !prevMenuClass);
                setSelectClass(prevSelectClass => !prevSelectClass);
                props.onRoleChange && props.onRoleChange(item);
            }}
            onKeyDown={e => handleKeyDown(e, item)}
            tabIndex={0}
            ref={el => setDivRef(++i, el)}
            >
            {item}
        </li>
    })

    // Changes the classes, and consequently the styles, of the menu elements
    function classToggle() {
        setSelectClass(prevSelectClass => !prevSelectClass);
        setCaretClass(prevCaretClass => !prevCaretClass);
        setMenuClass(prevMenuClass => !prevMenuClass);
    }

    return <div className="dropdown" id={props.id}>
        <div 
            className={selectClass ? "select select-clicked" : "select"} 
            onClick={classToggle}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    setSelectClass(prevSelectClass => !prevSelectClass);
                    setCaretClass(prevCaretClass => !prevCaretClass);
                    setMenuClass(prevMenuClass => !prevMenuClass);
                }
            }}
            tabIndex={0}
            ref={el => setDivRef(0, el)}
        >
            <span className="selected" >{selected}</span>
            <div className="caret--container">
                <div className={caretClass ? "caret caret-rotate": "caret"}></div>
            </div>
        </div>
        <ul className={menuClass ? "menu menu-open" : "menu"}>
            {opt}
        </ul>
    </div>
}