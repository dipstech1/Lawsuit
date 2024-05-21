export interface FormField {
    data: FormFieldJSON[];
}

export interface FormFieldJSON {
    name: string;
    label: string;
    value: string | boolean | number;
    type: string;
    validators?: ValidatorJSON[];
    options: OptionJSON[];
    heading?:string;
}

export interface ValidatorJSON {
    name: string;
    validator: string;
    message: string;
    email?: boolean;
    minLength?: boolean;
    maxLength?: boolean;
    pattern?: string;
}

interface OptionJSON {
    label: string;
    value: string;
}