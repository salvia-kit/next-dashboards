interface ContentProps {
  title: string;
}

export function Content(props: ContentProps) {
  return (
    <div className="mt-4">
      <div className="mb-5 text-2xl font-medium text-gray-700">
        {props.title}
      </div>
      <div className="flex gap-8">
        <div className="flex items-center gap-4 rounded-md border bg-fuchsia-800 px-8 py-4 text-white shadow">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
          <div>
            <div className="text-lg font-bold">500</div>
            <div className="text-sm">Product reviews</div>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-md border bg-fuchsia-800 px-8 py-4 text-white shadow">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
              />
            </svg>
          </div>
          <div>
            <div className="text-lg font-bold">300</div>
            <div className="text-sm">Messages delivered</div>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-md border bg-fuchsia-800 px-8 py-4 text-white shadow">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>
          <div>
            <div className="text-lg font-bold">300</div>
            <div className="text-sm">Data centers</div>
          </div>
        </div>
      </div>
      <div className="container mt-10 border">
        <div className="py-8">
          <div className="py-4">
            <div className="max-w-full overflow-x-auto rounded-lg">
              <table className="w-full leading-normal text-black">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                      Created_at
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    >
                      status
                    </th>
                    <th
                      scope="col"
                      className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                    />
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <a href="#" className="relative block">
                            <img
                              alt="profil"
                              src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/8_yfarwk.jpg"
                              className="mx-auto h-10 w-10 rounded-full object-cover "
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap">Jean marc</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Admin</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">12/09/2020</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                        />
                        <span className="relative">active</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <a href="#" className="relative block">
                            <img
                              alt="profil"
                              src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg"
                              className="mx-auto h-10 w-10 rounded-full object-cover "
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap">Marcus coco</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Designer</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">01/10/2012</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                        />
                        <span className="relative">active</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <a href="#" className="relative block">
                            <img
                              alt="profil"
                              src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/3_iscinv.jpg"
                              className="mx-auto h-10 w-10 rounded-full object-cover "
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap">Eric marc</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Developer</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">02/10/2018</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                        />
                        <span className="relative">active</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <a href="#" className="relative block">
                            <img
                              alt="profil"
                              src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/6_v4ytve.jpg"
                              className="mx-auto h-10 w-10 rounded-full object-cover "
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap">Julien Huger</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">User</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">23/09/2010</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                        />
                        <span className="relative">active</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <a href="#" className="relative block">
                            <img
                              alt="profil"
                              src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/8_yfarwk.jpg"
                              className="mx-auto h-10 w-10 rounded-full object-cover "
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap">Jean marc</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Admin</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">12/09/2020</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                        />
                        <span className="relative">active</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <a href="#" className="relative block">
                            <img
                              alt="profil"
                              src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg"
                              className="mx-auto h-10 w-10 rounded-full object-cover "
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap">Marcus coco</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Designer</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">01/10/2012</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                        />
                        <span className="relative">active</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <a href="#" className="relative block">
                            <img
                              alt="profil"
                              src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/3_iscinv.jpg"
                              className="mx-auto h-10 w-10 rounded-full object-cover "
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap">Eric marc</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">Developer</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">02/10/2018</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                        />
                        <span className="relative">active</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <a href="#" className="relative block">
                            <img
                              alt="profil"
                              src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/6_v4ytve.jpg"
                              className="mx-auto h-10 w-10 rounded-full object-cover "
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-nowrap">Julien Huger</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">User</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">23/09/2010</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                        />
                        <span className="relative">active</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="xs:flex-row xs:justify-between flex flex-col items-center p-5">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-full rounded-l-xl border bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-full border-y bg-white px-4 py-2 text-base text-indigo-500 hover:bg-gray-100"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-full border-y bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-r-xl border-y border-r bg-white p-4  text-base text-gray-600 hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
