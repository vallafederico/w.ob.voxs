export default function Main({ children, canScroll = false }) {
  return (
    <main className={`w ${canScroll ? "" : "max-h-screen overflow-hidden"}`}>
      {children}
    </main>
  );
}
