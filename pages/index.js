import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function eCommerce() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/authentication/sign-in');
  }, []);

  return null; // This ensures nothing is rendered
}
