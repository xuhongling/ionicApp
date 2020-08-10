import React, { useRef, useEffect } from 'react'
import AMapLoader from '@amap/amap-jsapi-loader'
import { connect } from 'store/connect'
import { setGlobalMap } from 'store/globalMap/globalMap.actions'
import { setAMapFn } from 'store/AMapFn/AMapFn.actions'
import styles from './style.less'

interface StateProps {
  globalMap: any;
}

interface DispatchProps {
  setGlobalMap: typeof setGlobalMap;
  setAMapFn: typeof setAMapFn;
}

interface MapProps extends StateProps,  DispatchProps { }

const GlobalMap: React.FC<MapProps> = ({ globalMap, setGlobalMap, setAMapFn }) => {
	const mapEle = useRef<HTMLDivElement>(null)

	useEffect(() => {
    if (mapEle.current) {
      initMap()
    }
  }, [])

  useEffect(() => {
    if (globalMap !== null) {
      console.log(globalMap,'globalMap')
    }
  }, [globalMap])

	const initMap = ()=> {
		AMapLoader.load({
			"key": "9502be4076a66142d4335dc088a93132",
			"version": "2.0",
			"plugins": []
		}).then((AMap)=>{
			const aMaps = new AMap.Map(mapEle.current,{
				zoom: 11,
		    center: [116.418261, 39.921984],
    		viewMode:'3D'
			})
      setAMapFn(AMap)
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
    setGlobalMap,
    setAMapFn
  }),
  component: GlobalMap
})
