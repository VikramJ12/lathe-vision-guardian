
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface MachineStatusProps {
  machineId: string;
  name: string;
  healthScore: number;
  uptime: number;
  efficiency: number;
  status: "operational" | "warning" | "failure";
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "operational":
      return "bg-industrial-green";
    case "warning":
      return "bg-industrial-yellow";
    case "failure":
      return "bg-industrial-red";
    default:
      return "bg-gray-400";
  }
};

const getHealthColor = (score: number) => {
  if (score >= 75) return "bg-industrial-green";
  if (score >= 40) return "bg-industrial-yellow";
  return "bg-industrial-red";
};

const MachineStatus = ({
  machineId,
  name,
  healthScore,
  uptime,
  efficiency,
  status
}: MachineStatusProps) => {
  const statusColor = getStatusColor(status);
  const healthColor = getHealthColor(healthScore);
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-xl font-bold">Lathe {name}</CardTitle>
        <div className="flex items-center space-x-2">
          <div className={`h-3 w-3 rounded-full ${statusColor} animate-pulse-slight`}></div>
          <span className="text-sm font-medium capitalize">{status}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="w-32 h-32 mx-auto">
            <div className="relative h-full w-full">
              <img
                src="/lovable-uploads/9e438e25-460e-48f3-9859-473651d208a2.png"
                alt={`Lathe Machine ${name}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  (e.target as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
              <div
                className={`absolute bottom-0 left-0 right-0 h-1.5 ${healthColor}`}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Health Score</span>
              <span className="text-sm font-medium">{healthScore}%</span>
            </div>
            <Progress value={healthScore} className={healthColor} />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Uptime</span>
              <span className="text-sm font-medium">{uptime}%</span>
            </div>
            <Progress value={uptime} className="bg-industrial-orange" />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Production Efficiency</span>
              <span className="text-sm font-medium">{efficiency}%</span>
            </div>
            <Progress value={efficiency} className="bg-industrial-yellow" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MachineStatus;
