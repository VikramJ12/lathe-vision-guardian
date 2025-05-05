
import MachineStatus from "@/components/dashboard/MachineStatus";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

// Mock data for demo
const machinesData = [
  {
    id: "m1",
    name: "M1",
    healthScore: 85,
    uptime: 92,
    efficiency: 88,
    status: "operational" as const,
  },
  {
    id: "m2",
    name: "M2",
    healthScore: 60,
    uptime: 78,
    efficiency: 65,
    status: "warning" as const,
  },
  {
    id: "m3",
    name: "M3",
    healthScore: 92,
    uptime: 98,
    efficiency: 95,
    status: "operational" as const,
  },
  {
    id: "m4",
    name: "M4",
    healthScore: 35,
    uptime: 45,
    efficiency: 30,
    status: "failure" as const,
  },
];

const overallData = [
  { name: "Operational", value: 2 },
  { name: "Warning", value: 1 },
  { name: "Failure", value: 1 },
];

const COLORS = ["#4CB963", "#FFBE0B", "#FB3640"];

const MachinePerformance = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Machine Performance Dashboard</h1>
        <p className="text-gray-600">Monitor performance, uptime, and health status of all lathe machines</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {machinesData.map((machine) => (
          <MachineStatus 
            key={machine.id}
            machineId={machine.id}  
            name={machine.name}
            healthScore={machine.healthScore}
            uptime={machine.uptime}
            efficiency={machine.efficiency}
            status={machine.status}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Machine Performance Overview</CardTitle>
            <CardDescription>
              Comparative analysis of all lathe machines
            </CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <div className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={overallData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {overallData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Overall Statistics</CardTitle>
            <CardDescription>
              Key metrics across all machines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Average Health Score</div>
                <div className="text-3xl font-bold">
                  {(machinesData.reduce((acc, machine) => acc + machine.healthScore, 0) / machinesData.length).toFixed(1)}%
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Average Uptime</div>
                <div className="text-3xl font-bold">
                  {(machinesData.reduce((acc, machine) => acc + machine.uptime, 0) / machinesData.length).toFixed(1)}%
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Average Production Efficiency</div>
                <div className="text-3xl font-bold">
                  {(machinesData.reduce((acc, machine) => acc + machine.efficiency, 0) / machinesData.length).toFixed(1)}%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MachinePerformance;
