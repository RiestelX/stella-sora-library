import Sidebar from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
