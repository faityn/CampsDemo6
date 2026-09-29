import "./globals.css";

export const metadata = {
  title: "Mongolia Luxury Stays",
  description: "Experience luxury in the heart of Mongolia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
