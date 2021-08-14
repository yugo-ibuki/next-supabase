import { NextPage } from "next";
import { useForm } from "react-hook-form"
import { Form } from "../components/Form";
import { supabase } from "../util/supabase";

type IForm = {
    email: string;
    password: string;
};

const Signin: NextPage = () => {
    const { register, handleSubmit } = useForm<IForm>();
    const handleSignin = async ({ email, password }: IForm) => {
        const { error } = await supabase.auth.signIn({ email, password});
        console.log(error)
    };

    const inputList = [
        { type: "email", name: "email"},
        { type: "password", name: "password"},
    ];

    return (
        <div>
            <Form
                onSubmit={handleSubmit(handleSignin)}
                inputList={inputList}
                register={register}
                buttonText="サインイン"
            />
        </div>
    );
};

export default Signin;
