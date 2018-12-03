// 服务
export default {
    namespaced: true,   //命名空间
    state: {
        curPage: 1,
        eachPage: 5,
        maxPage: 0,
        total: 0,
        rows: []
    },
    mutations: {
        // 渲染同步方法
        getServeresByPage(state, payload) {
            Object.assign(state, payload)
        },
        setCurPage(state, curPage) {
            state.curPage = curPage
        },
        setEachPage(state, eachPage) {
            state.eachPage = eachPage
        }
    },
    actions: {
        // 渲染
        async getServeresByPageAsync(context, { curPage = 1, eachPage = 5 } = {}) {
            const data = await fetch(`/serveres/getServeresByPage?curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
            context.commit("getServeresByPage", data)
        },
        // 新增
        async addServeresAsync(context, msg) {
            await fetch(`/serveres/addServeres`, {
                method: 'post',    //请求方式
                headers: {      //请求头
                    "Content-type": "application/json"
                },
                body: JSON.stringify(msg)   //请求体,把获取到的数据转成Json格式
            })
        },
        // 修改
        async updateServeresAsync(context, msg) {
            await fetch(`/serveres/updateById`, {
                method: 'post',    //请求方式
                headers: {      //请求头
                    "Content-type": "application/json"
                },
                body: JSON.stringify(msg)
            })
        },
        // 删除
        async deleteServeresAsync(context, msg) {
            // console.log(msg)
            await fetch(`/serveres/delById`, {
                method: 'post',    //请求方式
                headers: {      //请求头
                    "Content-type": "application/json"
                },
                body: JSON.stringify(msg)
            })
        },
        // 搜索
        async searchServeresAsync(context, msg) {
            let curPage = 1, eachPage = 5
            const content=msg
            const data = await fetch(`/serveres/seachServeresByPage?searchText=${content}&curPage=${curPage}&eachPage=${eachPage}`)
            .then(response => response.json())
            context.commit("getServeresByPage", data)
            // console.log(data)
        }
    }
}