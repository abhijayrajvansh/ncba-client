"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Send } from "lucide-react";
import CodeBlocks from "@/components/structures/CodeBlocks";
import SelectSDK from "@/components/structures/SelectSDK";
import { SdkType } from "@/types/codeSnippet-sdk.type";
import codeSnippets from '@/lib/codeSnippets';

type EndpointResponse = {
  method: string;
  response: object;
};

// mocking sample api endpoints
const mockEndpoints: Record<string, EndpointResponse> = {
  "/api/users": {
    method: "GET",
    response: {
      users: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
      ],
    },
  },
  "/api/user": {
    method: "POST",
    response: { message: "User created successfully", id: 3 },
  },
  "/api/products": {
    method: "GET",
    response: {
      products: [
        { id: 1, name: "Widget", price: 9.99 },
        { id: 2, name: "Gadget", price: 19.99 },
      ],
    },
  },
};

export default function Sandbox() {
  const [endpoint, setEndpoint] = useState("/api/users");
  const [method, setMethod] = useState("GET");
  const [requestBody, setRequestBody] = useState("");
  const [response, setResponse] = useState(
    '{ "status": "Waiting for request" }'
  );
  const [responseStatus, setResponseStatus] = useState("Waiting for request");
  const [headers, setHeaders] = useState({ "Subscription-Key": "" });
  const [selectedSdk, setSelectedSdk] = useState<SdkType>("javascript");

  const isValidSubscriptionKey = (subscriptionKey: string) => {
    const response = false;

    // validation logic for subs keys
    if (subscriptionKey === "bjHY1LOwXfIzBwJXYnR4hCLcrO7sN2mz5gM2hTNqO8")
      return true;

    return response;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mockResponse = mockEndpoints[endpoint];

    // checking for subscription key
    if (!headers["Subscription-Key"]) {
      setResponseStatus("403 Forbidden");
      setResponse(
        JSON.stringify({ error: "Missing subscription key" }, null, 2)
      );
      return;
    }

    // validating subscription keys
    if (!isValidSubscriptionKey(headers["Subscription-Key"])) {
      setResponseStatus("403 Forbidden");
      setResponse(
        JSON.stringify({ error: "Invalid subscription key" }, null, 2)
      );
      return;
    }

    if (mockResponse && mockResponse.method === method) {
      setResponseStatus("200 OK");
      setResponse(JSON.stringify(mockResponse.response, null, 2));
    } else {
      setResponseStatus("404 Not Found");
      setResponse(
        JSON.stringify(
          { error: "Endpoint not found or method not supported" },
          null,
          2
        )
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">API Sandbox</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Request</CardTitle>
                <CardDescription>
                  Configure your API request here
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-2">
                <Select value={method} onValueChange={setMethod}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GET">GET</SelectItem>
                    <SelectItem value="POST">POST</SelectItem>
                    <SelectItem value="PUT">PUT</SelectItem>
                    <SelectItem value="DELETE">DELETE</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="API Endpoint"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  className="flex-grow"
                />
              </div>
              <div className="flex items-center gap-3">
                <Input
                  disabled
                  placeholder="Subscription Key"
                  value={headers["Subscription-Key"]}
                  onChange={(e) =>
                    setHeaders({
                      ...headers,
                      "Subscription-Key": e.target.value,
                    })
                  }
                  className="w-full"
                />
                <Button
                  type="button"
                  onClick={() =>
                    setHeaders({
                      "Subscription-Key":
                        "bjHY1LOwXfIzBwJXYnR4hCLcrO7sN2mz5gM2hTNqO8",
                    })
                  }
                >
                  Generate Key
                </Button>
              </div>
              <Textarea
                placeholder="Request Body (JSON)"
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                rows={5}
              />
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Request
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Response</CardTitle>
            <CardDescription>View the API response here</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="body" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="body">Body</TabsTrigger>
                <TabsTrigger value="headers">Headers</TabsTrigger>
              </TabsList>
              <TabsContent
                value="body"
                className="p-4 border rounded-md bg-gray-50"
              >
                <pre className="whitespace-pre-wrap break-words">
                  <CodeBlocks language="javascript">{response}</CodeBlocks>
                </pre>
              </TabsContent>
              <TabsContent
                value="headers"
                className="p-4 border rounded-md bg-gray-50"
              >
                <p>
                  <strong>Status:</strong> {responseStatus}
                </p>
                <p>
                  <strong>Content-Type:</strong> application/json
                </p>
                <p>
                  <strong>Subscription-Key:</strong>{" "}
                  {headers["Subscription-Key"] || "None"}
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>SDK Code Snippet</CardTitle>
            <SelectSDK setSdk={setSelectedSdk} />
          </div>
          <CardDescription>
            Here is the code snippet for: {selectedSdk.toUpperCase()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlocks
            enableCopyToClipboard
            language={"javascript"}
          >
            {codeSnippets(method, endpoint, headers, requestBody)[selectedSdk]}
          </CodeBlocks>
        </CardContent>
      </Card>
    </div>
  );
}
