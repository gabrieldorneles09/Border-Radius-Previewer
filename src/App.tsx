import React from 'react';
import Previewer from './pages/Previewer';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Previewer />
      <GlobalStyle />
    </>
  );
};

export default App;
