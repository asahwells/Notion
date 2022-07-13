import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Home from './src/component/Home';
// import {, InMemoryCache} from '@apollo/client';
// import {gql} from '@apollo/client';
// import {createClient, Provider} from 'urql';
const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:9002/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
