export function Snippet() {
  return (
    <pre className="max-w-full overflow-x-auto rounded border bg-gray-100 px-4 py-1 font-mono text-sm text-black">
      {`[ 
  {
    section: "Documents",
    icon: <DocumentIcon />,
    content: [
      {
        title: "Taxes",
        link: "/documents/taxes",
      },
      {
        title: "Travel",
        link: "/documents/travel",
      },
      {
        title: "Insurance",
        link: "/documents/insurance",
      },
    ],
  },
]
`}
    </pre>
  );
}
