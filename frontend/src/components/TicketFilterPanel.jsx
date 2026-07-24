export default function TicketFilterPanel({
  searchText,
  statusFilter,
  priorityFilter,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
}) {
  return (
    <section className="filter-panel" aria-label="Ticket filters">
      <label>
        Search
        <input
          type="search"
          placeholder="Search by title or category"
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>

      <label>
        Status
        <select
          value={statusFilter}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          <option value="ALL">All statuses</option>
          <option value="OPEN">Open</option>
          <option value="IN_PROGRESS">In progress</option>
          <option value="RESOLVED">Resolved</option>
        </select>
      </label>

      <label>
        Priority
        <select
          value={priorityFilter}
          onChange={(event) => onPriorityChange(event.target.value)}
        >
          <option value="ALL">All priorities</option>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
          <option value="URGENT">Urgent</option>
        </select>
      </label>
    </section>
  );
}
