export const getMembers = (companyName) =>{
    return fetch(`https://api.github.com/orgs/${companyName}/members`)
            .then((response) => response.json());
} 


export const getMember = (id:string) => {
    return fetch(`https://api.github.com/users/${id}`)
    .then(response => response.json())
    .then(json => json);
}
