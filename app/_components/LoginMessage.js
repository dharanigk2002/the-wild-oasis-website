import Link from "next/link";

function LoginMessage() {
  return (
    <div className="flex flex-1 justify-center bg-primary-800 ">
      <p className="text-center text-xl py-12 self-center">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
