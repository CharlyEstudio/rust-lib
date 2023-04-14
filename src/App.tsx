import React, { useEffect, useState } from "react";
const ffi = require('ffi-napi');

type Props = {
  n1?: number,
  n2?: number,
};

const MySum = ({n1 = 0, n2 = 0}: Props) => {
  const [suma, setSuma] = useState<number>(0);
  
  useEffect(() => {
    const lib = ffi.Library('../libs/crop-image', {'add2numbers': ['int', ['int', 'int']]});
    const result: number = lib.add2numbers(n1, n2);
    setSuma(result);
  }, [n1, n2]);

  return (
    <div>
      <h1>La suma es: {suma}</h1>
    </div>
  );
};

export default MySum;