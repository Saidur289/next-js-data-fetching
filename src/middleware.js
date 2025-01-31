import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server";

export const middleware = async(req) => {
    const token = await getToken({req})
    // if(token) return console.log('middleware', token);
    const isTokenOK = Boolean(token)
    const isAdminUser = token?.role == 'admin'
    const isAdminSpecificRole = req.nextUrl.pathname.startsWith('/dashboard')
     if(isAdminSpecificRole && !isAdminUser){
        const callbackUrl = encodeURIComponent(req.nextUrl.pathname)
           return NextResponse.redirect(new URL(`/api/auth/signin?callback=${callbackUrl}`, req.url))
    }
    return NextResponse.next()
}