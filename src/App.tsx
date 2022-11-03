import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Header } from './components/Header';
import { Form } from './components/Form';
import { TaskListStatus } from './components/TaskListStatus';
import { TaskItem } from './components/TaskItem';
import { NoTask } from './components/NoTask';

import styles from './App.module.css';

import './global.css';

const taskList = [
    {
        id: '75442486-0878-440c-9db1-a7006c25a39f',
        isComplete: false,
        content: 'Estudar para IASC'
    },
    {
        id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
        isComplete: false,
        content: 'Fazer projeto do Ignite'
    },
    {
        id: 'cdb63720-9628-5ef6-bbca-2e5ce6094f3c',
        isComplete: true,
        content: 'Comprar comida'
    }
];

export function App() {
	const [tasks, setTasks] = useState(taskList);

    function deleteTask(taskId: string) {
        const newTaskList = tasks.filter(item => item.id !== taskId);
        setTasks(newTaskList);
    }

    function checkCompleteTask(taskId: string) {
        const newTaskList = [...tasks];

        const taskToCheck = newTaskList.find(item => item.id === taskId);

        if (taskToCheck) {
            taskToCheck.isComplete = !taskToCheck.isComplete;
        } else {
            console.log('Erro L35 - TaskList.tsx');
        }

        // Sorting by done tasks
        const newTaskListSorted = newTaskList.sort((t, f) =>  (f.isComplete === t.isComplete) ? 0 : f.isComplete ? -1 : 1);

        setTasks(newTaskListSorted);
    }

	function addNewTask(newTaskContent: string) {
		let newTaskList = [...tasks];
		
		const newTask = {
			id: uuid(),
			content: newTaskContent,
			isComplete: false
		};

		newTaskList.push(newTask);

		// Sorting by done tasks
        const newTaskListSorted = newTaskList.sort((t, f) =>  (f.isComplete === t.isComplete) ? 0 : f.isComplete ? -1 : 1);

		setTasks(newTaskListSorted);
	}

	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Form
					onClickAddNewTask={addNewTask}
				/>

				<TaskListStatus tasks={tasks} />

				{tasks.length === 0
					? <NoTask />
					: (
						<div className={styles.taskList}>
							{tasks.map(task => (
								<TaskItem
									key={task.id}
									task={task}
									onChangeCompleteTask={checkCompleteTask}
									onDeleteTask={deleteTask}
								/>
							))}
						</div>
					)}
			</div>
		</>
	);
}

export default App;
