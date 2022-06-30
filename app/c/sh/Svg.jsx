export function Svg({ children, className }) {
  return (
    <figure className={`Svg max-w-[100px] ${className}`}>{children}</figure>
  );
}

// --------- VOX svg logo
export function LogoVox({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 106 54"
        xmlSpace="preserve"
      >
        <path d="M62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zm47.8-14.4c.2-4.2.5-8.5.7-12.8-12-.6-24-1.3-36-2l-.6 10.5c-7-5.2-16-4.9-23.1 0 .2-1 .4-1.9.6-2.9 1.4-.3 2.8-.5 4.2-.8-.9-4.7-2-9.4-2.9-14.1C32.1 4 16.5 7 .8 10.1l3 14.1c1.4-.3 2.8-.6 4.3-.9 6.2 10.1 12.3 20.4 18.4 30.6 5.1-1 10.2-2 15.2-3 .3-2.7.7-5.3 1-8 4.6 6 11.7 8.5 19 6.8 2.8-.6 5.3-2.7 8.1-2.4 11.1.6 22.2 1.2 33.4 1.8.2-4.2.5-8.5.7-12.7-1.5-.1-3.1-.3-4.6-.5-1.5-2.2-2.9-4.5-4.5-6.7 1.9-2.2 3.8-4.4 5.7-6.5 1.6.1 2.9.1 4.3.2zM38.6 48c-3.5.7-6.9 1.4-10.4 2-6-10.2-12.2-20.3-18.3-30.5-1.1.2-2.2.4-3.4.6-.5-2.4-1-4.8-1.5-7.3 5.9-1.2 11.8-2.4 17.8-3.5l1.5 7.2c-1.3.2-2.6.5-3.8.8 3.5 7 7.8 13.6 10.8 20.9-.2-7.7 1-15.5 1.5-23.2-1.3.2-2.6.5-3.9.7l-1.5-7.2C33.2 7.3 39.1 6.1 45 5l1.5 7.2c-1.1.2-2.2.5-3.3.8-1.5 11.6-3.1 23.3-4.6 35zM25.7 20c1-.2 2.1-.5 3.2-.7-.2 1.8-.3 3.7-.5 5.5-.9-1.6-1.9-3.2-2.7-4.8zm41.4 23.1c-6.5 6-18.3 4.2-22.3-3.8-3.8-7.1-.9-16.6 6.7-19.6 6.1-2.4 13.6-1.1 17.6 4.4 4.2 5.6 3.4 14.3-2 19zm4.2-22.5c3.1 1 4.5 4.6 6.4 7.1-.8 1-1.5 2.1-2.2 3.1-.8-3.8-2.2-6.8-4.2-10.2zM90.6 29c2.4 3.5 4.8 6.9 7.2 10.4.9.1 1.7.1 2.6.2-.1 1.9-.2 3.9-.3 5.8-4.5-.2-9.1-.5-13.6-.8.1-1.9.2-3.8.3-5.8l2.8.1c-1.3-2-2.7-3.9-4-5.9l-4.2 5.4 2.7.3-.3 5.7c-4.3-.2-8.7-.4-13-.7.1-1.9.2-3.8.3-5.8.8 0 1.7 0 2.5.1 2.8-3.3 5.6-6.7 8.5-10-2.2-3.5-4.6-6.9-7-10.3-.9 0-1.7-.1-2.6-.1.1-1.9.2-3.9.3-5.8 4.5.3 9 .5 13.5.8l-.3 5.7h-2.8c1.3 1.9 2.5 3.8 3.8 5.6 1.4-1.8 2.8-3.5 4.2-5.2-.9-.1-1.7-.1-2.6-.2.1-1.9.2-3.9.3-5.8 4.3.3 8.5.5 12.8.7-.1 1.9-.2 3.9-.2 5.8-.9 0-1.7-.1-2.6-.1-2.7 3.3-5.5 6.7-8.3 9.9zm-36.4-3.8c-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.2-3.1 4.4-9.9.6-13.4-2.2-1.8-5.3-2.3-7.8-.9zM57 37.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3z" />
        <path d="M62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zm47.8-14.4c.2-4.2.5-8.5.7-12.8-12-.6-24-1.3-36-2l-.6 10.5c-7-5.2-16-4.9-23.1 0 .2-1 .4-1.9.6-2.9 1.4-.3 2.8-.5 4.2-.8-.9-4.7-2-9.4-2.9-14.1C32.1 4 16.5 7 .8 10.1l3 14.1c1.4-.3 2.8-.6 4.3-.9 6.2 10.1 12.3 20.4 18.4 30.6 5.1-1 10.2-2 15.2-3 .3-2.7.7-5.3 1-8 4.6 6 11.7 8.5 19 6.8 2.8-.6 5.3-2.7 8.1-2.4 11.1.6 22.2 1.2 33.4 1.8.2-4.2.5-8.5.7-12.7-1.5-.1-3.1-.3-4.6-.5-1.5-2.2-2.9-4.5-4.5-6.7 1.9-2.2 3.8-4.4 5.7-6.5 1.6.1 2.9.1 4.3.2zM38.6 48c-3.5.7-6.9 1.4-10.4 2-6-10.2-12.2-20.3-18.3-30.5-1.1.2-2.2.4-3.4.6-.5-2.4-1-4.8-1.5-7.3 5.9-1.2 11.8-2.4 17.8-3.5l1.5 7.2c-1.3.2-2.6.5-3.8.8 3.5 7 7.8 13.6 10.8 20.9-.2-7.7 1-15.5 1.5-23.2-1.3.2-2.6.5-3.9.7l-1.5-7.2C33.2 7.3 39.1 6.1 45 5l1.5 7.2c-1.1.2-2.2.5-3.3.8-1.5 11.6-3.1 23.3-4.6 35zM25.7 20c1-.2 2.1-.5 3.2-.7-.2 1.8-.3 3.7-.5 5.5-.9-1.6-1.9-3.2-2.7-4.8zm41.4 23.1c-6.5 6-18.3 4.2-22.3-3.8-3.8-7.1-.9-16.6 6.7-19.6 6.1-2.4 13.6-1.1 17.6 4.4 4.2 5.6 3.4 14.3-2 19zm4.2-22.5c3.1 1 4.5 4.6 6.4 7.1-.8 1-1.5 2.1-2.2 3.1-.8-3.8-2.2-6.8-4.2-10.2zM90.6 29c2.4 3.5 4.8 6.9 7.2 10.4.9.1 1.7.1 2.6.2-.1 1.9-.2 3.9-.3 5.8-4.5-.2-9.1-.5-13.6-.8.1-1.9.2-3.8.3-5.8l2.8.1c-1.3-2-2.7-3.9-4-5.9l-4.2 5.4 2.7.3-.3 5.7c-4.3-.2-8.7-.4-13-.7.1-1.9.2-3.8.3-5.8.8 0 1.7 0 2.5.1 2.8-3.3 5.6-6.7 8.5-10-2.2-3.5-4.6-6.9-7-10.3-.9 0-1.7-.1-2.6-.1.1-1.9.2-3.9.3-5.8 4.5.3 9 .5 13.5.8l-.3 5.7h-2.8c1.3 1.9 2.5 3.8 3.8 5.6 1.4-1.8 2.8-3.5 4.2-5.2-.9-.1-1.7-.1-2.6-.2.1-1.9.2-3.9.3-5.8 4.3.3 8.5.5 12.8.7-.1 1.9-.2 3.9-.2 5.8-.9 0-1.7-.1-2.6-.1-2.7 3.3-5.5 6.7-8.3 9.9zm-36.4-3.8c-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.2-3.1 4.4-9.9.6-13.4-2.2-1.8-5.3-2.3-7.8-.9zM57 37.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3zM62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3z" />
        <path d="M62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3z" />
        <path d="M62 26c-2.2-1.7-5.3-2.3-7.8-.9-5 2.8-5.3 10.2-1.2 13.9 2.4 2.1 5.9 2.3 8.4.4 4.3-3.1 4.4-9.9.6-13.4zm-5 11.3c-3.7-1-4.6-6.6-1.6-8.8 2.2-1.5 5.3 0 5.6 2.5.8 2.9-.7 6.3-4 6.3z" />
      </svg>
    </Svg>
  );
}

