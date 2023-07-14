export function Snippet() {
  return (
    <pre className="max-w-full overflow-x-auto rounded border bg-gray-100 px-4 py-1 font-mono text-sm text-black">
      {`[ 
  {
    section: "Section1",
    content: [
      {
        title: "Dashboard",
        icon: <HomeIcon/>,
        link: "/",
      },
      {
        title: "Projects",
        icon: <ProjectIcon/>,
        link: "/admin/projects",
      },
  },
]
`}
    </pre>
  );
}
