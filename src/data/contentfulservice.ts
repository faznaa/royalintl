import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

// Create the Contentful client
const client = createClient({
  space: '8qq0smhxo48j',
  environment: 'master',
  accessToken: 'jRxXJcQfR2YvMMNQzA-Ca5oaGHZeOq4PQbRfPw2lG6s'
});

// Custom hook to fetch an entry from Contentful
export const useEntry = () => {
  const [entry, setEntry] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await client.getEntry('4zzF86A44zrzbSZF1jZBgB');
        setEntry(response.fields);
      } catch (err:any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEntry();
  }, []);

  return { entry, loading, error };
};
