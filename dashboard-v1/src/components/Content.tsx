interface ContentProps {
  title: string;
}

export function Content({ title }: ContentProps) {
  return (
    <div>
      <div
        className="flex w-full flex-wrap items-center justify-between rounded-2xl px-12 py-6 md:flex-nowrap"
        style={{
          backgroundColor:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
          backgroundImage:
            "linear-gradient(to right top, #cf4af3,#e73bd7, #f631bc,#fd31a2,#ff3a8b, #ff4b78,#ff5e68,#ff705c,#ff8c51,#ffaa49,#ffc848,#ffe652)",
        }}
      >
        <div>
          <h3 className="m-0 flex items-center text-lg font-medium">
            <svg viewBox="0 0 512 512" className="mr-3 w-12 lg:w-8">
              <path
                d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z"
                fill="#d6355b"
                data-original="#ff468c"
              />
              <path
                d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z"
                fill="#d6355b"
                data-original="#d72878"
              />
              <path
                d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z"
                fill="#2e000a"
                data-original="#700029"
              />
              <path
                d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z"
                fill="#2e000a"
                data-original="#4d0e06"
              />
              <path
                d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z"
                fill="#d6355b"
                data-original="#ff468c"
              />
              <path
                d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z"
                fill="#d6355b"
                data-original="#d72878"
              />
            </svg>
            {title}
          </h3>
          <div className="my-4 overflow-hidden text-sm font-normal text-white">
            Grab yourself 10 free images from Adobe Stock in a 30-day free trial
            plan and find perfect image, that will help you with your new
            project.
          </div>
          <button className="rounded-2xl bg-blue-700 px-4 py-2">
            Start free trial
          </button>
        </div>
        <img
          className="w-24 object-cover object-center md:w-44"
          src="https://assets.codepen.io/3364143/glass.png"
          alt=""
        />
      </div>
      <div className="mb-3 mt-6 text-gray-400">Installed</div>
      <div
        style={{ backgroundColor: "rgb(146 151 179 / 13%)" }}
        className="rounded-2xl p-4 font-normal"
      >
        <div className="mb-6 flex justify-end border-b border-gray-600 pb-2">
          <div className="mr-auto flex">
            <svg
              viewBox="0 0 52 52"
              style={{ border: "1px solid #3291b8" }}
              className="mr-4 h-7 w-7 rounded"
            >
              <g>
                <path
                  d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                  fill="#061e26"
                  data-original="#393687"
                />
                <path
                  d="M12.16 39H9.28V11h9.64c2.613 0 4.553.813 5.82 2.44 1.266 1.626 1.9 3.76 1.9 6.399 0 .934-.027 1.74-.08 2.42-.054.681-.22 1.534-.5 2.561-.28 1.026-.66 1.866-1.14 2.52-.48.654-1.213 1.227-2.2 1.72-.987.494-2.16.74-3.52.74h-7.04V39zm0-12h6.68c.96 0 1.773-.187 2.44-.56.666-.374 1.153-.773 1.46-1.2.306-.427.546-1.04.72-1.84.173-.801.267-1.4.28-1.801.013-.399.02-.973.02-1.72 0-4.053-1.694-6.08-5.08-6.08h-6.52V27zM29.48 33.92l2.8-.12c.106.987.6 1.754 1.48 2.3.88.547 1.893.82 3.04.82s2.14-.26 2.98-.78c.84-.52 1.26-1.266 1.26-2.239s-.36-1.747-1.08-2.32c-.72-.573-1.6-1.026-2.64-1.36-1.04-.333-2.086-.686-3.14-1.06a7.36 7.36 0 01-2.78-1.76c-.987-.934-1.48-2.073-1.48-3.42s.54-2.601 1.62-3.761 2.833-1.739 5.26-1.739c.854 0 1.653.1 2.4.3.746.2 1.28.394 1.6.58l.48.279-.92 2.521c-.854-.666-1.974-1-3.36-1-1.387 0-2.42.26-3.1.78-.68.52-1.02 1.18-1.02 1.979 0 .88.426 1.574 1.28 2.08.853.507 1.813.934 2.88 1.28 1.066.347 2.126.733 3.18 1.16 1.053.427 1.946 1.094 2.68 2s1.1 2.106 1.1 3.6c0 1.494-.6 2.794-1.8 3.9-1.2 1.106-2.954 1.66-5.26 1.66-2.307 0-4.114-.547-5.42-1.64-1.307-1.093-1.987-2.44-2.04-4.04z"
                  fill="#c1dbe6"
                  data-original="#89d3ff"
                />
              </g>
            </svg>
            Photoshop
          </div>
          <div className="mx-auto flex">
            <span className="relative text-base">
              <span className="absolute left--2 top-1 h-2 w-2 rounded-full bg-green-400" />
              <span className="pl-4">Updated</span>
            </span>
          </div>
          <div className="ml-auto flex">
            <div>
              <button className="rounded-full border border-gray-500 px-5 py-1 text-gray-500">
                Open
              </button>
            </div>
          </div>
        </div>
        <div className="mb-6 flex justify-end border-b border-gray-600 pb-2">
          <div className="mr-auto flex">
            <svg
              viewBox="0 0 52 52"
              style={{ border: "1px solid #b65a0b" }}
              className="mr-4 h-7 w-7 rounded"
            >
              <g>
                <path
                  d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                  fill="#261400"
                  data-original="#6d4c13"
                />
                <path
                  d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z"
                  fill="#e6d2c0"
                  data-original="#ffbd2e"
                />
              </g>
            </svg>
            Illustrator
          </div>
          <div className="mx-auto flex">
            <span className="relative text-base">
              <span className="absolute left--2 top-1 h-2 w-2 rounded-full bg-indigo-400" />
              <span className="pl-4">Updated</span>
            </span>
          </div>
          <div className="ml-auto flex">
            <div>
              <button className="rounded-full border border-gray-500 px-5 py-1 text-gray-500">
                Open
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="mr-auto flex">
            <svg
              viewBox="0 0 52 52"
              style={{ border: "1px solid #C75DEB" }}
              className="mr-4 h-7 w-7 rounded"
            >
              <g>
                <path
                  d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                  fill="#3a3375"
                  data-original="#3a3375"
                />
                <path
                  d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                  fill="#e4d1eb"
                  data-original="#e7adfb"
                />
              </g>
            </svg>
            After Effects
          </div>
          <div className="mx-auto flex">
            <span className="relative text-base">
              <span className="absolute left--2 top-1 h-2 w-2 rounded-full bg-green-400" />
              <span className="pl-4">Updated</span>
            </span>
          </div>
          <div className="ml-auto flex">
            <div>
              <button className="rounded-full border border-gray-500 px-5 py-1 text-gray-500">
                Open
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "rgb(146 151 179 / 13%)" }}
        className="mt-8 rounded-2xl"
      >
        <div className="container mx-auto">
          <div className="py-8">
            <div className="py-4">
              <div className="max-w-full overflow-x-auto rounded-lg">
                <table className="w-full leading-normal text-white">
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
                  <tbody className="text-white">
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
    </div>
  );
}
