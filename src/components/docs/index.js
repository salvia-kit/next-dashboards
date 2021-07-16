import Snippet from './snippet';
import { FileIcon, FolderIcon, JsIcon } from './icons';

export default function Docs() {
  return (
    <div className="py-8 rounded-3xl max-w-full text-white bg-gray-800">
      <h2 className="text-3xl font-medium mb-10 pl-3 md:pl-6">Documentation</h2>
      <section className="px-3 md:px-8 my-16">
        <h2 className="text-2xl font-medium">Features</h2>
        <ul className="list-disc pl-6 mt-4">
          <li className="mb-4">
            Support of the active route (styled by default).
          </li>
          <li className="mb-4">
            Fully customizable and without external dependencies.
          </li>
          <li className="mb-4">
            No vendor lock-in, you can export it and integrate it in your
            project.
          </li>
          <li>
            Sidenav aligned left or right according to your preferences (on
            mobile).
          </li>
        </ul>
      </section>

      <section className="px-3 md:px-8 my-16">
        <h2 className="text-2xl font-medium">File Structure</h2>
        <div className="pl-2">
          <div className="flex mt-4 mb-3">
            <FolderIcon />
            <span className="pl-2">pages</span>
          </div>
          <div className="flex mt-4 mb-3">
            <FolderIcon />
            <span className="pl-2">public</span>
          </div>
          <div className="flex mt-4 mb-3">
            <FolderIcon />
            <span className="pl-2">src</span>
          </div>
          <div className="pl-5 flex mb-3">
            <FolderIcon />
            <span className="pl-2">components</span>
          </div>
          <div className="pl-5 flex mb-3">
            <FolderIcon />
            <span className="pl-2">dashboard</span>
          </div>
          <div className="pl-11 flex mb-3">
            <FolderIcon />
            <span className="pl-2">sidenavigation</span>
          </div>
          <div className="pl-16 flex mb-3">
            <FolderIcon />
            <span className="pl-2">icons</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">data.js</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">header.js</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">index.js</span>
          </div>
          <div className="pl-16 flex mb-3">
            <FileIcon />
            <span className="pl-2">style.module.css</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">items.js</span>
          </div>
          <div className="pl-11 flex mb-3">
            <FolderIcon />
            <span className="pl-2">topnavigation</span>
          </div>
          <div className="pl-16 flex mb-3">
            <JsIcon />
            <span className="pl-2">index.js</span>
          </div>
          <div className="pl-11 flex mb-3">
            <JsIcon />
            <span className="pl-2">layout.js</span>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-8 my-16">
        <h2 className="text-2xl font-medium">File Structure explained</h2>
        <p className="mt-5">
          We will focus on <strong>dashboard</strong> folder and its
          <strong className="pl-1">subfolders</strong> which contain all the
          logic.
        </p>

        <div className="mt-5 mb-12">
          <div className="flex">
            <FolderIcon /> <strong className="px-1">provider</strong>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-4">
            <JsIcon className="h-7 w-7" />
            <span className="px-2 font-medium">context.js</span> :
            <p className="pl-2">
              contains the
              <strong className="px-1">DashboardProvider</strong>component where
              all the dashboard logic is placed. this will then be reused in
              other components. it handles the closing of the sidenav when the
              route changes or on click outside.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-6">
            <JsIcon className="h-5 w-5" />
            <span className="px-2 font-medium">overlay.js</span> :
            <p className="pl-2">
              displays an overlay that will only be visible on small screens to
              emphasize the focus on the sidenav when it is open
            </p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex">
            <FolderIcon /> <strong className="px-1">sidenavigation</strong>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-4">
            <FolderIcon className="h-7 w-7" />
            <span className="px-2 font-medium">icons</span> :
            <p className="pl-1">
              As each <strong>sidenav-item</strong> has an icon, this sub-folder
              contains the icons of each sidenav-item. You don't need this
              folder if you are using a package for icons such as
              <strong className="px-1">react-icons</strong>,
              <strong className="px-1">font-awesome</strong>
              or other
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-6">
            <JsIcon /> <span className="px-2 font-medium">data.js</span> :
            <p className="pl-1">
              It's in this file that you will add routes for each sidenav-item.
              it is an array of objects.
            </p>
          </div>
          <div className="flex flex-wrap mt-8 pl-8">
            <div className="md:w-64">
              <Snippet />
            </div>
            <ul className="pt-8 md:pt-6 md:pl-4">
              <li className="mb-2">
                <span className="px-1">title :</span> text that indicate the
                route
              </li>
              <li className="mb-2">
                <span className="px-1">icon :</span> the icon, imported from
                <strong className="px-1">icons</strong> folder or from your
                library
              </li>
              <li className="mb-2">
                <span className="px-1">link :</span> name of the route
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-10">
            <JsIcon /> <span className="px-2 font-medium">header.js</span> :
            <p className="pl-1">
              The<strong className="px-1">SidenavHeader</strong>component
              contains the logo that is displayed on top of the sidenav
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-6">
            <JsIcon /> <span className="px-2 font-medium">items.js</span> :
            <p className="pl-1">
              This<strong className="px-1">SidenavItems</strong>component
              automatically generates each sidenav-item according to your routes
              coming from the
              <strong className="px-1">data.js</strong>file
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-6">
            <JsIcon /> <span className="px-2 font-medium">index.js</span> :
            <p className="pl-1">
              This <strong>Sidenavigation</strong> component contains all the
              logic of the sidenav.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-6">
            <FileIcon />
            <span className="px-2 font-medium">style.module.css</span> :
            <p className="pl-1">
              This style sheet is used to make the scrollbar invisible for the
              sidenav.
            </p>
          </div>
        </div>

        <div>
          <div className="flex mt-8">
            <FolderIcon /> <strong className="px-1">topnavigation</strong>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pl-6 mt-4">
            <JsIcon /> <span className="px-2 font-medium">index.js</span> :
            <p className="pl-1">
              Contains the
              <strong className="px-1">Topnavigation</strong>component. You can
              customize it or replace it with your own navbar but don't forget
              to add a button to toggle sidenav on mobile
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap md:flex-nowrap mt-8">
            <JsIcon /> <strong className="px-1">layout.js :</strong> Contains
            the<strong className="px-1">DashboardLayout</strong>
            component used as the layout of the application
          </div>
        </div>
      </section>

      <section className="px-3 md:px-8 my-16">
        <h2 className="text-2xl font-medium">How it works ?</h2>
        <ul className="pl-6 list-disc mt-4">
          <li className="mb-3">
            Add your routes in the
            <strong className="px-1">dashboard/sidenavigation/data.js</strong>
            file
          </li>
          <li className="mb-3">
            If your routes don't exist yet, create your routes in the
            <strong className="px-1">pages</strong>directory
          </li>
          <li className="mb-3">
            Wrap your <strong>pages/_app.js</strong> by the
            <strong className="px-1">DashboardLayout</strong>component
          </li>
        </ul>
      </section>

      <section className="px-3 md:px-8 my-16">
        <h2 className="text-2xl font-medium">Auto Format and Linting</h2>
        <div className="mt-4">
          The dashboard is provided with <strong>eslint</strong>,
          <strong className="px-1">prettier</strong>,
          <strong className="px-1">lint-staged</strong>et
          <strong className="px-1">husky.</strong>Before each commit, the
          <strong className="px-1">pre-commit</strong>hook will be triggered to
          run prettier to format the code and eslint to analyze the code for
          possible errors.
        </div>
      </section>

      <section className="px-3 md:px-8 my-16">
        <h2 className="text-2xl font-medium">Export</h2>
        <p className="mt-4">
          As there is no vendor lock-in, if you already have a dashboard, you
          can just copy the
          <strong className="px-1">dashboard</strong>folder into your project
        </p>
        <div className="mt-8">
          <ul className="pl-6 list-disc mt-4">
            <li className="mb-3">
              Add your routes in the
              <strong className="px-1">dashboard/sidenavigation/data.js</strong>
              file
            </li>
            <li className="mb-3">
              Replace your layout by the
              <strong className="px-1">DashboardLayout</strong> imported from
              <strong className="px-1">dashboard/layout.js</strong>
            </li>
          </ul>
        </div>
      </section>

      <section className="px-3 md:px-8 my-16">
        <h2 className="text-2xl font-medium">Customization</h2>
        <p className="mt-5">
          You can customize everything according to your preferences if it
          doesn't suit you. What we have done is just provide a solid structure
          for better scalability and readability of the code.
        </p>
        <p className="mt-5">
          The sidenav scrollbar is hidden by default but you can still scroll
          with the keyboards if you have several sidenav-items. If you are not a
          fan of this approach, you can always change its style in the
          <strong className="px-1">style.module.css</strong>file
        </p>
        <p className="mt-5">
          In the <strong> dashboard/layout.js</strong> file, the
          <strong className="pl-1">Sidenavigation</strong> component has as prop
          <strong className="pl-1">mobilePosition</strong>, which indicates the
          positioning of the sidenav on mobile.
        </p>
        <p className="pt-5">This prop can have two possible values :</p>
        <ul className="pl-6 mt-4 list-disc">
          <li className="mb-3">
            <strong>left :</strong> sidenav will be aligned to the left
          </li>
          <li>
            <strong>right :</strong> sidenav will be aligned to the right
          </li>
        </ul>
      </section>

      <section className="px-3 md:px-8 mt-16">
        <h2 className="text-2xl font-medium">Components</h2>
        <p className="mt-5">
          If you'll need some UI components for Tailwind CSS such as modal,
          accordion, dropdown, tab or other components, you can check out
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://kimia-ui.vercel.app"
            className="text-blue-500 px-1 font-medium"
          >
            Kimia-UI
          </a>
          , a collection of fully customizable UI components, without any
          installation, just copy and paste the component you want to use.
        </p>
      </section>
    </div>
  );
}