// --------- VOX svg logo
export function LogoGala({ className }) {
  return (
    <Svg className={`Logo Gala ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.42 52.55">
        <path d="M0 13.58c1.09.63 2.17 1.26 3.26 1.87a.55.55 0 0 1 .31.56v20.38a.69.69 0 0 0 .38.68l14.36 8.83.47.27v-17.2a.65.65 0 0 0-.37-.65q-2.18-1.23-4.32-2.49a.54.54 0 0 1-.28-.36v-3.88a1.38 1.38 0 0 1 .23.09l8.07 4.64a.47.47 0 0 1 .26.47v25.75l-.37-.19L.38 39.07c-.12-.08-.25-.13-.38-.2ZM107.42 28.09h-2.73a.51.51 0 0 1-.37-.25c-.34-.66-.66-1.34-1-2a.46.46 0 0 0-.48-.3h-5.72a.45.45 0 0 0-.48.3c-.31.69-.63 1.37-1 2a.43.43 0 0 1-.29.24h-2.81L100 13.3c.19.37.36.68.52 1q3.36 6.69 6.7 13.38c.06.11.14.22.2.33Zm-5.31-4.86L100 18.81l-2.07 4.42ZM43.3 19.76l-1.84 1.06q-6.49 3.75-13 7.49a.69.69 0 0 0-.39.68v5.07a.58.58 0 0 1-.2.45c-1.07.65-2.16 1.27-3.31 1.93v-9.6a.56.56 0 0 1 .32-.56l21.64-12.51.32-.16V38.44a.56.56 0 0 1-.29.58L25 52.31l-.41.24V48.75a.58.58 0 0 1 .34-.59l17.99-11.09a.69.69 0 0 0 .39-.69V20.25ZM31.86 19.71l-2.49 1.44-5.62 3.25a.51.51 0 0 1-.61 0L1.65 12l-.27-.18 2.36-1.28L23 .15a.83.83 0 0 1 .93 0Q34.5 5.89 45.12 11.62l.36.22-.39.23c-1 .56-1.93 1.1-2.88 1.67a.6.6 0 0 1-.71 0L23.78 4.15a.56.56 0 0 0-.61-.06Q16.09 7.93 9 11.76l-.3.24 3 1.71c3.76 2.14 7.56 4.29 11.3 6.53a.69.69 0 0 0 .79 0c1.38-.82 2.78-1.62 4.17-2.43a.51.51 0 0 1 .61 0c1 .58 2 1.14 2.94 1.71ZM62.89 20.42h6.35a10.25 10.25 0 0 1-.62 3.89 6.19 6.19 0 0 1-6 4.11 7.9 7.9 0 0 1-6.77-3.13 7.32 7.32 0 0 1 4.69-11.55 8.93 8.93 0 0 1 6.46 1.2c.24.14.45.32.7.5l-1.32 2A6.38 6.38 0 0 0 62.23 16a4.61 4.61 0 0 0-4.79 3.87 5 5 0 0 0 3.94 6 4.24 4.24 0 0 0 4.55-1.73 9.31 9.31 0 0 0 .61-1.44h-3.65ZM75.25 13.28l7.43 14.82h-2.84c-.1 0-.24-.17-.3-.3-.33-.66-.65-1.32-1-2a.38.38 0 0 0-.4-.28h-5.83a.58.58 0 0 0-.39.28c-.35.67-.65 1.36-1 2a.46.46 0 0 1-.32.26h-2.78Zm2.11 10-2.13-4.42-2.08 4.42ZM86.07 25.64H92v2.42h-8.57V13.93h2.64ZM83.16 31.88h1.78a1.91 1.91 0 0 1 1.86 1.22 2 2 0 0 1-.37 2.25 4 4 0 0 1 .52.36 2 2 0 0 1 .65 2.18A1.89 1.89 0 0 1 86 39.4a25.89 25.89 0 0 1-2.79 0Zm1.13 4.18v2.39a12.44 12.44 0 0 0 1.45-.15 1 1 0 0 0 .77-1.06 1 1 0 0 0-.78-1 14.51 14.51 0 0 0-1.44-.18Zm0-.94c.55 0 1.07.05 1.41-.45a1.29 1.29 0 0 0 0-1.34 1.38 1.38 0 0 0-1.4-.33ZM76 31.34l3.67 8.16h-1.18c-.08 0-.17-.14-.21-.23-.21-.44-.38-.9-.6-1.34a.52.52 0 0 0-.37-.24h-2.73a.51.51 0 0 0-.37.25c-.23.44-.42.91-.64 1.35a.47.47 0 0 1-.32.21h-1ZM76 34l-1.16 2.53h2.27ZM96 33l-.93.57a1.2 1.2 0 0 0-1.35-.74 1 1 0 0 0-.88.78.85.85 0 0 0 .57.9c.52.25 1.08.44 1.59.72a2.22 2.22 0 0 1 1.08 2.83 2.45 2.45 0 0 1-2.71 1.57 2.32 2.32 0 0 1-2-2.25l1.13-.25c.05.18.08.36.13.53a1.17 1.17 0 0 0 1.17.89 1.21 1.21 0 0 0 1.2-.83 1.14 1.14 0 0 0-.47-1.42c-.45-.27-1-.45-1.43-.68a2.33 2.33 0 0 1-1.33-1.28 2 2 0 0 1 1.6-2.59A2.31 2.31 0 0 1 96 33ZM65.65 31.88h1.11v6.5H69v1.11h-3.35Z" />
      </svg>
    </Svg>
  );
}

// --------- ARROW svg
export function Arrow({ className, isBack = false }) {
  const flipCss = isBack ? "rotate-180" : null;
  return (
    <Svg
      className={`Arrow fill-black md:min-w-[4vw] min-w-[10vw]  ${className} ${flipCss}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 104.27 105.87"
        xmlSpace="preserve"
      >
        <path d="M43.62 105.87 30.87 90.83l31.07-26.59H0l3.49-20.72h65.93l-25.4-30.48L59.26 0l45.02 53.88-60.66 51.99z" />
      </svg>
    </Svg>
  );
}
