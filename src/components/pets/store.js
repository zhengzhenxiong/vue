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
        getPetsByPage(state, payload) {
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
        async getPetsByPageAsync(context, { curPage = 1, eachPage = 5 } = {}) {
            const data = await fetch(`/Pets/getPets?curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
            context.commit("getPetsByPage", data)
        },
        // 新增
        async addPetsAsync(context, Pets) {
            const data = await fetch(`/Pets/addPets`, {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(Pets)
            })

        },
        // 修改
        async upDatePetsAsync(context, pets) {
            const data = await fetch(`/pets/updateById`, {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(pets)
            })

        },
        // 删除
        async deletePetsByIdAsync(context, pets) {
            const data = await fetch(`/pets/deletePetsById`, {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(pets)
            })

        },
        // 搜索
        async searchPetsAsync(context,conditions) {
           const {searchText}=conditions
        let curPage = 1, eachPage = 5
            const data = await fetch(`/pets/searchPets?searchText=${searchText}&curPage=${curPage}&eachPage=${eachPage}`)
                .then(response => response.json())
            context.commit("getPetsByPage", data)
        },
    }
}