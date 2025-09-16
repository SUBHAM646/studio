import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function AuthPage() {
  const [tab, setTab] = useState("signin");

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="rounded-2xl shadow-xl border-none bg-white">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
              Namma Mitra
            </h1>

            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsList className="grid grid-cols-2 bg-orange-100 rounded-lg p-1 mb-6">
                <TabsTrigger
                  value="signin"
                  className="data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-lg"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-orange-600 data-[state=active]:text-white rounded-lg"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              {/* Sign In */}
              <TabsContent value="signin">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Email
                    </label>
                    <Input type="email" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Password
                    </label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <div className="flex justify-end text-sm">
                    <a href="#" className="text-orange-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 rounded-xl">
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              {/* Sign Up */}
              <TabsContent value="signup">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Full Name
                    </label>
                    <Input type="text" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Email
                    </label>
                    <Input type="email" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Password
                    </label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Confirm Password
                    </label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 rounded-xl">
                    Sign Up
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm text-gray-500">
              Or continue with
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <Button variant="outline" className="rounded-full px-4">
                Google
              </Button>
              <Button variant="outline" className="rounded-full px-4">
                Facebook
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
