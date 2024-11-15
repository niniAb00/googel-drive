import Image from "next/image";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen ">
      <section>
        <div>
          <Image
            src="/favicon.ico"
            alt="logo"
            width={16}
            height={16}
            className="h-auto"
          />
          <div className="space-y-5 text-white">
            <h1>hihihihihihihihiih</h1>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
};

export default Layout;
