import My_Api from '@/my_api';

export async function generateStaticParams() {
  const data = await My_Api.getAllDiscipline();
  return data;
}

export const dynamicParams = false;
export const revalidate = 10;

export default function DisciplineLayout({ children }) {
  return children;
}