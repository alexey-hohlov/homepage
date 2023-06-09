import { useController } from 'react-hook-form';
import styles from './TextArea.module.scss';
import { IValidations } from '../../../types/formTypes';

interface Props {
    placeholder: string;
    name: string;
    validations: IValidations;
}

const TextArea: React.FC<Props> = ({ placeholder, name, validations }) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, rules: validations });

    return (
        <div className={styles.wrapper}>
            <textarea
                className={`${styles.input} ${error && styles.error}`}
                {...field}
                placeholder={placeholder}
            ></textarea>
            {error && <span>{error.message}</span>}
        </div>
    );
};

export default TextArea;
