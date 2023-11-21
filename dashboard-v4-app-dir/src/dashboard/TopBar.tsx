'use client';
import { useDashboardContext } from './Provider';

export function TopBar() {
  const { openSidebar } = useDashboardContext();
  return (
    <header className="relative z-10 h-20 items-center">
      <div className="relative z-10 mx-auto flex h-full flex-col justify-center px-3 text-white">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="group relative flex h-full w-12 items-center">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              onClick={openSidebar}
              className="text-4xl text-white focus:outline-none"
            >
              &#8801;
            </button>
          </div>
          <div className="container relative left-0 flex w-3/4">
            <div className="group relative ml-8 hidden w-full items-center md:flex lg:w-72">
              <div className="absolute flex h-10 w-auto cursor-pointer items-center justify-center p-3 pr-2 text-sm uppercase text-gray-500 sm:hidden">
                <svg
                  fill="none"
                  className="relative h-5 w-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <svg
                className="pointer-events-none absolute left-0 ml-4 hidden h-4 w-4 fill-white text-gray-100 group-hover:text-gray-400 sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <input
                type="text"
                className="block w-full rounded-2xl bg-gray-800 py-1.5 pl-10 pr-4 leading-normal text-gray-400 opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="relative ml-5 flex w-full items-center justify-end p-1 sm:right-auto sm:mr-0">
            <a href="#" className="block pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </a>
            <a href="#" className="block pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
            <a href="#" className="relative block pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </a>
            <a href="#" className="relative block">
              <img
                alt="Maurice Lokumba"
                src="/images/1.jpg"
                className="mx-auto h-10 w-10 rounded-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
