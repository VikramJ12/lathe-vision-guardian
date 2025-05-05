
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleAlert, Thermometer, Wrench, ChartBar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

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
      return <Wrench className="h-5 w-5 text-industrial-green" />;
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <>
      <Card className="bg-card border-border">
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
          <div className="bg-muted rounded-full px-3 py-1 flex flex-col items-center">
            <span className="text-sm font-bold">{count}</span>
            <span className="text-xs text-muted-foreground">instances</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm mb-2">
            <span>Occurrence Rate:</span>
            <span className="font-medium">{percentage}% of failures</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2.5">
            <div 
              className="bg-industrial-orange h-2.5 rounded-full" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full mt-4 flex items-center justify-center gap-1 text-muted-foreground hover:text-foreground"
            onClick={() => setIsDialogOpen(true)}
          >
            <Info size={16} />
            Inspect Details
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {getIcon(code)}
              {type} ({code})
            </DialogTitle>
            <DialogDescription>
              Detailed information about this failure type
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-foreground">{description}</p>
            <div className="mt-4 p-3 rounded-md bg-muted">
              <div className="flex items-center justify-between text-sm">
                <span>Occurrence Count:</span>
                <span className="font-medium">{count} instances</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span>Percentage:</span>
                <span className="font-medium">{percentage}% of total failures</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FailureCard;
