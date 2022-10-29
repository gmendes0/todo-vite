import { PlusCircle } from "phosphor-react";
import styles from "./App.module.scss";
import { Logo } from "./components/Logo";
import { ListHeader } from "./components/ListHeader";
import { Task } from "./components/Task";
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { EmptyList } from "./components/EmptyList";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem("todo-ignite");

      if (storedTasks) setTasks(JSON.parse(storedTasks));
    } catch (err) {
      console.error("Não foi possível recuperar as tarefas armazenadas");
      console.error(err);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0)
      localStorage.setItem("todo-ignite", JSON.stringify(tasks));
  }, [tasks]);

  const completedTasks = useMemo(
    () => tasks.reduce((acc, task) => acc + (task.isCompleted ? 1 : 0), 0),
    [tasks]
  );

  const handleToggleTaskIsCompleted = useCallback((id: string) => {
    setTasks((state) =>
      state.map((task) =>
        task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : { ...task }
      )
    );
  }, []);

  const handleDeleteTask = useCallback((id: string) => {
    setTasks((state) => state.filter((task) => task.id !== id));
  }, []);

  function handleNewTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);

    event.target.setCustomValidity("");
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTaskData = {
      id: uuidv4(),
      description: newTask,
      isCompleted: false,
    };

    setTasks((state) => [...state, newTaskData]);

    // localStorage.setItem("todo-ignite", JSON.stringify(newTaskData));

    setNewTask("");
  }

  function handleInvalidNewTaskInput(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Por favor, digite algo");
  }

  const totalTasksCount = tasks.length;

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
