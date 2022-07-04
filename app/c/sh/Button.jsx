export function Button({ children, className }) {
  return (
    <button className={`Button cursor-pointer ${className}`}>{children}</button>
  );
}

export function MintButton({ className }) {
  return (
    <Button
      className={`bg-red text-white py-2 px-10 rounded-md tx-display uppercase font-display md:text-[1.2em] text-[1em] ${className}`}
    >
      Mint Yours
      <span className="block text-[.6em] font-sans leading-3">
        Connect Wallet
      </span>
    </Button>
  );
}
