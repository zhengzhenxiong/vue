

export default {
    namespaced: true,//命名空间
    mutations: {

    },
    actions: {
        async loginAsync(context, { userAcount, userPwd, userType } = {}) {
            const data = await fetch(`/loginuser`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `userAcount=${userAcount}&userPwd=${userPwd}&userType=${userType}`
                }
            )
                .then(response => response.json())
            context.commit("allmess", data)
        },
    }

}