import React, { useState, useEffect } from 'react'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
} from "@ionic/react"
import { connect } from 'store/connect'
import { setUserLogin } from 'store/author/author.actions'
import styles from './style.less'


interface StateProps {
  isAuth: boolean;
}

interface DispatchProps {
  setUserLogin: typeof setUserLogin;
}

interface LoginProps extends StateProps,  DispatchProps { }

const Login: React.FC<LoginProps> = ({ isAuth, setUserLogin }) => {
	console.log(isAuth,'isAuth')
	const [state, setState] = useState({
    username: ''
  })

  useEffect(()=>{
    
  }, [])

  const setUsername = (e:any)=> {
    console.log(e)
  }

  return (
    <IonPage>
    	<IonContent scrollY={false}>
        <div className={styles.loginList}>
          <IonInput name="username" type="text" value={state.username} spellCheck={false} autocapitalize="off" onIonChange={e => setUsername(e.detail.value!)} required>
          </IonInput>
        </div>
      </IonContent>
    </IonPage>
  )
}


export default connect<StateProps, {}, DispatchProps>({
  mapStateToProps: (state) => ({
    isAuth: state.author.isAuth
  }),
  mapDispatchToProps: ({
    setUserLogin
  }),
  component: Login
})