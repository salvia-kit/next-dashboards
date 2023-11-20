export function SidebarHeader() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-center bg-white py-6">
      <svg
        width="35"
        height="30"
        viewBox="0 0 256 366"
        version="1.1"
        preserveAspectRatio="xMidYMid"
      >
        <defs>
          <linearGradient
            x1="12.5189534%"
            y1="85.2128611%"
            x2="88.2282959%"
            y2="10.0225497%"
            id="linearGradient-1"
          >
            <stop stopColor="#FF0057" stopOpacity="0.16" offset="0%" />
            <stop stopColor="#FF0057" offset="86.1354%" />
          </linearGradient>
        </defs>
        <g>
          <path
            d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
            fill="#001B38"
          />
          <circle
            fill="url(#linearGradient-1)"
            transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
            cx="147.013244"
            cy="147.014675"
            r="78.9933938"
          />
          <circle
            fill="url(#linearGradient-1)"
            opacity="0.5"
            transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
            cx="147.013244"
            cy="147.014675"
            r="78.9933938"
          />
        </g>
      </svg>
    </div>
  );
}
