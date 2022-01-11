
import axios from "axios";


async function getData(userID){
    const{data:Users}=await axios("https://jsonplaceholder.typicode.com/users/"+userID);
    const{data:Posts}=await axios("https://jsonplaceholder.typicode.com/posts/"+userID);
    console.log("Kullanıcı Bilgileri:\n",Users,"\n Post Bilgileri:\n",Posts);

};



export default getData;