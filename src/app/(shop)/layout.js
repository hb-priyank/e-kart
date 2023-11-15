export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>This is shop group root layout</div>
        {children}
      </body>
    </html>
  );
}