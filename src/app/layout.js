import './globals.css'

const montserrat = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: {
    100: '100',
    200: '200',
    300: '300',
    400: '400',
    500: '500',
    600: '600',
    700: '700',
    800: '800',
    900: '900',
  },
  fontStyle: {
    normal: 'normal',
    italic: 'italic',
  },
};

export const metadata = {
  title: 'BCR Construcoes e Incorporacoes',
  description: 'Site da BCR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{ fontFamily: montserrat.fontFamily }}>
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
