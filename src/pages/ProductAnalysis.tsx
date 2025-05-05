
import ProductTypeCard from "@/components/dashboard/ProductTypeCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// Mock data for demo
const productTypes = [
  {
    type: "L" as const,
    name: "Light Weight Product",
    description: "Standard weight products with 11,000 minNm maximum tool wear × torque threshold",
    failureRate: 7.8,
    totalProduced: 3500,
  },
  {
    type: "M" as const,
    name: "Medium Weight Product",
    description: "Medium weight products with 12,000 minNm maximum tool wear × torque threshold",
    failureRate: 5.2,
    totalProduced: 4200,
  },
  {
    type: "H" as const,
    name: "Heavy Weight Product",
    description: "Heavy weight products with 13,000 minNm maximum tool wear × torque threshold",
    failureRate: 9.3,
    totalProduced: 2300,
  },
];

const productComparisonData = [
  {
    metric: "Avg. Process Time (min)",
    L: 18,
    M: 22,
    H: 27,
  },
  {
    metric: "Avg. Temperature (°C)",
    L: 58,
    M: 68,
    H: 82,
  },
  {
    metric: "Avg. Tool Wear (min)",
    L: 120,
    M: 145,
    H: 170,
  },
  {
    metric: "Avg. Power (W)",
    L: 5200,
    M: 6800,
    H: 8200,
  },
  {
    metric: "Avg. Vibration (mm/s)",
    L: 3.2,
    M: 4.5,
    H: 5.8,
  },
];

const productTrendData = [
  { month: 'Jan', L: 280, M: 300, H: 180 },
  { month: 'Feb', L: 300, M: 320, H: 190 },
  { month: 'Mar', L: 320, M: 350, H: 210 },
  { month: 'Apr', L: 290, M: 380, H: 220 },
  { month: 'May', L: 330, M: 400, H: 240 },
  { month: 'Jun', L: 350, M: 410, H: 250 },
  { month: 'Jul', L: 360, M: 430, H: 260 },
];

const ProductAnalysis = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Product Type Analysis</h1>
        <p className="text-gray-600">
          Analyze production metrics and performance across different product types
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productTypes.map((product) => (
          <ProductTypeCard key={product.type} {...product} />
        ))}
      </div>

      <Tabs defaultValue="comparison">
        <TabsList className="mb-4">
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
          <TabsTrigger value="trends">Production Trends</TabsTrigger>
          <TabsTrigger value="failures">Failure Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle>Product Type Metrics Comparison</CardTitle>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={productComparisonData}
                  layout="vertical"
                  margin={{
                    top: 20,
                    right: 30,
                    left: 100,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="metric" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="L" name="Light Product (L)" fill="#4CB963" />
                  <Bar dataKey="M" name="Medium Product (M)" fill="#0A2463" />
                  <Bar dataKey="H" name="Heavy Product (H)" fill="#FB3640" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Production Trends</CardTitle>
            </CardHeader>
            <CardContent className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={productTrendData}
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
                  <Line type="monotone" dataKey="L" name="Light Product (L)" stroke="#4CB963" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="M" name="Medium Product (M)" stroke="#0A2463" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="H" name="Heavy Product (H)" stroke="#FB3640" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="failures">
          <Card>
            <CardHeader>
              <CardTitle>Product Failure Distribution by Type</CardTitle>
            </CardHeader>
            <CardContent className="h-96">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                {productTypes.map((product) => (
                  <Card key={product.type} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">Type {product.type} Failures</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <div>Tool Wear Failure</div>
                            <div>
                              {product.type === "L" ? "38%" : product.type === "M" ? "25%" : "42%"}
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-industrial-blue h-2 rounded-full"
                              style={{
                                width:
                                  product.type === "L" ? "38%" : product.type === "M" ? "25%" : "42%",
                              }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <div>Heat Dissipation</div>
                            <div>
                              {product.type === "L" ? "22%" : product.type === "M" ? "32%" : "18%"}
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-industrial-yellow h-2 rounded-full"
                              style={{
                                width:
                                  product.type === "L" ? "22%" : product.type === "M" ? "32%" : "18%",
                              }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <div>Power Failure</div>
                            <div>
                              {product.type === "L" ? "15%" : product.type === "M" ? "20%" : "12%"}
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-industrial-red h-2 rounded-full"
                              style={{
                                width:
                                  product.type === "L" ? "15%" : product.type === "M" ? "20%" : "12%",
                              }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <div>Overstrain</div>
                            <div>
                              {product.type === "L" ? "20%" : product.type === "M" ? "18%" : "24%"}
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-industrial-green h-2 rounded-full"
                              style={{
                                width:
                                  product.type === "L" ? "20%" : product.type === "M" ? "18%" : "24%",
                              }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <div>Random Failures</div>
                            <div>
                              {product.type === "L" ? "5%" : product.type === "M" ? "5%" : "4%"}
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gray-500 h-2 rounded-full"
                              style={{
                                width:
                                  product.type === "L" ? "5%" : product.type === "M" ? "5%" : "4%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductAnalysis;
