import React, { useState, useEffect } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import { Redirect } from 'react-router-dom'
import GlobalMap from 'components/GlobalMap'
import { connect } from 'store/connect'
import styles from './style.less'

interface StateProps {
  isAuth: boolean;
}

const HomePage: React.FC<StateProps> = ({isAuth}) => {

  useEffect(()=>{
    console.log(isAuth,'loading,data,username')
  }, [isAuth])

  return (
    isAuth ?
    <IonPage id="home-page">
      <IonContent>
        <GlobalMap/>
      </IonContent>
    </IonPage>
    : <Redirect to="/login" />
  )
}

export default connect<{}, StateProps>({
  mapStateToProps: (state) => ({
    isAuth: state.author.isAuth
  }),
  component: HomePage
})