import { httpAxios } from "@/helper/axiosHelper";

export async function addTask(task){
    const result= await httpAxios.post("/api/works",task).then((response)=>response.data);
    return result;
}