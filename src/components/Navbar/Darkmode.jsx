import { useEffect , useState } from "react";
import darkmode from "../../assets/dark and light mode/DarkMode.png"
import lightmode from "../../assets/dark and light mode/LightMode.png"
const Darkmode = () => {

    const [theme , setTheme] = useState(
        localStorage.getItem("theme") ?
         localStorage.getItem("theme") : "light"
    );

const element =document.documentElement;

useEffect(() => {
    if(theme === "dark"){
        element.classList.add("dark");  
            localStorage.setItem("theme", "dark");
    }else{
        element.classList.remove("dark");
            localStorage.setItem("theme", "light");

    }       
}, [theme]);

const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
}

  return (
    <  >

      <div className="relative w-18 h-8 ml-8 ">
        <img src={darkmode} alt="Dark Mode"
        onClick={changeTheme}
        className={`w-16
         cursor-pointer absolute right-0 z-10
          drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
        transition-all duration-300 
        ${theme === "light" ? "opacity-100" : "opacity-0"} `}/>
     
        <img src={lightmode} alt="Light Mode" 
        onClick={changeTheme}
        className={`w-16 
        absolute right-0 z-10 cursor-pointer 
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
         transition-all duration-300 
         ${theme === "dark" ? "opacity-100" : "opacity-0"}  `}/>  
      </div>
    </>

  )
  
  
}

export default Darkmode
