import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
export const fetchData = async (variant: string, selectedTabs: string) => {
  const query = groq`*[_type == "product" && variant == "${variant}"] | order(name asc)`;
  console.log(query);
  const params = { variant: selectedTabs.toLocaleLowerCase() };

  try {
    const res = await client.fetch(query, params);
    console.log('RESPONSE=>>>', await res);

    return res;
  } catch (error) {
    console.log('Product fetching Error', error);
  }
};
