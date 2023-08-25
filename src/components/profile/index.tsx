import React from "react";
import { AxiosResponse } from "axios";
import { fetchTodos } from "@/services/todoService";
import { useQuery } from 'react-query';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const Profile = () => {
    
    const { data, error, isLoading} = useQuery<AxiosResponse<any>,Error>(['todos'],fetchTodos);

    return (
        <div>
            <h1>profile</h1>
            <button >Refresh</button>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {data && (
                <ul>
                   {JSON.stringify(data.data)}
                </ul>
            )}
        </div>
    );
};

export default Profile;



// import React from "react";
// import { AxiosResponse } from "axios";
// import { fetchTodos } from "@/services/todoService";

// interface Todo {
//     id: number;
//     title: string;
//     completed: boolean;
// }

// const Profile = ({ data, error }) => {
//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <div>
//             <h1>Profile</h1>
//             <ul>
//                 {data && data.map((todo) => (
//                     <li key={todo.id}>{todo.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export async function getServerSideProps() {
//     try {
//         const response: AxiosResponse<Todo[]> = await fetchTodos();
//         const data = response.data;

//         return {
//             props: {
//                 data,
//             },
//         };
//     } catch (error) {
//         return {
//             props: {
//                 error: { message: "An error occurred while fetching data." },
//             },
//         };
//     }
// }

// export default Profile;
