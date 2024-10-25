"use client";

import { useEffect, useState } from "react";
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
import { Send, Lock } from "lucide-react";
import CodeBlocks from "@/components/structures/CodeBlocks";
import SelectSDK from "@/components/structures/SelectSDK";
import { SdkType } from "@/types/codeSnippet-sdk.type";
import codeSnippets from "@/lib/codeSnippets";
import { mockEndpoints, defaultStatusMsg } from "@/lib/mockAPIendpoints";

export default function Sandbox() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [endpoint, setEndpoint] = useState("/api/accounts-info");
  const [method, setMethod] = useState("GET");
  const [requestBody, setRequestBody] = useState("");
  const [responseStatus, setResponseStatus] = useState("");
  const [headers, setHeaders] = useState({ "Subscription-Key": "" });
  const [selectedSdk, setSelectedSdk] = useState<SdkType>("javascript");

  // New: setting different initial responses based on authentication status
  const authenticatedResponse = JSON.stringify(
    { status: "waiting for request" },
    null,
    2
  );

  const [response, setResponse] = useState(
    isAuthenticated ? authenticatedResponse : defaultStatusMsg
  );

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);

    if (authStatus) {
      setHeaders({
        "Subscription-Key": "",
      });
      // Set response for authenticated users
      setResponse(authenticatedResponse);
    } else {
      // Reset to default response if not authenticated
      setResponse(defaultStatusMsg);
    }
  }, [isAuthenticated]);

  const isValidSubscriptionKey = (subscriptionKey: string) => {
    const response = false;

    // Validation logic for subscription keys
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
        JSON.stringify(
          { status: 403, error: "Missing subscription key" },
          null,
          2
        )
      );
      return;
    }

    // validating subscription keys
    if (!isValidSubscriptionKey(headers["Subscription-Key"])) {
      setResponseStatus("403 Forbidden");
      setResponse(
        JSON.stringify(
          {
            status: 403,
            error: "Invalid subscription key",
          },
          null,
          2
        )
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
          {
            status: 404,
            error: "Endpoint not found or method not supported",
          },
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
              </div>
              <Textarea
                placeholder="Request Body (JSON)"
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                rows={5}
              />
              {isAuthenticated ? (
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Request
                </Button>
              ) : (
                <Button disabled className="w-full">
                  {" "}
                  <Lock className="w-4 h-4 mr-2" /> Login to Continue
                </Button>
              )}
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
          <CodeBlocks enableCopyToClipboard language={"javascript"}>
            {codeSnippets(method, endpoint, headers, requestBody)[selectedSdk]}
          </CodeBlocks>
        </CardContent>
      </Card>
    </div>
  );
}
