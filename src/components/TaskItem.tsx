import { Trash } from 'phosphor-react';

import styles from './TaskItem.module.css';

interface TaskItemProps {
    task: {
        id: string;
        isComplete: boolean;
        content: string;
    },
    onChangeCompleteTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function TaskItem({ task, onChangeCompleteTask, onDeleteTask }: TaskItemProps) {

    function handleCompleteTask() {
        onChangeCompleteTask(task.id);
    }

    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    return (
        <div className={styles.task}>
            <div>
                <input
                    type="checkbox"
                    name="complete"
                    id="complete"
                    checked={task.isComplete}
                    onChange={handleCompleteTask}
                />
                
                <p
                    className={task.isComplete ? styles.taskComplete : styles.taskNotComplete}
                >
                    { task.content }
                </p>
            </div>

            <button onClick={handleDeleteTask}>
                <Trash size={20} />
            </button>
        </div>
    );
}
