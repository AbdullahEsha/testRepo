export async function GET(request) {
  const user = [
    { _id: "asv3ad912e1b1", name: "Jhone" },
    { _id: "hsd4ad912eew9", name: "Bob" },
  ];

  return new Response(JSON.stringify(user));
}
