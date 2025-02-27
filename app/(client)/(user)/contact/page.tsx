import Container from '@/components/Container';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const page = () => {
  return (
    <Container className="max-w-3xl mx-auto sm:px-5 lg:px-8">
      <h1 className="text-xl font-bold my-6 ">Contact Us</h1>
      <p className="mb-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quaerat
        esse illum&apos; voluptas porro obcaecati ea velit non, alias
        laudantium!
      </p>

      <form className="space-y-4 mb-5">
        <div className="space-y-0.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md "
          />
        </div>
        <div className="space-y-0.5">
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="name"
            className="w-full resize-none px-3 py-2 border border-gray-300 rounded-md "
          />
        </div>

        <button
          type="submit"
          className="bg-darkText text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-darkColor hoverEffect"
        >
          Send Message
        </button>
      </form>
    </Container>
  );
};

export default page;
