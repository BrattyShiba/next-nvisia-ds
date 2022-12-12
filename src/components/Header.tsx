import Link from "next/link";
import { useEffect } from "react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { useTheme } from "../pages/context/ThemeContext";
import Toggle from "./Toggle";
import debounce from "lodash.debounce";

export const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const toggleDarkTheme = debounce(() => {
    toggleTheme();
  }, 100);

  useEffect(() => {
    if (isDarkTheme && document) {
      document.querySelector("body")!.dataset.theme = "dark-theme";
    } else {
      document.querySelector("body")!.dataset.theme = "light-theme";
    }
  }, [isDarkTheme]);
  return (
    <header className="header">
      <div className="header-left">
        <svg xmlns="http://www.w3.org/2000/svg" height="90" width="90">
          <g>
            <path
              className="header-logo"
              d="M49.565,6.963A39.033,39.033,0,1,0,88.653,45.931,39.033,39.033,0,0,0,49.565,6.963ZM53.148,65.1a2.266,2.266,0,0,1-1.431.5,2.3,2.3,0,0,1-1.784-.85L48.5,62.98,28.854,39.844H28.8l.035,24.12c0,.5-.065,1.665-1.491,1.655H25.311a1.6,1.6,0,0,1-1.6-1.585l-.05-31.723V31c0-1.55,2.157-1.54,2.266-1.545a2.688,2.688,0,0,1,1.8.7c.378.293,25.775,31.708,25.775,31.708a2.286,2.286,0,0,1-.363,3.215Zm10.773-2.3-.994,2.226a.994.994,0,0,1-.865.562h-.5a1.034,1.034,0,0,1-.865-.562L45.078,30.765a.9.9,0,0,1,.84-1.327h3.618a.994.994,0,0,1,.87.557l11.245,25.2,2.261,5.083a3.1,3.1,0,0,1,.01,2.509ZM70.545,50.84A3.215,3.215,0,0,1,66.4,52.52a3.106,3.106,0,1,1,4.144-1.68Zm3.7-8.557a3.215,3.215,0,0,1-4.144,1.68,3.111,3.111,0,1,1,4.144-1.68Zm-.8-6.828a3.106,3.106,0,1,1,4.144-1.68,3.215,3.215,0,0,1-4.129,1.68Z"
              transform="translate(0 0)"
            ></path>
          </g>
        </svg>
        <nav className="main-nav">
          <ul>
            <li>
              <Link href="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link href="/registration-form">Registration Form</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <Toggle
          label="DARK MODE"
          id="darkmode"
          onClickEvent={toggleDarkTheme}
        />
        <FaUserCircle className="fa-user-icon" />
      </div>
    </header>
  );
};
