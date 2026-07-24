import PriorityBadge from './PriorityBadge.jsx';
import StatusBadge from './StatusBadge.jsx';

export default function TicketDetail({ ticket }) {
  return (
    <section className="card">
      <h2>Selected Ticket</h2>
      <h3>{ticket.title}</h3>

      <div className="badge-row">
        <PriorityBadge priority={ticket.priority} />
        <StatusBadge status={ticket.status} />
      </div>

      <dl className="detail-list">
        <div>
          <dt>Ticket ID</dt>
          <dd>{ticket.id}</dd>
        </div>
        <div>
          <dt>Category</dt>
          <dd>{ticket.category}</dd>
        </div>
        <div>
          <dt>Created by</dt>
          <dd>{ticket.createdBy}</dd>
        </div>
        <div>
          <dt>Created at</dt>
          <dd>{ticket.createdAt}</dd>
        </div>
      </dl>
    </section>
  );
}
