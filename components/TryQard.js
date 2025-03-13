import Image from 'next/image';

export default function TryQard() {
  return (
    <section className="w-full min-h-[50vh] md:min-h-[70vh] bg-black flex items-center justify-center relative">
      <div className="absolute inset-0">
        <Image
          src="/truqardframe.svg"  
          alt="Qard Frame"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
      </div>
    </section>
  );
}