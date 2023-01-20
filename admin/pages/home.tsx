import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', users: 1000 },
  { month: 'Feb', users: 800 },
  { month: 'Mar', users: 600 },
  { month: 'Apr', users: 700 },
  { month: 'May', users: 900 },
  { month: 'Jun', users: 1200 },
  { month: 'Jul', users: 1500 },
];

const home = () => {
  return (
    <div>
      <h2>Number of Users per Month</h2>
      <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="month"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="users" fill="#8884d8" />
      </BarChart>
    </div>
  )
}

export default home;