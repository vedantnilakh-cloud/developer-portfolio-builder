import Image from "next/image";
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <h1>
        Hello, Developer Portfolio Builder!
      </h1>
      <div className="fixed top-4 right-4 z-50">
      <UserButton />
      </div>
    </div>
  );
}
