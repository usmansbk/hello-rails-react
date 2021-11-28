export const getRandomGreeting = async () => {
  const response = await fetch("api/greeting");

  return response.json();
};
