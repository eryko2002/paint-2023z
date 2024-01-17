'use client';

import { useEffect, useState } from 'react';

export default function Cennik() {
  const [prices, setPrices] = useState<Prices>();

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/cennik')
      .then((response) => response.json())
      .then((data) => {
        setPrices(data);
      });
  }, []);
  return (
    <>
      <h1>Cennik</h1>
      {prices?.reduced}
      {prices?.normal}
      {prices?.reduced3D}
      {prices?.normal3D}
    </>
  );
}
