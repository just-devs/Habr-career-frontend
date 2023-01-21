import { FC } from "react";
import Link from "next/link";
import styles from './Navbar.module.scss';
import { Button } from "@components/ui";

export const Navbar: FC = () => {
    return (
      <div className={styles.navbar}>
          <div className={styles.navbarLayout}>
              <nav>
                  <ul>
                      <li><Link className={styles.link} href='/'>Вакансии</Link></li>
                      <li><Link className={styles.link} href='/'>Специалисты</Link></li>
                      <li><Link className={styles.link} href='/'>Компании</Link></li>
                      <li><Link className={styles.link} href='/'>Рейтинг</Link></li>
                      <li><Link className={styles.link} href='/'>Зарплаты</Link></li>
                      <li><Link className={styles.link} href='/'>Образование</Link></li>
                      <li><Link className={styles.link} href='/'>Журнал</Link></li>
                  </ul>
              </nav>
              <Button className={styles.navbarButton} >Войти</Button>
          </div>

      </div>

    );
};
