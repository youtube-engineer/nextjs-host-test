// "use server";
// 非同期処理を行いたい場合の例


export const dynamic = 'force-dynamic';

export default async function Home() {

  const now = new Date().toLocaleTimeString(); // 非同期処理（ただし、これは非同期で行う必要はありません）

  return (
    <div>
      <h1>server component</h1>
      <p>Current time: {now}</p>
    </div>
  );
}
