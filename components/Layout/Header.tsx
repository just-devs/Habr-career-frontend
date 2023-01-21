import { FC, useState } from "react";
import { Button } from 'components/ui';
import { Menu } from "@assets/icon";

import styles from './Header.module.scss';
import { Sidebar } from "../Sidebar/Sidebar";



export const Header: FC<{subTitle?: string}> = ( {subTitle = 'Карьера'}) => {

  const [sidebar, setSidebar] = useState<boolean>(false);

  return (
      <>
        <header className={styles.header}>
          <div className={styles.headerLayout}>
            <div className={styles.headerTitle}>
              <div
                className={styles.headerMenu}
                onClick={() => setSidebar(true)}>
                <Menu />
              </div>
              <h1 className={styles.headerLogo}><span>Хабр</span> {subTitle}</h1>
            </div>
            <Button className={styles.headerButton} >Войти</Button>
          </div>

        </header>
        <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
      </>

    );
};
