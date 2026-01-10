import { useState } from "react"

const ToggleButton = () =>{

    const [isOn , setIsOn] = useState(false);

    const toggle = () => setIsOn(!isOn);

    return (
        <>
        <p>The button is { isOn ? "On"  : "Off"} </p>
        <button onClick={toggle} >{isOn ? 'Turn OFF' : 'Turn ON'}</button>
        </>
    )

}

export default ToggleButton;