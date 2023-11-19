export function Snippet() {
  return (
    <pre className="max-w-full overflow-x-auto rounded border bg-gray-100 px-4 py-1 font-mono text-sm text-black">
      {`[ 
  {
    section: "Apps",
    content: [
      {
        title: "All Apps",
        icon: <AppsIcon />,
        link: "/",
      },
      {
        title: "Updates",
        icon: <UpdatesIcon />,
        link: "/admin/updates",
      },
    ],
  },
]
`}
    </pre>
  );
}
