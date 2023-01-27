import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./authcontextprovider";

const ProtectedRoute = ({children} : {children: React.ReactNode}) => {
    const router = useRouter();
    const { user } = useAuth();
    useEffect(() => {
        if (!user.uid) {
            router.push("/signin");
        }
    }, [router, user]);
    return (
        <div>
            {user ? children : 'You are not logged in'}
        </div>
    );
}
 
export default ProtectedRoute;