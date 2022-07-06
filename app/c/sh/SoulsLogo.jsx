import { Svg } from "./Svg";

export function SoulsIcon({ name, className }) {
  function findSoul(name) {
    switch (name) {
      case "Maverick":
        return <MaverickSvg className={className} />;
      case "Artisan":
        return <ArtisanSvg className={className} />;
      case "Healer":
        return <HealerSvg className={className} />;
      case "Hermit":
        return <HermitSvg className={className} />;
      case "Hunter":
        return <HunterSvg className={className} />;
      case "Leader":
        return <LeaderSvg className={className} />;
      case "Sage":
        return <SageSvg className={className} />;
      case "Scholar":
        return <ScholarSvg className={className} />;
      case "Star":
        return <StarSvg className={className} />;
      case "Trickster":
        return <TricksterSvg className={className} />;
      case "Wanderer":
        return <WandererSvg className={className} />;
      case "Warrior":
        return <WarriorSvg className={className} />;
      default:
        return <div>{name}</div>;
    }
  }

  return findSoul(name);
}

// --------- Maverick's svg logo
export function MaverickSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.09 4.09">
        <path d="M.78 3.05h-.1v.49h.1v-.39h.1v-.1h-.1zM.88 3.15h.1v.1h-.1z" />
        <path d="M.97 3.05v.1h.1v.39h.1v-.49h-.2zM.38 3.25h.1v.1h-.1zM.48 3.15h.1v.1h-.1zM.28 3.35h.1v.1h-.1zM.28 3.15h.1v.1h-.1zM.48 3.35h.1v.1h-.1zM3.61 3.25h.1v.1h-.1zM3.71 3.15h.1v.1h-.1zM3.51 3.35h.1v.1h-.1zM3.51 3.15h.1v.1h-.1zM3.71 3.35h.1v.1h-.1zM1.34 3.05h-.1v.49h.1v-.1h.1v.1h.1v-.49h-.2Zm.1.2v.1h-.1v-.2h.1v.1ZM1.8 3.15v.2h-.1V3.05h-.1v.4h.1v.09h.1v-.09h.1v-.4h-.1v.1zM1.96 3.05v.49h.2v-.09h-.1v-.1h.1v-.1h-.1v-.1h.1v-.1h-.2zM2.43 3.25v.1h.09v-.2h-.09v.1zM2.33 3.25v-.1h.1v-.1h-.2v.49h.1v-.09h.1v-.1h-.1v-.1zM2.43 3.45h.1v.1h-.1zM3.31 3.54h.1v-.19h-.1v.19zM3.31 3.15v.1h.1v-.2h-.1v.1zM3.21 3.15v-.1h-.1v.49h.1v-.19h.1v-.1h-.1v-.1zM2.59 3.15v.39h.09v-.49h-.09v.1zM2.85 3.05h-.09v.49H3.05v-.09h-.2V3.15h.2v-.1h-.2zM2.94 2.51V.81h-.99V.54h-.2v.27h-.59v1.7h1.77Zm-.2-.09H1.26V.9h.49v1.16h-.2v-.99h-.2v1.25h1.38V1.08h-.2v.99h-.2V.99h-.2v1.07h-.2V.9h.89v1.52h-.1Z" />
      </svg>
    </Svg>
  );
}

function ArtisanSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.09 4.09">
        <path d="M2.22 1.24h.09v.09h-.09z" />
        <path d="M2.14 1.16h.09v.09h-.09zM1.87.89h.09v.09h-.09z" />
        <path d="M2.4 1.86v.08h.09v.27h.08V1.33h-.08v-.09h.08V.89h-.08V.72H2.4V.63h-.18V.54h-.26v.09h.18v.09H2.31v.09h.09V.98h.09v.18H2.4V1.33h-.09v.09H2.14v.09h-.18v.08h.18V2h-.09v.09h.09v.38h.08v-.38h.09V2h-.09V1.51h.18v-.09h.09v.26H2.4v.09h.09v.09H2.4zM2.57 1.86h.09v.09h-.09zM2.57 1.68h.09v.09h-.09z" />
        <path d="M2.49 2.25h.09v.09h-.09zM1.52 2.25h.09v.09h-.09zM2.14 2.58h.09v.09h-.09zM1.96 2.29h.09v.09h-.09zM1.96 2.12h.09v.09h-.09zM1.87 2.58h.09v.09h-.09z" />
        <path d="M1.52 2.03v.18h.09v-.27h.09v-.08h-.09v-.09h.09v-.09h-.09v-.26h.09v.09H1.87v.61h-.08v.09h.08v.08h-.08v.09h.08v.09h.09V1.42H1.79v-.09h.08v-.09h-.08v.09H1.7V1.16h-.09V.98h.09V.81h.09v.08h.08V.81h-.08V.72H1.96V.54h-.09v.09H1.7v.09h-.09V.89h-.09V1.24h.09v.09h-.09v.35h-.08v.09h.08v.09h-.08v.08h.08v.09z" />
        <path d="M1.87 1.16h.09v.09h-.09zM2.14.98h-.18v.18h.18V.98zM2.14.89h.09v.09h-.09z" />
        <path d="M2.22.81h.09V.9h-.09zM1.33 3.12h-.09V3.54h.09v-.08h.08v-.08h-.08V3.21h.08V3.38h.09v-.26H1.33zM3.23 3.29h.08v.08h-.08zM1.64 3.12h-.08v.09h.08v.33h.09v-.33h.08v-.09H1.64zM1.88 3.21v.33h.08V3.12h-.08v.09zM3.09 3.21V3.38H3V3.21h-.08v-.09H2.75V3.54h.09v-.25h.08V3.46H3v.08H3.17V3.12h-.08v.09zM2.21 3.12H2.04v.26h.25v.08h-.25v.08H2.38v-.25h-.26v-.08h.26v-.09H2.21zM.77 3.29h.08v.08H.77zM1.01 3.12H.93v.42h.08v-.08h.08v.08h.08v-.42H1Zm.08.17v.08h-.08V3.2h.08v.08ZM2.52 3.12h-.08v.42h.08v-.08h.08v.08h.08v-.42h-.17Zm.08.17v.08h-.08V3.2h.08v.08Z" />
        <path d="M1.41 3.46h.08v.08h-.08z" />
      </svg>
    </Svg>
  );
}

function HealerSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 4.09 4.09"
      >
        <path d="M1.17 3.09v.12h-.12v-.24H.92v.61h.13v-.25h.12v.25h.12v-.61h-.12v.12zM1.38 2.97v.61h.25v-.12H1.5v-.13h.13v-.12H1.5v-.12h.13v-.12h-.25zM2.55 2.97v.61h.25v-.12h-.13v-.13h.13v-.12h-.13v-.12h.13v-.12h-.25zM3.14 3.21h-.12v-.12h.12v-.12H2.9v.61h.12v-.12h.12v-.13h.13v-.24h-.13v.12zM.58 3.21v.12h.24v-.12H.58zM3.49 3.21h-.12v.12h.24v-.12h-.12zM1.86 2.97h-.12v.61h.12v-.12h.12v.12h.12v-.61h-.25Zm.12.25v.12h-.12v-.25h.12v.12ZM2.33 3.33v-.36h-.12v.61h.24v-.12h-.12v-.13zM3.14 3.46h.12v.12h-.12z" />
        <g>
          <path d="M3.72 1.36h.1v.1h-.1zM3.33 1.65h-.49v.1h.49v.1h.09v-.1h.1v-.1h-.19z" />
          <path d="M3.52 1.46h-.49v-.1h.69v-.1h-.69V.97h-.1v-.1h-.1v-.1h-.49v.1h-.1v.1h-.1v.1h-.2v-.1h-.1v-.1h-.1v-.1h-.49v.1h-.1v.1h-.1v.29H.38v.1h.69v.1H.38v.1h.1v.1h.1v-.1h.69v.1h.1v.1h.1v.1h.1v.1h-.2v-.1h-.6v.1h.49v.1h.49v.1h.1v.1h.1v.1h.2v-.1h.1v-.1h.1v-.1h.49v-.1h.49v-.1h-.59v.1h-.2v-.1h.1v-.1h.1v-.1h.1v-.1h.69v.1h.1v-.1h.1v-.1h-.2Zm-.79 0v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.29h.1v-.1h.1v-.1h.29v.1h.1v.1h.1v.1h.1v.1h.2v-.1h.1v-.1h.1v-.1h.1v-.1h.29v.1h.1v.1h.1v.29h-.1v.1h-.1ZM.28 1.36h.1v.1h-.1z" />
          <path d="M.87 1.75h.39v-.1H.58v.1h.1v.1h.09v-.1h.1z" />
        </g>
      </svg>
    </Svg>
  );
}

function HermitSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.09 4.09">
        <path d="M1.3 3.19v.09h-.09V3.1h-.09v.44h.09V3.37h.09V3.54h.09V3.1H1.3v.09zM1.45 3.1v.44h.18v-.08h-.09v-.09h.09v-.09h-.09v-.09h.09V3.1h-.18zM.86 3.28v.09H1.03v-.09H.86zM2.55 3.19V3.54h.09V3.1h-.09v.09zM2.12 3.1h-.08v.44h.08v-.35h.09V3.1h-.09zM2.21 3.28v.26h.09v-.35h-.09v.09zM2.3 3.1v.09h.09V3.54h.09V3.1H2.3zM1.88 3.28v.09h.09v-.18h-.09v.09z" />
        <path d="M1.8 3.28v-.09h.08V3.1H1.71v.44h.09v-.08h.08v-.09H1.8v-.09z" />
        <path d="M1.88 3.46h.09v.09h-.09zM3.14 3.28h-.08v.09H3.23v-.09h-.09zM2.8 3.1h-.09v.09h.09V3.54h.09v-.35h.08V3.1H2.8zM3.1 1.52h-.09v-.09h-.09v-.09h-.09v-.09h-.09v-.09h-.09v-.09h-.09V.98h-.09V.89h-.09V.8h-.09V.71H2.2V.62h-.09V.53h-.18v.09h-.09v.09h-.09V.8h-.09v.09h-.09v.09h-.09v.09h-.09v.09H1.3v.09h-.09v.09h-.09v.09h-.09v.09H.94v.09h.97v.26h-.18v-.09h-.18v.09h-.09v.18h.09v.09h.18v-.09h.18v.26h-.18v.09h.09v.09h.09v.09h.18v-.09h.09V2.4h.09v-.09h-.18v-.26h.18v.09h.18v-.09h.09v-.18h-.09v-.09h-.18v.09h-.18v-.26h.97v-.09Zm-.53 0H1.43v-.09h-.09v-.09h.09v-.09h.09v-.09h.09v-.09h.09V.98h.09V.89h.09V.8h.09V.71h.18V.8h.09v.09h.09v.09h.09v.09h.09v.09h.09v.09h.09v.09h.09v.09h-.09v.09H2.6Z" />
      </svg>
    </Svg>
  );
}

function HunterSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.09 4.09">
        <path d="M1 3.06v.11H.89v-.22H.78v.55h.11v-.22H1v.22h.11v-.55H1v.11zM1.43 3.06v.33h-.11v-.44h-.11v.55h.33v-.55h-.11v.11zM2.06 3.06v.22h-.11v-.22h-.11v-.11h-.22v.55h.11v-.33h.11v.22h.11v.11h.22v-.55h-.11v.11zM2.36 2.95h-.11v.11h.11v.44h.11v-.44h.11v-.11h-.22zM2.67 2.95v.55H2.88v-.11h-.11v-.11h.11v-.11h-.11v-.11h.11v-.11H2.67zM3.19 3.17v.11h.11v-.22h-.11v.11zM3.61 3.17H3.5v.11h.33v-.11h-.22zM.37 3.17H.26v.11h.33v-.11H.37zM3.08 3.17v-.11h.11v-.11h-.22v.55h.11v-.11h.11v-.11h-.11v-.11zM3.19 3.39h.11v.11h-.11zM3.78.92h-.22v.11h-.77v.11h.55v.1h-.12v.11h-.11v.11H3v.11h-.1v.11h-.75v-.44h.64v-.1h-.64V.92h.1V.59h-.42v.33h.11v.22h-.65v.1h.65v.44h-.75v-.11h-.11v-.11H.97v-.11H.86v-.11H.75v-.1h.54v-.11H.53V.92H.2v.22h.22v.1h.11v.11h.11v.11h.11v.11h.11v.11h.11v.11h.11v.11h.86v.33h-.11v.11h.11v.11H2.15v-.11h.1v-.11h-.1V1.9h.86v-.11h.11v-.11h.11v-.11h.1v-.11h.11v-.11h.11v-.11h.12v-.1h.22V.92h-.11z" />
      </svg>
    </Svg>
  );
}

function LeaderSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.09 4.09">
        <path d="M2.65 2.9v.64h.26v-.12h-.13v-.13h.13v-.13h-.13v-.13h.13V2.9h-.26zM1.18 2.9v.64h.26v-.12h-.13v-.13h.13v-.13h-.13v-.13h.13V2.9h-.26zM1.68 2.9h-.13v.64h.13v-.13h.13v.13h.13V2.9h-.26Zm.13.26v.13h-.13v-.26h.13v.13ZM3.28 3.16v.13h.13v-.26h-.13v.13zM3.9 3.16v-.13h-.26v.39h.26v-.13h.13v-.13H3.9zM2.43 3.16v.26h.12v-.39h-.12v.13zM3.15 3.16v-.13h.13V2.9h-.26v.64h.13v-.12h.13v-.13h-.13v-.13zM.19 3.03v.13H.06v.13h.13v.13h.25v-.39H.19zM.82 3.42V2.9H.69v.64h.39v-.12H.82zM2.17 3.42v-.39h.26V2.9h-.39v.64h.39v-.12h-.26zM3.28 3.42h.13v.13h-.13zM3.21 1.06v.13h-.13v.13h-.13v-.26h-.13V.8h-.26v.26h-.13v.13H2.3V.8h-.13V.54h-.26V.8h-.13v.39h-.13v-.13h-.13V.8h-.26v.26h-.13v.26H1v-.13H.87v-.13H.61v.9H1v-.13h.39V1.7h.39v-.13h.52v.13h.39v.13h.39v.13h.39v-.9h-.26Zm-2.45.52v-.26h.13v.39H.76v-.13Zm.64 0h-.13v-.39h.26v.39H1.4Zm.64-.13h-.13v-.39h.26v.39h-.13Zm.52.13v-.39h.26v.39h-.26Zm.77-.13v.26H3.2v-.39h.13v.13Z" />
        <path d="M2.69 1.95h-.12v-.13h-.39v-.13h-.26v.13h-.39v.13h-.38v.13h.51v-.13h.78v.13h.51v-.13h-.26z" />
      </svg>
    </Svg>
  );
}

function SageSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.09 4.09">
        <path d="M1.42 3h-.11v.33h.22v.11h-.22v.1h.33v-.32h-.22v-.11h.22V3h-.22zM1.01 3.22H.9v-.11H.68v.11h.11v.11H.68v.11H.9v-.11h.11v.11h.11v-.33h-.11v.11zM2.56 3v.54H2.77v-.1h-.1v-.11h.1v-.11h-.1v-.11h.1V3H2.56zM1.84 3h-.11v.54h.11v-.11h.11v.11h.11V3h-.22Zm.11.22v.11h-.11v-.22h.11v.11ZM2.25 3h-.11v.54h.33v-.32h-.11v.22h-.11v-.33h.22V3h-.22zM3.41 3.22v-.11h-.22v.11h-.11v-.11h-.11v.33h.11v-.11h.11v.11h.22v-.11H3.3v-.11h.11zM1.59.54h.11v.11h-.11zM1.5 2.28h-.32v.11h.54v-.11H1.5zM2.7 2.28h-.33v.11h.54v-.11H2.7zM2.04 2.06h-.1v.11h-.11v.11h.11v.11H2.15v-.11h.11v-.11h-.11v-.11h-.11zM1.5 1.52h-.22v.33h.33v-.22H1.5v-.11z" />
        <path d="M3.02 1.96h.11v-.54h-.11V1.2h.11v-.11h.11V.98h.11V.87h-.43v.11h-.33v.11h-.22v.11h-.11v.11h-.11v.11h-.22v-.11h-.11V1.2h-.11v-.11h-.22V.98h-.33V.87H.73v.11h.11v.11h.11v.11h.11v.22H.95v.54h.11v.11h.11v.11h.54v-.11h.11v-.11h.11v-.33h.22v.33h.11v.11h.11v.11h.54v-.11h.11v-.11Zm-1.19-.22v.11h-.11v.11h-.11v.11h-.33v-.11h-.11v-.11h-.11v-.33h.11v-.11h.43v.11h.11v.11h.11v.11Zm.98.22v.11h-.33v-.11h-.11v-.11h-.11v-.22h.11v-.11h.11v-.11h.43v.11h.11v.33h-.11v.11H2.8Z" />
        <path d="M2.59 1.52v.11h-.11v.22h.32v-.33H2.59zM1.81.54h.11v.11h-.11zM2.13.54h.11v.11h-.11zM2.24.65h.11v.11h-.11zM2.35.54h.11v.11h-.11zM1.7.65h.11v.11H1.7z" />
        <path d="M1.81.76v.11h.43V.76h-.11V.65H1.92v.11h-.11z" />
      </svg>
    </Svg>
  );
}

function ScholarSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.09 4.09">
        <path d="M1.25 3.09V3.54h.18v-.09h-.09v-.27h.09v-.09h-.18zM2.66 3.09h-.09v.46h.09v-.09h.09v.09h.09v-.46h-.18Zm.09.18v.09h-.09v-.18h.09v.09ZM1.96 3.09h-.09v.46h.28v-.46h-.18Zm.09.18v.18h-.09v-.27h.09v.09ZM1.7 3.18v.09h-.09v-.18h-.09V3.54h.09v-.18h.09v.18h.09V3.09H1.7v.09zM.99 3.09H.9v.27h.18v.09H.9v.09h.27v-.27H.99v-.09h.18v-.09H.99zM.55 3.27v.09h.18v-.09H.55zM2.31 3.45v-.36h-.09V3.54h.27v-.09h-.18zM3.1 3.27v.09h.09v-.18H3.1v.09zM3.45 3.27h-.09v.09h.18v-.09h-.09zM3.01 3.27v-.09h.09v-.09h-.18V3.54h.09v-.09h.09v-.09h-.09v-.09zM3.1 3.45h.09v.09H3.1zM1.68 2.03h.11v-.11h-.32v.11H1.68z" />
        <path d="M1.37 2.02v.64h.1v-.74h-.1v.1z" />
        <path d="M1.68 2.66h.11v-.11H1.58v-.1h.1v-.11h.11v-.1h-.11v.1h-.1v.11h-.11V2.66H1.68z" />
        <path d="M2.11 2.55h-.32v.11H2.21v-.11h-.1zM2.74 2.66v-.74h-.32v.1H2.63v.53H2.21v.11h.53z" />
        <path d="M2.32 2.02h.1v-.1h-.1v-.11h.1v-.1H2.21V1.92h.11v.1zM2.11 1.6v.11h-.32V1.92h.1v-.11H2V2.02h-.11v.11h-.1v.11h.1v-.11H2v-.1h.11v-.22h.1V1.5h-.1v.1zM2.11 1.39h.11v.11h-.11z" />
        <path d="M2.32 1.39h.1v-.11h.11v-.1h.1v-.11h.11V.76h-.11v.1h-.1v.11h-.11v.1h-.1v.11h-.11v.32h.11v-.11zM2.95.76h.11V.65h-.11V.54h-.1v.11h-.11v.32h.11V.86h.1v-.1zM1.68 1.71h.11v.11h-.11z" />
      </svg>
    </Svg>
  );
}

function StarSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.09 4.09">
        <path d="M2.56 2.92h-.1v.48h.1v-.09h.09v-.1h-.09v-.2h.09v.2h.1V2.92h-.19zM2.93 3.01V3.31h.19v-.1h-.1v-.1h.1v-.1h-.19zM1.82 2.92h-.1v.09h.1v.39h.09v-.39h.1v-.09h-.19zM.88 3.01v.1h.1v.1h-.1v.1h.2V3.01h-.2zM1.45 2.92h-.2V3.21H1.54v.1H1.25v.09h.39V3.11H1.35v-.1H1.64v-.09h-.19zM2.19 2.92h-.1v.48h.1v-.1h.1v.1h.1v-.48H2.2Zm.1.19v.1h-.1v-.19h.1v.1Z" />
        <path d="M2.65 3.31h.1v.1h-.1zM2.28 1.61h.12v.12h-.12zM2.28 1.05h.12v.12h-.12zM2.28 1.39v-.12h-.12V1.5h.12v-.11zM2.51 1.39v-.12h-.12V1.5h.12v-.11zM2.95 1.15v-.11h-.11V1.27h.11v-.12zM2.95 1.62v-.35h-.11v.47h.11v-.12zM2.84 1.74h.12v.12h-.12zM2.72 1.85H2.6v.24h.24v-.12h-.12v-.12h.12v-.11h-.12v.11z" />
        <path d="M2.49 1.97h.12v.12h-.12zM2.84 1.97h.12v.12h-.12z" />
        <path d="M3.07 1.97h-.12v.12h.24v-.12h-.12zM2.37 2.09h.12v.12h-.12zM2.49 2.09h.12v.12h-.12z" />
        <path d="M2.6 2.09v.11h.24v-.11H2.6zM2.84 2.09h.12v.12h-.12z" />
        <path d="M3.07 2.09h-.12v.11h.24v-.11h-.12zM3.19 2.09h.12v.12h-.12zM3.3 1.97h-.11v.12H3.42v-.12H3.3zM3.07 1.74h-.12v.11h.24v-.11h-.12zM3.3 1.74h-.11v.11H3.42v-.11H3.3zM3.54 1.5h.12v.12h-.12zM3.42 1.62v.12h.12V1.5h-.12v.12zM3.3 1.5h-.11v.24H3.42V1.5H3.3zM3.07 1.5h-.12v.24h.24V1.5h-.12zM3.07 1.27h-.12v.12h.24v-.12h-.12zM3.3 1.27h-.11v.12H3.42v-.12H3.3zM3.42 1.27h.12v.12h-.12zM3.54 1.27h.12v.12h-.12zM3.54 1.04V1.27H3.77V1.04H3.54zM3.77 1.04h.12v.12h-.12zM3.42 1.15v.12h.12V1.04h-.12v.11zM3.3 1.04h-.11V1.27H3.42V1.04H3.3zM3.07 1.04h-.12V1.27h.24V1.04h-.12zM2.74 1.39v-.12h-.11V1.5h.11v-.11zM2.04 1.72h-.11v.12H2.16v-.12h-.12zM2.16 2.06v-.12H1.93v.12H2.16zM2.04 1.04h.12V.92H1.93v.12h.11zM2.16.8V.69H1.93V.8H2.16zM1.69 1.61h.12v.12h-.12zM1.69 1.05h.12v.12h-.12zM1.58 1.27h.12v.12h-.12z" />
        <path d="M1.58 1.39h.12v.12h-.12zM1.34 1.27h.12v.12h-.12zM1.25 1.39v-.24H1.02v.24H1.25zM1.25 1.15v-.11H1.02v.11H1.25zM1.14 1.39h.12v.12h-.12z" />
        <path d="M1.25 1.85h.12v-.11h-.12V1.5H1.02v.35H1.25zM1.37 1.85h.12v.12h-.12z" />
        <path d="M1.6 1.97h-.11V2.2H1.72v-.11H1.6v-.12z" />
        <path d="M1.37 2.2h.12V1.97h-.47V2.2h.35zM1.02 2.09v-.12H.9V2.2h.12v-.11zM.9 2.2V1.97H.67v.12h.12v.11H.9zM1.02 1.74V1.5H.9v.35h.12v-.11zM.79 1.85H.9V1.5H.67v.35h.12zM.44 1.5v.12h.11v.12h.12V1.5H.44zM1.02 1.27v-.12H.9v.24h.12v-.12zM.79 1.39H.9v-.24H.67v.24h.12zM.44 1.15H.32v.12h.12v.12H.67v-.24H.44z" />
        <path d="M.44 1.04H.32v.11h.35v-.11H.44zM.2 1.04h.12v.12H.2zM.79 1.15H.9v-.11H.67v.11h.12zM.9 1.04h.12v.12H.9zM1.34 1.39h.12v.12h-.12zM1.93 1.5h.11-.11v.12H2.16v-.35h-.12.12v-.12H1.93v.12h-.12v.12H2.04 1.81v.11h.12z" />
      </svg>
    </Svg>
  );
}

function TricksterSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.09 4.09">
        <path d="M1.07 3.24v.1h.11V3.13h-.11v.11zM3.53 3.24v.1h.1V3.13h-.1v.11zM3.71 3.24h.1v.1h-.1zM.97 3.24v-.11h.1v-.1h-.2v.51h.1v-.1h.1v-.1h-.1v-.1z" />
        <path d="M3.43 3.24v-.11h.1v-.1H3.32v.51h.11v-.1h.1v-.1h-.1v-.1zM1.07 3.44h.1v.1h-.1zM3.53 3.44h.1v.1h-.1zM3.02 3.03v.51h.2v-.1h-.1v-.1h.1v-.1h-.1v-.11h.1v-.1h-.2zM2.74 3.03h-.11v.1h.11V3.54h.1V3.13h.1v-.1h-.2zM1.26 3.13V3.54h.1v-.51h-.1v.1zM1.56 3.03h-.1v.51H1.76v-.1h-.2v-.31h.2v-.1h-.2zM2.34 3.03h-.1V3.34H2.45v.1H2.24v.1H2.55V3.24H2.34v-.11H2.55v-.1H2.34zM.58 3.03H.47v.1h.11V3.54h.1V3.13h.1v-.1h-.2zM.28 3.24h.1v.1h-.1zM2.04 3.54h.11v-.2h-.11v.2zM2.04 3.13v.11h.11V3.03h-.11v.1zM1.94 3.13v-.1h-.1v.51h.1v-.2h.1v-.1h-.1v-.11zM.92 1.55h.11v-.1h.1v-.1H.92v.2zM1.81 1.35h.1v-.1h.11v-.11H1.81V1.35zM2.74 1.55h.1v-.1h.1v-.1h-.2v.2z" />
        <path d="M2.32 1.97h.1v-.93h-.1v-.1H1.7v.1h-.1v.93h.1v.1h.62v-.1Zm-.21 0H1.8v-.1h-.1v-.72h.1v-.1h.41v.1h.1v.72h-.1v.1h-.1ZM1.54 2.07v-.82h-.1v-.1H.82v.1h-.1v.93h.1v.1h.62v-.1h.1v-.1Zm-.21 0v.1H.92v-.1h-.1v-.72h.1v-.1h.41v.1h.1v.72h-.1ZM3.35 2.07v-.82h-.1v-.1h-.62v.1h-.1v.93h.1v.1h.62v-.1h.1v-.1Zm-.21 0v.1h-.41v-.1h-.1v-.72h.1v-.1h.41v.1h.1v.72h-.1ZM2.63.65h.1v.1h-.1z" />
        <path d="M1.5.75h.11v.1h.82v-.1h.1v-.1h.1V.54h-.2v.11h-.11v.1h-.1v-.1h-.1V.54H1.91v.11h-.1v.1h-.1v-.1h-.1V.54H1.4v.11h.1v.1z" />
        <path d="M1.3.65h.1v.1h-.1zM1.33 1.86h-.1v.11h-.1v.1h.2V1.86zM2.22 1.66h-.1v.1h-.1v.1h.2v-.2zM3.15 1.86h-.11v.11h-.1v.1H3.15V1.86z" />
      </svg>
    </Svg>
  );
}

function WandererSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.09 4.09">
        <path d="M1.09 2.36h-.1v.1h.38v-.1h.2v-.09H1.28v.09h-.19zM3 2.36h-.19v-.09h-.57v-.1h-.39v.1h-.28v.09h.38v-.09h.19v.09h.57v.1h.39v-.1H3z" />
        <path d="M3.19 2.17H3v-.1h-.19v-.68h.1v.1h.19v-.1H3v-.1h-.1v-.1h.19v-.1h-.1v-.1h-.1v-.1h.19v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.19v.1h-.1v.1h-.1v.1h-.1v.1h.19v.1h-.1v.1h-.1v-.1h-.1v-.1h-.1v-.1h-.19v.1h-.1v.1h-.1v.1h-.1v-.1h-.1v-.1h.19v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.19v.1h-.1v.1h-.1v.1h-.1v.1h.19v.1h-.1v.1h-.1v.1h.19v.1h-.1v.1h-.1v.1h.19v-.1h.1v.68H.97v.1h-.1v.1h.19v-.1h.38v-.1h-.1v-.68h.1v.1h.29v-.1h.1v.1h-.1v.1h-.1v.1h-.1v.1h.19v-.1h.1v.29h-.29v.1h-.1v.1h.19v-.1h.57v.1h.57v.1h.29v-.1Zm-.67-1.05h.1v.1h-.1v-.1Zm.38.1h-.1v-.1h.1v.1Zm0-.29h-.1v-.1h.1v.1Zm-.38-.1h.1v.1h-.1v-.1Zm-.1.38h.1v.1h-.1v.1h-.1v-.1h-.1v-.1h-.1v-.1h.1v.1h.19Zm-.29.29v-.1h.1v.1h-.1Zm-.57-.29h-.1v-.1h.1v.1Zm0-.29h-.1v-.1h.1v.1Zm-.38-.1h.1v.1h-.1v-.1Zm0 .29h.1v.1h-.1v-.1Zm.57.19v.1h-.1v-.1h-.1v-.1h.29v-.1h.1v.1h-.1v.1h-.1Zm.86.77h-.19v-.1h-.29v-.29h.1v.1h.19v-.1h-.1v-.1h-.1v-.1h.29v-.1h.1v.68Z" />
        <path d="M.9 2.17H1v.1H.9zM.79 3.14V3.44H.9v-.4H.79v.1zM.69 3.24v-.2h-.1v.4h.1v-.2zM.49 3.24v-.2h-.1v.4h.1v-.2zM1.08 3.04h-.1v.51h.1v-.1h.1v.1h.1v-.51h-.2Zm.1.2v.1h-.1v-.2h.1v.1ZM.69 3.44h.1v.1h-.1zM.49 3.44h.1v.1h-.1zM1.77 3.14v.2h-.1v-.2h-.1v-.1h-.2v.5h.1V3.24h.1v.2h.1v.1h.2v-.5h-.1v.1zM2.44 3.04v.5h.2v-.1h-.1v-.1h.1v-.1h-.1v-.1h.1v-.1h-.2zM2.25 3.24v.2h.1V3.14h-.1v.1zM3.11 3.04v.5h.2v-.1h-.1v-.1h.1v-.1h-.1v-.1h.1v-.1h-.2zM2.05 3.44V3.14h.2v-.1H1.95v.5H2.25v-.1h-.2zM3.6 3.14v.2h.1v-.2h-.1zM2.93 3.24v.1h.1v-.2h-.1v.1zM3.5 3.24v-.1h.1v-.1h-.2v.5h.1v-.1h.1v-.1h-.1v-.1zM2.82 3.24v-.1h.11v-.1H2.72v.5h.1v-.1h.11v-.1h-.11v-.1zM3.6 3.44h.1v.1h-.1zM2.93 3.44h.1v.1h-.1z" />
      </svg>
    </Svg>
  );
}

