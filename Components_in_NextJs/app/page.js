import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container">
      <Image className="mx-auto py-3 px-2" src={"/image.png"} alt="image" width={500} height={500} />
      </div>
    </>
  );
}
