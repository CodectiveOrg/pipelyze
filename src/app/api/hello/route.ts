export async function GET() {
  return Response.json({
    message: `Hello, GET!`,
  });
}

export async function POST() {
  return Response.json({
    message: `Hello, POST!`,
  });
}
