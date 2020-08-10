import React, { useState, useEffect } from 'react'
import { connect } from 'store/connect'
import heatmapData from 'static/heatmapData'

interface StateProps {
  globalMap: any;
  AMapFn: any
}

interface DispatchProps {}

interface HeatmapProps extends StateProps,  DispatchProps { }

const Heatmap: React.FC<HeatmapProps> = ({globalMap, AMapFn}) => {
	const [state, setState] = useState({
    
  })

  useEffect(()=>{
    if (globalMap !== null) {
    	loadHeatmapData()
    }
  }, [globalMap])

  const loadHeatmapData = ()=> {
		//详细的参数,可以查看heatmap.js的文档 http://www.patrick-wied.at/static/heatmapjs/docs.html
		//参数说明如下:
		/* visible 热力图是否显示,默认为true
		 * opacity 热力图的透明度,分别对应heatmap.js的minOpacity和maxOpacity
		 * radius 势力图的每个点的半径大小
		 * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
		 *	{
		 .2:'rgb(0, 255, 255)',
		 .5:'rgb(0, 110, 255)',
		 .8:'rgb(100, 0, 255)'
		 }
		 其中 key 表示插值的位置, 0-1
		 value 为颜色值
		 */
		globalMap.plugin(["AMap.HeatMap"], function () {
			let AMap:any = AMapFn
			//初始化heatmap对象
			let heatmap = new AMap.HeatMap(globalMap, {
				radius: 25, //给定半径
				opacity: [0, 0.8],
				gradient:{
					0.5: '#bdf6ac',
					0.65: '#87c185',
					0.7: '#93caf9',
					0.9: '#504cf0',
					1.0: '#ff4cf9'
				}
			});
			//设置数据集：该数据为北京部分“公园”数据
			heatmap.setDataSet({
				data: heatmapData,
				max: 100
			});
		});
  }

  return (
    <React.Fragment></React.Fragment>
  )
}

export default connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    globalMap: state.globalMap.globalMap,
    AMapFn: state.AMapFn.AMapFn
  }),
  mapDispatchToProps: ({

  }),
  component: Heatmap
})