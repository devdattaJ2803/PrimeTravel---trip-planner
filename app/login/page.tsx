"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { TravelHeader } from "@/components/travel-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { Eye, EyeOff, Loader2, Lock, Mail, Globe } from "lucide-react"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate authentication
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Login successful",
        description: "Welcome back to PrimeTravels",
      })

      router.push("/")
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate account creation
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Account created",
        description: "Welcome to PrimeTravels premium experience",
      })

      router.push("/")
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "Please try again later",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 text-white">
      <TravelHeader />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-500 text-navy-900 mb-4">
              <Globe className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold">Welcome to PrimeTravels</h1>
            <p className="text-slate-400 mt-2">Your gateway to premium travel experiences</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="login" className="data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900">
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-teal-500 data-[state=active]:text-navy-900">
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="bg-navy-800/50 border-navy-700">
                <CardHeader>
                  <CardTitle>Login to your account</CardTitle>
                  <CardDescription>Enter your credentials to access your premium account</CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          className="pl-10 bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="/forgot-password" className="text-xs text-teal-400 hover:text-teal-300">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          className="pl-10 pr-10 bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-3 text-slate-400 hover:text-white"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm">
                        Remember me for 30 days
                      </Label>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-600 text-navy-900"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Logging in...
                        </>
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card className="bg-navy-800/50 border-navy-700">
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>Join our premium travel community</CardDescription>
                </CardHeader>
                <form onSubmit={handleSignup}>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input
                          id="first-name"
                          className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input
                          id="last-name"
                          className="bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="name@example.com"
                          className="pl-10 bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="signup-password"
                          type={showPassword ? "text" : "password"}
                          className="pl-10 pr-10 bg-navy-700 border-navy-600 focus:border-teal-500 text-white"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-3 text-slate-400 hover:text-white"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      <p className="text-xs text-slate-400">Must be at least 8 characters</p>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" className="mt-1" required />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-teal-400 hover:text-teal-300">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-teal-400 hover:text-teal-300">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-600 text-navy-900"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating account...
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center text-sm text-slate-400">
            <p>
              By continuing, you acknowledge that you have read and understand our{" "}
              <Link href="/privacy" className="text-teal-400 hover:text-teal-300">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-teal-400 hover:text-teal-300">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
