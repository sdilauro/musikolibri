import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function myMiddleware(request: NextRequest) {
  // Redirect the request to a different URL
  return NextResponse.redirect('/new-url');
  // Rewrite the response to display content from a different URL
  return NextResponse.rewrite('/new-content');
  // Set response headers and cookies
  const response = NextResponse.next();
  response.headers.set('X-Custom-Header', 'Hello, Middleware!');
  response.cookies.set('myCookie', '123');
  return response;
}