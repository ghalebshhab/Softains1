import ActionAreaCard from "./ActionAreaCard";
import "./general.css"; // Your CSS file
import Me from "./photos/Me.png";
export default function General() {
  const members = [
    {
      name: "Eyad Abufares",
      role: "Founder & Team Lead",
      photo: "./photos/Me.png",
      W: "https://wa.me/962788352837",
      L: "/",
    },
    {
      name: "Ziad Qafisheh",
      role: "Vice Chair",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962780090698",
      L: "/",
    },
    {
      name: "Reham Tariq",
      role: "PR Lead",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962776042425",
      L: "/",
    },
    {
      name: "Lelas Al-Frehat",
      role: "EC Lead",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962797910381",
      L: "/",
    },
    {
      name: "Alaa Hassan",
      role: "SM & Production Lead",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962799230484",
      L: "/",
    },
    {
      name: "Almajd Abuassaf",
      role: "HR Lead",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962776492618",
      L: "/",
    },
    {
      name: "Salma Al-Arnaout",
      role: "Design Lead",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962799108666",
      L: "/",
    },
    {
      name: "Rana Shari",
      role: "Academic Lead",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962787783059",
      L: "/",
    },
    {
      name: "Layth Alkhateeb",
      role: "Member",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962770157450",
      L: "/",
    },
    {
      name: "Noor Al-Natsheh",
      role: "Member",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962787376342",
      L: "/",
    },
    {
      name: "Faten Al-Shouyat",
      role: "Member",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962791948211",
      L: "/",
    },
    {
      name: "Ghaleb Shehab",
      role: "Member",
      photo: Me,
      W: "https://wa.me/962791852089",
      L: "/",
    },
    {
      name: "Faris Ahmad",
      role: "Member",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962795111776",
      L: "/",
    },
    {
      name: "Ahmad Salah",
      role: "Member",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962795720868",
      L: "/",
    },
    {
      name: "Aml Alraqab",
      role: "Member",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/966549445460",
      L: "/",
    },
    {
      name: "Basil Ghazzawi",
      role: "Member",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962785482721",
      L: "/",
    },
    {
      name: "Sanad Silmi",
      role: "Member",
      photo: "./photos/Me.JPG",
      W: "https://wa.me/962791007465",
      L: "/",
    },
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
            <ActionAreaCard
              name={person.name}
              place={person.role}
              photo={person.photo}
              Wa={person.W}
              Li={person.L}
            />
          </div>
        ))}
      </div>

      <h3 className="section-title">Leaders Of Teams</h3>
      <div className="team-grid leaders">
        {leaders.map((person, index) => (
          <div key={index} className="card-container">
            <ActionAreaCard
              name={person.name}
              place={person.role}
              photo={person.photo}
              Wa={person.W}
              Li={person.L}
            />
          </div>
        ))}
      </div>

      <h3 className="section-title">Members</h3>
      <div className="team-grid members">
        {normalMembers.map((person, index) => (
          <div key={index} className="card-container">
            <ActionAreaCard
              name={person.name}
              place={person.role}
              photo={person.photo}
              Wa={person.W}
              Li={person.L}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
