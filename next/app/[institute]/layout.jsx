import My_Api from '@/my_api';

export async function generateStaticParams() {
  const data = await My_Api.getCheckInstitute();
  return data.map((elem) => {
    return { institute: elem.institute };
  });
}

export const dynamicParams = false;
export const revalidate = 10;

export default function InstituteLayout({ children }) {
  return children;
}
