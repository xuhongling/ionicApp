import React from 'react'
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react'
import { Route } from 'react-router'
import { map, barChart, receipt, person} from 'ionicons/icons'
import HomePage from 'pages/HomePage'
import DataSummary from 'pages/DataSummary'
import Inspection from 'pages/Inspection'
import UserInfo from 'pages/UserInfo'

interface NavTabsProps {}

const NavTabs: React.FC<NavTabsProps> = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
     		<Route path="/home" component={HomePage} exact={true} />
    		<Route path="/dataSummary" component={DataSummary} />
        <Route path="/inspection" component={Inspection} />
    		<Route path="/userInfo" component={UserInfo} />
      </IonRouterOutlet>

    	<IonTabBar slot="bottom">
	      <IonTabButton tab="home" href="/home">
	        <IonIcon icon={map} />
	        <IonLabel>首页</IonLabel>
	      </IonTabButton>

	      <IonTabButton tab="dataSummary" href="/dataSummary">
	        <IonIcon icon={barChart} />
	        <IonLabel>数据总览</IonLabel>
	      </IonTabButton>

	      <IonTabButton tab="inspection" href="/inspection">
	        <IonIcon icon={receipt} />
	        <IonLabel>事件管理</IonLabel>
	      </IonTabButton>
 
	      <IonTabButton tab="userInfo" href="/userInfo">
	        <IonIcon icon={person} />
	        <IonLabel>我的</IonLabel>
	      </IonTabButton>
	    </IonTabBar>
    </IonTabs>
  )
}

export default NavTabs