
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductTypeCardProps {
  type: "L" | "M" | "H";
  name: string;
  description: string;
  failureRate: number;
  totalProduced: number;
  color?: string;
}

const getColor = (type: string) => {
  switch (type) {
    case "L":
      return "bg-green-100 text-green-800";
    case "M":
      return "bg-blue-100 text-blue-800";
    case "H":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const ProductTypeCard = ({
  type,
  name,
  description,
  failureRate,
  totalProduced,
}: ProductTypeCardProps) => {
  const badgeColor = getColor(type);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          <Badge className={badgeColor}>Type {type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-500">Failure Rate</div>
            <div className="text-2xl font-bold">{failureRate}%</div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-500">Total Produced</div>
            <div className="text-2xl font-bold">{totalProduced}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductTypeCard;
