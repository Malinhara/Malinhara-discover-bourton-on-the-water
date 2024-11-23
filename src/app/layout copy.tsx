import { Inter, Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

// Import the local font
const geistMono = localFont({
  src: [
    {
      path: 'public/public/fonts', // Correct path to font in public folder
      weight: '400', // Specify the weight
      style: 'normal', // Specify the style (e.g., normal, italic)
    },
  ],
  display: 'swap', // Optional: ensures text remains visible while the font is loading
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
