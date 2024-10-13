import { SdkType } from "@/types/codeSnippet-sdk.type";

const getCodeSnippets = (
  method: string,
  endpoint: string,
  headers: Record<string, string>,
  requestBody: string
): Record<SdkType, string> => {
  return {
    curl: `
      curl -X ${method} ${endpoint} -H "Subscription-Key: ${headers["Subscription-Key"]}"
    `,

    javascript: `
    fetch("${endpoint}", {
      method: "${method}",
      headers: {
        "Subscription-Key": "${headers["Subscription-Key"]}",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(${requestBody || {}}),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    `,

    python: `
    import requests

    response = requests.${method.toLowerCase()}("${endpoint}", headers={
      "Subscription-Key": "${headers["Subscription-Key"]}",
      "Content-Type": "application/json"
    }, 
    json=${requestBody || {}})
    print(response.json())
    `,

    java: `
    import java.io.*;
    import java.net.*;
  
    public class Main {
      public static void main(String[] args) throws Exception {
        URL url = new URL("${endpoint}");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("${method}");

        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("Subscription-Key", "${headers["Subscription-Key"]}");

        conn.setDoOutput(true);

        String jsonInputString = "${requestBody || {}}";

        try(OutputStream os = conn.getOutputStream()) {
          byte[] input = jsonInputString.getBytes("utf-8");
          os.write(input, 0, input.length);
        }
  
        int code = conn.getResponseCode();
        System.out.println(code);
  
          try(BufferedReader br = new BufferedReader(
            new InputStreamReader(conn.getInputStream(), "utf-8"))) {
            StringBuilder response = new StringBuilder();
            String responseLine;
            while ((responseLine = br.readLine()) != null) {
              response.append(responseLine.trim());
            }
          System.out.println(response.toString());
        }
      }
    }
    `,

    ruby: `
    require 'net/http'
    require 'json'
    
    uri = URI('${endpoint}')
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true if uri.scheme == 'https'

    request = Net::HTTP::${method.toUpperCase}.new(uri.path)
    request['Subscription-Key'] = '${headers["Subscription-Key"]}'
    request['Content-Type'] = 'application/json'
    request.body = ${requestBody || "{}"}.to_json
    
    response = http.request(request)
    puts response.body
    `,

    csharp: `
    using System;
    using System.Net.Http;
    using System.Text;
    using System.Threading.Tasks;

    class Program {
        private static async Task Main() {
            using (var client = new HttpClient()) {
                client.DefaultRequestHeaders.Add("Subscription-Key", "${headers["Subscription-Key"]}");

                var content = new StringContent("${requestBody || {}}", Encoding.UTF8, "application/json");
                var response = await client.${method}Async("${endpoint}", content);

                string result = await response.Content.ReadAsStringAsync();
                Console.WriteLine(result);
            }
        }
    }
    `,

    php: `
    <?php
    $url = '${endpoint}';
    $headers = [
        'Subscription-Key: ${headers["Subscription-Key"]}',
        'Content-Type: application/json'
    ];

    $data = ${requestBody || "{}"};

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${method}");
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
    ?>
    `,

    http: `
    GET ${endpoint}
    Content-Type: application/json
    Subscription-Key: ${headers["Subscription-Key"]}

    ${requestBody || ""}
    `
  };
};

export default getCodeSnippets;