function WarriorSvg({ className }) {
  return (
    <Svg className={`Logo Vox fill-red ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.09 4.09">
        <path d="M2.04.94h.2V.75h-.1v-.2h-.2v.2h-.09v.19h.19z" />
        <path d="M2.62 2.1v-.09h.1v-.49h.1v-.1h.1v-.19h.09V.74h-.09v-.1h-.1v-.1H2.53v.1h.09v.1h.1v.1h.1V1.13h-.1v.1h-.1v.09h-.09v-.09h-.1v-.1h-.1v-.1h-.09v.49-.49h-.49v.49-.39h-.1v.1h-.1v.09h-.09v-.09h-.1v-.1h-.1V.84h.1v-.1h.1v-.1h.09v-.1H1.26v.1h-.1v.1h-.09v.49h.09v.19h.1v.1h.1v.49h.1v.19h.09v.19h.1v.2h.1V2.2h-.1v-.49h.1v-.09h.19v.48h.2v-.48h.19v-.1.19h.1v.49h-.1v.39h.1v-.2h.1V2.2h.09v-.1zM1.44 3.09h-.09v.46h.09v-.09h.09v.09h.09v-.46h-.18Zm.09.18v.09h-.09v-.18h.09v.09ZM1.18 3.18v.27h.09v-.36h-.09v.09zM1.09 3.27v-.18H1v.36h.09v-.18zM.91 3.27v-.18H.82v.36h.09v-.18zM.47 3.27v.09h.18v-.09H.47zM1.09 3.45h.09v.09h-.09zM.91 3.45H1v.09H.91zM2.39 3.18v.36h.09V3.09h-.09v.09zM2.74 3.09h-.18v.46h.36v-.46h-.18Zm.09.18v.18h-.18v-.27h.18v.09ZM1.88 3.27v.09h.09v-.18h-.09v.09zM2.23 3.27v.09h.09v-.18h-.09v.09zM3.18 3.27v.09h.09v-.18h-.09v.09zM3.53 3.27h-.09v.09h.18v-.09h-.09z" />
        <path d="M1.79 3.27v-.09h.09v-.09H1.7V3.54h.09v-.09h.09v-.09h-.09v-.09zM2.14 3.27v-.09h.09v-.09h-.19V3.54h.1v-.09h.09v-.09h-.09v-.09zM3.09 3.27v-.09h.09v-.09H3V3.54h.09v-.09h.09v-.09h-.09v-.09z" />
        <path d="M1.88 3.45h.09v.09h-.09zM2.23 3.45h.09v.09h-.09zM3.18 3.45h.09v.09h-.09z" />
      </svg>
    </Svg>
  );
}
