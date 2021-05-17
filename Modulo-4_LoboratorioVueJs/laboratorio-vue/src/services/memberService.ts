import { Member } from '@/types/index'

export const getMembers = async (companyName:string): Promise<Member[]> => {
    const response = await  fetch(`https://api.github.com/orgs/${companyName}/members`);
    
    if (response.ok){
      return await response.json();
    }else {
      throw Error("Error en la respuesta")
    }
  };
  
  export const getMember = async (id: string): Promise<Member> => {
    const response = await fetch(`https://api.github.com/users/${id}`);

    if (response.ok){
      return await response.json();
    }else {
      throw Error("Error en la respuesta")
    }
  };