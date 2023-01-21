import { Dispatch, FC, SetStateAction, MouseEvent } from "react";
import styles from './Sidebar.module.scss';

interface ISidebar {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebar: boolean;
}

export const Sidebar: FC<ISidebar> = ({sidebar, setSidebar}) => {

  return (
    <div
      onClick={() => setSidebar(false)}
      className={sidebar ? styles.sidebarActive : styles.sidebar}
    >
      <aside
        onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
        className={sidebar ? styles.asideActive : styles.aside} >
        Sidebar
      </aside>
    </div>
  );
};
