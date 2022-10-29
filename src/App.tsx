import { PlusCircle } from "phosphor-react";
import styles from "./App.module.scss";
import { Logo } from "./components/Logo";
import { ListHeader } from "./components/ListHeader";
import { Task } from "./components/Task";

function App() {
  return (
    <div>
      <Logo />

      <main className={styles.container}>
        <form className={styles.form}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar <PlusCircle weight="bold" />
          </button>
        </form>

        <ListHeader totalTasksCount={15} completedTasksCount={7} />

        {/* <EmptyList /> */}

        <div>
          <Task
            id="1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Task
            id="2"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta exercitationem officia placeat dolorem excepturi sunt atque voluptate porro. Esse repellendus, non quasi quibusdam magnam quam fuga ipsam temporibus sint deserunt?"
          />
          <Task
            id="2"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta exercitationem officia placeat dolorem excepturi sunt atque voluptate porro. Esse repellendus, non quasi quibusdam magnam quam fuga ipsam temporibus sint deserunt?"
          />
          <Task
            id="1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Task
            id="2"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta exercitationem officia placeat dolorem excepturi sunt atque voluptate porro. Esse repellendus, non quasi quibusdam magnam quam fuga ipsam temporibus sint deserunt?"
          />
          <Task
            id="2"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta exercitationem officia placeat dolorem excepturi sunt atque voluptate porro. Esse repellendus, non quasi quibusdam magnam quam fuga ipsam temporibus sint deserunt?"
          />
          <Task
            id="1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Task
            id="2"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta exercitationem officia placeat dolorem excepturi sunt atque voluptate porro. Esse repellendus, non quasi quibusdam magnam quam fuga ipsam temporibus sint deserunt?"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
