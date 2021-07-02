import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { supabase } from "../util/supabase";

type IForm = {
    email: string;
    password: string;
    passwordConf: string;
};

const Signup: NextPage = () => {
    const { register, handleSubmit } = useForm<IForm>();
    const handleSignup = ({ email, password }: IForm) => {
        supabase.auth.signUp({ email, password });
    };

    const inputList = [
        { type: "email", name: "email"},
        { type: "password", name: "password"},
        { type: "password", name: "passwordConf"},
    ];

    return (
        <Form
            onSubmit={handleSubmit(handleSignup)}
            inputList={inputList}
            register={register}
            buttonText="サインアップ"
        />
    );
};

export default Signup;