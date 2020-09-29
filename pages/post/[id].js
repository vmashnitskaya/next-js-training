import {useRouter} from "next/router";

export default function PostForID(){
    const router = useRouter();
    console.log(router);
    return <h1>Hello PostForID {router.query.id}</h1>
}