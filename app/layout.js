import "./globals.css";

export const metadata = {
  title: "Qard - Your Wallet",
  description: "Qard is redefining the wallet experience by delivering top-level security, simplicity and accessibility.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-qard-dark">
        {children}
      </body>
    </html>
  );
}
