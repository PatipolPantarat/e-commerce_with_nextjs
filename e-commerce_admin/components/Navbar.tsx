export default function Navbar() {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Orders",
      link: "/orders",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <nav className="h-10 border-b border-gray-200">
        <div className="sm:max-w-2xl md:max-w-7xl mx-auto h-full flex justify-end items-center">
          <button className="px-3 py-1 bg-gray-50 hover:text-blue-700 rounded-md font-medium">
            Sign up
          </button>
          <p className="mx-3">or</p>
          <button className="px-3 py-1 bg-gray-50 hover:text-blue-700 rounded-md font-medium">
            Login
          </button>
        </div>
      </nav>
      <nav className="h-20 sm:max-w-2xl md:max-w-7xl mx-auto">
        <div className="h-full grid grid-cols-3">
          <div className="flex justify-start items-center">
            <h1 className="text-3xl font-bold">LOGO</h1>
          </div>
          <div className="flex justify-center items-center">
            <form>
              <div className="flex">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="w-full px-3 py-2 outline-none border border-gray-300 rounded-l-md"
                />

                <button type="button" className="px-3 bg-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 hover:text-blue-700"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </div>
        </div>
      </nav>
      <nav className="h-14 bg-blue-700">
        <div className="sm:max-w-2xl md:max-w-7xl mx-auto h-full flex items-center justify-between">
          <div>
            <ul className="flex h-full">
              {menus.map(({ name }, index) => {
                return (
                  <li
                    key={index}
                    className="font-medium text-white px-6 py-4 hover:bg-blue-500 hover:cursor-pointer"
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <a className="font-medium text-white bg-neutral-800 px-6 py-4 hover:cursor-pointer hover:bg-neutral-700 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 me-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                  clipRule="evenodd"
                />
                <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                <path
                  fillRule="evenodd"
                  d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Custom your PC
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
