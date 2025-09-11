import { useParams } from "react-router-dom";

function Team() {
  const { teamId } = useParams();
  const teamDetails = {
    "1": { name: "Team A", description: "ta" },
    "2": { name: "Team B", description: "tb" },
    "3": { name: "Team C", description: "tc" },
  };
  const team = teamDetails[teamId!];
  if (!team) {
    return <div>Ko tim thay</div>;
  }
  return (
    <div>
      <h2>{team.name}</h2>
      <p>{team.description}</p>
    </div>
  );
}

export default Team;
