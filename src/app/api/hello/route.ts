export async function GET(): Promise<Response> {
  return Response.json({
    message: `Hello, GET!`,
  });
}

export async function POST(): Promise<Response> {
  return Response.json({
    message: `Hello, POST!`,
  });
}
