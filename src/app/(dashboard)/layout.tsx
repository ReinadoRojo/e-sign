import { getUserOrRedirect } from "@propelauth/nextjs/server/app-router";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await getUserOrRedirect();

  return (
    <>
      {/* Sidebar / Header */}
      {children}
    </>
  )
}