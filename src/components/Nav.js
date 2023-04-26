import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus, theme, setTheme }) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };
  const switchThemeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("test");
  };

  return (
    <nav>
      <h1>Waves</h1>

      <div className='theme-div'>
        {/* <button onClick={switchThemeHandler}>Switch theme</button> */}
        <FontAwesomeIcon
          onClick={switchThemeHandler}
          className='theme-icon'
          size='2x'
          icon={theme === "dark" ? faMoon : faSun}
        />
      </div>

      <button onClick={openLibraryHandler}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
