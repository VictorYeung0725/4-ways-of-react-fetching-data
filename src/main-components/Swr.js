import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

//NOTE
//Swr help u to easilly get the data but not fetch API,
// still have to use fetch API such as Axios or Fetch

const fetcher = (...args) => fetch(...args).then((response) => response.json()); //return a promise

// const data = fetcher('https://dog.ceo/api/breeds/image/random').then((data) =>
//   console.log(data)
// );
// console.log(data);

//NOTE
//optional chaining for handle the null situation

//NOTE
//By using SWR, passing a {suspense:true} of loading indicator

//NOTE SWR can also handling Error

function Swr() {
  const { data, error } = useSWR(
    'https://dog.ceo/api/breeds/image/random',
    fetcher,
    {
      suspense: true,
    }
  );

  if (error) {
    console.log(error);
    return <h2>There was an error</h2>;
  }

  return (
    <div>
      <img width={500} src={data?.message} />
    </div>
  );
}

export default Swr;
