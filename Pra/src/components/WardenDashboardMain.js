import DashboardCard from "./WardensDashboardCard";

function Dashboard() {
  const Data = {
    "1st Floor": 34,
    "2nd Floor": 27,
    "3rd Floor": 23,
    "4th Floor": 45,
    "5th Floor": 38,
    "6th Floor": 12,
    "7th Floor": 50,
    "8th Floor": 33,
    "9th Floor": 19,
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">No of Cases from Each Floor</h1>
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
