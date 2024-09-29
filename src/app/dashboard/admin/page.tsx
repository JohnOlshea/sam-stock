"use client"

import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  CreditCard,
  DollarSign,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/ui/modeToggle"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  SiTesla,
  SiApple,
  SiAmazon,
  SiNetflix,
  SiGoogle,
  SiMcdonalds,
  SiWise,
  SiStockx,
} from "react-icons/si";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."

export default function Dashboard() {
  return (
    <div className="bg-[#393d32] dark:bg-transparent grid min-h-screen w-full md:grid-cols-[180px_1fr] lg:grid-cols-[240px_1fr]">
      <div className="hidden md:block dark:bg-muted/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="text-white flex items-center gap-2 font-semibold">
              <SiStockx className="h-6 w-6" />
              <span className="">SamStocks</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid gap-4 items-start text-sm font-medium mt-8">
              <Link
                href="#"
                className="text-white flex items-center gap-3 pl-6 pr-3 py-2 py-2 text-muted-foreground transition-all hover:bg-[#2e3327] dark:hover:bg-muted"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-white flex items-center gap-3 pl-6 pr-3 py-2 text-muted-foreground transition-all hover:bg-[#2e3327] dark:hover:bg-muted"
              >
                <ShoppingCart className="h-4 w-4" />
                Users
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="#"
                className="text-white flex items-center gap-3 bg-[#2e3327] pl-6 pr-3 py-2 transition-all hover:bg-[#2e3327] dark:bg-muted dark:hover:bg-muted"
              >
                <Package className="h-4 w-4" />
                Stock Manager{" "}
              </Link>
              <Link
                href="#"
                className="text-white flex items-center gap-3 pl-6 pr-3 py-2 text-muted-foreground transition-all hover:bg-[#2e3327] dark:hover:bg-muted"
              >
                <Users className="h-4 w-4" />
                Market
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="dark:bg-muted/40 flex h-14 items-center gap-4 pr-4 lg:h-[60px] lg:pr-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Users
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Stock Manager
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Market
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1"></div>
          <p className="text-white text-sm font-base">Hi! Sam Doe</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="text-white bg-[#2e3327] hover:bg-[#393d32] dark:bg-secondary dark:hover:bg-secondary border-[#2e3327]">
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link href="/auth/login" passHref>
                <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </header>
        <main className="bg-white dark:bg-transparent rounded-2xl flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>

          <div className="grid flex-1 items-start gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start md:gap-8 lg:col-span-2">
              <div className="grid gap-2 grid-cols-2 md:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3">
                <Card className="bg-[#eaf1f3] border-none shadow-none dark:bg-gray-900" x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row p-[7px] mb-[-17px] gap-2 items-center">
                    <SiApple className="w-7 h-7 p-1 text-white bg-gray-900 dark:bg-transparent dark:border dark:border-[#27272a] rounded-lg" />
                    <p className="text-sm">
                      Apple <span className="text-muted-foreground">APPL</span>
                    </p>
                  </CardHeader>
                  <ChartContainer
                    config={{
                      time: {
                        label: "Time",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                  >
                    <AreaChart
                      accessibilityLayer
                      data={[
                        {
                          date: "2024-01-01",
                          time: 8.5,
                        },
                        {
                          date: "2024-01-02",
                          time: 7.2,
                        },
                        {
                          date: "2024-01-03",
                          time: 8.1,
                        },
                        {
                          date: "2024-01-04",
                          time: 6.2,
                        },
                        {
                          date: "2024-01-05",
                          time: 5.2,
                        },
                        {
                          date: "2024-01-06",
                          time: 8.1,
                        },
                        {
                          date: "2024-01-07",
                          time: 7.0,
                        },
                      ]}
                      margin={{
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                      }}
                    >
                      <XAxis dataKey="date" hide />
                      <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
                      <defs>
                        <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="5%"
                            stopColor="var(--color-time)"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-time)"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey="time"
                        type="natural"
                        fill="url(#fillTime)"
                        fillOpacity={0.4}
                        stroke="var(--color-time)"
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                        formatter={(value) => (
                          <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                            Time in till cashout
                            <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                              {value}
                              <span className="font-normal text-muted-foreground">
                                hr
                              </span>
                            </div>
                          </div>
                        )}
                      />
                    </AreaChart>
                  </ChartContainer>
                  <CardHeader className="pb-0">
                    <CardTitle className="text-sm font-medium">
                      Current Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-row items-center justify-between space-y-0 ">
                    <div className="text-2xl font-bold">$107.54</div>
                    <p className="text-right text-xs text-muted-foreground">
                      APPL <br />
                      +23.41
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#eaf1f3] border-none shadow-none dark:bg-gray-900" x-chunk="dashboard-01-chunk-1">
                  <CardHeader className="flex flex-row p-[7px] mb-[-17px] gap-2 items-center">
                    <SiTesla className="w-7 h-7 p-1 text-white bg-gray-900 dark:bg-transparent dark:border dark:border-[#27272a] rounded-lg" />
                    <p className="text-sm">
                      Tesla <span className="text-muted-foreground">TSL</span>
                    </p>
                  </CardHeader>
                  <ChartContainer
                    config={{
                      time: {
                        label: "Time",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                  >
                    <AreaChart
                      accessibilityLayer
                      data={[
                        {
                          date: "2024-01-01",
                          time: 3.9,
                        },
                        {
                          date: "2024-01-02",
                          time: 6.4,
                        },
                        {
                          date: "2024-01-03",
                          time: 8.1,
                        },
                        {
                          date: "2024-01-04",
                          time: 5.7,
                        },
                        {
                          date: "2024-01-05",
                          time: 8.1,
                        },
                        {
                          date: "2024-01-06",
                          time: 7.1,
                        },
                        {
                          date: "2024-01-07",
                          time: 9.8,
                        },
                      ]}
                      margin={{
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                      }}
                    >
                      <XAxis dataKey="date" hide />
                      <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
                      <defs>
                        <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="5%"
                            stopColor="var(--color-time)"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-time)"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey="time"
                        type="natural"
                        fill="url(#fillTime)"
                        fillOpacity={0.4}
                        stroke="var(--color-time)"
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                        formatter={(value) => (
                          <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                            Time in till cashout
                            <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                              {value}
                              <span className="font-normal text-muted-foreground">
                                hr
                              </span>
                            </div>
                          </div>
                        )}
                      />
                    </AreaChart>
                  </ChartContainer>
                  <CardHeader className="pb-0">
                    <CardTitle className="text-sm font-medium">
                      Current Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-row items-center justify-between space-y-0 ">
                    <div className="text-2xl font-bold">$152.25</div>
                    <p className="text-right text-xs text-muted-foreground">
                      TSLA <br />
                      +15.78
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#eaf1f3] border-none shadow-none dark:bg-gray-900" x-chunk="dashboard-01-chunk-2">
                  <CardHeader className="flex flex-row p-[7px] mb-[-17px] gap-2 items-center">
                    <SiAmazon className="w-7 h-7 p-1 text-white bg-gray-900 dark:bg-transparent dark:border dark:border-[#27272a] rounded-lg" />
                    <p className="text-sm">
                      Amazon <span className="text-muted-foreground">AMZN</span>
                    </p>
                  </CardHeader>
                  <ChartContainer
                    config={{
                      time: {
                        label: "Time",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                  >
                    <AreaChart
                      accessibilityLayer
                      data={[
                        {
                          date: "2024-01-01",
                          time: 6.2,
                        },
                        {
                          date: "2024-01-02",
                          time: 3.6,
                        },
                        {
                          date: "2024-01-03",
                          time: 7.2,
                        },
                        {
                          date: "2024-01-04",
                          time: 7.5,
                        },
                        {
                          date: "2024-01-05",
                          time: 6.7,
                        },
                        {
                          date: "2024-01-06",
                          time: 8.7,
                        },
                        {
                          date: "2024-01-07",
                          time: 9.6,
                        },
                      ]}
                      margin={{
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                      }}
                    >
                      <XAxis dataKey="date" hide />
                      <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
                      <defs>
                        <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="5%"
                            stopColor="var(--color-time)"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-time)"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey="time"
                        type="natural"
                        fill="url(#fillTime)"
                        fillOpacity={0.4}
                        stroke="var(--color-time)"
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                        formatter={(value) => (
                          <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                            Time in till cashout
                            <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                              {value}
                              <span className="font-normal text-muted-foreground">
                                hr
                              </span>
                            </div>
                          </div>
                        )}
                      />
                    </AreaChart>
                  </ChartContainer>
                  <CardHeader className="pb-0">
                    <CardTitle className="text-sm font-medium">
                      Current Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-row items-center justify-between space-y-0 ">
                    <div className="text-2xl font-bold">$427.26</div>
                    <p className="text-right text-xs text-muted-foreground">
                      AMZN <br />
                      +92.41
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card
                className="flex flex-col" x-chunk="charts-01-chunk-1"
              >


                <CardHeader>
                  <CardTitle>Evaluation</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Total assets
                  </p>
                  <div className="flex justify-between">
                    <div className="flex items-end">
                      <h1 className="text-3xl font-bold mr-2">$49,825
                        <span className="text-base font-base">.82</span>
                      </h1>
                      <div className="flex items-center rounded-sm bg-green-200 dark:bg-transparent dark:border dark:border-gray text-xs p-1 mr-1">
                        <FaArrowUpRightDots className="w-3 h-3 mr-1" />
                        1.9%
                      </div>
                      <div className="flex items-center rounded-sm bg-green-200 dark:bg-transparent dark:border dark:border-gray text-xs p-1">
                        <FaDollarSign className="w-3 h-3" />
                        747.29
                      </div>
                    </div>

                    <Select>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Last 30 days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Stock duration</SelectLabel>
                          <SelectItem value="60">Last 60 days</SelectItem>
                          <SelectItem value="90">Last 90 days</SelectItem>
                          <SelectItem value="120">Last 6 months</SelectItem>
                          <SelectItem value="356">Last year</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 items-center">
                  <ChartContainer
                    config={{
                      resting: {
                        label: "Resting",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="w-full h-64"
                  >
                    <LineChart
                      accessibilityLayer
                      margin={{
                        left: 14,
                        right: 14,
                        top: 10,
                      }}
                      data={[
                        {
                          date: "2024-01-01",
                          trading: 62,
                        },
                        {
                          date: "2024-01-02",
                          trading: 72,
                        },
                        {
                          date: "2024-01-03",
                          trading: 35,
                        },
                        {
                          date: "2024-01-04",
                          trading: 62,
                        },
                        {
                          date: "2024-01-05",
                          trading: 52,
                        },
                        {
                          date: "2024-01-06",
                          trading: 62,
                        },
                        {
                          date: "2024-01-07",
                          trading: 70,
                        },
                      ]}
                    >
                      <CartesianGrid
                        strokeDasharray="4 4"
                        vertical={false}
                        stroke="hsl(var(--muted-foreground))"
                        strokeOpacity={0.5}
                      />
                      <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
                      <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            weekday: "short",
                          })
                        }}
                      />
                      <Line
                        dataKey="trading"
                        type="natural"
                        fill="var(--color-resting)"
                        stroke="var(--color-resting)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                          fill: "var(--color-resting)",
                          stroke: "var(--color-resting)",
                          r: 4,
                        }}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            indicator="line"
                            labelFormatter={(value) => {
                              return new Date(value).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })
                            }}
                          />
                        }
                        cursor={false}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            <div>
              <Button className="bg-[#2e3327] dark:bg-primary dark:hover:bg-primary/90 hover:bg-[#393d32] w-full py-5 mb-4">Create New Stock</Button>
              <Button className="bg-[#2e3327] dark:bg-primary dark:hover:bg-primary/90 hover:bg-[#393d32] w-full py-5">Manage Stocks</Button>
              <Card className="mt-6" x-chunk="dashboard-01-chunk-5">
                <CardHeader className="flex-row justify-between items-center">
                  <CardTitle>Market</CardTitle>
                  <Select>
                    <SelectTrigger className="w-[90px]">
                      <SelectValue placeholder="1 day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Duration</SelectLabel>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="120">6 months</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="flex items-center gap-4 px-2 py-2 bg-gray-100 dark:bg-gray-900 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer">
                    <Avatar className="hidden h-9 w-9 sm:flex justify-center items-center bg-blue-500 dark:text-white dark:bg-gray-800">
                      <SiAmazon className="w-7 h-7 p-1" />
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-semibold leading-none">
                        AMZN
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Amazon
                      </p>
                    </div>
                    <div className="ml-auto">
                      <p className="font-medium text-sm">$854.54</p>
                      <p className="font-medium text-sm text-green-500">+$23.41</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-2 py-2 bg-gray-100 dark:bg-gray-900 rounded-md">
                    <Avatar className="hidden h-9 w-9 sm:flex justify-center items-center bg-red-500 dark:text-white dark:bg-gray-800">
                      <SiNetflix className="w-7 h-7 p-1" />
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-semibold leading-none">
                        NTFX
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Neflix
                      </p>
                    </div>
                    <div className="ml-auto">
                      <p className="font-medium text-sm">$4,378.20</p>
                      <p className="font-medium text-sm text-green-500">+$39.00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-2 py-2 bg-gray-100 dark:bg-gray-900 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer">
                    <Avatar className="hidden h-9 w-9 sm:flex justify-center items-center bg-blue-500 dark:text-white dark:bg-gray-800">
                      <SiGoogle className="text-white w-7 h-7 p-1" />
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-semibold leading-none">
                        GOOGL
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Google
                      </p>
                    </div>
                    <div className="ml-auto">
                      <p className="font-medium text-sm">$2,753.11</p>
                      <p className="font-medium text-sm text-green-500">+$99.00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-2 py-2 bg-gray-100 dark:bg-gray-900 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer">
                    <Avatar className="hidden h-9 w-9 sm:flex justify-center items-center bg-yellow-500 dark:text-white dark:bg-gray-800">
                      <SiWise className="text-white w-7 h-7 p-1" />
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-semibold leading-none">
                        WSE
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Wise
                      </p>
                    </div>
                    <div className="ml-auto">
                      <p className="font-medium text-sm">$1,021.31</p>
                      <p className="font-medium text-sm text-red-500">-$299.00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-2 py-2 bg-gray-100 dark:bg-gray-900 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer">
                    <Avatar className="hidden h-9 w-9 sm:flex justify-center items-center bg-red-700 dark:text-white dark:bg-gray-800">
                      <SiMcdonalds className="text-white w-7 h-7 p-1" />
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-semibold leading-none">
                        MCD
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mcdonald
                      </p>
                    </div>
                    <div className="ml-auto">
                      <p className="font-medium text-sm">$854.54</p>
                      <p className="font-medium text-sm text-red-500">-$399.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

        </main>
      </div>
    </div>
  )
}