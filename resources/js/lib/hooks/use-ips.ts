import { useEffect, useState } from 'react';

export function useIps() {
  const [ipv4, setIpv4] = useState<string | undefined | null>(undefined);
  const [ipv6, setIpv6] = useState<string | undefined | null>(undefined);

  const getIpv4 = () => {
    return new Promise<string | null>((resolve) => {
      window.axios.get<{ ipv4: string }>(route('ip.v4'))
        .then((res) => resolve(res.data.ipv4))
        .catch(() => resolve(null));
    });
  };

  const getIpv6 = () => {
    return new Promise<string | null>((resolve) => {
      window.axios.get<{ ipv6: string }>(route('ip.v6'))
        .then((res) => resolve(res.data.ipv6))
        .catch(() => resolve(null));
    });
  };

  useEffect(() => {
    getIpv4().then((res) => setIpv4(res));
  }, []);

  useEffect(() => {
    getIpv6().then((res) => setIpv6(res));
  }, []);

  return {ipv4, ipv6};
}