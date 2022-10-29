import { PlusCircle } from "phosphor-react";
import styles from "./App.module.scss";
import { Logo } from "./components/Logo";
import { ListHeader } from "./components/ListHeader";
import { Task } from "./components/Task";
import { ChangeEvent, FormEvent, InvalidEvent, useMemo, useState } from "react";
import { EmptyList } from "./components/EmptyList";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", description: "Fazer compras", isCompleted: false },
    {
      id: "2",
      description: "Finalizar o módulo 1 de ReactJS ",
      isCompleted: true,
    },
  ]);

  const [newTask, setNewTask] = useState<string>("");

  const completedTasks = useMemo(
    () => tasks.reduce((acc, task) => acc + (task.isCompleted ? 1 : 0), 0),
    [tasks]
  );

  const totalTasksCount = tasks.length;

  function handleNewTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);

    event.target.setCustomValidity("");
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTasks((state) => [
      ...state,
      { id: uuidv4(), description: newTask, isCompleted: false },
    ]);

    setNewTask("");
  }

  function handleInvalidNewTaskInput(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Por favor, digite algo");
  }

  // callback
  function handleToggleTaskIsCompleted(id: string) {
    setTasks((state) =>
      state.map((task) =>
        task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : { ...task }
      )
    );
  }

  // callback
  function handleDeleteTask(id: string) {
    console.log(tasks.filter((task) => task.id !== id));

    setTasks((state) => state.filter((task) => task.id !== id));
  }

  return (
    <div>
      <Logo />

      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskInputChange}
            value={newTask}
            required
            onInvalid={handleInvalidNewTaskInput}
          />
          <button>
            Criar <PlusCircle weight="bold" />
          </button>
        </form>

        <ListHeader
          totalTasksCount={totalTasksCount}
          completedTasksCount={completedTasks}
        />

        {totalTasksCount === 0 ? (
          <EmptyList />
        ) : (
          <div>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onToggleIsCompleted={handleToggleTaskIsCompleted}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
