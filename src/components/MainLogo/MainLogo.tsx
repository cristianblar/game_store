import * as React from 'react';

import style from './MainLogo.module.sass';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={style.svgContainer}
      width={342.32}
      height={122.021}
      viewBox="78.84 13.989 342.32 122.021"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        background: '0 0',
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-halftone-gradient"
          x1={0.5}
          y1={0.2}
          x2={0.5}
          y2={0.8}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ff0" stopOpacity={0.8} />
          <stop offset={0.5} stopColor="#f0f" stopOpacity={0.9} />
          <stop offset={1} stopColor="#0ff" />
        </linearGradient>
        <filter id="prefix__editing-halftone">
          <feFlood result="color" floodColor="red" />
          <feImage
            xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwcHgiIGhlaWdodD0iMTAwMHB4Ij4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNS42IiBoZWlnaHQ9IjUuNiI+CiAgICAgIDxjaXJjbGUgY3g9IjIuOCIgY3k9IjIuOCIgcj0iMS44IiBmaWxsPSJyZWQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPgo8L3N2Zz4="
            width={1000}
            height={1000}
            result="image"
          />
          <feTile in="image" result="tile" />
          <feComposite
            operator="in"
            in="SourceGraphic"
            in2="tile"
            result="dot"
          />
          <feComposite
            operator="in"
            in="dot"
            in2="SourceGraphic"
            result="dotted"
          />
          <feGaussianBlur in="dotted" stdDeviation={0.8} />
          <feComponentTransfer result="cutoff">
            <feFuncA type="linear" slope={10} intercept={-3} />
          </feComponentTransfer>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-halftone)">
        <path
          d="M.45-.32l8.06-41.92q7.55-.64 12.42-.64 4.86 0 8 .42 3.13.41 5.25 1.5 4.22 2.05 4.22 7.68 0 3.26-2.82 6.02-2.62 2.49-5.5 3.07 3.07.51 5.25 2.81 2.3 2.44 2.3 6.21 0 7.3-5.44 11.55Q26.75.64 16.06.64 8.7.64.45-.32zm17.41-20.29l-3.2 16.58q.57.06.7.06h.58q5.24 0 7.48-3.45 1.67-2.69 1.67-7.62 0-2.62-1.7-4.03-1.69-1.41-5.53-1.54zm9.72-12.61q0-5.31-5.12-5.31h-.57q-.26 0-.64.07l-2.56 13.5h.64q8.25-.19 8.25-8.26zm40.2 22.4q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.43 0 5.03-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm40.32-4.67q.9-2.37.9-4.42 0-3.78-3.08-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.48 1.41 5.25 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.83-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96 1.03-.96 1.03-2.62 0-3.26-5.51-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.21-2.43 3.45-4.16 4.67-3.58 12.8-3.58 4.16 0 6.63 1.66 2.46 1.67 2.46 4.48 0 2.82-1.7 4.42-1.69 1.6-4.76 1.6-2.12 0-3.14-.7zM108.03-6.4q0-1.73.9-6.08l3.39-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.08l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.27 17.28q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.27 0-5.12-2.05-1.86-2.05-1.86-5.63zM141.95.83L137.86.7q-1.99-.06-4.07-.06t-4.13.26q-.25-1.03-.25-2.24 0-2.56 1.44-4.1 1.44-1.54 3.68-1.54h3.45l5.38-24.19q-1.98 1.99-6.08 1.99-2.05 0-3.65-1.92-1.6-1.8-1.85-4.36 9.47-1.66 23.61-8l2.05 2.44-6.21 34.04h1.6q3.84 0 5.83-.7.83 1.41.83 3.71 0 2.31-1.7 3.68-1.69 1.38-4.51 1.38-5.7 0-11.33-.26zm21.44-2.43l-.38-7.87 8-6.15 4.99-4.09q2.56-2.18 4.42-4.1 3.39-3.39 3.39-6.65 0-1.92-1.25-2.95-1.25-1.02-3.07-1.02-1.83 0-3.14.41-1.31.42-2.46 1.12-2.43 1.6-3.59 4.04-1.6-.07-2.65-1.41-1.06-1.35-1.06-3.3 0-1.95 1.22-3.77 1.21-1.83 3.39-3.24 4.74-2.94 11.23-2.94 6.5 0 10.15 2.82 3.64 2.81 3.64 7.61 0 3.59-1.76 6.85t-6.43 6.59l-6.91 4.87-4.16 2.75-5.31 3.26 2.24.26q1.53.19 4.22.19 2.69 0 4.93-.29 2.24-.29 4.16-.86 4.22-1.15 5.57-2.75.7.51 1.25 1.82.54 1.31.54 2.91 0 4.8-3.65 6.79-3.65 1.98-11.13 1.98-3.91 0-9.09-1.12-5.19-1.12-7.3-1.76zm37.06-13.63q0-12.93 6.08-20.61t16.51-7.68q5.57 0 8.77 4.16 3.2 4.16 3.2 11.1 0 6.95-1.57 12.36-1.57 5.4-4.38 9.24-5.89 8-15.68 8-6.6 0-9.76-4.06-3.17-4.06-3.17-12.51zm11.33 4.35q0 6.46 2.11 6.46 1.92 0 3.68-2.24 1.76-2.24 3.17-6.01 3-8.26 3-18.5 0-3.45-.54-5.02-.54-1.57-1.98-1.57t-3.14 2.5q-1.7 2.49-3.1 6.4-3.2 8.89-3.2 17.98z"
          fill="url(#prefix__editing-halftone-gradient)"
          transform="translate(132.27 97.422)"
        />
      </g>
      <style />
    </svg>
  );
}

export default SvgComponent;
