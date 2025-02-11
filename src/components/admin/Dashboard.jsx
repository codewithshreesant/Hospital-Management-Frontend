import { Link, Outlet } from "react-router-dom";
import { BarChart } from '@mui/x-charts/BarChart';

const navigations = [
  {
    name: 'Users',
    path: '/dashboard/users'
  },
  {
    name: 'Services',
    path: '/dashboard/services'
  },
  {
    name: 'Doctors',
    path: '/dashboard/doctors'
  },
  {
    name: 'News',
    path: '/dashboard/news'
  },
  {
    name: 'Blogs',
    path: '/dashboard/blogs'
  },
  {
    name: 'Contacts',
    path: '/dashboard/contacts'
  },
  {
    name: 'Appointments',
    path: '/dashboard/appointments'
  }
]

function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        {/* Sidebar Content (Logo, Navigation) */}
        <div className="p-4">
          <h2 className="text-[1.3rem] font-bold">
            <Link to='/dashboard'>Hospital Management</Link>
          </h2>
        </div>
        <ul className="list-reset flex flex-col items-center gap-[2rem]">
          <li className="p-2 hover:bg-gray-700">
          <Link to='/dashboard' className="text-white font-bold">Dashboard</Link>
          </li>
          {
            navigations.map((navigate, index) => {
              return <li key={index}>
                <Link to={navigate.path}>{navigate.name}</Link>
              </li>
            })
          }
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header (Search, User Info) */}
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <input type="text" placeholder="Search for..." className="border p-2 rounded" />
          </div>
          <div className="flex items-center">
            {/* User Info */}
            <span className="mr-3">Logged in as: Admin</span>
            {/* You might include a user avatar here */}
          </div>
        </header>

        {/* Content Area (Cards, Charts, Table) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Cards */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Primary Card</h3>
            {/* ... card content ... */}
          </div>
          {/* ... other cards ... */}
        </div>

        <div className="mt-6">
          {/* Charts */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">Area Chart Example</h3>
            <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
          {/* ... other charts ... */}
        </div>

        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;