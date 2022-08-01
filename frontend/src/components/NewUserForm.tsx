import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
 
const CREATE_USER = gql`
     
mutation($name: String!){
    create_item(name: $name) {
    id,
    name
  } 
}
`;

export function NewUserForm(){
    const [ userName, setName] = useState('')
    const [CreateUser, { data, loading, error }] = useMutation(CREATE_USER);

   async function handleCreateUser(e: FormEvent){
        e.preventDefault()
        if(!userName){
            return;
        }   
         
        await CreateUser({variables: {name: userName}})

        console.log(data)

    }

    return(
        <form onSubmit={handleCreateUser}>
            <input type="text" value={userName} onChange={e => setName(e.target.value)}/>
            <button type="submit">Create User</button>
        </form>
    )
}