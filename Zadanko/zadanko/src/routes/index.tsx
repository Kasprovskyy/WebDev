import { createFileRoute, Link } from "@tanstack/react-router";
import users from "../users.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div>
        <h1>Baza danych użytkowników</h1>
        <Link to="/users">Przejdź do bazy</Link>
      </div>
    </>
  );
}
