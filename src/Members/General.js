import ActionAreaCard from "./ActionAreaCard";
import "./general.css"; // Your CSS file

export default function General() {
  const members = [
    { name: "Eyad Abufares", role: "Founder & Team Lead" },
    { name: "Ziad Qafisheh", role: "Vice Chair" },
    { name: "Reham Tariq", role: "PR Lead" },
    { name: "Lelas Al-Frehat", role: "EC Lead" },
    { name: "Alaa Hassan", role: "SM & Production Lead" },
    { name: "Almajd Abuassaf", role: "HR Lead" },
    { name: "Salma Al-Arnaout", role: "Design Lead" },
    { name: "Rana Shari", role: "Academic Lead" },
    { name: "Layth Alkhateeb", role: "Member" },
    { name: "Noor Al-Natsheh", role: "Member" },
    { name: "Faten Al-Shouyat", role: "Member" },
    { name: "Ghaleb Shehab", role: "Member" },
    { name: "Faris Ahmad", role: "Member" },
    { name: "Ahmad Salah", role: "Member" },
    { name: "Ami Alraqab", role: "Member" },
    { name: "Basil Ghazzawi", role: "Member" },
    { name: "Zaid Ghassan", role: "Member" },
    { name: "Sanad Silme", role: "Member" },
  ];

  const teamLeads = members.filter(
    (m) => m.role.includes("Founder") || m.role.includes("Vice Chair")
  );

  const leaders = members.filter(
    (m) =>
      m.role.includes("Lead") &&
      !m.role.includes("Founder") &&
      !m.role.includes("Chair")
  );

  const normalMembers = members.filter((m) => m.role === "Member");

  return (
    <div className="container">
      <h3 className="section-title">Team Leader & Vice Chair</h3>
      <div className="team-grid team-leaders">
        {teamLeads.map((person, index) => (
          <div key={index} className="card-container">
            <ActionAreaCard name={person.name} place={person.role} />
          </div>
        ))}
      </div>

      <h3 className="section-title">Leaders Of Teams</h3>
      <div className="team-grid leaders">
        {leaders.map((person, index) => (
          <div key={index} className="card-container">
            <ActionAreaCard name={person.name} place={person.role} />
          </div>
        ))}
      </div>

      <h3 className="section-title">Members</h3>
      <div className="team-grid members">
        {normalMembers.map((person, index) => (
          <div key={index} className="card-container">
            <ActionAreaCard name={person.name} place={person.role} />
          </div>
        ))}
      </div>
    </div>
  );
}
