import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@components/Layout';
import { ApolloProvider } from '@apollo/client';
import { client } from '@graphql/client';
import { ConfirmContextProvider } from '@contexts/confirmDialogContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ConfirmContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ConfirmContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
