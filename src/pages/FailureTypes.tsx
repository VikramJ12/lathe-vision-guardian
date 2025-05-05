
import FailureCard from "@/components/dashboard/FailureCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Mock data for demo
const failureTypes = [
  {
    id: "twf",
    type: "Tool Wear Failure",
    code: "TWF",
    description: "The tool will be replaced or fail at a randomly selected tool wear time between 200 – 240 mins. At this point in time, the tool is replaced 74 times, and fails 46 times (randomly assigned).",
    count: 46,
    percentage: 12.3,
  },
  {
    id: "hdf",
    type: "Heat Dissipation Failure",
    code: "HDF",
    description: "Heat dissipation causes a process failure, if the difference between air- and process temperature is below 8.6 K and the tool's rotational speed is below 1380 rpm. This is the case for 115 data points.",
    count: 115,
    percentage: 30.8,
  },
  {
    id: "pwf",
    type: "Power Failure",
    code: "PWF",
    description: "The product of torque and rotational speed equals the power required for the process. If this power is below 3500 W or above 9000 W, the process fails, which is the case 95 times.",
    count: 95,
    percentage: 25.4,
  },
  {
    id: "osf",
    type: "Overstrain Failure",
    code: "OSF",
    description: "If the product of tool wear and torque exceeds 11,000 minNm for the L product variant (12,000 for M, 13,000 for H), the process fails due to overstrain. This is true for 98 datapoints.",
    count: 98,
    percentage: 26.2,
  },
  {
    id: "rnf",
    type: "Random Failures",
    code: "RNF",
    description: "Each process has a chance of 0.1% to fail regardless of its process parameters. This is the case for 19 datapoints, more frequent than could be expected for 10,000 datapoints in our dataset.",
    count: 19,
    percentage: 5.1,
  },
];

const chartData = [
  { month: "Jan", TWF: 5, HDF: 12, PWF: 8, OSF: 9, RNF: 2 },
  { month: "Feb", TWF: 3, HDF: 10, PWF: 7, OSF: 8, RNF: 1 },
  { month: "Mar", TWF: 4, HDF: 15, PWF: 10, OSF: 12, RNF: 2 },
  { month: "Apr", TWF: 6, HDF: 13, PWF: 12, OSF: 14, RNF: 3 },
  { month: "May", TWF: 8, HDF: 18, PWF: 15, OSF: 16, RNF: 4 },
  { month: "Jun", TWF: 7, HDF: 20, PWF: 18, OSF: 15, RNF: 3 },
  { month: "Jul", TWF: 9, HDF: 17, PWF: 15, OSF: 12, RNF: 2 },
];

const FailureTypes = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Failure Type Analysis</h1>
        <p className="text-gray-600">
          Detailed breakdown and statistics of different failure types across all machines
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {failureTypes.map((failure) => (
          <FailureCard key={failure.id} {...failure} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Failure History by Month</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="TWF" name="Tool Wear Failure" fill="#0A2463" />
              <Bar dataKey="HDF" name="Heat Dissipation Failure" fill="#FFBE0B" />
              <Bar dataKey="PWF" name="Power Failure" fill="#FB3640" />
              <Bar dataKey="OSF" name="Overstrain Failure" fill="#4CB963" />
              <Bar dataKey="RNF" name="Random Failures" fill="#8E9196" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default FailureTypes;
