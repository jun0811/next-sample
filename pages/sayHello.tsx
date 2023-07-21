import React, { useEffect, useState } from "react";

const SayHello = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((res) => setData(res.name));

    return () => {};
  }, []);

  return <div>data : {data}</div>;
};

export default SayHello;
