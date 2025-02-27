import Container from '@/components/Container';
import Title from '@/components/Title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqsData } from '@/constants';
import React from 'react';

const page = () => {
  return (
    <Container className="max-w-4xl sm:px-6 lg:px-7 py-12">
      <Title>Frequently Asked Questions</Title>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-0"
      >
        {faqsData.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="group">
            <AccordionTrigger className="text-left text-lg font-semibold text-darkColor/80 hover-group:text-darkColor hoverEffect">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default page;
