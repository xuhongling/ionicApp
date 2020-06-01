import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonRouterOutlet, IonSplitPane } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import Login from 'pages/Login'
import NavTabs from 'pages/NavTabs'

const routerMap: React.FC = () => (
  <IonReactRouter>
    <IonSplitPane contentId="main">
      <IonRouterOutlet id="main">
    		<Route path="/home" component={NavTabs} exact={true}/>
        <Route path="/" render={() => <Redirect to="/home"/>} exact={true}/>
        <Route path="/login" component={Login} exact={true} />
      </IonRouterOutlet>
    </IonSplitPane>
  </IonReactRouter>
)

export default routerMap