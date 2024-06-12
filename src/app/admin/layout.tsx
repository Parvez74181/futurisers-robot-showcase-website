import DashboardSidebarNav from "@/components/DashboardSidebarNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardSidebarNav />
      <main className=" ">
        {/* hero section */}
        <section className="hero-section ">
          <div className=" min-h-screen lg:ms-64 p-5">{children}</div>
        </section>
      </main>
    </>
  );
}
