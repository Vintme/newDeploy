import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <Image
        src="/images/construction.png"
        alt="Under Construction"
        width={300}
        height={300}
        className="mb-6"
      />
      <h1 className="text-2xl font-bold text-gray-800">Vintme Under Construction Last</h1>
    </div>
  );
}