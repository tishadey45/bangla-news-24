import Link from "next/link";


interface Navs {
    slug: string
    title: string
    topicId: string | null
    url:string
    scrapable: boolean
}

export default async function NavLinks() {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    const navs:Navs[] = data.data;
    console.log(navs);
    const filterNavs = navs.filter((n)=>n.scrapable);
  return (
    <div className="justify-center w-full flex gap-5 mt-5 ">
        <Link href="/">হোম</Link>

      {filterNavs.map((n,i)=><Link key={i} href={`/category/${n.slug}`}>{n.title}</Link>)}
    </div>
  );
}