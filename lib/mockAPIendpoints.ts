import { EndpointResponse } from '@/types/endpointResponse.types'

export const defaultStatusMsg = `{ 
  "status": 403,
  "message": "missing subscription key, login to generate key"
}`

export const mockEndpoints: Record<string, EndpointResponse> = {
  "/api/accounts-info": {
    method: "GET",
    response: {
      accounts: [
        { "status": 200, "message": "success" },
        {
          "id": "bgfh-jjds-23kj-74de",
          "AccountNo": "1234567890",
          "AccountName": "John Doe",
          "AccountCcy": "GBP",
          "AvailableBalance": 592676.32
        }
      ],
    },
  },
  
};