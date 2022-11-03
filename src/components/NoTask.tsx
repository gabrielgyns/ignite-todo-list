import ClipboardImg from '../assets/clipboard.svg';

import styles from './NoTask.module.css';

export function NoTask() {
    return (
        <div className={styles.wrapper}>
            <img src={ClipboardImg} />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br />
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    );
}