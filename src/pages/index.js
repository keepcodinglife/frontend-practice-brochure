import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';

const TITLE = translate({
  id: "pages.main.title",
  message: '前端修炼小册',
  description: "The main title in the first page"
})

const DESCRIPTION = translate({
  id: "pages.main.description",
  message: 'Mondo',
  description: "The main description in the first page"
})

const KEYWORDS = ['前端', '进阶', 'Vue', 'React', 'JavaScript', 'HTML', 'css', 'JS']


const HEADER = translate({
  id: "pages.main.datagit",
  message: '前端修炼小册',
  description: "The name of the project"
})

const SUB_HEADER = translate({
  id: "pages.main.tagline",
  message: '不积硅步，无以至千里。',
  description: "The tagline of the project"
})

const GET_STARTED = translate({
  id: "pages.main.getStarted",
  message: 'JUST DO IT',
  description: "The get started button"
})

function Home() {
  return (
    <Layout
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
    >
      <header className={styles.header}>
        <div className="container">
          <div className={clsx(styles.header_row, "row")}>
            <div className={clsx(styles.header_row_col__6_col__offset_1, "col col--6 col--offset-1")}>
              <img className={styles.header_row_col__6_col__offset_1__img} src='img/working_from_anywhere.svg' alt='Programmer' />
            </div>
            <div className={clsx(styles.header_row_col__4_col__offset_1, "col col--4 col--offset-1")}>
              <h1 className={styles.header_row_col__4_col__offset_1__title}>{HEADER}</h1>
              <p className={styles.header_row_col__4_col__offset_1__subtitle}>{SUB_HEADER}</p>
              <div className={styles.buttons}>
                <Link
                  className={clsx('button button--outline button--primary button--lg', styles.header_row_col__4_col__offset_1__getStarted,)}
                  to={useBaseUrl('/docs/intro')}>
                  {GET_STARTED}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
