import React, { useState, useEffect } from 'react'
import { IonContent, IonPage, IonButton, IonList, IonItem, IonLabel, IonInput } from "@ionic/react"
import { Redirect } from 'react-router-dom'
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

  const handleClickLoginBtn = ()=> {
    setUserLogin(true)
  }

  return (
    <IonPage id="login-page">
      {isAuth ? <Redirect to='/home' /> : null}
    	<IonContent scrollY={false}>
        <div className={styles.loginPage}>
          <div className={styles.loginPageBG}>
            <div className={styles.logo}></div>
            <h3 className={styles.title}>武汉临空港智慧水务</h3>
            <div className={styles.login_bg}></div>
            <div className={styles.login_figure1}></div>
            <div className={styles.login_figure2}></div>
            <div className={styles.login_figure3}></div>
            <div className={styles.login_figure4}></div>
          </div>
          <IonList className={styles.loginList}>
            <IonItem className={styles.loginListItem}>
              <IonLabel position="floating" className={styles.floatIonLabel}>用户名</IonLabel>
              <IonInput name="username" type="text" value={state.username} spellCheck={false} autocapitalize="off" onIonChange={e => setUsername(e.detail.value!)} required></IonInput>
            </IonItem>
            <IonItem className={styles.loginListItem}>
              <IonLabel position="floating" className={styles.floatIonLabel}>密码</IonLabel>
              <IonInput name="username" type="text" value={state.username} spellCheck={false} autocapitalize="off" onIonChange={e => setUsername(e.detail.value!)} required></IonInput>
            </IonItem>
            <IonButton color="primary" expand="block" className={styles.loginBtn} onClick={handleClickLoginBtn}>登 录</IonButton>
          </IonList>
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