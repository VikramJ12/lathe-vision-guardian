
import SensorChart from "@/components/dashboard/SensorChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Mock data for demo
const generateSensorData = (points: number, min: number, max: number) => {
  const data = [];
  for (let i = 0; i < points; i++) {
    const value = min + Math.random() * (max - min);
    data.push({
      time: `${i}:00`,
      value: parseFloat(value.toFixed(2)),
    });
  }
  return data;
};

const temperatureData = generateSensorData(24, 20, 95);
const vibrationData = generateSensorData(24, 0, 10);
const toolWearData = generateSensorData(24, 0, 240);
const powerConsumptionData = generateSensorData(24, 3000, 9000);
const rpmData = generateSensorData(24, 1000, 2500);
const torqueData = generateSensorData(24, 20, 80);

const SensorData = () => {
  const [machine, setMachine] = useState("all");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sensor Data Analysis</h1>
          <p className="text-gray-600">Monitor and analyze sensor readings from all lathe machines</p>
        </div>
        <div className="w-full md:w-64">
          <Select value={machine} onValueChange={setMachine}>
            <SelectTrigger>
              <SelectValue placeholder="All Machines" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Machines</SelectItem>
              <SelectItem value="m1">Machine M1</SelectItem>
              <SelectItem value="m2">Machine M2</SelectItem>
              <SelectItem value="m3">Machine M3</SelectItem>
              <SelectItem value="m4">Machine M4</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="real-time">
        <TabsList className="mb-4">
          <TabsTrigger value="real-time">Real-Time</TabsTrigger>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        <TabsContent value="real-time" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SensorChart
              title="Temperature"
              data={temperatureData}
              dataKey="value"
              color="#FB3640"
              unit="°C"
            />
            <SensorChart
              title="Vibration"
              data={vibrationData}
              dataKey="value"
              color="#4CB963"
              unit=" mm/s"
            />
            <SensorChart
              title="Tool Wear"
              data={toolWearData}
              dataKey="value"
              color="#FFBE0B"
              unit=" mins"
            />
            <SensorChart
              title="Power Consumption"
              data={powerConsumptionData}
              dataKey="value"
              color="#0A2463"
              unit=" W"
            />
            <SensorChart
              title="RPM"
              data={rpmData}
              dataKey="value"
              color="#8E9196"
              unit=" rpm"
            />
            <SensorChart
              title="Torque"
              data={torqueData}
              dataKey="value"
              color="#6A7495"
              unit=" Nm"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="daily" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Data View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">
                  Daily sensor data visualization would be implemented here.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="weekly" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Data View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">
                  Weekly sensor data visualization would be implemented here.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="monthly" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Data View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">
                  Monthly sensor data visualization would be implemented here.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SensorData;
