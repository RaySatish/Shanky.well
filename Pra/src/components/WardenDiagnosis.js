import DiagnosisTable from "./DiagnosisTable";
import HostelDiagnosisCards from "./HostelTable";

function Dashboard() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">Diagnosis Table</h1>
      <HostelDiagnosisCards />
    </div>
  );
}

export default Dashboard;
