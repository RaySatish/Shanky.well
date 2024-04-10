import DashboardCard from "./WardensDashboardCard";

function Dashboard() {
  const Data = {
    A: 34,
    B: 67,
    C: 23,
    D: 89,
    E: 45,
    F: 76,
    G: 12,
    H: 98,
    I: 56,
    J: 43,
    K: 27,
    L: 81,
    M: 39,
    N: 64,
    O: 91,
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">No of Appointment from Each block</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {" "}
        {/* Added grid classes */}
        {Object.entries(Data).map(([key, value], index) => (
          <DashboardCard key={index} title={key} value={value} /> // Use DashboardCard
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
