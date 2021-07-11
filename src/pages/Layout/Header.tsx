import { supabase } from "../../util/supabase";
import {useEffect} from "react";

const Header = () => {

    useEffect(() => {
        (async () => {
            const user = supabase.auth.user();
            console.log(user)
        })();
    }, []);

    return (
        <header>
            <div className="w-full flex">
                <div className=""></div>
                <div className="">
                </div>
            </div>
        </header>
    );
};

export default Header;