export function Snippet() {
  return (
    <pre className="max-w-full overflow-x-auto rounded border bg-gray-100 px-4 py-1 font-mono text-sm text-black">
      {`[ 
  {
     section: "Applications",
    content: [
      {
        title: "Users",
        icon: <HomeIcon />,
        link: "/",
      },
      {
        title: "Medias",
        icon: <MediaIcon />,
        link: "/admin/medias",
      },
      {
        title: "Contacts",
        icon: <ContactIcon />,
        link: "/admin/contacts",
      }
    ]
  },
]
`}
    </pre>
  );
}
