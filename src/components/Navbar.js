import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
 
  handleCountryChange = (event) => {
    const newCountry = event;
    this.props.onCountryChange(newCountry);
  };

  render() {
    return (
      <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-dropdown"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Category
                    <svg
                      className="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  <div
                    id="dropdownNavbar"
                    className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-2 text-sm text-white dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <Link
                          to="/business"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Business
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/entertainment"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Entertainment
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/health"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Health
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/science"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Science
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/sports"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sports
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/technology"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Technology
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>


                <li>
                  <button
                    id="dropdownNavbarLink2"
                    data-dropdown-toggle="dropdownNavbar2"
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Country
                    <svg
                      className="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  <div
                    id="dropdownNavbar2"
                    className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-2 text-sm text-white dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li
                        
                          to=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => this.handleCountryChange("in")}
                        >
                          India
                        
                      </li>
                      <li
                        
        
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => this.handleCountryChange("us")}
                        >
                          US
                        
                      </li>
                      <li
                        
                          to=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => this.handleCountryChange("au")}
                        >
                          Australia
                        
                      </li>
                      <li
                        
                          to=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => this.handleCountryChange("cn")}
                        >
                          China
                        
                      </li>
                      <li
                          to=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => this.handleCountryChange("gb")}
                        >
                          UK
                        
                      </li>
                      <li
                          to=""
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => this.handleCountryChange("ru")}
                        >
                          Russia
                        
                      </li>
                    </ul>
                  </div>
                </li>
                


                <li>
                  <Link
                    to="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
