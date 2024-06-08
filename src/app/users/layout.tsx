export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ul>
        <li>Home Dashboard</li>
        <li>About Dashboard</li>
        <li>Settings Dashboard</li>
      </ul>
      {children}
    </>
  );
}
