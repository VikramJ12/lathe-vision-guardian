
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert, Thermometer, Wrench, ChartBar } from "lucide-react";

interface FailureCardProps {
  type: string;
  code: string;
  description: string;
  count: number;
  percentage: number;
}

const getIcon = (code: string) => {
  switch (code) {
    case "TWF":
      return <Wrench className="h-5 w-5 text-industrial-blue" />;
    case "HDF":
      return <Thermometer className="h-5 w-5 text-industrial-yellow" />;
    case "PWF":
    case "OSF":
      return <ChartBar className="h-5 w-5 text-industrial-red" />;
    case "RNF":
    default:
      return <CircleAlert className="h-5 w-5 text-gray-500" />;
  }
};

const FailureCard = ({ type, code, description, count, percentage }: FailureCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            {getIcon(code)}
            {type}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Code: {code}
          </CardDescription>
        </div>
        <div className="bg-gray-100 rounded-full px-3 py-1 flex flex-col items-center">
          <span className="text-sm font-bold">{count}</span>
          <span className="text-xs text-gray-500">instances</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm">
          <span>Occurrence Rate:</span>
          <span className="font-medium">{percentage}% of failures</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div 
            className="bg-industrial-blue h-2.5 rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FailureCard;
