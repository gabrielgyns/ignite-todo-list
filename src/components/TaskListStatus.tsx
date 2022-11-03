import styles from './TaskListStatus.module.css';

interface TaskListProps {
    tasks: {
        isComplete: boolean;
    }[];
}

export function TaskListStatus({ tasks }: TaskListProps) {
    const tasksCompleted = () => tasks.reduce((acc, curr) => {
        let aux = acc;
        if (curr.isComplete) aux = aux + 1;
        return aux;
    }, 0);

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.info__created}>
                    <strong>Tarefas criadas</strong>
                    <span>{tasks.length}</span>
                </div>

                <div className={styles.info__completed}>
                    <strong>Concluídas</strong>
                    <span>{tasksCompleted()}</span>
                </div>
            </div>
        </div>
    );
}