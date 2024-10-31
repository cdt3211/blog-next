

export const authConfig = {
  pages: {
    signIn: '/user/login'
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.id = token.id;
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin');
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/user/login');

      if (isOnAdminPanel && !user) {
        return false;
      }

      if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.nextUrl));
      }

      return true;
    }
  }
}