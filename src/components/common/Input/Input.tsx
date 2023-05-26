import { useController } from 'react-hook-form';
import styles from './Input.module.scss';

interface Props {
    placeholder: string;
    name: string;
    validations: any;
}

const Input: React.FC<Props> = ({ placeholder, name, validations }) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations });

    return (
        <div className={styles.wrapper}>
            <input
                className={`${styles.input} ${error && styles.error}`}
                type='text'
                {...field}
                placeholder={placeholder}
            />
            <span>{error && error.message}</span>
        </div>
    );
};

export default Input;