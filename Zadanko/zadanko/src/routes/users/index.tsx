import { createFileRoute, Link } from "@tanstack/react-router";
import users from "../../users.json";

export const Route = createFileRoute("/users/")({
  component: Index,
});

function Index() {
  return (
    <>
      <table>
        <tr>
          <th>User name</th>
        </tr>
        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <Link to={user.id} className="no-underline">
              Szczegóły
            </Link>
          </tr>
        ))}
      </table>
    </>
  );
}
