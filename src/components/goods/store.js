export default {
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 5,
        maxPage: 0,
        total: 0,
        rows: []
    },
    mutations: {
        getGoodsByPage(state, payload) {
            Object.assign(state, payload)
        },
        setCurPage(state, curPage) {
            state.curPage = curPage
        },
        setEachPage(state, eachPage) {
            state.eachPage = eachPage
        },
    },
    actions: {
        // 列表
        async getGoodsByPageAsync(context, { curPage = 1, eachPage = 5 } = {}) {
            const data = await fetch(`/goods/getGoods?curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
            context.commit("getGoodsByPage", data)
        },
        // 新增
        async addGoodsAsync(context, goods) {
            const data = await fetch(`/goods/addGoods`, {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(goods)
            })

        },
        // 修改
        async upDateGoodsAsync(context, goods) {
            const data = await fetch(`/goods/updateById`, {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(goods)
            })

        },
        // 删除
        async deleteGoodsByIdAsync(context, goods) {
            const data = await fetch(`/goods/deleteGoodsById`, {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(goods)
            })

        },
        // 搜索
        async searchGoodsAsync(context,conditions) {
           const {searchText}=conditions
        let curPage = 1, eachPage = 5
            const data = await fetch(`/goods/searchGoods?&searchText=${searchText}&curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
            context.commit("getGoodsByPage", data)
        },
    }
}