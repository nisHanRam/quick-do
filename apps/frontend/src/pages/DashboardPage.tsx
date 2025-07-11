import Stats from "@/components/dashboard-page/Stats";
import Charts from "@/components/dashboard-page/Charts";

const DashboardPage = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-primary">
          Overview of your task management activity
        </p>
      </div>
      <Stats />
      <Charts />
    </div>
  );
};

export default DashboardPage;
