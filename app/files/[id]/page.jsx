import React from "react";

const fetchData = async (id) => {
  const res = await fetch(`http://127.0.0.1:8000/files/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
};

async function home({ params: { id } }) {
  const { title, address, rent_price, updated_at } = await fetchData(id);

  return (
    <div>
      <h1 className="text-blue-400">this is home:{title}</h1>
      <address>this is address: {address}</address>
      <span>this is the price :{rent_price}</span>
      <br />
      <span>this house was updated at: {updated_at}</span>
    </div>
  );
}

//export async function generateStaticParams() {}
export default home;
