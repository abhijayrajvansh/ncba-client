'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Send } from "lucide-react"

// Define the type for each endpoint response
type EndpointResponse = {
  method: string
  response: object
}

// Mock API endpoints
const mockEndpoints: Record<string, EndpointResponse> = {
  '/api/users': { method: 'GET', response: { users: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }] } },
  '/api/user': { method: 'POST', response: { message: 'User created successfully', id: 3 } },
  '/api/products': { method: 'GET', response: { products: [{ id: 1, name: 'Widget', price: 9.99 }, { id: 2, name: 'Gadget', price: 19.99 }] } },
}

export default function Sandbox () {
  const [endpoint, setEndpoint] = useState('/api/users')
  const [method, setMethod] = useState('GET')
  const [requestBody, setRequestBody] = useState('')
  const [response, setResponse] = useState('')
  const [responseStatus, setResponseStatus] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mockResponse = mockEndpoints[endpoint]
    if (mockResponse && mockResponse.method === method) {
      setResponseStatus('200 OK')
      setResponse(JSON.stringify(mockResponse.response, null, 2))
    } else {
      setResponseStatus('404 Not Found')
      setResponse(JSON.stringify({ error: 'Endpoint not found or method not supported' }, null, 2))
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">API Sandbox</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Request</CardTitle>
            <CardDescription>Configure your API request here</CardDescription>
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
              <TabsContent value="body" className="p-4 border rounded-md bg-gray-50">
                <pre className="whitespace-pre-wrap break-words">
                  <code>{response}</code>
                </pre>
              </TabsContent>
              <TabsContent value="headers" className="p-4 border rounded-md bg-gray-50">
                <p><strong>Status:</strong> {responseStatus}</p>
                <p><strong>Content-Type:</strong> application/json</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Available Endpoints</CardTitle>
          <CardDescription>Use these endpoints to test the sandbox</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            {Object.entries(mockEndpoints).map(([url, { method }]) => (
              <li key={url}>
                <code className="bg-gray-100 p-1 rounded">
                  <span className="text-blue-600">{method}</span> {url}
                </code>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
