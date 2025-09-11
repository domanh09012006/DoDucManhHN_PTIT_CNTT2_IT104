import { Link } from 'react-router-dom'
function TeamsIndex() {
  const teams = [
    { id: '1', name: 'Team A' },
    { id: '2', name: 'Team B' },
  ]
  return (
    <div>
      <h2>Teams List</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamsIndex
