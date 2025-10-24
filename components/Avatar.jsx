import Image from "next/image";

const Avatar = () => {
  return (
    <div className="xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/logo.png"
        alt="avatar"
        width={120}
        height={120}
        className="translate-z-0 rounded-[5%] object-cover"
      />
    </div>
  );
};

export default Avatar;
