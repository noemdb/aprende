import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
/*
export const GET = async (req: Request) => {
  console.log('GET /api/auth request:', req.url);
  return handlers.GET(req);
}

export const POST = async (req: Request) => {
  console.log('POST /api/auth request:', req.url);
  return handlers.POST(req);
}
*/
