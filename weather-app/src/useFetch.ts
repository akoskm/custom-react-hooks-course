import { useState, useEffect } from 'react';
const useFetch = (url: string) => {
  const [data, setData] = useState({
    location: '',
    temperature: ''
  })
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response is not OK');
        }
        const { results } = await response.json();
        const [{ name, TD }] = results;
        setData({
          location: name,
          temperature: TD
        })
      } catch (error) {
        const message = (error as Error).message;
        setErrors(message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    errors
  }
}
export default useFetch;