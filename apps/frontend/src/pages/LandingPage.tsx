import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { routePaths } from "@/lib/routePaths";
import { CheckCircle, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <Logo />
        <div className="flex items-center space-x-4">
          <Link to={routePaths.AUTH}>
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link to={routePaths.AUTH}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            Task Management
            <span className="block">Made Simple</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Organize, prioritize, and track your tasks with ease. QuickDo helps
            teams and individuals stay productive and focused.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to={routePaths.AUTH}>
              <Button size="lg" className="px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-18">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckCircle className="h-12 w-12 mb-4 text-chart-2 fill-chart-2/20" />
              <CardTitle>Smart Task Management</CardTitle>
              <CardDescription>
                Create, organize, and prioritize tasks with our intuitive
                interface
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-chart-4 fill-chart-4/20 mb-4" />
              <CardTitle>Powerful Analytics</CardTitle>
              <CardDescription>
                Track your productivity with detailed charts and insights
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="h-12 w-12 text-chart-5 fill-chart-5/20 mb-4" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Built for speed with modern technology for seamless experience
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
