interface MostReadNews {
  id: string;
  title: string;
}

export default async function MostRead() {
     const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
console.log(data)
  const news: MostReadNews[] = data.data;
  console.log(news);
  return (
     <div className="card p-2 bg-base-100 border border-gray-300">
      <h1 className="font-bold text-red-700 mb-3">সর্বাধিক পঠিত</h1>

      <div className="grid gap-3">
        {news.map((n, i) => (
          <div className="flex gap-2 items-center" key={n.id}>
            <p className="text-2xl font-bold text-red-600">{i + 1}</p>{" "}
            <h2>{n.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}