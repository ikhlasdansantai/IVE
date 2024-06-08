export default function Layout({ children, comment }: { children: React.ReactNode; comment: React.ReactNode }) {
  return (
    <>
      <>{children}</>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <>{comment}</>
      </div>
    </>
  );
}
