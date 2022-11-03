import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './Form.module.css';

interface FormProps {
    onClickAddNewTask: (newTaskContent: string) => void;
}

export function Form({ onClickAddNewTask }: FormProps) {
	const [newTask, setNewTask] = useState('');

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('');
		setNewTask(event.target.value);
	}

	function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function handleAddNewTask(event: FormEvent) {
        event.preventDefault();

        setNewTask('');
        onClickAddNewTask(newTask);
    }

	const isNewTaskEmpty = newTask.length === 0;

    return (
        <form className={styles.form} onSubmit={handleAddNewTask}>
            <input
                type="text"
                value={newTask}
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />

            <button
                type='submit'
                disabled={isNewTaskEmpty}
            >
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    );
}