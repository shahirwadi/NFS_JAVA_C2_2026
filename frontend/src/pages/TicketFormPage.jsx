import { Link } from 'react-router';
import TicketFormWizard from '../components/TicketFormWizard.jsx';

export default function TicketFormPage() {
  return (
    <>
      <section className="card welcome-card">
        <div>
          <p className="eyebrow">Support Desk</p>
          <h2>New Ticket</h2>
          <p>Create a support request from this protected page.</p>
        </div>
        <Link className="button-link secondary" to="/app/dashboard">
          Back to Dashboard
        </Link>
      </section>

      <TicketFormWizard />
    </>
  );
}
