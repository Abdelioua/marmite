import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  });

  return (
    <div className="not-found">
      <h1>
        Page does not exist!!{" "}
        <Link
          className="bg-white rounded-xl p-2 hover:text-red-400 underline"
          href="/"
        >
          back to homepage
        </Link>
      </h1>
    </div>
  );
};

export default NotFound;
