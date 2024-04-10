import DashboardCard from "../components/DashboardCard";
import Table from "../components/Table";

function Dashboard() {
  const docData = {
    doctors: 100,
    availableDoctors: 60,
    occupiedDoctors: 40,
    registeredPatients: 200,
    ongoingTreatments: 120,
    completedTreatments: 80,
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {" "}
        {/* Added grid classes */}
        {Object.entries(docData).map(([key, value], index) => (
          <DashboardCard key={index} title={key} value={value} /> // Use DashboardCard
        ))}
      </div>
      <div className="p-6">{/* <BarChart data={data} /> Use BarChart */}</div>
      <Table />
    </div>
  );
}

export default Dashboard;
