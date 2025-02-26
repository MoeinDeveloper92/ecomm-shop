import { requiredUser } from '@/hooks/requireUser';
import React from 'react';

const page = async () => {
  await requiredUser();
  return <div>page</div>;
};

export default page;
