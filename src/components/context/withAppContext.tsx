import React from 'react';
import { Subtract } from 'utility-types';

import AppContext, { IAppContext } from './AppContext';

const withAppContext = <P extends IAppContext>
  (Component: React.FC<P>): React.FC<Subtract<P, IAppContext>> =>  
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
