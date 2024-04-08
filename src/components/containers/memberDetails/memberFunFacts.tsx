export default function MemberFunFacts({funFacts}: {funFacts: string[]}) {
  return (
    <>
    <h2 className="mt-10 text-2xl">Fun Facts</h2>
    <ul className="mt-6 space-y-3">
      {funFacts.map((data: string, index: number) => (
          <li key={index} className="border-l-4 border-red-900 pl-2">
          {data}
        </li>
      ))}
    </ul>
      </>
  )
}
