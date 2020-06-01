import React, { useState, useEffect } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import styles from './style.less'

interface Props { }

const DataSummary: React.FC<Props> = () => {
	const [state, setState] = useState({
    
  })

  useEffect(()=>{
    
  }, [])

  return (
    <IonPage id="dataSummary-page">
    	DataSummary
    </IonPage>
  )
}

export default DataSummary