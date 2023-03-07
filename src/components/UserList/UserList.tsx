import { useEffect, useState } from "react";
import apiClient from "../../common/api";
import { ITodo, IUser } from "../../common/models";
import "../../style.css"

const UserList = (props: ITodo) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const getUser = async () => {
        try {
            const res = await apiClient.get<IUser[]>(`/users?id=${props.userId}`);
            setUsers(res.data);
        } catch (error) {
            console.log({ error });
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (

        <div >
            <div>
                {users.map((user) => (
                    <div className={(props.completed) ? "users-info" : "users-info2"} key={user.id}>
                        <h3>{user.email}</h3>
                        <p><b>{user.name}</b></p>
                        <p>{props.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;