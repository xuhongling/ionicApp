import React, { useState, useEffect } from 'react'
import { IonPage, IonContent } from '@ionic/react'
import styles from './style.less'

interface Props { }

const Inspection: React.FC<Props> = () => {
	const [state, setState] = useState({
    
  })

  useEffect(()=>{
    
  }, [])

  return (
    <IonPage id="inspection-page">
    	Inspection
    </IonPage>
  )
}

export default Inspection