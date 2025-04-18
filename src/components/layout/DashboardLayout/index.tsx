//
import Header from "./Header";
import { Sidebar } from "./Sidebar";

//
type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="flex flex-col overflow-hidden flex-1 h-full">
        {/* Header */}
        <Header />

        {/* Main */}
        <main className="flex-1 h-full overflow-y-auto hide-scroll min-h-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export { DashboardLayout };
