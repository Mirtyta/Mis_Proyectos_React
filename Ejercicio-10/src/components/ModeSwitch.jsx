// ============================================
// src/components/ModeSwitch.jsx

import { useState } from "react";
import './ModeSwitch.css'
import { useThemeContext } from "../context/ThemeContext";

// ============================================
function ModeSwitch() {
  const {setContextTheme} = useThemeContext()

  const [checked, setChecked] = useState(false)

  const handleSwitch = (e) =>{
    const nextChecked = e.target.checked; // ✅ sacás el true o false real
    setContextTheme( (state) => (state === 'light'? 'dark':'light') )
    setChecked(nextChecked);
    //console.log(nextChecked); // ahora sí muestra true / false
  }


  return (
    <div className="form-check form-switch mt-2">
      <input
        className="form-check-input bg-body"
        type="checkbox"
        id="ModeSwitch"
        checked={checked}
        onChange={handleSwitch}
      />
      <label 
      className="form-check-label text-white" 
      htmlFor="ModeSwitch">
        Dark
      </label>
    </div>
  );
}
export default ModeSwitch