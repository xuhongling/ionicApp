import React, { useState, useEffect } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import GlobalMap from 'components/GlobalMap'
import { connect } from 'store/connect'
import { setLoading, setData, setUsernameData } from 'store/user/user.actions'
import styles from './style.less'

interface StateProps {
  loading: boolean;
  data: any;
  username?: string;
}

interface DispatchProps {
  setLoading: typeof setLoading;
  setData: typeof setData;
  setUsernameData: typeof setUsernameData;
}

interface HomePageProps extends StateProps,  DispatchProps { }

const HomePage: React.FC<HomePageProps> = (props) => {

  let { loading, data, username, setUsernameData } = props

  useEffect(()=>{
    console.log(loading, data, username,'loading,data,username')
  }, [loading, data, username])

  const handleCilick = ()=> {
    let aa = {
      loading: true,
      data: 'dsds',
      username: 'string'
    }
    setData(aa)
    setUsernameData('handleCilick setUsernameData')
  }

  return (
    <IonPage id="home-page">
    	<IonContent>
    		<GlobalMap/>
    	</IonContent>
    </IonPage>
  )
}

export default connect<StateProps, {}, DispatchProps>({
  mapStateToProps: (state) => ({
    loading: state.user.loading,
    data: state.user.data,
    username: state.user.username
  }),
  mapDispatchToProps: ({
    setLoading,
    setData,
    setUsernameData
  }),
  component: HomePage
})