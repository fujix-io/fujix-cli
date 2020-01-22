import React from 'react';
import { Subtract } from 'utility-types';

import AppContext, { AppContextType } from './AppContext';

const withAppContext = <P extends AppContextType>
  (Component: React.FC<P>): React.FC<Subtract<P, AppContextType>> =>
    (props =>
      <AppContext.Consumer>
        {context =>
          <Component
            {...props as P}
            {...context}
          />
        }
    </AppContext.Consumer>);

export default withAppContext;
