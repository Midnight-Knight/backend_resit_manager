import My_Api from '@/my_api';

export async function generateStaticParams() {
  const data = await My_Api.getCheckDepartments();
  return data.map((elem) => {
    return { department: elem.department };
  });
}

export const dynamicParams = false;
export const revalidate = 10;

export default function DepartmentLayout({ children }) {
  return children;
}
