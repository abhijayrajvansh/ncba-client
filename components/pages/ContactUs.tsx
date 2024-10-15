'use client'

import { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Get in touch</h2>
        <p className="text-gray-400 mb-8">
          We're here to get you started with your open banking journey. Contact us now.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <Textarea
              placeholder="Tell us how we can help"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full"
              rows={4}
            />
          </div>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
