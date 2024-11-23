import { Inter, Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// Google Fonts
const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

// Import the local font
const geistMono = localFont({
  src: [
    {
      path: '/fonts/GeistMonoVF.woff', // Make sure to provide the full path to the file
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata = {
  title: 'Bourton-on-the-Water',
  description: 'The Venice of the Cotswolds - Discover the charm of this beautiful village',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              h1, h2, h3, h4, h5, h6 {
                font-family: ${playfair.style.fontFamily};
              }
            `,
          }}
        />
      </head>
      <body className={`${geistMono.className} ${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
