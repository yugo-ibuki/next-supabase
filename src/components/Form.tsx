import { FC } from "react";
import {log} from "util";

type IProps = {
    onSubmit: any;
    buttonText: string;
    register: any;
    inputList: {
        name: string;
        type: string;
    }[];
};

export const Form: FC<IProps> = ({ onSubmit, buttonText, inputList , register}) => {
    return (
        <form onSubmit={onSubmit}>
            {inputList.map((props) => (
                <label key={props.name}>
                    <span>{props.name}</span>
                    <input
                        {...props}
                        {...register(props.name, { required: true })}
                    />
                </label>
            ))}
            <button type="submit">{buttonText}</button>
        </form>
    );
};