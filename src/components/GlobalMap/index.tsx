import React, { useRef, useEffect } from 'react'
import AMapLoader from '@amap/amap-jsapi-loader'
import { connect } from 'store/connect'
import { setGlobalMap } from 'store/globalMap/globalMap.actions'
import styles from './style.less'

interface StateProps {
  globalMap: any;
}

interface DispatchProps {
  setGlobalMap: typeof setGlobalMap;
}

interface MapProps extends StateProps,  DispatchProps { }

const GlobalMap: React.FC<MapProps> = ({ globalMap, setGlobalMap }) => {
	const mapEle = useRef<HTMLDivElement>(null)

	useEffect(() => {
    if (mapEle.current) {
      initMap()
    }
  }, [])

  useEffect(() => {
    console.log(globalMap,'globalMap--777777')
  }, [globalMap])

	const initMap = ()=> {
		AMapLoader.load({
			"key": "9502be4076a66142d4335dc088a93132",
			"version": "2.0",
			"plugins": []
		}).then((AMap)=>{ 
			const aMaps = new AMap.Map(mapEle.current,{
				zoom: 14,
		    center: [114.20, 30.62],
    		viewMode:'3D'
			})
			setGlobalMap(aMaps)
		}).catch(e => { 
			console.log(e)
		})
	}
  return (
    <div className={styles.container} ref={mapEle}></div>
  )
}

export default connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    globalMap: state.globalMap.globalMap,
  }),
  mapDispatchToProps: ({
    setGlobalMap
  }),
  component: GlobalMap
})
