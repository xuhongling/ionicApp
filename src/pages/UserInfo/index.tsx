import React, { useState, useEffect } from 'react'
import { IonPage, IonContent } from '@ionic/react'
import styles from './style.less'

interface Props { }

const UserInfo: React.FC<Props> = () => {
	const [state, setState] = useState({
    
  })

  useEffect(()=>{
    
  }, [])

  return (
    <IonPage id="userInfo-page">
    	UserInfo
    </IonPage>
  )
}

export default UserInfo