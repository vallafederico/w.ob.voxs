import { Form } from "@remix-run/react";

export function Newsletter() {
  return (
    <Form method="post" className="Newsletter py-2 my-5">
      <div>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="bg-transparent border block md:inline border-red rounded-md p-5 mr-3 md:w-[25vw] w-full"
        />
        <button className="bg-white text-red p-5 md:mr-3 md:mt-0 mt-5 w-full md:w-auto  rounded-md uppercase">
          Subscribe {"->"}
        </button>
      </div>
      <div className="flex my-4">
        <input type="checkbox" />
        <label className="block text-[.6em] max-w-[50ch] px-5">
          I agree to the terms and conditions and privacy policy and to receive
          promotional materials from and about VOX, and I understand that I can
          withdraw my consent at any time.
        </label>
      </div>
    </Form>
  );
}
