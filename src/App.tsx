import React from 'react'
import { IonApp } from '@ionic/react'
import { AppContextProvider } from 'store/AppContext'
import RouterMap from "@/router/routerMap"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import 'static/theme/variables.css'
import 'static/normalize.css'

interface Props { }

const IonicApp: React.FC<Props> = () => (
  <IonApp>
    <RouterMap/>
  </IonApp>
)

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonicApp />
    </AppContextProvider>
  );
};

export default App
