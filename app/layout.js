import "./globals.css";

export const metadata = {
  title: "Next.js CICD App",
  description: "Next.js app with authentication and CI/CD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}