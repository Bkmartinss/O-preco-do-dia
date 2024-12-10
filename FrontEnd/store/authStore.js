import {create} from 'zustand';

const useAuthStore = create((set) => ({
    userLogado: false,
    user:"",
    pass:"",
    token: "",
    mensagemError:"",

    login: async (user, pass) =>{
        try {
            const loginResponse = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  
                  username: user,//'emilys',
                  password: pass,//'emilyspass',
                
                }),
                credentials: 'include' // Include cookies (e.g., accessToken) in the request
            })
            const loginData = await loginResponse.json()

            if (loginData.message != '' || loginData.message != undefined){
               console.log('erro', loginData.message); 
               set({mensagemError: `Ocorreu um erro: ${loginData.message}`});
            }

            if (loginData.accessToken){
                set({userLogado: true, user:user, pass:pass, token:loginData.accessToken})
            }
            console.log('loginData', loginData);
        } catch (error) {
            set({ mensagemError: 'Erro ao realizar o login. Tente novamente.' });
        }
    }
}));

export default useAuthStore;