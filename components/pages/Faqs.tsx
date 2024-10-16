import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQPage = () => {
  const faqItems = [
    {
      question: "How do I sign up for the open banking API?",
      answer: "To sign up for the open banking API, please visit our developer portal and follow the registration process. You'll need to provide some basic information about your project and agree to our terms of service."
    },
    {
      question: "How do I test my API integration on the Sandbox?",
      answer: "You can test your API integration on our Sandbox environment by using the provided test credentials. Our documentation includes step-by-step guides on how to set up and run test scenarios."
    },
    {
      question: "What is the response time for support queries on the Sandbox?",
      answer: "We aim to respond to all support queries on the Sandbox within 24 hours. For urgent issues, please use the priority support channel available in your developer dashboard."
    },
    {
      question: "How do I escalate a support query on the Sandbox?",
      answer: "If you need to escalate a support query, you can use the 'Escalate' button in your support ticket. This will prioritize your issue for our senior support team to review."
    },
    {
      question: "What happens if my API integration encounters an error in production?",
      answer: "If your API integration encounters an error in production, our system will automatically log the issue and alert our support team. We recommend implementing proper error handling in your application to gracefully manage any unexpected issues."
    },
  ];

  return (
    <div className="container flex justify-center mx-auto p-8 bg-gray-50 my-20 rounded">
      <div className="w-1/2 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-900 ">Frequently asked questions</h1>
        <p className="text-center mb-8 text-gray-600">
          We understand that integrating APIs can be complex, but we are with you every step on the way. Here are some questions that might help you get started
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-md font-semibold ">{item.question}</AccordionTrigger>
              <AccordionContent className='text-gray-600'>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;