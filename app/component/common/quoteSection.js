import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Reply } from "lucide-react";

const QuoteSection = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div>
          <div className="text-center lg:text-left mb-8">
            <h5 className="text-primary text-sm font-bold uppercase">Request A Quote</h5>
            <h1 className="text-4xl font-extrabold">Need A Free Quote? Please Feel Free to Contact Us</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center">
              <Reply className="text-primary mr-3" size={32} />
              <h5 className="text-lg">Reply within 24 hours</h5>
            </div>
            <div className="flex items-center">
              <Phone className="text-primary mr-3" size={32} />
              <h5 className="text-lg">24 hrs telephone support</h5>
            </div>
          </div>
          <p className="text-gray-600 mb-8">
            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua.
          </p>
          <div className="flex items-center">
            <div className="bg-primary p-4 rounded-full">
              <Phone className="text-white" size={28} />
            </div>
            <div className="ml-4">
              <h5 className="font-medium">Call to ask any question</h5>
              <h4 className="text-primary text-xl font-bold">+012 345 6789</h4>
            </div>
          </div>
        </div>

        {/* Quote Form Section */}
        <Card className="shadow-lg p-8">
          <CardContent>
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" className="w-full" />
              <Input type="email" placeholder="Your Email" className="w-full" />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select A Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="service1">Service 1</SelectItem>
                  <SelectItem value="service2">Service 2</SelectItem>
                  <SelectItem value="service3">Service 3</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Message" rows={4} className="w-full" />
              <Button type="submit" className="w-full py-3 bg-dark text-white hover:bg-gray-800">
                Request A Quote
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuoteSection;
