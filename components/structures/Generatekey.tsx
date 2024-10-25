'use client'

import { Copy, Check } from "lucide-react"
import { useState, useRef } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogCloseButton() {
  const [copied, setCopied] = useState(false)
  const inputRef = useRef(null)
  const subscriptionKey = "bjHY1LOwXfIzBwJXYnR4hCLcrO7sN2mz5gM2hTNqO8"

  const handleCopy = () => {
    if (inputRef.current) {
      // Select the text
      //@ts-ignore
      inputRef.current.select()
      // Copy it
      document.execCommand('copy')
      // Show feedback
      setCopied(true)
      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-black mt-5" variant="outline">Generate Subscription Key</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Copy Subscription Key</DialogTitle>
          <DialogDescription>
            Anyone who has this key will be able to use apis.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Your Subscription Key
            </Label>
            <Input
              ref={inputRef}
              id="link"
              defaultValue={subscriptionKey}
              readOnly
            />
          </div>
          <Button 
            onClick={handleCopy}
            type="button"
            size="sm" 
            className="px-3"
            variant="outline"
          >
            <span className="sr-only">Copy</span>
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}