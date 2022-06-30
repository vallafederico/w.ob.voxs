export function Newsletter({ link = "/" }) {
  return (
    <form className="Newsletter py-2 my-5">
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-transparent border block md:inline border-red rounded-md p-5 mr-3 md:w-[25vw] w-full"
        />
        <button className="bg-white text-red p-5 mr-3 rounded-md uppercase">
          Subscribe ->
        </button>
      </div>
      <div className="flex my-4">
        <input type="checkbox" />
        <label className="block text-[.6em] max-w-[50ch] px-5">
          I agree to the terms and conditions and privacy policy and to receive
          promotional materials from and about VOX, and I understand that I can
          withdraw my consent at any time. (In flow)
        </label>
      </div>
    </form>
  );
}
