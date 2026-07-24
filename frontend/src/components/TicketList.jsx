import PriorityBadge from './PriorityBadge.jsx';
import StatusBadge from './StatusBadge.jsx';

export default function TicketList({
  tickets,
  selectedTicketId,
  onSelectTicket,
}) {
  return (
    <section className="card">
      <h2>Tickets</h2>
      <div className="ticket-list">
        {tickets.map((ticket) => (
          <button
            className={`ticket-row ${
              ticket.id === selectedTicketId ? 'selected' : ''
            }`}
            key={ticket.id}
            type="button"
            onClick={() => onSelectTicket(ticket)}
          >
            <strong>{ticket.title}</strong>
            <span>{ticket.category}</span>
            <span className="badge-row">
              <PriorityBadge priority={ticket.priority} />
              <StatusBadge status={ticket.status} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
