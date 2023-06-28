import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();
  return <h1>{router.query.newsId}</h1>;
}
export default DetailPage;
