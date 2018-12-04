
export default{
    namespaced: true,
    state: {
        curPage:1,
        eachPage:10,
        total:0,
        maxPage:0,
        rows: [],
        shopEmployeeId:"",
    },
    mutations: {// 用于同步方法

        getOutletsByPage(state, payload){
            // for(let key in state){
            //     state[key] = payload[key]
            // }
            Object.assign(state, payload)
        },

        getShopEmployeeByPage(state, payload){
            payload.rows.map(item => {
                state.shopEmployeeId = item._id
                item.shopEmployee.map(itm =>{
                    state.rows.push(Object.assign(itm,{shopEmployeeId:state.shopEmployeeId}))
                })
            })
        },

        setCurPage(state, curPage) {
            state.curPage = curPage
        },
        
        setEachPage(state, eachPage){
            state.eachPage = eachPage
        },

    },
    actions: {// 用于异步方法

        // 获取所有门店信息
        async getOutletsByPageAsync(context, { curPage = 1, eachPage = 10 } = {}){
        const data = await fetch(`/outlets/getOutletsByPage?curPage=${curPage}&eachPage=${eachPage}`)
            .then(response => response.json())
        context.commit("getOutletsByPage",data)
        },

        // 新增门店信息
        async addOutletsAsync(context, msg){
            await fetch('/outlets/addOutlets',{
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body:JSON.stringify(msg)
            })
        },

        // 修改门店信息
        async updateOutletsByIdAsync(context, msg){
            await fetch('/outlets/updateOutletsById',{
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body:JSON.stringify(msg)
            })
        },

        // 获取门店图片信息
        async getOutletsImgsByIdAsync(context, msg){
            await fetch('/outlets/getOutletsImgsById',{
                method: 'get',
                headers: {
                    "Content-type": "application/json"
                },
                body:JSON.stringify(msg)
            })
        },

        //上传门店图片信息
        async OutletsFileUploadAsync(context,msg){
            await fetch('outlets/OutletsFileUpload',{
                method:'post',
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify(msg)
            })
        },

        // 新增店员信息
        async addShopEmployeeAsync(context, msg){
            await fetch('/shopEmployee/addShopEmployee',{
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body:JSON.stringify(msg)
            })
        },

        // 获取所有店员信息
        async getShopEmployeeByPageAsync(context, { curPage = 1, eachPage = 10 } = {}){
            const data = await fetch(`/shopEmployee/getShopEmployeeByPage?curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
            context.commit("getShopEmployeeByPage",data)
        },
    }
  }