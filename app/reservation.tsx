import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";

const reservations = [
  {
    name: "John Doe",
    resNo: "RES12345",
    status: "Pending",
    email: "john.doe@example.com",
    phone: "+1 234-567-890",
    checkin: "01/01/2024",
    checkout: "01/05/2024",
    bookingDate: "12/25/2023",
    guests: 1,
    total: 500,
    due: 200,
  },
  {
    name: "Jane Smith",
    resNo: "RES67890",
    status: "Cancelled",
    email: "jane.smith@example.com",
    phone: "+1 987-654-321",
    checkin: "02/01/2024",
    checkout: "02/03/2024",
    bookingDate: "01/15/2024",
    guests: 1,
    total: 300,
    due: 100,
  },
  {
    name: "Manoj",
    resNo: "RES67890",
    status: "Confirmed",
    email: "niks@live.in",
    phone: "+1 987-654-321",
    checkin: "02/01/2024",
    checkout: "02/03/2024",
    bookingDate: "01/15/2024",
    guests: 1,
    total: 300,
    due: 100,
  },
  {
    name: "Robert Chen",
    resNo: "123456",
    status: "Confirmed",
    email: "robert.chen@example.com",
    phone: "+1 987-654-321",
    checkin: "02/01/2024",
    checkout: "02/03/2024",
    bookingDate: "01/15/2024",
    guests: 1,
    total: 300,
    due: 100,
  },
  {
    name: "Sarah Johnson",
    resNo: "RES67890",
    status: "Pending",
    email: "sarah@example.com",
    phone: "+1 987-654-321",
    checkin: "02/01/2024",
    checkout: "02/03/2024",
    bookingDate: "01/15/2024",
    guests: 1,
    total: 300,
    due: 100,
  },
  {
    name: "Michael Brown",
    resNo: "RES67890",
    status: "Confirmed",
    email: "michael@example.com",
    phone: "+1 987-654-321",
    checkin: "02/01/2024",
    checkout: "02/03/2024",
    bookingDate: "01/15/2024",
    guests: 1,
    total: 300,
    due: 100,
  },
  {
    name: "Emma Wilson",
    resNo: "RES67890",
    status: "Confirmed",
    email: "emma@example.com",
    phone: "+1 987-654-321",
    checkin: "02/01/2024",
    checkout: "02/03/2024",
    bookingDate: "01/15/2024",
    guests: 1,
    total: 300,
    due: 100,
  },
  {
    name: "David Lee",
    resNo: "RES67890",
    status: "Pending",
    email: "david@example.com",
    phone: "+1 987-654-321",
    checkin: "02/01/2024",
    checkout: "02/03/2024",
    bookingDate: "01/15/2024",
    guests: 1,
    total: 300,
    due: 100,
  },
  {
    name: "Lisa Anderson",
    resNo: "RES67890",
    status: "Confirmed",
    email: "lisa@example.com",
    phone: "+1 987-654-321",
    checkin: "02/01/2024",
    checkout: "02/03/2024",
    bookingDate: "01/15/2024",
    guests: 1,
    total: 300,
    due: 100,
  },
];

export default function ReservationsGrid() {
  return (
    <div className="min-h-screen w-full bg-black text-white p-6 flex flex-col">
      <h1 className="text-3xl font-bold text-white mb-6">Reservations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {reservations.map((res, index) => (
          <Card key={index} className="bg-blacktext-white rounded-lg shadow-lg border border-gray-700">
            <CardContent className="p-5 space-y-4">
              {/* Header Section */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="bg-blue-500 text-white flex items-center justify-center w-10 h-10 rounded-full">{res.name.charAt(0)}</Avatar>
                    <div>
                      <h3 className="text-white text-lg font-semibold">{res.name}</h3>
                      <p className="text-gray-400 text-sm">Res No: {res.resNo}</p>
                    </div>
                  </div>
                  <Badge
                    className={`text-sm px-3 py-1 ${
                      res.status === "Confirmed"
                        ? "bg-green-500"
                        : res.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {res.status}
                  </Badge>
                </div>
                <div className="border-b border-gray-700 mt-2"></div>
              </div>

              {/* Content Section: Two-Column Layout */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                {/* Left Column: Booking Details */}
                <div className="space-y-1 text-gray-300">
                  <p>
                    <span className="text-gray-400">Check-in / Check-out:</span>
                    <br />
                    {res.checkin} - {res.checkout}
                  </p>
                  <p>
                    <span className="text-gray-400">Booking Date:</span>
                    <br />
                    {res.bookingDate}
                  </p>
                  <p>
                    <span className="text-gray-400">Guests:</span> {res.guests}
                  </p>
                  <Button variant="default" className="rounded-lg border-white border-1 text-white hover:bg-gray-700 mt-2">
                    View Room
                  </Button>
                </div>

                {/* Right Column: Contact & Payment Details */}
                <div className="space-y-1 text-gray-300">
                  <p>
                    <Mail className="inline-block w-4 h-4 mr-1 text-gray-400" /> {res.email}
                  </p>
                  <p>
                    <Phone className="inline-block w-4 h-4 mr-1 text-gray-400" /> {res.phone}
                  </p>
                  <p className="font-semibold mt-16">
                    Total: <span className="text-gray-100">${res.total}</span>
                  </p>
                  <Badge className={res.due > 0 ? "bg-red-500 " : "bg-green-500 "}>Due: ${res.due}</Badge>
                </div>
                
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
