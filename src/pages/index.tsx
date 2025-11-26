import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home()
{
  return(
    <Layout title="ぐみ" description="ぐみの開発室">
      <main className={styles.localMain}>

<div className={styles.headWhiteBlock} />

<div className={styles.gumi278}>

<div className={styles.kakkoBox}>
  
<div className={styles.localContainer}>

<img
  src="/gumi278.png"
  alt="GitHub Avatar"
  className={styles.avatar}
/>

<div className={styles.textBlock}>
  <p className={styles.nowrapBase}><strong className={styles.myname}>ぐみ</strong> | 個人開発者</p>
  <p>私の小さな開発室へようこそ。</p>
  <p>自作のツールをあれこれしています。</p>
  <p>なんか納得いかなくて改造中。</p>
</div>
  
</div>
</div>
</div>

<div className={styles.tailWhiteBlock} />

      </main>
    </Layout>
  );
}

