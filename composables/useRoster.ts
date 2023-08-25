export const useRoster = () => {
  const headCoaches = [
    {
      firstName: "Mike",
      lastName: "Vavrek",
      positions: ["HC"],
    },
  ];

  const assistantCoaches = [
    {
      firstName: "Mike",
      lastName: "Hensler",
      positions: ["AC"],
    },
  ];

  const managers = [
    {
      firstName: "Aya Al",
      lastName: "Tekreeti",
      positions: ["M"],
      gradYear: 2024,
    },
    {
      firstName: "Patricia",
      lastName: "Galas",
      positions: ["M"],
      gradYear: 2025,
    },
  ];

  return {
    headCoaches,
    assistantCoaches,
    managers,
  };
}
