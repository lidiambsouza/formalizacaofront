import { environment } from 'src/environments/environment';
export let API_URL = "";
if(environment.production){
    API_URL = "http://formalizacao.com"
}else
{
   // API_URL = "http://unicalara.com"
   API_URL = "http://localhost:8000"
}
export let API_ENDPOINT = 
{
    
    "pesquisar/cpf" : API_URL  + "/api/pesquisar/cpf",
    "pesquisar/phone" : API_URL  + "/api/pesquisar/phone",
    "usuarios" : API_URL + "/api/users",
    "usuarios/online" : API_URL + "/api/users/online",
    "usuarios/criar" : API_URL + "/api/users/create",
    "usuarios/changePass" : API_URL + "/api/users/changePass",
    "usuarios/toggleActive" : API_URL + "/api/users/toggleActive",
    "usuarios/delete" : API_URL + "/api/users/delete",
    "usuarios/updateTeam" : API_URL + "/api/users/updateTeam", 
    "logs" : API_URL + "/api/logs",
   
};

