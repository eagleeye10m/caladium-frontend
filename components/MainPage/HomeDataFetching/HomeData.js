export const fetchData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      next: {
        revalidate: 60,
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
    return;
  }
};
